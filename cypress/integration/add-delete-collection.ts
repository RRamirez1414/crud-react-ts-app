before(() => {
  cy.removeAllListeners()
  cy.clearLocalStorage()
})

it('can add cards to the collection', () => {
  cy.visit('/')
  cy.findAllByRole('link', { name: 'Search' }).click()
  const cardFigures = cy.findAllByRole('figure').should('exist')

  cardFigures.each((cardFigure) => {
    cy.wrap(cardFigure).realHover()
    cy.wrap(cardFigure)
      .findByRole('button')
      .should('be.visible')
      //? questionable click workaround
      .realClick()
      .click()
    cy.wrap(cardFigure).findByText('In Collection').should('be.visible')
  })
  cy.contains('My Collection').click()
})

it('can delete cards from the collection', () => {
  const cardFigures = cy.findAllByRole('figure').should('exist')

  cardFigures.each((cardFigure) => {
    cy.wrap(cardFigure).realHover()
    cy.wrap(cardFigure)
      .findByRole('button', { name: 'DELETE' })
      .should('be.visible')
      .realClick()
      .click()
  })
})

export {}
