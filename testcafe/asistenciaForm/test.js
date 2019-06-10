// test.js
// Asistencia Form

import Page from './page-model';

fixture  ('Test ChileWic', { noReloadBetweenTests: true })
   .page `http://chilewic.herokuapp.com/users/sign_in`;   

const page = new Page();

test('Iniciando Pruebas', async t => {
   await t
      .typeText(page.mail1Input, 'usuario@mail.com')
      .typeText(page.passwordInput, 'hola123')
      .click(page.botonlogin)
      .click(page.botonAsistencia)
      .typeText(page.nameInput, 'Jorge')
      .typeText(page.mailInput, 'jorge@mail.com')
      .typeText(page.lastnameInput, 'Arenas')
      .typeText(page.telefonoInput, '91111111')
      .typeText(page.institucionInput, 'Universidad')
      .click(page.botonAgregar)
      .wait(1000);

});
