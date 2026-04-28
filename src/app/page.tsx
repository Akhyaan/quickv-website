import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Comparison } from "@/components/sections/Comparison";
import { Providers } from "@/components/sections/Providers";
import { Screenshots } from "@/components/sections/Screenshots";
import { HowToSave } from "@/components/sections/HowToSave";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-noise" />
      <div className="bg-grid" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Features />
        <Comparison />
        <Providers />
        <Screenshots />
        <HowToSave />
        <Process />
        <Testimonials />
        <FAQ />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
