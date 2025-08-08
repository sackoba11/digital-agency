import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionBigTitle = (props) => {
  useEffect(() => {
      AOS.init({ duration: 800, delay: 200, once: false });
       return () => {
            AOS.refresh(); // Refresh AOS on unmount to ensure proper cleanup
          };
  }, []);

  return (
    <h1
      data-aos="zoom-in"
      data-aos-delay="100"
      className={`${
        props.className ?? "text-white lg:w-[50%] w-full text-center"
      }  lg:text-[45px] text-[30px] capitalize leading-[1.2em] font-poppins `}
    >
      {props.children}
    </h1>
  );
};

export default SectionBigTitle;
