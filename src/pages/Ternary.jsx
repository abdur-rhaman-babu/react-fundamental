const Ternary = () => {
    const marks = 80;
    
    return (
        <div>
            {marks >= 80 ? <h1>Good Result</h1> : <h1>Bad Result</h1>}
        </div>
    );
};

export default Ternary;