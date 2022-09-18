const Validity = ( isValid ) => {

    const handleValid = (e) => {
        if (e.target.value === 'true') {
            history.push('/understand');
        } else {
            return <div>Score Inputs Must Be Valid!</div>
        }
        
    
        
    }



    return ( 
        <>
            <button value={isValid} onClick={handleValid}>Next</button>
        </>
        
    )
}

export default Validity;