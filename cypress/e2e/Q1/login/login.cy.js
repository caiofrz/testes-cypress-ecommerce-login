/// <reference types="Cypress"/>

describe("Teste login", () => {
    //Nesse exemplo eu usei o joe, porque não recebi o email de confirmação
  it("Deve realizar um login válido com sucesso", () => {
    cy.visit("https://www.economizzer.org/web/index.php?r=user%2Flogin");
    cy.get("#loginform-username").type("joe");
    cy.get("#loginform-password").type("123456");
    cy.get(".btn").click();
    cy.get(':nth-child(5) > .dropdown-toggle')
  });

  it("Não deve realizar um login inválido com o username incorreto", () => {
    cy.visit("https://www.economizzer.org/web/index.php?r=user%2Flogin");
    cy.get("#loginform-username").type("caioferrazalmeida.27gmail.com");
    cy.get("#loginform-password").type("12345678");
    cy.get(".btn").click();
    cy.get(".field-loginform-username > .help-block").should(
      "contain",
      "Email / Username not found"
    );
  });

  it("Não deve realizar um login inválido com o email em branco", () => {
    cy.visit("https://www.economizzer.org/web/index.php?r=user%2Flogin");
    cy.get("#loginform-username").type(" ");
    cy.get("#loginform-password").type("12345678");
    cy.get(".btn").click();
    cy.get(".field-loginform-username > .help-block").should(
      "contain",
      "Email / Username cannot be blank."
    );
  });

  it("Não deve realizar um login com o email não verificado", () => {
    cy.visit("https://www.economizzer.org/web/index.php?r=user%2Flogin");
    cy.get("#loginform-username").type("teste1@email.com");
    cy.get("#loginform-password").type("12345678");
    cy.get(".btn").click();
    cy.get(".field-loginform-username > .help-block").should(
      "contain",
      "Confirmation email resent"
    );
  });

  it("Não deve realizar login com a senha incorreta", ()=>{
      cy.visit("https://www.economizzer.org/web/index.php?r=user%2Flogin")
      cy.get('#loginform-username').type("joe")
      cy.get('#loginform-password').type("123456789")
      cy.get('.btn').click()
      cy.get('.field-loginform-password > .help-block').should('contain', 'Incorrect password')
  })

  it("Não deve realizar login com a senha em branco", ()=>{
      cy.visit("https://www.economizzer.org/web/index.php?r=user%2Flogin")
      cy.get('#loginform-username').type("caioferrazalmeida.27gmail.com")
      cy.get('.btn').click()
      cy.get('.field-loginform-password > .help-block').should('contain', 'Password cannot be blank.')
  })
});
