import { Selector } from 'testcafe';

export default class Page {
   constructor () {
       // Selecciona el elemento que contiene el input de Nombre
       this.nameInput         = Selector('#user_nombre');

       // Selecciona el elemento que contiene el input de E-Mail
       this.mailInput         = Selector('#user_email');

       // Selecciona el elemento que contiene el input de Telefono
       this.telefonoInput     = Selector('#user_telefono');

       // Selecciona el elemento que contiene el input de Password
       this.passwordInput  = Selector('#user_password');
 
        // Selecciona el elemento que contiene el input de Comfirmar Passwprd
        this.confPasswordInput  = Selector('#user_password_confirmation');
       
       // Selecciona el elemento que contiene el botón Sing up
       this.boton                 = Selector('#new_user > div.actions > input[type="submit"]');
      
   }
}