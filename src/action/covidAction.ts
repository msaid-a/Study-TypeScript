import {GET_COVID} from '../redux/type'
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