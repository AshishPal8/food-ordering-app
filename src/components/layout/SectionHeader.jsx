import React from "react";

const SectionHeader = ({ subHeader, mainHeadr }) => {
  return (
    <div>
      <h3 className="uppercase text-xl font-semibold text-gray-500 leading-4 mb-2">
        {subHeader}
      </h3>
      <h2 className="text-primary text-5xl italic font-bold">{mainHeadr}</h2>
    </div>
  );
};

export default SectionHeader;
