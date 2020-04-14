![](https://github.com/covid19risk/articles/workflows/Build%20Node.js/badge.svg)

![](https://github.com/covid19risk/articles/workflows/Build%20and%20Deploy/badge.svg)

### Possible Environments:
  * LOCAL: localhost:3000/articles/index.html
  * STAGING: https://staging.covid-watch.org/
  * PRODUCTION: www.covid-watch.org/
  
### Branches:
- master -> this corresponds to our [Staging environment](https://staging.covid-watch.org/)
- prod -> this corresponds to our [production environment](www.covid-watch.org/)

When either of these branches are updated, master or prod are updated automatically via Github Actions.

### To contribute to this repo, run the following commands to run locally:
1. `git clone <repo URL>`
2. navigate to /overview directory
3. `npm install`
4. `npm run dev`
5. in your browser go to URL: localhost:3000.

### Collaborations with other groups:
- [TCN Coaltion](https://github.com/TCNCoalition/TCN)
- [CoEpi](https://github.com/Co-Epi/CEN)
