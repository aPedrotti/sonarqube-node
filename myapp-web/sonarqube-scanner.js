const scanner = require('sonarqube-scanner');
scanner(
  {
  serverUrl: "http://sonarqube:9000",
  token: "",
  //login:"admin",
  //password:"admin",
  options: {
    "sonar.projectName": "my-app",
    "sonar.projectDescription": "react app for sonar analysis",
    "sonar.exclusions": "**/*.test.tsx",
    "sonar.tests": "./src",
    "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
    "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
    "sonar.testExecutionReportPaths": "test-report.xml",
    "sonar.eslint.reportPaths":"eslint-report.json"
  },
},
() => process.exit()
);