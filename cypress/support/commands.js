
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
Cypress.Commands.add('loginOnce', () => {
  const sessionId = 'merchant-session';
  
  cy.session(
    sessionId,
    () => {
      cy.visit('/login', { timeout: 60000 });
      cy.wait(5000);

      cy.get('#email', { timeout: 20000 })
        .should('be.visible')
        .clear({ force: true });
      cy.wait(1000);
      cy.get('#email').type(Cypress.env('EMAIL'), { force: true, delay: 150 });
      cy.wait(2000);

      cy.get("input[placeholder*='12 Characters']", { timeout: 20000 })
        .should('be.visible')
        .clear({ force: true });
      cy.wait(1000);
      cy.get("input[placeholder*='12 Characters']").type(Cypress.env('PASSWORD'), { force: true, delay: 150 });
      cy.wait(2000);

      cy.contains('button', 'Login').should('be.visible').click({ force: true });
      cy.wait(5000);
      cy.url({ timeout: 30000 }).should('include', '/dashboard');
    },
    {
      validate() {
        cy.request({
          url: '/dashboard',
          failOnStatusCode: false
        }).then((resp) => {
          expect(resp.status).to.eq(200);
        });
      },
      cacheAcrossSpecs: true
    }
  );
});