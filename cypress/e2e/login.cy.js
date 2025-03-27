describe("Página de Login", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="login-button"]').click();
  });

  it("Deve permitir login com credenciais válidas", () => {
    cy.loginValido();
    cy.get(".menu__button").click();
    cy.contains("Logout").should("be.visible");
  });

  it("Deve exibir erro ao tentar logar sem preencher nenhum campo", () => {
    cy.loginSemDados();
    cy.contains("É necessário informar um endereço de email").should("be.visible");
    cy.contains("Insira sua senha").should("be.visible");
  });

  it("Deve exibir erro ao informar um e-mail inválido", () => {
    cy.loginEmailInvalido();
    cy.contains("Por favor, verifique o email digitado").should("be.visible");
  });

  it("Deve exibir erro ao informar senha incorreta para um e-mail válido", () => {
    cy.loginSenhaIncorreta();
    cy.contains("Falha no login. Consulte suas credenciais.").should("be.visible");
  });

  it("Deve exibir erro ao tentar logar com um usuário que não existe", () => {
    cy.loginUsuarioInexistente();
    cy.contains("Falha no login. Consulte suas credenciais.").should("be.visible");
  });
});

