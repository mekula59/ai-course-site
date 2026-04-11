import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

type DemoState = "before" | "after";

// Real scenario: Lagos caterer pitching to a corporate client.
// Before: generic output that looks like something but says nothing.
// After: a real, sendable draft. The contrast is visceral.
const DEMO = {
  before: {
    prompt: "Write a business proposal for my catering business",
    response:
      "BUSINESS PROPOSAL\n\nExecutive Summary:\nOur company provides high-quality catering services to meet the diverse needs of our clients. We are committed to delivering exceptional food and service that exceeds expectations.\n\nServices Offered:\n• Corporate catering\n• Event planning\n• Meal delivery services\n\nPricing: Available upon request.\n\n[Your Name] | [Your Company] | [Your Email]",
    promptLabel: "What most people type",
    responseNote:
      "Technically a response. But it says nothing about you, your food, your client, or your offer. You cannot send this.",
  },
  after: {
    prompt:
      "Write a short proposal for Chisom's Kitchen, a caterer based in Lagos. We want to supply lunch to a 50-person office in Victoria Island, 3 days a week. Menu rotates weekly. Keep it professional but warm. Under 200 words.",
    response:
      "Subject: Lunch Partnership Proposal — Chisom's Kitchen\n\nDear [Contact Name],\n\nThank you for the opportunity. Chisom's Kitchen specialises in fresh, Nigerian-inspired meals delivered on time to offices across Lagos.\n\nFor your team of 50 in Victoria Island, we can provide lunch 3 days a week with a rotating weekly menu, so your team gets variety without the planning stress. All meals are freshly prepared and delivered hot.\n\nWe are happy to discuss pricing based on your preferred menu range and any dietary needs your team may have.\n\nWould you be open to a short call this week?\n\nWarm regards,\nChisom Eze\nChisom's Kitchen",
    promptLabel: "After one lesson",
    responseNote:
      "Specific, warm, and ready to send. This is the difference one lesson makes.",
  },
} as const;

export function PromptDemo() {
  const { lang } = useLang();
  const [state, setState] = useState<DemoState>("before");
  const demo = DEMO[state];

  const heading =
    lang === "en"
      ? "This is what one lesson changes."
      : "This na wetin one lesson go change.";
  const sub =
    lang === "en"
      ? "AI gives you what you ask for. The problem is most people don't know how to ask. This course fixes that."
      : "AI go give you wetin you ask for. The problem na say most people no sabi how to ask. This course go fix that.";
  const beforeLabel = lang === "en" ? "Without the course" : "Without the course";
  const afterLabel = lang === "en" ? "After one lesson" : "After one lesson";

  return (
    <section className="py-24 px-5 bg-neutral-50 overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="mb-12">
            <SectionLabel className="mb-5">
              {lang === "en" ? "The Difference" : "The Difference"}
            </SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-5 leading-tight">
              {heading}
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed max-w-[40ch]">{sub}</p>
          </div>
        </FadeIn>

        {/* Toggle — lesson stage navigator */}
        <FadeIn delay={0.1}>
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setState("before")}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                state === "before"
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              {beforeLabel}
            </button>
            <button
              onClick={() => setState("after")}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                state === "after"
                  ? "bg-brand-500 text-white"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              {afterLabel}
            </button>
          </div>
        </FadeIn>

        {/* Chat panel — slides on state change, bubbles stagger within */}
        <FadeIn delay={0.15}>
          <AnimatePresence mode="wait">
            <motion.div
              key={state}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm"
            >
              <div className="px-6 py-5 space-y-5">
                {/* User message */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: EASE, delay: 0.08 }}
                  className="flex flex-col items-end gap-1.5"
                >
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400">
                    You · {demo.promptLabel}
                  </p>
                  <div
                    className={`max-w-[85%] px-5 py-3.5 rounded-2xl rounded-tr-sm text-sm leading-relaxed ${
                      state === "after"
                        ? "bg-brand-500 text-white"
                        : "bg-neutral-900 text-neutral-100"
                    }`}
                  >
                    {demo.prompt}
                  </div>
                </motion.div>

                {/* AI response */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: EASE, delay: 0.22 }}
                  className="flex flex-col items-start gap-1.5"
                >
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400">
                    AI
                  </p>
                  <div className="max-w-[90%] bg-neutral-50 border border-neutral-200 px-5 py-3.5 rounded-2xl rounded-tl-sm text-sm text-neutral-700 leading-relaxed whitespace-pre-line">
                    {demo.response}
                  </div>
                </motion.div>
              </div>

              {/* Caption bar */}
              <div
                className={`px-6 py-4 border-t text-sm font-medium ${
                  state === "after"
                    ? "border-brand-100 bg-brand-50 text-brand-700"
                    : "border-neutral-100 bg-neutral-50 text-neutral-500"
                }`}
              >
                {demo.responseNote}
              </div>
            </motion.div>
          </AnimatePresence>
        </FadeIn>
      </div>
    </section>
  );
}
