import React from "react";

function Card1({ right,item }) {
    let myString = "Hello, World!";
    let htmlString = `<strong class="important">${myString}</strong>`;
  return (

    <>
      <div className={`flex w-full h-[320px] ${right ? "flex-row-reverse":" flex-row"} gap-[80px] mb-[80px] `}>
        <img
          src={item.img}
          className="w-[320px] h-[320px] rounded-[40px]"
          alt="a"
        />
        <div className={`${right ? " text-right justify-end":" text-left justify-end"} h-full w-full  flex items-center `}>
        <div className={`w-full `}>
           <p className="text-[48px] font-[600] text-[#071A45]">{item.title}</p>
           <div className={`${right ? " text-right justify-end":" text-left justify-start"} flex w-full `}>
           <p className="text-[20px] text-[#071A45B2] font-[400] mt-[10px] w-[70%] ">
            {item.desc}
           </p>
           </div>
           <p className="mt-[10px] underline text-[#071A45B2]">Learn More</p>
        </div>
        </div>
      </div>
    </>
  );
}

export default Card1;
