import React from 'react';
import { artists } from '../constant/constant';


const RightSideBar = () => {

  return (
    <div className="w-1/5  p-4 "
    >
        <div className=" text-lg text-gray-200 bg-[#88c2bb] font-mongolian text-gray- text-32px leading-44px rounded-lg flex justify-center items-center font-semibold mb-8 p-10  "> 
       Become a Seller
        </div>

        <div className="h-[39%]  overflow-y-hidden">
        <div className="tabs flex mb-4 font-semibold "> 
          <div className="flex-1 text-center text-gray-900 cursor-pointer">Artists</div>
           <div className="flex-1 text-center text-[#8D8D8D] cursor-pointer hover:text-gray-900">Photographers</div> 
           </div>
            {artists.map(artist => ( 
              
              <div key={artist.id} className="  h-[22%] "> 
              <img src={artist.image} className="w-full"/>
              <div className="relative m-4 flex text-[#FFFFFF] bottom-20">
              <img src={artist.avatar}  className=" mr-4" /> 
              <div>
                 <div className="font-semibold">{artist.name}</div>
                  <div className="">{artist.handle}</div> 
                  </div>
                  </div> 
                  </div> 
                ))} 
            </div>      

                  <div className="mt-auto flex justify-around text-gray-500 text-sm gap-2">
                     <a href="#" className="hover:underline">Privacy</a> 
                  <a href="#" className="hover:underline">Terms of Service</a> 
                  <a href="#" className="hover:underline">Cookie Notice</a> </div>
    </div>
    
  )
}

export default RightSideBar;