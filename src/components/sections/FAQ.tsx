import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const faqs = [
  {
    q: "Do I need any technical background to take this course?",
    a: "None at all. If you can use a smartphone or browse the internet, you have everything you need. This course starts from zero and explains everything step by step.",
  },
  {
    q: "What tools will I need?",
    a: "Just a phone or laptop and an internet connection. Most AI tools we cover have free tiers that are more than enough to get started. No paid subscriptions required.",
  },
  {
    q: "Is the Pidgin version the full course or just parts of it?",
    a: "Key lessons and explanations are available in Nigerian Pidgin. You can switch between English and Pidgin freely. The goal is for you to understand, not to limit you to one language.",
  },
  {
    q: "How long will the course take?",
    a: "Each module is designed to be completed in under an hour. The full course can be done in a weekend, or spread over a few weeks. There is no deadline. You go at your own pace.",
  },
  {
    q: "Will this course stay up to date as AI changes?",
    a: "Yes. AI is moving fast, and we know that. The course content is reviewed regularly and updated when major tools change or when better approaches emerge.",
  },
  {
    q: "What if I get stuck or have questions?",
    a: "You will have access to a community where you can ask questions and get support. You are not learning alone.",
  },
  {
    q: "Is there a certificate?",
    a: "Yes, you get a certificate of completion you can share on LinkedIn or add to your CV. We are building this to be meaningful, not just decorative.",
  },
  {
    q: "When does the course launch?",
    a: "We are finalising the content now. Join the waitlist to be the first to know when it goes live, and to get early access pricing.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.05}>
      <div className="border-b border-neutral-200 last:border-0">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 py-5 text-left group cursor-pointer"
          aria-expanded={open}
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
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
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
  return (
    <section className="py-20 px-5 bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4">FAQ</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-4">
              Questions you probably have.
            </h2>
            <p className="text-neutral-500 text-lg max-w-xl mx-auto">
              Honest answers. No marketing speak.
            </p>
          </div>
        </FadeIn>

        <div className="bg-white rounded-2xl border border-neutral-200 px-6">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
