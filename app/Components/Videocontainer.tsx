'use client'

import Link from 'next/link';
import React from 'react'
import { useState,useRef } from 'react';

import { FaArrowRight, FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
const Videocontainer = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos =[
    '/video1.mp4',
    '/video2.mp4',
    '/video3.mp4',

  ]
  const videoRefs = useRef<any>(videos.map(() => React.createRef()));
  const [isPlaying, setIsPlaying] = useState(true); 




  const handleVideoEnd = () => {
    // When a video ends, move to the next one
  
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
   
    if(progressBars[0]===100 || progressBars[1]===100 || progressBars[2]===100 ){
      setIsPlaying(false);

    }
    
  };

  const handlePlayAndPause = ()=>{
    
    const videoRef = videoRefs.current[currentVideoIndex];
    
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        
      }
    }
  }

 

  
  const handleTimeUpdate = (index:any, event:any) => {
    const video = event.target;
    const updatedProgressBars = [...progressBars];
    const progress = video.currentTime / video.duration;
  
    updatedProgressBars[index] = progress*100;
    setProgressBars(updatedProgressBars);
  };
  const video1 = '/Deva.mp4';
  
    
  const [progressBars, setProgressBars] = useState(Array(videos.length).fill(0));

  const videoText=[
    {
      title:"Welcome to the",
      heading:"Indian Space",
      desc:"",
      url:""
    },{
      title:"Mission",
      heading:"Chandrayaan 3",
      desc:"Chandrayaan-3 is a follow-on to Chandrayaan-2 to demonstrate end-to-end capability is safe landing and roving on the lunar surface. It consists of Landerand Rover Configuration.",
      url:"https://www.isro.gov.in/Chandrayaan3_Details.html"
    },{
      title:"Project",
      heading:"Bhoonidhi",
      desc:"Bhoonidhi enables access to our extensive archive of Remote Sensing of data from 46 satelites. including Indian and Foreign Remote Sensing sensors acquired over 33 years.",
      url:"https://bhoonidhi.nrsc.gov.in/bhoonidhi/home.html"
    }
  ]

  //  const handlePlay = (index) => {
  //   // Pause the currently playing video
  //   if (videoRef.current) {
  //     videoRef.current.pause();
  //   }
  //   // Set the current video index
  //   setCurrentVideoIndex(index);
  //   // Play the clicked video
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //   }
  // };
  return (
     <div className=' w-full h-screen max-lg:h-[26rem] max-md:max-h-64 bg-red-600 relative      '>

 {videos.map((video,index)=>{
  return <video  autoPlay   onTimeUpdate={(event) => handleTimeUpdate(index, event)}   key={index} ref={videoRefs.current[index]}  
          style={{ display: index === currentVideoIndex ? 'block' : 'none' }}
          onEnded={handleVideoEnd}  muted   className='  h-full w-full   object-cover  absolute top-0 right-0 left-0 bottom-0'  src={video} ></video>
 })}
    

    <div  className='  w-full overflow-hidden  flex items-center absolute top-0  bottom-[0%] right-0 left-0  bg-black/50
    '>

        {
          videoText.map((video,index)=>{
            return  <div key={index} className={` transition-opacity ${(index===currentVideoIndex)?
            "opacity-100   static   ":" opacity-0   absolute   "}   transition-all duration-300  ease-linear w-[37rem] px-20 py-8 max-md:px-5 ` } >
            <p className={` ${(index===currentVideoIndex)?"  opacity-100":" opacity-0 "} p-1 text-orange-600  text-lg max-md:text-sm font-bold  tracking-wide`}>{video.title} </p>
          <p className='  px-1 max-md:w-60 w-full py-0 text-3xl max-md:text-lg font-semibold text-white'>{video.heading}</p>
         {currentVideoIndex===0&&<p className='  px-1 max-md:w-60 w-full py-0 text-3xl max-md:text-lg font-semibold text-white'>Research  Organisation</p>} 
          <p className=' p-1  pr-4 text-white text-sm max-md:text-xs'>{video.desc}</p>
        {video.url.length!==0&&<Link href={video.url}> <button className='  max-md:text-xs  mt-2 rounded-lg bg-slate-200/20    px-4 py-2 text-sm  backdrop-blur-xl  flex items-center  text-white  hover:bg-gradient-to-r hover:from-orange-500/30 hover:to-blue-500/30 transition-all  duration-300 ease-in-out '>Read more <  FaArrowRight className=' ml-2' /></button> </Link>}  
          </div>
          })
        }
      

     
    </div>
    <div className=' text-white  absolute justify-center p-4  bottom-0 w-full h-10 flex items-center  '>
       <button onClick={handlePlayAndPause} className=' p-2 bg-gray-600  rounded-full'> {isPlaying?<FaPause className=' text-sm'/>:<FaPlay className=' text-sm'/>} </button>
{
  videos.map((video,index)=>{
    return  <div key={index}> <p className={` ${index===currentVideoIndex?"opacity-100":"opacity-0"} text-orange-400 font-semibold text-sm px-2   max-md:text-xs`}>{(index===0)?"Welcome":(index===1)?"Chandrayaan":"Bhoonidhi"}</p>  <div key={index}  className=' bar  w-56 max-md:w-24 mx-2 h-1 bg-slate-300/50 rounded-md'>
    <div style={{ width: `${progressBars[index]}%` }} className={`   h-1 rounded-md bg-slate-300`} >
    </div>
    </div>
 </div>
  })
}
     
       
      
</div>
     </div>

    
  )
}

export default Videocontainer;