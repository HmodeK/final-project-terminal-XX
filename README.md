<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
</head>
<body>
<p align="center">
  <a>
    <img src="https://upload.wikimedia.org/wikipedia/he/4/44/Terminal_X_logo.png" width="200" alt="Terminal X Logo">
  </a>
</p>

<!-- Project Description Container -->
<div class="container">
    <h1>Final Project: Terminal X Automated Testing</h1>
    <p>This project focuses on automated testing for the Terminal X website using Playwright.</p>
</div>

<!-- Installation Section -->
<div class="container">
  <h2>Installation</h2>
  <ol>
    <li>Clone the repository:
        <br>
        <code>https://github.com/HmodeK/final-project-terminal-XX.git</code>
    </li>
    <li>Install dependencies:
        <br>
        <code>npm i</code>
    </li>
    <li>Run tests:
        <br>
        <code>npx playwright test</code>
    </li>
    <li>With Allure report:
      <ol>
        <li>Install Allure Playwright:
          <br>
          <code>npm i allure-playwright</code>
        </li>
        <li>Install Allure Commandline:
          <br>
          <code>npm i -D allure-commandline</code>
        </li>
        <li>Run tests with Allure reporter:
          <br>
          <code>npx playwright test --reporter=allure-playwright</code>
        </li>
        <li>Generate Allure report:
          <br>
          <code>npx allure generate ./allure-results --clean</code>
        </li>
        <li>Open Allure report in the browser:
          <br>
          <code>npx allure open ./allure-report</code>
        </li>
      </ol>
    </li>
  </ol>
</div>

</body>
</html>
