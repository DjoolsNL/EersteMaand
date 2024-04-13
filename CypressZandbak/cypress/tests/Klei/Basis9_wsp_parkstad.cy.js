/* eslint-disable prettier/prettier */
/// <reference types="cypress" />
/* eslint-disable cypress/unsafe-to-chain-command */

describe("Window", () => {
    beforeEach(() => {
        cy.visit("https://www.wspparkstad.nl/")
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it("cy.window() - get the global window object", () => {
        // cy.on("fail", (err, runnable) => {
        //     cy.log(err.message)
        //     return false
        // })
        // Meer info: https://on.cypress.io/window
        cy.get("button").contains("Alles accepteren").click()
        cy.get("a").contains("voor werkzoekenden").click({ force: true })
        cy.get("a").contains("Vacatures").click({ force: true })
        // cy.get("span")
        //     .contains("Sociale Software-straat Heerlen")
        //     .click()
    })
})
