import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faHome, faBell, faHeart, faEnvelope, faWallet, faGlobe, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { side } from '../constant/constant';
import logout from "../assets/logout.svg";


const SideBar = () => {
  return (
    

 <div className="w-1/5 flex flex-col p-4 "> 

       <div className=" text-4xl font-mongolian  rounded-lg bg-white font-semibold mb-8 p-8 "> 
       LOGO
       </div> 


            <div className=" p-8 bg-white  rounded-lg text-gray-500   font-gilroy font-600  h-[38%]">
                <ul className="font-semibold">
                {
                  side.map((item)=>(
                  <li className="flex items-center p-2 mb-4 hover:text-gray-900 cursor-pointer gap-4">
                <span className="hover:text-gray-900"> <img src={item.image}/></span>  
                  <span>{item.name}</span>
                  </li>
                  ))
                }
                </ul>
              <div className="mt-32 flex gap-4"> <img src={logout}/><a href="#" className="text-[#88c2bb] hover:text-[#88c2dd] font-bold">Log out</a> </div>
            
            </div>
           
            
  </div>
  )
}

export default SideBar;