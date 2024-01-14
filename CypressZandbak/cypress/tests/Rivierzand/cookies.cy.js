/// <reference types="cypress" />
/* eslint-disable cypress/unsafe-to-chain-command */
/////////////////////////////
//  NIVEAU 4
///////////////////////////////

context("Cookies", () => {
   beforeEach(() => {
      Cypress.Cookies.debug(true)

      cy.visit("https://example.cypress.io/commands/cookies")

      // clear cookies again after visiting to remove
      // any 3rd party cookies picked up such as cloudflare
      cy.clearCookies()
   })

   it("cy.getCookie() - get a browser cookie", () => {
      // Meer info: https://on.cypress.io/getcookie
      cy.get("#getCookie .set-a-cookie").click()

      // cy.getCookie() yields a cookie object
      cy.getCookie("token").should("have.property", "value", "123ABC")
   })

   it("cy.getCookies() - get browser cookies", () => {
      // Meer info: https://on.cypress.io/getcookies
      cy.getCookies().should("be.empty")

      cy.get("#getCookies .set-a-cookie").click()

      // cy.getCookies() yields an array of cookies
      cy.getCookies()
         .should("have.length", 1)
         .should((cookies) => {
            // each cookie has these properties
            expect(cookies[0]).to.have.property("name", "token")
            expect(cookies[0]).to.have.property("value", "123ABC")
            expect(cookies[0]).to.have.property("httpOnly", false)
            expect(cookies[0]).to.have.property("secure", false)
            expect(cookies[0]).to.have.property("domain")
            expect(cookies[0]).to.have.property("path")
         })
   })

   it("cy.setCookie() - set a browser cookie", () => {
      // Meer info: https://on.cypress.io/setcookie
      cy.getCookies().should("be.empty")

      cy.setCookie("foo", "bar")

      // cy.getCookie() yields a cookie object
      cy.getCookie("foo").should("have.property", "value", "bar")
   })

   it("cy.clearCookie() - clear a browser cookie", () => {
      // Meer info: https://on.cypress.io/clearcookie
      cy.getCookie("token").should("be.null")

      cy.get("#clearCookie .set-a-cookie").click()

      cy.getCookie("token").should("have.property", "value", "123ABC")

      // cy.clearCookies() yields null // grammar nazi eslint sends us the red chevrons
      // grammer nazi 'eslint' needs some customization
      cy.clearCookie("token").should("be.null")

      // Get the value of token from the cookie. Value should be null
      cy.getCookie("token").should("be.null")
   })

   it("cy.clearCookies() - clear browser cookies", () => {
      // Meer info: https://on.cypress.io/clearcookies
      cy.getCookies().should("be.empty")

      cy.get("#clearCookies .set-a-cookie").click()

      cy.getCookies().should("have.length", 1)

      // cy.clearCookies() yields null
      // in cypress yields is used frequently. it means in a chain of commands the values that are passed to the next chain.
      cy.clearCookies()

      cy.getCookies().should("be.empty")
   })
})
