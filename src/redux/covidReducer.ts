import {GET_COVID, DataCovidWorld, GET_COVID_GLOBAL, DetailDataCovid, GET_DETAIL_COVID,  CovidState} from "./type"


export interface StateDefault {
    covid1?: CovidState,
    covidWorld?: DataCovidWorld[],
    covidDetail?: DetailDataCovid
}



const intialState : StateDefault = {
    covid1: {
        positif: 0,
        dirawat: 0,
        sembuh: 0,
        meninggal: 0,
        lastUpdate: ""
    },

    covidWorld:[],

    covidDetail: {
        total: {
            positif: 1410134,
            dirawat: 140451,
            sembuh: 1231454,
            meninggal: 38229,
            lastUpdate: '2021-03-12T10:25:22.000Z'
        },
        penambahan: {
            positif: 6412,
            dirawat: -619,
            sembuh: 6851,
            meninggal: 180,
            tanggal: '2021-03-12',
            created: '2021-03-12T10:25:22.000Z'
        },
        data: {
            odp: 62883,
            pdp: 0,
            total_spesimen: 11481307,
            total_spesimen_negatif: 7465719
        }
    }
}


export const covidReducer = (state = intialState, action: any) : StateDefault => {
    switch(action.type){
        case GET_COVID: {
            return {...state, covid1: action.payload} 
        }
        case GET_COVID_GLOBAL: {
            return {...state, covidWorld: action.payload}
        }
        case GET_DETAIL_COVID: {
            return {...state, covidDetail: action.payload}
        }
        default :
            return state
    }
}

