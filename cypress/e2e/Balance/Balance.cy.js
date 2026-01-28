import Balance from '../PageObjects/Balance';
import {BeforeAll,Before, When} from '@badeball/cypress-cucumber-preprocessor';

const Balances = new Balance
BeforeAll(() => {
  cy.loginOnce();
});

Before(() => {
    cy.loginOnce()
    cy.intercept('GET', '**').as('pageLoad');
    cy.visit('/balance/collection-wallet'); 
    cy.wait('@pageLoad', { timeout: 10000 }).then(() => {
      cy.get('body', { timeout: 10000 }).should('be.visible');
  });
});

 When('user withdraws from collection Wallet', () =>{ 
cy.wrap(null).then(() => {
  Balances.withdrawCollectionWallet() 
  });

})

When('user withdraws from transfer Wallet', () =>{
  cy.wrap(null).then(() => {
Balances.withdrawtransferwalllet()
});

})