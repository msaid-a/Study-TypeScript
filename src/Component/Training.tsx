import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {StateDefault} from '../redux/covidReducer'
import {getData, getDataGlobal} from '../action/covidAction'
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


const Training: React.FC<props & FormComponentProps> = ({form, tittle}) => {
    const covidData = useSelector<StateDefault, StateDefault["covid1"]>((state) => state.covid1)
    const covidDataGlobal = useSelector<StateDefault, StateDefault["covidWorld"]>((state) => state.covidWorld)

    const dispatch = useDispatch()
    const [counter, setCounter] = useState<number>(0)
    const [name, setName] = useState<string>("")
    const { getFieldDecorator } = form;

    // const [covid, setCovid] = useState<DataCovid>()

    useEffect(() => {
        // axios.get<DataCovid>('https://apicovid19indonesia-v2.vercel.app/api/indonesia')
        //     .then(res => {
        //         console.log(res.data)
        //         setCovid(res.data)
        //     })
        // dispatch(getData())
        dispatch(getDataGlobal())
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

    const  handleSubmit = (e :React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        interface valueType {
            username: string, 
            password: string, 
            remember: boolean
        }
        form.validateFields((err, values) => {
          if (!err) {
              const data : valueType = values
          }
        });
      };
    



    return (
        <div style={{margin: 20, width: 280 }}>
            {/* {props.tittle} */}
            <br />
            {name}
            <br />
            {counter}
            <br />
            <input onChange={(e) => addName(e.target.value)} />
                <Button type="primary" onClick={()=>addCounter(1)}>Click !</Button> 
                <Button type="primary" onClick={resetCounter}>Reset</Button>
            <br />
            <br />
            <br />
            {/* {covidData} */}
            <p>Positif : {covidData?.positif}</p>
            <p>Semuh : {covidData?.sembuh}</p>
            <p>Dirawat : {covidData?.dirawat}</p>
            <p>Meninggal : {covidData?.meninggal}</p>
            <p>Terakhir Update : {covidData?.lastUpdate}</p>
            <Form className="login-form" onSubmit={handleSubmit}>
                <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="">register now!</a>
                </Form.Item>
            </Form>

            
        </div>
    )
}


const WrappedRegistrationForm = Form.create()(Training);
export default WrappedRegistrationForm
