/// <reference types="cypress" />

//Verificar que el título de la página sea correcto
describe('test page oysho, title', () => {
    it('OYSHO - Official Website', () => {
        cy.visit(('/'),{
            headers: {
                'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
            }
        })
        cy.title().should('eq', 'OYSHO - Official Website')
    })
  
})
  
//Verificar que la navegación funcione correctamente
describe('Test Nav', () => {
    beforeEach(() => {
        cy.visit(('/'),{
            headers: {
                'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
            }
        })
        cy.get('[id="onetrust-pc-btn-handler"]', { timeout: 10000 }).click()
        cy.get('[class="ot-pc-refuse-all-handler"]', { timeout: 10000 }).should('contain', 'Reject All').click()
        cy.get('[data-testid="store-button"]').click()
        cy.get('[data-testid="cancel-store"]').click()
        cy.get('[data-testid="header"]').click(30,30)
    })
  
    it('Nav, NOVEDADES', () =>{
        cy.get('[data-categoryid="1010062530"]').click(50,5)
    })
  
    it('Nav, DEPORTE --> NOVEDADES', () =>{
        cy.get('[data-categoryid="1010131105"').click(50,5)
        cy.get('[data-categoryid="1010131105"]').find('ul>li').eq(0).click(15,5)
    })
  
    it('Nav, DEPORTE --> LEEGGINGS', () =>{
        cy.get('[data-categoryid="1010131105"]').click(50,5)
        cy.get('[data-categoryid="1010131105"]').contains('LEGGINGS').click(5,5)
    })
    
    it('Nav, CALZADO --> NOVEDADES', () =>{
        cy.get('[data-categoryid="1010131066"]').click(50,5)
        cy.get('[data-categoryid="1010131066"]').find('ul>li').eq(0).click()
    })

    it('Nav,CALZADO --> BOTAS', () =>{
        cy.get('[data-categoryid="1010131066"]').click(50,5)
        cy.get('[data-categoryid="1010131066"]').find('ul>li').eq(2).click()
    })

    it('Nav, CALZADO --> ZAPATILLAS' , () =>{
        cy.get('[data-categoryid="1010131066"]').click(50,5)
        cy.get('[data-categoryid="1010131066"]').find('ul>li').eq(5).click()
    })
  
    it('Nav, OYSHO TRAINING', () =>{
        cy.get('[data-categoryid="1010358049"]').click(50, 5)
    })
  
})

//test opcionales "verificaciones y acciones"
describe('Test Optional page oysho', () => {
    beforeEach(() => {
        cy.visit(('/'),{
            headers: {
                'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
            }
        })
        cy.get('[id="onetrust-pc-btn-handler"]', { timeout: 10000 }).click()
        cy.get('[class="ot-pc-refuse-all-handler"]', { timeout: 10000 }).should('contain', 'Reject All').click()
        cy.get('[data-testid="store-button"]').click()
        cy.get('[data-testid="cancel-store"]').click()
    })
  
    it('Test scrol', () => {
        cy.get('[id="coreContent"]').scrollTo('bottom', { easing: 'linear' })
    })
  
    it('Test search', () => {
        cy.get('[id="header"]', { timeout: 10000 }).find('input').type('dress',{force: true})
        cy.get('[id="buscador"]').click(30,15)
    })
  
})


describe('Test subcribe', () => {
    beforeEach(() => {
        cy.visit(('/'),{
            headers: {
                'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
            }
        })
        cy.get('[id="onetrust-pc-btn-handler"]', { timeout: 10000 }).click()
        cy.get('[class="ot-pc-refuse-all-handler"]', { timeout: 10000 }).should('contain', 'Reject All').click()
        cy.get('[data-testid="store-button"]').click()
    })
  
    it('test error email subscription', () => {
        cy.get('[data-testid="input-style"]').type('etcheverria')
        cy.get('.error').should('contain', 'Email address not valid')
    })
  
    it('test successful email subscription', () => {
        cy.get('[data-testid="input-style"]').type('requenaetcheverria@gmail.com')
        cy.get('[id="OTWU"]').click()
        cy.get('[id="default-0"]').click()
        cy.get('[data-testid="button-submit"]').click()
        cy.get('[data-testid="unsubscribe-subscribe-submitted"]')
            .find('p')
            .first()
            .should('contain', 'NEWSLETTER')
        cy.get('[data-testid="unsubscribe-subscribe-submitted"]')
            .find('p')
            .last()
            .should('contain', 'We have sent you an email confirming your subscription to our newsletter. Please check your inbox and follow the instructions to complete the process. Thank you.')
    })
  
})


describe('test log in', () => {
    beforeEach(() => {
        cy.visit(('/'),{
            headers: {
                'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
            }
        })
        cy.get('[id="onetrust-pc-btn-handler"]', { timeout: 10000 }).click()
        cy.get('[class="ot-pc-refuse-all-handler"]', { timeout: 10000 }).should('contain', 'Reject All').click()
        cy.get('[data-testid="store-button"]').click()
        cy.get('[data-testid="cancel-store"]').click()
    })
  
    it('test form login__error-message', () => {
        cy.get('[data-testid="user-button"]').click()
        cy.get('[id="email-login"]', { timeout: 10000 }).type('jlrequenaetcheverria@gmail.com')
        cy.get('[id="password"]').type('1234')
        cy.get('[id="rememberMe"]').click()
        cy.get('[data-testid="login-button"]').click()
        cy.get('[class="login__error-message"]',{ timeout: 40000 })
          .should('contain', 'There has been a log-in error. Please try again')
    })
})