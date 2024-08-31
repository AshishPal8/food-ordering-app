import Image from "next/image";
import React from "react";

const MenuItems = () => {
  return (
    <div className="bg-gray-300 p-4 rounded-lg flex items-center justify-center flex-col hover:bg-white transition-all shadow-md hover:shadow-black/25">
      <Image src={"/burger.png"} alt="burger" width={200} height={200} />
      <h4 className="font-semibold text-xl my-3">Veg Double Patty</h4>
      <p className="text-gray-500 text-sm">
        Double up the crispy veg patty burger in our best selling burger with
        fries on the side
      </p>
      <button className="bg-primary px-8 py-2 mt-4 text-white rounded-full">
        Add to Cart ₹90
      </button>
    </div>
  );
};

export default MenuItems;
