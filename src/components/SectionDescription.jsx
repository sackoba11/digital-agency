import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionDescription = (props) => {
     useEffect(() => {
         AOS.init({ duration: 800, delay: 200, once: false });
          return () => {
               AOS.refresh(); // Refresh AOS on unmount to ensure proper cleanup
             };
  }, []);

  return (
    <p
      data-aos="zoom-in"
      data-aos-delay="150"
      className={`${
        props.className ?? "text-gray-300 lg:w-[60%] w-full text-center"
      }  text-md font-poppins `}
    >
      {props.children}
    </p>
  );
};

export default SectionDescription;
