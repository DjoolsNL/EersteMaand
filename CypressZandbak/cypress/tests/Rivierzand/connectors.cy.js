/// <reference types="cypress" />
/* eslint-disable cypress/unsafe-to-chain-command */

/////////////////////////////
//  NIVEAU 3
///////////////////////////////
context("Connectors", () => {
   beforeEach(() => {
      cy.visit("https://example.cypress.io/commands/connectors")
   })

   it(".each() - doer n array hoebele", () => {
      // Meer info: https://on.cypress.io/each
      cy.get(".connectors-each-ul>li").each(($el, index, $list) => {
         console.log($el, index, $list)
      })
   })

   it(".its() - gef mich de properties van t dink", () => {
      // Meer info: https://on.cypress.io/its
      cy.get(".connectors-its-ul>li")
         // calls the 'length' property yielding that value
         .its("length")
         .should("be.gt", 2)
   })

   it(".invoke() - loat n funksie los op t dink", () => {
      // our div is hidden in our  script.js
      // $('.connectors-div').hide()

      // Meer info: https://on.cypress.io/invoke
      cy.get(".connectors-div")
         .should("be.hidden")
         // call the jquery method 'show' on the 'div.container'
         .invoke("show")
         .should("be.visible")
   })

   it(".spread() - gef t array zien kloemele als individuele argumenten vuur un terukroopfunksie", () => {
      // Meer info: https://on.cypress.io/spread
      const arr = ["foo", "bar", "baz"]

      cy.wrap(arr).spread((foo, bar, baz) => {
         expect(foo).to.eq("foo")
         expect(bar).to.eq("bar")
         expect(baz).to.eq("baz")
      })
   })

   describe(".then()", () => {
      it("liet un terukroop funksie los op t hudig dink", () => {
         // Meer info: https://on.cypress.io/then
         cy.get(".connectors-list > li").then(($lis) => {
            expect($lis, "3 items").to.have.length(3)
            expect($lis.eq(0), "first item").to.contain("Walk the dog")
            expect($lis.eq(1), "second item").to.contain("Feed the cat")
            expect($lis.eq(2), "third item").to.contain("Write JavaScript")
         })
      })

      it("gieft de waarde doer aan het volgende commondo", () => {
         cy.wrap(1)
            .then((num) => {
               expect(num).to.equal(1)

               return 2
            })
            .then((num) => {
               expect(num).to.equal(2)
            })
      })

      it("gieft niks truuk alleen het orgineel dink", () => {
         cy.wrap(1)
            .then((num) => {
               expect(num).to.equal(1)
               // note that nothing is returned from this callback
            })
            .then((num) => {
               // this callback receives the original unchanged value 1
               expect(num).to.equal(1)
            })
      })

      it("gieft de waarde truuk", () => {
         cy.wrap(1)
            .then((num) => {
               expect(num).to.equal(1)
               // note how we run a Cypress command
               // the result yielded by this Cypress command
               // will be passed to the second ".then"
               cy.wrap(2)
            })
            .then((num) => {
               // this callback receives the value yielded by "cy.wrap(2)"
               expect(num).to.equal(2)
            })
      })
   })
})
