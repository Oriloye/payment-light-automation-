/* eslint-disable cypress/no-unnecessary-waiting */
class login{

    emailField = "#email"
    passwordField = "//input[contains(@placeholder,'12 Characters (Digits, Symbol, Letters)')]"
    loginBtn = "button[type='submit']"
    otpField = "input[class='disabled:cursor-not-allowed']"
    email = "abass@blusalt.net"
    password = "@Blusalt2030"
    otp = "123456"



loginTestcase(){
cy.visit('https://dev-merchant.blusalt.net/login')

    cy.get(this.emailField, { timeout: 10000 }).should('be.visible')
      .type(this.email)

    cy.xpath(this.passwordField).type(this.password)

    cy.contains('button', 'Login').click()

    // confirm login success
    cy.url().should('not.include', '/login')

// cy.get(this.otpField).type(this.otp)
// cy.get(this.submit).click()



}}



export default login