import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa"
import ImgSix from "../images/nipul6.png"

function House() {
  return (
    <>
    <div className="relative w-full h-[862px] my-10 ">
    <img src={ImgSix} alt="imgsix" className=" h-[810px] my-10 absolute top-0 right-0 left-0 bottom-0 z-10 w-full object-cover"/>
    <div className="flex flex-col gap-3 items-center absolute z-20 top-20 w-full font-lato text-[#071A45] text-center">
        <h2 className=" font-semibold text-6xl  py-10">YOUR TRUSTED PARTNER IN
        <br /> THE FUTURE OF HOUSING</h2>
        <p className="text-xl font-normal py-0 ">Our partnerships with governments and local banks ensure that our housing prices are
        <br /> affordable enough for our target market.</p>
        <div className='bg-[#3A7DFF] p-4 pl-6 rounded-full flex justify-center items-center text-[#FFFFFF]'>
     
        <button className='pr-4 '>Join Our Community Today</button>
        <FaLongArrowAltRight />
        </div>
      </div>
    </div>
    
      {/* <img src={ImgSix} alt="skds" className="h-full w-full"/> */}
      


</>
  );
}

export default House;
