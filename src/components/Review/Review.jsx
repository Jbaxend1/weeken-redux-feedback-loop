import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Button } from "@mui/material";

const Review = () => {

    const feeling = useSelector( store => store.feeling );
    const understand = useSelector( store => store.understand );
    const support = useSelector( store => store.support );
    const comments = useSelector( store => store.comments );

    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feeling,
                understanding: understand,
                support: support,
                comments: comments,
            }
        }).then((response) => {
            dispatch({ type: 'CLEAR_ALL' });
            history.push('/home')
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!');
        })
    }

    return (
        <>
            <h1>Review Your Feedback</h1>
            <h5>Feeling: {feeling}</h5>
            <h5>Understanding: {understand}</h5>
            <h5>Support: {support}</h5>
            <h5>Comments: {comments}</h5>
            
            <Button onClick={handleSubmit}>SUBMIT</Button>
        </>
    )
}

export default Review;