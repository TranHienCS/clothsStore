import React, { Component } from 'react';
import './footer.css';
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { TiSocialInstagram } from 'react-icons/ti'
class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-1">
                    <div className="row first-footer">
                        <div className="col logo-footer">

                        </div>
                        <div className="row col-6">
                            <div className="col op">Home</div>
                            <div className="col op">Products</div>
                            <div className="col op">Services</div>
                            <div className="col op">Abouts Us</div>
                            <div className="col op">Help</div>
                            <div className="col op">Contacts</div>
                        </div>
                        <div className="col">
                            <div className="row icon-footer">
                                <div className="col icon "><FaTwitter></FaTwitter></div>
                                <div className="col icon"><FaFacebookF></FaFacebookF></div>
                                <div className="col icon"><TiSocialInstagram></TiSocialInstagram></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row info-footer">
                    <div className="col info-f row">
                        <div className="col op1">Home</div>
                        <div className="col op1">Products</div>
                        <div className="col op1">Services</div>
                        <div className="col op1">Abouts Us</div>
                        <div className="col op1">Help</div> 
                        <div className="col op1">Contacts</div>
                    </div>
                    <div className="col info"></div>
                </div>
            </div>
        );
    }
}

export default footer;