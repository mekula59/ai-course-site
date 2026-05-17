import { LessonArticle } from "@/components/course/LessonArticle";
import type { CourseNavigate } from "@/components/course/CourseLink";
import {
  beginnerCourse,
  getAdjacentStandaloneCourseSteps,
  getCoursePath,
  getCourseStepCount,
  getStandaloneCourseStepNumber,
  type Course,
  type CourseStandaloneLesson,
} from "@/lib/course";

interface StandaloneLessonPageProps {
  course?: Course;
  page: CourseStandaloneLesson;
  navigate: CourseNavigate;
}

export function StandaloneLessonPage({
  course = beginnerCourse,
  page,
  navigate,
}: StandaloneLessonPageProps) {
  const currentStepNumber = getStandaloneCourseStepNumber(page.slug, course);
  const totalCourseSteps = getCourseStepCount(course);
  const progressPercent = (currentStepNumber / totalCourseSteps) * 100;
  const { previous, next } = getAdjacentStandaloneCourseSteps(page.slug, course);

  return (
    <LessonArticle
      lesson={page.lesson}
      eyebrow={page.eyebrow}
      progressLabel={{
        en: `Step ${currentStepNumber} of ${totalCourseSteps}`,
        pidgin: `Step ${currentStepNumber} of ${totalCourseSteps}`,
      }}
      progressPercent={progressPercent}
      backHref={getCoursePath(course.slug)}
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
