import React, { useState } from "react";
import Arrow from "../images/right-arrow.png";
import Youtube from "../images/yt-icon.png";
import Facebook from "../images/fb-icon.png";
import Instagram from "../images/ig-icon.png";
import Twitter from "../images/tw-icon.png";
import axios from "axios";

function Footer() {
  const [email, setEmail] = useState("");

  const getSubscribe = async () => {
    const data = await axios.post("https://nakulbackend.onrender.com/api/v1/emailInput", {
      email,
    });
    alert(data.data.message);
  };

  return (
    <footer className="flex flex-col h-full w-screen py-16 px-2 bg-[#071A45]">
      <div className="flex justify-between px-12">
        <div className="flex flex-col gap-12">
          <p className="text-white text-4xl flex">
            <strong>XYZ </strong>
            <p className="italic font-light">&nbsp;INDUSTRIES</p>
          </p>
          <p className="text-gray-300 text-sm w-64">
            XYZ Industries: Where real estate dreams meet seamless transactions,
            transforming aspirations into achievements.
          </p>
          <span className="flex w-fit border border-white rounded-full py-4 px-6 text-white cursor-pointer">
            <div>EXPLORE</div>
            <div>
              <img src={Arrow} alt="right" />
            </div>
          </span>
        </div>
        <div>
          <h4 className="text-white">Quick Links</h4>
          <div className="text-gray-300 text-sm flex flex-col gap-2">
            <p>About Us</p>
            <p>Blog</p>
            <p>Testimonials</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Site Map</p>
          </div>
        </div>
        <div>
          <h4 className="text-white">Customer Support</h4>
          <div className="text-gray-300 text-sm flex flex-col gap-2">
            <p>Feedback</p>
            <p>Report a Problem</p>
            <p>Request a Call Back</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-white">Subscribe Us</h4>
          <p className="text-gray-300">Subscribe to our weekly newsletter</p>
          <input
            type="text"
            placeholder="Email Id"
            className="p-2 rounded-md w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-[#3A7DFF] p-2 rounded-md w-full"
            onClick={getSubscribe}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="border-b my-4 mx-12"></div>
      <div className="flex justify-between px-12">
        <div className="flex gap-4">
          <img src={Youtube} alt="youtube" />
          <img src={Twitter} alt="twitter" />
          <img src={Instagram} alt="instagram" />
          <img src={Facebook} alt="facebook" />
        </div>
        <div className="flex gap-8">
          <div className="text-white">Terms | Privacy</div>
          <div className="text-gray-300">&copy; 2024 XYZ</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
