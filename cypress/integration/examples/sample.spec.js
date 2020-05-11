describe('The Home Page', function() {
    it('successfully loads', function() {
        cy.visit('http://localhost:3000/');

        cy.get('#buttonAction').click();
    });

    it('step 1 successfully loads', function() {
        cy.url().should('eq', 'http://localhost:3000/cadastro/step1');
        cy.scrollTo(0, 0);
    });

    it('step 1 filled fields', function() {
        cy.get('input[id="name"]').type('Meu nome completo');
        cy.get('input[id="email"]').type('meuemail@exemplo.com');
        cy.get('input[id="emailConfirm"]').type('meuemail@exemplo.com');
        cy.get('input[id="phone"]').type('41998871254');
        cy.get('input[id="phoneConfirm"]').type('41998871254');
        cy.get('input[id="bornDate"]').type('10102000');
        cy.get('input[id="cpf"]').type('32920277057');
        cy.get('input[id="rg"]').type('1234556789');
    });

    it('go to step 2', function() {
        cy.get('#button').click();
    });

    it('step 2 successfully loads', function() {
        cy.url().should('eq', 'http://localhost:3000/cadastro/step2');
        cy.scrollTo(0, 0);
    });

    it('step 2 filled fields', function() {
        cy.get('input[id="cep"]').type('80210010');
        cy.get('input[id="addressNumber"]').type('2197');
    });

    it('go to step 3', function() {
        cy.get('#button').click();
    });

    it('step 3 successfully loads', function() {
        cy.url().should('eq', 'http://localhost:3000/cadastro/step3');
        cy.scrollTo(0, 0);
    });

    it('step 3 filled fields', function() {
        cy.get('input[id="terms"]').click();
    });

    it('finishing register', function() {
        cy.get('#button').click();
    });

    it('finished register', function() {
        cy.url().should('eq', 'http://localhost:3000/cadastro/finalizado');
        cy.scrollTo(0, 0);
    });

    it('Trigger go back home', function() {
        cy.get('#link').click();
    });

    it('Go back home successfully', function() {
        cy.url().should('eq', 'http://localhost:3000/home');
        cy.scrollTo(0, 0);
    });
});
