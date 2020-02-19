import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Homepage from '../homepage/homepage';
import Products from '../products/Products.js';
class RouterURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Homepage}/>
                <Route path="/products" component={Products}/>
            </div>
        );
    }
}

export default RouterURL;