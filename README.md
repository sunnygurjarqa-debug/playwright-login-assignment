# playwright-login-assignment
Playwright JavaScript login automation using POM

# Playwright Login Automation

## Project Overview

This project automates the login functionality of the Practice Test Automation website using Playwright with JavaScript.

Website: https://practicetestautomation.com/practice-test-login/

## Tools and Technologies

* JavaScript
* Playwright
* Node.js
* Visual Studio Code

## Test Coverage

### Positive Test Cases

1. Login with valid credentials.
2. Verify login page elements.
3. Verify successful login URL.
4. Verify success message.
5. Verify logout functionality.

### Negative Test Cases

1. Login with an invalid username.
2. Login with an invalid password.
3. Login with an empty username.
4. Login with an empty password.
5. Login with an invalid username and password.

## Test Credentials

* Username: student
* Password: Password123

Use these credentials only for this public practice website.

## How to Run the Tests

Install project dependencies:

```bash
npm install
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

View the HTML report:

```bash
npx playwright show-report
```

## Project Structure

- pages/LoginPage.js - Contains login page locators and reusable actions.
- tests/login.spec.js - Contains 10 automated functional tests.
- Functional_Test_Cases.txt - Contains 5 positive and 5 negative test cases.
- playwright.config.js - Playwright configuration, if present.
- package.json - Project dependencies and scripts.
- README.md - Project setup and execution instructions.
## Author

Playwright Login Automation Assignment
