import { useState } from "react";
import { Printer, RotateCcw } from "lucide-react";

interface PlaybookWorksheetProps {
  fields: string[];
  lang: "en" | "pidgin";
}

const STORAGE_KEY = "prompting-basics-playbook-worksheet";

function loadAnswers(fieldCount: number) {
  if (typeof window === "undefined") return Array(fieldCount).fill("");

  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
    return Array.from({ length: fieldCount }, (_, index) =>
      typeof saved[index] === "string" ? saved[index] : ""
    );
  } catch {
    return Array(fieldCount).fill("");
  }
}

export function PlaybookWorksheet({ fields, lang }: PlaybookWorksheetProps) {
  const [answers, setAnswers] = useState<string[]>(() => loadAnswers(fields.length));
  const labels =
    lang === "pidgin"
      ? {
          saved: "Your answers dey save for this device as you type.",
          placeholder: "Write your answer here",
          clear: "Clear worksheet",
          confirm: "Clear everything wey you don write for this worksheet?",
          print: "Print worksheet",
        }
      : {
          saved: "Your answers are saved on this device as you type.",
          placeholder: "Write your answer here",
          clear: "Clear worksheet",
          confirm: "Clear everything you have written in this worksheet?",
          print: "Print worksheet",
        };

  const updateAnswer = (index: number, value: string) => {
    const nextAnswers = answers.map((answer, answerIndex) =>
      answerIndex === index ? value : answer
    );
    setAnswers(nextAnswers);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextAnswers));
    } catch {
      // The worksheet remains usable when a browser blocks local storage.
    }
  };

  const clearWorksheet = () => {
    if (!window.confirm(labels.confirm)) return;
    const emptyAnswers = Array(fields.length).fill("");
    setAnswers(emptyAnswers);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  const printWorksheet = () => {
    document.body.classList.add("playbook-printing");
    const cleanUp = () => document.body.classList.remove("playbook-printing");
    window.addEventListener("afterprint", cleanUp, { once: true });
    window.print();
    window.setTimeout(cleanUp, 1000);
  };

  return (
    <div className="playbook-worksheet">
      <div className="playbook-no-print mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-neutral-600">{labels.saved}</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={clearWorksheet}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-200 bg-surface px-4 py-2 text-xs font-bold text-neutral-700 transition-colors hover:border-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
          >
            <RotateCcw size={15} aria-hidden="true" />
            {labels.clear}
          </button>
          <button
            type="button"
            onClick={printWorksheet}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
          >
            <Printer size={15} aria-hidden="true" />
            {labels.print}
          </button>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field, index) => {
          const fieldId = `playbook-worksheet-${index}`;
          const isShortAnswer = [0, 1, 6, 8].includes(index);

          return (
            <div key={field} className={isShortAnswer ? undefined : "sm:col-span-2"}>
              <label htmlFor={fieldId} className="mb-2 block text-sm font-bold text-neutral-800">
                {field}
              </label>
              {isShortAnswer ? (
                <input
                  id={fieldId}
                  value={answers[index]}
                  placeholder={labels.placeholder}
                  onChange={(event) => updateAnswer(index, event.target.value)}
                  className="playbook-no-print block min-h-12 w-full rounded-xl border border-brand-200 bg-surface px-4 py-3 text-base text-neutral-800 placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
                />
              ) : (
                <textarea
                  id={fieldId}
                  value={answers[index]}
                  rows={4}
                  placeholder={labels.placeholder}
                  onChange={(event) => updateAnswer(index, event.target.value)}
                  className="playbook-no-print block w-full resize-y rounded-xl border border-brand-200 bg-surface px-4 py-3 text-base leading-7 text-neutral-800 placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
                />
              )}
              <div className="hidden min-h-20 whitespace-pre-wrap rounded-xl border border-neutral-300 p-3 text-sm print:block">
                {answers[index] || " "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
