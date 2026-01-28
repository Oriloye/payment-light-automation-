import Payment from '../PageObjects/payment';

import {BeforeAll, Before,When} from '@badeball/cypress-cucumber-preprocessor';

const gateway = new Payment
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

When('user creates disputes', () =>{ 
cy.wrap(null).then(() => {
gateway.DisputeCreation() 
});
})

 When('user creates payment link', () =>{ 
cy.wrap(null).then(() => {
gateway.Paymentlinkcreation() 
});
})

When('user creates Basic payment page', () =>{ 
cy.wrap(null).then(() => {
gateway.basicpaymentpagecreation() 
});
})

When('user creates Product payment page', () =>{ 
cy.wrap(null).then(() => {
gateway.productpaymentpagecreation() 
});
})

When('user creates Dynamic Qr Code', () =>{ 
cy.wrap(null).then(() => {
gateway.dynamicQRCode() 
});
})

When('user creates Multiple Dynamic Qr Code', () =>{ 
cy.wrap(null).then(() => {
gateway.multipleQrCode() 
});
})

 When('user creates makes single transfer', () =>{ 
cy.wrap(null).then(() => {
 gateway.singlefundtransfer() 
});
 })

When('user creates makes Bulk transfer', () =>{ 
cy.wrap(null).then(() => {
gateway.bulktransferfund() 
});
})

//When('user adds single beneficiary', () =>{ 
//cy.wrap(null).then(() => {
//gateway.Singlebeneficiarycreation() 
//});
//})

//When('user adds bulk beneficiary', () =>{ 
//cy.wrap(null).then(() => {
//gateway.bulkbeneficiarycreation() 
//});
//})

//When('user invites agent via terminal', () =>{ 
//cy.wrap(null).then(() => {
//gateway.inviteagent() 
//});
//})