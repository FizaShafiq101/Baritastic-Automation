class PatientsPage
{  
   
getSideMenu()
{
    return cy.get(':nth-child(2) > .sidebar-menu-item')
}

getAddPatientButton()
{
     return cy.get('.router-link > .btn')
}

getManagePatientsOption()
{
        return cy.get('.nav-link-text:visible')
}

getFNSearchBar()
{
    return cy.get(':nth-child(1) > .form-group > .has-label > .form-control:visible')
}

getFNCell()
{
    return cy.get('.form-control-label:visible')
}

getSerchedRowContent()
{
    cy.get('.el-table__row > .el-table_1_column_1 > .cell > .d-flex')
}

getSVGListing()
{
    return cy.get('.router-link:visible')
}

}
export default PatientsPage;