/// <reference types="Cypress"/>

describe("Testa se a opção de sair do sistema funciona corretamente", () => {
  it("Deve ealizar o logout do usuário e voltar para a tela de login", () => {
    cy.visit("https://www.economizzer.org/web/index.php?r=user%2Flogin");
    cy.get("#loginform-username").type("joe");
    cy.get("#loginform-password").type("123456");
    cy.get(".btn").click();
    cy.get(":nth-child(5) > .dropdown-toggle").click();
    cy.get("#w8 > :nth-child(4) > a").click();
    cy.url().should(
      "eq",
      "https://www.economizzer.org/web/index.php?r=user%2Flogin"
    );
  });
});
