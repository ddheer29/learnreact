import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();
    return (
        <div style={{color: "black"}}>
            <h1>404 Page Not Found 🥲</h1>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
    )
}

export default Error