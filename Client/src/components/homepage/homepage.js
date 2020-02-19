import React, { Component } from 'react';

import './homepage.css';
class homepage extends Component {
    render() {
        return (
            <div>
            
                <div className="second">
                <div className="homepage">
                    <div className="officalpic">
                        
                    </div>
                    <div className="row categorypic">
                        <div className="col pic pic1">
                            <div className="bottom">
                                <div className="cate">Ladies</div>
                                <hr className="line"></hr>
                                <button className="shop">
                                    <a href="/products">
                                    Shop now
                                        
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="col pic pic2">
                        <div className="bottom">
                                <div className="cate">Man</div>
                                <hr className="line"></hr>
                                <button className="shop">
                                    Shop now
                                </button>
                            </div>
                        </div>
                        <div className="col pic pic3">
                        <div className="bottom">
                                <div className="cate">Girls</div>
                                <hr className="line"></hr>
                                <button className="shop">
                                    Shop now
                                </button>
                            </div>
                        </div>
                        <div className="col pic pic4">
                        <div className="bottom">
                                <div className="cate">Boys</div>
                                <hr className="line"></hr>
                                <button className="shop">
                                    Shop now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                </div>
      
            </div>
        );
    }
}

export default homepage;