import { ArrowRight, BookOpen } from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";
import { Button } from "@/components/ui/Button";
import {
  courseModules,
  getLessonPath,
  getModulePath,
  lessonReferences,
} from "@/lib/course";

interface CourseHomeProps {
  navigate: CourseNavigate;
}

export function CourseHome({ navigate }: CourseHomeProps) {
  const firstLesson = lessonReferences[0];

  return (
    <div className="px-5 py-10 sm:py-16">
      <div className="w-full max-w-4xl mx-auto">
        <section className="w-full max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-4">
            Free Course
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-neutral-900 mb-5 break-words max-w-[13ch] sm:max-w-none">
            Learn to use AI with calm, practical lessons.
          </h1>
          <p className="text-base sm:text-lg leading-8 text-neutral-600 max-w-[33ch] sm:max-w-2xl">
            This course is built like a workbook. Read one lesson, try the prompt,
            complete the practice task, then move to the next lesson when you are ready.
          </p>
        </section>

        <section aria-labelledby="course-modules" className="mt-8 sm:mt-10">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-2">
                Module overview
              </p>
              <h2
                id="course-modules"
                className="font-display text-2xl sm:text-3xl font-bold text-neutral-900"
              >
                All modules
              </h2>
              <p className="text-sm sm:text-base leading-7 text-neutral-600 mt-2 max-w-[36ch] sm:max-w-xl">
                Start with Module 1, or open any module to see its lessons.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {courseModules.map((module, moduleIndex) => (
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
                    {module.lessons.length} lessons
                  </span>
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 mb-2">
                  Module {moduleIndex + 1} of {courseModules.length}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                  {module.title}
                </h3>
                <p className="text-sm sm:text-base leading-7 text-neutral-600 max-w-[34ch] sm:max-w-none">
                  {module.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:text-brand-700 transition-colors">
                  Open module
                  <ArrowRight size={16} />
                </span>
              </CourseLink>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-x-5 gap-y-2 border-y border-neutral-200/80 py-4 my-8 text-sm text-neutral-500">
          <span>{courseModules.length} modules</span>
          <span>{lessonReferences.length} lessons</span>
          <span>One prompt and one practice task per lesson</span>
        </div>

        <section className="bg-surface border border-neutral-200 rounded-2xl p-5 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-400 mb-2">
                Start here
              </p>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                Module 01, Lesson 1
              </h2>
              <p className="text-sm sm:text-base leading-7 text-neutral-600 max-w-[32ch] sm:max-w-none">
                Begin with the basics, then move through the lessons in order.
              </p>
            </div>

            {firstLesson && (
              <Button asChild size="md" className="w-full sm:w-auto">
                <CourseLink
                  href={getLessonPath(firstLesson.module.slug, firstLesson.lesson.slug)}
                  navigate={navigate}
                >
                  Start Lesson 1
                  <ArrowRight size={18} className="ml-2" />
                </CourseLink>
              </Button>
            )}
          </div>
        </section>

        <section className="mt-10 bg-neutral-900 text-white rounded-2xl p-5 sm:p-7">
          <div className="flex items-start gap-4">
            <BookOpen className="text-brand-400 shrink-0 mt-1" size={22} />
            <div>
              <h2 className="font-display text-xl font-bold text-white mb-2">
                How to use this course
              </h2>
              <p className="text-sm leading-7 text-neutral-300">
                Move in order the first time. Each lesson has a prompt and a small
                practice task, so you can learn by doing instead of only reading.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
