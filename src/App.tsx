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
import { CourseLibraryPage } from "@/components/course/CourseLibraryPage";
import { CourseLayout } from "@/components/course/CourseLayout";
import { CourseNotFound } from "@/components/course/CourseNotFound";
import { FinalWrapUpPage } from "@/components/course/FinalWrapUpPage";
import { LessonPage } from "@/components/course/LessonPage";
import { ModulePage } from "@/components/course/ModulePage";
import { StartHerePage } from "@/components/course/StartHerePage";
import { StandaloneLessonPage } from "@/components/course/StandaloneLessonPage";
import {
  beginnerCourse,
  getCourse,
  getCourseModule,
  getLessonReference,
  getStandaloneCourseLesson,
  type Course,
} from "@/lib/course";

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

function CourseDetailRoutes({
  course,
  navigate,
  sectionSlug,
  lessonSlug,
  extraParts,
}: {
  course: Course;
  navigate: (path: string) => void;
  sectionSlug?: string;
  lessonSlug?: string;
  extraParts: string[];
}) {
  if (extraParts.length > 0) {
    return <CourseNotFound navigate={navigate} />;
  }

  if (!sectionSlug) {
    return <CourseHome course={course} navigate={navigate} />;
  }

  if (!lessonSlug) {
    const standalonePage = getStandaloneCourseLesson(sectionSlug, course);

    if (standalonePage) {
      if (standalonePage.slug === course.startHere.slug) {
        return <StartHerePage course={course} navigate={navigate} />;
      }

      if (standalonePage.slug === course.finalWrapUp.slug) {
        return <FinalWrapUpPage course={course} navigate={navigate} />;
      }

      return (
        <StandaloneLessonPage
          course={course}
          page={standalonePage}
          navigate={navigate}
        />
      );
    }
  }

  if (!lessonSlug) {
    const module = getCourseModule(sectionSlug, course);
    return module ? (
      <ModulePage course={course} module={module} navigate={navigate} />
    ) : (
      <CourseNotFound navigate={navigate} />
    );
  }

  const reference = getLessonReference(sectionSlug, lessonSlug, course);
  return reference ? (
    <LessonPage reference={reference} navigate={navigate} />
  ) : (
    <CourseNotFound navigate={navigate} />
  );
}

function CoursesRoutes({
  navigate,
  pathname,
}: {
  navigate: (path: string) => void;
  pathname: string;
}) {
  const [root, courseSlug, sectionSlug, lessonSlug, ...extraParts] = pathname
    .split("/")
    .filter(Boolean);

  if (root !== "courses") {
    return <CourseNotFound navigate={navigate} />;
  }

  if (!courseSlug) {
    return <CourseLibraryPage navigate={navigate} />;
  }

  const course = getCourse(courseSlug);

  if (!course) {
    return <CourseNotFound navigate={navigate} />;
  }

  return (
    <CourseDetailRoutes
      course={course}
      navigate={navigate}
      sectionSlug={sectionSlug}
      lessonSlug={lessonSlug}
      extraParts={extraParts}
    />
  );
}

function LegacyCourseRoutes({
  navigate,
  pathname,
}: {
  navigate: (path: string) => void;
  pathname: string;
}) {
  const [root, sectionSlug, lessonSlug, ...extraParts] = pathname
    .split("/")
    .filter(Boolean);

  if (root !== "course") {
    return <CourseNotFound navigate={navigate} />;
  }

  return (
    <CourseDetailRoutes
      course={beginnerCourse}
      navigate={navigate}
      sectionSlug={sectionSlug}
      lessonSlug={lessonSlug}
      extraParts={extraParts}
    />
  );
}

export default function App() {
  const { pathname, navigate } = usePathname();

  if (pathname === "/courses" || pathname.startsWith("/courses/")) {
    return (
      <CourseLayout navigate={navigate}>
        <CoursesRoutes pathname={pathname} navigate={navigate} />
      </CourseLayout>
    );
  }

  if (pathname === "/course" || pathname.startsWith("/course/")) {
    return (
      <CourseLayout navigate={navigate}>
        <LegacyCourseRoutes pathname={pathname} navigate={navigate} />
      </CourseLayout>
    );
  }

  return (
    <LandingPage />
  );
}
