import * as types from '../constants/index.js';

let initState ={user:JSON.parse(localStorage.getItem("user")),message:""};

const user = (state=initState,action)=>{
    switch(action.type){
        case types.POST_LOGIN:{
            state.user= action.payload.user;
            return {...state,message:action.payload.message}
        }
        case types.LOG_OUT:{
            
            state = localStorage.getItem("user");
            return state;
        }
        default: return state;
    }

}
export default user;