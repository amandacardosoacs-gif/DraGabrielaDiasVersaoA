import { ArrowUpRight } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import { WhatsAppLink } from "./WhatsAppButton";
import { WHATSAPP_MESSAGES, type Article } from "../data/siteConfig";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-nude-200 bg-ivory transition-shadow duration-300 hover:shadow-lg hover:shadow-graphite/5">
      <div className="aspect-[4/3] w-full overflow-hidden bg-nude-100">
        <ImageWithFallback
          src={article.image}
          alt={article.title}
          fallbackLabel={article.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif-display text-xl leading-snug text-graphite">{article.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brown-soft">{article.excerpt}</p>
        <WhatsAppLink
          message={`${WHATSAPP_MESSAGES.journal} Tema: "${article.title}"`}
          variant="ghost"
          className="mt-5 inline-flex w-fit items-center gap-1 px-0 py-0"
        >
          Quero saber mais <ArrowUpRight className="h-4 w-4" />
        </WhatsAppLink>
      </div>
    </article>
  );
}
