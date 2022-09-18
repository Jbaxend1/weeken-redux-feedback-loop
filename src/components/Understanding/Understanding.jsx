import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { Button } from "@mui/material";

const Understanding = () => {

    const history = useHistory();

    const [ validity, setValidity ] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value });
        setValidity(true);
    }

    const handleNext = (e) => {
        history.push('/support');
    }

    return (
        <>
            <h3>How well are you understanding the content?</h3>
            <h5>0 being bad and 5 being Great!</h5>
            <input onChange={handleChange} type='number' placeholder='0' required='required' min={0} max={5}></input>
            <Button value={validity} onClick={validity ? handleNext : undefined}>Next</Button>
            {
                validity ? undefined : <div className="warning">Input Must Be Provided...</div>
            }
        </>
    )
}

export default Understanding;