import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
        <h1>Movie Reviews</h1>
        <Link to={'/'} style={{textDecoration: "none", color: "white"}}><h1>Home</h1></Link>
        <Link to={'/movies'} style={{textDecoration: "none", color: "white"}}><h1>All Movies</h1></Link>
        <Link to={'/usestatedemo'} style={{textDecoration: "none", color: "white"}}><h1>UseStateDemo</h1></Link>
        <Link to={'/recordkeeper'} style={{textDecoration: "none", color: "white"}} ><h1>Record Keeper</h1></Link>
    </div>
  )
}

export default Header