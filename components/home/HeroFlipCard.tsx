"use client";

import { motion } from "framer-motion";

export type CardTarget = {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
};

const IMG_WIDTH = 64;
const IMG_HEIGHT = 90;

export function HeroFlipCard({
  src,
  label,
  index,
  target,
}: {
  src: string;
  label: string;
  index: number;
  target: CardTarget;
}) {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{ type: "spring", stiffness: 45, damping: 16 }}
      style={{
        position: "absolute",
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="group cursor-pointer"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        {/* Frente — equipamento real */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-sm border border-border bg-surface shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            loading={index < 6 ? "eager" : "lazy"}
            className="h-full w-full object-cover grayscale-[15%] transition-[filter] duration-300 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Verso — nome da linha */}
        <div
          className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-sm border border-signal/40 bg-surface-raised p-2 text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="font-display text-[11px] font-bold tracking-tight text-foreground">
            {label}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
