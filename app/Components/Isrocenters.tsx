'use client'
import React, { useState } from 'react'
import Isrocenterscard from './Isrocenterscard'
import Image from 'next/image'
import India from '@/public/india.png'
const isroCentersData = [
    {
        id:1,
        name:"Headquarters",
        desc:"Department of Space and ISRO HQ",
        imgurl:"https://ih1.redbubble.net/image.2582420953.8132/st,small,507x507-pad,600x600,f8f8f8.jpg"
    },
    {
        id:2,
        name:"HSFC",
        desc:"Human Space Flight Centre",
        imgurl:"https://upload.wikimedia.org/wikipedia/commons/6/61/Human_Space_Flight_Centre_Logo.jpg"
    },
    {
        id:3,
        name:"IIRS",
        desc:"Indian Institute of Remote Sensing",
        imgurl:"https://ih1.redbubble.net/image.2582420953.8132/st,small,507x507-pad,600x600,f8f8f8.jpg"
    },
    {
        id:4,
        name:"IPRC",
        desc:"ISRO Propulsion Complex",
        imgurl:"https://punjabjobalert.com/wp-content/uploads/2023/03/download-8.png"
    },

    {
        id:5,
        name:"ISTRAC",
        desc:"ISRO Telemetry Tracking & Command Network",
        imgurl:"https://ih1.redbubble.net/image.2582420953.8132/st,small,507x507-pad,600x600,f8f8f8.jpg"
    },

    {
      id:6,
      name:"SAC",
      desc:"Space Applications Centre",
      imgurl:"https://media.licdn.com/dms/image/C4D0BAQGeU2u797pjMQ/company-logo_200_200/0/1631313235717?e=2147483647&v=beta&t=JiTUORPiaTrKVd6yE85KzZZmy5uG6Q4oBRAe8XmfakY"
  },
]


const mapPointers = [
  {
    id:1,
    name:"Headquarters",
    desc:"Department of Space and ISRO HQ",
    imgurl:"https://ih1.redbubble.net/image.2582420953.8132/st,small,507x507-pad,600x600,f8f8f8.jpg",
    topValue:"top-[79%]",
    leftValue:"left-[28%]"
},
{
    id:2,
    name:"HSFC",
    desc:"Human Space Flight Centre",
    imgurl:"https://upload.wikimedia.org/wikipedia/commons/6/61/Human_Space_Flight_Centre_Logo.jpg",
    topValue:"top-[79%]",
    leftValue:"left-[30%]"
},
{
    id:3,
    name:"IIRS",
    desc:"Indian Institute of Remote Sensing",
    imgurl:"https://ih1.redbubble.net/image.2582420953.8132/st,small,507x507-pad,600x600,f8f8f8.jpg",
    topValue:"top-[25%]",
    leftValue:"left-[38%]"
},
{
    id:4,
    name:"IPRC",
    desc:"ISRO Propulsion Complex",
    imgurl:"https://punjabjobalert.com/wp-content/uploads/2023/03/download-8.png",
    topValue:"top-[92%]",
    leftValue:"left-[33%]"
},

{
    id:5,
    name:"ISTRAC",
    desc:"ISRO Telemetry Tracking & Command Network",
    imgurl:"https://ih1.redbubble.net/image.2582420953.8132/st,small,507x507-pad,600x600,f8f8f8.jpg",
    topValue:"top-[36%]",
    leftValue:"left-[46%]"
},

{
  id:6,
  name:"SAC",
  desc:"Space Applications Centre",
  imgurl:"https://media.licdn.com/dms/image/C4D0BAQGeU2u797pjMQ/company-logo_200_200/0/1631313235717?e=2147483647&v=beta&t=JiTUORPiaTrKVd6yE85KzZZmy5uG6Q4oBRAe8XmfakY",
  topValue:"top-[48%]",
    leftValue:"left-[20%]"
},
]
const Isrocenters = () => {
    const [place,setPlace] = useState<string>("Headquartersss");

    const handlerSetPlace = (text:string)=>{
      setPlace(text);
    }
  return (
        
<div className=' w-full relative z-10  min-h-0 py-10     flex justify-center items-center '>
     <div  className='  max-md:w-full w-5/6  my-10   flex  flex-col  justify-center'>
     <p className="text-3xl font-medium text-white py-2 max-md:text-xl  max-md:px-4">ISRO Centres & Units</p>
     <p className=' text-slate-200/80  py-2  max-md:px-4'>Link to all the ISRO Portals in one place</p>

     <div className=' flex  flex-wrap py-2 w-full   justify-between max-md:justify-center  max-lg:justify-center  items-center   '>
     
       <div className=' w-96  border-white transition-all   ease-in-out bg-gray-200/20 cursor-pointer backdrop-blur-sm border-2 rounded-xl  '>
          <div className=' h-12  border-b-2   flex items-center p-2 text-orange-500   '>
           <p className=' text-sm border-b-2 py-1 border-orange-500 '>ISRO Centers</p>
          </div>
         

          <div className=' p-2     '>
         
         {isroCentersData.map((center)=>{
            return <div  onMouseEnter={()=>handlerSetPlace(center.name)}
            onClick={()=>handlerSetPlace(center.name)} className=' w-full ' key={center.id}> <Isrocenterscard name={center.name} imgurl={center.imgurl} desc={center.desc}   /></div>
         })}
             
          
       
           
             
          </div>
       </div>

        {/* cards */}
        
        
       

      
        
       

       
     
      <div className='  my-3  max-lg:mt-8   w-[27rem] h-[28rem]  bg-gray-300/10 backdrop-blur-sm rounded-xl relative  '>
       <Image src={India}  className=' border-white h-full ' alt='india map'/>
 
        
         

         {mapPointers.map((p )=>{
        
          return  <div key={p.id} onMouseEnter={()=>handlerSetPlace(p.name)} className={` h-2 w-2  bg-gray-600 ${(place===p.name)?"border-orange-400":"border-white"} border-2 rounded-full absolute   ${p.topValue}  
          ${p.leftValue} `}>

          <div className={` relative z-50 ${(place===p.name)?"scale-100":"scale-0"}   transition-all duration-600 ease-in-out   `}>
            <div className={`   transition-all duration-600 ease-in-out   px-2 py-0   rounded-lg   backdrop-blur-lg  ${(place===p.name)?"opacity-100":"opacity-0"} shadow-md  bg-gradient-to-r  from-blue-700/40  to-orange-400/30 bg-gray-300/60 absolute top-2 flex items-center `}>
              <img  className=' transition-all duration-300 ease-in-out h-10 w-10 rounded-full' src={p.imgurl} alt="" />

              <div className=' transition-all duration-300 ease-in-out p-2  w-56   flex justify-center flex-col'>
               <p className=' transition-all duration-300 ease-in-out  text-[13px]   text-orange-300 font-semibold   tracking-widest '>
                {p.name}
               </p>
               <p className='  transition-all duration-300 ease-in-out text-[10px] text-white '>
               {p.desc}
               </p>
              </div>
            </div>
          </div>

           
           
        </div>

         })}
        


       

       
         

         
        
      </div>
     
     
     </div>
     </div>
   
    </div>
  )
}

export default Isrocenters