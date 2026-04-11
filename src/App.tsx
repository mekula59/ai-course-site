import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhoIsItFor } from "@/components/sections/WhoIsItFor";
import { WhatYouLearn } from "@/components/sections/WhatYouLearn";
import { LanguageSupport } from "@/components/sections/LanguageSupport";
import { CourseModules } from "@/components/sections/CourseModules";
import { UseCases } from "@/components/sections/UseCases";
import { WhyDifferent } from "@/components/sections/WhyDifferent";
import { Instructor } from "@/components/sections/Instructor";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Waitlist } from "@/components/sections/Waitlist";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <WhoIsItFor />
        <WhatYouLearn />
        <LanguageSupport />
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
