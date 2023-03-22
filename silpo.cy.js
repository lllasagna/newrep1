describe ("s1", () => {
    it ('name2', () => {
      cy.visit('https://shop.silpo.ua/');  
      cy.title().should('eq', 'ᐉ «Сільпо» – онлайн-супермаркет | Купуйте з доставкою до дверей');
      cy.contains("Ексклюзивні знижки онлайн").click();	
      cy.get('button[class="btn btn-primary outline cookie-confirm-btn"]').click();
      cy.contains("Фільтри").click();	
      cy.contains("Молочні продукти та яйця").click();	
      cy.get('.category-filter__apply-block-close').click();
      cy.get('.category-page-wrapper.page.experiment-page')
      .should('contain', 'Яйця перепелині «Премія»®')
      .should('contain', 'Молоко пастеризоване «Ферма» 2,5%');
    })
  })
