import "./Component/Style.css";
import Login from "./Pages/Log-in/Login.js";
import Register from "./Pages/Log-in/Register.js";
import Landpage from "./Landpage/Landpage.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Homepage/HomePage.js";
import OrdersPage from './Pages/Orders/OrdersPage.js'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/" element={<Landpage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
