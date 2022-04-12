import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route exact path="/" element={<Navbar/>} />
        <Route path="/add" element={<h2>Add component</h2>} />
        <Route path="/edit/:id" element={<h2>Edit component</h2>} />
      </Routes>
    </div>
  );
}

export default App;
