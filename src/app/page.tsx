import Navbar   from "@/components/Navbar";
import Footer   from "@/components/Footer";
import Hero     from "@/components/sections/Hero";
import About    from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects  from "@/components/sections/Projects";
import Books     from "@/components/sections/Books";
import Timeline  from "@/components/sections/Timeline";
import Contact   from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Books />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
