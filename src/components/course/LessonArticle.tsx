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
  Search,
  TriangleAlert,
} from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";
import { QuickCheckList } from "@/components/course/QuickCheckList";
import { copyTextToClipboard } from "@/lib/clipboard";
import {
  getCoursePath,
  getLocalizedLesson,
  getLocalizedText,
  type Lesson,
  type LocalizedText,
} from "@/lib/course";
import { useLang } from "@/context/LanguageContext";

export interface LessonNavTarget {
  href: string;
  title: LocalizedText;
}

interface LessonArticleProps {
  lesson: Lesson;
  eyebrow: LocalizedText;
  progressLabel: LocalizedText;
  progressPercent: number;
  backHref: string;
  backLabel: LocalizedText;
  previous?: LessonNavTarget;
  next?: LessonNavTarget;
  finishHref?: string;
  navigate: CourseNavigate;
}

export function LessonArticle({
  lesson,
  eyebrow,
  progressLabel,
  progressPercent,
  backHref,
  backLabel,
  previous,
  next,
  finishHref = getCoursePath(),
  navigate,
}: LessonArticleProps) {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const { lang } = useLang();
  const localizedLesson = getLocalizedLesson(lesson, lang);
  const hasPracticeTask = localizedLesson.practiceTask.trim().length > 0;
  const hasQuickCheck = localizedLesson.quickCheck.length > 0;
  const labels =
    lang === "pidgin"
      ? {
          keyTakeaway: "Wetin to remember",
          examplePrompt: "Prompt to try",
          practiceTask: "Try am now",
          quickCheck: "Quick check",
          copyPrompt: "Copy prompt",
          copied: "Copied",
          before: "Before",
          improved: "Try this instead",
          didYouNotice: "You notice am?",
          commonMistake: "Common mistake",
          previous: "Lesson before this",
          next: "Next lesson",
          finish: "Finish",
          backToCourse: "Back to course home",
        }
      : {
          keyTakeaway: "What to remember",
          examplePrompt: "Prompt to try",
          practiceTask: "Try it now",
          quickCheck: "Quick check",
          copyPrompt: "Copy prompt",
          copied: "Copied",
          before: "Before",
          improved: "Try this instead",
          didYouNotice: "Did you notice?",
          commonMistake: "Common mistake",
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

  const handleCopyPrompt = async (copy: string, id: string) => {
    const copied = await copyTextToClipboard(copy);

    if (copied) {
      setCopiedPrompt(id);
      window.setTimeout(() => setCopiedPrompt(null), 1500);
    } else {
      setCopiedPrompt(null);
    }
  };

  const copyButton = (copy: string, id: string) => (
    <button
      type="button"
      onClick={() => handleCopyPrompt(copy, id)}
      className="inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-current/20 px-3 py-1.5 text-xs font-semibold transition-colors hover:border-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
    >
      {copiedPrompt === id ? <Check size={14} /> : <Copy size={14} />}
      {copiedPrompt === id ? labels.copied : labels.copyPrompt}
    </button>
  );

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
          href={backHref}
          navigate={navigate}
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors mb-7"
        >
          <ArrowLeft size={16} />
          {getLocalizedText(backLabel, lang)}
        </CourseLink>

        <header className="mb-9 sm:mb-11">
          <div className="mb-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
                {getLocalizedText(eyebrow, lang)}
              </p>
              <p className="text-xs font-medium text-neutral-500">
                {getLocalizedText(progressLabel, lang)}
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

        {localizedLesson.teaching ? (
          <section className="mb-10" aria-labelledby="lesson-question">
            <div className="rounded-2xl border border-brand-200 bg-brand-50 p-5 sm:p-6">
              <p id="lesson-question" className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
                {localizedLesson.teaching.question}
              </p>
              {renderParagraphs(
                localizedLesson.teaching.situation,
                "space-y-3 text-base leading-8 text-neutral-800"
              )}
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-neutral-200 bg-surface">
              <div className="border-b border-neutral-200 p-4 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-400">
                  {localizedLesson.teaching.comparison.label}
                </p>
              </div>
              <div className="grid md:grid-cols-2">
                <div className="border-b border-neutral-200 p-4 sm:p-5 md:border-b-0 md:border-r">
                  <div className="mb-3 flex items-center justify-between gap-3 text-neutral-500">
                    <span className="text-xs font-bold uppercase tracking-[0.14em]">
                      {labels.before}
                    </span>
                    {copyButton(localizedLesson.teaching.comparison.before, "before")}
                  </div>
                  <p className="whitespace-pre-line text-sm leading-7 text-neutral-700">
                    {localizedLesson.teaching.comparison.before}
                  </p>
                </div>
                <div className="bg-brand-50/60 p-4 sm:p-5">
                  <div className="mb-3 flex items-center justify-between gap-3 text-brand-700">
                    <span className="text-xs font-bold uppercase tracking-[0.14em]">
                      {labels.improved}
                    </span>
                    {copyButton(localizedLesson.teaching.comparison.after, "after")}
                  </div>
                  <p className="whitespace-pre-line text-sm leading-7 text-neutral-800">
                    {localizedLesson.teaching.comparison.after}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 border-t border-neutral-200 bg-neutral-50 p-4 sm:p-5">
                <Search className="mt-1 shrink-0 text-brand-600" size={18} />
                <p className="text-sm leading-7 text-neutral-700">
                  {localizedLesson.teaching.comparison.why}
                </p>
              </div>
              {localizedLesson.teaching.comparison.beforeResult &&
              localizedLesson.teaching.comparison.afterResult ? (
                <div className="border-t border-neutral-200 p-4 sm:p-5">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-neutral-400">
                    {localizedLesson.teaching.comparison.resultLabel}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-neutral-500">
                        {lang === "pidgin" ? "Answer wey fit come out" : "A possible weak response"}
                      </p>
                      <p className="whitespace-pre-line text-sm leading-7 text-neutral-700">
                        {localizedLesson.teaching.comparison.beforeResult}
                      </p>
                    </div>
                    <div className="rounded-xl border border-brand-100 bg-brand-50 p-4">
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-700">
                        {lang === "pidgin" ? "Better answer wey fit come out" : "A possible improved response"}
                      </p>
                      <p className="whitespace-pre-line text-sm leading-7 text-neutral-800">
                        {localizedLesson.teaching.comparison.afterResult}
                      </p>
                    </div>
                  </div>
                  {localizedLesson.teaching.comparison.resultExplanation ? (
                    <p className="mt-4 text-sm leading-7 text-neutral-600">
                      {localizedLesson.teaching.comparison.resultExplanation}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-brand-100 bg-brand-50 p-4 sm:p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
                  {labels.didYouNotice}
                </p>
                <p className="text-sm leading-7 text-neutral-700">
                  {localizedLesson.teaching.didYouNotice}
                </p>
              </div>
              <div className="lesson-mistake rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:p-5">
                <div className="lesson-mistake-heading mb-2 flex items-center gap-2 text-amber-800">
                  <TriangleAlert size={16} />
                  <p className="text-xs font-bold uppercase tracking-[0.14em]">
                    {labels.commonMistake}
                  </p>
                </div>
                <p className="lesson-mistake-body text-sm leading-7 text-neutral-700">
                  {localizedLesson.teaching.commonMistake}
                </p>
              </div>
            </div>
          </section>
        ) : null}

        {localizedLesson.diagram ? (
          <section
            aria-label={localizedLesson.diagram.label}
            className="mb-10 rounded-2xl border border-brand-100 bg-brand-50 p-4 sm:p-5"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
              {localizedLesson.diagram.label}
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              {localizedLesson.diagram.steps.map((step, index) => {
                const isLast = index === localizedLesson.diagram!.steps.length - 1;
                const connector = localizedLesson.diagram!.connectors[index] || "to";

                return (
                  <div key={step} className="contents">
                    <div className="flex-1 rounded-xl border border-brand-100 bg-surface px-4 py-3 text-sm font-semibold leading-6 text-neutral-800">
                      {step}
                    </div>
                    {!isLast ? (
                      <span className="px-1 text-center text-xs font-bold uppercase tracking-[0.12em] text-brand-600">
                        {connector}
                      </span>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        ) : null}

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
                onClick={() => handleCopyPrompt(localizedLesson.examplePrompt, "workbook")}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-neutral-100 hover:border-brand-300 hover:text-white transition-colors"
              >
                {copiedPrompt === "workbook" ? <Check size={14} /> : <Copy size={14} />}
                {copiedPrompt === "workbook" ? labels.copied : labels.copyPrompt}
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
              <QuickCheckList items={localizedLesson.quickCheck} lang={lang} />
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
              href={previous.href}
              navigate={navigate}
              className="group bg-surface border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 transition-all"
            >
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 mb-3">
                <ArrowLeft size={14} />
                {labels.previous}
              </span>
              <span className="font-display font-bold text-neutral-900 group-hover:text-brand-700 transition-colors">
                {getLocalizedText(previous.title, lang)}
              </span>
            </CourseLink>
          ) : (
            <div className="hidden sm:block" />
          )}

          {next ? (
            <CourseLink
              href={next.href}
              navigate={navigate}
              className="group bg-surface border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 transition-all sm:text-right"
            >
              <span className="flex items-center gap-2 sm:justify-end text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 mb-3">
                {labels.next}
                <ArrowRight size={14} />
              </span>
              <span className="font-display font-bold text-neutral-900 group-hover:text-brand-700 transition-colors">
                {getLocalizedText(next.title, lang)}
              </span>
            </CourseLink>
          ) : (
            <CourseLink
              href={finishHref}
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
