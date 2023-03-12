import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = () => {
    return (
        <div style={{color: "black"}}>
            <h1>ComponentB</h1>
            <ComponentC/>
        </div>
    )
}

export default ComponentB