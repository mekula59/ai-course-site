import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import type { Lang } from "@/types/language";

function LangToggle({ scrolled }: { scrolled: boolean }) {
  const { lang, setLang } = useLang();
  const options: { value: Lang; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "pidgin", label: "Pidgin" },
  ];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full p-0.5 text-xs font-semibold transition-colors",
        scrolled ? "bg-neutral-100" : "bg-neutral-900/10 backdrop-blur-sm"
      )}
    >
      {options.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setLang(value)}
          className="relative px-3 py-1.5 rounded-full cursor-pointer transition-colors"
          aria-pressed={lang === value}
        >
          {lang === value && (
            <motion.div
              layoutId="lang-pill"
              className={cn(
                "absolute inset-0 rounded-full",
                scrolled ? "bg-white shadow-sm" : "bg-white/90"
              )}
              transition={{ type: "spring", stiffness: 500, damping: 38 }}
            />
          )}
          <span
            className={cn(
              "relative z-10 transition-colors",
              lang === value
                ? "text-neutral-900"
                : scrolled
                ? "text-neutral-500 hover:text-neutral-700"
                : "text-neutral-600 hover:text-neutral-800"
            )}
          >
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang } = useLang();
  const c = content[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(href: string) {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-neutral-900 text-lg tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {c.logo.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-brand-500">{c.logo.split(" ").slice(-1)}</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-1">
          {c.links.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="px-3 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <div className="ml-2 mr-1">
            <LangToggle scrolled={scrolled} />
          </div>
          <Button size="sm" onClick={() => scrollTo("#waitlist")}>
            {c.cta}
          </Button>
        </div>

        {/* Mobile: lang toggle + menu button */}
        <div className="sm:hidden flex items-center gap-2">
          <LangToggle scrolled={scrolled} />
          <button
            className="p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="sm:hidden overflow-hidden bg-white border-b border-neutral-200"
          >
            <div className="px-5 pb-4 pt-2 flex flex-col gap-1">
              {c.links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="px-3 py-3 text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl text-left transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <Button
                size="sm"
                className="mt-2"
                onClick={() => scrollTo("#waitlist")}
              >
                {c.cta}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
