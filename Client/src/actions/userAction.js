import * as types from '../constants/index.js';
import userhelper from '../helper/user.js';
export const PostLoginRequest = (email,password)=>{
    return async (dispatch)=>{
        try{
            const response = await userhelper.sentInfoLogin({email,password});
            // console.log("response");
            if(response.status){
                // console.log("true");
                window.location.reload();
                localStorage.setItem('user',JSON.stringify(response.userData));
                localStorage.setItem('user_token',response.accessToken);
            }
            // console.log(response);
            // console.log(response.userData);
            await dispatch(postLogin(response.userData,response.message));
        }catch(error){
            console.log(error);
        }
    }
}
export const LogoutAccount =()=>{
    localStorage.removeItem('user')
    window.location.reload();

}
export const postLogin = (user,message) => {
    return {
        type: types.POST_LOGIN,
            payload:{
                user,
                message
            }
        }
    }
