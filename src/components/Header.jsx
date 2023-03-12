import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const navLinkStyles = ({isActive}) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "white" : "grey",
      fontSize: isActive ? "15px" : "10px"
    }
  }
  return (
    <div className="header">
        <h1>Movie Reviews</h1>
        <NavLink to={'/home'} style={navLinkStyles}><h1>Home</h1></NavLink>
        <NavLink to={'/movies'} style={navLinkStyles}><h1>All Movies</h1></NavLink>
        <NavLink to={'/usestatedemo'} style={navLinkStyles}><h1>UseStateDemo</h1></NavLink>
        <NavLink to={'/recordkeeper'} style={navLinkStyles} ><h1>Record Keeper</h1></NavLink>
        <NavLink to={'/useeffect'} style={navLinkStyles} ><h1>UseEffect</h1></NavLink>
        <NavLink to={'/nestedrouting'} style={navLinkStyles} ><h1>NestedRouting</h1></NavLink>
        <NavLink to={'/contextapi'} style={navLinkStyles} ><h1>ContextAPI</h1></NavLink>
    </div>
  )
}

export default Header