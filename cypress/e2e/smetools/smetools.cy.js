
import  Smetools from '../PageObjects/smetools';
import {BeforeAll, Before, When} from '@badeball/cypress-cucumber-preprocessor';

const tools = new Smetools
BeforeAll(() => {
  cy.loginOnce();
});

Before(() => {
    cy.loginOnce()
    cy.intercept('GET', '**').as('pageLoad');
    cy.visit('/dashboard'); 
    cy.wait('@pageLoad', { timeout: 10000 }).then(() => {
      cy.get('body', { timeout: 10000 }).should('be.visible');
  });
});

When('user creates an invoice', () =>{ 
cy.wrap(null).then(() => {
tools.addprducts() 
});
})

When('user adds a product', () =>{ 
cy.wrap(null).then(() => {
tools.addprducts() 
});
})

When('user creates a Subscription', () =>{ 
cy.wrap(null).then(() => {
tools.subscriptioncreation() 
});
})

When('user creates a Plan', () =>{ 
cy.wrap(null).then(() => {
tools.plancreation() 
});
})

When('user creates tax', () =>{ 
cy.wrap(null).then(() => {
tools.taxcreation() 
});
})

//When('user creates a coupon', () =>{ 
//cy.wrap(null).then(() => {
//tools.couponcreation() 
//});
//})
When('user creates Storefront Products', () =>{ 
cy.wrap(null).then(() => {
tools. productcreation() 
});
})

