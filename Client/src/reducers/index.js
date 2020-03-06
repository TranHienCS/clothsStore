import {combineReducers} from 'redux';
import product from './products.js';
import cart from './cart.js';
import user from './user.js';

const appReducers = combineReducers({
    product,
    cart,
    user
});

export default appReducers;