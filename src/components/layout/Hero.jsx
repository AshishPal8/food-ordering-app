import Image from "next/image";
import React from "react";
import { FaRegCircleRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 my-12">
      <div className="flex flex-col justify-center">
        <h1 className="text-6xl font-bold font-mplus my-4 leading-tight tracking-wider">
          It's not just
          <br /> <span className="text-primary">Food</span>, It's an{" "}
          <span className="text-primary">Experience</span>
        </h1>
        <p className="text-gray-600 text-xl my-2">
          From sizzling burgers to cheesy pizzas, find fast-food nirvana here.
        </p>
        <div className="flex gap-3 mt-8">
          <button className="flex items-center justify-center text-white font-semibold bg-red-600 py-3 px-1 rounded-full gap-2">
            Order More <FaRegCircleRight />
          </button>
          <button className="flex items-center justify-center text-gray-600 border-0 font-semibold py-3 px-1 rounded-full gap-2">
            Learn Now <FaRegCircleRight />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image src={"/home.png"} alt="Pizza" width={500} height={500} />
      </div>
    </section>
  );
};

export default Hero;
