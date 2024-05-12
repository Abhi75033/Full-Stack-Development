// import logo from './logo.svg';
import './App.css';
import Headers from './Components/Headers';
import Slider from './Components/Slider';
// import { Footer, Header, Main, Slider } from './Components/Header';
// import Login from './Components/Login';
import Usecase1 from './JSX/Usecase1';
import Usecase3 from './JSX/Usecase3';
import Usecase2 from './JSX/Usecsae2';


function App() {
  return (
    <div className='container mt-4'>
    {/* <Header/>
    <Slider/>
    <Main/>
    <Footer/> */}
    {/* <Login/> */}
    {/* <Usecase1/> */}
    <Headers/>
    <Slider/>
    <Usecase3/>

    </div>
  );
}

export default App;
