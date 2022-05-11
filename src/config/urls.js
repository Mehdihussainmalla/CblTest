export const BASE_API_URL = 'http://192.168.100.101:8002/api';
export const getApiUrl = (endpoint) => BASE_API_URL + endpoint;

export const LOGIN = getApiUrl("/userlogin");
export const SIGNUP = getApiUrl('/signup');
export const CHANGE_PASSWORD = getApiUrl("/change_password");
export const EDIT_PROFILE_API= getApiUrl ("/edit_profile");
export const IMG_UPLOAD = getApiUrl ("/img_upload");

