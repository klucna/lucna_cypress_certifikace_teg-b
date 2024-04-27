import { HomePage } from "../../page-objects/home_page";
import { LoginPage } from "../../page-objects/login_page";

describe("Dashboasrd atomic tests", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    const username = Cypress.env("tegb_username");
    const password = Cypress.env("tegb_password");
    new LoginPage()
      .openTegb()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin();
  });

  context("Header tests", () => {
    it("Logo is visible", () => {
      new HomePage().logo.isVisible();
    });

    it("Title is visible", () => {
      new HomePage().pageTitle.isVisible();
    });

    it("Title have text", () => {
      new HomePage().pageTitle.hasText("TEG#B Dashboard");
    });

    it("Logout button is visible", () => {
      new HomePage().logoutButton.isVisible();
    });

    it("Logout button has text", () => {
      new HomePage().logoutButton.hasText("Odhlásit se");
    });
  });

  context("Menu tests", () => {
    it("Home tab is visible", () => {
      new HomePage().homeMenu.isVisibleXpath();
    });

    it("Home tab has text", () => {
      new HomePage().homeMenu.hasTextXpath("Domů");
    });

    it("Accounts tab is visible", () => {
      new HomePage().accountsMenu.isVisibleXpath();
    });

    it("Accounts tab has text", () => {
      new HomePage().accountsMenu.hasTextXpath("Účty");
    });

    it("Transactions tab is visible", () => {
      new HomePage().transactionsMenu.isVisibleXpath();
    });

    it("Transactions tab has text", () => {
      new HomePage().transactionsMenu.hasTextXpath("Transakce");
    });

    it("Support tab is visible", () => {
      new HomePage().supportMenu.isVisibleXpath();
    });

    it("Support tab has text", () => {
      new HomePage().supportMenu.hasTextXpath("Podpora");
    });
  });

  context("Profile details on Dashboard tests", () => {
    it("Profile Details header is visible", () => {
      new HomePage().profileDetailHeader.isVisible();
    });

    it("Profile Details header has text", () => {
      new HomePage().profileDetailHeader.hasText("Detaily Profilu");
    });

    it("Edit Profile Buttion is visible", () => {
      new HomePage().editProfileButton.isVisible();
    });

    it("Edit Profile Button has text", () => {
      new HomePage().editProfileButton.hasText("Upravit profil");
    });

    it("First Name has attribute", () => {
      new HomePage().firstName.hasAttribute("data-testid", "name");
    });

    it("Last Name has attribute", () => {
      new HomePage().lastName.hasAttribute("data-testid", "surname");
    });

    it("Email has attribute", () => {
      new HomePage().email.hasAttribute("data-testid", "email");
    });

    it("Phone Number has attribute", () => {
      new HomePage().phoneNumber.hasAttribute("data-testid", "phone");
    });

    it("Age has attribute", () => {
      new HomePage().age.hasAttribute("data-testid", "age");
    });
  });

  context("Accounts details on Dashboard tests", () => {
    it("Accounts header is visible", () => {
      new HomePage().accountsHeader.isVisible();
    });

    it("Accounts header has text", () => {
      new HomePage().accountsHeader.hasText("Účty");
    });

    it("Add account button is visible", () => {
      new HomePage().addAccountButton.isVisible();
    });

    it("Account number has attribute", () => {
      new HomePage().accountNumber.hasAttribute(
        "data-testid",
        "account-number-heading"
      );
    });

    it("Balance has attribute", () => {
      new HomePage().accountBalance.hasAttribute(
        "data-testid",
        "account-balance-heading"
      );
    });

    it("Account type has attribute", () => {
      new HomePage().accountType.hasAttribute(
        "data-testid",
        "account-type-heading"
      );
    });
  });
});
