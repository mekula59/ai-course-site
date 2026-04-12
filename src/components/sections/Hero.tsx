import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const STATS = [
  { value: "50+", label: "lessons" },
  { value: "EN/PID", label: "bilingual" },
  { value: "0", label: "jargon" },
];

interface LessonSlide {
  num: string;
  title: string;
  en: string;
  pidgin: string;
}

const SLIDES: LessonSlide[] = [
  {
    num: "01",
    title: "What AI Actually Is",
    en: "You don't need to understand how AI works any more than you need to understand electricity to turn on a light switch.",
    pidgin: "You no need to understand how AI dey work, just like you no need to understand electricity before you on light. Just sabi how to use am.",
  },
  {
    num: "02",
    title: "How AI Tools Work",
    en: "Think of AI like a very well-read assistant. It has processed enormous amounts of text and learned patterns to help you.",
    pidgin: "Think of AI like person wey don read plenty things and learn patterns from all of dem. E dey use that knowledge to help you.",
  },
  {
    num: "03",
    title: "Your First Conversation",
    en: "The secret to getting good answers from AI is being specific. Tell it your context, what you need, and in what format.",
    pidgin: "The secret to get good answers from AI na to be specific. Tell am your context, wetin you need, and how you want am.",
  },
  {
    num: "04",
    title: "Writing Faster with AI",
    en: "AI doesn't replace your voice. It handles the blank page. You start with a rough idea, and AI gives you something to react to.",
    pidgin: "AI no go replace your voice. E just dey handle the blank page. You start with rough idea, and AI give you something to work with.",
  },
  {
    num: "05",
    title: "Asking Better Questions",
    en: "Don't just ask AI for facts. Ask it to explain, compare, and simplify. That's where it truly saves you time.",
    pidgin: "No just ask AI for facts. Ask am to explain, compare, and make am simple. That na where e go save you the most time.",
  },
  {
    num: "06",
    title: "AI at Work",
    en: "The people saving the most time with AI are not using the fanciest tools. They have good habits and clear prompts.",
    pidgin: "The people wey dey save the most time with AI no be the ones with the fanciest tools. Na the ones wey get good habits and clear prompts.",
  },
  {
    num: "07",
    title: "AI for Your Business",
    en: "You don't need a big budget or a tech team. A phone, an internet connection, and the right knowledge are enough.",
    pidgin: "You no need big budget or tech team. Phone, internet connection, and the right knowledge na enough to start.",
  },
  {
    num: "08",
    title: "When Not to Trust AI",
    en: "AI can sound confident while being completely wrong. Always verify important facts. Treat it like a smart friend, not an authority.",
    pidgin: "AI fit sound confident while e dey completely wrong. Always verify important facts. Treat am like smart friend, no be authority.",
  },
];

const AUTO_INTERVAL = 4500;

const slideVariants = {
  enter: (dir: number) => ({ x: dir * 20, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -20, opacity: 0 }),
};

export function Hero() {
  const { lang } = useLang();
  const c = content[lang].hero;
  const ref = useRef<HTMLElement>(null);

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
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
    setPaused(true);
  }, []);

  const goTo = useCallback((i: number, current: number) => {
    setDirection(i > current ? 1 : -1);
    setIndex(i);
    setPaused(true);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  // Resume auto-rotate 6s after user interaction
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

  const slide = SLIDES[index];

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-ivory">
      {/* Warm top-right glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100/60 via-brand-50/20 to-transparent pointer-events-none" />
      {/* Bottom dissolve */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-white pointer-events-none z-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 min-h-screen flex items-center pt-24 pb-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-center">

          {/* Left: text content */}
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

            {/* Stats + nudge */}
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

          {/* Right: bilingual course preview card — desktop only */}
          <motion.div
            className="hidden lg:block"
            style={{ y: colY, opacity: colOpacity }}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
          >
            {/* Slow float */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="rounded-2xl border border-neutral-200 overflow-hidden shadow-[0_4px_24px_rgba(28,25,23,0.10)] bg-white"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Animated content: header + panels */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={index}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.32, ease: EASE }}
                  >
                    {/* Card header */}
                    <div className="px-6 py-4 border-b border-neutral-100 bg-neutral-50 flex items-center gap-3">
                      <span className="font-mono text-[11px] font-bold text-brand-500 bg-brand-50 border border-brand-200 px-2 py-0.5 rounded-md">
                        {slide.num}
                      </span>
                      <span className="text-sm font-semibold text-neutral-700 flex-1 truncate">
                        {slide.title}
                      </span>
                      <span className="text-[10px] text-neutral-400 font-medium tabular-nums shrink-0">
                        {index + 1} of {SLIDES.length}
                      </span>
                    </div>

                    {/* English panel */}
                    <div className="px-6 py-6 border-b border-neutral-100">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-neutral-400 mb-3">
                        Plain English
                      </p>
                      <p className="text-neutral-500 text-sm leading-relaxed">
                        "{slide.en}"
                      </p>
                    </div>

                    {/* Pidgin panel */}
                    <div className="px-6 py-6 bg-brand-50 border-l-2 border-l-brand-300">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-brand-500 mb-3">
                        🇳🇬 Nigerian Pidgin
                      </p>
                      <p className="text-neutral-800 text-sm leading-relaxed font-medium">
                        "{slide.pidgin}"
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Card footer: dots + prev/next */}
                <div className="px-6 py-4 border-t border-neutral-100 flex items-center justify-between">
                  {/* Progress dots */}
                  <div className="flex items-center gap-1.5">
                    {SLIDES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i, index)}
                        className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                          i === index
                            ? "w-4 bg-brand-500"
                            : "w-1.5 bg-neutral-200 hover:bg-neutral-300"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Prev / next */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => navigate(-1)}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <button
                      onClick={() => navigate(1)}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
                      aria-label="Next slide"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Below-card: language toggle indicator */}
            <div className="mt-5 flex items-center gap-2 px-1">
              <div className="flex gap-1.5">
                <span className="text-xs font-semibold text-neutral-700 bg-neutral-100 px-2.5 py-1 rounded-full">EN</span>
                <span className="text-xs font-semibold text-brand-600 bg-brand-50 border border-brand-200 px-2.5 py-1 rounded-full">PID</span>
              </div>
              <span className="text-xs text-neutral-400">Choose your language. Switch anytime.</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
