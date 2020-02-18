import React, { Component } from 'react';
import './register-login.css'
class login extends Component {
    render() {
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
                                    Register
                                </h1>

                                <div className="info">
                                    <form>
                                        <div className="form-group">
                                            <label>E-MAIL</label>
                                            <input type="text" className="form-control" placeholder="Enter your mail..." />
                                            {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                                        </div>

                                        <div className="form-group">
                                            <label>PASSWORD</label>
                                            <input type="password" className="form-control" placeholder="Enter your password..." />
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

export default login;