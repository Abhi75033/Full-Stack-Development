function Usecase1(props) {

    const {name, message,age} = props;

    // const name = props.name;
    // const message = props.message;

    return ( <>
        <h1> {name} </h1> 
        <p>{age}</p>
        <h2> { (message)? message:'Good Morning....!'} </h2>
    </> );
}

export default Usecase1;