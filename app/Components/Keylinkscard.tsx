import React from 'react'
import { IconType } from 'react-icons';

import { FaArrowAltCircleRight } from "react-icons/fa";



interface IconInterface{
    Icon:IconType
    heading:string,
    text:string
}
const Keylinkscard = ({Icon,heading,text}:IconInterface) => {

  return (
    <div className=' mr-2 my-2  py-2  h-40 group hover:border-white transition-all duration-300 ease-in-out cursor-pointer  w-60 max-md:w-80  border-white/45   backdrop-blur-xl  hover:shadow-md   hover:shadow-orange-400   bg-gray-300/10 border-2 rounded-xl   '>
    <div className='header h-10 w-full  flex   p-3 justify-between items-center'>
    <Icon className=' text-white opacity-45 group-hover:opacity-100  transition-all duration-300 ease-in-out' />  <FaArrowAltCircleRight className=' text-white  opacity-0 group-hover:opacity-100  transition-all duration-300 ease-in-out' />
    </div>


    <div className='  h-28 w-full  p-3   '>

      <p className=' text-lg font-medium  pb-3 text-white'>{heading}</p>  
      <p className='text-slate-200/60 text-[13px]'>{text}</p>   

    </div>


   </div>

  )
}

export default Keylinkscard