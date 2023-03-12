import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const CAHeader = () => {
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
            <Link to={'componenta'} style={{color: "black", textDecoration: "none"}}><h1>ComponentA</h1></Link>
            <Link to={'componentb'} style={{color: "black", textDecoration: "none"}}><h1>ComponentB</h1></Link>
            <Link to={'componentc'} style={{color: "black", textDecoration: "none"}}><h1>ComponentC</h1></Link>
        </div>
        <Outlet/>
        </>
    )
}

export default CAHeader
// #253f71
// #81ecec