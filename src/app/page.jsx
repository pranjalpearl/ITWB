import CounterCard from "@/components/Landing/CounterCard";
import CTA from "@/components/Landing/CTA";
import GettingStarted from "@/components/Landing/GettingStarted";
import Globe from "@/components/Landing/Globe";
import Hero from "@/components/Landing/Hero";
import Hotels from "@/components/Landing/Hotels";
import Partner from "@/components/Landing/Partner";
import Service from "@/components/Landing/Service";
import Testimonial from "@/components/Landing/Testimonial";
import DealsSection from "@/components/Landing/TopDeal";
import Video from "@/components/Landing/Video";

const page = () => {
  return (
    <>
    <Hero/>
    <CounterCard/>
    <Service/>
    <DealsSection/>
    <GettingStarted/>
    <Hotels/>
    <Globe/>
    <CTA/>
    <Video/>
    <Testimonial/>
    <Partner/>
    </>
  );
};

export default page;
