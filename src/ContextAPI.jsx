import React, {useState, createContext} from 'react'
import './App.css'
import CAHeader from './contexapi/CAHeader';
import ComponentA from './contexapi/ComponentA';

const AppState = createContext();
const ArrayState = createContext();


const ContextAPI = () => {
    const [data, setData] = useState({name: 'Om', age: 20});
    const [array, setArray] = useState([13,23,346,35,865,573,54,6758,5634,305]);
    return (
        <AppState.Provider value={data}>
        <ArrayState.Provider value={array}>
            <h1 style={{color: "black"}}>ContextAPI</h1>
            <CAHeader/>
            <ComponentA/>
        </ArrayState.Provider>
        </AppState.Provider>
    )
}

export default ContextAPI
export {AppState, ArrayState}