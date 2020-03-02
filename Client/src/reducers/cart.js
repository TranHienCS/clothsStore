import * as types from '../constants/index.js';
const size = (state ={a:'a'},action)=>{
    switch(action.type){
        case types.GET_SIZE:
            return action.size;
        default: return state;
    }
}
export default size;