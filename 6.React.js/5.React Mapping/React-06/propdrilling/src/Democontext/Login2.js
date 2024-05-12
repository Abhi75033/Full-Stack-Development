import { useLoginContext } from "./LoginContext";

function Login() {
    const {loggedIn,login}=useLoginContext();
    return ( 
        <div>
            <h3>Login Component</h3>
            <button onClick={login}>{loggedIn? 'Logout':'Login'}</button>
        </div>
     );
}

export default Login;