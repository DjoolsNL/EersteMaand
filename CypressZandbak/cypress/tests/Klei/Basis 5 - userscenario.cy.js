/* eslint-disable prettier/prettier */
/// <reference types="cypress" />
/* eslint-disable cypress/unsafe-to-chain-command */

// -------------------------------------------------------------------------------------------------
//    Userscenario's -- Kan ik op site X van premium naar basic member switchen? Of iets dergelijks  
// -------------------------------------------------------------------------------------------------
// Het doel van e2e tests is om een webservice/website te gebruiken zoals een user/consument
// dat zou doen. In het geval van CarSys betekent het dat we de CarSys
// applicatie gebruiken alsof we zelf de garagehouder zijn die de applicatie gebruikt om
// de werkprocessen binnen zijn bedrijf te managen.
//
// We testen zgn userscenario's: 
// kan de user een vehicle aanmaken?
// kan de user een werkorder voor dit vehicle inboeken?
// Etc. Elk userscenario van stap 1 tot stap laatst scripten we 
// in de testfile die dit userscenario moet uitvoeren en testen
// hieronder zie je een eenvoudig userscenario uitgewerkt.
// 
// Kan de inwoner van Heerlen op de site Heerlen.nl info vinden over 
// de collectieve zorgverzekering? 
// Je kunt je wel voorstellen dat voor een site als Heerlen.nl nog tientallen(of zelfs honderden)
// andere userscenario's nodig zijn om de werking van de site goed te kunnen testen 


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

        // In html kan elk element een id-attribuut hebben. 
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

