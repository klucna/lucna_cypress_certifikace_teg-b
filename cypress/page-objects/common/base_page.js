export class BasePage {
  constructor(path) {
    this.baseUrl = "https://tegb-frontend-88542200c6db.herokuapp.com/";
    this.path = path;
  }

  visit() {
    cy.visit(this.baseUrl + this.path);
    return this;
  }
}
