/* eslint-disable prettier/prettier */
/// <reference types="cypress" />
/* eslint-disable cypress/unsafe-to-chain-command */

// ---------------------------------------------------------------------
//    De DOM -- interactie tussen cypress script en browser via de DOM 
// ---------------------------------------------------------------------
// Elke get() in cypress kijkt in het object dat alle data van de webpagina
// bevat. Dit object heet de DOM. In de DOM zit de hele webpagina
// en met cy.get() kunnen we binnen de DOM zoeken en selecteren 

describe("Oefenen met de DOM", () => {
    it('1. Buienradar', () => {

        // dit gaan we echt niet toelichten. dit moet je zelf maar uitvogelen 
        cy.visit("https://www.buienradar.nl/nederland/neerslag/buienradar")
        cy.wait(3000)

        // Altijd hetzelfde... cy.get() bevraagt de DOM en in dit geval
        // wordt gezocht naar een element met een id die de waarde 
        // 'onetrust-pc-btn-handler' heeft
        cy.get('#onetrust-pc-btn-handler').click()

        // In de DOM wordt naar een <button> gezocht met de text 'Weigeren'
        cy.get('button').contains('Weigeren').click()

        // In de DOM wordt naar een <a> gezocht met de text 
        // 'Nu niet, misschien later'
        cy.get('a').contains('Nu niet, misschien later').click()
        cy.wait(3000) // we wachten even zodat je kunt zien wat de kaart laat zien

        // In de DOM wordt naar een <a> gezocht die een <span> heeft met de text
        // 'Satelliet'
        cy.get('a span').contains('Satelliet').click()

        // de pause functie maakt het mogelijk de test te onderbreken om bijv iets
        // uit te zoeken 
        //cy.pause()

    })

    it('2. Hoe weet je wat je nodig hebt uit de DOM?', () => {
        var tekst = 'Om je cypress script op de gewenste button te laten klikken moet je wel eerst weten hoe je die in de DOM kunt vinden'
        cy.log(tekst)

        tekst = 'Dus moeten we in de DOM gaan spitten om de selector voor deze button te vinden'
        cy.log(tekst)

        tekst = 'Een selector moet uniek zijn zodat je script het juiste element in de DOM kan vinden'
        cy.log(tekst)

        tekst = 'Zoeken in de DOM noemen we ook wel eens queryen. Een cy.get() is een query oftewel een zoekopdracht'
        cy.log(tekst)

        tekst = 'Een .contains(\'Opslaan\') is eveneens een query maar wel eentje die zoekt in de collectie die door de cy.get() uit de DOM is getrokken'
        cy.log(tekst)

        tekst = 'Om te kijken wat in de DOM zit om zo een selector te vinden moet je F12 drukken'
        cy.log(tekst)

        tekst = 'F12 opent de dev tools sectie van je browser en stelt je zo instaat op zoek te gaan naar een selector'
        cy.log(tekst)

        tekst = 'Werken met de dev tools sectie is een van de basisvaardigheden die je moet kennen om met Cypress te werken'
        cy.log(tekst)

        tekst = 'aaaa'
        cy.log(tekst)
    })
})
