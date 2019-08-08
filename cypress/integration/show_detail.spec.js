it('navigates to ShowDetail page', () => {
	cy.visit('http://localhost:3000')
	cy.get("#root > div > ul > a:nth-child(1) > li").click()
	cy.get("#root > div").should('have.text', 'Show Detail 975')
})