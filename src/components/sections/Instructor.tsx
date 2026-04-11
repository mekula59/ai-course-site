import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Instructor() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4">Your Instructor</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4">
              Built by someone who has been where you are.
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-8 items-start bg-neutral-50 rounded-2xl border border-neutral-200 p-8">
            {/* Avatar placeholder */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-brand-100 flex items-center justify-center text-4xl">
                👤
              </div>
            </div>

            {/* Bio content */}
            <div className="flex-1">
              <h3 className="font-display font-bold text-xl text-neutral-900 mb-1">
                Your Instructor
              </h3>
              <p className="text-brand-600 text-sm font-medium mb-4">
                AI Educator and Practitioner
              </p>
              <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
                <p>
                  I am not a researcher. I am not an engineer at a big tech company.
                  I am someone who figured out how to use AI tools practically, applied them to
                  real work and projects, and then spent time teaching others how to do the same.
                </p>
                <p>
                  I got tired of seeing my friends, family, and colleagues feel left behind by
                  technology that was supposed to be for everyone. So I built this course the way
                  I wish someone had taught me.
                </p>
                <p>
                  This is not a course built in a studio for a global audience who all have the same
                  background. This is built for people who look like us, work like us, and think like us.
                </p>
              </div>

              {/* Credentials row */}
              <div className="flex flex-wrap gap-2 mt-5">
                {["Practical focus", "Nigerian context", "Beginner-first", "Always available"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 bg-white border border-neutral-200 rounded-full text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
