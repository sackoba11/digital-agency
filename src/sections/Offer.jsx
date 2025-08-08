import { services } from "../export";
import SectionTitle from "../components/SectionTitle";
import SectionBigTitle from "../components/SectionBigTitle";
import SectionDescription from "../components/SectionDescription";
import TextButton from "../components/TextButton";
import ItemGrid from "../components/ItemGrid";

export const Offer = () => {
  return (
    <div
      id="services"
      className="w-full h-auto flex flex-col items-center
     justify-center lg:px-[80px} px-[20px] lg:py-[80px] py-[60px] gap-[20px]"
    >
      <SectionTitle>OUR SERVICES</SectionTitle>
      <SectionBigTitle className="text-black lg:w-[50%] w-full text-center">
        Driving Digital Transformation with Excellence
      </SectionBigTitle>
      <SectionDescription className="text-gray-500 lg:w-[60%] w-full text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic
        neque, obcaecati quidem explicabo autem.
      </SectionDescription>
      <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-6 mt-6 ">
        {services.map((service, index) => (
          <ItemGrid
            index={index}
            className="p-10 border-2 border-gray-200 bg-white"
          >
            <service.icon className="size-[35px] mb-5" />
            <h1 className="text-black text-[25px] capitalize font-poppins leading-[1.2em]">
              {service.title}
            </h1>
            <p className="text-gray-500 text-sm font-poppins">{service.para}</p>
            <TextButton>Learn More</TextButton>
          </ItemGrid>
        ))}
      </div>
    </div>
  );
};
