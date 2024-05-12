import logo from './logo.svg';
import './App.css';
import GrandGparent from './Components/GrandGparent';
import LoginContextProvi from './Democontext/LoginContext';
import LoginContextProvider from './Democontext/LoginContext';
import Login from './Democontext/Login2';
// import Header from './Democontext/Login'

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <Login/>
      </LoginContextProvider>
    </div>
  );
}

export default App;
