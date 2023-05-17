// cypress -spec
import './ManagePatients.spec.cy'
import 'cypress-v10-preserve-cookie'
import { faker } from '@faker-js/faker'
import PatientChecklist from '../PageObjects/PatientChecklist'
import PatientsPage from '../PageObjects/PatientsPage'
/// <reference types='cypress'/>



describe("Test suit for Checklist items", function() {

    it('Add row in a pre-op checklist', function(){
        
      const checklist = new PatientChecklist();
      const patientpage = new PatientsPage();
     //  this.skip(); 

                cy.visit(Cypress.env('Baseurl')+'/manage-patients')
                cy.wait(10000);
                patientpage.getFNCell().contains('First Name');

                //new 

             //   cy.get(':nth-child(1) > .form-group > .has-label > .form-control').clear().type("Elijah Bednar").type('{enter}').trigger('input');


              //Here i am using saved first name in index.js file

                cy.task('load').then(patientName => {

                patientpage.getFNSearchBar().clear().type(patientName).type('{enter}').trigger('input');
        
}) //here i was loading saved data of patient will uncomment later

                cy.wait(10000);
               //cy.get('.el-table__row > .el-table_1_column_1')
              //cy.get('.el-table__row').should('have.length.greaterThan', 0)
             //.its('length')
            //.then(cy.log);
  
                
                  patientpage.getSerchedRowContent()
                  patientpage.getSVGListing().eq(1).click({force: true})
                  cy.wait(10000);  
                  cy.scrollTo("bottom")
                  cy.wait(10000);  
                  checklist.getAddButtonsRow().eq(0).should('have.text', " Add Row ").click()
                cy.wait(10000);
                cy.scrollTo("bottom")
                cy.wait(10000);
                cy.get('tbody').eq(2)
                .get('.el-table_2_column_13 > .cell').last().type('Finally').click();
//.clear().type('New Checklist Item');

            //    cy.get(':nth-child(6) > .el-table_2_column_13 > .cell > .input_height > .el-input__inner').clear().type('New Checklist Item');
                cy.get('body').click(-50, 0, { force: true })
                cy.wait(10000);
              //  cy.get('.el-table_30_column_247').type('New Checklist Item');

              cy.url().then(url =>{

                this.currentURL = url;
             cy.log('Current URL is', url)
            })

            cy.url().as('pageUrl');  // Here I am saving the current url to use in another it block

            //here I am extracting the parts or URL index wise
            cy.url().then(url => {
              cy.log(url.split('/')[4])
        });
})

            it('Add Checklist Item in pre-op checklist', function(){
        
              const checklist = new PatientChecklist();

           // this.skip();
              //this.skip();
                    
                    cy.visit(this.pageUrl)
                    cy.wait(10000);
                  //  cy.get('input[placeholder*="tab-0"]')
                    cy.scrollTo("bottom")
                    checklist.getButtonsRow()

                    // here I will try button rows
                    checklist.getAddButtonsRow().eq(1).click()
                    cy.wait(10000)
                   
                    checklist.getChecklistItemDropdown().click()

                  //  cy.get('.el-select-dropdown:visible').should("have.length.greaterThan", 0).its(length).then(cy.log)

                    cy.get('.el-select-dropdown:visible')
                    .get('.el-scrollbar__view.el-select-dropdown__list')
                    .get('.el-select-dropdown__item:visible')
                   // cy.get('.el-select-dropdown >.el-scrollbar > .el-select-dropdown__wrap.el-scrollbar__wrap > .el-scrollbar__view.el-select-dropdown__list > .el-select-dropdown__item')
                //   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap.el-scrollbar__wrap > .el-scrollbar__view.el-select-dropdown__list:visible')
                //    .get('.el-select-dropdown__item')
                   .should("have.length.greaterThan", 0)
                    .its('length')
                    .then(cy.log)
                    .then((n) => Cypress._.random( 0, n-1 ))
                    .then(cy.log)
                    .then((k) => {
       
                      cy.get('.el-select-dropdown:visible')
                      .get('.el-scrollbar__view.el-select-dropdown__list')
                      .get('.el-select-dropdown__item:visible')    
                      .eq(k).click();
                   })
                    checklist.getChecklistItemAddButton().click();
    })


                  it('Add Checklist template in pre-op checklist', function(){
        
                    const checklist = new PatientChecklist();

           //     this.skip();
                          
                          cy.visit(this.pageUrl)
                          cy.wait(10000);
                        //  cy.get('input[placeholder*="tab-0"]')
                          cy.scrollTo("bottom")
                      //    checklist.getAddButtonsRow() 

                          // here also
                          checklist.getAddButtonsRow().eq(2).click()
                          cy.wait(10000)
                         
                          checklist.getTemplateDropdown().click()
      
                        //  cy.get('.el-select-dropdown:visible').should("have.length.greaterThan", 0).its(length).then(cy.log)
      
                          cy.get('.el-select-dropdown:visible')
                          .get('.el-scrollbar__view.el-select-dropdown__list')
                          .get('.el-select-dropdown__item:visible')
                         .should("have.length.greaterThan", 0)
                          .its('length')
                          .then(cy.log)
                          .then((n) => Cypress._.random( 0, n-1 ))
                          .then(cy.log)
                          .then((k) => {
             
                            cy.get('.el-select-dropdown:visible')
                            .get('.el-scrollbar__view.el-select-dropdown__list')
                            .get('.el-select-dropdown__item:visible')    
                            .eq(k).click();
             })
                            checklist.getTemplateAddButton().click();
                            cy.wait(10000)
                        })
})

