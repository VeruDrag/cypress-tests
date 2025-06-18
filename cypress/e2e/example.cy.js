describe('Návštěva example stránky', () => {
  it('Ověří nadpis stránky', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Kitchen Sink');
  });
});
// Test změna pro ověření CI