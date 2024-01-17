/// <reference types="cypress" />
/* eslint-disable cypress/unsafe-to-chain-command */
/////////////////////////////
//  NIVEAU 1
///////////////////////////////


context("Window", () => {
    beforeEach(() => {
        cy.visit("https://example.cypress.io/commands/window")
    })

    it("cy.window() - get the global window object", () => {
        // Meer info: https://on.cypress.io/window
        cy.window().should("have.property", "top")
    })

    it("cy.document() - get the document object", () => {
        // Meer info: https://on.cypress.io/document
        cy.document().should("have.property", "charset").and("eq", "UTF-8")
    })

    it("cy.title() - get the title", () => {
        // Meer info: https://on.cypress.io/title
        cy.title().should("include", "Kitchen Sink")
    })
})
