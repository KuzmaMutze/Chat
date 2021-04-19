import { InferActionTypes } from './store';
import { Dispatch } from 'redux';

let initialState = {
    is: false
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
type DispatchType = Dispatch<ActionsType>


const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET":
            return {
                ...state
            }
        default:
            return state
    }
}

export const actions = {
    setAC: () => ({type: "SET"} as const) 
}

export default appReducer;