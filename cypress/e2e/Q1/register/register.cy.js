/// <reference types="Cypress"/>

describe("Teste cadastro", () => {
  it("Deve realizar um cadastro válido com sucesso", () => {
    cy.visit("https://www.economizzer.org/web/index.php?r=user%2Fregister");
    cy.get("#user-email").type("caioferrazalmeida.27@gmail.com");
    cy.get("#user-newpassword").type("12345678");
    cy.get(".btn").click();
    cy.get(".alert").should("contain", "Successfully registered");
  });

  it("Não deve realizar um login com um email já cadastrado", () => {
    cy.visit("https://www.economizzer.org/web/index.php?r=user%2Fregister");
    cy.get("#user-email").type("caioferrazalmeida.27@gmail.com");
    cy.get("#user-newpassword").type("12345678");
    cy.get(".btn").click();
    cy.get(".field-user-email > .col-lg-7 > .help-block").should(
      "contain",
      "Email “caioferrazalmeida.27@gmail.com” já foi atribuido."
    );
  });

  it("Não deve realizar um login com um email em branco", () => {
    cy.visit("https://www.economizzer.org/web/index.php?r=user%2Fregister");
    cy.get("#user-newpassword").type("12345678");
    cy.get(".btn").click();
    cy.get(".field-user-email > .col-lg-7 > .help-block").should(
      "contain",
      "“Email” não pode ficar em branco."
    );
  });

  it("Não deve realizar um login com um email inválido", () => {
    cy.visit("https://www.economizzer.org/web/index.php?r=user%2Fregister");
    cy.get("#user-email").type("caioferrazalmeida.27gmail.com");
    cy.get("#user-newpassword").type("12345678");
    cy.get(".btn").click();
    cy.get(".field-user-email > .col-lg-7 > .help-block").should(
      "contain",
      "“Email” não é um endereço de e-mail válido."
    );
  });

  it("Não deve realizar um login com uma senha inválida(nesse caso, < 3 caracteres )", () => {
    cy.visit("https://www.economizzer.org/web/index.php?r=user%2Fregister");
    cy.get("#user-email").type("teste1@email.com");
    cy.get("#user-newpassword").type("12");
    cy.get(".btn").click();
    cy.get(".field-user-newpassword > .col-lg-7 > .help-block").should(
      "contain",
      "“New Password” deve conter pelo menos 3 caracteres."
    );
  });

  it("Não deve realizar um login com a senha em branco", () => {
    cy.visit("https://www.economizzer.org/web/index.php?r=user%2Fregister");
    cy.get("#user-email").type("teste1@email.com");
    cy.get(".btn").click();
    cy.get(".field-user-newpassword > .col-lg-7 > .help-block").should(
      "contain",
      "“New Password” não pode ficar em branco."
    );
  });
});
