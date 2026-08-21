import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems, WHATSAPP_MESSAGES } from "../data/siteConfig";
import { WhatsAppLink } from "./WhatsAppButton";
import Reveal from "./Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <Reveal className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
          Dúvidas frequentes
        </p>
        <h2 className="mt-4 font-serif-display text-3xl leading-snug text-graphite sm:text-4xl">
          Perguntas que ouço com frequência.
        </h2>
      </Reveal>

      <div className="mt-12 divide-y divide-nude-200 border-y border-nude-200">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
                >
                  <span className="text-base font-medium text-graphite sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-gold-dark transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </h3>
              <div
                id={`faq-panel-${index}`}
                role="region"
                className={`grid overflow-hidden transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="min-h-0 text-sm leading-relaxed text-brown-soft">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Reveal delay={200} className="mt-10 text-center">
        <p className="text-sm text-brown-soft">Ainda tem dúvidas? Fale diretamente conosco.</p>
        <div className="mt-4">
          <WhatsAppLink message={WHATSAPP_MESSAGES.faq} variant="secondary">
            Tirar dúvidas pelo WhatsApp
          </WhatsAppLink>
        </div>
      </Reveal>
    </section>
  );
}
