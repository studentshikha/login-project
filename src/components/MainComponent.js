import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; import { faFilter } from '@fortawesome/free-solid-svg-icons';

import { products } from '../constant/constant';
import { imagesData } from '../constant/constant';
import heart3 from "../assets/heart (3).svg"
import comment from "../assets/comment.svg"
import share from "../assets/share.svg"
import filterImage from "../assets/Component 39 (2).svg"
import searchImage from "../assets/Component 32.svg"








const MainComponent = () => {

  return (
    <div className=" w-3/5 h-fit p-4">

        <div className="  text-[#303030]  font-gilroy font-800 text-16px leading-19px rounded-lg bg-white font-medium mb-8 p-8  flex items-center justify-center shadow-md"> 
          <img src={searchImage}/>
       <input 
       type="text"
       placeholder='Search here...'
       className="flex-grow p-2  text-sm font-medium leading-4 font-sans rounded-lg bg-transparent outline-none"
       /> 

       <div className="flex justify-center items-center">
       <img src={filterImage}/>
       <button className="ml-2 p-2 text-gray-600"> Filters </button>
       </div>
        </div> 


      
   {imagesData.map((item)=>(

<div className="bg-white shadow-md rounded-lg mb-6">
<div className="p-4"> 
   <div className="flex items-center mb-4">
        <div className="flex">
         <img src={item.avatar} className="px-4 mt-2"/>
        </div>
           <div className="font-semibold text-xl text-[#101010]">{item.name}
             <p className="text-[#8D8D8D] text-sm font-medium">{item.username}</p>
             
           </div>
            </div> 
           
            <div className=" p-4">{item.description} <a href="#" className="text-[#FF5E8A]">Read More</a></div>
            
            <img  src={item.src} alt="Post" className="w-full rounded-lg mb-4 p-6" /> 
            <hr className="mb-4 border-2 border-solid border-[#F3F3F3]"/>
            <div className="mt-4 flex items-center"> 
<div className="text-[#101010] p-6 ext-medium flex gap-4 justify-center items-center"> 
<span className=" flex mr-2 gap-2"><span><img src={heart3} /></span>{item.likes}</span> 
<span className="mr-2 flex gap-2"><span><img src={comment}/></span>{item.comments}</span> 
<span className="mr-2 flex gap-2"><span><img src={share}/></span>{item.shares}</span> 
</div> 
</div>           

                </div>
                </div>
   ))   
   }

   <div className="flex overflow-x-hidden space-x-4 -p-6 mt-4 items-center justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex-shrink-0 w-[310px] rounded-lg"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-[200px] w-full object-cover rounded-2xl"
          />
          
          <div className="p-4">
            <h3 className="text-sm font-semibold">{product.title}</h3>
            <div className="flex justify-between">
            <p className="text-xl font-bold text-gray-700">{product.price}</p>
            <div className="flex items-center mt-2">
              {[...Array(product.rating)].map((_, index) => (
                <span key={index} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>

        
 </div>
  )
}

export default MainComponent;