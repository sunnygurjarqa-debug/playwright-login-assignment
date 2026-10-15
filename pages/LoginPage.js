class LoginPage {
  constructor(page) {this.page = page;
    // Locators
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.submitButton = page.getByRole('button', {name: 'Submit'});
    this.errorMessage = page.locator('#error');
    this.successHeading = page.getByRole('heading', {name: 'Logged In Successfully'});
    this.logoutLink = page.getByRole('link', {name: 'Log out'});
  }

  // Open the login page
  async openLoginPage() {await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  // Enter username
  async enterUsername(username) {
    await this.usernameInput.fill(username);
  }

  // Enter password
  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  // Click Submit
  async clickSubmit() {
    await this.submitButton.click();
  }

  // Perform login with supplied credentials
  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickSubmit();
  }
}

module.exports = { LoginPage };