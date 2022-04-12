import './App.css';
import { Header } from './containers/Header';
import { ProductListing } from './containers/ProductListing';
import { ProductDetail } from './containers/ProductDetail';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
        <Header/>
        <Routes>
        <Route path='/' exact element={<ProductListing/>} />
        <Route path='/product/:productId' exact element={<ProductDetail/>} />
        <Route>404 Not Found</Route>
        </Routes>
      
    </div>
  );
}

export default App;
