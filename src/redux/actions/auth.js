import axios from "axios";
import { LOGIN, SIGNUP, CHANGE_PASSWORD, EDIT_PROFILE_API, POST_SEND, IMG_UPLOAD, POST_UPLOAD } from "../../config/urls";
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
export const login = (data) => {
    console.log(data, 'the given data for login')
    return new Promise((resolve, reject) => {
        apiPost(LOGIN, data)
            .then((res) => {
                saveUserData(res.data)
                resolve(res)
            })
            .catch((error) => {
                reject("gjyhj", error);
            });
    });
};

export function signUp(data) {
    console.log("signUp", data)
    return apiPost(SIGNUP, data)
}

export const Intro = data => {
    // console.log(data, "introoo")
    dispatch({
        type: types.INTRO,
        payload: data,
    })
}
export function changePassword(data) {
    console.log("changepassword", data)
    return apiPost(CHANGE_PASSWORD, data)
}

export function editProfile(data) {
    console.log(data, 'the given data for login')
    return new Promise((resolve, reject) => {
        apiPost(EDIT_PROFILE_API, data)
            .then((res) => {
                saveUserData(res.data)
                resolve(res)
            })
            .catch((error) => {
                reject("rejected", error);
            });
    });
}


export const imgUpload = (data,header ={} )=>{
    console.log("data from actions for img upload",data)
    return new Promise ((resolve , reject)=>{
        apiPost(IMG_UPLOAD , data , header)
        .then((res)=>{
            console.log("response from img upload",res);
            resolve(res);
        })
        .catch((error)=>{
            console.log("errorr occurred at img upload time",error);
            reject(error)
        })
    })

}

export function uploadPost (data) {
    console.log("data check for upload post",data)
    return apiPost(POST_UPLOAD, data)
}


