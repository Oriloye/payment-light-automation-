import login from '../PageObjects/login.js';
import { Given, When} from '@badeball/cypress-cucumber-preprocessor';


const loginTest = new login



When('Open loginpage', () =>{
cy.visit('/')

})

Given('I submit login', () =>{
loginTest.loginTestcase()

});



            