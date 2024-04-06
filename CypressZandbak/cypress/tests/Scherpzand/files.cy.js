/// <reference types="cypress" />

/////////////////////////////
//  NIVEAU 4
///////////////////////////////
/* eslint-disable cypress/unsafe-to-chain-command */
/// JSON fixture file can be loaded directly using
// the built-in JavaScript bundler
// js bundler (wat dat ook moge zijn) maakt het mogelijk om een file zonder extensie in te lezen
// en dat gebeurt hier
const ingelezenFile = require("../../fixtures/example")

context("Files", () => {
    beforeEach(() => {
        cy.visit("https://example.cypress.io/commands/files")
    })

    beforeEach(() => {
        // load example.json fixture file and store
        // in the test context object
        // hier wordt de file example.json ingelezen en aan 'example' toegewezen als object
        // dezelfde file werd hierboven eerder ook al ingelezen en toegewezen aan 'ingelezenFile'.
        // verderop zul je zien waarom dat in deze test nodigg is
        cy.fixture("example.json").as("example")
    })

    it("cy.fixture() - load a fixture", () => {
        // Meer info: https://on.cypress.io/fixture

        // Instead of writing a response inline you can
        // use a fixture file's content.

        // when application makes an Ajax request matching "GET **/comments/*"
        // Cypress will intercept it and reply with the object in `example.json` fixture
        cy.intercept("GET", "**/comments/*", { fixture: "example.json" }).as(
            "getComment",
        )

        // we have code that gets a comment when
        // the button is clicked in scripts.js
        cy.get(".fixture-btn").click()

        cy.wait("@getComment")
            .its("response.body")
            .should("have.property", "name")
            .and("include", "Using fixtures to represent data")
    })

    it("cy.fixture() or require - load a fixture", function () {
        // we are inside the "function () { ... }"
        // callback and can use test context object "this"
        // "this.example" was loaded in "beforeEach" function callback
        expect(this.example, "fixture in the test context").to.deep.equal(
            ingelezenFile,
        )

        // or use "cy.wrap" and "should('deep.equal', ...)" assertion
        cy.wrap(this.example).should("deep.equal", ingelezenFile)
    })

    it("cy.readFile() - read file contents", () => {
        // Meer info: https://on.cypress.io/readfile

        // You can read a file and yield its contents
        // The filePath is relative to your project's root.
        cy.readFile("cypress.env.json").then((json) => {
            expect(json).to.be.an("object")
        })
    })

    it("cy.writeFile() - write to a file", () => {
        // Meer info: https://on.cypress.io/writefile

        // You can write to a file

        // Use a response from a request to automatically
        // generate a fixture file for use later
        cy.request("https://jsonplaceholder.cypress.io/users").then(
            (response) => {
                cy.writeFile("cypress/fixtures/users.json", response.body)
            },
        )

        cy.fixture("users").should((users) => {
            expect(users[0].name).to.exist
        })

        // JavaScript arrays and objects are stringified
        // and formatted into text.
        cy.writeFile("cypress/fixtures/profile.json", {
            id: 8739,
            name: "Jane",
            email: "jane@example.com",
        })

        cy.fixture("profile").should((profile) => {
            expect(profile.name).to.eq("Jane")
        })
    })
})
