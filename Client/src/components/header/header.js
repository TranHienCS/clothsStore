import React, { Component } from 'react';
import Search from './Searchbar/searchbar';
import Register from '../register-login/register.js'
import Login from '../register-login/login.js'
import './header.css';
import { IoMdCart } from 'react-icons/io'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
class header extends Component {


    render() {
        const {allitem} = this.props
        return (
            <div>
                <div className="first">
                    <div className="row header">
                        <div className="col align-self-start">
                            <Link to={'/products'}><p className="title">Smart Food Court</p></Link>
                        </div>
                        <div className="col align-self-center">
                            <Search/>
                        </div>
                        <div className="col align-self-end">
                            <div className="row divbtn">
                                <div className="col btn"><Register className="btn register"></Register></div>
                                <div className="col btn"><Login className="btn login"></Login></div>
                                
                                <div className="col btn">
                                <Link to={"/cart"}><div><button className="btn cart"><IoMdCart></IoMdCart></button></div>
                                    {allitem.length?<div className="total-product">{allitem.length}</div>:null}
                                </Link>

                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allitem: state.cart.product,
        // totalprice: state.cart.totalprice,
        // testitem: state.cart.number
    }
}

export default connect(mapStateToProps,)(header);