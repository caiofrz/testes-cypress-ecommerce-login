/// <reference types="Cypress"/>

describe("Testar a navegação pelas categorias dos produtos", () => {
  it("Deve retornar os produtos na categoria 'Women > Dress'", () => {
    cy.visit("http://automationexercise.com");
    cy.get(".left-sidebar").contains("Women").click();
    cy.get("#Women > .panel-body > ul > :nth-child(1) > a").click();
    cy.get(".title").should("contain", "Women - Dress Products");
  });
  it("Deve retornar os produtos na categoria 'Women > Tops'", () => {
    cy.visit("http://automationexercise.com");
    cy.get(".left-sidebar").contains("Women").click();
    cy.get("#Women > .panel-body > ul > :nth-child(2) > a").click();
    cy.get(".title").should("contain", "Women - Tops Products");
  });
  it("Deve retornar os produtos na categoria 'Women > Saree'", () => {
    cy.visit("http://automationexercise.com");
    cy.get(".left-sidebar").contains("Women").click();
    cy.get("#Women > .panel-body > ul > :nth-child(3) > a").click();
    cy.get(".title").should("contain", "Women - Saree Products");
  });
  it("Deve retornar os produtos na categoria 'Men > TShirts'", () => {
    cy.visit("http://automationexercise.com");
    cy.get(".left-sidebar").contains("Men").click();
    cy.get("#Men > .panel-body > ul > :nth-child(1) > a").click();
    cy.get(".title").should("contain", "Men - Tshirts Products");
  });

  it("Deve retornar os produtos na categoria 'Men > Jeans'", () => {
    cy.visit("http://automationexercise.com");
    cy.get(".left-sidebar").contains("Men").click();
    cy.get("#Men > .panel-body > ul > :nth-child(2) > a").click();
    cy.get(".title").should("contain", "Men - Jeans Products");
  });

  it("Deve retornar os produtos na categoria 'Kids > Dress'", () => {
    cy.visit("http://automationexercise.com");
    cy.get(".left-sidebar").contains("Kids").click();
    cy.get("#Kids > .panel-body > ul > :nth-child(1) > a").click();
    cy.get(".title").should("contain", "Kids - Dress Products");
  });
  it("Deve retornar os produtos na categoria 'Kids > Tops & Shirts Products'", () => {
    cy.visit("http://automationexercise.com");
    cy.get(".left-sidebar").contains("Kids").click();
    cy.get("#Kids > .panel-body > ul > :nth-child(2) > a").click();
    cy.get(".title").should("contain", "Kids - Tops & Shirts Products");
  });
});
