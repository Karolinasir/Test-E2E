describe('My test', () => {
    it('Test', () => {
cy.visit("https://spectrocoin.com/en/bitcoin-price-rates.html")

cy.get("#currency-select").click()
cy.get("#react-select-5-option-0").click()

    })
})