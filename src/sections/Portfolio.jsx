import { useEffect } from "react";
import backgroundimage from "../assets/hero_bg.jpg";
import { projects } from "../export";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../components/SectionTitle";
import SectionBigTitle from "../components/SectionBigTitle";
import SectionDescription from "../components/SectionDescription";
import TextButton from "../components/TextButton";

export const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="projects"
      className="wu-full h-auto flex flex-col items-center 
    justify-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[20px] bg-center"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <SectionTitle>OUR PORTFOLIO</SectionTitle>
      <SectionBigTitle>
        Explore our portfolio and showcase our best works
      </SectionBigTitle>
      <SectionDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic
        neque, obcaecati quidem explicabo autem.
      </SectionDescription>
      <div className="grid lg:grid-cols-2 gris-cols-1 justify-center items-center gap-10 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="slide-up"
            data-aos-delay="200"
            className="w-full flex flex-col items-start justify-center "
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full bg-cover bg-center "
            />
            <div className="w-full bg-gray-600 p-8 flex flex-col justify-center items-start gap-4">
              <h1 className="text-white lg:text-[25px] text-[22px] capitalize font-poppins leading-[1.2em] text-left">
                {project.title}
              </h1>
              <p className="text-gray-300 text-sm font-poppins text-left">
                {project.para}
              </p>
              <TextButton className="hover:text-white mt-5">
                View More
              </TextButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
