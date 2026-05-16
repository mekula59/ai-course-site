import {
  forwardRef,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export type CourseNavigate = (path: string) => void;

interface CourseLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  navigate: CourseNavigate;
  children: ReactNode;
}

function isModifiedEvent(event: MouseEvent<HTMLAnchorElement>) {
  return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
}

export const CourseLink = forwardRef<HTMLAnchorElement, CourseLinkProps>(
  ({ children, className, href, navigate, onClick, target, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        className={cn(className)}
        onClick={(event) => {
          onClick?.(event);

          if (
            event.defaultPrevented ||
            event.button !== 0 ||
            isModifiedEvent(event) ||
            target ||
            !href.startsWith("/")
          ) {
            return;
          }

          event.preventDefault();
          navigate(href);
        }}
        {...props}
      >
        {children}
      </a>
    );
  }
);

CourseLink.displayName = "CourseLink";
