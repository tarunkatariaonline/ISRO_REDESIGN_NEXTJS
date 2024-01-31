import Link from 'next/link'
import React from 'react'
interface RecentUpdateProps {
   title:string,
   desc:string,
   imgurl:string,
   url:string
}
const Recentupdatescard = ( {title,desc,imgurl,url}:RecentUpdateProps) => {
  return (
     <div className=' mx-2 my-2 group w-60 max-md:w-80  max-md:h-[33rem] h-96 bg-red-500 relative overflow-hidden transition-all duration-300 ease-in-out cursor-pointer'>
      <img className=' w-full h-96 max-md:h-[33rem]  z-0 object-cover absolute top-0 right-0 left-0 bottom-0 ' src={imgurl} alt="" />

      <div className=' absolute bottom-0 transition-all duration-300 ease-in-out  top-80 max-md:top-[28rem]  mt-4 group-hover:mt-0 group-hover:top-0 left-0 right-0 bg-gradient-to-t   from-black '>
         <div className=' flex justify-center items-center h-8 transition-all duration-300 ease-in-out w-full bg-gradient-to-b    from-black/50  group-hover:from-black/30  py-6 '>
            <p className=' text-sm text-white  '>{title}</p>
            
         </div>
         <div className=' w-full justify-center items-center p-3'>
         <p className=' text-orange-500 font-semibold text-[12px] flex justify-center items-center '>{desc}</p>
        
         </div>

         <div className=' w-full flex justify-center '>
      <Link   href={url}> <button className=' rounded-lg bg-slate-200/50    px-4 py-2 text-sm  backdrop-blur-sm  text-white  hover:bg-gradient-to-r hover:from-orange-500/25 hover:to-blue-500/25 transition-all  duration-300 ease-in-out '>Read more</button></Link>
         </div>
      </div>
     </div>
  )
}

export default Recentupdatescard