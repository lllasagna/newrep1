describe ("authSA", () => {
    it ('name2SA', () => {
      cy.visit('https://sistersaroma.com/');
      cy.get('[class="header-icon header-icon-user"]').click();
      cy.get('[class="js-cookie-close ack exp-btn"]').click();
      cy.get('[name="USER_LOGIN"]').type('1@test.com');
      cy.get('[name="USER_PASSWORD"]').type('9876!1234!');
      cy.get('[class="form-btn"]').click();
      cy.contains('Невірний логін або пароль.').should('be.visible');
    })
})