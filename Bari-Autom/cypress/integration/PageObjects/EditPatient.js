class EditPatient
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
        return  cy.get(':nth-child(4) > .el-form-item > .el-form-item__content > .el-input > .el-input__inner')
    }

    getFeet()
    {
        return  cy.get('input[placeholder*="FEET"]')
    }

    getFeetDropdownValue()
    {
        return   cy.get('[style="min-width: 387.05px; position: absolute; top: 439px; left: 290px; transform-origin: center top; z-index: 2001;"] > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(5)')
    }

    getInches()
    {
        return  cy.get('input[placeholder*="INCHES"]')
    }

    getInchesDropdownValue()
    {
        return cy.get('[style="min-width: 387.05px; position: absolute; top: 439px; left: 707px; transform-origin: center top; z-index: 2003;"] > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view')
    }

    getDOB()
    {
        return  cy.get(':nth-child(6) > :nth-child(1) > .el-form-item > .el-form-item__content > .input-group > .el-input > #example-input')
    }
    getUpdateButton()
    {
        return   cy.get(':nth-child(7) > .btn')
    }
   
    
}
export default EditPatient;