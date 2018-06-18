describe("Spesifies client behaivior", function()  {
	

	
	
	it('should diapley hello world in div', function() {
		cy.visit('http://app:3000')
	   const element =cy.get('p');
	   element.should('contain','Hello world!!!');
	   });
	
	
	
	it("should be true" , function() {
		expect(true).to.equal(true)
	})
	
})