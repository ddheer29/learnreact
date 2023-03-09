import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


const Record = ({name, email, index}) => {
    const removeData = () => {

    }
    return (
        <div className="record">
            <h4>{name}</h4>
            <h4>{email}</h4>
            <Button onClick={removeData} variant="text"><DeleteIcon/></Button>
        </div>
    )
}

export default Record