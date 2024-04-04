// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/SignIn" element={<SignIn />}></Route>
      <Route path="/SignOut" element={<SignUp />}></Route>
      <Route path="/About" element={<About />}></Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
