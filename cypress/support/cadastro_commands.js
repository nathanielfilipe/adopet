Cypress.Commands.add('cadastroValido', (email = "pietross@gmail.com", senha = "Senha123") => {
    cy.get('[data-test="input-name"]').type("Pietro Souza Silva");
    cy.get('[data-test="input-email"]').type("pietross@gmail.com");
    cy.get('[data-test="input-password"]').type("Senha123");
    cy.get('[data-test="input-confirm-password"]').type("Senha123");
    cy.get('[data-test="submit-button"]').click();
});

Cypress.Commands.add('cadastroSemDados', () => {
    cy.get('[data-test="submit-button"]').click();
});

Cypress.Commands.add('cadastroEmailInvalido', () => {
    cy.get('[data-test="input-email"]').type("emailinvalido@com");
    cy.get('[data-test="submit-button"]').click();
});

Cypress.Commands.add('cadastroSenhaInvalida', () => {
    cy.get('[data-test="input-password"]').type("Senha123");
    cy.get('[data-test="input-confirm-password"]').type("Senha321");
    cy.get('[data-test="submit-button"]').click();
});

Cypress.Commands.add('cadastroEmailExistente', () => {
    cy.get('[data-test="input-name"]').type("Pietro Souza Silva");
    cy.get('[data-test="input-email"]').type("pietross@gmail.com");
    cy.get('[data-test="input-password"]').type("Senha123");
    cy.get('[data-test="input-confirm-password"]').type("Senha123");
});