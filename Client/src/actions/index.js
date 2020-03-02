import * as types from '../constants/index.js';

export const getitem = (item)=>{
    return{
        type: types.GET_SIZE,
        item
    }
}

export const getcolor = (color) =>{
    return{
        type: types.GET_COLOR,
        color
    }
}