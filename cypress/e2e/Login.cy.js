/// <reference types="cypress" />
import LoginPage from "./PageObject/LoginPage"
describe("Login", function () {
    before(function () {
       /* cy.fixture('credentials').then(function (testdata) {
            this.testdata = testdata
        }) */
        cy.wait(4000)
    })
    it("Login with valid credentials", function () {
        const login = new LoginPage();
        login.navigate();
        login.enterEmail();
        login.enterPassword();
        login.loginbutton();    
    });
    
});