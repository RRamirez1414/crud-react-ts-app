describe("Let's delete from collection", () => {
  it('Adds cards from search page', () => {
    cy.visit('/')
    cy.contains('Search').click()
    cy.wait(2000)
    const cardButtons = cy.get('figure > figcaption > div').find('>button')

    cardButtons.each((cardButton) => {
      cy.wrap(cardButton).click({ force: true })
    })
    cy.contains('My Collection').click()
    cy.wait(2000)
  })

  it('deletes all cards in collection', () => {
    const cardButtons = cy
      .get('figure > figcaption > div > div')
      .find('>button')

    cardButtons.each((cardButton) => {
      cy.wrap(cardButton).click({ force: true })
    })
  })
})
