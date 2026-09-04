import Header from "./components/Header";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import Experience from "./components/Experience";
import Toolkit from "./components/Toolkit";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] text-[#161616]">
      {/* MASTER CONTAINER ("Hoja de Papel" blueprint effect) */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-[840px] flex-col border-[#161616]/10 px-5 sm:border-x sm:px-10 md:px-14">
        
        {/* Integrated Navigation Header */}
        <Header />
        
        {/* Hero Section */}
        <Hero />

        {/* Subtle Compact Connector */}
        <div className="flex items-center justify-center my-2">
          <div className="h-8 w-[1px] bg-gradient-to-b from-[#161616]/25 to-transparent" />
        </div>

        {/* Selected Work (Prioritized at Top) */}
        <SelectedWork />

        {/* Work Experience */}
        <Experience />

        {/* Upgraded Core Toolkit & Architecture Matrix */}
        <Toolkit />

        {/* High-Impact Editorial Footer */}
        <Footer />
      </div>
    </main>
  );
}
