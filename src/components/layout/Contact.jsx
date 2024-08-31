import React from "react";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <section className="text-center my-16">
      <SectionHeader subHeader={"Don't Hasitate"} mainHeadr={"Contact Us"} />
      <div className="text-gray-500 mx-w-2xl mx-auto flex flex-col gap-4 text-lg mt-8">
        <p>
          Reach Out and Connect with Us Today! For assistance, give us a call at{" "}
          <br />{" "}
          <span className="font-bold text-black text-2xl">
            <a href="tel:+91 8130166956">+91 8130166956</a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
