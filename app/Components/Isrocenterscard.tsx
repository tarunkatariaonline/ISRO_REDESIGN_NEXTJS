import React from 'react'
interface IsrocentersProps{
    name:string,
    imgurl:string,
    desc:string
}
const Isrocenterscard = ({name,imgurl,desc}:IsrocentersProps) => {
  return (
    <>
      <div className=' h-16 flex items-center  hover:backdrop-blur-2xl  rounded-lg p-2'>

<div >
    <img className=' w-12 h-12  object-cover rounded-full' src={imgurl} alt="" />
</div>

<div className=' h-16  flex flex-col justify-center p-2'>
  <p className=' text-sm  font-medium  text-white'>{name}</p>
  <p className=' text-[11px] text-white'>{desc}</p>
</div>

</div>


<div className=' w-full border-[1px]   my-1'>
  
</div>
    </>
  )
}

export default Isrocenterscard