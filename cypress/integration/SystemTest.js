describe("Spesifies client behaivior", function()  {
	

	
	
	it('should diapley hello world in div', function() {
		cy.visit('http://localhost:3000')
	   const element =cy.get('div');
		expect(element).to.exist
	   });
	
	
	
	it("should be true" , function() {
		expect(true).to.equal(true)
	})
	
})