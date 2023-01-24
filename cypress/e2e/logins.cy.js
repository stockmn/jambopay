
import 'cypress-xpath';
Cypress._.times(2, (k) => {
    it(`Login ${k + 1} / 2`, () => {
      cy.visit('https://accounts.jambopay.com/v2/account/login')
      cy.contains("Phone Number").type("0708901215")
      cy.contains("Password").type("123456")
      cy.contains("LOGIN").click()
      //cy.contains("csrfmiddlewaretoken")
      //if you are able to target the value of the csrfmiddlewaretoken in the 1 st loop you log the value of the tokenfor the second loop of test you
      //target the value of the csrfmiddlewaretoken and log the value somewhere 
      //then test if the value of ist loop where k=1 csrfmiddlewaretoken is not equal to the value of 2nd loopwhere k=2
      //if k=1 csrfmiddlewaretoken != k=2 csrfmiddlewaretoken value the test is passed
     
      
    })
   

  })

    
