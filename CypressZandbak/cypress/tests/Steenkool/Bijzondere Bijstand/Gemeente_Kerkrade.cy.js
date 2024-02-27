
// Test Script voor Gemeente Kerkrade
// met dit sceript ga je naar de webpagina van gemeente kerkrade 
// en vuilt hij in de zoek functie naar "toeslagen" en gaat hij 
// alle zoek resultaten af.
// zoals je zult zien is did script verdeeld onder meerder 'describe' 
// en it blokken.
//
// Script Auteur :  Henry Von Kesseler

describe("Oefenen met de Website Gemeente kerkrade I", () => {
/*
Dit is de eestre Describe block , met daar onder verdeeld verschillende "it" blokken
Niet vergeten om Iedere it block te sluten met een " }) " !
*/ 

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      it('1. Wat heeft Kerkrade te bieden bij de bijzondere bijstand', () => {
        cy.visit("https://www.kerkrade.nl/")
        cy.wait(2000)
        cy.get("#search-bar").click()
        cy.get("#search-bar").type("bijzondere bijstand{enter}")
        cy.wait(2000)
      })
        
      it('1.1.1 klik op de hyperlink "bijzondere bijstand" en scroll door de pagina', () => {
        cy.visit("https://www.kerkrade.nl/zoeken?trefwoord=bijzondere%20bijstand")
        cy.get('a').contains('Bijzondere bijstand').click();
        cy.scrollTo('bottom', { duration: 30000 });
        cy.wait(2000)
      })
      it('1.1.2 klick op de hyperlink "Bijzondere bijstand energiekosten (tijdelijke regeling)" en sroll door de pagina', () => {
        cy.visit("https://www.kerkrade.nl/zoeken?trefwoord=bijzondere%20bijstand")
        cy.wait(2000)
        cy.get('a').contains('Bijzondere bijstand energiekosten (tijdelijke regeling)').click();
        cy.scrollTo('bottom', { duration: 30000 });
        cy.wait(2000)
      })
      it('1.1.3 klick op de hyperlink Uitkering en bijstand en sroll door de pagina', () => {
        cy.visit("https://www.kerkrade.nl/zoeken?trefwoord=bijzondere%20bijstand")
        cy.wait(2000)
        cy.get('a').contains('Uitkering en bijstand').click();
        cy.scrollTo('bottom', { duration: 30000 });
        cy.wait(2000)
      })
      it('1.1.4 klick op de hyperlink "Bijstand, uitkering" en sroll door de pagina', () => {
        cy.visit("https://www.kerkrade.nl/zoeken?trefwoord=bijzondere%20bijstand")
        cy.wait(2000)
        cy.get('a').contains('Bijstand, uitkering').click();
        cy.scrollTo('bottom', { duration: 30000 });
        cy.wait(2000)
      })
      it('1.1.5 klick op de hyperlink "Bijstand voor zelfstandigen" en sroll door de pagina', () => {
        cy.visit("https://www.kerkrade.nl/zoeken?trefwoord=bijzondere%20bijstand")
        cy.wait(2000)
        cy.get('a').contains('Bijstand voor zelfstandigen').click();
        cy.scrollTo('bottom', { duration: 30000 });
        cy.wait(2000)
      })
      it('1.1.6 klick op de hyperlink "Bijstand, vakantie melden" en sroll door de pagina', () => {
        cy.visit("https://www.kerkrade.nl/zoeken?trefwoord=bijzondere%20bijstand")
        cy.wait(2000)
        cy.get('a').contains('Bijstand, vakantie melden').click();
        cy.scrollTo('bottom', { duration: 30000 });
        cy.wait(2000)
      })
      it('1.1.7 klick op de hyperlink "Uitkering voor oudere en gedeeltelijk arbeidsongeschikte werknemers (IOAW)" en sroll door de pagina', () => {
        cy.visit("https://www.kerkrade.nl/zoeken?trefwoord=bijzondere%20bijstand")
        cy.wait(2000)
        cy.get('a').contains('Uitkering voor oudere en gedeeltelijk arbeidsongeschikte werknemers (IOAW)').click();
        cy.scrollTo('bottom', { duration: 30000 });
        cy.wait(2000)
      })
      it('1.1.8 klick op de hyperlink "Studietoeslag" en sroll door de pagina', () => {
        cy.visit("https://www.kerkrade.nl/zoeken?trefwoord=bijzondere%20bijstand")
        cy.wait(2000)
        cy.get('a').contains('Studietoeslag').click();
        cy.scrollTo('bottom', { duration: 30000 });
        cy.wait(2000)
       })  
        it('1.1.9 klick op de hyperlink "Studietoeslag" en sroll door de pagina', () => {
        cy.visit("https://www.kerkrade.nl/zoeken?trefwoord=bijzondere%20bijstand")
        cy.wait(2000)
        cy.get('a').contains('Hebt u de energietoeslag al aangevraagd?').click();
        cy.scrollTo('bottom', { duration: 30000 });
        cy.wait(2000)
        })  
        it('1.2.0 klick op de hyperlink "Ga naar pagina 2"', () => {
        cy.visit("https://www.kerkrade.nl/zoeken?trefwoord=bijzondere%20bijstand")
        cy.wait(2000)
        cy.get('[title="Ga naar pagina 2"]').click();

        })     
})

describe("Oefenen met de Website Gemeente kerkrade II", () => {
/*
dit is een 2e describe block in het script. dit is makkelijk omdat je 
eke describe block onafhankelijk van elkaar aan en uit kan zetten zodat je 
niet bij elke run het hele script hoeft te doorlopen.
did doe je door voor describe een 'x' te zetten ( voorbeeld xdesribe) waardoor 
bij het lopen van het script alle 'xdesribe' blokken overslaat.
dit kun je ook doen bij "it" blokken door er net als bij een describe gewoon een "x"
voor te zetten.
*/
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
    it('2.1.1 klick op de hyperlink "Aanvragen energietoeslag 2023" en scroll door de pagina', () => {
    cy.visit("https://www.kerkrade.nl/zoeken/2?trefwoord=bijzondere%20bijstand")
    cy.wait(2000)
    cy.get('a').contains('Aanvragen energietoeslag 2023').click();
    cy.scrollTo('bottom', { duration: 30000 });
    cy.wait(2000)

  })
  it('2.1.2 klick op de hyperlink "Gemeente Kerkrade start uitbetaling energietoeslag" en scroll door de pagina', () => {
    cy.visit("https://www.kerkrade.nl/zoeken/2?trefwoord=bijzondere%20bijstand")
    cy.wait(2000)
    cy.get('a').contains('Gemeente Kerkrade start uitbetaling energietoeslag').click();
    cy.scrollTo('bottom', { duration: 30000 });
    cy.wait(2000)

  })
  it('2.1.3 klick op de hyperlink "Energietoeslag 2022 – 2023" en scroll door de pagina', () => {
    cy.visit("https://www.kerkrade.nl/zoeken/2?trefwoord=bijzondere%20bijstand")
    cy.wait(2000)
    cy.get('a').contains('Energietoeslag 2022 – 2023').click();
    cy.scrollTo('bottom', { duration: 30000 });
    cy.wait(2000)

  })

  it('2.1.4 klick op de hyperlink "Inkomen, zorg en jeugd" en scroll door de pagina', () => {
    cy.visit("https://www.kerkrade.nl/zoeken/2?trefwoord=bijzondere%20bijstand")
    cy.wait(2000)
    cy.get('a').contains('Inkomen, zorg en jeugd').click();
    cy.scrollTo('bottom', { duration: 30000 });
    cy.wait(2000)

  })
  it('2.1.5 klick op de hyperlink "Tijdelijke ondersteuning noodzakelijke kosten (TONK)" en scroll door de pagina', () => {
    cy.visit("https://www.kerkrade.nl/zoeken/2?trefwoord=bijzondere%20bijstand")
    cy.wait(2000)
    cy.get('a').contains('Tijdelijke ondersteuning noodzakelijke kosten (TONK)').click();
    cy.scrollTo('bottom', { duration: 30000 });
    cy.wait(2000)
  })
  it('2.1.6 klick op de hyperlink "Heeft u door de coronacrisis problemen met het betalen van uw vaste woonlasten?" en scroll door de pagina', () => {
    cy.visit("https://www.kerkrade.nl/zoeken/2?trefwoord=bijzondere%20bijstand")
    cy.wait(2000)
    cy.get('a').contains('Heeft u door de coronacrisis problemen met het betalen van uw vaste woonlasten?').click();
    cy.scrollTo('bottom', { duration: 30000 });
    cy.wait(2000)
  })
  it('2.1.6 klick op de hyperlink "Individuele inkomenstoeslag" en scroll door de pagina', () => {
    cy.visit("https://www.kerkrade.nl/zoeken/2?trefwoord=bijzondere%20bijstand")
    cy.wait(2000)
    cy.get('a').contains('Individuele inkomenstoeslag').click();
    cy.scrollTo('bottom', { duration: 30000 });
    cy.wait(2000)
  })
  it('1.7 klick op de hyperlink "TONK-regeling verlengd" en scroll door de pagina', () => {
    cy.visit("https://www.kerkrade.nl/zoeken/2?trefwoord=bijzondere%20bijstand")
    cy.wait(2000)
    cy.get('a').contains('TONK-regeling verlengd').click();
    cy.scrollTo('bottom', { duration: 30000 });
    cy.wait(2000)
  })
  it('1.8 klick op de hyperlink "Energietoeslag 2023" en scroll door de pagina', () => {
    cy.visit("https://www.kerkrade.nl/zoeken/2?trefwoord=bijzondere%20bijstand")
    cy.wait(2000)
    cy.get('a').contains('Energietoeslag 2023').click();
    cy.scrollTo('bottom', { duration: 30000 });
    cy.wait(2000)
  })
  it('1.9 klick op de hyperlink "Uitkering voor oudere en gedeeltelijk arbeidsongeschikte zelfstandigen (IOAZ)" en scroll door de pagina', () => {
    cy.visit("https://www.kerkrade.nl/zoeken/2?trefwoord=bijzondere%20bijstand")
    cy.wait(2000)
    cy.get('a').contains('Uitkering voor oudere en gedeeltelijk arbeidsongeschikte zelfstandigen (IOAZ)').click();
    cy.scrollTo('bottom', { duration: 30000 });
    cy.wait(2000)
  })

})
xdescribe("Oefenen met de Website Gemeente kerkrade III", () => {
/*
zoals je zien kunt kun je op deze manier heel makkelijk en onbeperkt describe blokken en 
daar in weer it blokken toevoegen. 
in ieder script heb je opening tekens en sluitings tekens , dus als je met een " opent , moet je ook 
weer met een " sluiten , dit geld ook voor [  en { en (
  als je dit niet doet loopt het script vast.
  
  */

})