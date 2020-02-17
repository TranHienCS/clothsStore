import React, { Component } from 'react';
import Search from './Searchbar/searchbar';
import Register from '../register-login/register.js'
import Login from '../register-login/login.js'
import './header.css';
import {IoMdCart} from 'react-icons/io'

class header extends Component {


    render() {
        return (
                <div className="row">
                   
                    <div className="col-md-3">
                        <Search></Search>
                    </div>
                    <div className="col-md-5">
                        <div className="main-logo">
                        </div>
                    </div>
                    <div className="col-md-3">     
                        <Register className="btn register"></Register>
                        <Login className="btn login"></Login>

                        {/* <button className="btn cart"><IoMdCart></IoMdCart></button> */}
    
                    </div>
                    
                </div>
          
        );
    }
}

export default header;