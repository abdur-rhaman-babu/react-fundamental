import { useRef } from "react";

const UseRef = () => {
    const heading = useRef()
   const showData = () =>{
     heading.current.innerText = 'Hello use Ref'
   }
    return (
        <div>
            <h1 ref={heading}></h1>
            <button onClick={showData}>Submit</button>
        </div>
    );
};

export default UseRef;