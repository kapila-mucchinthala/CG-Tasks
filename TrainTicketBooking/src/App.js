// import './App.css';
import { Signup } from "./components/Signup";
import {Routes,Route} from 'react-router-dom';
import { SignIn } from "./components/SignIn";
import { Booking } from "./components/Booking";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
       
    </div>
  );
}

export default App;
