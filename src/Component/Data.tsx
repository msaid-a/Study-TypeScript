import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {StateDefault} from '../redux/covidReducer'
import {getDetailCovid} from '../action/covidAction'
import moment from 'moment'
const Data: React.FC = () => {

    const covidDataDetail = useSelector<StateDefault, StateDefault["covidDetail"]>((state) => state.covidDetail)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getDetailCovid())
    }, [])
    return (
        <div className="background-data">
            <div className="data">
                <h1>Information Covid Indonesia ({moment(covidDataDetail?.total.lastUpdate).format('DD MMM YYYY')})</h1>
                <table className="data-table">
                    <tr>
                        <th>Positif</th>
                        <th>Sembuh</th>
                        <th>Meninggal</th>
                        <th>Dirawat</th>

                    </tr>
                    <tr>
                        <td>{covidDataDetail?.total.positif} <span>+ {covidDataDetail?.penambahan.positif}</span></td>
                        <td>{covidDataDetail?.total.sembuh}<span>+ {covidDataDetail?.penambahan.sembuh}</span></td>
                        <td>{covidDataDetail?.total.meninggal}<span>+ {covidDataDetail?.penambahan.meninggal}</span></td>
                        <td>{covidDataDetail?.total.dirawat}<span> {covidDataDetail?.penambahan.dirawat}</span></td>
                    </tr>
                </table>
            </div>
            <p style={{marginTop: 10}}>Source of apicovid19indonesia</p>
        </div>
    )
}

export default Data
