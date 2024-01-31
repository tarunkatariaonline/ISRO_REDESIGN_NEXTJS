import Image from "next/image";
import Keylinks from "./Components/Keylinks";
import Flashnews from "./Components/Flashnews";
import Isroportals from "./Components/Isroportals";
import Recentupdates from "./Components/Recentupdates";
import Latestnews from "./Components/Latestnews";
import Isrocenters from "./Components/Isrocenters";
import Space from '@/public/space3.jpg'
import Videocontainer from "./Components/Videocontainer";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Home() {
  return (
   <>
     <div>
      <Image src={Space} alt="bgImage " className=" h-screen w-full z-0 fixed top-0 left-0 right-0 bottom-0   object-cover "/>
   <div className=" h-screen w-full ">
 
   
    
    <Header/>
   <Videocontainer/>

    <Flashnews/>
    
    <Keylinks/>
    <Latestnews/>
    <Isroportals/>
    <Recentupdates/>
    <Isrocenters/>
    <Footer/>
   
    
   </div>
   </div>
   </>
  );
}
