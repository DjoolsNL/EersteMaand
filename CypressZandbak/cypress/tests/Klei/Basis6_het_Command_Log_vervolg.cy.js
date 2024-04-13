/* eslint-disable prettier/prettier */
/// <reference types="cypress" />
/* eslint-disable cypress/unsafe-to-chain-command */

// ---------------------------------------------------------------------
//    Cypress Command Log  -- Logboek van een test 
// ---------------------------------------------------------------------
// Als Cypress een test uitvoert wordt de linkerkolom van het 
// browservenster waarin de test loopt, gebruikt om de test te loggen.
// Alle commando's uit het testscript worden weergegeven en ook alle communicatie
// tussen server en client(=browser) komt voorbij.
// Met het commando cy.log() kunnen we ook zelf dingen in het log schrijven.

describe("Oefenen met het Commandlog en het commando cy.log", () => {
    // In deze test spelen we alleen een beetje met JavaScript en Cypress
    it("1. Oefenen met het commando cy.log", () => {
        // cy.log('het linkermenu noemen we het commandlog of gewoon log')
        // cy.log('log: logboek van de test')
        // cy.log('cy.log() is een commando om info in het log te schrijven')
        // cy.log('Met het commando cy.log() kunnen we ook zelf dingen in het log schrijven.')
    })
    it("2. Oefenen met variabelen en het commando cy.log", () => {
        cy.log('Cypress maakt gebruik van JavaScript(JS) en met JS kunnen we leuke dingen doen')
        var a = 10
        var b = 2
        var c = a * b
        cy.log('var a = 10')
        cy.log('var b = 2')
        cy.log('var c = a * b')
        cy.log('wat is nu de waarde van c?')
        cy.log('de waarde van c is nu: ' + c)
        cy.log('Uitleg: aan var a hebben we de waarde 10 toegekend en aan var b de waarde 2. Aan var c hebben we daarna de waarde van a*b toegekend')
        cy.log('Als we daarna de waarde van var c weergeven geeft die als resultaat 20')

    })
    it("3. Oefenen met cy.log en een array", () => {
        // hier maken we een array in JS.  
        const fruitArray = ['appel', 'peer', 'kiwi', 'aardbei', 'kers', 'pruim', 'banaan'];

        // met een JS for kunnen we de elementen van de array 1 voor 1 benaderen en er iets
        // mee doen. Ook dit is door een collectie loopen 
        for (const element of fruitArray) {
            cy.log('gezond en lekker: ' + element);
            if (element == 'banaan') {
                cy.log('gaan met die banaan!')
            }
        }
        // voeg toe wat je wil
    })
    it("4. Oefenen met cy.log en een json variabele", () => {

        // we roepen hier met JS een variabele in het leven en vullen die
        // met een structuur die je ook in jsons ziet
        const eenVariabele =
        {
            naam: 'Stuifzand',
            kleur: 'grijs',
            gemeente: 'Kerkrade',
            locatie:
            {
                "straat": "Pannesheiderveldweg",
                "geo":
                {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            }
        }

        // hier gebruiken we de eerder in JS in het leven geroepen variabele
        // om de data die we nodig hebben eruit te halen (get). 
        // de manier waarop we hier de gegevens uit de variabele halen
        // zul je binnen cypress nog talloze keren tegenkomen
        // als we testdata uit json files gaan halen
        cy.log('naam: ' + eenVariabele.naam)
        cy.log('de kleur ervan: ' + eenVariabele.kleur)
        cy.log('waargenomen in:   ' + eenVariabele.gemeente)
        cy.log(eenVariabele.locatie.straat)
        cy.log(eenVariabele.locatie.geo.lat)

        // voeg toe wat je wil
    })
})
// 


describe("End-to-end betekent userscenario's testen.", () => {
    it("Een testscenario werk je uit in een testscript.", () => { })
    it("Scenario en script hebben hier dezelfde betekenis als in de filmwereld.", () => { })

    it("Een testscript wordt door Cypress van boven naar beneden gelezen en uitgevoerd.", () => { })
    it("Net als een filmscript volgt de ene scene de andere op.", () => { })
    it("In het testscript staan de scenes onder elkaar. Het testscript is de technische vertaling van een testscenario.", () => { })
    it("Waarom heb je een testscenario nodig? Om te documenteren wat het testscript moet testen.", () => { })
    it("Describes en it-blocken gebruik je om commando's die bij elkaar horen te groeperen. Net zoals in een filmscript shots gegroepeerd worden in scenes en scenes in sequences.", () => { })
})