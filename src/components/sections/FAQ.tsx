import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const answerId = useId();
  const questionId = `${answerId}-trigger`;

  return (
    <FadeIn delay={index * 0.05}>
      <div className="border-b border-neutral-200 last:border-0">
        <button
          id={questionId}
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 py-5 text-left group cursor-pointer"
          aria-expanded={open}
          aria-controls={answerId}
        >
          <span className="font-medium text-neutral-900 text-sm sm:text-base leading-snug group-hover:text-brand-600 transition-colors">
            {q}
          </span>
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-brand-50 transition-colors">
            {open ? (
              <Minus size={14} className="text-brand-600" />
            ) : (
              <Plus size={14} className="text-neutral-600" />
            )}
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="overflow-hidden"
            >
              <p className="text-neutral-500 text-sm leading-relaxed pb-5">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

export function FAQ() {
  const { lang } = useLang();
  const c = content[lang].faq;

  return (
    <section className="py-20 px-5 bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4">{c.label}</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-4">
              {c.heading}
            </h2>
            <p className="text-neutral-500 text-lg max-w-xl mx-auto">{c.sub}</p>
          </div>
        </FadeIn>

        <div className="bg-white rounded-2xl border border-neutral-200 px-6">
          {c.items.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
