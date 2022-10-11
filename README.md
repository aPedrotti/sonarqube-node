# POC for Sonarqube + React app

This is intended to validade how intagreate analysis of sonarqube in a react app.

## How to run

Docker-compose will spin up 3 containers for the environment:

- myapp-web: built from Dockerfile

- sonarqube

- postgresql for sonarqube

## Steps

Before running it, we need to increase the memory dedicated for Docker, otherwise, when we try to run it, we will get the follow error: 

`max virtual memory areas vm.max_map_count is too low, inscrease at least [262144]`

```bash
sudo sysctl -w vm.max_map_count=262144
```

- `docker-compose up -d`

- Access Sonarqube [http://localhost:9000] with default user / pass = admin/admin

- Generates a token to paste in `sonarqube-scanner.js`

  - 'My Account' > ‘Security’ tab > write a name for this token > Generate;

- Runs full test
  
  - `docker exec -it myapp-web npm run test`

- Access sonarqube to check the reports

And then you can use it like:

- To run Jest over all the project without watch-mode:

`npm run test:noWatch`

- To run Jest over all the project without watch-mode and generate a report:

`npm run test:report`

- To run ESLint over all the project

`npm run lint -- .`

- To run ESLint over all the project and generate a report:

`npm run lint:report -- .`

- To run SonarQube Scanner

`npm run sonar`

## Application Details

This is an application create with `npx create-react-app my-app --template typescript` adding `sonarqube-scanner.js`

It was also installed 2 npm packages:

`npm install -D sonarqube-scanner`

`npm install -D jest-sonar-reporter`

### Sonar options

`sonarqube-scanner.js` properties:

```"sonar.eslint.reportPaths":"eslint-report.json"``` = uses eslint created from `s`


## Sonarqube Details

