import React, {useState} from 'react'
import '../styles/UseStateDemo.css'

const UseStateDemo = () => {
    const [num, setNum] = useState(1);
    return (
        <div className="App">
            <div className='main'>
                <h1 className='heading'>{num}</h1>
                <div className="buttons">
                    <button className="btn" onClick={(e) => (setNum(num+1))}>Increment</button>
                    <button className="btn" onClick={(e) => (setNum(num-1))}>Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default UseStateDemo