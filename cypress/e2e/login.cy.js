describe("Página de Login", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="login-button"]').click();
  });

  it("Deve permitir login com credenciais válidas", () => {
    cy.get('[data-test="input-loginEmail"]').type("pietross@gmail.com");
    cy.get('[data-test="input-loginPassword"]').type("Senha123");
    cy.get('[data-test="submit-button"]').click();

    cy.get(".menu__button").click();
    cy.contains("Logout").should("be.visible");
  });

  it("Deve exibir erro ao tentar logar sem preencher nenhum campo", () => {
    cy.get('[data-test="submit-button"]').click();
    cy.contains("É necessário informar um endereço de email").should("be.visible");
    cy.contains("Insira sua senha").should("be.visible");
  });

  it("Deve exibir erro ao informar um e-mail inválido", () => {
    cy.get('[data-test="input-loginEmail"]').type("emailinvalido@com");
    cy.get('[data-test="submit-button"]').click();
    cy.contains("Por favor, verifique o email digitado").should("be.visible");
  });

  it("Deve exibir erro ao informar senha incorreta para um e-mail válido", () => {
    cy.get('[data-test="input-loginEmail"]').type("pietross@gmail.com");
    cy.get('[data-test="input-loginPassword"]').type("Senha321");
    cy.get('[data-test="submit-button"]').click();
    cy.contains("Falha no login. Consulte suas credenciais.").should("be.visible");
  });

  it("Deve exibir erro ao tentar logar com um usuário que não existe", () => {
    cy.get('[data-test="input-loginEmail"]').type("usuarioinexistente@gmail.com");
    cy.get('[data-test="input-loginPassword"]').type("Senha123");
    cy.get('[data-test="submit-button"]').click();
    cy.contains("Falha no login. Consulte suas credenciais.").should("be.visible");
  });
});
