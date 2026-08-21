import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "../data/siteConfig";

type LinkProps = {
  message: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variantClasses: Record<NonNullable<LinkProps["variant"]>, string> = {
  primary:
    "bg-graphite text-ivory hover:bg-graphite-soft focus-visible:ring-graphite/40 shadow-sm",
  secondary:
    "border border-graphite/30 text-graphite hover:border-graphite hover:bg-graphite/5 focus-visible:ring-graphite/20",
  ghost: "text-graphite underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-dark",
};

/** Link padrão de contato via WhatsApp, usado em todos os CTAs do site. */
export function WhatsAppLink({ message, children, className = "", variant = "primary" }: LinkProps) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

/** Botão flutuante de WhatsApp, fixo no canto inferior direito. */
export default function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppLink(WHATSAPP_MESSAGES.floating)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Dra. Gabriela pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
      <span className="sr-only">Agendar pelo WhatsApp</span>
    </a>
  );
}
