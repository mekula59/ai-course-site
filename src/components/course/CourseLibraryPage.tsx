import { ArrowRight, BookOpen } from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";
import {
  courses,
  getCoursePath,
  getLessonReferences,
  getLocalizedText,
} from "@/lib/course";
import { useLang } from "@/context/LanguageContext";

interface CourseLibraryPageProps {
  navigate: CourseNavigate;
}

export function CourseLibraryPage({ navigate }: CourseLibraryPageProps) {
  const { lang } = useLang();
  const labels =
    lang === "pidgin"
      ? {
          eyebrow: "Course list",
          title: "Choose course wey you wan start",
          intro:
            "Start with the beginner AI course. More courses go come later.",
          modules: "modules",
          lessons: "main lessons",
          start: "Start course",
          coming: "More courses go come later.",
        }
      : {
          eyebrow: "Course library",
          title: "Choose your course",
          intro:
            "Start with the beginner AI course. More courses will be added later.",
          modules: "modules",
          lessons: "core lessons",
          start: "Start course",
          coming: "More courses coming later.",
        };

  return (
    <div className="px-5 py-10 sm:py-16">
      <div className="w-full max-w-4xl mx-auto">
        <section className="w-full max-w-3xl mb-8 sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-4">
            {labels.eyebrow}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-neutral-900 mb-5">
            {labels.title}
          </h1>
          <p className="text-base sm:text-lg leading-8 text-neutral-600 max-w-2xl">
            {labels.intro}
          </p>
        </section>

        <div className="grid grid-cols-1 gap-4">
          {courses.map((course) => {
            const lessonCount = getLessonReferences(course).length;

            return (
              <CourseLink
                key={course.slug}
                href={getCoursePath(course.slug)}
                navigate={navigate}
                className="group block bg-surface border border-neutral-200 rounded-2xl p-5 sm:p-7 hover:border-brand-300 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 shrink-0">
                    <BookOpen size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                        {getLocalizedText(course.priceLabel, lang)}
                      </span>
                      <span className="rounded-full bg-neutral-50 border border-neutral-200 px-3 py-1 text-xs font-semibold text-neutral-600">
                        {getLocalizedText(course.level, lang)}
                      </span>
                      <span className="rounded-full bg-neutral-50 border border-neutral-200 px-3 py-1 text-xs font-semibold text-neutral-600">
                        {getLocalizedText(course.languageSupport, lang)}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
                      {getLocalizedText(course.title, lang)}
                    </h2>
                    <p className="text-sm sm:text-base leading-7 text-neutral-600 max-w-2xl">
                      {getLocalizedText(course.description, lang)}
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 text-sm text-neutral-500">
                      <span>
                        {course.modules.length} {labels.modules}
                      </span>
                      <span>
                        {lessonCount} {labels.lessons}
                      </span>
                    </div>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:text-brand-700 transition-colors">
                      {labels.start}
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </CourseLink>
            );
          })}
        </div>

        <p className="mt-6 text-sm leading-7 text-neutral-500">
          {labels.coming}
        </p>
      </div>
    </div>
  );
}
