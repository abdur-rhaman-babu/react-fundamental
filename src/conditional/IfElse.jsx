const loggedInOutStatus = (status) =>{
    if(status){
        return <button>Logout</button>
    }else{
        return <button>Login</button>
    }
}

const IfElse = () => {
    return (
        <div>
            {loggedInOutStatus(false)}
        </div>
    );
};

export default IfElse;