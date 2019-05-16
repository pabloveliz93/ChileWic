import React from 'react'
import update from 'react-addons-update'

class Signup extends React.Component{
  constructor(){
    super(props)
    this.state = {
      name: "",
      rut:"",
      password:"",


    }

  }
  HandleInput(e){
    let field = e.target.name
    let value = e.target.value
    if(field === 'username'){
      this.setState(update(this.state,{
        [field] : {$set: value}
        }))
  }
}
  render(){
    return (
      <div id="signup">
      <div className="container" >
      <div className="row">
      <div className="col-xs-12">
      </div>
      </div>
      </div>
      <div className="signup-form">
      <form>
      <h1>Únite hoy a Twitter</h1>
<input type="text" value={this.state.username}
placeholder="@usuario" name="username" id="username"
onChange={this.handleInput.bind(this)}/>
<label ref="usernameLabel" id="usernameLabel"
htmlFor="username"></label>
<input type="text" value={this.state.name} placeholder="Nombre"
name="name" id="name" onChange={this.handleInput.bind(this)}/>
<label ref="nameLabel" id="nameLabel" htmlFor="name"></label>
<input type="password" id="passwordLabel"
value={this.state.password} placeholder="Contraseña"
name="password" onChange={this.handleInput.bind(this)}/>
<label ref="passwordLabel" htmlFor="passwordLabel"></label>
<input id="license" type="checkbox" ref="license"
value={this.state.license} name="license"
onChange={this.handleInput.bind(this)} />
<label htmlFor="license" >Acepto los terminos de licencia</label>
<button className="btn btn-primary btn-lg"
id="submitBtn">Regístrate</button>
<label ref="submitBtnLabel" id="submitBtnLabel" htmlFor="submitBtn"
className="shake animated hidden "></label>
<p className="bg-danger user-test">
Crea un usuario o usa el usuario <strong>test/test</strong></p>
<p>¿Ya tienes cuenta? Iniciar sesión</p>
</form>
</div>
</div>
)
}
}
export default Signup
