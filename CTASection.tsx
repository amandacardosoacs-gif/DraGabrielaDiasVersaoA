import { WHATSAPP_MESSAGES } from "../data/siteConfig";
import { WhatsAppLink } from "./WhatsAppButton";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="bg-nude-100">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:px-12 lg:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
            Avaliação
          </p>
          <h2 className="mt-4 font-serif-display text-3xl leading-snug text-graphite sm:text-4xl">
            Vamos conversar sobre o que faz sentido para você?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brown-soft">
            O primeiro passo é entender suas expectativas, avaliar suas características
            individuais e conversar sobre as possibilidades de tratamento.
          </p>
          <div className="mt-9">
            <WhatsAppLink message={WHATSAPP_MESSAGES.final} variant="primary">
              Falar com a Dra. Gabriela
            </WhatsAppLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
