import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Pages/1-Home/Home';
import Products from './Pages/2-Product/Product';
import ProductDetailCard from './Pages/3-Detail/ProductDetailCard'
import Create from './Pages/4-Create/Create';


function App() {
  return (
    <div className="App">
      <Router>
        
        <Route path="/" exact component={Home}/>

        <Route path="/products" exact component={Products}/>

        <Route path="/products/:id" exact component={ProductDetailCard}/>

        <Route path="/product/create" exact component={Create}/>
    
      </Router>
    </div>
  );
}

export default App;
