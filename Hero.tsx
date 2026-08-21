import { WhatsAppLink } from "./WhatsAppButton";
import ImageWithFallback from "./ImageWithFallback";
import Reveal from "./Reveal";
import { WHATSAPP_MESSAGES } from "../data/siteConfig";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(135deg, #faf7f2 0%, #f4ebdd 55%, #e8d9c4 100%)" }}
    >
      {/* Decorative background grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-0 px-5 pt-24 sm:px-8 lg:flex-row lg:items-stretch lg:gap-16 lg:px-12 lg:pt-20">
        {/* Left: text content */}
        <Reveal className="flex flex-col justify-center py-12 lg:w-[52%] lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-dark">
            Harmonização Facial
          </p>

          <h1 className="mt-5 font-serif-display text-4xl leading-[1.1] text-graphite sm:text-5xl xl:text-6xl">
            Harmonia facial que valoriza a sua{" "}
            <em className="font-normal italic text-gold-dark">beleza natural.</em>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-brown-soft sm:text-lg">
            Atendimento personalizado em harmonização facial, com planejamento, técnica e olhar
            individual para cada paciente.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <WhatsAppLink
              message={WHATSAPP_MESSAGES.hero}
              variant="primary"
              className="w-full sm:w-auto"
            >
              Agendar avaliação pelo WhatsApp
            </WhatsAppLink>
            <a
              href="#sobre"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-graphite/30 px-6 py-3.5 text-sm font-medium text-graphite transition-colors duration-300 hover:border-graphite hover:bg-graphite/5 sm:w-auto"
            >
              Conheça meu trabalho
            </a>
          </div>

          {/* Brand quote */}
          <p className="mt-10 font-serif-display text-lg italic text-brown-soft">
            "Menos padrão. Mais personalidade."
          </p>

          {/* Badges row */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {/* Credential badge */}
            <div className="inline-flex w-fit items-center gap-3 rounded-2xl border border-nude-200 bg-ivory/80 px-5 py-3 backdrop-blur">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 text-gold-dark" aria-hidden="true">
                  <path
                    d="M10 2l1.8 5.6H17l-4.6 3.3 1.8 5.5L10 13.1 5.8 16.4l1.8-5.5L3 7.6h5.2z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold text-graphite">Cirurgiã-Dentista</p>
                <p className="text-xs text-brown-soft">Especialista em Harmonização Facial</p>
              </div>
            </div>

            {/* Instagram badge */}
            <a
              href="https://www.instagram.com/dragabrielamichielindias"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Instagram da Dra. Gabriela Dias"
              className="group inline-flex w-fit items-center gap-2.5 rounded-2xl border border-nude-200 bg-ivory/80 px-5 py-3 backdrop-blur transition-all duration-300 hover:border-gold/40 hover:bg-nude-100/80"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold text-graphite">Siga no Instagram</p>
                <p className="text-xs text-brown-soft">@dragabrielamichielindias</p>
              </div>
            </a>
          </div>
        </Reveal>

        {/* Right: photo */}
        <Reveal
          delay={200}
          className="relative flex items-end justify-center lg:w-[48%]"
        >
          {/* Decorative shape behind the photo */}
          <div
            className="absolute bottom-0 right-0 hidden h-[90%] w-[88%] rounded-tl-[80px] lg:block"
            style={{ background: "linear-gradient(160deg, #ddc39c 0%, #ead9be 100%)" }}
          />

          <div className="relative z-10 mx-auto w-full max-w-sm overflow-hidden rounded-t-[3rem] shadow-2xl shadow-graphite/15 lg:mx-0 lg:max-w-none">
            <ImageWithFallback
              src="/images/gabriela-hero.jpg"
              alt="Dra. Gabriela Dias, especialista em harmonização facial, em seu consultório com estantes de livros e anatomia facial ao fundo"
              fallbackLabel="Foto da Dra. Gabriela Dias"
              className="h-full w-full object-cover object-center"
              style={{ aspectRatio: "4/5", objectPosition: "center top" }}
              loading="eager"
            />
          </div>

          {/* Floating stat card */}
          <div className="absolute bottom-8 left-0 z-20 hidden rounded-2xl border border-nude-200 bg-ivory/95 px-5 py-4 shadow-lg shadow-graphite/10 backdrop-blur sm:block lg:left-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
              Abordagem
            </p>
            <p className="mt-1 max-w-[180px] text-sm text-graphite-soft">
              Planejamento individualizado — cada rosto pede um olhar diferente.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
