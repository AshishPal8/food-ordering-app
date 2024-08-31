import React from "react";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section className="text-center my-16">
      <SectionHeader subHeader={"Our Story"} mainHeadr={"About"} />
      <div className="text-gray-500 mx-w-2xl mx-auto flex flex-col gap-4 text-lg mt-8">
        <p>
          Welcome to{" "}
          <span className="text-primary font-semibold">ByteSnap</span>, your
          ultimate food delivery companion, where convenience meets culinary
          excellence. With an array of top restaurants at your fingertips, we're
          here to make every meal memorable.
        </p>
        <p>
          At <span className="text-primary font-semibold">ByteSnap</span>, we're
          passionate about delivering more than just food; we're delivering
          experiences. Explore a world of flavors, from comfort classics to
          exotic cuisines, all with the tap of a button.
        </p>
        <p>
          Behind <span className="text-primary font-semibold">ByteSnap</span> is
          a dedicated team committed to redefining food delivery. With advanced
          technology and unwavering dedication to customer satisfaction, we're
          here to make dining effortless and enjoyable, every time.
        </p>
      </div>
    </section>
  );
};

export default About;
