import React from 'react'
import useFetch from "../customHooks/useFetch";

const CustomHook = () => {
    const [data] = useFetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
    return (
        <div style={{color: "black"}}>
            <h1>CustomHook</h1>
            {
                data.map((e, i) => {
                    return (
                        <h1 key={i}>{e.firstName}</h1>
                    )
                })
            }
        </div>
    )
}

export default CustomHook