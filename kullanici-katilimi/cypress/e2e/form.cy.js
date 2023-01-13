describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const nameInput = () => cy.get("[data-cy=test-name");

  it("passes", () => {
    expect(true).to.equal(true);
  });

  it("submits form successfully", () => {
    nameInput();
    cy.get("[data-cy=test-name]")
      .should("have.value", "")
      .type("yaren mert")
      .should("have.value", "yaren mert");
    cy.get("[data-cy=test-email]")
      .should("have.value", "")
      .type("yaren@mert.com")
      .should("have.value", "yaren@mert.com");
    cy.get("[data-cy=test-password]")
      .should("have.value", "")
      .type("12345")
      .should("have.value", "12345");
    cy.get("[data-cy=test-terms]").should("not.checked");
    cy.get("[data-cy=test-submit]").click();
  });
});
