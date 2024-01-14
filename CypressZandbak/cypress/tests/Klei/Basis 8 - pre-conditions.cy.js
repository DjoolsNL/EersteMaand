/* eslint-disable prettier/prettier */
/// <reference types="cypress" />
/* eslint-disable cypress/unsafe-to-chain-command */

// ------------------------------------------------------------------------------
//    Preconditions -- Wat allemaal klaar moet staan voordat je test kan draaien 
// ------------------------------------------------------------------------------
// Stel je gaat een site testen die vereist dat je een account nodig hebt.
// Dan kun je de functionaliteiten van de site pas goed testen als je dat account
// ook daadwerkelijk hebt en als je ook ingelogd bent. 
// Dus wil je bijvoorbeeld testen of je op een site iemand als vriend kunt toevoegen 
// moet je wel eerst zelf een account hebben aangemaakt en ingelogd zijn. Een account
// en ingelogd zijn in dit geval preconditions die nodig zijn om te testen of je
// iemand als vriend kunt toevoegen. Zou je een aparte test maken om te checken of
// je ook iemand kan ontvrienden dan is een account, ingelogd zijn en iemand die
// je als vriend hebt toegevoegd alledrie preconditions.   


describe("Kan ik met de zoekfuntie van de website Heerlen.nl op bijzondere bijstand zoeken?", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('1. Kan ik info over de collectieve zorgverzekering vinden?', () => {
        // dit gaan we echt niet toelichten. dit moet je zelf maar uitvogelen 
        cy.visit("https://www.heerlen.nl/")
        cy.wait(2000)

        // een <a> is een html element voor een url (link) 
        // cy.get('a') zoekt in de DOM naar <a> elementen en
        // selecteert deze.
        // .as('allAnchors') wijst alle <a>'s toe aan variabele 'allAnchors'
        // zodat we die variabele kunnen gebruiken om iets met de 
        // collectie <a>'s te doen 
        cy.get('a').as('allAnchors')

        // hier gebruiken we de cypress manier om over de collectie <a>'s 
        // te loopen. Loopen wil zeggen dat alle elementen in de collectie
        // 1 voor 1 apart worden genomen zodat ze 1 voor 1 gebruikt kunnen
        // worden. De .each() zorgt daarvoor. 
        // let teller = 1  
        let teller = 1 // hiermee geven we een nummer mee aan de logging van de <a>'s
        cy.get('@allAnchors').each((a) => {
            // dit is binnen een loop. 'a' staat weer voor de <a> die in deze loop
            // aan de beurt komt 
            const href = a.prop('href');
            cy.log('link ' + teller + ': ' + href);
            teller++ // variabele++ betekent verhoog waarde variabele met 1
        });

        // In html kan elk element een id attribuut hebben. 
        // cy.get('#searchbox') zoekt niet op een element in de DOM
        // maar op een specifiek id. het '#' vertelt cypress dat we in de DOM op zoek 
        // zijn naar een specifiek id
        cy.get('#searchbox').type('bijzondere bijstand{enter}') // {enter} voert het commando enter uit 

        // cy.get('p') selecteert alle <p> elementen in de DOM
        cy.get('p').contains('Collectieve ziektekostenverzekering').click()

        // cy.get('button span') haalt alle <button>'s die een <span> element bevatten uit de DOM
        // en uit die collectie selecteren we de <button> waarvan het <span> element de text 
        // 'Meer informatie' bevat 
        cy.get('button span').contains('Meer informatie').click()
    })
})

