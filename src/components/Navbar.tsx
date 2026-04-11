import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Modules", href: "#modules" },
  { label: "Why This", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          AI for <span className="text-brand-500">Everyone</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="px-3 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <Button
            size="sm"
            className="ml-2"
            onClick={() => scrollTo("#waitlist")}
          >
            Join Waitlist
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
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
              {navLinks.map((link) => (
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
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
