import { useRef } from "react";

const CssClass = () => {
    const changeColor = useRef()
    const handleChange = () =>{
        changeColor.current.classList.remove('text-seccess')
        changeColor.current.classList.add('text-danger')
    }

    const changeRedToGreen = () =>{
        changeColor.current.classList.add('text-seccess')
        changeColor.current.classList.remove('text-danger')
    }
    return (
        <div>
            <h1 ref={changeColor} className="text-success">Hello world</h1>
            <button onClick={handleChange}>Red</button>
            <button onClick={changeRedToGreen}>Green</button>
        </div>
    );
};

export default CssClass;