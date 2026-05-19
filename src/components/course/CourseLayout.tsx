import type { ReactNode } from "react";
import { BookOpen } from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLang } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import type { Lang } from "@/types/language";

interface CourseLayoutProps {
  children: ReactNode;
  navigate: CourseNavigate;
}

function CourseLanguageToggle() {
  const { lang, setLang } = useLang();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const options: { value: Lang; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "pidgin", label: "Pidgin" },
  ];

  return (
    <div
      className="inline-flex items-center rounded-full bg-neutral-100 p-0.5 text-xs font-semibold"
      style={
        isDark
          ? {
              backgroundColor: "rgb(255 246 232 / 0.08)",
              border: "1px solid rgb(99 70 52 / 0.55)",
            }
          : undefined
      }
    >
      {options.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => setLang(value)}
          className={cn(
            "rounded-full px-3 py-1.5 transition-colors cursor-pointer",
            lang === value
              ? "bg-white text-neutral-900 shadow-sm"
              : "text-neutral-500 hover:text-neutral-800"
          )}
          style={
            isDark
              ? lang === value
                ? { backgroundColor: "#f4ede3", color: "#21140c" }
                : { color: "#d6c6b5" }
              : undefined
          }
          aria-pressed={lang === value}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function CourseLayout({ children, navigate }: CourseLayoutProps) {
  const { lang } = useLang();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const footerCopy =
    lang === "pidgin"
      ? "Read slowly, practise as you go, and keep wetin work for you."
      : "Read slowly, practise as you go, and keep what works.";
  const courseListLabel = lang === "pidgin" ? "Course list" : "Courses";
  const footerTitle =
    lang === "pidgin" ? "AI for Everyone course" : "AI for Everyone Course";

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-ivory text-neutral-900 flex flex-col">
      <header className="border-b border-neutral-200/80 bg-surface/95 backdrop-blur-sm">
        <nav className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
          <CourseLink
            href="/"
            navigate={navigate}
            className="font-display font-bold text-neutral-900 text-lg tracking-tight"
            style={isDark ? { color: "#f4ede3" } : undefined}
          >
            AI for <span className="text-brand-500">Everyone</span>
          </CourseLink>

          <div className="flex items-center gap-3">
            <CourseLanguageToggle />
            <ThemeToggle />
            <CourseLink
              href="/courses"
              navigate={navigate}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
              style={isDark ? { color: "#d6c6b5" } : undefined}
            >
              <BookOpen size={16} />
              {courseListLabel}
            </CourseLink>
          </div>
        </nav>
      </header>

      <main className="flex-1 min-w-0">{children}</main>

      <footer className="border-t border-neutral-200/80 bg-surface px-5 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-neutral-500">
          <p className="font-medium text-neutral-700">{footerTitle}</p>
          <p>{footerCopy}</p>
        </div>
      </footer>
    </div>
  );
}
