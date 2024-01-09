/* eslint-disable prettier/prettier */
/// <reference types="cypress" />
/* eslint-disable cypress/unsafe-to-chain-command */

// ---------------------------------------------------------------------
//    Cypress wat is dat  -- Cypress is een bundel JS libraries 
// ---------------------------------------------------------------------

describe("Cypress is de naam voor een verzameling JS ?", () => {
    // In deze test spelen we een beetje met het commandlog ipt en Cypress

    it("Linkerkolom waar deze regel staat is het commandlog", () =>{
    cy.log('Als Cypress een test uitvoert wordt de linkerkolom van het browservenster waarin de test loopt, gebruikt om de test te loggen. Alle commando\'s uit het testscript worden weergegeven en ook alle communicatie tussen server en client(=browser) komt voorbij. Met het commando cy.log() kunnen we ook zelf dingen in het commandlog schrijven.')

    })
    it("Oefenen met het commando cy.log", () => {
        cy.log('het linkermenu noemen we het commandlog of gewoon log')
        cy.log('log: logboek van de test')
        cy.log('cy.log() is een commando om info in het log te schrijven')
        cy.log('Elk cy.log() commando in het commandlog begint met het woord \'Log\'')
    })








    // // 
    // it("2. Oefenen met variabelen en het commando cy.log", () => {
    //     cy.log('Cypress maakt gebruik van JavaScript(JS) en met JS kunnen we leuke dingen doen')
    //     var a = 10
    //     var b = 2
    //     var c = a * b
    //     cy.log('var a = 10')
    //     cy.log('var b = 2')
    //     cy.log('var c = a * b')
    //     cy.log('wat is nu de waarde van c?')
    //     cy.log('de waarde van c is nu: ' + c)
    //     cy.log('Uitleg: aan var a hebben we de waarde 10 toegekend en aan var b de waarde 2. Aan var c hebben we daarna de waarde van a*b toegekend')
    //     cy.log('Als we daarna de waarde van var c weergeven geeft die als resultaat 20')
    // })
    // it("3. Oefenen met cy.log en een array", () => {
    //     // hier maken we een array in JS.  
    //     const fruitArray = ['appel', 'peer', 'kiwi', 'aardbei', 'kers', 'pruim', 'banaan'];

    //     // met een JS for kunnen we de elementen van de array 1 voor 1 benaderen en er iets
    //     // mee doen. Ook dit is door een collectie loopen 
    //     for (const element of fruitArray) {
    //         cy.log('gezond en lekker: ' + element);
    //         if (element == 'banaan') {
    //             cy.log('gaan met die banaan!')
    //         }
    //     }
    //     // voeg toe wat je wil
    // })
    // it("4. Oefenen met cy.log en een json variabele", () => {

    //     // we roepen hier met JS een variabele in het leven en vullen die
    //     // met een structuur die je ook in jsons ziet
    //     const eenVariabele =
    //     {
    //         naam: 'Stuifzand',
    //         kleur: 'grijs',
    //         gemeente: 'Kerkrade',
    //         locatie:
    //         {
    //             "straat": "Pannesheiderveldweg",
    //             "geo":
    //             {
    //                 "lat": "-37.3159",
    //                 "lng": "81.1496"
    //             }
    //         }
    //     }

    //     // hier gebruiken we de eerder in JS in het leven geroepen variabele
    //     // om de data die we nodig hebben eruit te halen (get). 
    //     // de manier waarop we hier de gegevens uit de variabele halen
    //     // zul je binnen cypress nog talloze keren tegenkomen
    //     // als we testdata uit json files gaan halen
    //     cy.log('naam: ' + eenVariabele.naam)
    //     cy.log('de kleur ervan: ' + eenVariabele.kleur)
    //     cy.log('waargenomen in:   ' + eenVariabele.gemeente)
    //     cy.log(eenVariabele.locatie.straat)
    //     cy.log(eenVariabele.locatie.geo.lat)

    //     // voeg toe wat je wil
    // })


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
