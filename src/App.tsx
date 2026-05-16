import { useCallback, useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhoIsItFor } from "@/components/sections/WhoIsItFor";
import { WhatYouLearn } from "@/components/sections/WhatYouLearn";
import { LanguageSupport } from "@/components/sections/LanguageSupport";
import { PromptDemo } from "@/components/sections/PromptDemo";
import { CourseModules } from "@/components/sections/CourseModules";
import { UseCases } from "@/components/sections/UseCases";
import { WhyDifferent } from "@/components/sections/WhyDifferent";
import { Instructor } from "@/components/sections/Instructor";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Waitlist } from "@/components/sections/Waitlist";
import { CourseHome } from "@/components/course/CourseHome";
import { CourseLayout } from "@/components/course/CourseLayout";
import { CourseNotFound } from "@/components/course/CourseNotFound";
import { LessonPage } from "@/components/course/LessonPage";
import { ModulePage } from "@/components/course/ModulePage";
import { getCourseModule, getLessonReference } from "@/lib/course";

function getPathname() {
  const pathname = window.location.pathname.replace(/\/+$/, "");
  return pathname || "/";
}

function usePathname() {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    function handlePopState() {
      setPathname(getPathname());
      window.scrollTo({ top: 0 });
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = useCallback((path: string) => {
    const nextPath = path.replace(/\/+$/, "") || "/";

    if (nextPath !== getPathname()) {
      window.history.pushState(null, "", nextPath);
      setPathname(nextPath);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { pathname, navigate };
}

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <WhoIsItFor />
        <WhatYouLearn />
        <LanguageSupport />
        <PromptDemo />
        <CourseModules />
        <UseCases />
        <WhyDifferent />
        <Instructor />
        <section id="faq">
          <FAQ />
        </section>
        <FinalCTA />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}

function CourseRoutes({
  navigate,
  pathname,
}: {
  navigate: (path: string) => void;
  pathname: string;
}) {
  const parts = pathname.split("/").filter(Boolean);

  if (pathname === "/course") {
    return <CourseHome navigate={navigate} />;
  }

  if (parts.length === 2) {
    const module = getCourseModule(parts[1]);
    return module ? (
      <ModulePage module={module} navigate={navigate} />
    ) : (
      <CourseNotFound navigate={navigate} />
    );
  }

  if (parts.length === 3) {
    const reference = getLessonReference(parts[1], parts[2]);
    return reference ? (
      <LessonPage reference={reference} navigate={navigate} />
    ) : (
      <CourseNotFound navigate={navigate} />
    );
  }

  return <CourseNotFound navigate={navigate} />;
}

export default function App() {
  const { pathname, navigate } = usePathname();

  if (pathname.startsWith("/course")) {
    return (
      <CourseLayout navigate={navigate}>
        <CourseRoutes pathname={pathname} navigate={navigate} />
      </CourseLayout>
    );
  }

  return (
    <LandingPage />
  );
}
