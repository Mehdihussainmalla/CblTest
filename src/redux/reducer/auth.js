import types from "../types";
import { setLogin } from '../../utils/utils'

const initial_State={
    userData :{},

}
const userStatus = (state =initial_State,action) =>{
    switch (action.type) {
        case types.LOGIN:
            console.log('check login reducer ');
            const data= action.payload
            setLogin();
            return{...state.userData,userData:data}
            
            
            
    
        default:
          return{...state}
    }
}