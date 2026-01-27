
// Import commands.js using ES2015 syntax:
import './commands';
require('cypress-xpath');

            Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Cannot read properties of null')) {
    return false;
  }
  return true;
});