import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth ,db} from './firebase';
import {  toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import {setDoc, doc} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
      e.preventDefault();
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log(user);
        console.log("User Registered Successfully!!");
        toast.success("User Registered Successfully!!", {
          position: "top-center",
        });
        setTimeout(() => navigate("/profile"), 1000);
         if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            firstName: fname,

       });
         }
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
      <form
       onSubmit={handleRegister}
       >
        <h3 className="text-2xl font-bold mb-6 text-center">Sign Up</h3>
  
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2  text-gray-900 text-lg"> Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border-2 border-gray-400 rounded-lg  focus:outline-none focus:ring-3  text-lg"
            placeholder="Name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>
  
  
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-gray-900 text-lg">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border-2 border-gray-400 rounded-lg  focus:outline-none focus:ring-3 text-lg"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
  
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-gray-900 text-lg">Password</label>
          <input
            type="password"
             className="w-full px-3 py-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 text-lg "
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
  
        <div className="d-grid">
          <button type="submit" className="w-full bg-blue-700 text-xl text-white px-4 py-2 rounded-lg hover:bg-blue-800 font-semibold">
            Sign Up
          </button>
        </div>
        <p className="block mt-4 text-center  ">
          Already registered <Link className="underline text-blue-600 hover:text-blue-900" to="/">Login</Link>
        </p>
      </form>
      </div>
      </div>
    );
  }
export default Register