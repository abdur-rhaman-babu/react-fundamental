const Switch = () => {
    const status = true;
    switch(status){
        case true:
            return <button>Logout</button>
        case false:
            return <button>Login</button>
    }
};

export default Switch;