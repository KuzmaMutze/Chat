import {combineReducers, createStore} from "redux";
import aapReducer from "./app-reducer";
 
let rootReducers = combineReducers({
    app: aapReducer
});

type RootReducerType = typeof rootReducers; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

// types
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(rootReducers);
// @ts-ignore
window.__store__ = store;


export default store;