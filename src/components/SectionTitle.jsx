import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h1
      data-aos="zoom-in"
      data-aos-delay="50"
      className="text-themegreen uppercase text-sm font-poppins"
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
