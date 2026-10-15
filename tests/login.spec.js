
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login Functionality', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
  });

  test('Login with valid credentials', async ({ page }) => {
    await loginPage.login('student', 'Password123');
    await expect(loginPage.successHeading).toBeVisible();
    await expect(loginPage.logoutLink).toBeVisible();
  });

  test('Login with an invalid username', async ({ page }) => {
    await loginPage.login('wronguser', 'Password123');
    await expect(loginPage.errorMessage).toContainText('Your username is invalid!');
    await expect(page).not.toHaveURL(/logged-in-successfully/);
  });

  test('Login with an invalid password', async ({ page }) => {
    await loginPage.login('student', 'WrongPassword123');
    await expect(loginPage.errorMessage).toContainText('Your password is invalid!');
    await expect(page).not.toHaveURL(/logged-in-successfully/);
  });

  test('Login with an empty username', async ({ page }) => {
    await loginPage.login('', 'Password123');
    await expect(loginPage.errorMessage).toContainText('Your username is invalid!');
    await expect(page).not.toHaveURL(/logged-in-successfully/);
  });

  test('Login with an empty password', async ({ page }) => {
    await loginPage.login('student', '');

    await expect(loginPage.errorMessage).toContainText('Your password is invalid!');
    await expect(page).not.toHaveURL(/logged-in-successfully/);
  });

  test('Login with an invalid username and password', async ({ page }) => {
    await loginPage.login('wronguser', 'WrongPassword123');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(page).not.toHaveURL(/logged-in-successfully/);
  });

  test('Verify login page elements are visible', async () => {
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.submitButton).toBeVisible();
  });

  test('Verify URL after successful login', async ({ page }) => {
    await loginPage.login('student', 'Password123');
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
  });

  test('Verify success message after login', async () => {
    await loginPage.login('student', 'Password123');
    await expect(loginPage.successHeading).toBeVisible();
  });

  test('Verify logout functionality', async ({ page }) => {
    await loginPage.login('student', 'Password123');
    await loginPage.logoutLink.click();
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
  });
});