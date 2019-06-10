// test.js
// Login

import Page from './page-model';

fixture  ('Test ChileWic', { noReloadBetweenTests: true })
   .page `http://chilewic.herokuapp.com/users/sign_in`;   

const page = new Page();

test('Iniciando Pruebas: Login', async t => {
   await t
       .typeText(page.mailInput, 'usuario@mail.com')
       .typeText(page.passwordInput, 'hola123')
       .click(page.boton);
});