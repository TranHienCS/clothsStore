import React, { Component } from 'react';
import Search from './Searchbar/searchbar';
import Register from '../register-login/register.js'
import Login from '../register-login/login.js'
import './header.css';
import { IoMdCart } from 'react-icons/io'
import {Link} from 'react-router-dom'
class header extends Component {


    render() {
        return (
            <div>
                <div className="first">
                    <div className="row header">
                        <div className="col align-self-start">
                            <p className="title">Smart Food Court</p>
                        </div>
                        <div className="col align-self-center">
                            <Search/>
                        </div>
                        <div className="col align-self-end">
                            <div className="row divbtn">
                                <div className="col btn"><Register className="btn register"></Register></div>
                                <div className="col btn"><Login className="btn login"></Login></div>
                                <div className="col btn"><Link to={"/cart"}><button className="btn cart"><IoMdCart></IoMdCart></button></Link></div>
                            
                            
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default header;