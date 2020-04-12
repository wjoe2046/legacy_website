#! /bin/bash


# Check the branch that initated the action
if [[ ${GITHUB_REF##*/} == "prod" ]]; then
    LIVE_OR_STAGING="live"
else
    LIVE_OR_STAGING="staging"
fi

# Create a profile for github-action
aws configure --profile s3-sync-action <<-EOF > /dev/null 2>&1
${AWS_ACCESS_KEY_ID}
${AWS_SECRET_ACCESS_KEY}
${AWS_REGION}
text
EOF

# Call build script to deploy to aws
# -- For now commented out for testing --
# ./scripts/build.sh $LIVE_OR_STAGING s3-sync-action nobuild
echo ${GITHUB_REF##*/}
echo $LIVE_OR_STAGING

# Destroy configuration
aws configure --profile s3-sync-action <<-EOF > /dev/null 2>&1
null
null
null
text
EOF
