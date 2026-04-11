import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CheckCircle2, Loader2 } from "lucide-react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !name) {
      setError("Please fill in both fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);
    // Simulate submit (replace with real endpoint later)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section
      id="waitlist"
      className="py-20 px-5 bg-white"
    >
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <div className="text-center mb-10">
            <SectionLabel className="mb-4">Join the Waitlist</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-4">
              Be first in line when we launch.
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed max-w-sm mx-auto">
              Leave your details below. We will notify you as soon as the course is ready
              and give waitlist members early access.
            </p>
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
                You are on the list!
              </h3>
              <p className="text-neutral-500 text-sm">
                We will send you a message at <strong>{email}</strong> as soon as the course
                is ready. Watch your inbox.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 sm:p-8 space-y-4"
              noValidate
            >
              <div>
                <label
                  htmlFor="wl-name"
                  className="block text-sm font-medium text-neutral-700 mb-1.5"
                >
                  Your name
                </label>
                <input
                  id="wl-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ada Okonkwo"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="wl-email"
                  className="block text-sm font-medium text-neutral-700 mb-1.5"
                >
                  Your email address
                </label>
                <input
                  id="wl-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ada@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
                />
              </div>

              {error && (
                <p className="text-red-600 text-xs">{error}</p>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin mr-2" />
                    Joining...
                  </>
                ) : (
                  "Join the Waitlist"
                )}
              </Button>

              <p className="text-center text-xs text-neutral-400">
                No spam. No selling your data. Just a heads up when we launch.
              </p>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
