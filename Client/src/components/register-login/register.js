import React, { Component } from 'react';
import './register-login.css'
import FormError from './formError.js';
class register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        isInputValid: false,
        errorMessage: ''
      },
      mail: {
        value: '',
        isInputValid: true,
        errorMessage: ''
      },
      passwrod: {
        value: '',
        isInputValid: false,
        errorMessage: ''
      }
    }
  };

  validation = () => {
    let name = document.getElementsByClassName('form-control name')[0].value;
    console.log(name.lenght);
    if (name.lenght >= 2) {
      console.log("name");
      this.setState({
        name: {
          value: name,
          isInputValid: false,
          errorMessage: 'Your name must be more than 2 characters'
        }
      })
    let mail = document.getElementsByClassName('form-contrl mail')[0].value;
    let regexMail = new RegExp("[^@]+@[^\.]+\..+")
    if(regexMail.test(mail)){
      this.setState({
        value:mail,
        isInputValid: false,
        errorMessage: 'Please enter valid mail'
      })
    }
    let pass = document.getElementsByClassName('form-control pass')[0].value;
    if(pass.length>6){
      this.setState({
        value:pass,
        isInputValid: false,
        errorMessage: 'Your password must be more than 6 character'
      })
    }
    }
  }



render() {
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

              <div className="info">
                <form>
                  <div className="form-group">
                    <label>NAME</label>
                    <input type="text" className="form-control name" name id aria-describedby="helpId" placeholder="Enter your name..." />
                    {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                    <FormError isHidden={this.state.isInputValid} errorMessage={this.state.errorMessage}></FormError>
                  </div>

                  <div className="form-group">
                    <label>EMAIL</label>
                    <input type="text" className="form-control mail" name id aria-describedby="helpId" placeholder="Enter your mail..." />
                    <FormError isHidden={this.state.isInputValid} errorMessage={this.state.errorMessage}></FormError>
                  </div>

                  <div className="form-group">
                    <label>PASSWORD</label>
                    <input type="password" className="form-control pass" name id aria-describedby="helpId" placeholder="Enter your password..." />
                    <FormError isHidden={this.state.isInputValid} errorMessage={this.state.errorMessage}></FormError>
                  </div>
                  <p className="policy">
                    By creating an account you agree to the <a href="#a">Terms of Service</a> and <a href="#a">Privacy Policy</a>
                  </p>
                  <button className="registerbtn" type="submit" onClick={this.validation}>Register</button>
                  <div className="ptext">
                    <p className="isLogin">
                      Do you have an account? <a href="#a">Log In</a>
                    </p>
                  </div>
                </form>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
}

export default register;