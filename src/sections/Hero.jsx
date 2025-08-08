import { useEffect } from "react";
import heroimg from "../assets/hero.png";
import backgroundimage from "../assets/hero_bg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import Button from "../components/Button";

export const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="home"
      className="w-full h-auto flex lg:flex-row flex-col justify-between items-center 
    lg:px-[80px] px-[20px] lg:pt-[150px] pt-[120px] lg:pb-[80px] pb-[60px] lg:gap-[60px] gap-[40px] 
    bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className="lg:w-1/2 w-full flex flex-col gap-[20px] items-start justify-center">
        <SectionTitle>Seamless IT Services</SectionTitle>
        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          className="text-white lg:text-[70px] text-[40px] capitalize font-poppins leading-[1.2em]"
        >
          Transforming Ideas into Digital Success
        </h1>
        <SectionDescription className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit porro
          officiis fugiat aspernatur eligendi dolores quae, eos voluptatibus
          voluptas excepturi reprehenderit unde perferendis, eaque a laboriosam
          eum ut corrupti deleniti.
        </SectionDescription>
        <Button>EXPLORE SOLUTIONS</Button>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        <div
          data-aos="zoom-in"
          data-aos-delay="230"
          className="lg:w-[80%] w-full flex justify-center items-center px-5 pt-5
         bg-themegreen bg-opacity-30 z-10 rounded-mg"
        >
          <div className="opacity-100">
            <img src={heroimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
