import { services } from "../data/siteConfig";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">Serviços</p>
        <h2 className="mt-4 font-serif-display text-3xl leading-snug text-graphite sm:text-4xl">
          Procedimentos pensados para valorizar quem você é.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-brown-soft">
          Cada procedimento é avaliado individualmente. As informações abaixo têm caráter
          educativo — a indicação real depende de avaliação presencial.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 80}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
