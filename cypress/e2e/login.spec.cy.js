  import userData from '../fixtures/user-data.json'
  
  describe('Login HRM - Tests', () => {

    const selectorList = {
       usernameField: "[name='username']",
       passwordField: "[name='password']",
       loginButton: "[type='submit']",
       sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
       dashBoardGrid: ".orangehrm-dashboard-grid",
       wrongCredentialAlert: "[role= 'alert']"

    }
  
  it('Login Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSucess.username)
    cy.get(selectorList.passwordField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.dashBoardGrid)
  })

  
  it('Login Fall', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })

  })
  