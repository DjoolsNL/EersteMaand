// ---------------------------------------------------------------------
//    Cypress wat is dat  -- Cypress is een bundel JS libraries 
// ---------------------------------------------------------------------

describe("Cypress is een framework dat JavaScript gebruikt om websites te testen.", () => {
    // In deze test spelen we een beetje met het commandlog en Cypress

    it("De linkerkolom waar deze regel staat noemen we het commandlog", () =>{})
    it("Deze tekstregel kun je uitklappen", () =>{
    cy.log('Als Cypress een test uitvoert wordt de linkerkolom van het browservenster waarin de test loopt, gebruikt om de test te loggen. Alle commando\'s uit het testscript worden weergegeven en ook alle communicatie tussen server en client(=browser) komt voorbij. Met het commando cy.log() kunnen we ook zelf dingen in het commandlog schrijven.')
    })

    it("Oefenen met het commando cy.log", () => {
        cy.pause()
        cy.log('het linkermenu noemen we het commandlog of gewoon log')
        cy.wacht()
        cy.log('log: logboek van de test')
        cy.wacht()
        cy.log('cy.log() is een commando om info in het log te schrijven')
        cy.wacht()
        cy.log('Elk cy.log() commando in het commandlog begint met het woord \'Log\'')
        cy.wacht()
    })
})

describe("In het commandlog kun je drie niveaus onderscheiden.", () => { })
describe("Deze regel staat op het hoogste niveau", () => { })
describe("Deze ook. Deze kun je uitklappen omdat er nog een niveau onder zit", () => {
    it("Deze regel staat op het een na hoogste niveau", () => { })
    it("Deze ook. Deze kun je ook uitklappen omdat er nog een niveau onderzit", () => {
        cy.log("Deze regel is het onderste niveau")
    })
})
describe("Niveau 1", () => {

    it("Niveau 2", () => {
        cy.log("Niveau 3")
        cy.log("In de 'TEST BODY' (niveau 3) staan de echte testcommando's.")
    })
})

describe("Niveau 1 wordt een describe genoemd.", () => {

    it("Niveau 2 wordt een it-block genoemd.", () => {
        cy.log("Niveau 3")
        cy.log("In de 'TEST BODY' (niveau 3) staan de echte testcommando's.")
    })
})


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
