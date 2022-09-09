describe("Restaurant testing", () => {
  it("it should click to booking page and test submit error", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".book-button").click();

    cy.get(".bookingBut").click();

    cy.get("p").contains("is incorrect");
  });
  it("it should click to admin page and see booking info find listwrapper", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".login-button").click();

    cy.get(".admin-login-btn").click();

    cy.get(".background")
      .parent()
      .within(() => {
        cy.get(".bookings-container")
          .parent()
          .within(() => {
            cy.get(".bookings-card")
              .parent()
              .within(() => {
                cy.get(".listWrapper");
              });
          });
      });
  });

  it("it should get to edit booking from admin page", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".login-button").click();

    cy.get(".admin-login-btn").click();

    cy.get(".background")
      .parent()
      .within(() => {
        cy.get(".bookings-container")
          .parent()
          .within(() => {
            cy.get(".bookings-card")
              .parent()
              .within(() => {
                cy.get(".listWrapper")
                  .parent()
                  .within(() => {
                    cy.get(".single-booking")
                      .parent()
                      .within(() => {
                        cy.get(".editBtn-cnt").click();
                      });
                  });
              });
          });
      });
  });
  it("it should", () => {});
});

export {};
