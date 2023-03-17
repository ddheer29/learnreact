import React, {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        async function getData () {
            const fill = await fetch(url);
            const res = await fill.json();
            setData(res);
        }
        getData();
    }, [])
    return [data];
}

export default useFetch