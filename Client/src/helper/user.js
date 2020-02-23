import axios from 'axios';
const URL = 'http://localhost:4000/';
const helper ={
    sentInfoResgiter(objinfo){
        return axios.post(URL+'register',objinfo)
            .then(res=>{
                return res.data})
            .catch(()=>console.log("error"))
    },
    getAllProduct(){
        return axios.get(URL+'products')
            .then(respones=>{return respones.data;})
    },
    getProductById(objId){
        return axios.post(URL+'searchById',objId)
            .then(res=>{return res.data})
            .catch(()=>console.lot("Search by id error"))
    }
}

export default helper;