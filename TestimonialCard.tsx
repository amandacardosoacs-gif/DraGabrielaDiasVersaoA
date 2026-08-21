import { Quote } from "lucide-react";
import type { Testimonial } from "../data/siteConfig";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-nude-200 bg-ivory p-7">
      <Quote className="h-6 w-6 text-gold" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-graphite-soft">
        “{testimonial.text}”
      </blockquote>
      <figcaption className="mt-5 text-sm font-semibold text-graphite">
        {testimonial.name}
      </figcaption>
    </figure>
  );
}
