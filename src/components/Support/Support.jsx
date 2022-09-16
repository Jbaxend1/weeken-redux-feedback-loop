import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Support = () => {

    const history = useHistory();

    const support = useSelector( store => store.support );

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value });
    }

    return (
        <>
            <h3>How well do you feel supported?</h3>
            <h5>0 being not well, and 5 being Amazingly!</h5>
            <input onChange={handleChange} type='number' placeholder='0' required='required' min={0} max={5}></input>
            <button onClick={() => history.push('/comments')}>Next</button>
        </>
    )
}

export default Support;