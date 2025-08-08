import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionTitle = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
    return () => {
      AOS.refresh(); // Refresh AOS on unmount to ensure proper cleanup
    };
  }, []);

  return (
    <h1
      data-aos="zoom-in"
      data-aos-delay="50"
      className="text-themegreen uppercase text-sm font-poppins"
    >
      {props.children}
    </h1>
  );
};

export default SectionTitle;
