import Header from "./components/Header";
import Hero from "./components/Hero";
import Credentials from "./components/Credentials";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonials";
import Journal from "./components/Journal";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-graphite">
      <a
        href="#topo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-graphite focus:px-4 focus:py-2 focus:text-ivory"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Credentials />
        <About />
        <Philosophy />
        <Services />
        <BeforeAfter />
        <Testimonials />
        <Journal />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
