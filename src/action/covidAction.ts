import {GET_COVID, DataCovidWorld, GET_COVID_GLOBAL} from '../redux/type'
import axios from 'axios'
import {ThunkAction} from 'redux-thunk'


interface DataCovid {
    positif: number,
    dirawat: number,
    sembuh: number,
    meninggal: number,
    lastUpdate: string
}


interface CovidAction {
    type : typeof GET_COVID,
    payload : DataCovid
}

interface CovidGlobalAction {
    type : typeof GET_COVID_GLOBAL,
    payload : DataCovidWorld
}

export const getData =  () : ThunkAction<void,{},{}, CovidAction>=>  {
    return async dispatch => {
        try {
            const res = await axios.get<DataCovid>('https://apicovid19indonesia-v2.vercel.app/api/indonesia')
            dispatch({
                type: GET_COVID,
                payload: res.data
            })
        } catch (error) {
            
        }

    }
}

export const getDataGlobal =  () : ThunkAction<void,{},{}, CovidGlobalAction>=>  {
    return async dispatch => {
        try {
            const res = await axios.get<DataCovidWorld>('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi')
            dispatch({
                type: GET_COVID_GLOBAL,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }

    }
}


