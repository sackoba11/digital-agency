import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Button = (props) => {
  useEffect(() => {
    AOS.init({ duration: 800, delay: 200, once: false });
    return () => {
      AOS.refresh(); // Refresh AOS on unmount to ensure proper cleanup
    };
  }, []);

  return (
    <button
      data-aos="slide-up"
      data-aos-delay="200"
      className={`${
        props.className ?? "bg-themegreen hover:bg-white hover:text-black"
      }   py-4 px-6 text-black text-md font-semibold mt-5 rounded-md`}
    >
      {props.children}
    </button>
  );
};

export default Button;
