import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const WAITLIST_ENDPOINT = import.meta.env.VITE_WAITLIST_ENDPOINT;

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { lang } = useLang();
  const c = content[lang].waitlist;

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    if (!email || !name) {
      setError(c.errorBoth);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(c.errorEmail);
      return;
    }

    if (!WAITLIST_ENDPOINT) {
      setError(c.errorUnavailable);
      return;
    }

    setError("");
    setLoading(true);
    try {
      const response = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitted(true);
    } catch {
      setError(c.errorSubmit);
    } finally {
      setLoading(false);
    }
  }

  const successBody = c.successBody.replace("{email}", email);

  return (
    <section id="waitlist" className="py-16 sm:py-24 px-5 bg-ivory">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <div className="text-center mb-10">
            <SectionLabel className="mb-4">{c.label}</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-4">
              {c.heading}
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed max-w-sm mx-auto">{c.sub}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-10 bg-green-50 border border-green-200 rounded-2xl"
            >
              <CheckCircle2 className="mx-auto text-green-500 mb-4" size={40} />
              <h3 className="font-display font-bold text-xl text-neutral-900 mb-2">
                {c.successHeading}
              </h3>
              <p className="text-neutral-500 text-sm">
                {successBody.split(email).map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <strong>{email}</strong>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-neutral-200/70 shadow-[0_2px_16px_rgba(28,25,23,0.07)] p-6 sm:p-8 space-y-4"
              noValidate
            >
              <div>
                <label
                  htmlFor="wl-name"
                  className="block text-sm font-medium text-neutral-700 mb-1.5"
                >
                  {c.nameLabel}
                </label>
                <input
                  id="wl-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={c.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="wl-email"
                  className="block text-sm font-medium text-neutral-700 mb-1.5"
                >
                  {c.emailLabel}
                </label>
                <input
                  id="wl-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={c.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
                />
              </div>

              <div aria-live="polite" className="min-h-5">
                {error && <p className="text-red-600 text-xs">{error}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin mr-2" />
                    {c.submittingLabel}
                  </>
                ) : (
                  c.submitCta
                )}
              </Button>

              <div className="flex items-center justify-center gap-4 pt-1">
                {c.trustItems.map((item) => (
                  <span key={item} className="flex items-center gap-1 text-xs text-neutral-400">
                    <span className="text-brand-400">✓</span> {item}
                  </span>
                ))}
              </div>

              <p className="text-center text-xs text-neutral-500">
                <a
                  href="mailto:hello@aiforeveryone.ng?subject=Waitlist%20Signup&body=Name:%20%0AEmail:%20"
                  className="text-brand-600 underline underline-offset-2 hover:text-brand-700"
                >
                  {c.fallbackCta}
                </a>
              </p>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
