import abouting from "../assets/about.jpg";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import SectionBigTitle from "../components/SectionBigTitle";
import Button from "../components/Button";

export const About = () => {
  return (
    <div
      id="about"
      className="w-full h-auto flex flex-col items-center justify-between lg:px-[80px] lg:py-[80px] px-[20px] py-[60px] gap-[60px]"
    >
      <div
        id="top-box"
        className="w-full flex lg:flex-row flex-col items-center justify-between gap-[60px]"
      >
        <div className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-[10px]">
          <SectionTitle>Who We Are</SectionTitle>
          <SectionBigTitle className="text-black">
            Delivering Excellence in IT Solutions
          </SectionBigTitle>
          <SectionDescription className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            porro officiis fugiat aspernatur eligendi dolores quae, eos
            voluptatibus voluptas excepturi reprehenderit unde perferendis,
            eaque a laboriosam eum ut corrupti deleniti.
          </SectionDescription>
        </div>
        <div className="lg:w-[40%] w-full flex lg:justify-end justify-start items-center">
          <Button className="bg-themegreen hover:bg-black hover:text-white">
            LEARN MORE
          </Button>
        </div>
      </div>
      <div
        id="bottom-box"
        className="w-full flex  lg:flex-row flex-col items-center justify-between gap-[80px]"
      >
        <div id="img-box" className="lg:w-[40%] w-full ">
          <img src={abouting} alt="" className="w-full bg-cover bg-center" />
        </div>
        <div
          id="content-box"
          className="lg:w-[60%] w-full flex flex-col justify-between items-start gap-[60px]"
        >
          <div className="flex flex-col items-start justify-center gap-3">
            <h1 className="text-black text-[35px] capitalize font-poppins leading-[1.2em]">
              Expertise
            </h1>
            <p className="text-gray-500 text-md font-poppins">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              porro officiis fugiat aspernatur eligendi dolores quae, eos
              voluptatibus voluptas excepturi reprehenderit unde perferendis,
              eaque a laboriosam eum ut corrupti deleniti.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-3">
            <h1 className="text-black text-[35px] capitalize font-poppins leading-[1.2em]">
              Expertise
            </h1>
            <p className="text-gray-500 text-md font-poppins">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              porro officiis fugiat aspernatur eligendi dolores quae, eos
              voluptatibus voluptas excepturi reprehenderit unde perferendis,
              eaque a laboriosam eum ut corrupti deleniti.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-3">
            <h1 className="text-black text-[35px] capitalize font-poppins leading-[1.2em]">
              Expertise
            </h1>
            <p className="text-gray-500 text-md font-poppins">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              porro officiis fugiat aspernatur eligendi dolores quae, eos
              voluptatibus voluptas excepturi reprehenderit unde perferendis,
              eaque a laboriosam eum ut corrupti deleniti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
