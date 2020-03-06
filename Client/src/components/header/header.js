import React, { Component } from 'react';
import Search from './Searchbar/searchbar';
import Register from '../register-login/register.js'
import Login from '../register-login/login.js'
import './header.css';
import { IoMdCart } from 'react-icons/io'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {LogoutAccount} from '../../actions/userAction.js';
import { userInfo } from 'os';

class header extends Component {
    logout=()=>{
        console.log(this.props.user);
        this.props.logout();

    }
    render() {
        const {user} = this.props;
        return (
            <div>
                <div className="first">
                    <div className="row header">
                        <div className="col align-self-start">
                            <Search></Search>
                        </div>
                        <div className="col align-self-center">
                            <Link to ="/">
                                <div className="main-logo"></div>
                            </Link>
                        </div>
                        <div className="col align-self-end">
                            <div className="row divbtn">
                            {user?
                            <React.Fragment>
                             <div className="col dropdown">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {user.name}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Edit Profile</a>
                                    <a className="dropdown-item" onClick={this.logout}>Log Out</a>
                                    </div>
                                </div>
                            <div className ="col">Avatar</div>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <div className="col btn"><Register className="btn register"></Register></div>
                                <div className="col btn"><Login className="btn login"></Login></div>
                            </React.Fragment>
                   
                            }

                                <div className="col btn"><button className="btn cart"><Link to ='/cart/Guest'><IoMdCart></IoMdCart></Link></button></div>
                            
                            
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="first">
                    <div className="category">
                        <div className="row">
                            <Link to="/products/man">
                            <div className="col-sm">Man</div>
                            </Link>
                            <Link to="/products/ladies">
                            <div className="col-sm">Ladies</div>
                            </Link>
                            <Link to="/products/girl">
                            <div className="col-sm">Girls</div>
                            </Link>
                            <Link to="/products/boy">
                            <div className="col-sm">Boys</div>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(LogoutAccount)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(header);