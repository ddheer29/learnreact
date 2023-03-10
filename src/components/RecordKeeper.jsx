import React, { useState } from 'react'
import '../styles/RecordKeeper.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
// import Record from './Record';
import DeleteIcon from '@mui/icons-material/Delete';

const RecordKeeper = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);
    const addData = () => {
        setData([...data, {name, email}]);
        setName("");
        setEmail("");
    }
    const removeData = (index) => {
        let arr = data;
        arr.splice(index, 1);
        setData([...arr]);
    }
    return (
        <div className="keeper">
            <div className='form'>
                <Stack spacing={2} direction="row">
                    <TextField 
                        value={name} 
                        onChange={(element) => setName(element.target.value)}
                        id="standard-basic" 
                        label="Name" 
                        variant="standard" 
                    />
                    <TextField 
                        value={email} 
                        onChange={(element) => setEmail(element.target.value)}
                        id="standard-basic" 
                        label="Email" 
                        variant="standard" 
                    />
                    <Button onClick={addData} variant="text"><AddIcon/></Button>
                </Stack>
            </div>
            <div className="records">
                <div className="record">
                    <h4>Name</h4>
                    <h4>Email</h4>
                    <h4>Remove</h4>
                </div>
                {
                    data.map((e, index) => {
                        return (
                            <div key={index} className="record">
                                <h4>{e.name}</h4>
                                <h4>{e.email}</h4>
                                <Button onClick={() => removeData(index)} variant="text"><DeleteIcon/></Button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RecordKeeper