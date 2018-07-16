
describe('Spesifies end to end (system) test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should display hellp in div element with class item', () => {
	   const element = cy.get('div[class="item"]')
    expect(element).to.exists
	   })

  it('should be true', () => {
    expect(true).to.equal(true)
  })
})
