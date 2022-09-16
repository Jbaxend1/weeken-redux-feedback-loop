import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Feeling = () => {

    const history = useHistory();

    const feeling = useSelector( store => store.feeling);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({ type: 'SET_FEELING', payload: event.target.value });
    }

    return (
        <>
            <h3>How Are You Feeling Today?</h3>
            <h5>0 being bad and 5 being Great!</h5>
            <input onChange={handleChange} type='number' placeholder='0' required='required' min={0} max={5}></input>
            <button onClick={() => history.push('/understand')}>Next</button>
        </>
    )
}

export default Feeling;