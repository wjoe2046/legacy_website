![](https://github.com/covid19risk/articles/workflows/Check%20Spelling/badge.svg)

![](https://github.com/covid19risk/articles/workflows/Build%20and%20Deploy/badge.svg)

### Possible Environments:
  * LOCAL: localhost:3000/articles/index.html
  * STAGING: https://staging.covid-watch.org/articles/index.html
  * PRODUCTION: www.covid-watch.org/articles/index.html

The script to push to staging and production can be found at ./overview/scripts/build.sh

There are further instructions and commands commented at the top of build.sh.  You will need certain AWS credentials in order to use these build commands successfully.

Any files in the ./overview/articles/pages directory will render at this path: https://staging.covid-watch.org/articles/index.html

### To contribute to this repo, run the following commands to run locally:
1. `git clone <repo URL>`
2. navigate to /overview directory
3. `npm install`
4. `npm run dev`
5. in your browser go to URL: localhost:3000/articles/index.html.  Change index.html to any other relevant path ending to render that Vue component.  Note: we are working to improve this and set a better home page/navigation structure. 
