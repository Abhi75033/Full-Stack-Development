import logo from './logo.svg';
// import './App.css';
import ProductList from './Components/ProductList';
import FetchData from './Components/FetchData';

function App() {
  return (
    <div className="App">
      <FetchData/>
      <ProductList/>
    </div>
  );
}

export default App;
