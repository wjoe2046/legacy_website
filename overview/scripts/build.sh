#!/bin/bash

#! chmod +x ./scripts/build.sh

#!push to staging at http://staging.covid-watch.org/articles/index.html:
    #! ./scripts/build.sh staging default

#!push to production at http://www.covid-watch.org/articles/index.html:
    #! ./scripts/build.sh live default


CLOUDFRONT_INVALIDATION_ID=E3DTRHAKABXKO3
LIVE_OR_STAGING=$1
AWSPROFILE=$2
NOBUILD=$3

if [ "$LIVE_OR_STAGING" = "staging" ]; then
  # Default invalidation ID is for the production environment.
  # If staging is specified, it needs to be overridden.
  CLOUDFRONT_INVALIDATION_ID=ERB7Y0Z7SNYIM
fi

argquit() {
  echo "Please run this script from the root development folder of the nuxt app."
  echo "Syntax: "
  echo "    ./scripts/build.sh [live|staging] <awsprofile> [nobuild]"
  echo ""
  echo "    live|staging: pick whether to deploy to live or staging"
  echo "    awsprofile: The name of your AWS profile. It should correspond to"
  echo "                a set of credentials in your ~/.aws/credentials"
  echo "                and config in ~/.aws/config files."
  echo ""
  echo "    nobuild: Specify this second argument if you have already performed"
  echo "             \`npm run generate\` and you just want to copy to S3."
  exit 1
}


if [ -z "$AWSPROFILE" ]; then
  echo "ERROR: <awsprofile> not provided."
  echo ""
  argquit
fi


if [ "$0" != "./scripts/build.sh" ]; then
  echo "ERROR: script not invoked in the correct directory."
  echo "Invoked as: $0"
  echo ""
  argquit
fi

if [ ! -z "$NOBUILD" ] && [ "$NOBUILD" != "nobuild" ]; then
  echo "ERROR: I don't understand the second positional argument: $NOBUILD"
  echo "The only valid value is \`nobuild\`"
  echo ""
  argquit
fi

FOLDERNAME=website

if [ -z "$LIVE_OR_STAGING" ]; then
  echo "ERROR: live|staging not selected"
  echo ""
  argquit
fi

if [ "$LIVE_OR_STAGING" = "live" ]; then
  BUCKETNAME=covidwatch
  CLOUDFRONT_INVALIDATION_ID=E3DTRHAKABXKO3
fi

if [ "$LIVE_OR_STAGING" = "staging" ]; then
  BUCKETNAME=covidwatch-staging
  CLOUDFRONT_INVALIDATION_ID=ERB7Y0Z7SNYIM
fi

if [ -z "$BUCKETNAME" ]; then
  echo "ERROR: $LIVE_OR_STAGING is neither live nor staging"
  echo ""
  argquit
fi

echo
echo Using AWS as profile $AWSPROFILE
echo Deploying to: $BUCKETNAME
echo



if [ "$NOBUILD" != "nobuild" ]; then
  npm run generate
fi


S3_BUILDFOLDER_SUFFIX=`date +%s`
S3_TARGET_URI="s3://$BUCKETNAME/$FOLDERNAME/"
S3_BUILD_URI="s3://$BUCKETNAME/$FOLDERNAME--build-$S3_BUILDFOLDER_SUFFIX/"
S3_DEPRECATE_URI="s3://$BUCKETNAME/$FOLDERNAME--deprecate-$S3_BUILDFOLDER_SUFFIX/"


aws s3 --profile "$AWSPROFILE" cp --recursive dist/ "$S3_BUILD_URI" --acl public-read --cache-control max-age=31557600,public --metadata-directive REPLACE --expires 2034-01-01T00:00:00Z


aws s3 --profile "$AWSPROFILE" mv "$S3_TARGET_URI" "$S3_DEPRECATE_URI" --recursive
aws s3 --profile "$AWSPROFILE" mv "$S3_BUILD_URI" "$S3_TARGET_URI" --recursive
aws s3 --profile "$AWSPROFILE" rm "$S3_DEPRECATE_URI" --recursive



if [ ! -z "$CLOUDFRONT_INVALIDATION_ID" ]; then
  aws cloudfront create-invalidation \
      --profile "$AWSPROFILE" \
      --distribution-id $CLOUDFRONT_INVALIDATION_ID \
      --invalidation-batch "{\"Paths\": {\"Items\": [\"/*\"], \"Quantity\": 1}, \"CallerReference\":\"`date`\"}"
fi


