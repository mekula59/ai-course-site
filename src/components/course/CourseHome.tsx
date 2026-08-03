import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";
import { Button } from "@/components/ui/Button";
import {
  beginnerCourse,
  getCourseFinalWrapUpPath,
  getCourseStartPath,
  getLessonPath,
  getLessonReferences,
  getLocalizedLesson,
  getLocalizedText,
  getModulePath,
  type Course,
} from "@/lib/course";
import { useLang } from "@/context/LanguageContext";

interface CourseHomeProps {
  course?: Course;
  navigate: CourseNavigate;
}

export function CourseHome({
  course = beginnerCourse,
  navigate,
}: CourseHomeProps) {
  const { lang } = useLang();
  const courseLessonReferences = getLessonReferences(course);
  const firstLesson = courseLessonReferences[0];
  const courseTitle = getLocalizedText(course.title, lang);
  const courseDescription = getLocalizedText(course.description, lang);
  const startHereTitle = getLocalizedText(course.startHere.lesson.title, lang);
  const labels =
    lang === "pidgin"
      ? {
          freeCourse: "Free course",
          heroIntro:
            "A calm beginner path for learning how to use AI chat tools in real work, school, business, and everyday matter.",
          startHereButton: "Start From Here",
          viewLearningPath: "See learning path",
          modules: "modules",
          languageSupport: "English + Pidgin",
          courseAtGlance: "Course at a glance",
          noLogin: "No login needed",
          methodLabel: "Learning method",
          journey: "Learning path",
          journeyDescription:
            "Follow the course in order the first time. Start Here prepares you, the modules build the skill, and the wrap-up helps you keep using wetin you learn.",
          startLabel: "Start",
          finalLabel: "Final step",
          finalWrapUpTitle: "Final Wrap-up",
          finalNote: "You don reach the end. Use this part after Module 4.",
          module: "Module",
          lessons: "lessons",
          openModule: "Open module",
          methodTitle: "Read, try, check, use",
          methodDescription:
            "The course no stop for reading. Every lesson go give you one thing to understand, one prompt to test, and one small task to use in real life.",
          outcomes: "Wetin you go fit do",
          outcomesDescription:
            "By the end, you suppose feel clearer about how to use AI without guessing your way through every tool.",
          ctaTitle: "You ready to start?",
          ctaBody:
            "Start with the short guide, then move into Module 1. No login, no tech background, just one lesson at a time.",
          ctaButton: "Start From Here",
          ctaSecondary: "Open Module 1",
          methodItems: [
            {
              label: "Read",
              body: "Learn one idea with simple examples.",
            },
            {
              label: "Try",
              body: "Use the copyable prompt inside an AI chat tool.",
            },
            {
              label: "Check",
              body: "Answer small questions so the lesson no just pass you by.",
            },
            {
              label: "Use",
              body: "Apply the answer to one real task from your life.",
            },
          ],
          outcomesList: [
            "Understand wetin AI chat tools are and how dem respond.",
            "Ask clearer questions and get more useful answers.",
            "Use AI for writing, summaries, planning, and daily tasks.",
            "Check answers before you trust or share them.",
            "Protect private information when you ask AI for help.",
            "Build simple AI habit wey you fit keep using.",
          ],
        }
      : {
          freeCourse: "Free course",
          heroIntro:
            "A calm beginner path for learning how to use AI chat tools in real work, school, business, and everyday tasks.",
          startHereButton: "Start Here",
          viewLearningPath: "View learning path",
          modules: "modules",
          languageSupport: "English + Pidgin",
          courseAtGlance: "Course at a glance",
          noLogin: "No login needed",
          methodLabel: "Learning method",
          journey: "Learning path",
          journeyDescription:
            "Follow the course in order the first time. Start Here prepares you, the modules build the skill, and the wrap-up helps you keep using what you learn.",
          startLabel: "Start",
          finalLabel: "Final step",
          finalWrapUpTitle: "Final Wrap-up",
          finalNote: "You made it to the end. Use this part after Module 4.",
          module: "Module",
          lessons: "lessons",
          openModule: "Open module",
          methodTitle: "Read, try, check, use",
          methodDescription:
            "The course does not stop at reading. Every lesson gives you one thing to understand, one prompt to test, and one small task to use in real life.",
          outcomes: "What you'll be able to do",
          outcomesDescription:
            "By the end, you should feel clearer about how to use AI without guessing your way through every tool.",
          ctaTitle: "Ready to start?",
          ctaBody:
            "Start with the short guide, then move into Module 1. No login, no tech background, just one lesson at a time.",
          ctaButton: "Start Here",
          ctaSecondary: "Open Module 1",
          methodItems: [
            {
              label: "Read",
              body: "Learn one idea with simple examples.",
            },
            {
              label: "Try",
              body: "Use the copyable prompt inside an AI chat tool.",
            },
            {
              label: "Check",
              body: "Answer small questions so the lesson does not just pass by.",
            },
            {
              label: "Use",
              body: "Apply the answer to one real task from your life.",
            },
          ],
          outcomesList: [
            "Understand what AI chat tools are and how they respond.",
            "Ask clearer questions and get more useful answers.",
            "Use AI for writing, summaries, planning, and daily tasks.",
            "Check answers before you trust or share them.",
            "Protect private information when you ask AI for help.",
            "Build a simple AI habit you can keep using.",
          ],
        };

  return (
    <div className="px-5 py-10 sm:py-16">
      <div className="w-full max-w-5xl mx-auto">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.75fr)] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-4">
              {labels.freeCourse}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900 mb-5 break-words">
              {courseTitle}
            </h1>
            <p className="text-base sm:text-lg leading-8 text-neutral-600 max-w-2xl">
              {courseDescription}
            </p>
            <p className="mt-4 text-sm sm:text-base leading-7 text-neutral-600 max-w-2xl">
              {labels.heroIntro}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button asChild size="md" className="w-full sm:w-auto">
                <CourseLink href={getCourseStartPath(course)} navigate={navigate}>
                  {labels.startHereButton}
                  <ArrowRight size={18} className="ml-2" />
                </CourseLink>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="md"
                className="w-full sm:w-auto border border-neutral-200"
              >
                <a href="#course-path">{labels.viewLearningPath}</a>
              </Button>
            </div>
          </div>

          <aside className="bg-surface border border-neutral-200 rounded-2xl p-5 sm:p-6">
            <h2 className="font-display text-2xl font-bold text-neutral-900 mb-3">
              {labels.courseAtGlance}
            </h2>
            <ul className="divide-y divide-neutral-200 text-sm text-neutral-700">
              <li className="py-3">
                <strong className="font-display text-neutral-900">
                  {course.modules.length} {labels.modules}
                </strong>
              </li>
              <li className="py-3">
                <strong className="font-display text-neutral-900">
                  {courseLessonReferences.length} {labels.lessons}
                </strong>
              </li>
              <li className="py-3 font-semibold text-neutral-900">{labels.languageSupport}</li>
              <li className="py-3 font-semibold text-neutral-900">{labels.freeCourse}</li>
              <li className="pt-3 font-semibold text-neutral-900">{labels.noLogin}</li>
            </ul>
          </aside>
        </section>

        <section id="course-path" aria-labelledby="course-path-heading" className="mt-12 scroll-mt-24 sm:mt-16">
          <div className="max-w-2xl mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-2">
              {labels.journey}
            </p>
            <h2
              id="course-path-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-3"
            >
              {labels.journey}
            </h2>
            <p className="text-sm sm:text-base leading-7 text-neutral-600">
              {labels.journeyDescription}
            </p>
          </div>

          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <li className="sm:col-span-2">
              <CourseLink
                href={getCourseStartPath(course)}
                navigate={navigate}
                className="group block bg-brand-50 border border-brand-100 rounded-2xl p-5 sm:p-6 hover:border-brand-300 transition-all"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700 mb-2">
                  {labels.startLabel}
                </p>
                <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
                  {startHereTitle}
                </h3>
                <p className="text-sm leading-7 text-neutral-700">
                  {getLocalizedText(course.startHere.lesson.intro, lang)}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                  {labels.startHereButton}
                  <ArrowRight size={16} />
                </span>
              </CourseLink>
            </li>

            {course.modules.map((module, moduleIndex) => {
                  const moduleTitle = getLocalizedText(module.title, lang);
                  const moduleDescription = getLocalizedText(module.description, lang);

                  return (
                    <li key={module.slug}>
                      <CourseLink
                        href={getModulePath(module.slug, course.slug)}
                        navigate={navigate}
                        className="group block h-full bg-surface border border-neutral-200 rounded-2xl p-5 sm:p-6 hover:border-brand-300 transition-all"
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
                          {labels.module} {moduleIndex + 1}
                        </p>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                          {moduleTitle}
                        </h3>
                        <p className="text-sm sm:text-base leading-7 text-neutral-600">
                          {moduleDescription}
                        </p>

                        <ul className="mt-5 space-y-2">
                          {module.lessons.map((lesson) => {
                            const localizedLesson = getLocalizedLesson(lesson, lang);

                            return (
                              <li
                                key={lesson.slug}
                                className="text-sm leading-6 text-neutral-600 flex gap-2"
                              >
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0" />
                                <span>{localizedLesson.title}</span>
                              </li>
                            );
                          })}
                        </ul>

                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:text-brand-700 transition-colors">
                          {labels.openModule}
                          <ArrowRight size={16} />
                        </span>
                      </CourseLink>
                    </li>
                  );
            })}

            <li className="sm:col-span-2">
              <CourseLink
                href={getCourseFinalWrapUpPath(course)}
                navigate={navigate}
                className="group block h-full bg-neutral-900 text-white rounded-2xl p-5 hover:bg-neutral-800 transition-all"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-300 mb-2">
                  {labels.finalLabel}
                </p>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {labels.finalWrapUpTitle}
                </h3>
                <p className="text-sm leading-7 text-neutral-300">
                  {labels.finalNote}
                </p>
              </CourseLink>
            </li>
          </ol>
        </section>

        <section className="mt-12 sm:mt-16 bg-neutral-50 border border-neutral-200 rounded-2xl p-5 sm:p-7">
          <div className="max-w-2xl mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-2">
              {labels.methodLabel}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
              {labels.methodTitle}
            </h2>
            <p className="text-sm sm:text-base leading-7 text-neutral-600">
              {labels.methodDescription}
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {labels.methodItems.map((item, index) => (
              <li
                key={item.label}
                className="bg-surface border border-neutral-200 rounded-2xl p-4 sm:p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-sm font-display font-bold text-brand-600">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-lg font-bold text-neutral-900">
                    {item.label}
                  </h3>
                </div>
                <p className="text-sm leading-7 text-neutral-600">{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 sm:mt-16">
          <div className="max-w-2xl mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-2">
              {labels.outcomes}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
              {labels.outcomes}
            </h2>
            <p className="text-sm sm:text-base leading-7 text-neutral-600">
              {labels.outcomesDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {labels.outcomesList.map((outcome) => (
              <div
                key={outcome}
                className="flex gap-3 bg-surface border border-neutral-200 rounded-2xl p-4 sm:p-5"
              >
                <CheckCircle2
                  size={18}
                  className="mt-1 shrink-0 text-brand-600"
                />
                <p className="text-sm sm:text-base leading-7 text-neutral-700">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 sm:mt-16 bg-neutral-900 text-white rounded-2xl p-5 sm:p-7">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={20} className="text-brand-400" />
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-300">
                  {labels.freeCourse}
                </p>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                {labels.ctaTitle}
              </h2>
              <p className="text-sm sm:text-base leading-7 text-neutral-300">
                {labels.ctaBody}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
              <CourseLink
                href={getCourseStartPath(course)}
                navigate={navigate}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
              >
                {labels.ctaButton}
                <ArrowRight size={16} />
              </CourseLink>
              {firstLesson ? (
                <CourseLink
                  href={getLessonPath(
                    firstLesson.module.slug,
                    firstLesson.lesson.slug,
                    course.slug
                  )}
                  navigate={navigate}
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-neutral-100 hover:border-brand-300 hover:text-white transition-colors"
                >
                  {labels.ctaSecondary}
                </CourseLink>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
