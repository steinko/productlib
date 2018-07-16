describe('Spesifies end to end (system) test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should display hellp in div element with class item', () => {
    cy.get('div[class="item"]').should('have.class', 'item')
  })
  it('should be true', () => {
    expect(true).to.equal(true)
  })
})
