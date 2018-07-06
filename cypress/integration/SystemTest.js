describe("Spesifies client behaivior", () => {
	
	beforeEach( () => {
		cy.visit('http://localhost:3000')  
		})
	
	it('should display hellp in div element with class item', function() {
	   const element =cy.get('div[class="item"]');
		expect(element).to.exist
		element.contains('Hello')
	   });
	
	
	it('shoul diplay a image in element div with class immage',()=>{
		const element =cy.get('div[class="image"]')
		expect(element).to.exist
		const image = element.find('img');
		expect(image).to.exist
 });
	
	
	it("should be true" , function() {
		expect(true).to.equal(true)
	})
	
})