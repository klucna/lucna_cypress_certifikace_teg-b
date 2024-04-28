export class AccountApi {
  createAccount(account) {
    return cy.request({
      method: "POST",
      url: Cypress.env("tegb_be_url") + "tegb/accounts/create",
      body: {
        startBalance: 10000,
        type: "Test",
      },
    });
  }
}
