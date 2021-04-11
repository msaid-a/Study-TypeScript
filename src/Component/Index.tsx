import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {StateDefault} from '../redux/covidReducer'
import {getData, getDataGlobal, getDetailCovid} from '../action/covidAction'
import {Button, Form, Input, Icon, Checkbox} from 'antd'
import { FormComponentProps } from "antd/lib/form";
import Headers from './Headers'
import Data from './Data'
import ProvinceData from './ProvinceData'


type props = {
    tittle: string,
    form: FormComponentProps
}



const Training: React.FC<props & FormComponentProps> = ({form, tittle}) => {
    const covidData = useSelector<StateDefault, StateDefault["covid1"]>((state) => state.covid1)
    const covidDataGlobal = useSelector<StateDefault, StateDefault["covidWorld"]>((state) => state.covidWorld)
    const covidDataDetail = useSelector<StateDefault>((state) => state)


    

    return (
        <div>
            <Data />
            <ProvinceData />
        </div>
    )
}


export default Training
