import { useLang } from "@/context/LanguageContext";

export function Footer() {
  const { lang } = useLang();
  const copy =
    lang === "pidgin"
      ? {
          sub: "Practical AI learning for real people.",
          questions: "Question dey? Use the course updates form wey dey ontop.",
          rights: "All rights reserved.",
        }
      : {
          sub: "Practical AI education for real people.",
          questions: "Questions? Use the course updates form above.",
          rights: "All rights reserved.",
        };

  return (
    <footer className="bg-neutral-900 text-neutral-500 py-10 px-5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display font-bold text-white text-base mb-1">
            AI for <span className="text-brand-400">Everyone</span>
          </p>
          <p className="text-xs text-neutral-600">
            {copy.sub}
          </p>
        </div>
        <div className="text-xs text-center sm:text-right">
          <p className="mb-1">{copy.questions}</p>
          <p className="text-neutral-600">
            &copy; {new Date().getFullYear()} AI for Everyone. {copy.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
