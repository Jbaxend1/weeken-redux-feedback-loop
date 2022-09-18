import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Feeling = () => {

    const history = useHistory();

    const feeling = useSelector( store => store.feeling);

    const [ validity, setValidity ] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({ type: 'SET_FEELING', payload: event.target.value });
        setValidity(true);
    }

    const handleNext = (e) => {
        history.push('/understand');
    }

    return (
        <>
            <h3>How Are You Feeling Today?</h3>
            <h5>0 being bad and 5 being Great!</h5>
            <input onChange={handleChange} type='number' placeholder='0' required='required' min={0} max={5}></input>
            <button value={validity} onClick={validity ? handleNext : undefined}>Next</button>
            {
                validity ? undefined : <div className="warning">Input Must Be Provided...</div>
            }
        </>
    )
}

export default Feeling;