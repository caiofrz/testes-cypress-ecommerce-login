/// <reference types="Cypress"/>

// Tentei fazer em 3 sites diferentes(Netshoes, Terabyte e Kabum) e não consegui
// quebrava o teste assim que carregava a pagina
// dava erro de cross-origin
// Usei esse site aí, qu eé um fake ecommerce feito justamente para estudar cypress

describe("Testar funcionalidades do carrinho", () => {
  it("Deve adicionar um produto ao carrinho com sucesso", () => {
    cy.visit("http://automationexercise.com");
    cy.contains("Product").click();
    cy.get(
      ".features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn"
    ).click();
    cy.get(".modal-footer > .btn").click();
    cy.get(
      ":nth-child(6) > .product-image-wrapper > .single-products > .productinfo > .btn"
    ).click();
    cy.get(".modal-body > :nth-child(1)").should(
      "contain",
      "Your product has been added to cart."
    );

    cy.contains("View Cart").click();
    cy.get('#cart_info').should('contain.text', 'Blue Top');
    cy.get('#cart_info').should('contain.text', 'Stylish Dress');
  });

  it("Deve excluir um produto do carrinho com sucesso", () => {
    cy.visit("http://automationexercise.com");
    cy.contains("Product").click();
    cy.get(
      ".features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn"
    ).click();
    cy.contains("View Cart").click();
    cy.get('#cart_info').should('contain.text', 'Blue Top');
    cy.get('.cart_delete > .cart_quantity_delete').click();
    cy.contains("Cart").click();
    cy.get('#empty_cart');  
  });
});


