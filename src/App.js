import { useState } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { ToastContainer } from "react-toastify";
function App() {

  return (
    <Router>
      <div className="  h-screen w-full">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              {/* <Route
                path="/"
                element={user ? <Navigate to="/profile" /> : <Login />}
              /> */}
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
