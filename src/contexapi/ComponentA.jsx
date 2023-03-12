import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
    return (
        <div style={{color: "black"}}>
            <h1>ComponentA</h1>
            <ComponentB/>
        </div>
    )
}

export default ComponentA