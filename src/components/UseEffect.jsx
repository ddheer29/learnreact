import React, { useState, useEffect } from 'react'
import '../styles/UseEffect.css'
import Button from '@mui/material/Button';


const UseEffect = () => {
    const [state, setState] = useState(2);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData(){
            const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
            const res = await get.json();
            setData(res);
            console.log(res);
        }
        getData();
        document.title = `(${state})`
    }, [state]);
    return (
        <div className="App">
            <div className='main'>
                <h1 className='heading'>UseEffect</h1>
            </div>
            <Button variant="outlined" size="large" onClick={() => setState(state+1)} >
                Click Me  {state}
            </Button>
            {
                data.map((element, index) => {
                    return (
                        <div className='data' key={index} style={{color: "black"}}>
                            <h4>FirstName: {element.firstName}</h4>
                            <h4>LastName: {element.lastName}</h4>
                            <h4>Email: {element.email}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UseEffect
