import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase";
import {  toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css'; 
import { Link, useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in Successfully");
       
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        setTimeout(() => navigate("/profile"), 300);
      }
       catch (error) {
        console.log(error.message);
  
        toast.error(error.message, {
          position: "bottom-center",
        });
      }
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-300">
         <div className="bg-white p-8 rounded-lg shadow-lg shadow-gray-500  w-full max-w-md">
         <h3 className="text-2xl font-bold mb-6 text-center">Login</h3>
      <form
  
       onSubmit={handleSubmit}
       >
       <div className="mb-4">
       <label htmlFor="email" className="block mb-2  text-gray-900 text-lg">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg  focus:outline-none focus:ring-3 text-lg"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>

          <div className="mb-6"> 
          <label htmlFor="password" className="block mb-2 text-gray-900 text-lg">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 text-2xl "
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <button  className="w-full bg-blue-700 text-xl font-semibold text-white px-4 py-2 rounded-lg hover:bg-blue-800">
            Sign In
          </button>

        <p className="block mt-4 text-center  ">
          New user? <Link className="underline text-blue-600 hover:text-blue-900" to="/register">Register Here</Link>
        </p>
     
      </form>
    
      </div>
      
      </div>
    )
  };
export default Login;