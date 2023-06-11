import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from "react";

function App() {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=>{
    console.log("hello in use effect");
    setIsLoggedIn(false);
  })

  return( <div className="w-screen h-screen bg-richblack-900 flex flex-col">
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar> 
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
  
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}  ></Route>
  
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>
        
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>

    </Routes>
  </div>
  );
}

export default App;
 