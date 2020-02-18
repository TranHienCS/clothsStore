import React, { Component } from 'react';
import './register-login.css'
import FormError from './formError.js';
import userhelper from '../../helper/user.js';
class register extends Component {

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
      },
      isPrevent: false
    }
  };

  validation = async (e) => {
    const {name} = this.state;
    const {mail} = this.state;
    const {password} = this.state;
    // e.preventDefault();
    let nameEl = document.getElementsByClassName('form-control name')[0].value;
    console.log(nameEl);

    if (nameEl.length >= 2) {
      this.setState({
        name: {
          value: name,
          isInputValid: true,
        }
      })
    } else{
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
      console.log("regex");
      this.setState({
        mail:{value: mail,
        isInputValid: true,
        }
      })
    } else{this.setState({
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
      this.setState({
        password:{isInputValid:false,
        errorMessage: 'Your password must be more than 6 character'}
      })
    }
    if(name.isInputValid||mail.isInputValid||password.isInputValid){
      console.log("true");
      e.preventDefault();
    }

    let sendinfo =await userhelper.sentInfoResgiter({name:name.value,mail:mail.value,pass:password.value})
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

                <div className="info">
                  <form className="rsform">
                    <div className="form-group">
                      <label>NAME</label>
                      <input type="text" className="form-control name" placeholder="Enter your name..." />
                      {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                      <FormError isHidden={name.isInputValid} errorMessage={name.errorMessage}></FormError>
                    </div>

                    <div className="form-group">
                      <label>EMAIL</label>
                      <input type="text" className="form-control mail" placeholder="Enter your mail..." />
                      <FormError isHidden={mail.isInputValid} errorMessage={mail.errorMessage}></FormError>
                    </div>

                    <div className="form-group">
                      <label>PASSWORD</label>
                      <input type="password" className="form-control pass" placeholder="Enter your password..." />
                      <FormError isHidden={password.isInputValid} errorMessage={password.errorMessage}></FormError>
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