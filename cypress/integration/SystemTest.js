describe('Spesifies end to end (system) test', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })
 it('should have to prodcts as childred', () => { 
   cy.get('div.item').should('have.length', 2)
  })
  it('should be true', () => {
    expect(true).to.equal(true)
  })
})
