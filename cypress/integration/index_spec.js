describe('click', () => {
    it('user can click button', () => {
        cy.visit('http://localhost:3000');
        cy.get('#test-button button').should('have.text', 'Click me!').click().should('have.text', 'You clicked me!')
    })
})