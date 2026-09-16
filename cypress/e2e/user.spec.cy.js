  import { first } from 'lodash'
import userData from '../fixtures/user-data.json'
import LoginPage from './pages/loginPage'
import DashboardPage from './pages/dashboard.Pages'  
import MenuPage from './pages/menuPage'

const loginPage = new LoginPage()
const dashboardpage = new DashboardPage()
const menuPage = new MenuPage()
   
  describe('Login HRM - Tests', () => {

    const selectorsList = {
       
       
       firstNameField: "[name='firstName']",
       middleNameField: "[name='middleName']",
       lastNameField: "[name='lastName']",
       genericField: " .oxd-input--active",
       dateCloseButton:".==close",
       submitButton:"[type= 'submit']",
       genericCombobox:".oxd-select-text--arrow",
       secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
       thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",




    }
  
  it.only('User Info Update', () => {
    loginPage.accessLoginpage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardpage.checkDashboardPage()

    menuPage.accessMyInfo()

    cy.get(selectorsList.firstNameField).clear().type("firstNameTest")
    cy.get(selectorsList.middleNameField).clear().type("middleNameTest")
    cy.get(selectorsList.lastNameField).clear().type("lastNameTest")
    cy.get(selectorsList.genericField).eq(3).clear().type("EmployeeId")
    cy.get(selectorsList.genericField).eq(4).clear().type("IdTest")
    cy.get(selectorsList.genericField).eq(5).clear().type("driversLicenseExpiryTest")
    cy.get(selectorsList.genericField).eq(6).clear().type("2014-08-16")
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')

    cy.get(selectorsList.genericCombobox).eq(0).click({ force: true})
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click({ force: true})
    cy.get(selectorsList.thirdItemCombobox).click()

    
  })

  
  it('Login Fall', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })

  })
  