describe('Automação - Trello via API', () => {
  const boardName = 'Cypress Test Board';
  const cardName = 'Cypress Test Card';
  let boardId;
  let cardId;
  let listId;

  // Teste para criar um board
  it('Deve criar um board', () => {
    cy.request({
      method: 'POST',
      url: `/boards?name=${boardName}&key=${Cypress.env('trelloApiKey')}&token=${Cypress.env('trelloApiToken')}`,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      console.log('Resposta do Board:', response.body);
      expect(response.status).to.eq(200);
    });
  });

  it('Deve cadastrar um card', () => {
    cy.request({
      method: 'POST',
      url: `/cards?name=${cardName}&idList=${listId}&key=${Cypress.env('trelloApiKey')}&token=${Cypress.env('trelloApiToken')}`,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Deve excluir um card', () => {
    cy.request({
      method: 'DELETE',
      url: `/cards/${cardId}?key=${Cypress.env('trelloApiKey')}&token=${Cypress.env('trelloApiToken')}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Deve excluir um board', () => {
    cy.request({
      method: 'DELETE',
      url: `/boards/${boardId}?key=${Cypress.env('trelloApiKey')}&token=${Cypress.env('trelloApiToken')}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
