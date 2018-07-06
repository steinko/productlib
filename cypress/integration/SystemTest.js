describe("Spesifies client behaivior", () => {
	
	beforeEach( () => {
		cy.visit('http://localhost:3000')  
		})
	
	it('should display hellp in div element with class item', ()  =>{
	   const element =cy.get('div[class="item"]');
		expect(element).to.exist
	   });
	
	
	it('shoul diplay a image in element div with class immage',()=>{
		const element =cy.get('div[class="image"]')
		expect(element).to.exist
		const image = element.find('img');
		expect(image).to.exist
		//const imagefile = image.find('img[src]').should('be.loaded');
 });
	
	it('shoulcheck div element with class middel aligned content ', () =>{
		   const element =cy.get('div[class="middel aligned content"]');
			expect(element).to.exist
		   });
	
	it('should display short decription for div element with class decription', ()  =>{
		   const element =cy.get('div[class="description"]');
			expect(element).to.exist
			element.find('a').contains("Snow Board")
			
		   });
	
	it('should display long decription for div element with class decription', ()  =>{
		   const element =cy.get('div[class="description"]');
			expect(element).to.exist
			element.find('p').contains("Cool Snow Board")
		   });
	

	it('should display extra for div element with class extra', ()  =>{
		   const element =cy.get('div[class="extra"]');
			expect(element).to.exist
			element.find('span').contains("Submitted by:")
		   });
	
	it('shoul diplay a image in element div with class image inside class extra',()=>{
		const element =cy.get('div[class="extra"]')
		const image = element.find('img[class="ui avatar image"]');
		expect(image).to.exist
		//const imagefile = image.find('img[src]').should('be.loaded');
 });
		
		
	
	
	it("should be true" , () => {
		expect(true).to.equal(true)
	})
	
})