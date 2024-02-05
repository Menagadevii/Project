import React from "react";
// import Register from "./ATS project/Register";
// import Registerform from "./ATS project/Registerform";
import Loginform  from "./ATS project/Loginform";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registerform from "./ATS project/Registerform";
import Home from "./ATS project/Home";

function App() {
  return (
    <div>
    {/* <Register/> */}
    {/* <Loginform/> */}
    {/* <Registerform/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginform/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path='/Registerform' element={<Registerform/>}/>
    </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;




