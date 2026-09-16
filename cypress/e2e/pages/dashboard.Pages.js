class DashboardPage {
selectorsList(){
const selectors = {

    dashBoardGrid: ".orangehrm-dashboard-grid",
}
    return selectors
} 

    checkDashboardPage() {
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(this.selectorsList().dashBoardGrid).should('be.visible')
    
    }

}
 export default DashboardPage