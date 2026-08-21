import { testimonials, WHATSAPP_MESSAGES } from "../data/siteConfig";
import TestimonialCard from "./TestimonialCard";
import { WhatsAppLink } from "./WhatsAppButton";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
          Depoimentos
        </p>
        <h2 className="mt-4 font-serif-display text-3xl leading-snug text-graphite sm:text-4xl">
          Experiências de quem confiou no meu trabalho.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={`${testimonial.name}-${index}`} delay={index * 100}>
            <TestimonialCard testimonial={testimonial} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={300} className="mt-12 text-center">
        <WhatsAppLink message={WHATSAPP_MESSAGES.testimonials} variant="secondary">
          Quero agendar minha avaliação
        </WhatsAppLink>
      </Reveal>
    </section>
  );
}
