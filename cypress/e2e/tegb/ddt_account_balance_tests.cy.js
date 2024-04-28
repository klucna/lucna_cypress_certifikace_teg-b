import { LoginPage } from "../../page-objects/login_page";

describe("DDT Account balance Tegb tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openTegb()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin();
  });
  it("", () => {});
});
