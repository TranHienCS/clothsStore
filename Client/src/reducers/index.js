import {combineReducers} from 'redux';
import product from './products.js';
import cart from './cart.js';

const appReducers = combineReducers({
    product,
    cart
});

export default appReducers;