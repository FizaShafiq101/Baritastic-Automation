// cypress -spec
/// <reference types='cypress'/>

import 'cypress-v10-preserve-cookie'
import { faker } from '@faker-js/faker';
import PatientsPage from '../PageObjects/PatientsPage' 
//import PatientsPage from '../../PageObjects/PatientsPage';

const randomname1 = faker.name.findName();
const randomname2 = faker.name.findName();
const randomEmail = faker.internet.email();
const phoneNum = faker.phone.number();
let Jsondata;



before(function () {

// here we are reading the test data from json file present in fixtures
    // here all data from json file will be store in this 'data' variable

  //  cy.visit("https://baritastic-smile-stage.bariapps.com/login");

         // cy.request(Cypress.env('Baseurl')+"/login")
          cy.visit(Cypress.env('Baseurl')+"/login")

          cy.fixture('example').then(function (data){

this.Jsondata = data        // As the data is only available in this scope and we need it outside so
                       // here we are making it global using 'this'
        
                       //cy.viewport(2000, 800);
                      
                       cy.login(data.ProductionUser[0].username, data.ProductionUser[0].password)

                      // cy.login(this.Jsondata.invalidUrse[1].username,this.Jsondata.invalidUser[1].password)
                        cy.wait(10000);

                        cy.url().then(url =>{

                           this.currentURL = url;
                        cy.log('Current URL is', url)
                      
                        if(url == Cypress.env('Baseurl') +'/answer-question') {

                        cy.log("url matched")
                        cy.wait(10000);

                        let key1 = cy.get(':nth-child(3) > p');

                       if( key1 = 'What street did you grow up on?'){

                             cy.get('.form-control').type('1234')
                             //cy.wait(10000);
                             cy.get('.btn:visible').click({force: true})
                             ////cy.wait(10000);
                       }

                       else

                       if(key1 = 'What is your first dogs name?'){

                                cy.get('.form-control').type('1234')
                               // cy.wait(10000);
                                cy.get('.btn:visible').click({force: true})
                                cy.wait(10000);

                       }
                       else 
                       if(key1 = 'What is your mothers maiden name?')

                                cy.get('.form-control').type('1234')
                              //  cy.wait(10000);
                                cy.get('.btn').scrollIntoView().click({force: true});
                                cy.wait(10000);
                       }
                      
                    else{

                      return ;
                    }
                                       
                      });
 })
});
                     

beforeEach(function () {

    cy.viewport(2000, 800);
    cy.restoreLocalStorage();

  });

  afterEach(() => {

    cy.saveLocalStorage();

  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("My First Test suite", function() {

  // its a class object we have created

    it('Test Case to Add new Patients', function(){
        
      const patientpage = new PatientsPage() 
   // this.skip();
      
        cy.visit(Cypress.env('Baseurl') +'/dashboard')
        cy.wait(20000);
      
        patientpage.getSideMenu().click();
        cy.wait(20000);

        patientpage.getManagePatientsOption().contains('Manage Patients').click() 
        cy.wait(20000);
       // cy.get('.btn > .base-button > .mr-4 > .title-btn-padding > .button-font > .green_btn > .color-white > .btn-secondary > .btn-md').click();
       patientpage.getAddPatientButton().contains('Add Patient').click();

        cy.wait(10000);

this.randomname1 = randomname1;

        cy.AddPatient(randomname1,randomname2,randomEmail,phoneNum)
              
    })

    it('Test Case to Edit Patients', function(){
        
       
   //  this.skip();
            
              cy.visit(Cypress.env('Baseurl')+'/manage-patients')
              cy.wait(10000);
              cy.get('.form-control-label').contains('First Name');
              cy.get(':nth-child(1) > .form-group > .has-label > .form-control:visible').type(randomname1).type('{enter}').trigger('input');
              cy.wait(10000);
           //   cy.get('.el-table__row > .el-table_1_column_1')
          // cy.get('.el-table__row').should('have.length.greaterThan', 0)
          // .its('length')
           //.then(cy.log);

              cy.get('.el-table__row > .el-table_1_column_1 > .cell > .d-flex')
              cy.get('.router-link').eq(5).click();
              cy.wait(10000);
              cy.EditPatient(randomname1,randomname2,randomEmail,phoneNum);
      
          })

      
})


