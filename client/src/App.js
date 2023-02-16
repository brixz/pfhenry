import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Pages/1-Home/Home';
import Products from './Pages/2-Product/Product';
import ProductDetail from './Pages/3-ProductDetail/ProductDetail';


function App() {
  return (
    <div className="App">
      <Router>
        
        <Route path="/" exact component={Home}/>

        <Route path="/products" exact component={Products}/>

        <Route path="/details" exact component={ProductDetail}/>
      
      </Router>
    </div>
  );
}

export default App;
