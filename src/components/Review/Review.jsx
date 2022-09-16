import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Review = () => {

    const feeling = useSelector( store => store.feeling );
    const understand = useSelector( store => store.understand );
    const support = useSelector( store => store.support );
    const comments = useSelector( store => store.comments );

    return (
        <>
            <h1>Review Your Feedback</h1>
            <h5>Feeling: {feeling}</h5>
            <h5>Understanding: {understand}</h5>
            <h5>Support: {support}</h5>
            <h5>Comments: {comments}</h5>
            
            <button>SUBMIT</button>
        </>
    )
}

export default Review;