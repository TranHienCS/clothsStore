import axios from 'axios';
const URL = 'localhost:4000/';
const helper ={
    sentInfoResgiter(objinfo){
        return axios.post(URL+'register',objinfo)
            .then(res=>{
                console.log(objinfo);
                return res.data})
            .catch(()=>console.log("error"))
    }
}

export default helper;