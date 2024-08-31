import Image from "next/image";
import React from "react";
import MenuItems from "../menu/MenuItems";
import SectionHeader from "./SectionHeader";

export default function HomeMenu() {
  return (
    <section className="text-center">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute -left-12 -top-[100px] text-left -z-10">
          <Image src={"/cobbage.png"} alt="Cobbage" width={220} height={189} />
        </div>
        <div className="absolute -right-2 -top-[170px]  -z-10">
          <Image
            src={"/capsicum.png"}
            alt="Capsicum"
            width={220}
            height={189}
          />
        </div>
      </div>
      <div className="mb-8">
        <SectionHeader subHeader={"Check Out"} mainHeadr={"Menu"} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
      </div>
    </section>
  );
}
