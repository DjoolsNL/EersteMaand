/* eslint-disable prettier/prettier */
/// <reference types="cypress" />
/* eslint-disable cypress/unsafe-to-chain-command */

describe("Window", () => {
    beforeEach(() => {
        cy.visit("https://roadmap.sh/qa")
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it("find out what QA is", () => {
        // Meer info: https://on.cypress.io/window
        cy.get('[data-group-id="100-qa-basics:what-is-qa"]').click()
        cy.wait(2000)
        cy.get('[id="close-topic"]')

    })
})
