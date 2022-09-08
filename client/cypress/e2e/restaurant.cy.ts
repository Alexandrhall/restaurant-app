describe("Restaurant testing", () => {
  it("it should click to booking page and test submit error", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".book-button").click();

    cy.get(".bookingBut").click();

    cy.get("p").contains("is incorrect");
  });
});
