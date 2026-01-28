/* eslint-disable cypress/no-unnecessary-waiting */
class login {

  emailField = '#email'
  passwordField = "input[placeholder*='12 Characters']"
  loginBtn = "button[type='submit']"

  loginTestcase() {
 
    cy.document().should('have.property', 'readyState', 'complete');
    cy.wait(2000);
  cy.get(this.emailField, { timeout: 20000 })
      .should('exist')
      .should('be.visible')
      .should('not.be.disabled');

  
    cy.get(this.emailField).then(($email) => {
      cy.wrap($email).clear({ force: true });
    });

    cy.wait(500);


    cy.get(this.emailField).then(($email) => {
      cy.wrap($email).type(Cypress.env('EMAIL'), { delay: 100, force: true });
    });

    cy.wait(1000);

 
    cy.get(this.passwordField, { timeout: 20000 })
      .should('exist')
      .should('be.visible')
      .should('not.be.disabled');

    cy.get(this.passwordField).then(($password) => {
      cy.wrap($password).clear({ force: true });
    });

    cy.wait(500);

    cy.get(this.passwordField).then(($password) => {
      cy.wrap($password).type(Cypress.env('PASSWORD'), { delay: 100, force: true });
    });

    cy.wait(1000);

  
    cy.contains('button', 'Login')
      .should('be.visible')
      .should('not.be.disabled')
      .click({ force: true });

   
    cy.location('pathname', { timeout: 30000 })
      .should('not.include', '/login');

    
    cy.wait(2000);
  }
}


export default login