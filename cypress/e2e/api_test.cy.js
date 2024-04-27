describe("api", () => {
  it("check api volání", () => {
    cy.intercept("/auth/login");
    cy.visit(Cypress.env("tegb_url"));
    cy.get("input[data-testid='username-input']").type(
      Cypress.env("tegb_username")
    );
    cy.get("input[data-testid='password-input']").type(
      Cypress.env("tegb_password")
    );
    cy.get("button[data-testid='submit-button']").click();
  });
});
