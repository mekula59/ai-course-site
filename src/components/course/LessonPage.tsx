import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ClipboardList,
  Copy,
  Lightbulb,
  ListChecks,
  MessageSquareText,
} from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";
import {
  getAdjacentLessons,
  getLocalizedLesson,
  getLessonPath,
  getModulePath,
  lessonReferences,
  type LessonReference,
} from "@/lib/course";
import { useLang } from "@/context/LanguageContext";

interface LessonPageProps {
  reference: LessonReference;
  navigate: CourseNavigate;
}

export function LessonPage({ reference, navigate }: LessonPageProps) {
  const [promptCopied, setPromptCopied] = useState(false);
  const { lang } = useLang();
  const { module, lesson, lessonIndex } = reference;
  const localizedLesson = getLocalizedLesson(lesson, lang);
  const { previous, next } = getAdjacentLessons(module.slug, lesson.slug);
  const previousTitle = previous
    ? getLocalizedLesson(previous.lesson, lang).title
    : "";
  const nextTitle = next ? getLocalizedLesson(next.lesson, lang).title : "";
  const hasPracticeTask = localizedLesson.practiceTask.trim().length > 0;
  const hasQuickCheck = localizedLesson.quickCheck.length > 0;
  const currentLessonNumber =
    lessonReferences.findIndex(
      ({ module: itemModule, lesson: itemLesson }) =>
        itemModule.slug === module.slug && itemLesson.slug === lesson.slug
    ) + 1;
  const progressPercent = (currentLessonNumber / lessonReferences.length) * 100;
  const labels =
    lang === "pidgin"
      ? {
          backToModule: "Back to module",
          lessonCount: "Lesson",
          keyTakeaway: "Wetin to remember",
          examplePrompt: "Prompt to try",
          practiceTask: "Try am now",
          quickCheck: "Quick check",
          copyPrompt: "Copy prompt",
          copied: "Copied",
          previous: "Previous",
          next: "Next",
          finish: "Finish",
          backToCourse: "Back to course home",
        }
      : {
          backToModule: "Back to module",
          lessonCount: "Lesson",
          keyTakeaway: "What to remember",
          examplePrompt: "Prompt to try",
          practiceTask: "Try it now",
          quickCheck: "Quick check",
          copyPrompt: "Copy prompt",
          copied: "Copied",
          previous: "Previous",
          next: "Next",
          finish: "Finish",
          backToCourse: "Back to course home",
        };

  const getSectionSpacing = (index: number) => {
    if (index === 0) return "";
    if (index === 2) return "mt-11 sm:mt-12";
    if (index === localizedLesson.content.length - 1) return "mt-10 sm:mt-11";
    return "mt-7 sm:mt-8";
  };

  const handleCopyPrompt = async () => {
    if (!navigator.clipboard) return;

    try {
      await navigator.clipboard.writeText(localizedLesson.examplePrompt);
      setPromptCopied(true);
      window.setTimeout(() => setPromptCopied(false), 1500);
    } catch {
      setPromptCopied(false);
    }
  };

  const renderParagraphs = (copy: string, className: string) => (
    <div className={className}>
      {copy.split("\n\n").map((paragraph, paragraphIndex) => (
        <p key={paragraphIndex}>{paragraph}</p>
      ))}
    </div>
  );

  return (
    <div className="px-5 py-8 sm:py-14">
      <article className="w-full max-w-2xl mx-auto">
        <CourseLink
          href={getModulePath(module.slug)}
          navigate={navigate}
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors mb-7"
        >
          <ArrowLeft size={16} />
          {labels.backToModule}
        </CourseLink>

        <header className="mb-9 sm:mb-11">
          <div className="mb-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
                Module {module.number}, Lesson {lessonIndex + 1}
              </p>
              <p className="text-xs font-medium text-neutral-500">
                {labels.lessonCount} {currentLessonNumber} of {lessonReferences.length}
              </p>
            </div>
            <div className="h-1 rounded-full bg-neutral-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-brand-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-neutral-900 mb-5 break-words max-w-[13ch] sm:max-w-none">
            {localizedLesson.title}
          </h1>
          <p className="text-base sm:text-lg leading-8 text-neutral-600 max-w-[34ch] sm:max-w-none">
            {localizedLesson.intro}
          </p>
        </header>

        <div>
          {localizedLesson.content.map((section, index) => (
            <section
              key={`${section.heading}-${index}`}
              className={getSectionSpacing(index)}
            >
              <h2 className="font-display text-xl sm:text-2xl font-bold leading-snug text-neutral-900 mb-2 max-w-[18ch] sm:max-w-none">
                {section.heading}
              </h2>
              {renderParagraphs(
                section.body,
                "space-y-4 text-base leading-8 text-neutral-700 max-w-[34ch] sm:max-w-none"
              )}

              {section.examples.length > 0 ? (
                <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 divide-y divide-neutral-200 overflow-hidden">
                  {section.examples.map((example) => (
                    <div key={example.label} className="p-4 sm:p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700 mb-2">
                        {example.label}
                      </p>
                      <p className="whitespace-pre-line text-sm leading-7 text-neutral-800">
                        {example.content}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-14 space-y-4" aria-label="Lesson workbook">
          <div className="bg-neutral-900 text-white rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-3">
              <MessageSquareText size={18} className="text-brand-400" />
              <h2 className="font-display text-lg font-bold text-white mr-auto">
                {labels.examplePrompt}
              </h2>
              <button
                type="button"
                onClick={handleCopyPrompt}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-neutral-100 hover:border-brand-300 hover:text-white transition-colors"
              >
                {promptCopied ? <Check size={14} /> : <Copy size={14} />}
                {promptCopied ? labels.copied : labels.copyPrompt}
              </button>
            </div>
            <pre className="whitespace-pre-wrap rounded-xl border border-white/10 bg-black/25 p-4 font-sans text-sm leading-7 text-neutral-100 max-w-[34ch] sm:max-w-none">
              {localizedLesson.examplePrompt}
            </pre>
          </div>

          {hasPracticeTask ? (
            <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <ClipboardList size={18} className="text-brand-600" />
                <h2 className="font-display text-lg font-bold text-neutral-900">
                  {labels.practiceTask}
                </h2>
              </div>
              {renderParagraphs(
                localizedLesson.practiceTask,
                "space-y-3 text-sm leading-7 text-neutral-700 max-w-[34ch] sm:max-w-none"
              )}
            </div>
          ) : null}

          {hasQuickCheck ? (
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <ListChecks size={18} className="text-brand-600" />
                <h2 className="font-display text-lg font-bold text-neutral-900">
                  {labels.quickCheck}
                </h2>
              </div>
              <ol className="list-decimal pl-5 space-y-2 text-sm leading-7 text-neutral-700 max-w-[34ch] sm:max-w-none">
                {localizedLesson.quickCheck.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          ) : null}

          <div className="bg-surface border border-neutral-200 rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb size={18} className="text-brand-500" />
              <h2 className="font-display text-lg font-bold text-neutral-900">
                {labels.keyTakeaway}
              </h2>
            </div>
            <p className="text-sm leading-7 text-neutral-700 max-w-[34ch] sm:max-w-none">
              {localizedLesson.keyTakeaway}
            </p>
          </div>
        </section>

        <nav
          className="mt-14 border-t border-neutral-200 pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3"
          aria-label="Lesson navigation"
        >
          {previous ? (
            <CourseLink
              href={getLessonPath(previous.module.slug, previous.lesson.slug)}
              navigate={navigate}
              className="group bg-surface border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 transition-all"
            >
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 mb-3">
                <ArrowLeft size={14} />
                {labels.previous}
              </span>
              <span className="font-display font-bold text-neutral-900 group-hover:text-brand-700 transition-colors">
                {previousTitle}
              </span>
            </CourseLink>
          ) : (
            <div className="hidden sm:block" />
          )}

          {next ? (
            <CourseLink
              href={getLessonPath(next.module.slug, next.lesson.slug)}
              navigate={navigate}
              className="group bg-surface border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 transition-all sm:text-right"
            >
              <span className="flex items-center gap-2 sm:justify-end text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 mb-3">
                {labels.next}
                <ArrowRight size={14} />
              </span>
              <span className="font-display font-bold text-neutral-900 group-hover:text-brand-700 transition-colors">
                {nextTitle}
              </span>
            </CourseLink>
          ) : (
            <CourseLink
              href="/course"
              navigate={navigate}
              className="group bg-surface border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 transition-all sm:text-right"
            >
              <span className="flex items-center gap-2 sm:justify-end text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 mb-3">
                {labels.finish}
                <ArrowRight size={14} />
              </span>
              <span className="font-display font-bold text-neutral-900 group-hover:text-brand-700 transition-colors">
                {labels.backToCourse}
              </span>
            </CourseLink>
          )}
        </nav>
      </article>
    </div>
  );
}
