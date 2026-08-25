  import { first } from 'lodash'
import userData from '../fixtures/user-data.json' 
  
  describe('Login HRM - Tests', () => {

    const selectorList = {
       usernameField: "[name='username']",
       passwordField: "[name='password']",
       loginButton: "[type='submit']",
       sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
       dashBoardGrid: ".orangehrm-dashboard-grid",
       wrongCredentialAlert: "[role= 'alert']",
       myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
       firstNameField: "[name='firstName']",
       middleNameField: "[name='middleName']",
       lastNameField: "[name='lastName']",
       genericField: " .oxd-input--active",
       dateCloseButton:".==close",
       submitButton:"[type= 'submit']"
       


    }
  
  it.only('User Info Update', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSucess.username)
    cy.get(selectorList.passwordField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.dashBoardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type("firstNameTest")
    cy.get(selectorList.middleNameField).clear().type("middleNameTest")
    cy.get(selectorList.lastNameField).clear().type("lastNameTest")
    cy.get(selectorList.genericField).eq(3).clear().type("EmployeeId")
    cy.get(selectorList.genericField).eq(4).clear().type("IdTest")
    cy.get(selectorList.genericField).eq(5).clear().type("driversLicenseExpiryTest")
    cy.get(selectorList.genericField).eq(6).clear().type("2014-08-16")
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')


  })

  
  it('Login Fall', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })

  })
  