describe("Página de Cadastro", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="register-button"]').click();
  });

  it("Deve permitir cadastrar um novo usuário com dados válidos", () => {
    cy.get('[data-test="input-name"]').type("Pietro Souza Silva");
    cy.get('[data-test="input-email"]').type("pietross@gmail.com");
    cy.get('[data-test="input-password"]').type("Senha123");
    cy.get('[data-test="input-confirm-password"]').type("Senha123");
    cy.get('[data-test="submit-button"]').click();
  });

  it("Deve exibir mensagens de erro ao enviar o formulário sem dados", () => {
    cy.get('[data-test="submit-button"]').click();
    cy.contains("É necessário informar um endereço de email").should("be.visible");
    cy.contains("Crie uma senha").should("be.visible");
    cy.contains("Repita a senha criada acima").should("be.visible");
  });

  it("Deve exibir erro ao informar um e-mail inválido", () => {
    cy.get('[data-test="input-email"]').type("emailinvalido@com");
    cy.get('[data-test="submit-button"]').click();
    cy.contains("Por favor, verifique o email digitado").should("be.visible");
  });

  it("Deve exibir erro ao informar senhas que não coincidem", () => {
    cy.get('[data-test="input-password"]').type("Senha123");
    cy.get('[data-test="input-confirm-password"]').type("Senha321");
    cy.get('[data-test="submit-button"]').click();
    cy.contains("É necessário informar um endereço de email").should("be.visible");
    cy.contains("As senhas não batem").should("be.visible");
  });

  it("Deve exibir erro ao tentar cadastrar com um e-mail já existente", () => {
    cy.get('[data-test="input-name"]').type("Pietro Souza Silva");
    cy.get('[data-test="input-email"]').type("pietross@gmail.com");
    cy.get('[data-test="input-password"]').type("Senha123");
    cy.get('[data-test="input-confirm-password"]').type("Senha123");
    cy.get('[data-test="submit-button"]').should("be.visible").click();
    cy.contains("Falha ao cadastrar!").should("be.visible");
  });
});
