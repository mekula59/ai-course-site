import { useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";

interface QuickCheckListProps {
  items: Array<{ question: string; answer?: string; explanation?: string }>;
  lang: "en" | "pidgin";
}

export function QuickCheckList({ items, lang }: QuickCheckListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const showLabel = lang === "pidgin" ? "Show answer wey fit" : "Show suggested answer";
  const hideLabel = lang === "pidgin" ? "Hide answer" : "Hide answer";
  const answerLabel = lang === "pidgin" ? "Answer wey fit" : "Suggested answer";

  return (
    <ol className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `quick-check-answer-${index}`;

        return (
          <li key={`${item.question}-${index}`} className="rounded-xl border border-neutral-200 bg-surface p-4">
            <p className="text-sm font-semibold leading-7 text-neutral-800">
              {index + 1}. {item.question}
            </p>
            {item.answer ? (
              <>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="mt-3 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-neutral-200 px-3 py-2 text-xs font-bold text-brand-700 transition-colors hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                >
                  <ChevronDown
                    size={15}
                    aria-hidden="true"
                    className={isOpen ? "rotate-180" : ""}
                  />
                  {isOpen ? hideLabel : showLabel}
                </button>
                {isOpen ? (
                  <div id={answerId} className="mt-3 rounded-xl bg-brand-50 p-4" role="status">
                    <div className="mb-2 flex items-center gap-2 text-brand-700">
                      <CheckCircle2 size={16} aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-[0.12em]">
                        {answerLabel}
                      </p>
                    </div>
                    <p className="text-sm font-semibold leading-7 text-neutral-800">
                      {item.answer}
                    </p>
                    {item.explanation ? (
                      <p className="mt-2 text-sm leading-7 text-neutral-700">
                        {item.explanation}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
