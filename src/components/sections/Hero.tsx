import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import type { Lang } from "@/types/language";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const STATS = [
  { value: "50+", label: "lessons" },
  { value: "EN/PID", label: "bilingual" },
  { value: "0", label: "jargon" },
];

// Lesson specimen: shows the course quality — a concept + the kind of prompt you'll write.
// Deliberately different from the Problem section (which is a selector/detail pattern).
// This artifact reads like a product preview, not a navigator.
interface Specimen {
  module: string;
  lesson: string;
  insight: string;
  promptLabel: string;
  prompt: string;
}

const SPECIMENS: Record<Lang, Specimen[]> = {
  en: [
    {
      module: "Module 01",
      lesson: "Demystifying AI",
      insight: "Once you stop being afraid of it, it becomes just another tool. No different from learning to use Google for the first time.",
      promptLabel: "A question you will know to ask",
      prompt: "What is ChatGPT and how is it different from Google? Explain it like I use WhatsApp but not Twitter.",
    },
    {
      module: "Module 02",
      lesson: "Your First Conversation",
      insight: "The quality of what you get from AI almost always reflects the quality of what you asked.",
      promptLabel: "A prompt you will write with confidence",
      prompt: "I run a tailoring shop in Abuja. Write 3 Instagram captions for new Ankara arrivals. Casual tone. 2 sentences each.",
    },
    {
      module: "Module 03",
      lesson: "Writing with AI",
      insight: "AI does not replace your voice. It handles the blank page. You keep the ideas and the final word.",
      promptLabel: "A prompt you will write naturally",
      prompt: "Write a professional but warm email from me to my supplier Tunde about a delayed delivery. Under 100 words.",
    },
    {
      module: "Module 05",
      lesson: "AI at Work",
      insight: "The people saving the most time are not using the most advanced tools. They have clearer habits.",
      promptLabel: "A workflow you will build",
      prompt: "Summarise this meeting transcript in 5 bullet points, then list 3 follow-up actions with owners.",
    },
  ],
  pidgin: [
    {
      module: "Module 01",
      lesson: "Wetin AI Actually Be",
      insight: "Once you stop fear am, e go just be another tool. No different from when you first learn how to use Google.",
      promptLabel: "Question wey you go sabi to ask",
      prompt: "Wetin be ChatGPT and how e different from Google? Explain am like I dey use WhatsApp but no dey use Twitter.",
    },
    {
      module: "Module 02",
      lesson: "Your First Conversation",
      insight: "Wetin you get from AI almost always dey depend on how well you ask. Better question, better answer.",
      promptLabel: "Prompt wey you go write with confidence",
      prompt: "I dey run tailoring shop for Abuja. Write 3 Instagram captions for new Ankara arrivals. Casual tone. 2 sentences each.",
    },
    {
      module: "Module 03",
      lesson: "AI for Writing",
      insight: "AI no go replace your voice. E just dey handle the blank page. You keep the ideas and the final word.",
      promptLabel: "Prompt wey you go write naturally",
      prompt: "Write professional but warm email from me to my supplier Tunde about delayed delivery. Under 100 words.",
    },
    {
      module: "Module 05",
      lesson: "AI for Work",
      insight: "The people wey dey save most time no be the ones with most advanced tools. Dem just get clearer habits.",
      promptLabel: "Workflow wey you go build",
      prompt: "Summarise this meeting transcript in 5 bullet points, then list 3 follow-up actions with owners.",
    },
  ],
};

const AUTO_INTERVAL = 5000;

const slideVariants = {
  enter: (dir: number) => ({ x: dir * 14, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -14, opacity: 0 }),
};

export function Hero() {
  const { lang } = useLang();
  const c = content[lang].hero;
  const ref = useRef<HTMLElement>(null);
  const specimens = SPECIMENS[lang];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const colY = useTransform(scrollYProgress, [0, 0.65], [0, -80]);
  const colOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const navigate = useCallback((dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + specimens.length) % specimens.length);
    setPaused(true);
  }, [specimens.length]);

  const goTo = useCallback((i: number, current: number) => {
    setDirection(i > current ? 1 : -1);
    setIndex(i);
    setPaused(true);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % specimens.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [paused, specimens.length]);

  useEffect(() => {
    if (!paused) return;
    const id = setTimeout(() => setPaused(false), 6000);
    return () => clearTimeout(id);
  }, [paused, index]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) navigate(delta > 0 ? 1 : -1);
    touchStartX.current = null;
  };

  const specimen = specimens[index];

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-ivory">
      {/* Warm top-right glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100/60 via-brand-50/20 to-transparent pointer-events-none" />
      {/* Bottom dissolve */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-ivory pointer-events-none z-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 min-h-screen flex items-center pt-24 pb-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-center">

          {/* Left: text content — unchanged */}
          <motion.div style={{ y: colY, opacity: colOpacity }}>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-500">
                <span className="w-6 h-px bg-neutral-300" />
                {c.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-[3rem] sm:text-[3.75rem] lg:text-[4.25rem] xl:text-[5rem] font-extrabold text-neutral-900 leading-[1.04] tracking-tight mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
            >
              {c.headline}
              <br />
              <span className="text-brand-500 italic">{c.headlineAccent}</span>
            </motion.h1>

            <motion.p
              className="text-neutral-500 text-base sm:text-[17px] leading-[1.75] mb-10 max-w-[44ch]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24, ease: EASE }}
            >
              {c.sub}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36, ease: EASE }}
            >
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {c.primaryCta}
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() =>
                  document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {c.secondaryCta}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-0 mb-3">
                {STATS.map((s, i) => (
                  <div key={s.value} className="flex items-center">
                    <div className={i === 0 ? "pr-4" : "px-4"}>
                      <span className="font-display font-semibold text-sm text-neutral-700">
                        {s.value}
                      </span>
                      <span className="text-neutral-400 text-sm"> {s.label}</span>
                    </div>
                    {i < STATS.length - 1 && (
                      <span className="text-neutral-200 text-xs select-none">·</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-400">{c.nudge}</p>
            </motion.div>
          </motion.div>

          {/* Right: lesson specimen card — desktop only */}
          <motion.div
            className="hidden lg:block"
            style={{ y: colY, opacity: colOpacity }}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
          >
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            >
              <div
                className="rounded-2xl border border-neutral-200/80 overflow-hidden
                  shadow-[0_2px_12px_rgba(26,18,8,0.08),0_1px_3px_rgba(26,18,8,0.05)]
                  hover:shadow-[0_8px_32px_rgba(26,18,8,0.12),0_2px_8px_rgba(26,18,8,0.07)]
                  transition-shadow duration-500 bg-surface"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Auto-advance progress bar */}
                <div className="h-[2px] bg-neutral-100 w-full overflow-hidden">
                  {!paused && (
                    <motion.div
                      key={index}
                      className="h-full bg-brand-400/80"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTO_INTERVAL / 1000, ease: "linear" }}
                    />
                  )}
                </div>

                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={index}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    {/* Card header: module + lesson */}
                    <div className="px-6 py-4 border-b border-neutral-200/50 bg-ivory/80 flex items-center gap-2.5">
                      <span className="font-mono text-[10px] font-bold text-brand-600 bg-surface border border-brand-100 px-2 py-0.5 rounded-md tracking-wider shrink-0">
                        {specimen.module}
                      </span>
                      <span className="text-neutral-300 text-xs select-none">·</span>
                      <span className="text-xs text-neutral-500 font-medium truncate">
                        {specimen.lesson}
                      </span>
                    </div>

                    {/* Concept block */}
                    <div className="px-6 pt-4 pb-4 border-b border-neutral-100/80">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-neutral-400 mb-3">
                        The concept
                      </p>
                      <p className="font-display font-semibold text-[15px] text-neutral-900 leading-snug">
                        "{specimen.insight}"
                      </p>
                    </div>

                    {/* Prompt specimen */}
                    <div className="px-6 py-4">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-neutral-400 mb-3">
                        {specimen.promptLabel}
                      </p>
                      <div className="bg-ivory border border-neutral-200/60 rounded-xl px-4 py-3.5">
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {specimen.prompt}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Card footer: dots + prev/next */}
                <div className="px-6 py-3.5 border-t border-neutral-100 flex items-center justify-between bg-surface/50">
                  <div className="flex items-center gap-1.5">
                    {specimens.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i, index)}
                        className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                          i === index
                            ? "w-5 bg-brand-500"
                            : "w-1.5 bg-neutral-200 hover:bg-neutral-300"
                        }`}
                        aria-label={`Go to specimen ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => navigate(-1)}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-700 border border-transparent hover:border-neutral-200 hover:bg-neutral-50 transition-all duration-200 cursor-pointer"
                      aria-label="Previous specimen"
                    >
                      <ChevronLeft size={13} />
                    </button>
                    <button
                      onClick={() => navigate(1)}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-700 border border-transparent hover:border-neutral-200 hover:bg-neutral-50 transition-all duration-200 cursor-pointer"
                      aria-label="Next specimen"
                    >
                      <ChevronRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
