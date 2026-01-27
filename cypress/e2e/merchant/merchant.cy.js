import login from '../PageObjects/login';
import Merchants from '../PageObjects/merchant';
import {BeforeAll,Before, When} from '@badeball/cypress-cucumber-preprocessor';

const merchant = new Merchants

BeforeAll(() => {
  cy.loginOnce();
});

Before(() => {
    cy.loginOnce()
  cy.visit('/'); 
});

 When('user creates a customer', () =>{ 

 merchant.customercreation() 

 })


 When('user adds a user', () =>{ 

 merchant.usercreation() 

 })

 When('user validates payout page', () => {
    merchant.payoutPage()
 })