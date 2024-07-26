import "./Component/Style.css";
import Login from "./Pages/Log-in/Login.js";
import Register from "./Pages/Log-in/Register.js";
import Landpage from "./Landpage/Landpage.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./Homepage/HomePage.js";
function App() {
  return (
    <div className='App'>
    <Router>
          <Routes>
            <Route path="/" element={<Landpage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
          </Routes>
    </Router>
    <div className="App">
      <Router>
        <Routes>
          // <Route path="/HomePage" element={<HomePage />} />
          <Route path="/" element={<Landpage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
