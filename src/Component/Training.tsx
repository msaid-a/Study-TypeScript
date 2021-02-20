import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {StateDefault} from '../redux/covidReducer'
import {getData} from '../action/covidAction'

type props = {
    tittle: string,
}

interface testObj {
    name : string,
    age : number,
    live: boolean
}

interface DataCovid {
    positif: number,
    dirawat: number,
    sembuh: number,
    meninggal: number,
    lastUpdate: string
}

const user : string = "andi"

const data : testObj = {
    name: 'Ujang',
    age: 12,
    live: true
}


const Training: React.FC<props> = ({tittle}) => {
    const covidData = useSelector<StateDefault, StateDefault["covid1"]>((state) => state.covid1)
    const dispatch = useDispatch()
    const [counter, setCounter] = useState<number>(0)
    const [name, setName] = useState<string>("")
    // const [covid, setCovid] = useState<DataCovid>()

    useEffect(() => {
        // axios.get<DataCovid>('https://apicovid19indonesia-v2.vercel.app/api/indonesia')
        //     .then(res => {
        //         console.log(res.data)
        //         setCovid(res.data)
        //     })
        dispatch(getData())
    }, [])

    const addCounter = (value: number) => {
        setCounter(counter + value)
    }

    const resetCounter = () => {
        setCounter(0)
    }

    const addName = (value: string) => {
        setName(value)
    }



    return (
        <div style={{margin: 20 }}>
            {/* {props.tittle} */}
            <br />
            {name}
            <br />
            {counter}
            <br />
            <input onChange={(e) => addName(e.target.value)} />
            <button onClick={()=>addCounter(1)}>Click !</button> 
            <button onClick={resetCounter}>Reset</button>
            <br />
            <br />
            <br />
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
