import { useId, type CSSProperties } from "react";

const RABBIT_CONTOUR =
  "M 641 49 L 663 52 L 677 68 L 682 92 L 679 129 L 670 163 L 653 200 L 632 231 L 596 269 L 623 302 L 640 343 L 645 372 L 655 376 L 666 386 L 668 393 L 661 394 L 670 407 L 670 419 L 664 417 L 663 430 L 656 444 L 640 461 L 626 470 L 634 482 L 629 497 L 637 506 L 637 517 L 631 527 L 648 542 L 657 555 L 665 582 L 657 604 L 643 617 L 647 626 L 644 643 L 628 653 L 627 716 L 621 744 L 610 765 L 614 770 L 641 778 L 650 786 L 655 797 L 654 812 L 644 821 L 618 825 L 557 825 L 504 818 L 449 825 L 388 824 L 368 820 L 360 815 L 360 808 L 377 805 L 379 808 L 381 792 L 390 780 L 400 774 L 425 767 L 416 749 L 411 725 L 399 712 L 395 699 L 398 678 L 409 667 L 412 658 L 400 657 L 391 650 L 388 635 L 393 620 L 387 617 L 378 605 L 372 586 L 374 568 L 380 556 L 389 544 L 411 525 L 406 511 L 412 502 L 406 494 L 408 482 L 392 474 L 383 465 L 379 451 L 372 455 L 369 446 L 372 430 L 365 430 L 367 417 L 381 405 L 380 363 L 386 332 L 394 312 L 408 291 L 370 248 L 342 193 L 330 137 L 330 107 L 335 82 L 350 61 L 362 56 L 375 56 L 397 66 L 421 90 L 442 125 L 456 163 L 463 209 L 464 248 L 467 248 L 487 231 L 493 221 L 497 224 L 496 233 L 515 227 L 507 236 L 508 239 L 530 240 L 531 195 L 536 165 L 556 118 L 571 97 L 595 73 L 615 59 L 641 49 Z";

const RABBIT_CRAFT_LOADER_STYLES = `
.rabbitCraftLoader {
  --rabbit-loader-size: 280px;
  --rabbit-loader-duration: 6s;
  --rabbit-ember: #ff8a1e;
  --rabbit-cream: #fff3cc;
  display: inline-grid;
  width: var(--rabbit-loader-size);
  justify-items: center;
  gap: 0.7rem;
  margin: 0;
  color: #f8e7d2;
  font-family: "Avenir Next", "Trebuchet MS", sans-serif;
}
.rabbitCraftLoader__art {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  overflow: visible;
  filter: drop-shadow(0 26px 28px rgb(8 4 3 / 0.32));
}
.rabbitCraftLoader__shadow {
  fill: #080505;
  opacity: 0.4;
  filter: blur(16px);
  transform-origin: 511px 839px;
  animation: rabbit-shadow var(--rabbit-loader-duration) ease-in-out infinite;
}
.rabbitCraftLoader__silhouette {
  opacity: 0.93;
  animation: rabbit-breathe var(--rabbit-loader-duration) ease-in-out infinite;
}
.rabbitCraftLoader__innerGlow {
  fill: var(--rabbit-ember);
  opacity: 0;
  filter: blur(26px);
  animation: rabbit-inner-glow var(--rabbit-loader-duration) ease-out infinite;
}
.rabbitCraftLoader__guide,
.rabbitCraftLoader__trace {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
}
.rabbitCraftLoader__guide {
  stroke: #f9a75e;
  stroke-width: 1.6;
  opacity: 0.17;
  stroke-dasharray: 0.008 0.016;
  animation: rabbit-guide-pulse var(--rabbit-loader-duration) ease-in-out infinite;
}
.rabbitCraftLoader__trace {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: rabbit-draw var(--rabbit-loader-duration) linear infinite;
}
.rabbitCraftLoader__trace--glow {
  stroke: var(--rabbit-ember);
  stroke-width: 8;
  opacity: 0.58;
}
.rabbitCraftLoader__trace--core {
  stroke: var(--rabbit-cream);
  stroke-width: 2.4;
}
.rabbitCraftLoader__caption {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  max-width: 100%;
  color: currentColor;
  font-size: clamp(0.72rem, calc(var(--rabbit-loader-size) * 0.047), 0.9rem);
  font-weight: 650;
  letter-spacing: 0.075em;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
}
.rabbitCraftLoader__statusDot {
  width: 0.42rem;
  height: 0.42rem;
  flex: 0 0 auto;
  border-radius: 999px;
  background: var(--rabbit-ember);
  box-shadow: 0 0 0 4px rgb(255 138 30 / 0.12), 0 0 16px rgb(255 138 30 / 0.82);
  animation: rabbit-status-pulse 1.2s ease-in-out infinite;
}
@keyframes rabbit-draw {
  0%, 5% { stroke-dashoffset: 1; opacity: 0; }
  8% { opacity: 1; }
  82% { stroke-dashoffset: 0; opacity: 1; }
  92%, 100% { stroke-dashoffset: 0; opacity: 0; }
}
@keyframes rabbit-inner-glow {
  0%, 72% { opacity: 0; }
  84% { opacity: 0.26; }
  96%, 100% { opacity: 0; }
}
@keyframes rabbit-breathe {
  0%, 100% { opacity: 0.82; }
  50% { opacity: 0.98; }
}
@keyframes rabbit-guide-pulse {
  0%, 100% { opacity: 0.09; }
  50% { opacity: 0.23; }
}
@keyframes rabbit-shadow {
  0%, 100% { opacity: 0.3; transform: scaleX(0.92); }
  50% { opacity: 0.5; transform: scaleX(1.04); }
}
@keyframes rabbit-status-pulse {
  0%, 100% { opacity: 0.48; transform: scale(0.82); }
  50% { opacity: 1; transform: scale(1); }
}
@media (prefers-reduced-motion: reduce) {
  .rabbitCraftLoader__shadow,
  .rabbitCraftLoader__silhouette,
  .rabbitCraftLoader__innerGlow,
  .rabbitCraftLoader__guide,
  .rabbitCraftLoader__trace,
  .rabbitCraftLoader__statusDot { animation: none; }
  .rabbitCraftLoader__trace { stroke-dashoffset: 0; opacity: 1; }
}
`;

export type RabbitCraftLoaderProps = {
  /** Accessible loading description. */
  label?: string;
  /** Rendered width and height in CSS pixels. */
  size?: number;
  /** Seconds per crafting cycle. */
  duration?: number;
  /** Path or imported URL for the transparent rabbit PNG. */
  src?: string;
  className?: string;
};

export function RabbitCraftLoader({
  label = "Crafting your experience",
  size = 280,
  duration = 6,
  src = "/rabbit-idle.png",
  className = "",
}: RabbitCraftLoaderProps) {
  const instanceId = useId().replace(/:/g, "");
  const maskId = `rabbit-alpha-${instanceId}`;
  const silhouetteGradientId = `rabbit-fill-${instanceId}`;
  const glowId = `rabbit-glow-${instanceId}`;

  const style = {
    "--rabbit-loader-size": `${size}px`,
    "--rabbit-loader-duration": `${duration}s`,
  } as CSSProperties;

  return (
    <figure
      className={`rabbitCraftLoader ${className}`.trim()}
      style={style}
      role="progressbar"
      aria-label={label}
      aria-busy="true"
    >
      <style>{RABBIT_CRAFT_LOADER_STYLES}</style>
      <svg
        className="rabbitCraftLoader__art"
        viewBox="0 0 1024 1024"
        aria-hidden="true"
      >
        <defs>
          <mask
            id={maskId}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1024"
            height="1024"
            style={{ maskType: "alpha" }}
          >
            <image href={src} x="0" y="0" width="1024" height="1024" />
          </mask>

          <linearGradient id={silhouetteGradientId} x1="360" y1="110" x2="670" y2="825" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#6b361d" />
            <stop offset="0.54" stopColor="#2d1b17" />
            <stop offset="1" stopColor="#140f10" />
          </linearGradient>

          <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse className="rabbitCraftLoader__shadow" cx="511" cy="839" rx="174" ry="22" />

        <rect
          className="rabbitCraftLoader__silhouette"
          width="1024"
          height="1024"
          fill={`url(#${silhouetteGradientId})`}
          mask={`url(#${maskId})`}
        />

        <rect
          className="rabbitCraftLoader__innerGlow"
          x="0"
          y="0"
          width="1024"
          height="1024"
          mask={`url(#${maskId})`}
        />

        <path className="rabbitCraftLoader__guide" d={RABBIT_CONTOUR} pathLength="1" />
        <path
          className="rabbitCraftLoader__trace rabbitCraftLoader__trace--glow"
          d={RABBIT_CONTOUR}
          pathLength="1"
          filter={`url(#${glowId})`}
        />
        <path
          className="rabbitCraftLoader__trace rabbitCraftLoader__trace--core"
          d={RABBIT_CONTOUR}
          pathLength="1"
        />

      </svg>

      <figcaption className="rabbitCraftLoader__caption">
        <span className="rabbitCraftLoader__statusDot" />
        {label}
      </figcaption>
    </figure>
  );
}

export default RabbitCraftLoader;
