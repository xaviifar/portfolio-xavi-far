import Header from "./components/Header";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Toolkit from "./components/Toolkit";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] text-[#161616]">
      {/* MASTER CONTAINER ("Hoja de Papel" blueprint effect) */}
      <div className="mx-auto flex min-h-screen w-full max-w-[840px] flex-col border-[#161616]/10 px-6 sm:border-x sm:px-12 md:px-16">
        <Header />
        <Hero />
        <SelectedWork />
        <Experience />
        <Skills />
        <Toolkit />
        <Footer />
      </div>
    </main>
  );
}
