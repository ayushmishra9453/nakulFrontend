import React from 'react'
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";

const card1data = [
  {
    img:"/assets/i1.png",
    title:"Discover Your Perfect Home",
    desc:"Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right."
  },
  {
    img:"/assets/i2.png",
    title:"Showcase Your Property",
    desc:"List your property with ease. Fill in detailed forms to highlight every feature, attracting the perfect buyer directly."
  },
  {
    img:"/assets/i3.png",
    title:"Connect and Communicate",
    desc:"Our platform facilitates direct communication between buyer and seller, making negotiations transparent and straightforward."
  },
  {
    img:"/assets/i4.png",
    title:"Seal the Deal Securely",
    desc:"Advance payments made safe. Secure your agreement with confidence, and step closer to your dream property."
  }
  
]

function MainCard() {
  return (
    <>
     <div className="pt-[120px] w-full">
    <p className="text-[72px] font=[800] text-center">HOW IT WORKS?</p>
    <p className="text-[20px] text-center">Step by Step Guide</p>
    <div className="mt-[80px] w-full px-[120px]">
    {
      card1data?.map((item,i)=>{
        return(<>
          <Card1 key={i} right={i%2 === 0 ?false:true} item={item}/>
        </>)
      })
    }
    </div>
    <div className="bg-[#D6E9F0] w-full h-full py-[80px] px-[72px]">
      <p className="text-[72px] font-[700] text-center ">WHY CHOOSE XYZ?</p>
      <div className="max-w-[1440px] mx-auto grid grid-cols-4 ">
      <div className="mt-[80px]">
        <Card2 rank="01" title="Search and Filters" desc="Tailored Searches to meet your needs. Find what you’re looking for with precision."/>
      </div>
      <div className="mt-[160px]">
        <Card2 rank="02" title="Detailed Listings" desc="Every Detail Matters. Sellers can list, and buyers can explore properties that meet their exact specifications."/>
      </div>
      <div className="mt-[320px]">
        <Card2 rank="03" title="Direct Messaging" desc="Seamless Communication. Connect directly with sellers or buyers to ask questions, negotiate, and make decisions."/>
      </div>
      <div className="mt-[160px]">
        <Card2 rank="04" title="Secure Payments" desc="Trust in Every Transaction. Our secure payment system ensures your peace fo mind."/>
      </div>
      </div>
    </div>
   </div> 
    </>
  )
}

export default MainCard
