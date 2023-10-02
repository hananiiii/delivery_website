import './App.css'
import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signup from "./pages/signup.jsx"
import Order from "./pages/order.jsx"
function App() {

  return (
    <>
     <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <div className="pages">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Order" element={<Order />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
      
    </>
  )
}

export default App
