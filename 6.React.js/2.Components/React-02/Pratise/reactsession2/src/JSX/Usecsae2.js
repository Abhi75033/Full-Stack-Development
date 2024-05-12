function Usecase2() {
    const loggedIn = false
    return ( <>
    <button>{loggedIn?"Logout":"LogIn"}</button>
    <h1>{loggedIn?"Welcome to our Dashboard":"Please Login First"}</h1>
    </> );
}

export default Usecase2;