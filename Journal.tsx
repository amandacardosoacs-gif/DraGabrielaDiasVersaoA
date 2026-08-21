import { useState } from "react";
import { articles } from "../data/siteConfig";
import ArticleCard from "./ArticleCard";
import Reveal from "./Reveal";

const INITIAL_COUNT = 6;

export default function Journal() {
  const [showAll, setShowAll] = useState(false);
  const visibleArticles = showAll ? articles : articles.slice(0, INITIAL_COUNT);

  return (
    <section id="diario-da-beleza" className="bg-nude-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
            Diário da Beleza
          </p>
          <h2 className="mt-4 font-serif-display text-3xl leading-snug text-graphite sm:text-4xl">
            Conteúdo para decidir com informação, não com pressa.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brown-soft">
            Beleza também está nos detalhes. Reunimos aqui conteúdos educativos sobre
            harmonização facial e cuidados estéticos.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article, index) => (
            <Reveal key={article.id} delay={(index % INITIAL_COUNT) * 70}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>

        {!showAll && articles.length > INITIAL_COUNT && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center rounded-full border border-graphite/30 px-6 py-3 text-sm font-medium text-graphite transition-colors hover:border-graphite hover:bg-graphite/5"
            >
              Ver mais conteúdos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
