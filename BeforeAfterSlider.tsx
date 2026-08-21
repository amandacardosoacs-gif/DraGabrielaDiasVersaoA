import { useCallback, useRef, useState } from "react";
import ImageWithFallback from "./ImageWithFallback";
import type { BeforeAfterItem } from "../data/siteConfig";

export default function BeforeAfterSlider({ item }: { item: BeforeAfterItem }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const stopDragging = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-nude-200 bg-nude-50">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full touch-none select-none sm:aspect-[16/10]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDragging}
        onPointerLeave={stopDragging}
      >
        <ImageWithFallback
          src={item.afterImage}
          alt={`Depois — ${item.label}`}
          fallbackLabel="Imagem indisponível"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-0 h-full w-full"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <ImageWithFallback
            src={item.beforeImage}
            alt={`Antes — ${item.label}`}
            fallbackLabel="Imagem indisponível"
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-ivory/90"
          style={{ left: `${position}%` }}
        >
          <div
            role="slider"
            tabIndex={0}
            aria-label={`Comparar antes e depois de ${item.label}`}
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={onKeyDown}
            className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-nude-200 bg-ivory text-graphite shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <span aria-hidden="true" className="text-xs">↔</span>
          </div>
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-ivory/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-graphite-soft">
          Antes
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-ivory/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-graphite-soft">
          Depois
        </span>
      </div>

      <div className="p-5">
        <p className="text-sm font-medium text-graphite">{item.label}</p>
        <p className="mt-1 text-xs text-brown-soft">{item.note}</p>
      </div>
    </div>
  );
}
