import { ArrowRight, BookOpen } from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";
import { Button } from "@/components/ui/Button";
import {
  beginnerCourse,
  getCourseFinalWrapUpPath,
  getCourseStartPath,
  getLessonPath,
  getLessonReferences,
  getLocalizedText,
  getModulePath,
  type Course,
} from "@/lib/course";
import { useLang } from "@/context/LanguageContext";

interface CourseHomeProps {
  course?: Course;
  navigate: CourseNavigate;
}

export function CourseHome({ course = beginnerCourse, navigate }: CourseHomeProps) {
  const { lang } = useLang();
  const courseLessonReferences = getLessonReferences(course);
  const firstLesson = courseLessonReferences[0];
  const courseTitle = getLocalizedText(course.title, lang);
  const courseDescription = getLocalizedText(course.description, lang);
  const startHereTitle = getLocalizedText(course.startHere.lesson.title, lang);
  const finalWrapUpTitle = getLocalizedText(
    course.finalWrapUp.lesson.title,
    lang
  );
  const labels =
    lang === "pidgin"
      ? {
          freeCourse: "Free course",
          startHere: "Start from here",
          startHereDescription:
            "Start with small guide to the course, language switch, copyable prompts, and practice tasks.",
          startHereButton: "Start From Here",
          moduleOverview: "Course map",
          allModules: "All modules",
          moduleOverviewDescription:
            "Start with Module 1, or open any module make you see wetin dey inside.",
          module: "Module",
          of: "of",
          lessons: "lessons",
          openModule: "Open module",
          modules: "modules",
          coreLessons: "main lessons",
          startAndWrap: "Start From Here + final wrap-up",
          promptPractice: "One prompt and one practice task for every lesson",
          journey: "Course journey",
          journeyPath:
            "Start From Here -> Module 1 -> Module 2 -> Module 3 -> Module 4 -> Final Wrap-up",
          firstCoreLesson: "First main lesson",
          moduleLessonOne: "Module 01, Lesson 1",
          firstCoreDescription:
            "Begin the first module after you finish Start Here.",
          openLessonOne: "Open Lesson 1",
          finalWrapUp: "Final wrap-up",
          finalWrapUpDescription:
            "Use this after Module 4 to build simple weekly AI routine wey you fit keep.",
          finalWrapUpNote: "Use am after you finish the 4 modules.",
          openWrapUp: "Open wrap-up",
          howToUse: "How to use this course",
          howToUseDescription:
            "Move in order the first time. Each lesson get prompt and small practice task, so you fit learn by doing, no be only reading.",
        }
      : {
          freeCourse: "Free Course",
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
          journey: "Course journey",
          journeyPath:
            "Start Here -> Module 1 -> Module 2 -> Module 3 -> Module 4 -> Final Wrap-up",
          firstCoreLesson: "First core lesson",
          moduleLessonOne: "Module 01, Lesson 1",
          firstCoreDescription:
            "Begin the first module after you finish Start Here.",
          openLessonOne: "Open Lesson 1",
          finalWrapUp: "Final wrap-up",
          finalWrapUpDescription:
            "Use this after Module 4 to build your simple weekly AI routine.",
          finalWrapUpNote: "Best after you complete the 4 modules.",
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
            {courseTitle}
          </h1>
          <p className="text-base sm:text-lg leading-8 text-neutral-600 max-w-[33ch] sm:max-w-2xl">
            {courseDescription}
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
              <CourseLink href={getCourseStartPath(course)} navigate={navigate}>
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
            {course.modules.map((module, moduleIndex) => {
              const moduleTitle = getLocalizedText(module.title, lang);
              const moduleDescription = getLocalizedText(module.description, lang);

              return (
                <CourseLink
                  key={module.slug}
                  href={getModulePath(module.slug, course.slug)}
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
                    {course.modules.length}
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
            {course.modules.length} {labels.modules}
          </span>
          <span>
            {courseLessonReferences.length} {labels.coreLessons}
          </span>
          <span>{labels.startAndWrap}</span>
          <span>{labels.promptPractice}</span>
        </div>

        <section className="mb-8 bg-neutral-50 border border-neutral-200 rounded-2xl p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-2">
            {labels.journey}
          </p>
          <p className="text-sm sm:text-base leading-7 text-neutral-600">
            {labels.journeyPath}
          </p>
        </section>

        <div className="grid grid-cols-1 gap-3">
          {firstLesson && (
            <CourseLink
              href={getLessonPath(
                firstLesson.module.slug,
                firstLesson.lesson.slug,
                course.slug
              )}
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

        <section className="mt-4 border border-neutral-200 rounded-2xl p-5 sm:p-6 bg-surface">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-400 mb-2">
                {labels.finalWrapUp}
              </p>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                {finalWrapUpTitle}
              </h2>
              <p className="text-sm sm:text-base leading-7 text-neutral-600 max-w-[34ch] sm:max-w-xl">
                {labels.finalWrapUpDescription}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
                {labels.finalWrapUpNote}
              </p>
            </div>

            <CourseLink
              href={getCourseFinalWrapUpPath(course)}
              navigate={navigate}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-5 py-3 text-sm font-semibold text-neutral-700 hover:border-brand-300 hover:text-brand-700 transition-colors"
            >
              {labels.openWrapUp}
              <ArrowRight size={16} />
            </CourseLink>
          </div>
        </section>
      </div>
    </div>
  );
}
