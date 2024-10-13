import { useRef } from "react";

const InputElement = () => {
    let firstName, lastName = useRef()

    const handleClick = () =>{
        const fName = firstName.value;
        const lName = lastName.value;
        console.log(fName, lName)
    }
    return (
        <>
            <input ref={(a)=>firstName = a} type="text" placeholder="First Name" />
            <input ref={(a)=>lastName = a} type="text" placeholder="Last Name" />
            <button onClick={handleClick}>submit</button>
        </>
    );
};

export default InputElement;