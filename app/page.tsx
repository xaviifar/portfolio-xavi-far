import Header from "./components/Header";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Toolkit from "./components/Toolkit";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f3f3f1] text-[#161616] overflow-x-hidden">
      {/* Ambient Glows (Luces difuminadas de fondo en esquinas) */}
      <div className="fixed top-20 left-1/4 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-20 right-1/4 -z-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-[140px] pointer-events-none" />

      {/* MASTER CONTAINER ("Hoja de Papel" blueprint effect) */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-[840px] flex-col border-[#161616]/10 px-6 sm:border-x sm:px-12 md:px-16">
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
