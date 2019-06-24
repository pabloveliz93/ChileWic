// test.js
// Registrar Usuario

import Page from './page-model';

fixture  ('Test ChileWic', { noReloadBetweenTests: true })
   .page `http://url`;   

const page = new Page();

test('Iniciando Pruebas: Registrar Usuario', async t => {
   await t
       .typeText(page.mailInput, 'jorge@mail.com')
       .typeText(page.passwordInput, 'contraseña')
       .click(page.boton)
       .click(page.botonVerPropuesta)
       .click(page.botonCalificar)
       .typeText(page.Rating, '4')
       .click(page.botonCalificarValor)
       .wait(2000);

});