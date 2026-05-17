import { LessonArticle } from "@/components/course/LessonArticle";
import type { CourseNavigate } from "@/components/course/CourseLink";
import {
  getAdjacentStandaloneCourseSteps,
  getCourseStepCount,
  getStandaloneCourseStepNumber,
  type CourseStandaloneLesson,
} from "@/lib/course";

interface StandaloneLessonPageProps {
  page: CourseStandaloneLesson;
  navigate: CourseNavigate;
}

export function StandaloneLessonPage({
  page,
  navigate,
}: StandaloneLessonPageProps) {
  const currentStepNumber = getStandaloneCourseStepNumber(page.slug);
  const totalCourseSteps = getCourseStepCount();
  const progressPercent = (currentStepNumber / totalCourseSteps) * 100;
  const { previous, next } = getAdjacentStandaloneCourseSteps(page.slug);

  return (
    <LessonArticle
      lesson={page.lesson}
      eyebrow={page.eyebrow}
      progressLabel={{
        en: `Step ${currentStepNumber} of ${totalCourseSteps}`,
        pidgin: `Step ${currentStepNumber} of ${totalCourseSteps}`,
      }}
      progressPercent={progressPercent}
      backHref="/course"
      backLabel={{
        en: "Back to course",
        pidgin: "Back to course",
      }}
      previous={previous}
      next={next}
      navigate={navigate}
    />
  );
}
