export const addSearched = () => {
  describe("Let's add some cards", () => {
    it('Visits the Pokemon Collection Search Page', () => {
      cy.visit('/')

      cy.contains('Search').click()
    })

    it('Types `Charmander` into the the search input', () => {
      cy.findByPlaceholderText('Card Name').should('exist').type('Charmander')

      cy.wait(3000)
    })

    it('Clicks add on each rendered card', () => {
      const cardButtons = cy.get('figure > figcaption > div').find('>button')

      cardButtons.each((cardButton) => {
        cy.wrap(cardButton).click({ force: true })
      })
    })

    it("Each added card should contain 'In Collection'", () => {
      const cardFigures = cy.get('figure').find('figcaption')

      cardFigures.each((cardFigure) => {
        cy.wrap(cardFigure).should('contain', 'In Collection')
      })
    })

    it('Navigates back the My Collection to view added cards', () => {
      cy.contains('My Collection').click()
      cy.wait(3000)
    })
  })
}
