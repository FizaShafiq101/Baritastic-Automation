class PatientChecklist
{

    getAddButtonsRow()
    {
        return cy.get('.btn.base-button.pt-1.pb-1.pl-1.pr-3.mt-2.font-weight-normal.add-checklist-buttons.btn-secondary')
    }

    getNewlyAddedRow()
    {
    
        return cy.get('.el-table_2_column_13 > .cell')
    }
    getChecklistItemDropdown()
    {
        return cy.get('input[placeholder*="Select Checklist Item"]:visible')
    }
    getChecklistItemAddButton()
    {
        return cy.get('.btn-submit:visible')
    }

    getItemAddButton()
    {
        return cy.get('.btn-submit:visible')
    }

    getTemplateDropdown()
    {
        return cy.get('input[placeholder*="Select A Template"]:visible')
    }

    getTemplateAddButton()
    {
        return cy.get('.text-right > .btn-green:visible')
    }

    getButtonsRow()
    {
        return cy.get('.row.mt-2 > .col')
    }
}
export default PatientChecklist;