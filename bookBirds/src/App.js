// import './App.css';
import { Home } from './components/HomePage/Home';
import { Products } from './components/ProductsPage/Products';
import { Routes, Route } from 'react-router-dom';
import { Cart } from './components/CartPage/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
