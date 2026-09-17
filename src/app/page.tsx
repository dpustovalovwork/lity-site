import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Teaching from "@/components/Teaching";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Achievements />
        <Experience />
        <Teaching />
        <Services />
        <Testimonials />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
