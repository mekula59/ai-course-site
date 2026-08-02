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
import { CourseUpdates } from "@/components/sections/CourseUpdates";
import { CourseHome } from "@/components/course/CourseHome";
import { CourseLibraryPage } from "@/components/course/CourseLibraryPage";
import { CourseLayout } from "@/components/course/CourseLayout";
import { CourseNotFound } from "@/components/course/CourseNotFound";
import { FinalWrapUpPage } from "@/components/course/FinalWrapUpPage";
import { LessonPage } from "@/components/course/LessonPage";
import { ModulePage } from "@/components/course/ModulePage";
import { PlannedCoursePage } from "@/components/course/PlannedCoursePage";
import { PromptingBasicsHome } from "@/components/course/PromptingBasicsHome";
import { StartHerePage } from "@/components/course/StartHerePage";
import { StandaloneLessonPage } from "@/components/course/StandaloneLessonPage";
import {
  beginnerCourse,
  getCourse,
  getCourseModule,
  getLessonReference,
  getPlannedCourse,
  getStandaloneCourseLesson,
  type Course,
} from "@/lib/course";
import { promptingBasicsCourse } from "@/lib/prompting-course";

function getPathname() {
  const pathname = window.location.pathname.replace(/\/+$/, "");
  return pathname || "/";
}

function scrollToHash(hash: string) {
  if (!hash) return false;

  const targetId = decodeURIComponent(hash.replace(/^#/, ""));
  const target = document.getElementById(targetId);

  if (!target) return false;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

function usePathname() {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    function handlePopState() {
      setPathname(getPathname());

      window.setTimeout(() => {
        if (!scrollToHash(window.location.hash)) {
          window.scrollTo({ top: 0 });
        }
      }, 80);
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = useCallback((path: string) => {
    const nextUrl = new URL(path, window.location.origin);
    const nextPath = nextUrl.pathname.replace(/\/+$/, "") || "/";
    const nextHash = nextUrl.hash;
    const nextLocation = `${nextPath}${nextHash}`;
    const currentLocation = `${getPathname()}${window.location.hash}`;

    if (nextLocation !== currentLocation) {
      window.history.pushState(null, "", nextLocation);
      setPathname(nextPath);
    }

    window.setTimeout(() => {
      if (!nextHash || !scrollToHash(nextHash)) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 80);
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
        <CourseUpdates />
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

  if (courseSlug === promptingBasicsCourse.slug) {
    const plannedCourse = getPlannedCourse(courseSlug);

    if (!plannedCourse || extraParts.length > 0) {
      return <CourseNotFound navigate={navigate} />;
    }

    if (!sectionSlug) {
      return (
        <PromptingBasicsHome
          course={promptingBasicsCourse}
          plan={plannedCourse}
          navigate={navigate}
        />
      );
    }

    if (!lessonSlug && sectionSlug === promptingBasicsCourse.startHere.slug) {
      return <StartHerePage course={promptingBasicsCourse} navigate={navigate} />;
    }

    const module = getCourseModule(sectionSlug, promptingBasicsCourse);

    if (!lessonSlug) {
      return module ? (
        <ModulePage
          course={promptingBasicsCourse}
          module={module}
          navigate={navigate}
        />
      ) : (
        <CourseNotFound navigate={navigate} />
      );
    }

    const reference = getLessonReference(
      sectionSlug,
      lessonSlug,
      promptingBasicsCourse
    );

    return reference ? (
      <LessonPage reference={reference} navigate={navigate} />
    ) : (
      <CourseNotFound navigate={navigate} />
    );
  }

  const course = getCourse(courseSlug);

  if (!course) {
    const plannedCourse = getPlannedCourse(courseSlug);

    return plannedCourse && !sectionSlug && !lessonSlug && extraParts.length === 0 ? (
      <PlannedCoursePage course={plannedCourse} navigate={navigate} />
    ) : (
      <CourseNotFound navigate={navigate} />
    );
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

  useEffect(() => {
    if (!window.location.hash) return;

    const timeout = window.setTimeout(() => {
      scrollToHash(window.location.hash);
    }, 80);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

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
