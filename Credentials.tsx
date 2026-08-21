import { credentials } from "../data/siteConfig";
import ImageWithFallback from "./ImageWithFallback";
import Reveal from "./Reveal";

export default function Credentials() {
  return (
    <section aria-label="Diferenciais" className="bg-nude-50">
      {/* Photo strip — two images of the clinic/Gabriela */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 pt-12 sm:px-8 sm:gap-4 lg:grid-cols-4 lg:px-12">
        {/* Main clinic photo */}
        <div className="col-span-2 overflow-hidden rounded-2xl">
          <ImageWithFallback
            src="/images/gabriela-hero.jpg"
            alt="Dra. Gabriela Dias em seu consultório especializado em harmonização facial"
            fallbackLabel="Consultório da Dra. Gabriela Dias"
            className="h-48 w-full object-cover object-top transition-transform duration-700 hover:scale-105 sm:h-64"
          />
        </div>
        {/* Reading photo */}
        <div className="col-span-2 overflow-hidden rounded-2xl">
          <ImageWithFallback
            src="/images/gabriela-about.jpg"
            alt="Dra. Gabriela Dias estudando literatura científica de medicina estética"
            fallbackLabel="Dra. Gabriela Dias estudando"
            className="h-48 w-full object-cover object-center transition-transform duration-700 hover:scale-105 sm:h-64"
          />
        </div>
      </div>

      {/* Credential cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 border-t border-nude-200 px-5 py-12 sm:px-8 lg:grid-cols-4 lg:px-12 lg:py-14">
        {credentials.map((item, index) => (
          <Reveal key={item.title} delay={index * 100}>
            <h3 className="font-serif-display text-lg text-graphite sm:text-xl">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brown-soft">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
