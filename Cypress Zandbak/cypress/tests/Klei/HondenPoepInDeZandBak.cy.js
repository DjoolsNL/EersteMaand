/// <reference types="cypress" />
/* eslint-disable cypress/unsafe-to-chain-command */
describe("Local Storage", () => {
    it("should visit mileuklachten.nl", () => {
        cy.visit("https://localhost:7097/")
        cy.get("#meldingen").click().log("drolmelding kan worden gedaan")
    })
})
