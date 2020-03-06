import axios from 'axios';
const URL = 'http://localhost:4000/';
const helper ={
    sentInfoResgiter(objinfo){
        return axios.post(URL+'register',objinfo)
            .then(res=>(res.data))
            .catch(()=>console.log("error"))
    },
    sentInfoLogin(objinfo){
        return axios.post(URL+'login',objinfo)
        .then(res=>res.data)
        .catch((err)=>console.log("mjjn "+err))
    },
    getAllProduct(){
        return axios.get(URL+'products')
            .then(respones=>{return respones.data;})
    },
    getProductById(objId){
        return axios.post(URL+'searchById',objId)
            .then(res=>{return res.data})
            .catch(()=>console.log("Search by id error"))
    }
}

export default helper;