describe ("s1", () => {
    it ('name2', () => {
      cy.visit('https://shop.silpo.ua/');  
      cy.title().should('eq', 'ᐉ «Сільпо» – онлайн-супермаркет | Купуйте з доставкою до дверей');
      cy.contains("Ексклюзивні знижки онлайн").click();	
      cy.get('button[class="btn btn-primary outline cookie-confirm-btn"]').click();
      cy.contains("Фільтри").click();	
      cy.contains("Молочні продукти та яйця").click();	
      cy.get('.category-filter__apply-block-close').click();
      cy.intercept('POST', 'api/2.0/exec/EcomCatalogGlobal', (req) => {
      expect(req.body).to.include('location', '_reactListeningof9dleobog')
    })
  })
 })