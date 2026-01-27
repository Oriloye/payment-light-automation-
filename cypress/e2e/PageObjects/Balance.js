class Balance{
    //Collectionwallet
    Balancetab = "//li[@class='sidebar__nav__item']//a[@class='sidebar__nav__item__link'][normalize-space()='Balance']" //xpath
    withdrawbtn = "//span[normalize-space()='Withdraw']" //xpath
    transferwallletbtn = "//div[@role='tablist']//a[normalize-space()='Transfer Wallet']" //xpath
    payoutwallettab = "//p[normalize-space()='Payout Account']" //xpath
    continuebtn = "//button[normalize-space()='Continue']" //xpath
    amountField = "//input[@id='amount']"
    amount = "50000"
    withdrawbutton = "//button[@type='submit']"
    otpFied = "//input[contains(@aria-label,'Please enter OTP character 1')]"
    Otptoken = "123456"
    confirmOtpbtn = "//button[normalize-space()='Confirm OTP']"
    WithdrawToBankAccountBtn = "//body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/label[1]/input[1]"
    WIthdrawToPayoutAccount = "//div[@role='dialog']//div[1]//div[1]//div[1]//div[2]//div[1]//div[1]//label[1]//input[1]"
    narration = "//input[@id='narration']"
    narrationData = "QA Test"
    TFwithdraw= "//div[@class='otp__input with-separator']//div"
    GoToTrnBalbtn= "//button[normalize-space()='Go to Transfer Balance']"
    bankOptionDropDown= "//div[@id='bank']//div//div//div[contains(@aria-hidden,'true')]//*[name()='svg']"
    BankABC= "//div[normalize-space()='BankABC']"
    AcctNoField= "//input[@id='account_number']"
    AccountNo= "3138829143"
    GoToCollectionBal= "//button[normalize-space()='Go to Collection Balance']"
    collectionTRFWLTbtn= "//p[normalize-space()='Transfer Wallet']"
    CollectionTRFWLTWithdawbtn= "//p[normalize-space()='Transfer Wallet']"
    
    


    withdrawCollectionWallet(){
        cy.wait(6000)
        cy.xpath(this.Balancetab).click()
        cy.xpath(this.withdrawbtn).click()
        //withdraw by payout
        cy.xpath(this.WIthdrawToPayoutAccount).click()
        cy.xpath(this.continuebtn).click()
        cy.xpath(this.amountField).type(this.amount)
        cy.wait(2000)
        cy.xpath(this.withdrawbutton).scrollIntoView().click()
        cy.xpath(this.TFwithdraw).type(this.Otptoken)
        cy.xpath(this.otpFied).type(this.Otptoken)
        cy.xpath(this.confirmOtpbtn).click()
        cy.xpath(this.GoToCollectionBal).click()
        //withdraw by transfer wallet
        cy.wait(2000)
        cy.xpath(this.withdrawbtn).click()
        cy.xpath(this.collectionTRFWLTbtn).click({force: true})
        cy.xpath(this.continuebtn).click()
        cy.xpath(this.amountField).type(this.amount)
        cy.wait(2000)
        cy.xpath(this.withdrawbutton).click()
        cy.xpath(this.TFwithdraw).type(this.Otptoken)
        cy.xpath(this.otpFied).type(this.Otptoken)
        cy.xpath(this.confirmOtpbtn).click()
        cy.xpath(this.GoToTrnBalbtn).click()
    }
   

    withdrawtransferwalllet(){
        cy.wait(6000)
        cy.xpath(this.Balancetab).click()
        cy.xpath(this.transferwallletbtn).click()
        cy.xpath(this.withdrawbtn).click()
        //withdraw by payout
        cy.xpath(this.WIthdrawToPayoutAccount).click()
        cy.xpath(this.continuebtn).click()
        cy.xpath(this.amountField).type(this.amount)
        cy.xpath(this.narration).type(this.narrationData)
        cy.wait(2000)
        cy.xpath(this.withdrawbutton).scrollIntoView().click()
        cy.xpath(this.TFwithdraw).type(this.Otptoken)
        cy.xpath(this.otpFied).type(this.Otptoken)
        cy.xpath(this.confirmOtpbtn).click()
        cy.xpath(this.GoToTrnBalbtn).click()
        //withdraw by bank account
        cy.wait(2000)
        cy.xpath(this.withdrawbtn).click()
        cy.xpath(this.WithdrawToBankAccountBtn).click()
        cy.xpath(this.continuebtn).click()
        cy.xpath(this.bankOptionDropDown).click()
        cy.xpath(this.BankABC).click()
        cy.xpath(this.AcctNoField).type(this.AccountNo)
        cy.wait(3000)
        cy.xpath(this.amountField).type(this.amount)
        cy.xpath(this.narration).type(this.narrationData)
        cy.wait(2000)
        cy.xpath(this.continuebtn).scrollIntoView().click()
        cy.xpath(this.TFwithdraw).type(this.Otptoken)
        cy.xpath(this.otpFied).type(this.Otptoken)
        cy.xpath(this.confirmOtpbtn).click()
        cy.xpath(this.GoToTrnBalbtn).click()
        
    }

    
}

export default Balance