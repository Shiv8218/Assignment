import Login from "../../support/Pages/Login/loginPage"; 
const lp = new Login();

describe('Test Suite To Test All Negative And Positive Test',()=>{
    let creds;
    before(()=>{
        cy.fixture('testData.json').then((data) => {
            creds = data;
          });
    })
    beforeEach(()=>{
        lp.navigatToLoginPage()
    })

    it('1. Verify Navigation To correct Url and Success Login',()=>{
        const Credentials= creds.validCredentials;
        const assertions = creds.assertionTexts;
        lp.verifyCorrectPageLoaded(assertions.successLoginPageLoad)
        lp.inputUserName(Credentials.username)
        lp.inputPassword(Credentials.password)
        lp.clickSubmit()
        lp.verifySuccessLogin(assertions.successLoginText)
    })
    it('2. verify Logout Functionality working and redirecting to login page ',()=>{
        const Credentials= creds.validCredentials;
        const assertions = creds.assertionTexts;
        lp.inputUserName(Credentials.username)
        lp.inputPassword(Credentials.password)
        lp.clickSubmit()
        lp.verifySuccessLogin(assertions.successLoginText)
        lp.logout()
        lp.verifyCorrectPageLoaded(assertions.successLoginPageLoad)
    })
    it('3. verify Error notification when username is Invalid ',()=>{
        const Credentials= creds.invalidCredentialsUsername;
        const assertions = creds.assertionTexts;
        lp.inputUserName(Credentials.username)
        lp.inputPassword(Credentials.password)
        lp.clickSubmit()
        lp.verifyInvalidCredentialsNotification(assertions.invalidUserName)
    })
    it('4. verify Error notification when Password is Invalid ',()=>{
        const Credentials= creds.invalidCredentialsPassword;
        const assertions = creds.assertionTexts;
        lp.inputUserName(Credentials.username)
        lp.inputPassword(Credentials.password)
        lp.clickSubmit()
        lp.verifyInvalidCredentialsNotification(assertions.InvalidPassword)
    })
    it('5. Fetch ID and Password From The Page and then login using the same ',()=>{
        const assertions = creds.assertionTexts;
        lp.verifyCorrectPageLoaded(assertions.successLoginPageLoad)
        lp.fetchDataAndLogin()
        lp.verifySuccessLogin(assertions.successLoginText)
    })
    it('6. To verify if user click on submit without entering password & username it should show username invalid',()=>{
        const assertions = creds.assertionTexts;
    lp.verifyCorrectPageLoaded(assertions.successLoginPageLoad)    
    lp.clickSubmit()
    lp.verifyInvalidCredentialsNotification(assertions.invalidUserName)
})
})