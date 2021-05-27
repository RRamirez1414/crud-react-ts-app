before(() => {
  //clear some data before test
  cy.clearCookies()
  cy.clearLocalStorage()
})

it('can add cards to the collection', () => {
  //visit the home page
  cy.visit('/')

  //navigate to 'Search' page
  cy.findByRole('link', { name: 'Search' }).click()

  //search for 'charmander, give the debounce a chance to execute
  cy.findByPlaceholderText('Card Name').type('charmander')

  //assert if a charmander card exist
  //find all the rendered card figures
  cy.findAllByRole('figure')
    .should('exist')
    .should('contain', 'Charmander')

    //for each card figure perform some actions and assertions
    .each((cardFigure, index) => {
      //hover over the figure
      cy.wrap(cardFigure)
        .realHover({ position: 'center' })

        //while hovered, look for the button and click it
        .findByRole('button', { name: 'Add' })
        .click()

      //assert 'In Collection' is visible after click
      cy.wrap(cardFigure).findByText('In Collection').should('be.visible')

      if (index > 3) return false
    })
})

it('can delete cards from the collection', () => {
  //navigate to 'My Collection' page
  cy.findByRole('link', { name: 'My Collection' }).click()

  //find all card figures that were previously added
  cy.findAllByRole('figure')
    .should('exist')

    //for each card figure perform some actions and assertions
    .each((cardFigure) => {
      //hover over the figure
      cy.wrap(cardFigure)
        .realHover()

        //while hovered, look the 'Delete' button and click it
        .findByRole('button', { name: 'DELETE' })
        .click()
    })

  //assert that no card figures should exist
  cy.findAllByRole('figure').should('not.exist')
})
