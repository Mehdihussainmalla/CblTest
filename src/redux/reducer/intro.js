import { setItem } from "../../utils/utils";
import types from "../types";

const initialState = {
    appIntroData: true,
};

export default Intro = (state = initialState, action) => {
    switch (action.type) {
        case types.INTRO:
            const data = action.payload;
            // console.log(data,'dataaaaaaaaaa')
            setItem('intro', data)
            return { ...state, appIntroData: data }

      

        default:
            return{...state}
    }
};