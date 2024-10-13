const Props = (props) => {
    // eslint-disable-next-line react/prop-types
    const {person:{name,age,city}} = props;
   
    return (
        <div>
            <h4>Name: {name}</h4>
            <h4>Age: {age}</h4>
            <h4>city: {city}</h4>
        </div>
    );
};

export default Props;