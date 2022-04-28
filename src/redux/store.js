import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import reducer from './reducer';
const middleWares= [thunk];
export default createStore(reducer,applyMiddleware(...middleWares));