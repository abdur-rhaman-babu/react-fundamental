const Ternary = () => {
    const status = false;
    return (
        <>
            {
                status 
                ? 
                <h1>Logout</h1> 
                : 
                <h1>Login</h1>
            }
        </>
    );
};

export default Ternary;