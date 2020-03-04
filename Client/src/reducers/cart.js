import * as types from '../constants/index.js';
let initState = JSON.parse(localStorage.getItem('productCart'))||{totalprice:0,product:[]};

const cart = (state=initState,action)=>{
    switch(action.type){
        case types.ADD_PRODUCT_INTO_CART:{
            // let allitem = state;
            // allitem.push(action.product);
            
            let item = action.product;
            console.log(item);
            let product = [...state.product];
            product.push(item);
            let totalprice = state.totalprice;
            console.log(totalprice);
            totalprice = product.length&&product.reduce((total,item)=>(total+item.quantity*item.price),0);
            console.log(totalprice);
            state={...state,totalprice:totalprice,product: product }
            
            // console.log(state);
            // state.push(item);
            // let arrayItem = state?[...state.arrayItem]:[];
            // state.push(item);
            // state ={...state,number:arrayItem.length,arrayItem:[...arrayItem]}
            console.log(state);
            localStorage.setItem('productCart',JSON.stringify(state));
            return state;
        }
        case types.REMOVE_PRODUCT_IN_CART:{
            let index = action.index;
            let product = [...state.product];
            
            product.splice(index,1);

            let totalprice = product.length&&product.reduce((total,item)=>(total+item.quantity*item.price),0);
            state={...state,totalprice:totalprice,product: product }
            localStorage.setItem('productCart',JSON.stringify(state));
            return state;
        }
        case types.INCREASE_QUANTITY:{
            state.product[action.index].quantity++;
            let product = [...state.product];
            let totalprice = product.length&&product.reduce((total,item)=>(total+item.quantity*item.price),0);
            state={...state,totalprice:totalprice,product: product }
            localStorage.setItem('productCart',JSON.stringify(state));
            return state;

        }
        case types.DECREASE_QUANTITY:{
            state.product[action.index].quantity--;
            let product = [...state.product];
            let totalprice = product.length&&product.reduce((total,item)=>(total+item.quantity*item.price),0);
            state={...state,totalprice:totalprice,product: product }
            localStorage.setItem('productCart',JSON.stringify(state));
            return state;
        }
        case types.TEST:{
            let number = state.number+1;
            let arrayItem = state.arrayItem;
            state = {...state,number: number,arrayItem:[...arrayItem]}
            return state
        }
        default: return state;
    }
}
export default cart;