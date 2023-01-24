require('cypress-xpath');
class LoginPage {
    navigate() {
        cy.visit('https://accounts.jambopay.com/v2/account/login')
    }
    enterEmail() {
        cy.contains('Phone Number').type("0708901215")
            
        return this
    }
    enterPassword() {
        cy.contains('Password')
            .type("123456")
        return this
    }
    loginbutton() {
        cy.contains('LOGIN').click()
    }
}
export default LoginPage
