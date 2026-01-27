import Balance from '../PageObjects/Balance';
import login from '../PageObjects/login';
import {BeforeAll,Before, When} from '@badeball/cypress-cucumber-preprocessor';

const Balances = new Balance
BeforeAll(() => {
  cy.loginOnce();
});

Before(() => {
    cy.loginOnce()
  cy.visit('/balance/collection-wallet'); 
});

 When('user withdraws from collection Wallet', () =>{ 

Balances.withdrawCollectionWallet() 

})

When('user withdraws from transfer Wallet', () =>{
Balances.withdrawtransferwalllet()
})