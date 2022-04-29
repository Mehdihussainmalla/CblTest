import types from "../types";
import { setLogin } from '../../utils/utils'

const initial_State = {
    userData: {},

}
export default function (state = initial_State, action) {
    switch (action.type) {
        case types.LOGIN:
            const data = action.payload
            console.log('check user login data',data)
            setLogin(data);
            return { userData: data }


        default:
            return { ...state }
    }
}