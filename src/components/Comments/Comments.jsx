import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Comments = () => {

    const history = useHistory();

    const comments = useSelector( store => store.comments );

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value });
    }

    return (
        <>
            <h3>Is there anything else you would like us to know?</h3>
            <h5>Place additional comments here:</h5>
            <input onChange={handleChange} type='text' placeholder='Comments'></input>
            <button onClick={() => history.push('/review')}>Next</button>
        </>
    )
}

export default Comments;