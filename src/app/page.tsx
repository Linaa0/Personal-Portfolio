import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Capabilities from "@/components/sections/Capabilities";
import QLine from "@/components/sections/QLine";
import Direction from "@/components/sections/Direction";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Capabilities />
      <QLine />
      <Direction />
      <Contact />
    </>
  );
}
