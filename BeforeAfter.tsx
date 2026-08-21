import { beforeAfterItems } from "../data/siteConfig";
import { WhatsAppLink } from "./WhatsAppButton";
import { WHATSAPP_MESSAGES } from "../data/siteConfig";
import BeforeAfterSlider from "./BeforeAfterSlider";
import Reveal from "./Reveal";

export default function BeforeAfter() {
  return (
    <section id="antes-e-depois" className="bg-nude-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
            Antes e Depois
          </p>
          <h2 className="mt-4 font-serif-display text-3xl leading-snug text-graphite sm:text-4xl">
            Resultados que respeitam a individualidade.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brown-soft">
            Arraste o controle para comparar. Utilizamos apenas imagens autorizadas pelos
            pacientes. Os resultados podem variar de pessoa para pessoa.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {beforeAfterItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 120}>
              <BeforeAfterSlider item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <p className="mx-auto max-w-xl text-xs text-brown-soft">
            Imagens utilizadas somente mediante consentimento por escrito do(a) paciente. Os
            resultados apresentados são individuais e não representam garantia de resultado.
          </p>
          <div className="mt-6">
            <WhatsAppLink message={WHATSAPP_MESSAGES.beforeAfter} variant="secondary">
              Quero conhecer minha avaliação
            </WhatsAppLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
