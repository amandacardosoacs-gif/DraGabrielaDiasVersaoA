import { useState, type ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackLabel?: string;
};

/**
 * Componente de imagem com fallback elegante.
 * Caso a imagem falhe ao carregar, exibe um bloco discreto com o texto
 * alternativo, evitando ícones de imagem quebrada na interface.
 */
export default function ImageWithFallback({ fallbackLabel, alt, className, ...props }: Props) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-nude-100 text-center text-sm text-brown-soft ${className ?? ""}`}
        role="img"
        aria-label={alt || fallbackLabel || "Imagem indisponível"}
      >
        <span className="px-4">{fallbackLabel || alt || "Imagem em breve"}</span>
      </div>
    );
  }

  return (
    <img
      {...props}
      alt={alt || ""}
      loading={props.loading || "lazy"}
      decoding="async"
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
