import { LessonArticle } from "@/components/course/LessonArticle";
import type { CourseNavigate } from "@/components/course/CourseLink";
import {
  getAdjacentCourseLessonSteps,
  getCoreCourseStepNumber,
  getCourseStepCount,
  getModulePath,
  type LessonReference,
} from "@/lib/course";

interface LessonPageProps {
  reference: LessonReference;
  navigate: CourseNavigate;
}

export function LessonPage({ reference, navigate }: LessonPageProps) {
  const { module, lesson, lessonIndex } = reference;
  const currentStepNumber = getCoreCourseStepNumber(module.slug, lesson.slug);
  const totalCourseSteps = getCourseStepCount();
  const progressPercent = (currentStepNumber / totalCourseSteps) * 100;
  const { previous, next } = getAdjacentCourseLessonSteps(
    module.slug,
    lesson.slug
  );

  return (
    <LessonArticle
      lesson={lesson}
      eyebrow={{
        en: `Module ${module.number}, Lesson ${lessonIndex + 1}`,
        pidgin: `Module ${module.number}, Lesson ${lessonIndex + 1}`,
      }}
      progressLabel={{
        en: `Step ${currentStepNumber} of ${totalCourseSteps}`,
        pidgin: `Step ${currentStepNumber} of ${totalCourseSteps}`,
      }}
      progressPercent={progressPercent}
      backHref={getModulePath(module.slug)}
      backLabel={{
        en: "Back to module",
        pidgin: "Back to module",
      }}
      previous={previous}
      next={next}
      navigate={navigate}
    />
  );
}
