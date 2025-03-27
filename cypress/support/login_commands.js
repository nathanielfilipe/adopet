Cypress.Commands.add('loginValido', (email = "pietross@gmail.com", senha = "Senha123") => {
    cy.get('[data-test="input-loginEmail"]').type(email);
    cy.get('[data-test="input-loginPassword"]').type(senha);
    cy.get('[data-test="submit-button"]').click();
});

Cypress.Commands.add('loginSemDados', () => {
    cy.get('[data-test="submit-button"]').click();
});

Cypress.Commands.add('loginEmailInvalido', () => {
    cy.get('[data-test="input-loginEmail"]').type("emailinvalido@com");
    cy.get('[data-test="submit-button"]').click();
});

Cypress.Commands.add('loginSenhaIncorreta', () => {
    cy.get('[data-test="input-loginEmail"]').type("pietross@gmail.com");
    cy.get('[data-test="input-loginPassword"]').type("Senha321");
    cy.get('[data-test="submit-button"]').click();
});

Cypress.Commands.add('loginUsuarioInexistente', () => {
    cy.get('[data-test="input-loginEmail"]').type("usuarioinexistente@gmail.com");
    cy.get('[data-test="input-loginPassword"]').type("Senha123");
    cy.get('[data-test="submit-button"]').click();
});