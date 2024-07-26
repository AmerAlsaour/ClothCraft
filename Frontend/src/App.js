import "./Component/Style.css";
import Login from "./Pages/Log-in/Login.js";
import Register from "./Pages/Log-in/Register.js";
import Landpage from "./Landpage/Landpage.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Homepage/HomePage.js";
import OrdersPage from "./Pages/Orders/OrdersPage.js";
import Customization from './Pages/Customization.js'
import {  useAuthContext } from "./context/AuthContext.js";

function App() {
  const { authUser } = useAuthContext()

  console.log(authUser , 'Auth');
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/HomePage" element={ authUser ? <HomePage /> : <Login/>} />
            <Route path="/" element={<Landpage />} />
            <Route path="/customize" element={ authUser ? <Customization /> : <Login/>} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
          </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
