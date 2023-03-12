import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nestedrouting = () => {
    return (
        <>
        <div style={{
            display: "flex", 
            justifyContent:"space-evenly",
            color: "black", 
            backgroundColor: "yellow",
            borderRadius: "20px",
            margin: "50px",
            border: "2px solid red"
        }}>
        <h1>Nestedrouting</h1>
            <Link to={'nested1'} style={{color: "black", textDecoration: "none"}}><h4>Nested link1</h4></Link>
            <Link to={'nested2'} style={{color: "black", textDecoration: "none"}}><h4>Nested link2</h4></Link>
        </div>
        <Outlet />
        </>
    )
}

export default Nestedrouting