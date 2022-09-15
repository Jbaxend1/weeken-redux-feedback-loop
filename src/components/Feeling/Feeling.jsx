const Feeling = () => {
    return (
        <>
            <h3>How Are You Feeling Today?</h3>
            <h5>0 being bad and 5 being Great!</h5>
            <input type='number' placeholder='0' required='required' min={0} max={5}></input>
            <button>Next</button>
        </>
    )
}

export default Feeling;