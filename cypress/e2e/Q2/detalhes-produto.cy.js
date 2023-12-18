/// <reference types="Cypress"/>

describe("Testar detalhes do produto", () => {
  it("Deve retornar a pagina de detlahmento do produto Blue Top com sucesso", () => {
    cy.visit("http://automationexercise.com");
    cy.contains("Product").click();
    cy.get(".features_items > :nth-child(3)").contains("View Product").click();
    cy.get(".product-information").should("contain", "Blue Top");
    cy.url().should("eq", "https://automationexercise.com/product_details/1");
  });
  it("Deve realizar um comentário sobre o produto Blue Top com sucesso", () => {
    cy.visit("http://automationexercise.com");
    cy.contains("Product").click();
    cy.get(".features_items > :nth-child(3)").contains("View Product").click();
    cy.get(".product-information").should("contain", "Blue Top");
    cy.url().should("eq", "https://automationexercise.com/product_details/1");
    cy.get('#name').type("caio Ferraz");
    cy.get('#email').type("caio@teste.com")
    cy.get('#review').type("Algum review legal.")
    cy.get('#button-review').click();
    cy.get('.alert-success').should("contain", "Thank you for your review.");
  });
});
