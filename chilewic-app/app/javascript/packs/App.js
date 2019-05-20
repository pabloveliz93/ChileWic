import React , {Component} from 'react'
import update from 'react-addons-update'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Toolbar from './Toolbar'

class App extends Component {
  render(){
    return (
      <div>
      <Toolbar />
      </div>


    );
  }
}


export default App;
