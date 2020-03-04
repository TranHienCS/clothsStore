import * as types from '../constants/index.js';

export const AddProductIntoCart = (product)=>dispatch=>{
    dispatch ({
        type:types.ADD_PRODUCT_INTO_CART,
        product
    })
}

export const RemoveProductInCart = (index)=>{
    return {
        type: types.REMOVE_PRODUCT_IN_CART,
        index
    }
}

export const IncreaseQuantity = (index)=>{
    return {
        type: types.INCREASE_QUANTITY,
        index
    }
}

export const DecreaseQuantity =(index)=>{
    return{
        type: types.DECREASE_QUANTITY,
        index
    }
}

export const test=()=>{
    return{
        type: types.TEST,
        
    }
}