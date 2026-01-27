
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
import Login from '../e2e/PageObjects/login'
 

Cypress.Commands.add('loginOnce', () => {
  cy.session(
    'merchant-session',
    () => {
      const login = new Login();
      cy.visit('/login');
      login.loginTestcase();
      // Wait for redirect after successful login
      cy.url().should('not.include', '/login');
      cy.url().should('include', '/dashboard'); // Verify we're on dashboard
    },
    {
      validate() {
        // Validate session by checking if we stay authenticated
        cy.visit('/dashboard/payments');
        cy.url().should('not.include', '/login');
      },
    }
  );
});