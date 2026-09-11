"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { HeroFlipCard, type CardTarget } from "@/components/home/HeroFlipCard";
import { HERO_IMAGES } from "@/lib/hero-images";

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

type Phase = "scatter" | "settled";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const [phase, setPhase] = useState<Phase>("scatter");
  const [stageSize, setStageSize] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // --- Tamanho do estágio (para cálculo responsivo do círculo/arco) ---
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const update = () => {
      setStageSize({ width: el.offsetWidth, height: el.offsetHeight });
      setIsMobile(el.offsetWidth < 768);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // --- Sequência de entrada: dispersão -> composição inicial ---
  // Com "reduzir movimento" ativo, pula a dispersão animada e já
  // compõe o layout final.
  useEffect(() => {
    const t = setTimeout(() => setPhase("settled"), prefersReducedMotion ? 0 : 900);
    return () => clearTimeout(t);
  }, [prefersReducedMotion]);

  // --- Scroll NATURAL da página (não intercepta wheel/touch) ---
  // A seção tem 260vh; o palco fica "sticky" enquanto isso rola,
  // dando a sensação de scroll-driven morph sem travar a rolagem.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const morphProgress = useTransform(scrollYProgress, [0, 0.55], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 45, damping: 20 });

  const rotateProgress = useTransform(scrollYProgress, [0.55, 1], [0, 1]);
  const smoothRotate = useSpring(rotateProgress, { stiffness: 45, damping: 20 });

  const scrollHint = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // --- Parallax de mouse (somente em dispositivos com ponteiro fino) ---
  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    if (prefersReducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const normalized = (relativeX / rect.width) * 2 - 1;
      mouseX.set(normalized * 80);
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, [mouseX, prefersReducedMotion]);

  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const u1 = smoothMorph.on("change", setMorphValue);
    const u2 = smoothRotate.on("change", setRotateValue);
    const u3 = smoothMouseX.on("change", setParallaxValue);
    return () => {
      u1();
      u2();
      u3();
    };
  }, [smoothMorph, smoothRotate, smoothMouseX]);

  const total = isMobile ? 10 : HERO_IMAGES.length;
  const images = useMemo(() => HERO_IMAGES.slice(0, total), [total]);

  // Posições aleatórias de dispersão (fase inicial). Math.random é
  // impuro, então é calculado em um efeito (client-only, uma vez por
  // "total"), nunca durante a renderização.
  const [scatterPositions, setScatterPositions] = useState<CardTarget[]>([]);
  useEffect(() => {
    // Dispersão inicial aleatória — efeito visual único no mount,
    // client-only, sem impacto em hidratação ou layout subsequente.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setScatterPositions(
      Array.from({ length: total }, () => ({
        x: (Math.random() - 0.5) * 1200,
        y: (Math.random() - 0.5) * 700,
        rotation: (Math.random() - 0.5) * 140,
        scale: 0.6,
        opacity: 0,
      }))
    );
  }, [total]);

  // Conteúdo visível logo após a composição inicial (círculo formado,
  // topo da seção) e enquanto o morph para o arco ainda não avançou.
  // Deriva só de estado reativo (morphValue/phase) — nunca lê motion
  // values imperativamente (.get()) durante a renderização.
  const contentVisible = phase === "settled" && morphValue < 0.3;

  return (
    <section ref={sectionRef} className="relative" style={{ height: isMobile ? "220vh" : "260vh" }}>
      <div
        ref={stageRef}
        className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background"
      >
        {/* Textura de fundo sutil — grade técnica */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Conteúdo textual — aparece quando o arco se forma */}
        <motion.div
          animate={{
            opacity: contentVisible ? 1 : 0,
            y: contentVisible ? 0 : 16,
          }}
          transition={{ duration: 0.7 }}
          className="pointer-events-none absolute top-[14%] z-10 flex max-w-2xl flex-col items-center px-6 text-center"
        >
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Engenharia que move resultados
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted md:text-base">
            Equipamentos de musculação e cardiovasculares desenvolvidos e
            fabricados no Brasil, para quem leva performance a sério.
          </p>
          <div className="pointer-events-auto mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/produtos"
              className="border border-signal bg-signal px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-signal-dim"
            >
              Conheça nossos equipamentos
            </Link>
            <Link
              href="/orcamento"
              className="border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground"
            >
              Solicite um orçamento
            </Link>
          </div>
        </motion.div>

        {/* Palco das imagens */}
        <div className="relative flex h-full w-full items-center justify-center">
          {images.map((img, i) => {
            let target: CardTarget = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

            if (phase === "scatter") {
              target = scatterPositions[i] ?? { x: 0, y: 0, rotation: 0, scale: 0.6, opacity: 0 };
            } else {
              const minDimension = Math.min(stageSize.width, stageSize.height);
              const circleRadius = Math.min(minDimension * 0.32, isMobile ? 150 : 320);
              const circleAngle = (i / total) * 360;
              const circleRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              };

              const baseRadius = Math.min(stageSize.width, stageSize.height * 1.5);
              const arcRadius = baseRadius * (isMobile ? 1.5 : 1.1);
              const arcApexY = stageSize.height * (isMobile ? 0.34 : 0.24);
              const arcCenterY = arcApexY + arcRadius;

              const spreadAngle = isMobile ? 90 : 130;
              const startAngle = -90 - spreadAngle / 2;
              const step = spreadAngle / Math.max(total - 1, 1);

              const maxRotation = spreadAngle * 0.75;
              const boundedRotation = -rotateValue * maxRotation;

              const currentArcAngle = startAngle + i * step + boundedRotation;
              const arcRad = (currentArcAngle * Math.PI) / 180;

              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: currentArcAngle + 90,
                scale: isMobile ? 1.25 : 1.7,
              };

              target = {
                x: lerp(circlePos.x, arcPos.x, morphValue),
                y: lerp(circlePos.y, arcPos.y, morphValue),
                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                scale: lerp(1, arcPos.scale, morphValue),
                opacity: 1,
              };
            }

            return (
              <HeroFlipCard
                key={img.src + i}
                src={img.src}
                label={img.label}
                index={i}
                target={target}
              />
            );
          })}
        </div>

        {/* Indicador de rolagem */}
        <motion.div
          style={{ opacity: scrollHint }}
          className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-[11px] tracking-[0.18em] text-muted"
        >
          <span>ROLE PARA EXPLORAR</span>
          <span className="h-8 w-px bg-border" />
        </motion.div>
      </div>
    </section>
  );
}
