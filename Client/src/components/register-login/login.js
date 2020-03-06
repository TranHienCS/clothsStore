import React, { Component } from 'react';
import './register-login.css'
import userhelper from '../../helper/user.js';
import FormError from './formError.js';
import {PostLoginRequest} from '../../actions/userAction';
import {connect} from 'react-redux';
class login extends Component {
    constructor(props){
        super(props);
        this.state={
            errorMessage:this.props.message,
            isHidden: 1
            }
        }
    
    submit=async (e)=>{
        e.preventDefault();
        
        let email = document.getElementsByName('email')[0].value;
        if(email=='') {
            this.setState({errorMessage:'Please enter your email',isHidden:0});
            return;
        }
        let password = document.getElementsByName('password')[0].value;
        if(password==''){
            this.setState({errorMessage:'Please enter your password',isHidden:0});
            return;
        }
        await this.props.postLogin(email,password);
        console.log(this.props.message);
        // let isLogin = await userhelper.sentInfoLogin({email,password});
        if(this.props.message){
            console.log("don't have message");
            this.setState({
                errorMessage:this.props.message,
                isHidden:0
            })
        }
    }
    render() {
        const {errorMessage,isHidden} = this.state;
        console.log(this.props.message);
        return (
            <div className="divlogin">
                {/* Button trigger modal */}
                <button type="button" className="login" data-toggle="modal" data-target="#loginmodal">
                    Login
                </button>
                {/* Modal */}
                <div className="modal fade" id="loginmodal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">

                            <div className="modal-body">

                                <h1 className="title">
                                    Login
                                </h1>
                                <div style={{marginTop:'20px'}}>
                                   
                                    <FormError errorMessage={this.props.message} isHidden={0}></FormError>
                                </div>
                                <div className="info">
                                    <form onSubmit={this.submit}>
                                        <div className="form-group">
                                            <label>E-MAIL</label>
                                            <input type="text" name="email" className="form-control" placeholder="Enter your mail..." />
                                            {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                                        </div>

                                        <div className="form-group">
                                            <label>PASSWORD</label>
                                            <input type="password" name="password" className="form-control" placeholder="Enter your password..." />
                                            {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                                        </div>
                                        <div className="custom-control custom-checkbox w-100">
                                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                            <label className="custom-control-label float-left" htmlFor="customControlInline">Remember password</label>

                                            <a className="float-right" href="#a">Fogot your password</a>

                                        </div>

                                        <button className="registerbtn" type="submit">Login</button>
                                        <div className="ptext">
                                            <p className="isLogin">
                                                Don't have an account? <a href="#a">Register</a>
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
const mapDispatchToProps = (dispatch) => {
    return {
        postLogin: (email,password) => {
            dispatch(PostLoginRequest(email,password))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.user.message
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(login);