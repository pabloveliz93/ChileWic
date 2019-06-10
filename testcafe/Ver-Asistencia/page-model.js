import { Selector } from 'testcafe';

export default class Page {
   constructor () {
       
       // Selecciona el elemento que contiene el input de E-Mail
       this.mailInput      = Selector('#admin_email');

       // Selecciona el elemento que contiene el input de Password
       this.passwordInput  = Selector('#admin_password');
 
       // Selecciona el elemento que contiene el botón Sing up
       this.boton          = Selector('#new_admin > div.actions > input[type="submit"]');
      
       // Selecciona el elemento que contiene el botón Ver asistencias
       this.botonVerAsistencias   = Selector('#navbar > ul:nth-child(1) > li:nth-child(2) > a');
             
   }
}