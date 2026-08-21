import { MessageCircle } from "lucide-react";
import { siteInfo, WHATSAPP_MESSAGES, buildWhatsAppLink } from "../data/siteConfig";
import InstagramIcon from "./InstagramIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-nude-200 bg-graphite text-nude-100">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">

        {/* Top: brand + social highlight */}
        <div className="mb-12 flex flex-col items-start justify-between gap-8 border-b border-nude-200/20 pb-10 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif-display text-2xl text-ivory">{siteInfo.name}</p>
            <p className="mt-1 text-sm text-nude-300">{siteInfo.specialty}</p>
          </div>

          {/* Social buttons */}
          <div className="flex items-center gap-3">
            {/* Instagram — destaque */}
            <a
              href={siteInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir a Dra. Gabriela Dias no Instagram"
              className="group flex items-center gap-2.5 rounded-full border border-nude-200/30 bg-nude-200/10 px-5 py-2.5 text-sm font-medium text-ivory transition-all duration-300 hover:border-champagne/60 hover:bg-nude-200/20"
            >
              <InstagramIcon className="h-4 w-4 text-champagne transition-colors group-hover:text-ivory" />
              <span>{siteInfo.instagramHandle}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.final)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a Dra. Gabriela Dias pelo WhatsApp"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-nude-200/30 bg-nude-200/10 transition-all duration-300 hover:border-[#25D366]/60 hover:bg-[#25D366]/10"
            >
              <MessageCircle className="h-4 w-4 text-champagne transition-colors group-hover:text-[#25D366]" />
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
              Profissional
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-nude-300">
              <li>CRO: {siteInfo.cro}</li>
              <li>{siteInfo.specialty}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
              Contato
            </p>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGES.final)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-nude-100 transition-colors hover:text-champagne"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={siteInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-nude-100 transition-colors hover:text-champagne"
                >
                  <InstagramIcon className="h-4 w-4 flex-shrink-0" />
                  {siteInfo.instagramHandle}
                </a>
              </li>
              {siteInfo.email && !siteInfo.email.startsWith("[") && (
                <li className="text-nude-300">{siteInfo.email}</li>
              )}
            </ul>
          </div>

          {/* Location */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
              Consultório
            </p>
            <p className="mt-3 text-sm text-nude-300">{siteInfo.address}</p>
            <p className="mt-1 text-sm text-nude-300">{siteInfo.hours}</p>
          </div>

          {/* Institutional */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
              Institucional
            </p>
            <ul className="mt-3 space-y-2 text-sm text-nude-300">
              <li>
                <a href="#topo" className="transition-colors hover:text-champagne">
                  Voltar ao topo
                </a>
              </li>
              <li>
                <span className="cursor-default opacity-60">
                  Política de privacidade [em breve]
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-nude-200/20 pt-6 text-center">
          <p className="text-xs leading-relaxed text-nude-300">
            As informações deste site têm caráter educativo e não substituem uma avaliação
            profissional presencial. Resultados podem variar de pessoa para pessoa.
          </p>
          <p className="mt-3 text-xs text-nude-300">
            © {year} {siteInfo.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
