import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppLink } from "./WhatsAppButton";
import { WHATSAPP_MESSAGES, siteInfo } from "../data/siteConfig";
import InstagramIcon from "./InstagramIcon";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Antes e Depois", href: "#antes-e-depois" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Diário da Beleza", href: "#diario-da-beleza" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-ivory/95 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Logo / Name */}
        <a
          href="#topo"
          className="font-serif-display text-xl tracking-wide text-graphite sm:text-2xl"
        >
          Gabriela Dias
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-graphite-soft transition-colors hover:text-gold-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Instagram icon link */}
          <a
            href={siteInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Dra. Gabriela Dias"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-nude-200 text-graphite-soft transition-all duration-300 hover:border-gold hover:text-gold-dark"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>

          <WhatsAppLink message={WHATSAPP_MESSAGES.hero} variant="primary">
            Agendar pelo WhatsApp
          </WhatsAppLink>
        </div>

        {/* Mobile: Instagram icon + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={siteInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Dra. Gabriela Dias"
            className="flex h-10 w-10 items-center justify-center rounded-full text-graphite-soft"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-graphite"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-0 top-[64px] z-30 bg-ivory transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav
          className="flex h-full flex-col gap-2 overflow-y-auto px-6 py-8"
          aria-label="Navegação mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="border-b border-nude-200 py-4 text-lg font-medium text-graphite transition-colors hover:text-gold-dark"
            >
              {link.label}
            </a>
          ))}

          {/* Instagram in mobile menu */}
          <a
            href={siteInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mt-2 flex items-center gap-3 border-b border-nude-200 py-4 text-lg font-medium text-graphite-soft"
          >
            <InstagramIcon className="h-5 w-5" />
            {siteInfo.instagramHandle}
          </a>

          <div className="mt-6">
            <WhatsAppLink
              message={WHATSAPP_MESSAGES.hero}
              className="w-full"
            >
              Agendar pelo WhatsApp
            </WhatsAppLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
