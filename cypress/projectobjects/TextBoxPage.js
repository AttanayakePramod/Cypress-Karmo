/// <reference types="Cypress" />

class TextBoxPage {
    visit() {
        cy.visit("https://demoqa.com/text-box")
    }

    fillName(value) {
        const field = cy.get('[id=userName]')
        field.clear()
        field.type(value)
        return this
    }

    fillEmail(value) {
        const field = cy.get('[id=userEmail]')
        field.clear()
        field.type(value)
        return this
    }

    fillCAdress(value) {
        const field = cy.get('[id=currentAddress]')
        field.clear()
        field.type(value)
        return this
    }

    fillPAdress(value) {
        const field = cy.get('[id=permanentAddress]')
        field.clear()
        field.type(value)
        return this
    }
    submit(){
      
        const button = cy.get('[type= submit]') 
        button.click()

        return this
    }
    
}

export default TextBoxPage
