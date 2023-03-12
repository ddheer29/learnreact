import React, {useContext} from 'react'
import {AppState, ArrayState} from "../ContextAPI"

const ComponentC = () => {
    const appData = useContext(AppState);
    const arrayData = useContext(ArrayState);

    return (
        <div style={{color: "black"}}>
            <h1>ComponentC</h1>
            <h1>{appData.name}</h1>
            <h1>{appData.age}</h1>
            {
                arrayData.map((element, index) => {
                    return (
                        <div style={{display: "flex", justifyContent: "space-evenly"}}>
                            <h1>arr[{index}]: {element}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ComponentC