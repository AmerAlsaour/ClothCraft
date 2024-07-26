import './Component/Style.css';
import Login from './Pages/Log-in/Login.js'
import Register from './Pages/Log-in/Register.js';
import Homepage from './Hompage/Homepage.js';
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
    <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
          </Routes>
    </Router>
    </div>
   
  );
}


export default App;
