//Login
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


//Cadastro
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




// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })