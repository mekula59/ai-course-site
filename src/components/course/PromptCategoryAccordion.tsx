import { useState } from "react";
import { Check, ChevronDown, Copy } from "lucide-react";

interface PromptCategory {
  title: string;
  prompts: Array<{ label: string; prompt: string }>;
}

interface PromptCategoryAccordionProps {
  groups: PromptCategory[];
  copiedPrompt: string | null;
  copyLabel: string;
  copiedLabel: string;
  countLabel: (count: number) => string;
  onCopy: (prompt: string, id: string) => void;
}

export function PromptCategoryAccordion({
  groups,
  copiedPrompt,
  copyLabel,
  copiedLabel,
  countLabel,
  onCopy,
}: PromptCategoryAccordionProps) {
  const [openGroups, setOpenGroups] = useState(() => new Set([0]));

  const toggleGroup = (index: number) => {
    setOpenGroups((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-surface">
      {groups.map((group, groupIndex) => {
        const isOpen = openGroups.has(groupIndex);
        const panelId = `prompt-category-${groupIndex}`;

        return (
          <section key={group.title} className="border-b border-neutral-200 last:border-b-0">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleGroup(groupIndex)}
                className="flex min-h-16 w-full items-center gap-3 px-4 py-3 text-left hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-400 sm:px-5"
              >
                <span className="min-w-0 flex-1 font-display text-base font-bold text-neutral-900 sm:text-lg">
                  {group.title}
                </span>
                <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-700">
                  {countLabel(group.prompts.length)}
                </span>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className={`shrink-0 text-neutral-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>

            {isOpen ? (
              <div id={panelId} className="divide-y divide-neutral-100 border-t border-neutral-100 px-4 sm:px-5">
                {group.prompts.map((item) => {
                  const promptId = `${group.title}-${item.label}`;
                  return (
                    <div key={promptId} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-start">
                      <p className="min-w-0 flex-1 whitespace-pre-line text-sm leading-7 text-neutral-700">
                        {item.prompt}
                      </p>
                      <button
                        type="button"
                        aria-label={`${copyLabel}: ${item.label}`}
                        onClick={() => onCopy(item.prompt, promptId)}
                        className="inline-flex min-h-11 w-fit shrink-0 items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-2 text-xs font-semibold text-brand-700 transition-colors hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                      >
                        {copiedPrompt === promptId ? <Check size={14} /> : <Copy size={14} />}
                        {copiedPrompt === promptId ? copiedLabel : copyLabel}
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
