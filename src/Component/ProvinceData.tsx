import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {StateDefault} from '../redux/covidReducer'
import {getData, getDataGlobal, getDetailCovid} from '../action/covidAction'
import {Pagination} from 'antd'
import {FormComponentProps} from "antd/lib/form";
import background from '../static/img/background-indo.jpg'

const ProvinceData: React.FC = () => {


    const covidDataGlobal = useSelector<StateDefault, StateDefault["covidWorld"]>((
        state
    ) => state.covidWorld)
        
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDataGlobal())
    }, [])


    return (
        <div className="demo-wrap">
            <div className="demo-content">
                <h1>Information Covid Province Indonesia</h1>
                <div>
                    <div>
                        <div className="data-province">
                            {covidDataGlobal && covidDataGlobal.map(val =>(
                                <div className="data-table-province">
                                    <h3>{val.provinsi}</h3>
                                    <p>Kasus : {val.kasus}</p>
                                    <p>Sembuh : {val.sembuh}</p>
                                    <p>Meninggal : {val.meninggal}</p>
                                    <p>Dirawat : {val.dirawat}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProvinceData
