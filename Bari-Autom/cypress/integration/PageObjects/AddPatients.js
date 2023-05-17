class AddPatient
{

    getFN()
    {
        return cy.get('input[placeholder*="First Name"]')
    }

    getLN()
    {
        return cy.get('input[placeholder*="Last Name"]')
    }
   
    getEmail()
    {
        return  cy.get('input[placeholder*="Email"]')
    }

    getPhone()
    {
        return  cy.get(':nth-child(2) > :nth-child(2) > span > .form-group > .has-label > .form-control')
    }

    getFeet()
    {
        return  cy.get('input[placeholder*="FEET"]')
    }

    getFeetDropdownValue()
    {
       //return cy.get('.el-scrollbar__view.el-select-dropdown__list').should("have.text", '3 Feet')
    //return cy.get('[data-top="459"]').should("have.text", "3 Feet");

    return cy.get('[style="min-width: 391.25px; position: absolute; top: 440px; left: 290px; transform-origin: center top; z-index: 2001;"] > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > .el-select-dropdown__item').eq(3).should("have.text", "4 Feet")
        //.get('.el-scrollbar > .el-select-dropdown__wrap el-scrollbar__wrap > .el-scrollbar__view.el-select-dropdown__list')
        // > .el-scrollbar > .el-select-dropdown__wrap el-scrollbar__wrap > .el-scrollbar__view.el-select-dropdown__list').click({force: true})
        //return   cy.get('[style="min-width: 387.05px; position: absolute; top: 439px; left: 290px; transform-origin: center top; z-index: 2001;"] > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(5)')
   
   
    }

    getInches()
    {
        return  cy.get('input[placeholder*="INCHES"]')
    }

    getInchesDropdownValue()
    {
        return cy.get('[style="min-width: 391.25px; position: absolute; top: 440px; left: 711px; transform-origin: center top; z-index: 2003;"] > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(3) > span').click()
    }

    getDOB()
    {
        return  cy.get(':nth-child(1) > .input-group > .el-input > .el-input__inner')
    }
    getAddButton()
    {
        return   cy.get('.add_patient_btn')
    }
    getConfirmationPopup()
    {
        return   cy.get('.swal2-confirm')
    }
    
}
export default AddPatient;