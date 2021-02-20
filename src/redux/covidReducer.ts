import {GET_COVID} from "./type"

interface CovidState {
    positif: number,
    dirawat: number,
    sembuh: number,
    meninggal: number,
    lastUpdate: string
}

export interface StateDefault {
    covid1 : CovidState 
}



const intialState : StateDefault = {
    covid1: {
        positif: 0,
        dirawat: 0,
        sembuh: 0,
        meninggal: 0,
        lastUpdate: ""
    }
}

type Action = {type: "GET_COVID", payload : CovidState}  


export const covidReducer = (state = intialState, action: Action) : StateDefault => {
    switch(action.type){
        case GET_COVID: {
            return {covid1: action.payload} 
        }
        default :
            return state
    }
}