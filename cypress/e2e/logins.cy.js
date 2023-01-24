
Cypress.config('experimentalSessionSupport', true)
Cypress._.times(2, (k) => {
    it(`Login ${k + 1} `, () => {
      cy.visit('https://accounts.jambopay.com/v2/account/login')
      cy.contains("Phone Number").type("0708901215")
      cy.contains("Password").type("123456")
      cy.contains("LOGIN").click()
      /*cy.contains("csrfmiddlewaretoken")
      if you are able to target the value of the csrfmiddlewaretoken in the 1 st loop where k ==1, log the value of the token   With valuable k1=csrfmiddlewaretoken VALUE .
      for the second loop where k ==2  of test you
      target the value of the csrfmiddlewaretoken and log the csrfmiddlewaretoken value somewhere with K2= csrfmiddlewaretoken VALUE
      then test if K1!=K2 test passed else test failed
      if k=1 csrfmiddlewaretoken != k=2 csrfmiddlewaretoken value the test is passed */
    })
    it(`Csrf token${k + 1} `, () =>  {
      cy.get('[name=csrfmiddlewaretoken]').then($rvt => {
       console.log($rvt.val());
      
   })})
  
  
   


})


 

    
