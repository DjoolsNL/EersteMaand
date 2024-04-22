// //***********************************************
// // command.js is enkel voor custom commands. e2e.js is voor imports
// //***********************************************

// // This example commands.js shows you how to
// // create various custom commands and overwrite
// // existing commands.
// // https://on.cypress.io/custom-commands3
// //***********************************************
// //
// //
// // -- This is a parent command --
// // Cypress.Commands.add("login", (email, password) => { ... })
// //
// //
// // -- This is a child command --
// // Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
// //
// //
// // -- This is a dual command --
// // Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
// //
// //
// // -- This will overwrite an existing command --
// // Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// // import './cypress/fixtures/lang_en-GB.json'
// // import language from './cypress/fixtures/lang_en-GB.json'



Cypress.Commands.add("wacht", (ms) => {
   cy.wait(ms); 
 })

 Cypress.Commands.add("pak", (input) => {
  cy.get(input) 
})

Cypress.Commands.add("bevat", (input) => {
  cy.contains(input)
})

Cypress.Commands.add('vindInRij', { prevSubject: 'element' }, (subject, index) => {
  return cy.wrap(subject).find('td').eq(index);
})

// leeg cc
// Cypress.Commands.add("", () => {
//  
// })

// leeg cc
// Cypress.Commands.add("", () => {
//   
// })


