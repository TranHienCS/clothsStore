import React, { Component } from 'react';
import './register-login.css'
import FormError from './formError.js';
import userhelper from '../../helper/user.js';
import {Link} from 'react-router-dom';
class cartInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        isInputValid: true,
        errorMessage: ''
      },
      mail: {
        value: '',
        isInputValid: true,
        errorMessage: ''
      },
      password: {
        value: '',
        isInputValid: true,
        errorMessage: ''
      }
    }
  };

  validation = async (e) => {
    const {name} = this.state;
    const {mail} = this.state;
    const {password} = this.state;
    let nameEl = document.getElementsByClassName('form-control name')[0].value;
    let ePrevent = true;
    e.preventDefault();
    if (nameEl.length >= 2) {
      this.setState({
        name: {
          value: nameEl,
          isInputValid: true,
        }
      })
    } else{
      ePrevent=false;
      this.setState({
        name:{
          isInputValid: false,
          errorMessage: 'Your name must be more than 2 characters'
        }
      })
    }
    let mailEl = document.getElementsByClassName('form-control mail')[0].value;
    let regexMail = new RegExp("[^@]+@[^\.]+\..+")
    if (regexMail.test(mailEl)) {
      this.setState({
        mail:{value: mailEl,
        isInputValid: true,
        }
      })
    } else{
      ePrevent=false;
      this.setState({
      mail:{isInputValid: false,
            errorMessage: 'Please enter valid mail'}
    })}
    let pass = document.getElementsByClassName('form-control pass')[0].value;
    if (pass.length > 6) {
      this.setState({
        password:{value: pass,
        isInputValid: true,
        }
      })
    } else{
      ePrevent=false;
      this.setState({
        password:{isInputValid:false,
        errorMessage: 'Your password must be more than 6 character'}
      })
    }
    if(ePrevent){
      let sendinfo =await userhelper.sentInfoResgiter({name:nameEl,email:mailEl,password:pass});
      if(sendinfo.status){
        window.location.reload();
      }
    }
}

  render() {
    const {name} = this.state;
    const {mail} = this.state;
    const {password} = this.state;
    return (
      <div>
        
        {/* Button trigger modal */}
        <button type="button" className="register" data-toggle="modal" data-target="#exampleModal">
          Register
            </button>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">

                <h1 className="title">
                  Register
                </h1>


              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default cartInfo;