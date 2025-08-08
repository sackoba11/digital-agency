import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ItemGrid = (props) => {
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
    <div
      key={props.index}
      data-aos="slide-up"
      data-aos-delay="200"
      className={`${
        props.className != null
          ? props.className +
            "gap-4 hover:bg-green-100 rounded-md cursor-pointer"
          : "w-full flex flex-col items-start justify-center"
      } `}
    >
      {props.children}
    </div>
  );
};

export default ItemGrid;
