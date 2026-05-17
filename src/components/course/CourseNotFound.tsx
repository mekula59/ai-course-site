import { ArrowLeft } from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";
import { Button } from "@/components/ui/Button";

interface CourseNotFoundProps {
  navigate: CourseNavigate;
}

export function CourseNotFound({ navigate }: CourseNotFoundProps) {
  return (
    <div className="px-5 py-20">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600 mb-4">
          Course
        </p>
        <h1 className="font-display text-4xl font-bold text-neutral-900 mb-4">
          Lesson not found
        </h1>
        <p className="text-neutral-600 leading-relaxed mb-8">
          That lesson is not available here. Go back to the course outline and
          choose a module from there.
        </p>
        <Button asChild>
          <CourseLink href="/courses" navigate={navigate}>
            <ArrowLeft size={18} className="mr-2" />
            Back to courses
          </CourseLink>
        </Button>
      </div>
    </div>
  );
}
