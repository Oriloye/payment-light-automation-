
// ***********************************************
// Visit https://on.cypress.io/custom-commands to
// learn more about custom commands.
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
import 'cypress-file-upload';
import Login from '../e2e/PageObjects/login';

Cypress.Commands.add('loginOnce', () => {
  cy.session(
    'merchant-session',
    () => {
      cy.visit('/login');

      cy.get('#email', { timeout: 20000 }).should('be.visible');

      const login = new Login();
      login.loginTestcase();

      cy.location('pathname', { timeout: 20000 })
        .should('include', '/dashboard');
    },
    {
      validate() {
        cy.visit('/dashboard');
        cy.location('pathname').should('not.include', '/login');
      },
    }
  );
});
