import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function FinalCTA() {
  return (
    <section className="py-24 px-5 bg-brand-500 overflow-hidden relative">
      {/* Subtle decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          className="w-[600px] h-[600px] rounded-full border border-brand-400 opacity-30"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full border border-brand-400 opacity-20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            The people using AI today are not smarter.
            <br className="hidden sm:block" />
            They just started earlier.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-brand-100 text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            Join the waitlist. Be part of the first group to access the course
            and build real, practical AI skills from the ground up.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Join the Waitlist
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:text-white hover:bg-brand-600"
              onClick={() =>
                document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See the Course
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
