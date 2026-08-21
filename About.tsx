import { aboutInfo } from "../data/siteConfig";
import ImageWithFallback from "./ImageWithFallback";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Photo */}
        <Reveal>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Decorative frame */}
            <div
              className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border-2 border-nude-200 lg:-bottom-6 lg:-right-6"
              aria-hidden="true"
            />
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-nude-100 shadow-xl shadow-graphite/10">
              <ImageWithFallback
                src="/images/gabriela-about.jpg"
                alt="Dra. Gabriela Dias lendo um livro de medicina estética em seu consultório, demonstrando dedicação ao estudo e aprimoramento contínuo"
                fallbackLabel="Foto da Dra. Gabriela Dias em seu consultório"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Quote card on top of photo */}
            <div className="absolute -top-5 -left-5 z-10 max-w-[200px] rounded-2xl border border-nude-200 bg-ivory/95 p-4 shadow-lg backdrop-blur sm:-left-8">
              <p className="font-serif-display text-sm italic leading-snug text-graphite">
                "Cada rosto pede um olhar diferente."
              </p>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={120}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
            Sobre a Dra. Gabriela
          </p>
          <h2 className="mt-4 font-serif-display text-3xl leading-snug text-graphite sm:text-4xl">
            {aboutInfo.title}
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-brown-soft">
            {aboutInfo.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-nude-200 bg-nude-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
              Formação e especialização
            </p>
            <ul className="mt-3 space-y-2.5 text-sm text-graphite-soft">
              {aboutInfo.formation.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {aboutInfo.values.map((value) => (
              <li
                key={value}
                className="flex items-center gap-2 rounded-full border border-nude-200 bg-nude-50 px-4 py-2.5 text-sm text-graphite-soft"
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" />
                {value}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
