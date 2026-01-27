import {faker } from '@faker-js/faker';
/* eslint-disable cypress/no-unnecessary-waiting */

class Payment {

    transactiontab = 'a[href="/payments/transactions"]'
    disputetab = "//div[@role='tablist']//a[normalize-space()='Disputes']"
    createdispute = "//button[.//span[text()='Create Dispute']]"
    titlefield = "#title"
    descriptionfield = "#description"
    amountfield = "#amount"
    paylinkref = "#payment_reference"
    expirydatebox = "#expire"
    submitbtn = "button[type='submit']"
    name = "endy"
    description = "testing"
    paylinkamount = "50000"
    amount = "50000"
    linkref = "quality"
    disputetype = "#type"
    transactionref = "#payment_reference"
    reference = "TEST-TCH-4TOuHRlxn"
    disputecatergory = "#category"

    //payment Link 
    paymentlinktab = "//a[@href='/payment-link/all'][normalize-space()='Payment Link']"
    createpaymentlink = "//span[text()='Create Payment LInk']"
    paylinkname = "input[placeholder='E.g Payment for all incoming students']"
    editlink = "input[placeholder='linkforsomething']"
    noexpirydate = "label[class='pointer'] span"

    //basic payment page
    paymentpagetab = "//span[text()='Create Payment Page']" //xpath
    createbasicpage = " //a[@href='/payment-page/create/basic']" //xpath
    pagetitle = "input[placeholder='Payment Page Title']"


    //product page
    createproductpage = " //a[@href='/payment-page/create/product']"

    //QRCode
    qrtab = "//a[@href='/qr-code/all'][normalize-space()='QR Code']" //xpath
    create2q = "//button[normalize-space()='Create QR Code']" //xpath
    dynamic = "#dynamic"
    dynamicmultiple = "#dynamic_multiple"
    nameField = "#name"
    onetimepayment = "#one-time"
    createQrcode = "//button[normalize-space()='Create Code']"  //xpath
    amountfixed = "#customer"
    subacctdropdown = ".form-group-select--is-multi__input-container.css-19bb58m"

    //singleTransfer
    transfertab = "a[href='/transfer']"
    transferfundbtn = "//span[normalize-space()='Transfer Funds']" //xpath
    currencydropdown = "#currency"  //xpath
    beneficarydropdown = "//div[@id='beneficiary']//div[2]//div[1]" //xpath
    acctnumberField = "#accountNumber"
    narrationField = "#narration"
    narration = "testing"
    transferbtn = "(//span[contains(text(),'Transfer Funds')])[2]" //xpath
    continuebtn = "//button[normalize-space()='Continue']" //xpath
    OtpField = "input[aria-label='Please enter OTP character 1']"
    Otptoken = "123456"
    Ngncurrency = "div[role='option'][data-value='🇳🇬 NGN']"

    //BulkTransfer
    bulktransfertab = "#route-1-tab"
    group1 = "//tr[@id='0']//input[contains(@type,'number')]" //xpath
    group2  = "//tr[@id='1']//input[contains(@type,'number')]" //xpath
    group3 = "//tr[@id='2']//input[contains(@type,'number')]" //xpath

    //beneficiary
    beneficiarytab= "a[href='/transfer/beneficiary']"
    singlebeneficiarybtn = "//span[normalize-space()='Add Single Beneficiary']" //xpath
    banknamedropdown = "//div[@id='bankName']//div[@class='form-group-select__value-container css-hlgwow']" //xpath
    emailfieldss = "input[placeholder='example@gmail.com']"
    acctnumberFields = "#account_number"
    addsinglebeneficiarybtn = "//button[normalize-space()='Add Beneficiary']" //xpath

    //bulkbeneficary
    bulkbeneficairytab = "//button[normalize-space()='Bulk Beneficiaries']" //xpath
    bulkbeneficiarycreationbtn = "//button[normalize-space()='Add Bulk Beneficiary']" //xpath
    fileupload = "input[name='file']"
    successfulalert = "div[role='alert']"
    inputGroupName  = "input[name='groupTag']"
    
    //inviteagent
    terminaltab = "//a[contains(@href,'/terminal/overview')][normalize-space()='Terminal']"    //xpath
    salesagenttab = "//div[contains(@role,'tablist')]//a[normalize-space()='Sales Agents']" //xpath
    inviteagentbtn = "//button[normalize-space()='Invite Agent']" //xpath
    firstnameField = "#firstName"
    lastNameField = "#lastName"
    inputphonenumber = "input[placeholder='E.g 0809 876 5432']"
    agentemailField = "input[placeholder='Type Here'][name='email']"
    addressoneField = "input[placeholder='Type Here'][name='address_1']"
    address = "Lagas, Nigeria."
    nigeriaclick = "div[data-value='Nigeria']"
    Lagosclick = "div[data-value='Lagos']"
    Nigeria = "Niger"
    countrydropdown = "#react-select-3-placeholder"
    State = "#state"
    inviteagentcreatebtn = "//button[contains(@type,'submit')][normalize-space()='Invite Agent'] " //xpath
    countryField = "#react-select-3-input"
    stateField = "#react-select-5-input"

    DisputeCreation(){
        cy.wait(4000)
        cy.get('.sidebar > #sidebar__nav > :nth-child(5) > .sidebar__nav__item__link').click()
        cy.contains('a.sidebar__nav__item__link', 'Transactions').click();
        cy.wait(2000)
        cy.xpath(this.disputetab).click()
        cy.xpath(this.createdispute).click()
        cy.get(this.titlefield).type('automationtesting')
        cy.get(this.descriptionfield).type(this.description)
        cy.get(this.disputetype).click()
        cy.wait(2000) 
        cy.get('.form-group-select--is-multi__option, .css-10wo9uf-option')
        .first()
        .click({ force: true }); 
      
        cy.get(this.transactionref).type(this.reference)
        cy.get(this.disputecatergory).click()
        cy.wait(2000)
        cy.get('.form-group-select--is-multi__option, .css-10wo9uf-option')
        .first()
        .click({ force: true });

        cy.get('input[type="file"][accept="image/*"]').attachFile('FRAGRANCE BY ELLA.jpg');
        cy.xpath("//button[contains(text(),'Create Dispute')]").click()
        cy.wait(6000)
        cy.get('section[aria-label="Notifications alt+T"]').should('be.visible')
    }


    Paymentlinkcreation(){
        cy.wait(6000)
        cy.xpath(this.paymentlinktab).click();
        cy.xpath(this.createpaymentlink).click();
        const randomName = faker.person.fullName();
        cy.get(this.paylinkname).type(randomName)
        cy.get(this.amountfield).type(this.amount)
        const ref = faker.string.alphanumeric(8).toUpperCase(); // e.g., 'A1B2C3D4'
        cy.get(this.editlink).type(ref)
        cy.get(this.noexpirydate).click()
        cy.contains('button', 'Create Link').click();
        cy.wait(2000)
        cy.contains('Payment Link Created').should('be.visible')
    }

    basicpaymentpagecreation(){
        cy.wait(10000)
        cy.xpath("//a[@href='/payment-page/all'][normalize-space()='Payment Page']").click();
        cy.xpath(this.paymentpagetab).click()
        cy.xpath(this.createbasicpage).click()
        const randomName = faker.person.fullName();
        cy.get(this.pagetitle).type(randomName)
        cy.get(this.descriptionfield).type(this.description)
        cy.get('input[type="file"][accept="image/*"]').attachFile('FRAGRANCE BY ELLA.jpg');
        cy.get("button[class='btn btn--sm btn--complementary-5 px-5 mt-2']").click()
        cy.get(this.amountfield).type(this.amount)
        cy.get('input[placeholder="Enter your Payment Page\'s Expiry Date"]').click()
        cy.xpath("//div[@class='react-datepicker__today-button']").click()
        cy.wait(3000)
        cy.get(this.submitbtn).click()
        cy.contains('Payment Page Created').should('be.visible')
        
    }

    productpaymentpagecreation(){
        cy.wait(5000)
        cy.contains('a', 'Payment Page').click();
        cy.xpath(this.paymentpagetab).click()
        cy.xpath(this.createproductpage).click()
        const randomName = faker.person.fullName();
        cy.get(this.pagetitle).type(randomName)
        cy.get(this.descriptionfield).type(this.description)
        cy.get('input[type="file"][accept="image/*"]').attachFile('FRAGRANCE BY ELLA.jpg');
        cy.get("button[class='btn btn--sm btn--complementary-5 px-5 mt-2']").click()
        cy.get('#products-input').click()
        cy.wait(5000)
        //cy.get("#react-select-21-option-0").click()
        cy.get('input[placeholder="Enter your Payment Page\'s Expiry Date"]').click()
        cy.xpath("//div[@class='react-datepicker__today-button']").click()
        cy.xpath("//body/div[@id='root']/div[@id='app-container']/div/div/section/div/div/div/div/section/div/div/div/form/div/div/div/div/div/div/div/div[@id='products']/div[1]").click()
        cy.xpath("//div[normalize-space()='scaling blusalt']").click()
        cy.xpath("//button[@type='submit']").click()
        //cy.contains('Payment Page Created').should('be.visible')

    }

    dynamicQRCode(){
        cy.wait(5000)
        cy.xpath(this.qrtab).click();
        cy.xpath(this.create2q).click()
        cy.get(this.dynamic).click()
        cy.get(this.nameField).type('Tech')
        cy.get(this.descriptionfield).type(this.description)
        cy.get(this.amountfield).type(this.amount)
        cy.get(this.onetimepayment).click()
        cy.get(this.noexpirydate).click()
        cy.xpath(this.createQrcode).click()
        cy.contains('QR Code Created!').should('be.visible')

    }

    multipleQrCode(){
        cy.wait(5000)
        cy.xpath(this.qrtab).click()
        cy.xpath(this.create2q).click()
        cy.get(this.dynamicmultiple).click()
        cy.get(this.nameField).type('Tech')
        cy.get(this.descriptionfield).type(this.description)
        cy.get(this.onetimepayment).type(this.amount)
        cy.get(this.amountfixed).click()
        cy.get(this.subacctdropdown).click()
      
// Open the dropdown first (adjust selector to match your dropdown input/button
cy.wait(2000)
// Then select the first option

cy.get('.form-group-select--is-multi__option')
  .should('have.length.greaterThan', 0)
  .eq(0)
  .click({ force: true });



        cy.get(this.noexpirydate).click()
        cy.xpath(this.createQrcode).click()
        cy.contains('QR Code Created!').should('be.visible')
    }

    singlefundtransfer(){
        cy.wait(6000)
        cy.get(this.transfertab).click()
        cy.wait(3000)
        cy.xpath(this.transferfundbtn).click()
        cy.get(this.currencydropdown).click()
        cy.get('.form-group-select__option')
        .contains('NGN')
        .click();
        cy.get("div[id='beneficiary'] .form-group-select__input-container").type('Stan Lee');
        cy.wait(5000)
        cy.contains('div', 'Stan Lee ( 8132561876 - OPAY DIGITAL SERVICES LIMITED )').click();
        cy.get(this.amountfield).type(this.amount)
        cy.get(this.narrationField).type(this.narration)
        cy.contains('button', 'Transfer Funds').click();
        cy.xpath(this.continuebtn).click()
        cy.get(this.OtpField).type(this.Otptoken)
        cy.xpath(this.continuebtn).click()
        //cy.contains('Fund Transfer Successful').should('be.visible')
    }
    waitForPageLoad() {
    cy.window().should('have.property', 'document');
    cy.document().its('readyState').should('eq', 'complete');
  }

    bulktransferfund(){
        
        cy.get(5000)
        cy.get(this.transfertab).click()
        cy.wait(4000)
        cy.get(this.bulktransfertab).click()
        cy.wait(3000)
        cy.xpath(this.transferfundbtn).click()
        cy.get('.form-group-select__input-container').click()
        cy.wait(2000) 
        cy.xpath("//div[normalize-space()='NEW ONE']")
        .first()
        .click();
        cy.get(this.narrationField).type(this.narration)
        cy.xpath(this.group1).type('500')
        //cy.xpath(this.group2).type('500')
        //cy.xpath(this.group3).type('500')
        cy.contains('button', 'Transfer Funds')
        .scrollIntoView()
        .click()
        cy.xpath(this.continuebtn).click()
        cy.get(this.OtpField).type(this.Otptoken)
        cy.xpath(this.continuebtn).click()
        
    }
     waitForPageLoad() {
    cy.window().should('have.property', 'document');
    cy.document().its('readyState').should('eq', 'complete');
  }


    Singlebeneficiarycreation(){
        cy.get(70000)
        cy.get(this.transfertab).click()
        cy.wait(4000)
        cy.get(this.beneficiarytab).click()
        cy.xpath(this.singlebeneficiarybtn).click()
        cy.xpath(this.banknamedropdown).type('OPAY DIGITAL SERVICES LIMITED')
        cy.wait(2000) 
        cy.xpath("//div[normalize-space()='OPAY DIGITAL SERVICES LIMITED']")
        .click({ multiple: true, force: true })
        cy.get(this.acctnumberFields).type('8147633414')
        cy.wait(5000)
        cy.get(this.currencydropdown).click()
        cy.wait(5000)
        //cy.get('.form-group-select__option').click()
        cy.get('.form-group-select__option')
        .contains('NGN')
        .click();
        cy.get(this.emailfieldss).type('endurance@gmail.com')
        cy.xpath(this.addsinglebeneficiarybtn).click()
        cy.contains('New Beneficiary Added').should('be.visible')
    }

    bulkbeneficiarycreation(){
        cy.get(5000)
        cy.get(this.transfertab).click()
        cy.wait(4000)
        cy.get(this.beneficiarytab).click()
        cy.xpath(this.bulkbeneficairytab).click()
        cy.xpath(this.bulkbeneficiarycreationbtn).click()
        cy.get(this.fileupload).attachFile('download.csv')
        cy.xpath(this.continuebtn).click()
        cy.get(this.successfulalert).should('be.visible')
        cy.get(this.inputGroupName).type('welcome')
        cy.xpath(this.continuebtn).click()
        //cy.contains('Succesful').should('be.visible')

    }
    
    
    inviteagent(){
        cy.xpath(this.terminaltab).click()
        cy.xpath(this.salesagenttab).click()
        cy.xpath(this.inviteagentbtn).click()
        const firstNames = ['John', 'Grace', 'Chinonso', 'Elijah', 'Ada', 'David'];
        const lastNames = ['Okafor', 'Smith', 'Johnson', 'Bello', 'Taylor', 'Ogunleye'];

        const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

        const firstName = getRandomItem(firstNames);
        const lastName = getRandomItem(lastNames);

        cy.log(`Random Full Name: ${firstName} ${lastName}`);
        cy.get(this.firstnameField).type(firstName)
        cy.get(this.lastNameField).type(lastName)
        

         const phone = generatePhoneNumber();

        cy.get(this.inputphonenumber).type(phone)

            function generatePhoneNumber() {
        const prefixes = ['70', '80', '81', '90', '91'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000); // 8-digit suffix
        return prefix + number;
        }

        
        console.log(this.Phonenuminput); // e.g. 08123456789

         const email = generateEmail();
        
        cy.get(this.agentemailField).type(email)

                function generateEmail() {
        const domains = ['blusalt.com'];
        const name = Math.random().toString(36).substring(2, 10); // random string
        const domain = domains[Math.floor(Math.random() * domains.length)];
        return `${name}@${domain}`;
        }
        console.log(this.emailinput);
    
        cy.get(this.addressoneField).type(this.address)
        cy.get(this.countryField).type('Nigeria')
        cy.xpath("//div[contains(text(),'Nigeria')]").click()
        cy.get(this.stateField).type('lagos')
        cy.xpath("//div[contains(text(),'Lagos')]").click()
        cy.xpath(this.inviteagentcreatebtn).click()
        cy.contains('Agent Invited Successfully').should('be.visible')

    }



}
export default Payment