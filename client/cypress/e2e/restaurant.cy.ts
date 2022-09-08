describe("Restaurant testing", () => {
  it("it should click to booking page and test submit error", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".book-button").click();

    cy.get(".bookingBut").click();

    cy.get("p").contains("is incorrect");
  });
  it("it should click to admin page and see booking info", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".login-button").click();

    cy.get(".admin-login-btn").click();
  });
  it("it should", () => {});
  it("it should", () => {});
  it("it should", () => {});
});

export {};
