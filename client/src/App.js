import './App.css';
import { Route } from "react-router-dom";
import Home from './Pages/1-Home/Home';
import Products from './Pages/2-Product/Product';
import ProductDetail from './Pages/3-ProductDetail/ProductDetail';


function App() {
  return (
    <div className="App">

      <Route path="/" exact component={Home}/>

      <Route path="/products" exact component={Products}/>

      <Route path="/details" exact component={ProductDetail}/>
    
    </div>
  );
}

export default App;
