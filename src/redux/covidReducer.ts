import {GET_COVID, DataCovidWorld, GET_COVID_GLOBAL} from "./type"

interface CovidState {
    positif: number,
    dirawat: number,
    sembuh: number,
    meninggal: number,
    lastUpdate: string
}

export interface StateDefault {
    covid1?: CovidState | any 
    covidWorld?: DataCovidWorld[]
}



const intialState : StateDefault = {
    covid1: {
        positif: 0,
        dirawat: 0,
        sembuh: 0,
        meninggal: 0,
        lastUpdate: ""
    },
    covidWorld:[]
}

type covid1Action = {type: "GET_COVID", payload : CovidState}
type covidWorldAction = {type: "GET_COVID_GLOBAL", payload: DataCovidWorld[]}

type Action = covid1Action | covidWorldAction


export const covidReducer = (state = intialState, action: Action) : StateDefault => {
    switch(action.type){
        case GET_COVID: {
            return {covid1: action.payload} 
        }
        case GET_COVID_GLOBAL: {
            return {covidWorld: action.payload}
        }
        default :
            return state
    }
}

