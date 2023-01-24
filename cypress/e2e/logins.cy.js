
import 'cypress-xpath';
Cypress._.times(2, (k) => {
    it(`Login ${k + 1} / 2`, () => {
      cy.visit('https://accounts.jambopay.com/v2/account/login')
      cy.contains("Phone Number").type("0708901215")
      cy.contains("Password").type("123456")
      cy.contains("LOGIN").click()
      cy.xpath("/html/body/div/div/div[2]/form/input")
     
      
    })
   

  })

    
