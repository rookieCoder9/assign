import App from '../../../assignment/src/App'


describe('App.cy.js', () => {
  it('playground', () => {
    cy.mount(<App />)
    cy.get('button').click() 
    cy.get('h1').should('have.text', 'Hello World!')
  })
})