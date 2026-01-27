import login from '../PageObjects/login';
import Payment from '../PageObjects/payment';

import {BeforeAll, Before,When} from '@badeball/cypress-cucumber-preprocessor';

const gateway = new Payment
BeforeAll(() => {
  cy.loginOnce();
});

Before(() => {
    cy.loginOnce()
  cy.visit('/'); 
});

When('user creates disputes', () =>{ 

gateway.DisputeCreation() 

})

 When('user creates payment link', () =>{ 

gateway.Paymentlinkcreation() 

})

When('user creates Basic payment page', () =>{ 

gateway.basicpaymentpagecreation() 

})

When('user creates Product payment page', () =>{ 

gateway.productpaymentpagecreation() 

})

When('user creates Dynamic Qr Code', () =>{ 

gateway.dynamicQRCode() 

})

When('user creates Multiple Dynamic Qr Code', () =>{ 

gateway.multipleQrCode() 

})

 When('user creates makes single transfer', () =>{ 

 gateway.singlefundtransfer() 

 })

When('user creates makes Bulk transfer', () =>{ 

gateway.bulktransferfund() 

})

When('user adds single beneficiary', () =>{ 

gateway.Singlebeneficiarycreation() 

})

When('user adds bulk beneficiary', () =>{ 

gateway.bulkbeneficiarycreation() 

})

When('user invites agent via terminal', () =>{ 

gateway.inviteagent() 

})