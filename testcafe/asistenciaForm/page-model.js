import { Selector } from 'testcafe';

export default class Page {
   constructor () {
       // Selecciona el elemento que contiene el input de E-Mail
       this.mail1Input      = Selector('#user_email');

       // Selecciona el elemento que contiene el input de Password
       this.passwordInput  = Selector('#user_password');
 
       // Selecciona el elemento que contiene el botón Sing up
       this.botonlogin          = Selector('#new_user > div.actions > input[type="submit"]');
      
       // Selecciona el elemento que contiene el botón Ingresar Asistencia
       this.botonAsistencia          = Selector('#navbar > ul:nth-child(1) > li:nth-child(2) > a');
      

       // Selecciona el elemento que contiene el input de Crear nueva asistencia
       this.crearAsistenciaInput         = Selector('body > a:nth-child(8)');

       // Selecciona el elemento que contiene el input de Nombre
       this.nameInput         = Selector('input[name=nombre]');

       // Selecciona el elemento que contiene el input de E-Mail
       this.mailInput         = Selector('input[name=correo]');

       // Selecciona el elemento que contiene el input de Apellido
       this.lastnameInput     = Selector('input[name=apellido]');

       // Selecciona el elemento que contiene el input de Telefono
       this.telefonoInput     = Selector('input[name=telefono]');

       // Selecciona el elemento que contiene el input de Institución
       this.institucionInput  = Selector('input[name=institucion]');
       
       
       // Selecciona el elemento que contiene el botón Agregar nueva asistencia
       this.botonAgregar                 = Selector('body > div:nth-child(3) > div > form > div > div > button');
      
       // Selecciona el elemento que contiene el botón Buscar
       //this.buscar                = Selector('#body > div > app-plantilla > div > div.panel-body > div > div > form > div:nth-child(3) > div > button.btn.btn-primary');
   }
}
