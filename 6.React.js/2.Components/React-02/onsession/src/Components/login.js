function Login() {
    const logedin = true;
    return ( 
        <>
        <button> {logedin ? 'Log out' : 'Log in'} </button>
        <h3> {logedin ? 'Welcome back' : 'Please log in'} </h3>
        </>
     );
}

export default Login;