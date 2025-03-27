describe("Página de Cadastro", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="register-button"]').click();
  });

  it("Deve permitir cadastrar um novo usuário com dados válidos", () => {
    cy.cadastroValido();
  });

  it("Deve exibir mensagens de erro ao enviar o formulário sem dados", () => {
    cy.cadastroSemDados();
    cy.contains("É necessário informar um endereço de email").should("be.visible");
    cy.contains("Crie uma senha").should("be.visible");
    cy.contains("Repita a senha criada acima").should("be.visible");
  });

  it("Deve exibir erro ao informar um e-mail inválido", () => {
    cy.cadastroEmailInvalido();
    cy.contains("Por favor, verifique o email digitado").should("be.visible");
  });

  it("Deve exibir erro ao informar senhas que não coincidem", () => {
    cy.cadastroSenhaInvalida();
    cy.contains("É necessário informar um endereço de email").should("be.visible");
    cy.contains("As senhas não batem").should("be.visible");
  });

  it("Deve exibir erro ao tentar cadastrar com um e-mail já existente", () => {
    cy.cadastroEmailExistente();
    cy.get('[data-test="submit-button"]').should("be.visible").click();
    cy.contains("Falha ao cadastrar!").should("be.visible");
  });
});