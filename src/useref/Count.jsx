import { useRef } from "react";


const Count = () => {
    const count = useRef(0)
    const handleCount = () =>{
        count.current++
        console.log(count.current)
    }
    return (
        <div>
            <button onClick={handleCount}>Count</button>
        </div>
    );
};

export default Count;