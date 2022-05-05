import axios from "axios";
import { LOGIN, SIGNUP, CHANGE_PASSWORD } from "../../config/urls";
import types from '../types'
import store from "../store";
import { apiPost, setUserData } from "../../utils/utils";
const { dispatch } = store;

export const saveUserData = (data) => {
    console.log('loginData in actions', data)
    dispatch({
        type: types.LOGIN,
        payload: data,

    });

}
export const Logout = () => {
    dispatch({
        type: types.LOGOUT,



    });
}
export const login = (data, headers = {}) => {
    return new Promise((resolve, reject) => {
        apiPost(LOGIN, data, headers)
            .then(res => {
                setUserData(res.data).then(suc => {
                    saveUserData(res.data);
                    resolve(res);
                });
            })
            .catch(error => {
                reject(error);
            });
    });
};

export function signUp(data) {
     console.log("signUp", data)
    return apiPost(SIGNUP, data)
}

export const Intro =data=>{
    console.log(data, "introoo")
    // alert('hey')
    dispatch({
        type:types.INTRO,
        payload:data,
    })
}
export function changePassword (data){
    console.log("changepassword", data)
    return apiPost(CHANGE_PASSWORD,data)
}
