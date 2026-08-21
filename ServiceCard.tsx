import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { WhatsAppLink } from "./WhatsAppButton";
import { WHATSAPP_MESSAGES, type Service } from "../data/siteConfig";

export default function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col rounded-2xl border border-nude-200 bg-ivory p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-graphite/5 sm:p-8">
      <h3 className="font-serif-display text-2xl text-graphite">{service.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-brown-soft">{service.description}</p>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="mt-5 flex items-center gap-2 text-sm font-medium text-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 rounded"
      >
        {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        {open ? "Ver menos" : "Ver detalhes"}
      </button>

      {open && (
        <div className="mt-4 space-y-3 border-t border-nude-200 pt-4 text-sm text-graphite-soft">
          <p>
            <span className="font-semibold text-graphite">Objetivo: </span>
            {service.goal}
          </p>
          <p>
            <span className="font-semibold text-graphite">Indicado para: </span>
            {service.indication}
          </p>
          <p>
            <span className="font-semibold text-graphite">Cuidados: </span>
            {service.care}
          </p>
        </div>
      )}

      <div className="mt-6 pt-2">
        <WhatsAppLink
          message={`${WHATSAPP_MESSAGES.services} (${service.name})`}
          variant="secondary"
          className="w-full"
        >
          Quero saber mais
        </WhatsAppLink>
      </div>
    </div>
  );
}
