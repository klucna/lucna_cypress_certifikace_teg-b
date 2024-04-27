export class AccountApi {
  login(username, password) {
    return cy.request({
      method: "POST",
      url: cypressConfig.env("tegb_url") + "/auth/login",
      body: {
        username: username,
        password: password,
      },
    });
  }
}

createAccount(account);
