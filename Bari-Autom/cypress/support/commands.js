// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import AddPatient from "../integration/PageObjects/AddPatients";
import EditPatient from "../integration/PageObjects/EditPatient";
import { faker } from "@faker-js/faker";
import { recurse
 } from "cypress-recurse";
let LOCAL_STORAGE_MEMORY = {};
//let Fname;
//let Lastname;
//let randomEmail;

// -- This is a parent command --
    Cypress.Commands.add('login', (username, password) => { 

        cy.get('span[placeholder="Username"] > .form-group > .input-group > .form-control').type(username);
        cy.get('span[placeholder="Password"] > .form-group > .input-group > .form-control').type(password);
        cy.get('.btn').click();
        cy.wait(10000);

     })

     Cypress.Commands.add("saveLocalStorage", () => {
        Object.keys(localStorage).forEach(key => {
          LOCAL_STORAGE_MEMORY[key] = localStorage[key];
        });
      });

      Cypress.Commands.add("restoreLocalStorage", () => {
        Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
          localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
        });
});

      Cypress.Commands.add('AddPatient', (Fname, Lastname, randomEmail, phoneNum ) => { 
  
      const addpatient = new AddPatient();
      const dayjs = require('dayjs')
       // cy.log(dayjs().format('MM/DD/YYYY'))  //Prints todays date 30/09/2021
      cy.wait(10000);

      cy.task('save', Fname)
      cy.log(Fname)
 
      addpatient.getFN().type(Fname);
      addpatient.getLN().type(Lastname);
      addpatient.getEmail().type(randomEmail);
      addpatient.getPhone().type(phoneNum);
      addpatient.getFeet().click();
      
      addpatient.getFeetDropdownValue().click();
     /* .should('have.length.greaterThan', 0)
      .its('length')
      .then(cy.log)
      .then((n) => Cypress._.random( 0, n-1 ))
      .then(cy.log)
      .then((k) => {
      
         addpatient.getFeetDropdownValue().get('.el-scrollbar > .el-select-dropdown__wrap el-scrollbar__wrap > .el-scrollbar__view.el-select-dropdown__list')
         .eq(k).click();
 })*/
      
     // addpatient.getFeetDropdownValue().click();
      addpatient.getInches().click();
     
      addpatient.getInchesDropdownValue().click
       /*.should('have.length.greaterThan', 0)
       .its('length')
       .then(cy.log)
       .then((n) => Cypress._.random( 0, n-1 ))
       .then(cy.log)
       .then((k) => {
       
    addpatient.getInchesDropdownValue()
       .eq(k).click();
  })*/

     addpatient.getDOB().type(dayjs().format('MM/DD/YYYY'));
     cy.scrollTo('bottom');

     addpatient.getAddButton().click();
     addpatient.getConfirmationPopup().click();
     cy.wait(10000);
})

// Command to Edit Patients

      Cypress.Commands.add('EditPatient', (Fname, Lastname, randomEmail, phoneNum ) => { 
  
        const editpatient = new EditPatient();
        const dayjs = require('dayjs')
       // cy.log(dayjs().format('MM/DD/YYYY'))  //Prints todays date 30/09/2021
       cy.wait(10000);
 
       editpatient.getFN().clear().type(Fname);
       editpatient.getLN().clear().type(Lastname);
       editpatient.getEmail().clear().type(randomEmail);
       editpatient.getPhone().clear().type(phoneNum);

       editpatient.getDOB().clear().type(dayjs().format('MM/DD/YYYY'));
       cy.scrollTo('bottom');

       editpatient.getUpdateButton().contains('Update').click();

       cy.on('window:alert', (Text) => {
       expect(Text).to.contains('Patient profile updated')

    })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })