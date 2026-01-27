import login from '../PageObjects/login';
import  Smetools from '../PageObjects/smetools';
import {BeforeAll, Before, When} from '@badeball/cypress-cucumber-preprocessor';

const tools = new Smetools
BeforeAll(() => {
  cy.loginOnce();
});

Before(() => {
    cy.loginOnce()
  cy.visit('/'); 
});

When('user creates an invoice', () =>{ 

tools.addprducts() 

})

When('user adds a product', () =>{ 

tools.addprducts() 

})

When('user creates a Subscription', () =>{ 

tools.subscriptioncreation() 

})

When('user creates a Plan', () =>{ 

tools.plancreation() 

})

When('user creates tax', () =>{ 

tools.taxcreation() 

})

When('user creates a coupon', () =>{ 

tools.couponcreation() 

})
When('user creates Storefront Products', () =>{ 

tools. productcreation() 

})

