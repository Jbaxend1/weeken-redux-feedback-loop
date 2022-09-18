import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Support = () => {

    const history = useHistory();

    const [ validity, setValidity ] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value });
        setValidity(true);
    }

    const handleNext = (e) => {
        history.push('/comments');
    }

    return (
        <>
            <h3>How well do you feel supported?</h3>
            <h5>0 being not well, and 5 being Amazingly!</h5>
            <input onChange={handleChange} type='number' placeholder='0' required='required' min={0} max={5}></input>
            <button value={validity} onClick={validity ? handleNext : undefined}>Next</button>
            {
                validity ? undefined : <div className="warning">🐐 Input Must Be Provided... </div>
            }
        </>
    )
}

export default Support;