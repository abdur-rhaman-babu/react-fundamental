const Form = () => {
    const hanldeSubmit = (e) =>{
        e.preventDefault()
        alert('form submitted')
    }
    return (
        <form onSubmit={hanldeSubmit}>
            <input type="text" name="" id="" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;