/* eslint-disable cypress/no-unnecessary-waiting */
class login{

  emailField = '#email'
  passwordField = "input[placeholder*='12 Characters']"
  loginBtn = "button[type='submit']"

  loginTestcase() {

    cy.get(this.emailField, { timeout: 20000 })
      .should('exist')
      .should('be.visible')

    
    cy.get(this.emailField)
      .clear({ force: true })
      .type(Cypress.env('EMAIL'), { delay: 80, force: true })

    cy.get(this.passwordField)
      .should('exist')
      .clear({ force: true })
      .type(Cypress.env('PASSWORD'), { delay: 80, force: true })

    cy.contains('button', 'Login').click()

   
    cy.location('pathname', { timeout: 20000 })
      .should('not.include', '/login')
  }
}


export default login