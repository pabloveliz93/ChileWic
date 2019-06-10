// test.js
// Ver asistencia

import Page from './page-model';

fixture  ('Test ChileWic', { noReloadBetweenTests: true })
   .page `http://chilewic.herokuapp.com/admins/sign_in`;   

const page = new Page();

test('Iniciando Pruebas: Ver asistencia', async t => {
   await t
       .typeText(page.mailInput, 'admin2@mail.com')
       .typeText(page.passwordInput, 'hola123')
       .click(page.boton)
       .click(page.botonVerAsistencias)
       .wait(2000);

});