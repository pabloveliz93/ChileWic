// test.js
// Propuesta

import Page from './page-model';

fixture  ('Test ChileWic', { noReloadBetweenTests: true })
   .page `http://chilewic.herokuapp.com/users/sign_in`;   

const page = new Page();

test('Iniciando Pruebas: Propuesya', async t => {
   await t
      .typeText(page.mail1Input, 'usuario@mail.com')
      .typeText(page.passwordInput, 'hola123')
      .click(page.botonlogin)
      .click(page.botonPropuesta)
      .typeText(page.nameInput, 'Jorge')
      .typeText(page.mailInput, 'usuario@mail.com')
      .typeText(page.tituloInput, 'TDD')
      .typeText(page.organizacionInput, 'UDP')
      .typeText(page.resumenInput, 'Metodología TDD')
      .click(page.boton)
      .wait(1000);

});