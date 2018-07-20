describe('Spesifies end to end (system) test', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })
 it('should have to prodcts as childred', () => { 
   cy.get('div.item').should('have.length', 2)
  })
  xit('should add a vote to a product when on click on the vote button', () => { 
    cy.get('div.header').first().then((header) => { 
      expect(header.text()).to.equal('41')
      header.find('a').click()
      expect(header.text()).to.equal('42')
     })
  })
  it('should be true', () => {
    expect(true).to.equal(true)
  })
})
