import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Understanding = () => {

    const history = useHistory();

    const understand = useSelector( store => store.understand );

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value });
    }

    return (
        <>
            <h3>How well are you understanding the content?</h3>
            <h5>0 being bad and 5 being Great!</h5>
            <input onChange={handleChange} type='number' placeholder='0' required='required' min={0} max={5}></input>
            <button onClick={() => history.push('/support')}>Next</button>
        </>
    )
}

export default Understanding;