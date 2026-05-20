import { ArrowRight, BookOpen } from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";
import {
  courses,
  getCoursePath,
  getLessonReferences,
  getLocalizedText,
  plannedCoursePaths,
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
            "Start with the beginner course first. More practical AI courses still dey come for work, business, job search, school, content, community work, and coding.",
          availableNow: "Available now",
          comingNext: "Coming next",
          comingIntro:
            "After the beginner course, the next courses go dey inside clear paths: AI foundations, practical use, creative work, and building with AI.",
          modules: "modules",
          lessons: "main lessons",
          availableStatus: "Free course",
          plannedStatus: "Coming next",
          start: "Start Free Course",
          updates: "Get Course Updates",
          liveNote: "The beginner course na the only live course for now.",
        }
      : {
          eyebrow: "Course library",
          title: "Start here, then keep going",
          intro:
            "AI for Everyone starts with the live Beginner AI Course. Follow-up courses are planned for work, business, job search, school, content, community work, and coding.",
          availableNow: "Available now",
          comingNext: "Coming next",
          comingIntro:
            "After the beginner course, the next courses will sit inside clear learning paths: AI foundations, practical use, creative work, and building with AI.",
          modules: "modules",
          lessons: "core lessons",
          availableStatus: "Free course",
          plannedStatus: "Coming next",
          start: "Start Free Course",
          updates: "Get Course Updates",
          liveNote: "The beginner course is the only live course right now.",
        };

  return (
    <div className="px-5 py-10 sm:py-16">
      <div className="w-full max-w-5xl mx-auto">
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

        <section aria-labelledby="available-courses-heading">
          <div className="flex items-end justify-between gap-4 mb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-2">
                {labels.availableNow}
              </p>
              <h2
                id="available-courses-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-neutral-900"
              >
                {labels.availableNow}
              </h2>
            </div>
            <p className="hidden sm:block text-sm text-neutral-500">
              {labels.liveNote}
            </p>
          </div>

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
                          {labels.availableStatus}
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
          <p className="sm:hidden mt-4 text-sm leading-7 text-neutral-500">
            {labels.liveNote}
          </p>
        </section>

        <section
          aria-labelledby="planned-courses-heading"
          className="mt-12 sm:mt-14"
        >
          <div className="max-w-2xl mb-5 sm:mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-2">
              {labels.comingNext}
            </p>
            <h2
              id="planned-courses-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-3"
            >
              {labels.comingNext}
            </h2>
            <p className="text-sm sm:text-base leading-7 text-neutral-600">
              {labels.comingIntro}
            </p>
          </div>

          <div className="space-y-6">
            {plannedCoursePaths.map((path) => (
              <section
                key={path.slug}
                aria-labelledby={`${path.slug}-heading`}
                className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 sm:p-5"
              >
                <div className="mb-4 sm:mb-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600 mb-2">
                    {labels.plannedStatus}
                  </p>
                  <h3
                    id={`${path.slug}-heading`}
                    className="font-display text-xl sm:text-2xl font-bold text-neutral-900 mb-2"
                  >
                    {getLocalizedText(path.title, lang)}
                  </h3>
                  <p className="text-sm sm:text-base leading-7 text-neutral-600 max-w-2xl">
                    {getLocalizedText(path.description, lang)}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {path.courses.map((course) => (
                    <article
                      key={course.slug}
                      className="bg-surface border border-neutral-200 rounded-2xl p-5"
                    >
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="rounded-full bg-neutral-50 border border-neutral-200 px-3 py-1 text-xs font-bold text-neutral-500">
                          {labels.plannedStatus}
                        </span>
                        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                          {getLocalizedText(path.title, lang)}
                        </span>
                      </div>

                      <h4 className="font-display text-lg sm:text-xl font-bold text-neutral-900 mb-3">
                        {getLocalizedText(course.title, lang)}
                      </h4>
                      <p className="text-sm leading-7 text-neutral-600">
                        {getLocalizedText(course.description, lang)}
                      </p>

                      <a
                        href="/#course-updates"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                      >
                        {labels.updates}
                        <ArrowRight size={16} />
                      </a>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
