import Link from 'next/link'
import React from 'react'
interface LatestNewsProps{
   timetoread:string,
   desc:string,
   imgurl:string,
   url:string
}
const Latestnewscard = ({timetoread,desc,imgurl,url}:LatestNewsProps) => {
  return (
    <div className=' mx-3 my-2 group  w-80   h-48 bg-red-500 relative overflow-hidden transition-all duration-300 ease-in-out cursor-pointer'>
    <img className=' w-80 h-60  z-0 object-center object-cover absolute top-0 right-0 left-0 bottom-0 ' src={imgurl} alt="" />

    <div className=' absolute bottom-0 transition-all duration-300 ease-in-out   top-20  mt-3 group-hover:mt-0 group-hover:top-0 left-0 right-0 bg-gradient-to-t   from-black '>
       <div className=' flex  p-2 items-center h-8 transition-all duration-300 ease-in-out w-full bg-gradient-to-b    from-black/50  group-hover:from-black/30  py-6 '>
          <p className=' text-xs text-white bg-gray-300/50  backdrop-blur-xl uppercase px-2 '>{timetoread} MIN READ</p>
          
       </div>
       <div className=' w-full justify-center items-center px-3'>
       <p className=' text-white text-[18px] '>{desc}</p>
      
       </div>

       <div className=' w-full flex justify-center '>
       <Link href={url}><button className=' rounded-lg bg-slate-200/25    px-4 py-2 text-sm  backdrop-blur-xl  text-white  hover:bg-gradient-to-r hover:from-orange-500/25 hover:to-blue-500/25 transition-all  duration-300 ease-in-out '>Read more</button>
      </Link>

       </div>
    </div>
   </div>
  )
}

export default Latestnewscard