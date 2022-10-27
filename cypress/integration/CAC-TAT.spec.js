/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })
    it.only('Preencher campos e enviar o formulário', function() {
        
        cy.get('#firstName').type('isaac')
        cy.get('#lastName').type('santos')
        cy.get('#email').type('isaac.skskkss11@gmail.com')
        cy.get('#phone').type('12 22222-2222')
        cy.get('#open-text-area').type('sksks ksksaksksdksksksks kskskskksksksksks xkkskskskksksksdksksksksksksksksksksaksksdkskskskskskskskk sksksksksxkkskskskksksksdksksksksksk')
        cy.get('.button').click()
    })

  })
  