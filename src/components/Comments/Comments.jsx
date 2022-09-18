import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";

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
            <h5>Place any additional comments here:</h5>
            <input onChange={handleChange} type='text' placeholder='Comments'></input>
            <Button onClick={() => history.push('/review')}>Next</Button>
        </>
    )
}

export default Comments;