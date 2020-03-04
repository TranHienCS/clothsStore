import * as types from '../constants/index.js';
var initialState=[
    {
        id: 1,
        name: "samsung s20",
        price: 200
    }
]

const product = (state=initialState,action)=>{
    switch(action.type){
        case types.DEMO: return state
        default: return state;
    }
}

export default product
