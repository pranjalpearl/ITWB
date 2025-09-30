import Breadcrumb from "@/components/common/Breadcrumb";
import Hero from "@/components/about/Hero";
import React from "react";
import Book from "@/components/about/Book";
import CTA from "@/components/about/CTA";

const page = () => {
  return (
    <>
      <Breadcrumb
        items={[{ name: "Home", link: "/" }, { name: "About us" }]}
        showSearch={false}
      />
      <section className="about-area">
        <div
          className="rt-design-elmnts rtbgprefix-contain"
          style={{ backgroundImage: `url("/images/all-img/abt_vec_2.png")` }}
        ></div>

        <Hero />       
      </section>
      <Book /> 
      <CTA/> 
    </>
  );
};

export default page;
