import {
  FaPhoneVolume,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Button from "../components/Button";

export const Footer = () => {
  return (
    <div
      id="contact"
      className="w-full bg-black h-auto flex flex-col items-start justify-center 
    lg:px-[80px] px-[20px] lg:py-[50px] py-[30px] gap-[60px]"
    >
      <div className="w-full h-auto flex flex-col lg:flex-row items-start justify-between gap-[60px]">
        <div className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-[25px]">
          <div className="text-themegreen font-bold text-left lg:text-4xl text-3xl uppercase">
            SackoBA <span className="text-white">.</span>
          </div>
          <p className="text-gray-300 text-md font-poppins">
            Feel free to call us in working hours mon - Fri 9:00 AM - 18:00. Our
            Team will be happy to help answer your queries.
          </p>
          <div className="flex justify-center items-center gap-2 text-white">
            {<FaPhoneVolume className="text-themegreen size-5" />} +225
            0123456789
          </div>
          <div className="flex justify-center items-center gap-6 ">
            <FaFacebookF className="size-4 text-white hover:text-themegreen cursor-pointer" />
            <FaTwitter className="size-4 text-white hover:text-themegreen cursor-pointer" />
            <FaLinkedinIn className="size-4 text-white hover:text-themegreen cursor-pointer" />
            <FaInstagram className="size-4 text-white hover:text-themegreen cursor-pointer" />
          </div>
        </div>
        <div className="lg:w-[15%] w-full flex flex-col justify-center items-start gap-6">
          <h1 className="text-white text-[23px] capitalize leading-[1.2em] font-poppins">
            Company
          </h1>
          <ul className="flex flex-col justify-center items-start gap-2">
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">
              Home
            </li>
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">
              About Us
            </li>
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">
              Blog
            </li>
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">
              Our Projects
            </li>
          </ul>
        </div>
        <div className="lg:w-[15%] w-full flex flex-col justify-center items-start gap-6">
          <h1 className="text-white text-[23px] capitalize leading-[1.2em] font-poppins">
            Services
          </h1>
          <ul className="flex flex-col justify-center items-start gap-2">
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">
              Cloud Solutions
            </li>
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">
              Cyber Security
            </li>
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">
              Blog
            </li>
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">
              Our Projects
            </li>
          </ul>
        </div>

        <div className="lg:w-[30%] w-full flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-[23px] capitalize leading-[1.2em] font-poppins">
            Subscribe to Newsletter
          </h1>
          <div className="flex flex-col justify-center items-start w-full">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full bg-transparent text-white border-2 border-gray-800 p-4 rounded-md"
            />
            <Button className="w-full bg-themegreen hover:bg-white hover:text-black">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex lg:flex-row flex-col items-center justify-between border-t-2 border-gray-700 pt-6 gap-[10px]">
        <p className="text-gray-300 text-md font-poppins text-center">
          Copyright © 2025 SackoBA. All rights reserved.
        </p>
        <ul className="text-gray-300 flex justify-center items-end gap-6">
          <li className="hover:text-themegreen cursor-pointer">Terms of use</li>
          <li className="hover:text-themegreen cursor-pointer">
            Privacy Policy
          </li>
          <li className="hover:text-themegreen cursor-pointer">
            Cookie Policy
          </li>
        </ul>
      </div>
    </div>
  );
};
