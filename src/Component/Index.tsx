import React, {useState, useEffect} from 'react'

import { FormComponentProps } from "antd/lib/form";
import Data from './Data'
import ProvinceData from './ProvinceData'


type props = {
    tittle: string,
    form: FormComponentProps
}



const Training: React.FC<props & FormComponentProps> = ({form, tittle}) => {

    

    return (
        <div>
            <Data />
            <ProvinceData />
        </div>
    )
}


export default Training
