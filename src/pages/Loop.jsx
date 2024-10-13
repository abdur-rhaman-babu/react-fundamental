const Loop = () => {
    const division = ['Dhaka', 'Khulna', 'Chattogram', 'Mymansingh', 'Rangpur', 'Sylhet','Rajshahi', 'Barisal']
    return (
        <div>
            {
                division.map((item, i)=>{
                    return <h3 key={i}>{item}</h3>
                })
            }
        </div>
    );
};

export default Loop;