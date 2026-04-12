import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

export function WhyDifferent() {
  const { lang } = useLang();
  const c = content[lang].whyDifferent;

  return (
    <section id="why" className="py-16 sm:py-24 px-5 bg-neutral-900 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4 text-brand-400">
              {c.label}
            </SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
              {c.heading}
            </h2>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto">{c.sub}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.items.map((d, i) => (
            <FadeIn key={d.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
                className="p-6 bg-neutral-800/80 rounded-2xl border border-neutral-700/60 h-full group cursor-default
                  hover:border-neutral-600/80 hover:bg-neutral-800
                  hover:shadow-[0_0_0_1px_rgba(223,114,32,0.08),0_8px_28px_rgba(0,0,0,0.35)]
                  transition-all duration-300"
              >
                <div className="text-3xl mb-4">{d.icon}</div>
                <h3 className="font-semibold text-white text-base mb-2">{d.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{d.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
