import backgroundImage from "../assets/hero_bg.jpg";
import SectionTitle from "../components/SectionTitle";
import SectionBigTitle from "../components/SectionBigTitle";
import SectionDescription from "../components/SectionDescription";
import Button from "../components/Button";

export const Cta = () => {
  return (
    <div
      id="contact"
      className="w-full h-auto flex flex-col items-center 
    justify-center lg:px-[80px] px-[20px] lg:py-[80px] py-[40px] gap-[20px] 
    bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <SectionTitle>Ready to Get Started</SectionTitle>
      <SectionBigTitle>Let's Elevate Your Business with Us</SectionBigTitle>
      <SectionDescription>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
        exercitationem? Dolore, ea? Earum vel, sed magnam illo possimus facere,
        reiciendis tenetur veniam voluptatem perspiciatis molestiae provident
        quam esse vero cupiditate.
      </SectionDescription>
      <div
        id="two buttons"
        className="flex lg:flex-row flex-col justify-center items-center lg:gap-5 gap-1 mt-5"
      >
        <Button>CONTACT US</Button>
        <Button className="bg-white hover:bg-themegreen hover:text-black">
          REACH US
        </Button>
      </div>
    </div>
  );
};
