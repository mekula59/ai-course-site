import { ArrowRight, BookOpen } from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";
import { Button } from "@/components/ui/Button";
import {
  courseFinalWrapUp,
  courseModules,
  courseStartHere,
  getCourseFinalWrapUpPath,
  getCourseStartPath,
  getLessonPath,
  getLocalizedText,
  getModulePath,
  lessonReferences,
} from "@/lib/course";
import { useLang } from "@/context/LanguageContext";

interface CourseHomeProps {
  navigate: CourseNavigate;
}

export function CourseHome({ navigate }: CourseHomeProps) {
  const { lang } = useLang();
  const firstLesson = lessonReferences[0];
  const startHereTitle = getLocalizedText(courseStartHere.lesson.title, lang);
  const finalWrapUpTitle = getLocalizedText(courseFinalWrapUp.lesson.title, lang);
  const labels =
    lang === "pidgin"
      ? {
          freeCourse: "Free Course",
          headline: "Learn how to use AI with simple, practical lessons wey easy to follow.",
          intro:
            "This course dey like workbook. Read one lesson, try the prompt, do the practice task, then move to the next lesson when you ready.",
          startHere: "Start from here",
          startHereDescription:
            "Begin with short guide to the course, the language switch, copyable prompts, and practice tasks.",
          startHereButton: "Start From Here",
          moduleOverview: "Module overview",
          allModules: "All modules",
          moduleOverviewDescription:
            "Start with Module 1, or open any module make you see the lessons.",
          module: "Module",
          of: "of",
          lessons: "lessons",
          openModule: "Open module",
          modules: "modules",
          coreLessons: "core lessons",
          startAndWrap: "Start Here + final wrap-up",
          promptPractice: "One prompt and one practice task for every lesson",
          firstCoreLesson: "First core lesson",
          moduleLessonOne: "Module 01, Lesson 1",
          firstCoreDescription:
            "Begin the first module after you finish Start Here.",
          openLessonOne: "Open Lesson 1",
          finalWrapUp: "Final wrap-up",
          finalWrapUpDescription:
            "Close the course with simple weekly AI routine wey you fit keep.",
          openWrapUp: "Open wrap-up",
          howToUse: "How to use this course",
          howToUseDescription:
            "Move in order the first time. Each lesson get prompt and small practice task, so you fit learn by doing, no be only reading.",
        }
      : {
          freeCourse: "Free Course",
          headline: "Learn to use AI with calm, practical lessons.",
          intro:
            "This course is built like a workbook. Read one lesson, try the prompt, complete the practice task, then move to the next lesson when you are ready.",
          startHere: "Start here",
          startHereDescription:
            "Begin with a short guide to the course, the language switch, copyable prompts, and practice tasks.",
          startHereButton: "Start Here",
          moduleOverview: "Module overview",
          allModules: "All modules",
          moduleOverviewDescription:
            "Start with Module 1, or open any module to see its lessons.",
          module: "Module",
          of: "of",
          lessons: "lessons",
          openModule: "Open module",
          modules: "modules",
          coreLessons: "core lessons",
          startAndWrap: "Start Here + final wrap-up",
          promptPractice: "One prompt and one practice task per lesson",
          firstCoreLesson: "First core lesson",
          moduleLessonOne: "Module 01, Lesson 1",
          firstCoreDescription:
            "Begin the first module after you finish Start Here.",
          openLessonOne: "Open Lesson 1",
          finalWrapUp: "Final wrap-up",
          finalWrapUpDescription:
            "Close the course with a simple weekly AI routine you can keep.",
          openWrapUp: "Open wrap-up",
          howToUse: "How to use this course",
          howToUseDescription:
            "Move in order the first time. Each lesson has a prompt and a small practice task, so you can learn by doing instead of only reading.",
        };

  return (
    <div className="px-5 py-10 sm:py-16">
      <div className="w-full max-w-4xl mx-auto">
        <section className="w-full max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-4">
            {labels.freeCourse}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-neutral-900 mb-5 break-words max-w-[13ch] sm:max-w-none">
            {labels.headline}
          </h1>
          <p className="text-base sm:text-lg leading-8 text-neutral-600 max-w-[33ch] sm:max-w-2xl">
            {labels.intro}
          </p>
        </section>

        <section className="mt-8 bg-surface border border-neutral-200 rounded-2xl p-5 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-400 mb-2">
                {labels.startHere}
              </p>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                {startHereTitle}
              </h2>
              <p className="text-sm sm:text-base leading-7 text-neutral-600 max-w-[32ch] sm:max-w-none">
                {labels.startHereDescription}
              </p>
            </div>

            <Button asChild size="md" className="w-full sm:w-auto">
              <CourseLink href={getCourseStartPath()} navigate={navigate}>
                {labels.startHereButton}
                <ArrowRight size={18} className="ml-2" />
              </CourseLink>
            </Button>
          </div>
        </section>

        <section aria-labelledby="course-modules" className="mt-8 sm:mt-10">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-2">
                {labels.moduleOverview}
              </p>
              <h2
                id="course-modules"
                className="font-display text-2xl sm:text-3xl font-bold text-neutral-900"
              >
                {labels.allModules}
              </h2>
              <p className="text-sm sm:text-base leading-7 text-neutral-600 mt-2 max-w-[36ch] sm:max-w-xl">
                {labels.moduleOverviewDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {courseModules.map((module, moduleIndex) => {
              const moduleTitle = getLocalizedText(module.title, lang);
              const moduleDescription = getLocalizedText(module.description, lang);

              return (
                <CourseLink
                  key={module.slug}
                  href={getModulePath(module.slug)}
                  navigate={navigate}
                  className="group block bg-surface border border-neutral-200 rounded-2xl p-5 sm:p-6 hover:border-brand-300 transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-display font-bold shrink-0">
                      {module.number}
                    </div>
                    <span className="rounded-full bg-neutral-50 border border-neutral-200 px-3 py-1 text-xs font-semibold text-neutral-500">
                      {module.lessons.length} {labels.lessons}
                    </span>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 mb-2">
                    {labels.module} {moduleIndex + 1} {labels.of}{" "}
                    {courseModules.length}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                    {moduleTitle}
                  </h3>
                  <p className="text-sm sm:text-base leading-7 text-neutral-600 max-w-[34ch] sm:max-w-none">
                    {moduleDescription}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:text-brand-700 transition-colors">
                    {labels.openModule}
                    <ArrowRight size={16} />
                  </span>
                </CourseLink>
              );
            })}
          </div>
        </section>

        <div className="flex flex-wrap gap-x-5 gap-y-2 border-y border-neutral-200/80 py-4 my-8 text-sm text-neutral-500">
          <span>
            {courseModules.length} {labels.modules}
          </span>
          <span>
            {lessonReferences.length} {labels.coreLessons}
          </span>
          <span>{labels.startAndWrap}</span>
          <span>{labels.promptPractice}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {firstLesson && (
            <CourseLink
              href={getLessonPath(firstLesson.module.slug, firstLesson.lesson.slug)}
              navigate={navigate}
              className="group block bg-surface border border-neutral-200 rounded-2xl p-5 sm:p-6 hover:border-brand-300 transition-all"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-400 mb-2">
                {labels.firstCoreLesson}
              </p>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                {labels.moduleLessonOne}
              </h2>
              <p className="text-sm sm:text-base leading-7 text-neutral-600 max-w-[32ch] sm:max-w-none">
                {labels.firstCoreDescription}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:text-brand-700 transition-colors">
                {labels.openLessonOne}
                <ArrowRight size={16} />
              </span>
            </CourseLink>
          )}

          <CourseLink
            href={getCourseFinalWrapUpPath()}
            navigate={navigate}
            className="group block bg-surface border border-neutral-200 rounded-2xl p-5 sm:p-6 hover:border-brand-300 transition-all"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-400 mb-2">
              {labels.finalWrapUp}
            </p>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
              {finalWrapUpTitle}
            </h2>
            <p className="text-sm sm:text-base leading-7 text-neutral-600 max-w-[32ch] sm:max-w-none">
              {labels.finalWrapUpDescription}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:text-brand-700 transition-colors">
              {labels.openWrapUp}
              <ArrowRight size={16} />
            </span>
          </CourseLink>
        </div>

        <section className="mt-10 bg-neutral-900 text-white rounded-2xl p-5 sm:p-7">
          <div className="flex items-start gap-4">
            <BookOpen className="text-brand-400 shrink-0 mt-1" size={22} />
            <div>
              <h2 className="font-display text-xl font-bold text-white mb-2">
                {labels.howToUse}
              </h2>
              <p className="text-sm leading-7 text-neutral-300">
                {labels.howToUseDescription}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
