import React from "react"
import {Route, Switch} from "react-router-dom"
//creacion de rutas de acceso con react router, switch agrupa las rutas que uno quiere crear
import Home from "./Home"
class App extends React.Component{
  render (){
    return(
      <div>
        <Switch>
          <Route exact path="/" component = {Home} />

         </Switch>
      </div>
    )
  }
}
export default App
