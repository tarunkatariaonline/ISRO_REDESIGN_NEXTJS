import React from 'react'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

interface IsroportalsProps{
  name:string,
  desc:string,
  imgurl:string
  bgshage:string
}

const Isroportalscard = ({name,desc,imgurl,bgshage}:IsroportalsProps) => {
  return (
    <div className={' mr-2 my-4 py-2  h-40 group hover:border-white transition-all duration-300 ease-in-out cursor-pointer     w-80  border-white/45   backdrop-blur-xl    bg-gray-300/10 border-2 rounded-xl hover:bg-gradient-to-r from-gray-300/10     '+bgshage}>
     <div className=' h-12  p-3 flex justify-between items-center'>

      <img className=' h-10 w-12    object-cover rounded-lg    aspect-auto' src={imgurl} alt="" />

      <BiSolidRightTopArrowCircle className=' opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 text-white text-xl' />

     </div>

     <div className=' w-full flex flex-col justify-center h-24 p-3'>
      <p className=' text-white'>{name}</p>
      <p className=' text-sm text-[13px]  text-slate-200/40'>{desc}</p>
     </div>

    </div>
  )
}

export default Isroportalscard