// test.js
// Login Admin

import Page from './page-model';

fixture  ('Test ChileWic', { noReloadBetweenTests: true })
   .page `http://chilewic.herokuapp.com/admins/sign_in`;   

const page = new Page();

test('Iniciando Pruebas: Login Admin', async t => {
   await t
       .typeText(page.mailInput, 'admin2@mail.com')
       .typeText(page.passwordInput, 'hola123')
       .click(page.boton);
});