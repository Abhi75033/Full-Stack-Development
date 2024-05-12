import './App.css';
import Featured from './Components/Featured';
import Footer from './Components/Footer';
import Headers from './Components/Header';
import Slider from './Components/Slider';

function App() {
  return (
    <div className="App">
      <Headers/>
      <Slider/>
      <Featured/>
      <Footer/>
    </div>
  );
}

export default App;
