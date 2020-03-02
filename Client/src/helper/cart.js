import axios from 'axios';
const URL = 'http://localhost:4000/';
const carthelper ={
    storeCart(objproduct){
        return axios.post(URL+'addcartproduct',objproduct)
            .then(res=>{return res.data})
            .catch(()=>console.log("adding error"))
    },
    getCart(username){
        return axios.post(URL+'cartbyusername',username)
            .then(res=>{return res.data})
            .catch(()=>console.log("get cart error"))
    },
    removeItem(id){
        return axios.delete(URL+'deleteitembyid',{data:id})
            .then(res=>res.data)
            .catch(()=> console.log("can't remove item"))
    }
}

export default carthelper;