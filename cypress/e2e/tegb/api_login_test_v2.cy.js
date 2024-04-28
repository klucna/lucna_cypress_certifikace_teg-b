/*Tento test bohužel padá*/

import { faker } from "@faker-js/faker";
import { LoginPage } from "../../page-objects/login_page";

describe("Sent API Test", () => {
  it("Registration and POST Login", () => {
    const username = faker.internet.userName();
    const password = faker.internet.password({ length: 15 });
    const email = faker.internet.exampleEmail();
    cy.log(username);
    cy.log(password);
    cy.log(email);

    new LoginPage()
      .openTegb()
      .clickregisterNewUser()
      .typeNewUsername(username)
      .typeNewPassword(password)
      .typeNewEmail(email)
      .clickRegister();
    cy.request({
      method: "POST",
      url: Cypress.env("tegb_be_url") + "tegb/login",
      body: {
        username: username,
        password: password,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
