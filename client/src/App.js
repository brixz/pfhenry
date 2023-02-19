import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Pages/1-Home/Home';
import Products from './Pages/2-Product/Product';
<<<<<<< HEAD
import ProductDetail from './Pages/3-ProductDetail/ProductDetail';
import { loginButtom } from './Components/Login/login';
=======
import ProductDetailCard from './Pages/3-Detail/ProductDetailCard'
import Create from './Pages/4-Create/Create';

>>>>>>> 3a1b1cb346635ad7dd18b97022f7fc668e71a118

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Route path='/login' component={loginButtom} />
      <Route path="/" exact component={Home}/>
=======
      <Router>
        
        <Route path="/" exact component={Home}/>

        <Route path="/products" exact component={Products}/>
>>>>>>> 3a1b1cb346635ad7dd18b97022f7fc668e71a118

        <Route path="/products/:id" exact component={ProductDetailCard}/>

        <Route path="/product/create" exact component={Create}/>
    
      </Router>
    </div>
  );
}

export default App;
