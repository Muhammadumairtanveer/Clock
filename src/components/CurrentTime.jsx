let CurrentTime = ()=>{
    
    let time = new Date();

    return <p className="lead">This is the current date and time: {time.toLocaleDateString()}
    <br />{time.toLocaleTimeString()}</p>
};

export default CurrentTime;