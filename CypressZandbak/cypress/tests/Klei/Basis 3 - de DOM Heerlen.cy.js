/* eslint-disable prettier/prettier */
/// <reference types="cypress" />
/* eslint-disable cypress/unsafe-to-chain-command */

// ---------------------------------------------------------------------
//    De DOM -- interactie tussen cypress script en browser via de DOM 
// ---------------------------------------------------------------------
// Elke get() in cypress kijkt in het object dat alle data van de webpagina
// bevat. Dit object heet de DOM. In de DOM zit de hele webpagina
// en met cy.get() kunnen we binnen de DOM zoeken en selecteren 
import 'cypress-network-idle'
describe("Oefenen met de DOM", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('1. Wat heeft Heerlen te bieden bij de bijzondere bijstand', () => {
        //cy.waitForNetworkIdle('*', '*', 1000)
        cy.intercept({method: 'GET', path: '*'}).as('get')
        cy.intercept({method: 'POST', path: '*'}).as('post')
        // dit gaan we echt niet toelichten. dit moet je zelf maar uitvogelen 
        cy.visit("https://www.heerlen.nl/")
        cy.wait(2000)

        // een <a> is een html element voor een url (link) 
        // cy.get('a') zoekt in de DOM naar <a> elementen en
        // selecteert ze allemaal.
        // .as('allAnchors') wijst alle <a>'s toe aan variabele 'allAnchors'
        // zodat we die variabele kunnen gebruiken om iets met de 
        // collectie <a>'s te doen 
        //cy.get('a').as('allAnchors')

        // hier loopen we over de collectie <a>'s. 
        // Loopen wil zeggen dat alle elementen in de collectie
        // 1 voor 1 apart worden genomen (in de loop) zodat ze 1 voor 1 gebruikt kunnen
        // worden. De .each() zorgt daarvoor. 
        // let teller = 1  
        // let teller = 1 // hiermee geven we een nummer mee aan de logging van de <a>'s
        // cy.get('@allAnchors').each((a) => {
        //     // dit is binnen een loop. 'a' staat weer voor de <a> die in deze loop
        //     // aan de beurt komt 
        //     const href = a.prop('href');
        //     cy.log('link ' + teller + ': ' + href);
        //     teller++ // variabele++ betekent verhoog waarde variabele met 1
        // });

        // In html kan elk element een id attribuut hebben.
        // cy.get('#searchbox') zoekt niet op een element in de DOM
        // maar op een specifiek id. het '#' vertelt cypress dat we in de DOM op zoek 
        // zijn naar een specifiek id
        cy.get('#searchbox').type('bijzondere bijstand{enter}') // {enter} voert het commando enter uit 

        //cy.get('p') selecteert alle <p> elementen in de DOM
        cy.get('p').contains('Collectieve ziektekostenverzekering').click()

        // cy.get('button span') haalt alle <button>'s die een <span> element bevatten uit de DOM
        // en uit die collectie selecteren we de <button> waarvan het <span> element de text 
        // 'Meer informatie' bevat 
        cy.get('button span').contains('Meer informatie').click()

        cy.wait(1001)
        cy.get('body').click({force: true})
    })
})
