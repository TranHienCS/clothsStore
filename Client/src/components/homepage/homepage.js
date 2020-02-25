import React, { Component } from 'react';
import Categorypic from './categoryRow/category.js'
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
                    <Categorypic className="pic1" category="Ladies"></Categorypic>
                    <Categorypic className="pic2" category="Man"></Categorypic>
                    <Categorypic className="pic3" category="Boys"></Categorypic>
                    <Categorypic className="pic4" category="Girls"></Categorypic>
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