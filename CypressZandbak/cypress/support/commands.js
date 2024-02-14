// //***********************************************
// // This example commands.js shows you how to
// // create various custom commands and overwrite
// // existing commands.
// //
// // For more comprehensive examples of custom
// // commands please read more here:
// // https://on.cypress.io/custom-commands3
// //***********************************************
// //
// //
// // -- This is a parent command --
// // Cypress.Commands.add("login", (email, password) => { ... })
// //
// //
// // -- This is a child command --
// // Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
// //
// //
// // -- This is a dual command --
// // Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
// //
// //
// // -- This will overwrite an existing command --
// // Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// // import './cypress/fixtures/lang_en-GB.json'
// // import language from './cypress/fixtures/lang_en-GB.json'
import 'cypress-wait-until'
import 'cypress-file-upload'
import '@testing-library/cypress/add-commands'
import 'cypress-iframe'
import 'drag-drop'
import '@4tw/cypress-drag-drop'
import { MailSlurp } from 'mailslurp-client'

Cypress.Commands.add("wacht", () => {
   cy.wait(3000); // Assuming your login page is at '/login'
 })


// /***********************
//   Mailslurp Commands
// ************************/
// //const apiKey = Cypress.env('mailslurpapi')
// //const mailslurp = new MailSlurp({ apiKey })

// // Cypress.Commands.add('createInbox', () => {
// //   return mailslurp.createInbox()
// // })

// // Cypress.Commands.add('waitForLatestEmail', (inboxId) => {
// //   return mailslurp.waitForLatestEmail(inboxId)
// // })

// // Cypress.Commands.add('waitForNthEmail', (inboxId, num) => {
// //   return mailslurp.waitForNthEmail(inboxId, num)
// // })

// /***********************
//    Carsys login
// ************************/
// // Cypress.Commands.add('carsysLogin', (email, pw) => {
// //   // Goes to Carsys login URL and checks for the right URL.
// //   cy.visit(Cypress.env('host'))
// //   // Accept cookie
// //   cy.findByTestId('cookie-consent-save').click()
// //   // Enters the username in the username field and tests if the value is correct to the one specified.
// //   cy.get('[name=EmailAddress]').type(email).should('have.value', email)
// //   // Enter password and use an enter key to login.
// //   cy.get('[name$=Password]').type(pw).type('{enter}')
// // })

// /***********************
//    API Commands
// ************************/
// // Cypress.Commands.add('CC_AcceptTermsUpdate', () => {
// //   cy.get('@idToken').then((token) => {
// //     cy.request({
// //       method: 'PUT',
// //       url:
// //         'https://gms-api.' +
// //         Cypress.env('host') +
// //         '.nl.carsys.online/modules/employees/current/accept-terms-conditions',
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //         'content-type': 'application/json',
// //       },
// //     })
// //   })
// // })

// // Cypress.Commands.add('CC_AccountCreate', (json) => {
// //   cy.get('@idToken').then((token) => {
// //     cy.request({
// //       method: 'POST',
// //       url:
// //         'https://gms-api.' +
// //         Cypress.env('host') +
// //         '.nl.carsys.online/modules/accounts',
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //         'content-type': 'application/json',
// //       },
// //       body: json,
// //     })
// //   })
// // })

// // Delete Specific (Accounts) record
// // Cypress.Commands.add('CC_AccountDelete', (name) => {
// //   cy.findAllByText(name)
// //     .parent()
// //     .invoke('index')
// //     .then((i) => {
// //       cy.findAllByTestId('deleteButton').eq(i).click()
// //       cy.findByTestId('rejectiondialog-reason-dropdown').click()
// //       cy.findAllByRole('option')
// //         .should('be.visible')
// //         .first()
// //         .click({ force: true })
// //       cy.findByTestId('deletemodal-submit-button').click()
// //     })
// // })

// // Cypress.Commands.add('CC_AppointmentCreate', (json) => {
// //   cy.get('@idToken').then((token) => {
// //     cy.request({
// //       method: 'POST',
// //       url:
// //         'https://gms-api.' +
// //         Cypress.env('host') +
// //         '.nl.carsys.online/modules/workorder-appointments',
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //         'content-type': 'application/json',
// //       },
// //       body: json,
// //     })
// //       .its('body')
// //       .then((body) => {
// //         cy.wrap(body.Data.UUID).as('appointmentUuid')
// //       })
// //   })
// // })

// // Cypress.Commands.add('CC_AppointmentUpdate', (json, uuid) => {
// //   cy.get('@idToken').then((token) => {
// //     cy.request({
// //       method: 'PUT',
// //       url:
// //         'https://gms-api.' +
// //         Cypress.env('host') +
// //         '.nl.carsys.online/modules/workorder-appointments/' +
// //         uuid,
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //         'content-type': 'application/json',
// //       },
// //       body: json,
// //     })
// //   })
// // })

// // Added seperate business account creation instead of "Fource" account
// Cypress.Commands.add('CC_BuisinessAccountCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/accounts',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// // Clocking action create
// Cypress.Commands.add('CC_ClockActionCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/clocking-items',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// //Custom Command for clicking "Continue"-buttons
// Cypress.Commands.add('CC_ClickContinueButton', () => {
//   // Assuming you have loaded the en-gb.json language file into the Cypress app instance
//   cy.fixture('./languages/lang_' + Cypress.env('language') + '.json').then(
//     (languageData) => {
//       const continueButtonText = languageData.global.continue
//       cy.contains(continueButtonText).click()
//     },
//   )
// })

// // //Custom Command for clicking "Save"-buttons (can be activated if needed, needs some finetuning)
// // Cypress.Commands.add('CC_ClickSaveButton', () => {
// //   // Assuming you have loaded the en-gb.json language file into the Cypress app instance
// //   cy.fixture('./languages/lang_' + Cypress.env('language') + '.json').then(
// //     (languageData) => {
// //       const continueButtonText = languageData.global.save
// //       cy.contains(continueButtonText).click()
// //     },
// //   )
// // })

// // Function to create a closing statement
// Cypress.Commands.add('CC_ClosingStatement', (title, content) => {
//   cy.findByTestId('add').click()
//   cy.get('[name$="-Title"]').type(title)
//   // cy.wait(3000)
//   cy.get('[name="Content"').type(content)
//   // cy.pause()

//   cy.findByTestId('btn-done').click()
//   cy.fixture('languages/lang_' + Cypress.env('language')).then((lang) => {
//     cy.CC_ToasterNotifyClose(
//       lang.setting_closing_statement.successfully_created,
//     )
//   })
//   // cy.pause()
// })

// Cypress.Commands.add('CC_DefaultOrderAccountUpdate', () => {
//   cy.get('@idToken').then((token) => {
//     cy.get('@wholeSalerUuid').then((wholeSalerUuid) => {
//       cy.request({
//         method: 'PUT',
//         url:
//           'https://gms-api.' +
//           Cypress.env('host') +
//           '.nl.carsys.online/modules/wholesaler/order-account/settings',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'content-type': 'application/json',
//         },
//         body: {
//           DefaultOrderAccountUUID: wholeSalerUuid,
//         },
//       })
//     })
//   })
// })

// Cypress.Commands.add(
//   'CC_GMS_Vehicles_VehicleDelete',
//   (StringToStrip, DeleteFrom) => {
//     let ValueStringToStrip = StringToStrip.substring(
//       0,
//       StringToStrip.indexOf(DeleteFrom),
//     )
//     cy.get(
//       '.cbgms-grid-row--hover > td > [style="text-align: center;"] > .mini > [data-testid="deleteButton"]',
//     ).click({ force: true })
//     cy.contains(ValueStringToStrip).should('exist').click()
//   },
// )

// Cypress.Commands.add('CC_EmployeeBeeCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/proxy/lease-api/users',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// Cypress.Commands.add('CC_EmployeeBeeDefaultUpdate', (UUID) => {
//   cy.get('@idToken').then((token) => {
//     cy.get('@UUID').then((defaultuuid) => {
//       cy.request({
//         method: 'PUT',
//         url:
//           'https://gms-api.' +
//           Cypress.env('host') +
//           '.nl.carsys.online/proxy/lease-api/users/default/' +
//           defaultuuid,
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'content-type': 'application/json',
//         },
//       })
//     })
//   })
// })

// Cypress.Commands.add('CC_EmployeeCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/employees',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// // for this command is a buisness account needed as prerequisite
// Cypress.Commands.add('CC_FourceAccountCreate', { Timeout: 60000 }, (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/accounts',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// Cypress.Commands.add(
//   'CC_GrabAccountWorkOrderInvoiceUUID',
//   { prevSubject: true },
//   (subject, name) => {
//     cy.wrap(subject)
//       .its('body')
//       .then((body) => {
//         cy.wrap(body.Data.Account.WorkorderInvoiceUUID).as(name)
//       })
//   },
// )

// Cypress.Commands.add('CC_GrabUuid', { prevSubject: true }, (subject, name) => {
//   cy.wrap(subject)
//     .its('body')
//     .then((body) => {
//       cy.wrap(body.Data.UUID).as(name)
//     })
// })

// // needs work to make a loop as we now only grab the first one
// Cypress.Commands.add('CC_GrabUuidS', { prevSubject: true }, (subject, name) => {
//   cy.wrap(subject)
//     .its('body')
//     .then((body) => {
//       cy.wrap(body.Data.UUIDS).as(name)
//     })
// })

// Cypress.Commands.add(
//   'CC_IframeExist',
//   { prevSubject: 'element' },
//   ($iframe, callback = () => {}) => {
//     cy.log('Checks if iframe body exists')
//     return cy
//       .wrap($iframe)
//       .should((iframe) => expect(iframe.contents().find('body')).to.exist)
//       .then((iframe) => cy.wrap(iframe.contents().find('body')))
//       .within({}, callback)
//   },
// )

// Cypress.Commands.add(
//   'CC_IframeExistNotEmpty',
//   { prevSubject: 'element' },
//   ($iframe, callback = () => {}) => {
//     cy.log('checks if iframe body exists and is not empty')
//     return cy
//       .wrap($iframe)
//       .should((iframe) => expect(iframe.contents().find('body')).to.exist)
//       .should(
//         (iframe) => expect(iframe.contents().find('body')).to.not.be.empty,
//       )
//       .then((iframe) => cy.wrap(iframe.contents().find('body')))
//       .within({}, callback)
//   },
// )

// // Cypress.Commands.add('CC_InvoiceCreate', () => {
// // cy.get('@idToken').then((token) => {
// // cy.get('@UUID').then((Workorder1UUID) => {
// // cy.request({
// // method: 'POST',
// // url:
// // 'https://gms-api.' +
// // Cypress.env('host') +
// // '.nl.carsys.online/modules/workorders/' +
// // Workorder1UUID +
// // '/invoice',
// // headers: {
// // Authorization: `Bearer ${token}`,
// // 'content-type': 'application/json',
// // },
// // body: {
// // WorkorderUUID: Workorder1UUID,
// // IncludeHTMLOutput: false,
// // PreviewMode: false,
// // SkipAccountancyExport: false,
// // Date: '2022-04-23',
// // WorkorderInvoiceUUID: '00000000-0000-0000-0000-000000000000',
// // },
// // })
// // })
// // })
// // })

// Cypress.Commands.add('CC_InvoiceCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.get('@UUID').then((Workorder1UUID) => {
//       cy.request({
//         method: 'POST',
//         url:
//           'https://gms-api.' +
//           Cypress.env('host') +
//           '.nl.carsys.online/modules/workorders/' +
//           Workorder1UUID +
//           '/invoice',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'content-type': 'application/json',
//         },
//         body: json,
//       })
//     })
//   })
// })

// Cypress.Commands.add('CC_InvoiceNumbersCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/invoices/sequences',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// // The following command is obsolete, use the next new command!
// Cypress.Commands.add('CC_LabourRateCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/labour-rates',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//       .its('body')
//       .then((body) => {
//         cy.request({
//           method: 'PUT',
//           url:
//             'https://gms-api.' +
//             Cypress.env('host') +
//             '.nl.carsys.online/settings/haynespro',
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'content-type': 'application/json',
//           },
//           body: {
//             TimeFactor: 1.0,
//             Bodywork: body.Data.UUID,
//             Electrical: body.Data.UUID,
//             Mechanical: body.Data.UUID,
//           },
//         })
//       })
//   })
// })

// // The following 3 commands belong together,
// // Example of use:
// // in the BEFORE:
// // cy.CC_RevenueGroupCreateAllTest(this.testDataApi.RevenueGroups) // Create revenueGroups first!
// // cy.fixture('RevGroups.json').as('RevGroups') // Make the json accessible
// // cy.CC_LabourRateCreateAll(this.testDataApi.LabourRates.Defaults) // Set all labourrates
// // cy.fixture('LabourRates.json').as('LabourRates') // Make the json accessible
// // cy.CC_LabourRateDefaultCreate(this.testDataApi.Settings.HaynesPro) // for the default labourrates
// // Optional: In the IT
// // cy.CC_LabourRateCreateSingle(this.testDataApi.LabourRates.Tests.LabourRate01) // for a single labourrate
// Cypress.Commands.add('CC_LabourRateCreateAll', (AllLabourRates) => {
//   const VALUES = Object.entries(AllLabourRates)
//   var myArray = {}
//   for (const [key, value] of VALUES) {
//     cy.CC_LabourRateCreateSingle(value).CC_GrabUuid('UUID')
//     cy.get('@UUID').then((uuid) => {
//       myArray[key] = uuid
//     })
//   }
//   cy.writeFile('cypress/fixtures/LabourRates.json', myArray)
// })

// Cypress.Commands.add('CC_LabourRateDefaultCreate', (json) => {
//   cy.get('@LabourRates').then((labourRates) => {
//     Object.assign(json, {
//       Bodywork: labourRates.Bodywork,
//       Electrical: labourRates.Electrical,
//       Mechanical: labourRates.Mechanical,
//     })
//   })
//   // cy.get('@RevGroups').then((revgroups) => {
//   // Object.assign(json, {
//   // TimeFactor: 2.0,
//   // Bodywork: revgroups.Bodywork,
//   // Electrical: revgroups.Electrical,
//   // Mechanical: revgroups.Mechanical,
//   // })
//   // })
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'PUT',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/settings/haynespro',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// Cypress.Commands.add('CC_LabourRateCreateSingle', (json) => {
//   cy.get('@RevGroups').then((revgroups) => {
//     Object.assign(json, {
//       RevenueGroupUUID: revgroups.LabourRateDef,
//     })
//   })
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/labour-rates',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// // Create all default labour rates
// // AllLabourRates = this.testDataApi.LabourRates.Defaults or
// // AllLabourRates = this.testDataApi.LabourRates.Tests
// // Cypress.Commands.add('CC_LabourRateWorkOrderpackagesCreate', (json) => {
// //   cy.get('@idToken').then((token) => {
// //     cy.request({
// //       method: 'POST',
// //       url:
// //         'https://gms-api.' +
// //         Cypress.env('host') +
// //         '.nl.carsys.online/modules/labour-rates',
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //         'content-type': 'application/json',
// //       },
// //       body: json,
// //     })
// //   })
// // })

// // Left Menu Navigation use for mainmenu
// // select a submenu item by preceeding this command with CC_LeftMenuDropdown
// Cypress.Commands.add('CC_LeftMenu', (menuitem) => {
//   // cy.findByTestId('sidebar-menu').findAllByText(menuitem).last().click()
//   cy.findAllByRole('button', { name: menuitem }).last().click({ force: 'true' })
// })

// // Left Menu Navigation
// // use to open dropdown only and/or select the mainmenu item
// // followed by CC_LeftMenu to click the submenu item to open the submenu items page
// Cypress.Commands.add('CC_LeftMenuDropdown', (menuitem) => {
//   // cy.findByTestId('sidebar-menu').findByText(menuitem).click()
//   cy.findAllByRole('button', { name: menuitem }).click({ force: 'true' })
// })

// // Be visible checks only for left menu TESTING not for navigation.
// Cypress.Commands.add('CC_LeftMenuCheck', (menuitem) => {
//   // cy.findByTestId('sidebar-menu').findAllByText(menuitem).should('be.visible')
//   cy.findAllByRole('button', { name: menuitem })
//     .last()
//     .should('be.visible')
//     .click({ force: 'true' })
// })

// // Be visible checks only for left menu TESTING not for navigation.
// Cypress.Commands.add('CC_LeftMenuCheckDropdown', (menuitem) => {
//   // cy.findByTestId('sidebar-menu').findAllByText(menuitem).should('be.visible')
//   cy.findAllByRole('button', { name: menuitem }).should('be.visible').click()
// })

// // Check number of visible menu items in expanded left menu
// // Adjust the classname of the left menu container here whenever it might be changed
// Cypress.Commands.add('CC_LeftMenuItemCount', (itemCount) => {
//   cy.get('.MuiListItemText-root').should('have.length', itemCount)
// })

// Cypress.Commands.add('CC_MediaSelect', (item, filename) => {
//   // select mediatype
//   cy.get('[id="MediaSettingsCategory"]').click()
//   cy.findByRole('option', { name: item }).click()
//   cy.findByText('Select file').click()
//   // select file
//   switch (filename) {
//     case 'ChecklistImages/png.png':
//       cy.get('input[type="file"]').attachFile(
//         './Images/MediaItems/' + filename,
//         { mimeType: 'image/png' },
//       )
//       break
//     // case 'MailingImages/reward.svg':
//     // cy.get('input[type="file"]').attachFile(
//     // './Images/MediaItems/' + filename,
//     // { mimeType: 'image/svg' },
//     // )
//     // break
//     default:
//       cy.get('input[type="file"]').attachFile('./Images/MediaItems/' + filename)
//       break
//   }
//   cy.findByText('Upload').click()
// })

// Cypress.Commands.add('CC_MenuToggle', () => {
//   cy.get('body').then((body) => {
//     if (body.text().includes('Dashboard')) {
//       // cy.get('[class="MuiSvgIcon-root"]').last().click() // Untill test ID is returned to RC environment.
//       cy.findByTestId('sidebar-menu-collapse-toggle').click()
//     } else {
//       // cy.get('[class="MuiSvgIcon-root"]').last().click()
//     }
//   })
// })

// // Wait for spinner (over view diary spinner no testID)
// Cypress.Commands.add('CC_OverviewLoaderDiary', () => {
//   cy.waitUntil(function () {
//     return cy.get('.segment > .huge').should('not.be.visible')
//     // cy.get('body').click(0, 0)
//   })
// })

// Cypress.Commands.add('CC_PageTitleCheck', (pageTitle) => {
//   cy.findByRole('heading', { name: pageTitle }).click() // title of page of menu iten without submenu
// })

// // Create new partgroup
// Cypress.Commands.add('CC_PartGroupCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/partgroups',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// // Cypress.Commands.add('CC_PaymentInvoiceCreate', () => {
// // cy.get('@idToken').then((token) => {
// // cy.get('@WorkorderInvoiceUUID').then((WorkorderInvoiceUUID) => {
// // cy.get('@UUID').then((PaymentMethodUUID) => {
// // cy.request({
// // method: 'POST',
// // url:
// // 'https://gms-api.' +
// // Cypress.env('host') +
// // '.nl.carsys.online/modules/workorder-invoices/' +
// // WorkorderInvoiceUUID +
// // '/payments',
// // headers: {
// // Authorization: `Bearer ${token}`,
// // 'content-type': 'application/json',
// // },
// // body: {
// // PaymentMethodUUID: PaymentMethodUUID,
// // Amount: 18.11,
// // },
// // })
// // })
// // })
// // })
// // })

// Cypress.Commands.add('CC_PaymentInvoiceCreateNEW', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.get('@WorkorderInvoiceUUID').then((WorkorderInvoiceUUID) => {
//       cy.request({
//         method: 'POST',
//         url:
//           'https://gms-api.' +
//           Cypress.env('host') +
//           '.nl.carsys.online/modules/workorder-invoices/' +
//           WorkorderInvoiceUUID +
//           '/payments',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'content-type': 'application/json',
//         },
//         body: json,
//       })
//     })
//   })
// })

// Cypress.Commands.add('CC_PaymentMethodCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/payment-methods',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// // Wait for Spinner (CRM)// w.i.p
// Cypress.Commands.add('CC_ProgressbarSpinnerWait', () => {
//   cy.waitUntil(function () {
//     return cy.findByRole('progressbar').should('be.visible')
//   })
// })

// // Create Quotation
// Cypress.Commands.add('CC_QuotationCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.get('@UUID').then((Workorder2UUID) => {
//       cy.request({
//         method: 'POST',
//         url:
//           'https://gms-api.' +
//           Cypress.env('host') +
//           '.nl.carsys.online/modules/workorders/' +
//           Workorder2UUID +
//           '/quotation',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'content-type': 'application/json',
//         },
//         body: json,
//       })
//     })
//   })
// })

// // Delete records
// Cypress.Commands.add('CC_RecordsAllDelete', () => {
//   cy.findAllByTestId('deleteButton').each(() => {
//     cy.findAllByTestId('deleteButton').first().click()
//     cy.findByTestId('deletemodal-submit-button').click()
//     cy.CC_ToasterNotifyClose()
//   })
// })

// // Delete Specific record
// Cypress.Commands.add('CC_RecordDelete', (name) => {
//   cy.findByText(name)
//     .parent()
//     .invoke('index')
//     .then((i) => {
//       cy.findAllByTestId('deleteButton').eq(i).click()
//       cy.findByTestId('deletemodal-submit-button').click()
//     })
// })

// // Create a new revenuegroup
// Cypress.Commands.add('CC_RevenueGroupCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/accountancy/revenue-groups',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// // Create all revenuegroups : cy.CC_RevenueGroupCreateAll(this.testDataApi.RevenueGroups)
// // "this.testdataapi" NEEDS te be defined!!!!
// Cypress.Commands.add('CC_RevenueGroupCreateAllDefaults', (AllRevGroups) => {
//   const VALUES = Object.entries(AllRevGroups.WorkShops)
//   for (const [key, value] of VALUES) {
//     cy.log(key)
//     cy.CC_RevenueGroupCreate(value)
//   }
//   const VSVALUES = Object.entries(AllRevGroups.VehicleSales)
//   for (const [key, value] of VSVALUES) {
//     cy.log(key)
//     cy.CC_RevenueGroupCreate(value)
//   }
// })

// // Create all revenuegroups and store in json file
// // cy.CC_RevenueGroupCreateAllTest(this.testDataApi.RevenueGroups)
// Cypress.Commands.add('CC_RevenueGroupCreateAllTest', (AllRevGroups) => {
//   const VALUES = Object.entries(AllRevGroups.Defaults.WorkShops)
//   var myArray = {}
//   for (const [key, value] of VALUES) {
//     cy.CC_RevenueGroupCreate(value).CC_GrabUuid('UUID')
//     cy.get('@UUID').then((uuid) => {
//       myArray[key] = uuid
//     })
//   }
//   const VSVALUES = Object.entries(AllRevGroups.Defaults.VehicleSales)
//   for (const [key, value] of VSVALUES) {
//     cy.CC_RevenueGroupCreate(value).CC_GrabUuid('UUID')
//     cy.get('@UUID').then((uuid) => {
//       myArray[key] = uuid
//     })
//   }
//   // Next group is disabled as we only want default groups.
//   // Other groups might be made by hand or use the below code for extra revenue groups
//   // for Workshop which are NOT default
//   // It is not possible to add more Revenue groups for VehicleSales as the VehicleSalesType must be unique
//   // const TVALUES = Object.entries(AllRevGroups.Tests.WorkShops)
//   // for (const [key, value] of TVALUES) {
//   // cy.CC_RevenueGroupCreate(value).CC_GrabUuid('UUID')
//   // cy.get('@UUID').then((uuid) => {
//   // myArray[key] = uuid
//   // })
//   // }
//   cy.writeFile('cypress/fixtures/RevGroups.json', myArray)
// })

// // accept cookies after login
// Cypress.Commands.add('CC_SetCookies', function () {
//   cy.get('#onetrust-reject-all-handler').click({ force: true })
//   // cy.findByTestId('onetrust-reject-all-handler').click({ force: true })
//   // cy.setCookie('gms-cookie-consent-tracking', 'false')
//   // cy.setCookie('gms-cookie-consent-functional', 'false')
//   // cy.setCookie('OptanonAlertBoxClosed', 'true')
// })

// // Configuring Tyre Change Settings for a shop
// Cypress.Commands.add('CC_SettingsTyreChange', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'PUT',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/tyre-changes/settings',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// Cypress.Commands.add('ShopSwitchFromTo_CC', function (fromShop, toShop) {
//   // shop names can be found via this.testDataUsers.Global.Shop.*
//   // Bee1, Bee2, BeeGA, BeePortal
//   cy.get('[class="MuiTypography-root MuiTypography-body2"]')
//     .contains(fromShop)
//     .should('exist')
//     .click()
//   // select and go to defined parameter
//   cy.get(
//     '[class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock"]',
//   )
//     .contains(toShop)
//     .click()
// })

// // Creating stock warehouse parts
// Cypress.Commands.add('CC_StockCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/warehouse/parts',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// // creating/updating sundries
// Cypress.Commands.add('CC_SundryUpdate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'PUT',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/workorders/sundries',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// /* this command is less preferred. preference is "type()"
// Instant text (saves time in Ci, no "human" typing input) // usage: cy.get('[some-input-field]').CC_TextfieldFill('Hello');:0
// DO NOT USE EVERYWHERE/ANYWEHER... only for "simple" text fields, and if it saves enough time/is logical to use.
// */
// Cypress.Commands.add(
//   'CC_TextfieldFill',
//   { prevSubject: 'element' },
//   (subject, value) => {
//     cy.wrap(subject).clear().invoke('val', value).trigger('input')
//   },
// )

// // Close (any) Toaster
// Cypress.Commands.add('CC_ToasterNotifyClose', (name) => {
//   cy.findByText(name).parentsUntil('.toastr').find('.close-toastr').click()
// })

// // Close (any) Toaster using the shown text until the variable between {{}}
// Cypress.Commands.add('CC_ToasterNotifyUntilVariableClose', (name) => {
//   cy.contains(name).parentsUntil('.toastr').find('.close-toastr').click()
// })

// // Close (single) Toaster // any language
// Cypress.Commands.add('CC_ToasterAllClose', () => {
//   cy.get('.bottom-left')
//     .parentsUntil('.close-toastr')
//     .find('.close-toastr')
//     .click({ multiple: true, force: true })
// })

// Cypress.Commands.add('CC_TransactionStartSalePurchase', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/inventory-vehicles/transactions',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// Cypress.Commands.add('CC_UrlGetConfirm', () => {
//   cy.waitForNthEmail(Cypress.env('inboxid'), 1).then((email) => {
//     assert.isDefined(email)
//     let url
//     if (Cypress.env('host') == 'staging') {
//       url = /"https:\/\/staging\.nl\.carsys\.online(?:[^"\\]|\\.)*"/
//         .exec(email.body)
//         .toString()
//         .slice(1, -1)
//     } else if (Cypress.env('host') == 'rc') {
//       url = /"https:\/\/rc\.nl\.carsys\.online(?:[^"\\]|\\.)*"/
//         .exec(email.body)
//         .toString()
//         .slice(1, -1)
//     } else {
//       url = /"https:\/\/develop\.nl\.carsys\.online(?:[^"\\]|\\.)*"/
//         .exec(email.body)
//         .toString()
//         .slice(1, -1)
//     }
//     cy.wrap(url).as('confirmUrl')
//   })
//   // Go to the quotation url
//   cy.get('@confirmUrl').then((url) => {
//     cy.visit(url)
//   })
// })

// Cypress.Commands.add('CC_VehicleClassCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/vehicle-classes',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })
// // This is used for Rental and Courtesy Vehicles
// Cypress.Commands.add('CC_ReplacementVehiclesCreateUpdate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.get('@VehicleUUID').then((vehicleUUID) => {
//       cy.request({
//         method: 'PUT',
//         url:
//           'https://gms-api.' +
//           Cypress.env('host') +
//           '.nl.carsys.online/modules/replacement-vehicles/' +
//           vehicleUUID,
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'content-type': 'application/json',
//         },
//         body: json,
//       })
//     })
//   })
// })

// Cypress.Commands.add('CC_VehicleCountrySearchSettingsUpdate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'PUT',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/dashboard/settings',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// Cypress.Commands.add('CC_VehicleCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/vehicles',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// // Edit Specific Vehicle
// Cypress.Commands.add('CC_VehicleEdit', (plate) => {
//   cy.contains(plate)
//     .parents('.cbgms-grid-row')
//     .invoke('index')
//     .then((i) => {
//       cy.findAllByTestId('editButton').eq(i).click()
//     })
// })

// // removes first licenseplate in table, always select first plate
// // needs rewriting, dirty workaround
// Cypress.Commands.add('CC_VehicleFirstInTableDelete', (plate) => {
//   cy.contains(plate)
//     .parents('.cbgms-grid-row')
//     .invoke('index')
//     .then((i) => {
//       //
//       cy.intercept(
//         '/modules/vehicles/with-related?fields=Vehicle.Registration*',
//       ).as('deleted') // Wildcard is for dynamic ID
//       cy.findAllByTestId('deleteButton').eq(0).click()
//       cy.findByTestId('deletemodal-submit-button').click()
//       cy.wait('@deleted')
//       // cy.wait(500) (old, before intercept) // will "jump" to different rows when there are a lot of vehicles in the list - without the wait it will click the wrong delete button (possibly a (0) wait might work) :thinking:
//     })
// })

// Cypress.Commands.add('CC_VehicleSalesInvoiceCreate', () => {
//   cy.get('@idToken').then((token) => {
//     cy.get('@TransactionUUIDS').then((TransactionUUID) => {
//       cy.request({
//         method: 'POST',
//         url:
//           'https://gms-api.' +
//           Cypress.env('host') +
//           '.nl.carsys.online/modules/inventory-vehicles/transactions/' +
//           TransactionUUID +
//           '/invoice',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'content-type': 'application/json',
//         },
//       })
//     })
//   })
// })

// // Process transactionuuid array
// Cypress.Commands.add('CC_VehicleSalesInvoiceCreateByArray', () => {
//   cy.get('@idToken').then((token) => {
//     cy.get('@TransactionUUIDS').each((TransactionUUID) => {
//       cy.request({
//         method: 'POST',
//         url:
//           'https://gms-api.' +
//           Cypress.env('host') +
//           '.nl.carsys.online/modules/inventory-vehicles/transactions/' +
//           TransactionUUID +
//           '/invoice',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'content-type': 'application/json',
//         },
//       })
//     })
//   })
// })

// Cypress.Commands.add('CC_VehicleSalesTransactionLineCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.get('@TransactionUUID').then((TransactionUUID) => {
//       cy.request({
//         method: 'POST',
//         url:
//           'https://gms-api.' +
//           Cypress.env('host') +
//           '.nl.carsys.online/modules/inventory-vehicles/transactions/' +
//           TransactionUUID +
//           '/line',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'content-type': 'application/json',
//         },
//         body: json,
//       })
//     })
//   })
// })

// Cypress.Commands.add('CC_VehicleSalesTransactionLineUpdate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.get('@TransactionUUID').then((TransactionUUID) => {
//       cy.request({
//         method: 'PUT',
//         url:
//           'https://gms-api.' +
//           Cypress.env('host') +
//           '.nl.carsys.online/modules/inventory-vehicles/transactions/' +
//           TransactionUUID +
//           '/line/' +
//           TransactionLineUuid,
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'content-type': 'application/json',
//         },
//         body: json,
//       })
//     })
//   })
// })

// Cypress.Commands.add('CC_VehicleUpdate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'PUT',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/vehicles/:uuid',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// Cypress.Commands.add('CC_VehicleWarrantyCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/vehicle-warranties',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// // Wait for spinner (week view diary spinner) // Testing Custom Command // w.i.p
// Cypress.Commands.add('CC_WeekViewLoaderDiary', () => {
//   cy.waitUntil(function () {
//     return cy.get('ui large active loader').should('not.be.visible') // needs fixing
//   })
// })

// Cypress.Commands.add(
//   'CC_WholesalerCreate',
//   {
//     retries: {
//       runMode: 2,
//       openMode: 2,
//     },
//   },
//   () => {
//     cy.get('@idToken').then((token) => {
//       cy.get('@fourceUuid').then((fourceUuid) => {
//         if (Cypress.env('host') == 'staging') {
//           cy.request(
//             {
//               method: 'POST',
//               url:
//                 'https://gms-api.' +
//                 Cypress.env('host') +
//                 '.nl.carsys.online/modules/wholesaler/order-account',
//               headers: {
//                 Authorization: `Bearer ${token}`,
//                 'content-type': 'application/json',
//               },
//               body: {
//                 WholesalerUUID: Cypress.env('WholesalerUUID'), // (RC Heuts id: 6ca0d2e4-74d8-024b-60cd-74d2723ff275 Staging Heuts ID: 095058c3-574a-e839-4979-9c51406c189c) Keep an eye on this while merging! DEV ID: a3b9e9e6-5793-f616-6917-9bc329abe311
//                 AccountUUID: fourceUuid,
//                 Credentials: {
//                   UserId: '1',
//                   Password: 'heuts01',
//                 },
//               },
//             },
//             { responseTimeout: 60000 },
//           )
//         } else if (Cypress.env('host') == 'rc') {
//           cy.request(
//             {
//               method: 'POST',
//               url:
//                 'https://gms-api.' +
//                 Cypress.env('host') +
//                 '.nl.carsys.online/modules/wholesaler/order-account',
//               headers: {
//                 Authorization: `Bearer ${token}`,
//                 'content-type': 'application/json',
//               },
//               body: {
//                 WholesalerUUID: Cypress.env('WholesalerUUIDRC'), // (RC Heuts id: 6ca0d2e4-74d8-024b-60cd-74d2723ff275 Staging Heuts ID: 095058c3-574a-e839-4979-9c51406c189c) Keep an eye on this while merging! DEV ID: a3b9e9e6-5793-f616-6917-9bc329abe311
//                 AccountUUID: fourceUuid,
//                 Credentials: {
//                   UserId: '1',
//                   Password: 'heuts01',
//                 },
//               },
//             },
//             { responseTimeout: 60000 },
//           )
//         } else {
//           cy.request(
//             {
//               method: 'POST',
//               url:
//                 'https://gms-api.' +
//                 Cypress.env('host') +
//                 '.nl.carsys.online/modules/wholesaler/order-account',
//               headers: {
//                 Authorization: `Bearer ${token}`,
//                 'content-type': 'application/json',
//               },
//               body: {
//                 WholesalerUUID: Cypress.env('WholesalerUUIDDEV'), // (RC Heuts id: 6ca0d2e4-74d8-024b-60cd-74d2723ff275 Staging Heuts ID: 095058c3-574a-e839-4979-9c51406c189c) Keep an eye on this while merging! - DEV ID: a3b9e9e6-5793-f616-6917-9bc329abe311
//                 AccountUUID: fourceUuid,
//                 Username: '1',
//                 Password: 'heuts01',
//               },
//             },
//             { responseTimeout: 60000 },
//           )
//         }
//       })
//     })
//   },
// )

// Cypress.Commands.add('CC_WorkhoursUpdate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'PUT',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/work-hours',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// Cypress.Commands.add('CC_WorkOrderActivityCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/workorder-activities',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// Cypress.Commands.add('CC_WorkOrderCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/workorders',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// Cypress.Commands.add('CC_WorkOrderLineCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.get('@UUID').then((Workorder1UUID) => {
//       cy.request({
//         method: 'POST',
//         url:
//           'https://gms-api.' +
//           Cypress.env('host') +
//           '.nl.carsys.online/modules/workorders/' +
//           Workorder1UUID +
//           '/lines',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'content-type': 'application/json',
//         },
//         body: json,
//       })
//     })
//   })
// })

// // Delete Specific Work Order
// Cypress.Commands.add('CC_WorkOrderDelete', (plate) => {
//   cy.get('.number')
//     .contains(plate)
//     .parents('.cbgms-grid-row')
//     .invoke('index')
//     .then((i) => {
//       cy.findAllByTestId('deleteButton').eq(i).click()
//       cy.findByTestId('rejectiondialog-reason-dropdown').click()
//       cy.findAllByRole('option').should('be.visible').first().click()
//       cy.findByTestId('deletemodal-submit-button').click()
//     })
// })

// Cypress.Commands.add('CC_WorkOrderSequenceNumbersPatternCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'PUT',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/workorders/settings',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// // Cypress.Commands.add('CC_WorkOrderUpdate', (json, uuid) => {
// //   cy.get('@idToken').then((token) => {
// //     cy.request({
// //       method: 'PUT',
// //       url:
// //         'https://gms-api.' +
// //         Cypress.env('host') +
// //         '.nl.carsys.online/modules/workorders/' +
// //         uuid,
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //         'content-type': 'application/json',
// //       },
// //       body: json,
// //     })
// //   })
// // })

// // Cypress.Commands.add('CC_WorkOrderPackagesCreate', (json) => {
// //   cy.get('@idToken').then((token) => {
// //     cy.request({
// //       method: 'POST',
// //       url:
// //         'https://gms-api.' +
// //         Cypress.env('host') +
// //         '.nl.carsys.online/modules/workorder-packages',
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //         'content-type': 'application/json',
// //       },
// //       body: json,
// //     })
// //   })
// // })

// Cypress.Commands.add('CC_WorkStationCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/workstations',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// Cypress.Commands.add('CC_ClosingStatementsCreate', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'POST',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/closing-statements',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// Cypress.Commands.add('CC_ClosingStatementsCreateDefault', (json) => {
//   cy.get('@idToken').then((token) => {
//     cy.request({
//       method: 'PUT',
//       url:
//         'https://gms-api.' +
//         Cypress.env('host') +
//         '.nl.carsys.online/modules/closing-statements/settings',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'content-type': 'application/json',
//       },
//       body: json,
//     })
//   })
// })

// Cypress.Commands.add(
//   'CC_PDFVieweriFrame',
//   { prevSubject: 'element' },
//   ($iframe) => {
//     return new Cypress.Promise((resolve) => {
//       $iframe.on('load', () => {
//         resolve($iframe.contents().find('body'))
//       })
//     })
//   },
// )

// /********************
// obsolete / not used
// ********************/
// // Delete Specific Vehicle, not multiple cars by plate
// // Cypress.Commands.add('CC_VehicleSingleDelete', (plate) => {
// // cy.contains(plate)
// // .parents('.cbgms-grid-row')
// // .invoke('index')
// // .then((i) => {
// // cy.intercept('/modules/vehicles/with-related?*').as('deleted') // Wildcard is for dynamic ID
// // cy.findAllByTestId('deleteButton').eq(i).click()
// // cy.findByTestId('deletemodal-submit-button').click()
// // cy.wait('@deleted')
// // // cy.wait(500) (old, before intercept) // will "jump" to different rows when there are a lot of vehicles in the list - without the wait it will click the wrong delete button (possibly a (0) wait might work) :thinking:
// // })
// // })
