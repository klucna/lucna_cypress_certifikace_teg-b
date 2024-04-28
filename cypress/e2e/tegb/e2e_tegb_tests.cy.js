import { HomePage } from "../../page-objects/home_page";
import { LoginPage } from "../../page-objects/login_page";
import { faker } from "@faker-js/faker";

describe("Register and Login new User E2E test Tegb", () => {
  beforeEach(() => {
    new LoginPage().openTegb();
  });
  it("Create new user", () => {
    const username = faker.internet.userName();
    const password = faker.internet.password({ length: 15 });
    const email = faker.internet.exampleEmail();
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const phonenumber = faker.phone.number();

    new LoginPage()
      .openTegb()
      .clickregisterNewUser()
      .typeNewUsername(username)
      .typeNewPassword(password)
      .typeNewEmail(email)
      .clickRegister();
    cy.intercept("/tegb/profile").as("profile_api");
    new LoginPage()
      .openTegb()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin();
    cy.wait("@profile_api");
    new HomePage()
      .clickEditProfileButton()
      .typeFirstName(firstname)
      .typeLastName(lastname)
      .typeEmail(email)
      .typePhoneNumber(phonenumber)
      .typeAge(85)
      .clickSaveChangesButton();
    new HomePage()
      .firstNameHaveText(firstname)
      .lastNameHaveText(lastname)
      .emailHaveText(email)
      .phoneNumberHaveNumber(phonenumber)
      .ageHaveNumber(85).clicklogout();
  });
});
