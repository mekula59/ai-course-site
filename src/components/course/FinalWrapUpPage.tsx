import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookmarkCheck,
  CalendarDays,
  Check,
  CheckCircle2,
  ClipboardList,
  Copy,
  Lightbulb,
  MessageSquareText,
  Sparkles,
} from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";
import { QuickCheckList } from "@/components/course/QuickCheckList";
import { copyTextToClipboard } from "@/lib/clipboard";
import {
  beginnerCourse,
  getAdjacentStandaloneCourseSteps,
  getCoursePath,
  getCourseStepCount,
  getLocalizedLesson,
  getLocalizedText,
  getStandaloneCourseStepNumber,
  type Course,
} from "@/lib/course";
import { useLang } from "@/context/LanguageContext";

interface FinalWrapUpPageProps {
  course?: Course;
  navigate: CourseNavigate;
}

function Paragraphs({ copy, className }: { copy: string; className: string }) {
  return (
    <div className={className}>
      {copy.split("\n\n").map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export function FinalWrapUpPage({
  course = beginnerCourse,
  navigate,
}: FinalWrapUpPageProps) {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const isPromptPlaybook = course.slug === "prompting-basics";
  const { lang } = useLang();
  const lesson = getLocalizedLesson(course.finalWrapUp.lesson, lang);
  const currentStepNumber = getStandaloneCourseStepNumber(
    course.finalWrapUp.slug,
    course
  );
  const totalCourseSteps = getCourseStepCount(course);
  const progressPercent = (currentStepNumber / totalCourseSteps) * 100;
  const { previous } = getAdjacentStandaloneCourseSteps(
    course.finalWrapUp.slug,
    course
  );
  const sections = lesson.content;
  const canDoNow = sections[0];
  const routine = sections[1];
  const weeklyPlan = sections[2];
  const promptsToKeep = sections[3];
  const improvePrompts = sections[4];
  const nextStep = sections[5];
  const previousTitle = previous ? getLocalizedText(previous.title, lang) : "";
  const labels =
    lang === "pidgin"
      ? {
          backToCourse: "Go back to course",
          stepLabel: `Step ${currentStepNumber} of ${totalCourseSteps}`,
          complete: "Course done",
          summary: isPromptPlaybook ? "Quick reference" : "Wetin don change",
          routine: isPromptPlaybook ? "Guides" : "Simple routine",
          weeklyPlan: isPromptPlaybook ? "When answer go wrong" : "Practice plan for the week",
          prompts: isPromptPlaybook ? "Safety check" : "Prompts to keep",
          finalPrompt: isPromptPlaybook ? "Copy all 22 prompts" : "Final prompt",
          capstone: "Worked example",
          promptsHeading: "Prompts by category",
          copyPrompt: "Copy prompt",
          copied: "Copied",
          nextStep: isPromptPlaybook ? "Practice routine" : "Next thing to do",
          quickCheck: "Final quick check",
          remember: "Wetin to remember",
          previous: "Lesson before this",
          finish: "Finish",
          backHome: "Back to course home",
        }
      : {
          backToCourse: "Back to course",
          stepLabel: `Step ${currentStepNumber} of ${totalCourseSteps}`,
          complete: "Course complete",
          summary: isPromptPlaybook ? "Quick reference" : "What changed",
          routine: isPromptPlaybook ? "Guides" : "Simple routine",
          weeklyPlan: isPromptPlaybook ? "When answers go wrong" : "Weekly practice plan",
          prompts: isPromptPlaybook ? "Safety check" : "Prompts to keep",
          finalPrompt: isPromptPlaybook ? "Copy all 22 prompts" : "Final prompt",
          capstone: "Worked example",
          promptsHeading: "Prompts by category",
          copyPrompt: "Copy prompt",
          copied: "Copied",
          nextStep: isPromptPlaybook ? "Practice routine" : "Next step",
          quickCheck: "Final quick check",
          remember: "What to remember",
          previous: "Previous",
          finish: "Finish",
          backHome: "Back to course home",
        };

  const handleCopyPrompt = async (copy = lesson.examplePrompt, id = "all") => {
    const copied = await copyTextToClipboard(copy);

    if (copied) {
      setCopiedPrompt(id);
      window.setTimeout(() => setCopiedPrompt(null), 1500);
    } else {
      setCopiedPrompt(null);
    }
  };

  return (
    <div className="px-5 py-8 sm:py-14">
      <article className="w-full max-w-5xl mx-auto">
        <CourseLink
          href={getCoursePath(course.slug)}
          navigate={navigate}
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors mb-7"
        >
          <ArrowLeft size={16} />
          {labels.backToCourse}
        </CourseLink>

        <header className="mb-8 sm:mb-12">
          <div className="mb-6 max-w-2xl">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
                {getLocalizedText(course.finalWrapUp.eyebrow, lang)}
              </p>
              <p className="text-xs font-medium text-neutral-500">
                {labels.stepLabel}
              </p>
            </div>
            <div className="h-1 rounded-full bg-neutral-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-brand-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-700 mb-5">
                <Sparkles size={14} />
                {labels.complete}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight text-neutral-900 mb-5">
                {lesson.title}
              </h1>
              <p className="text-base sm:text-lg leading-8 text-neutral-600 max-w-2xl">
                {lesson.intro}
              </p>
            </div>

            {nextStep ? (
              <aside className="bg-neutral-900 text-white rounded-2xl p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-brand-400" />
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-300">
                    {labels.nextStep}
                  </p>
                </div>
                <h2 className="font-display text-xl font-bold text-white mb-3">
                  {nextStep.heading}
                </h2>
                <Paragraphs
                  copy={nextStep.body}
                  className="space-y-3 text-sm leading-7 text-neutral-200"
                />
              </aside>
            ) : null}
          </div>
        </header>

        <div className="space-y-10 sm:space-y-12">
          {canDoNow ? (
            <section>
              <div className="max-w-2xl mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-2">
                  {labels.summary}
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
                  {canDoNow.heading}
                </h2>
                <Paragraphs
                  copy={canDoNow.body}
                  className="space-y-3 text-base leading-8 text-neutral-700"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {canDoNow.examples.map((item) => (
                  <div
                    key={item.label}
                    className="bg-surface border border-neutral-200 rounded-2xl p-4 sm:p-5"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 size={17} className="text-brand-600" />
                      <h3 className="font-display text-base font-bold text-neutral-900">
                        {item.label}
                      </h3>
                    </div>
                    <p className="text-sm leading-7 text-neutral-600">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {routine ? (
            <section>
              <div className="max-w-2xl mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-2">
                  {labels.routine}
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
                  {routine.heading}
                </h2>
                <Paragraphs
                  copy={routine.body}
                  className="space-y-3 text-base leading-8 text-neutral-700"
                />
              </div>

              <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {routine.examples.map((item, index) => (
                  <li
                    key={item.label}
                    className="bg-brand-50 border border-brand-100 rounded-2xl p-4 sm:p-5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-display font-bold text-brand-600">
                        {index + 1}
                      </span>
                      <h3 className="font-display text-lg font-bold text-neutral-900">
                        {item.label}
                      </h3>
                    </div>
                    <p className="text-sm leading-7 text-neutral-700">
                      {item.content}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {weeklyPlan ? (
            <section>
              <div className="max-w-2xl mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <CalendarDays size={19} className="text-brand-600" />
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
                    {labels.weeklyPlan}
                  </p>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
                  {weeklyPlan.heading}
                </h2>
                <Paragraphs
                  copy={weeklyPlan.body}
                  className="space-y-3 text-base leading-8 text-neutral-700"
                />
              </div>

              <ol className="space-y-3">
                {weeklyPlan.examples.map((item) => (
                  <li
                    key={item.label}
                    className="bg-surface border border-neutral-200 rounded-2xl p-4 sm:p-5"
                  >
                    <div className="grid gap-2 sm:grid-cols-[96px_minmax(0,1fr)] sm:items-start">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
                        {item.label}
                      </p>
                      <p className="text-sm sm:text-base leading-7 text-neutral-700">
                        {item.content}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)]">
            {promptsToKeep ? (
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookmarkCheck size={18} className="text-brand-600" />
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
                    {labels.prompts}
                  </p>
                </div>
                <h2 className="font-display text-2xl font-bold text-neutral-900 mb-3">
                  {promptsToKeep.heading}
                </h2>
                <Paragraphs
                  copy={promptsToKeep.body}
                  className="space-y-3 text-sm sm:text-base leading-7 text-neutral-700"
                />
                <div className="mt-5 grid gap-3">
                  {promptsToKeep.examples.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-neutral-200 bg-white p-4"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700 mb-2">
                        {item.label}
                      </p>
                      <p className="text-sm leading-7 text-neutral-700">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {improvePrompts ? (
              <div className="bg-neutral-900 text-white rounded-2xl p-5 sm:p-6">
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  {improvePrompts.heading}
                </h2>
                <Paragraphs
                  copy={improvePrompts.body}
                  className="space-y-3 text-sm sm:text-base leading-7 text-neutral-200"
                />
              </div>
            ) : null}
          </section>

          {lesson.capstone ? (
            <section aria-labelledby="capstone-heading">
              <div className="mb-6 max-w-2xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
                  {labels.capstone}
                </p>
                <h2 id="capstone-heading" className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
                  {lesson.capstone.title}
                </h2>
                <p className="text-base leading-8 text-neutral-700">{lesson.capstone.intro}</p>
              </div>
              <ol className="relative space-y-0 border-l border-brand-200 pl-5 sm:pl-7">
                {lesson.capstone.steps.map((step, index) => (
                  <li key={step.label} className="relative pb-7 last:pb-0">
                    <span className="absolute -left-[1.65rem] sm:-left-[2.15rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-surface bg-brand-500 text-[0]" aria-hidden="true">
                      {index + 1}
                    </span>
                    <h3 className="font-display text-base font-bold text-neutral-900 mb-2">{step.label}</h3>
                    <p className="whitespace-pre-line text-sm leading-7 text-neutral-700">{step.content}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-5 sm:p-6">
                <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">{lesson.capstone.learnerTitle}</h3>
                <p className="text-sm leading-7 text-neutral-700 mb-5">{lesson.capstone.learnerTask}</p>
                <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {lesson.capstone.worksheet.map((item) => (
                    <div key={item} className="border-b border-brand-200 pb-2 text-sm font-semibold text-neutral-700">{item}</div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {lesson.promptGroups.length > 0 ? (
            <section aria-labelledby="prompt-groups-heading">
              <h2 id="prompt-groups-heading" className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
                {labels.promptsHeading}
              </h2>
              <div className="divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 bg-surface">
                {lesson.promptGroups.map((group) => (
                  <div key={group.title} className="p-4 sm:p-6">
                    <h3 className="font-display text-lg font-bold text-neutral-900 mb-3">{group.title}</h3>
                    <div className="divide-y divide-neutral-100">
                      {group.prompts.map((item) => {
                        const promptId = `${group.title}-${item.label}`;
                        return (
                          <div key={promptId} className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-start">
                            <p className="min-w-0 flex-1 whitespace-pre-line text-sm leading-7 text-neutral-700">{item.prompt}</p>
                            <button
                              type="button"
                              aria-label={`${labels.copyPrompt}: ${item.label}`}
                              onClick={() => handleCopyPrompt(item.prompt, promptId)}
                              className="inline-flex min-h-11 w-fit shrink-0 items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-2 text-xs font-semibold text-brand-700 transition-colors hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                            >
                              {copiedPrompt === promptId ? <Check size={14} /> : <Copy size={14} />}
                              {copiedPrompt === promptId ? labels.copied : labels.copyPrompt}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section className="space-y-4" aria-label="Final wrap-up workbook">
            <div className="bg-neutral-900 text-white rounded-2xl p-4 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center mb-3">
                <div className="flex items-center gap-2 sm:mr-auto">
                  <MessageSquareText size={18} className="text-brand-400" />
                  <h2 className="font-display text-lg font-bold text-white">
                    {labels.finalPrompt}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyPrompt()}
                  className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-neutral-100 hover:border-brand-300 hover:text-white transition-colors"
                >
                  {copiedPrompt === "all" ? <Check size={14} /> : <Copy size={14} />}
                  {copiedPrompt === "all" ? labels.copied : labels.copyPrompt}
                </button>
              </div>
              <pre className="whitespace-pre-wrap rounded-xl border border-white/10 bg-black/25 p-3.5 sm:p-4 font-sans text-[13px] sm:text-sm leading-6 sm:leading-7 text-neutral-100 max-w-full overflow-x-auto">
                {lesson.examplePrompt}
              </pre>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <ClipboardList size={18} className="text-brand-600" />
                <h2 className="font-display text-lg font-bold text-neutral-900">
                  {labels.nextStep}
                </h2>
              </div>
              <Paragraphs
                copy={lesson.practiceTask}
                className="space-y-3 text-sm leading-7 text-neutral-700"
              />
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 size={18} className="text-brand-600" />
                <h2 className="font-display text-lg font-bold text-neutral-900">
                  {labels.quickCheck}
                </h2>
              </div>
              <QuickCheckList items={lesson.quickCheck} lang={lang} />
            </div>

            <div className="bg-surface border border-neutral-200 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={18} className="text-brand-500" />
                <h2 className="font-display text-lg font-bold text-neutral-900">
                  {labels.remember}
                </h2>
              </div>
              <p className="text-sm leading-7 text-neutral-700">
                {lesson.keyTakeaway}
              </p>
            </div>
          </section>
        </div>

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
                {previousTitle}
              </span>
            </CourseLink>
          ) : (
            <div className="hidden sm:block" />
          )}

          <CourseLink
            href={getCoursePath(course.slug)}
            navigate={navigate}
            className="group bg-surface border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 transition-all sm:text-right"
          >
            <span className="flex items-center gap-2 sm:justify-end text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 mb-3">
              {labels.finish}
              <ArrowRight size={14} />
            </span>
            <span className="font-display font-bold text-neutral-900 group-hover:text-brand-700 transition-colors">
              {labels.backHome}
            </span>
          </CourseLink>
        </nav>
      </article>
    </div>
  );
}
