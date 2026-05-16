import type { ReactNode } from "react";
import { BookOpen } from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";

interface CourseLayoutProps {
  children: ReactNode;
  navigate: CourseNavigate;
}

export function CourseLayout({ children, navigate }: CourseLayoutProps) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-ivory text-neutral-900 flex flex-col">
      <header className="border-b border-neutral-200/80 bg-surface/95 backdrop-blur-sm">
        <nav className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
          <CourseLink
            href="/"
            navigate={navigate}
            className="font-display font-bold text-neutral-900 text-lg tracking-tight"
          >
            AI for <span className="text-brand-500">Everyone</span>
          </CourseLink>

          <CourseLink
            href="/course"
            navigate={navigate}
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <BookOpen size={16} />
            Course
          </CourseLink>
        </nav>
      </header>

      <main className="flex-1 min-w-0">{children}</main>

      <footer className="border-t border-neutral-200/80 bg-surface px-5 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-neutral-500">
          <p className="font-medium text-neutral-700">AI for Everyone Course</p>
          <p>Read slowly, practise as you go, and keep what works.</p>
        </div>
      </footer>
    </div>
  );
}
