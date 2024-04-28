import accountBalanceData from "../../fixtures/accounts_data.json";
import { HomePage } from "../../page-objects/home_page";
import { LoginPage } from "../../page-objects/login_page";
import { faker } from "@faker-js/faker";

describe("DDT Account balance Tegb tests", () => {
  accountBalanceData.forEach((accountBalance) => {
    it(`Account Balance: ${accountBalance.balance} Kč`, () => {
      const username = faker.internet.userName();
      const password = faker.internet.password({ length: 15 });
      const email = faker.internet.exampleEmail();
      new LoginPage()
        .openTegb()
        .clickregisterNewUser()
        .typeNewUsername(username)
        .typeNewPassword(password)
        .typeNewEmail(email)
        .clickRegister();
      new LoginPage()
        .openTegb()
        .typeUsername(username)
        .typePassword(password)
        .clickLogin();
      new HomePage();
      /*sem bych přidala přes API vytvoření účtu (nepotadřilo se mi)
      následně get(this.balanceSelector).type(accountBalance.balance)
      a kontrolu .hasValue(accountBalance.balance)
      */
    });
  });
});
