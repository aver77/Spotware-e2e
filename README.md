# Typescript + Playwright

## Description

Spotware trading platform

## Preparation to launch

Firstly, you should **create .env file in a project root.** <br/>
and fill it like that: <br/>
<hr/>
LOGIN=xxxx <br/>
PASSWORD=xxxx <br/>
<hr/>

*<u>(where xxxx - actual login/password data)</u>*

## Launch

There is 2 options to launch tests: <br/>
**(Make sure you navigated to project folder after cloning it)**

- With basic manual node modules installation:<br/> `npm install`<br/>
  <u>After installation all the tests will be available with commands:</u> <br/>
  `npm run test`
  `npm run test-ui`
  `npm run report`


- With docker command *(Make sure you have docker installed and launched)*:<br/> `docker-compose up --build`<br/>
  <u>After creation of docker container you can quickly check one test with command:</u> <br/>
  `docker run -it spotware-e2e:latest npm run test`

## Usage

![ui tests](public/playwright-ui.png)

![reports](public/playwright-report.png)

This project is needed to test basic https://app.ctrader.com functionalities:
- Login
- Order creation

![TS](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/static/v1?style=for-the-badge&message=Playwright&color=2EAD33&logo=Playwright&logoColor=FFFFFF&label=)