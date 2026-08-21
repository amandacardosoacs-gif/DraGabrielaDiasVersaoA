import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Avaliação",
    description: "Conversa e análise individual das características e expectativas de cada paciente.",
  },
  {
    number: "02",
    title: "Planejamento",
    description: "Estudo das proporções faciais para definir o que realmente faz sentido para você.",
  },
  {
    number: "03",
    title: "Procedimento",
    description: "Execução técnica, segura e alinhada ao planejamento construído na avaliação.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    description: "Suporte contínuo após o procedimento, com atenção à evolução de cada caso.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-graphite text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">
            Cada rosto é único
          </p>
          <h2 className="mt-4 font-serif-display text-3xl leading-snug sm:text-4xl">
            Beleza não precisa seguir um padrão.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-nude-200">
            Cada pessoa possui características, proporções e desejos diferentes. Por isso, o
            planejamento deve partir de uma avaliação individualizada — e não de um procedimento
            pronto.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 120}>
              <div className="relative border-t border-nude-200/20 pt-6">
                <span className="font-serif-display text-4xl text-gold">{step.number}</span>
                <h3 className="mt-4 font-serif-display text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-nude-200">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={480} className="mt-16 text-center">
          <p className="font-serif-display text-xl italic text-champagne sm:text-2xl">
            "Harmonia não é transformação. É equilíbrio."
          </p>
        </Reveal>
      </div>
    </section>
  );
}
