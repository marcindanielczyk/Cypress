/// <reference types="cypress" />


describe("Locators", () => {
    beforeEach( () => {
        cy.visit("/elements")
    });

    it("locating elements with get", () => {
        // Get all elements by tag name
        cy.get("button")

        // Get all elements by className
        cy.get(".btn-with-class")

        // Get all elements with specific classes
        cy.get("[class='Elements-btn btn-with-class']")
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

        // Get all elements by id
        cy.get("[id='btn-with-id'")
        cy.get("#btn-with-id")

        // Get all elements by specific attribute
        cy.get("[type='submit']")

        // Get all elements by tag name AND class
        cy.get("button.Elements-btn")
        
        // Get all elements by tag name AND id
        cy.get("button.Elements-btn#btn-with-id")

        // Get all elements by tag name AND calss AND type attribute
        cy.get("button.Elements-btn[type='submit'")

        // Get all elements with specific data test id
        cy.get("[data-cy='btn-id-1']")

        // Get all elements with specific data test id using declared earlier command
        cy.getByTestId("btn-id-1")
    });

    it("locating elements with contains", () => {
        // Get element by unique text
        cy.contains("Unique Text")

        // Get element by not unique text
        cy.contains("Not Unique Text")

        // With selector
        cy.contains("[type='submit']", "Not Unique Text")
        cy.contains("form", "Not Unique Text")
        
        cy.get("[type='submit']").contains("Not Unique Text")
    });
    
    it("Locating elements with find", () => {
        cy.get("#form-1").find(".btn-1")
        cy.get("#form-1").find(".btn-2")
    });

})