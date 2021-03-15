import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {StateDefault} from '../redux/covidReducer'
import {getData, getDataGlobal, getDetailCovid} from '../action/covidAction'
import {Button, Form, Input, Icon, Checkbox} from 'antd'
import { FormComponentProps } from "antd/lib/form";


type props = {
    tittle: string,
    form: FormComponentProps
}

interface testObj {
    name : string,
    age : number,
    live: boolean
}


const Training: React.FC<props & FormComponentProps> = ({form, tittle}) => {
    const covidData = useSelector<StateDefault, StateDefault["covid1"]>((state) => state.covid1)
    const covidDataGlobal = useSelector<StateDefault, StateDefault["covidWorld"]>((state) => state.covidWorld)
    const covidDataDetail = useSelector<StateDefault>((state) => state)


    const dispatch = useDispatch()


    useEffect(() => {
       
        dispatch(getData())
        dispatch(getDataGlobal())
        dispatch(getDetailCovid())
    }, [])

    console.log(covidDataGlobal, 'zxczxc')
    console.log(covidDataDetail, 'zxczxc2')
    return (
        <div style={{margin: 20, width: 280 }}>
        
            {/* {covidData} */}
            <p>Positif : {covidData?.positif}</p>
            <p>Semuh : {covidData?.sembuh}</p>
            <p>Dirawat : {covidData?.dirawat}</p>
            <p>Meninggal : {covidData?.meninggal}</p>
            <p>Terakhir Update : {covidData?.lastUpdate}</p>

        </div>
    )
}


export default Training
