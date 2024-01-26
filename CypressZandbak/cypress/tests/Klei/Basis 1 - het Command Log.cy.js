/* eslint-disable prettier/prettier */
/// <reference types="cypress" />
/* eslint-disable cypress/unsafe-to-chain-command */

// ---------------------------------------------------------------------
//    Cypress Commandlog  -- Logboek van een test 
// ---------------------------------------------------------------------

describe("Wat is het commandlog van Cypress?", () => {
    // In deze test spelen we een beetje met het commandlogipt en Cypress

    it("Linkerkolom waar deze regel staat is het commandlog", () =>{
    cy.log('Als Cypress een test uitvoert wordt de linkerkolom van het browservenster waarin de test loopt, gebruikt om de test te loggen. Alle commando\'s uit het testscript worden weergegeven en ook alle communicatie tussen server en client(=browser) komt voorbij. Met het commando cy.log() kunnen we ook zelf dingen in het commandlog schrijven.')

    })
    it("Oefenen met het commando cy.log", () => {
        cy.log('het linkermenu noemen we het commandlog of gewoon log')
        cy.log('log: logboek van de test')
        cy.log('cy.log() is een commando om info in het log te schrijven')
        cy.log('Elk cy.log() commando in het commandlog begint met het woord \'Log\'')
    })
})

describe("Het enige dat deze describe doet is deze regel in het log zetten", () => { })
describe("Het enige dat deze describe doet is deze regel in het log zetten", () => { })
describe("Het enige dat deze describe doet is deze regel in het log zetten", () => { })
describe("Deze describe doet 3 dingen:", () => {
    it("hij schrijft een regel in het log en", () => { })
    it("hij omsluit drie it-blocken", () => { })
    it("het enige dat deze it-block doet is deze regel in het log zetten", () => { })
})
describe("Describes en it-blocken doen zelf helemaal niets", () => {
    it("behalve een regel in het log schrijven.", () => { })
    it("Ze worden gebruikt als doos om code te groeperen.", () => { })
})
