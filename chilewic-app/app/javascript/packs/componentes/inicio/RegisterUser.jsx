import React, {Component} from "react"
import axios from 'axios';
import update from "react-addons-update"
import validator from 'validator';
import { Form, Input, Button, Icon } from 'antd';

export default class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      nombre:"",
      apellido:"",
      correo:"",
      usuario: "",
      password:"",
      ciudad:"",
      institucion:"",
      grado:"",
      acept:true,
      loading: false
    }
  }


  handleLoadingState = loading => {
    //Set loading flag
    this.setState({ loading: loading });
  }

  handleSendEmail = email => {
    this.handleLoadingState(true);
    axios.post(`api/users`, {

      email: email
    }).then(res => {
      if(res.data.success) {
        //If the response from MailChimp is good...
        notify('success', 'Subscribed!', res.data.success);
        this.setState({ email: '' });
        this.handleLoadingState(false);
      } else {
        //Handle the bad MailChimp response...
        notify('error', 'Unable to subscribe!', res.data.error);
        this.handleLoadingState(false);
      }
    }).catch(error => {
      //This catch block returns an error if Node API returns an error
      //notify('error', 'Error. Please try again later.', error.message);
      this.handleLoadingState(false);
    });
  }

  handleOnChangeEmail = email => {
    this.setState({
      email: email
    })
  }

  render ( ) {

    return (
    <Form layout='inline' className="newsletter-form" method="POST">
      <Form.Item>
        <Input prefix={<Icon type="red-envelope" />} placeholder="Email" value={this.state.email}
          onChange={({target}) => handleOnChangeEmail(target.value)} />
      </Form.Item>
      <Form.Item>
        <Button onClick={() => handleSendEmail(email)} disabled={!validator.isEmail(this.state.email)}
          type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  )
  }

}
