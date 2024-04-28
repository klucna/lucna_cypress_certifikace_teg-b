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
    cy.intercept("/tegb/profile").as("profile_api");
    cy.intercept("/tegb/accounts").as("accounts_api");
    new LoginPage()
      .openTegb()
      .clickregisterNewUser()
      .typeNewUsername(username)
      .typeNewPassword(password)
      .typeNewEmail(email)
      .clickRegister();

    /*Request mi bohužel nefunguje, dala jsem ho do poznámky:
    
    cy.request({
      method: "POST",
      url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/accounts/create",
      headers: {
        "Content-Type": "application/json",
        "Authorization":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBldHIuZmlma2EiLCJzdWIiOjUsImlhdCI6MTcwMTMzOTIyOSwiZXhwIjoxNzAxMzQyODI5fQ.e-mWFHJQmMZgEo0ZJN80bnNLo0iIfYyE95WliqVOLRQ'\",
      },
      body: {
        startBalance: 10000,
        type: "Test",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);*/
    new LoginPage()
      .openTegb()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin();
    cy.wait("@profile_api");
    cy.wait("@accounts_api");
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
      .ageHaveNumber(85)
      .clicklogout();
  });
});
