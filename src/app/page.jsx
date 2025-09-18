import CounterCard from "@/components/Landing/CounterCard";
import Hero from "@/components/Landing/Hero";
import Service from "@/components/Landing/Service";
import DealsSection from "@/components/Landing/TopDeal";

const page = () => {
  return (
    <>
    <Hero/>
    <CounterCard/>
    <Service/>
    <DealsSection/>
    </>
  );
};

export default page;
