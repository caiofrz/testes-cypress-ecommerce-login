/// <reference types="Cypress"/>

describe("Teste de paineis. Verifica se a navegação entre os paineis de desempenho está funcionando corretamente", () => {
  it("Verifica se a escolha de ver o painel 'Desempenho Anual' está funcionando", () => {
    cy.visit("https://www.economizzer.org/web/index.php?r=user%2Flogin");
    cy.get("#loginform-username").type("joe");
    cy.get("#loginform-password").type("123456");
    cy.get(".btn").click();
    cy.get('#w0 > .dropdown > .dropdown-toggle').click()
    cy.get('#w1 > :nth-child(3) > a').click()
    cy.get('.panel-heading').should('contain', 'Comparativo mensal de Receita x Despesa')
  });

  it("Verifica se a escolha de ver o painel 'Análise por categoria' está funcionando corretamente", () => {
    cy.visit("https://www.economizzer.org/web/index.php?r=user%2Flogin");
    cy.get("#loginform-username").type("joe");
    cy.get("#loginform-password").type("123456");
    cy.get(".btn").click();
    cy.get('#w0 > .dropdown > .dropdown-toggle').click()
    cy.get('#w1 > :nth-child(2) > a').click()
    cy.get('.panel-heading').should('contain', 'Acompanhe cada categoria durante o ano')
  });

  
});
