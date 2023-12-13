describe('WeatherApp', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('Home page can be opened', () => {
    // HomePage header title
    cy.get('.__m__-rf > .m-8a5d1357').contains('WeatherApp / Inprodi ● Oscar Diaz');
  });

  it('Can change the scheme color', () => {
    // HomePage change theme button
    cy.get('.__m__-rn > .m-8d3f4000').click();
    cy.get('.__m__-rn > .m-8d3f4000').click();
  });

  it('UserList is not empty', () => {
    // HomePage userlist container
    cy.get('.m-dee7bd2f').should('not.be.empty');
  });

  it('User can be deleted', () => {
    // HomePage first user
    cy.get('.__m__-r23 > .m-1a0f1b21').last().click();
    cy.contains('Sí, eliminar usuario').click();
    cy.contains('¡Usuario eliminado!');
  });

  it('User can be saved', () => {
    // HomePage first user
    cy.get('.__m__-r23 > .m-1a0f1b21').last().click();
    cy.contains('No, mantener usuario').click();
    cy.contains('¡Rescate exitoso!');
  });

  it('User can be edited', () => {
    const newName = 'Oscar Diaz';
    const newLat = '26.867780945438437';
    const newLong = '-81.36963676336411';

    // HomePage first user icon edit
    cy.get(
      '.__m__-r3b > .m-1a0f1b21 > [style="--ai-size: calc(2.25rem * var(--mantine-scale)); --ai-radius: var(--mantine-radius-xl); --ai-bg: transparent; --ai-hover: var(--mantine-color-gray-light-hover); --ai-color: var(--mantine-color-gray-light-color); --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid transparent;"]',
    ).click();

    // Change name and avatar
    cy.get('.__m__-r9n input').first().type(`{selectall}{backspace}${newName}`);
    cy.get('#image-selector').click();
    cy.contains('Hombre 4').click();

    // Change lat and long
    cy.get('.__m__-rb5 input').first().type(`{selectall}{backspace}${newLat}`);
    cy.get('.__m__-rb5 input').last().type(`{selectall}{backspace}${newLong}`);

    // Click save
    cy.contains('Guardar cambios').click();
    cy.contains('¡Cambios guardados!');
  });

  it('User can be created', () => {
    const name = 'Inprodi';
    const lat = '20.6637607';
    const long = '-103.4309076';

    // Add user button
    cy.contains('Añadir usuario').click();

    // Add name and avatar
    cy.get('.__m__-r9h input').first().type(name);
    cy.get('#image-selector').click();
    cy.contains('Hombre 3').click();

    // Add lat and long
    cy.get('.__m__-rav input').first().type(lat);
    cy.get('.__m__-rav input').last().type(long);

    // Save user button
    cy.get('.__m__-rc5').click();
    cy.contains('¡Usuario agregado!');
  });

  it('Forecast page can be opened', () => {
    cy.contains('Detalles').first().click();
    cy.contains('Pronostico del tiempo');
  });

  it('Forecast page containers are not empty', () => {
    // Today
    cy.get('.m-2ce0de02 > .m-410352e9').should('not.be.empty');

    // 5 days
    cy.get('.__m__-reh').should('not.be.empty');

    // User info
    cy.get('.__m__-rar > .m-1b7284a3').should('not.be.empty');

    // Map
    cy.get('.__m__-rbd').should('not.be.empty');
  });

  it('User can go back from Forecaste page', () => {
    cy.contains('Detalles').first().click();
    cy.contains('Volver').click();
    cy.contains('WeatherApp / Inprodi ● Oscar Diaz');
  });
});
