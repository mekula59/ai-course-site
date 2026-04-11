export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-500 py-10 px-5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display font-bold text-white text-base mb-1">
            AI for <span className="text-brand-400">Everyone</span>
          </p>
          <p className="text-xs text-neutral-600">
            Practical AI education for real people.
          </p>
        </div>
        <div className="text-xs text-center sm:text-right">
          <p className="mb-1">Questions? Reach out at{" "}
            <a
              href="mailto:hello@aiforeveryone.ng"
              className="text-neutral-400 hover:text-white transition-colors underline underline-offset-2"
            >
              hello@aiforeveryone.ng
            </a>
          </p>
          <p className="text-neutral-600">
            &copy; {new Date().getFullYear()} AI for Everyone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
