import React, { Component, useReducer } from 'react';
import {Switch,Route} from "react-router-dom";
import AdminRouter from './adminRouter.js';
import UserRouter from './userRouter.js';
import Homepage from '../homepage/homepage';
import Products from '../products/Products.js';
import DetailProduct from '../detail/detailProduct.js';
import cart from '../cart/cart.js';
import adminPage from '../admin/adminPage.js';
class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <UserRouter exact path="/" component={Homepage}/>
                    <UserRouter path="/products/:slug" component={Products}/>
                    <UserRouter path="/product/detail/:id" component={DetailProduct}></UserRouter>
                    <UserRouter path="/cart/:slug" component ={cart}></UserRouter>
                    <Route path ="/admin/addproduct" component={adminPage}></Route>
                    <Route component={Homepage}></Route>
                    
                </Switch>
            </div>
        );
    }
}

export default RouterURL;