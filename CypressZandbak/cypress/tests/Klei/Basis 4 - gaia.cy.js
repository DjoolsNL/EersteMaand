/* eslint-disable prettier/prettier */
/// <reference types="cypress" />
/* eslint-disable cypress/unsafe-to-chain-command */

// ---------------------------------------------------------------------
//    E2E -- End-to-end  
// ---------------------------------------------------------------------
// Het doel van e2e tests is om een webservice/website te gebruiken zoals een user/consument
// dat zou doen. In het geval van onze opdrachtgever betekent het dat we de 
// software applicatie gebruiken alsof we zelf de garagehouder zijn die gebruik
// maakt van de applicatie.   
// We testen zgn userscenario's: 
// kan de user een vehicle aanmaken?
// kan de user een werkorder voor dit vehicle inboeken?
// Etc. Elk userscenario van stap 1 tot stap laatst scripten we 
// in de testfile die dit userscenario moet uitvoeren en testen
// hieronder zie je een eenvoudig userscenario uitgewerkt.
// kan de inwoner van Heerlen op de site Heerlen.nl info vinden over 
// de collectieve zorgverzekering? 
// Je kunt je wel voorstellen dat voor een site als Heerlen.nl nog tientallen(of zelfs honderden)
// andere userscenario's nodig zijn om de werking van de site goed te kunnen testen 


describe("We zoeken de mogelijkheid om een dier te adopteren", () => {
    it('Bezoek de hoofdpagina', () => {
        // dit gaan we echt niet toelichten. dit moet je zelf maar uitvogelen 
        cy.visit("https://www.gaiazoo.nl/?s=adoptie")
        cy.wait(100)
        cy.get('#CybotCookiebotDialogBodyLevelButtonAccept').click()
        cy.get('body').click({force: true})
        cy.scrollTo('bottom', { duration: 8000 })
    })
})

