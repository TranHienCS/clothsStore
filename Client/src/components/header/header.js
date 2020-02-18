import React, { Component } from 'react';
import Search from './Searchbar/searchbar';
import Register from '../register-login/register.js'
import Login from '../register-login/login.js'
import './header.css';
import { IoMdCart } from 'react-icons/io'

class header extends Component {


    render() {
        return (
            <div>
                <div className="first">
                    <div className="row header">
                        <div className="col align-self-start">
                            <Search></Search>
                        </div>
                        <div className="col align-self-center">
                            <div className="main-logo">
                            </div>
                        </div>
                        <div className="col align-self-end">
                            <div className="row divbtn">
                                <div className="col btn"><Register className="btn register"></Register></div>
                                <div className="col btn"><Login className="btn login"></Login></div>
                                <div className="col btn"><button className="btn cart"><IoMdCart></IoMdCart></button></div>
                            
                            
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="first">
                    <div className="category">
                        <div className="row">
                            <div className="col-sm">Man</div>
                            <div className="col-sm">Ladies</div>
                            <div className="col-sm">Girls</div>
                            <div className="col-sm">Boys</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default header;