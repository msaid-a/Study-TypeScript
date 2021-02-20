import {createStore, applyMiddleware} from 'redux'
import {covidReducer} from "./covidReducer"
import thunk from 'redux-thunk'

export const store = createStore(covidReducer, applyMiddleware(thunk))