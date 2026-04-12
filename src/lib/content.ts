import type { Lang } from "@/types/language";

interface AudienceItem {
  role: string;
  desc: string;
}

interface ProblemItem {
  icon: string;
  title: string;
  body: string;
}

interface Module {
  num: string;
  title: string;
  desc: string;
  lessons: [string, string, string];
}

interface UseCase {
  context: string;
  icon: string;
  before: string;
  after: string;
}

interface Difference {
  icon: string;
  title: string;
  desc: string;
}

interface FAQItem {
  q: string;
  a: string;
}

interface SiteContent {
  nav: {
    logo: string;
    links: { label: string; href: string }[];
    cta: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    nudge: string;
  };
  problem: {
    label: string;
    heading: string;
    sub: string;
    items: ProblemItem[];
  };
  whoIsItFor: {
    label: string;
    heading: string;
    sub: string;
    items: AudienceItem[];
    callout: string;
  };
  whatYouLearn: {
    label: string;
    heading: string;
    body1: string;
    body2: string;
    outcomes: string[];
  };
  languageSupport: {
    label: string;
    heading: string;
    sub: string;
    englishCard: { title: string; body: string };
    pidginCard: { title: string; body: string };
    note: string;
  };
  modules: {
    label: string;
    heading: string;
    sub: string;
    items: Module[];
  };
  useCases: {
    label: string;
    heading: string;
    sub: string;
    beforeLabel: string;
    afterLabel: string;
    items: UseCase[];
  };
  whyDifferent: {
    label: string;
    heading: string;
    sub: string;
    items: Difference[];
  };
  instructor: {
    label: string;
    heading: string;
    title: string;
    role: string;
    bio: [string, string, string];
    tags: [string, string, string, string];
  };
  faq: {
    label: string;
    heading: string;
    sub: string;
    items: FAQItem[];
  };
  finalCta: {
    heading: string;
    headingBreak: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
  };
  waitlist: {
    label: string;
    heading: string;
    sub: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    nameLabel: string;
    emailLabel: string;
    submitCta: string;
    submittingLabel: string;
    trustItems: [string, string, string];
    successHeading: string;
    successBody: string;
    errorBoth: string;
    errorEmail: string;
    errorUnavailable: string;
    errorSubmit: string;
    fallbackCta: string;
  };
}

const en: SiteContent = {
  nav: {
    logo: "AI for Everyone",
    links: [
      { label: "Modules", href: "#modules" },
      { label: "Why This", href: "#why" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Join Waitlist",
  },
  hero: {
    eyebrow: "BUILT FOR THIS SIDE OF THE WORLD",
    headline: "AI is not just for people in tech.",
    headlineAccent: "You can use it too.",
    sub: "You already use Google, WhatsApp, and YouTube. AI tools are no different. This course will show you how to use them for real work, business, and daily life, in plain English and Nigerian Pidgin.",
    primaryCta: "Get Early Access",
    secondaryCta: "See the Course",
    nudge: "Free to join. No spam. Waitlist members get access first.",
  },
  problem: {
    label: "The Problem",
    heading: "You want to use AI. Something keeps stopping you.",
    sub: "Sound familiar? You are not alone. This is exactly why this course exists.",
    items: [
      {
        icon: "😰",
        title: "AI feels overwhelming",
        body: "You see people talking about ChatGPT, Gemini, Copilot, but you do not even know where to start or what any of it actually does.",
      },
      {
        icon: "😕",
        title: "Everything sounds too technical",
        body: 'Every tutorial uses jargon. "LLM", "prompt engineering", "tokens". You just want to know how to use it for real things.',
      },
      {
        icon: "😓",
        title: "You worry you are already behind",
        body: "It feels like everyone else already knows this and you are the only one still figuring it out. You are not.",
      },
      {
        icon: "🤔",
        title: "You are not sure it even applies to you",
        body: "You think AI is for tech people, software engineers, or big companies. But it is already changing every kind of work and everyday life.",
      },
    ],
  },
  whoIsItFor: {
    label: "Who This Is For",
    heading: "This course was built for you.",
    sub: "No tech background. No coding. No prior experience with AI. Just a real desire to learn something useful.",
    items: [
      {
        role: "Working professionals",
        desc: "You want to get more done at work, write faster, think clearer, and stop wasting time on repetitive tasks.",
      },
      {
        role: "Business owners",
        desc: "You want to use AI to grow your business, create content, answer customer questions, and do more with less.",
      },
      {
        role: "Students",
        desc: "You want to research better, write stronger essays, study smarter, and actually understand difficult topics.",
      },
      {
        role: "Job seekers",
        desc: "You want to write better CVs and cover letters, prepare for interviews, and stand out in a competitive market.",
      },
      {
        role: "Curious beginners",
        desc: "You have heard about AI and want to understand what it actually is and how to use it without feeling confused.",
      },
      {
        role: "Anyone falling behind",
        desc: "You feel like the world is changing fast and you want to keep up, stay relevant, and feel confident with new tools.",
      },
    ],
    callout: "You do not need a tech background. If you can search, message, and browse online, you are ready. This course is your clear place to start.",
  },
  whatYouLearn: {
    label: "What You Will Learn",
    heading: "Practical skills you can use from day one.",
    body1: "This is not theory. Every lesson is designed so you can take it, use it immediately, and see real results in your daily life or work.",
    body2: "By the end of this course, AI will no longer feel like something that happens to other people. It will be a tool you actually use.",
    outcomes: [
      "Understand what AI actually is, without the jargon",
      "Use ChatGPT, Gemini, and other tools with confidence",
      "Write better, faster content using AI",
      "Save hours each week by automating repetitive tasks",
      "Use AI to research, summarise, and organise information",
      "Apply AI to your specific work, business, or school context",
      "Spot AI-generated content and understand its limitations",
      "Stay safe and smart when using AI tools",
      "Keep up with AI changes without getting overwhelmed",
    ],
  },
  languageSupport: {
    label: "Language",
    heading: "Some things just make more sense in Pidgin.",
    sub: "This is the only AI course that treats Nigerian Pidgin as a full learning language. Not a translation. Not a footnote. The real thing.",
    englishCard: {
      title: "Plain English",
      body: "No buzzwords. No assumptions. Everything explained the way a smart friend would explain it, not the way a textbook would.",
    },
    pidginCard: {
      title: "Nigerian Pidgin",
      body: "Some concepts land better in Pidgin. We know that. So the full course is available in natural, everyday Pidgin. No watered-down version.",
    },
    note: "Switch between English and Pidgin freely. Learn in the language that makes things click.",
  },
  modules: {
    label: "Course Modules",
    heading: "Six focused modules. Zero fluff.",
    sub: "Each module is designed to be completed in under an hour, with practical exercises you can apply the same day.",
    items: [
      {
        num: "01",
        title: "What Is AI, Really?",
        desc: "Cut through the hype. Understand what AI can and cannot do, where it comes from, and why it matters now.",
        lessons: ["Demystifying AI", "How AI tools work", "What changed in 2023+"],
      },
      {
        num: "02",
        title: "Your First AI Tools",
        desc: "Hands-on introduction to ChatGPT, Gemini, and other beginner-friendly tools you can start using today.",
        lessons: ["Setting up your account", "Your first conversation", "Tips for better results"],
      },
      {
        num: "03",
        title: "AI for Writing",
        desc: "Use AI to draft emails, reports, essays, messages, social media posts, and anything you write at work or school.",
        lessons: ["Writing faster with AI", "Editing and tone", "Avoiding AI-sounding text"],
      },
      {
        num: "04",
        title: "AI for Research and Learning",
        desc: "Learn how to use AI as a research partner, not a search engine. Find better answers, faster.",
        lessons: ["Asking better questions", "Summarising long content", "Fact-checking AI outputs"],
      },
      {
        num: "05",
        title: "AI at Work and in Business",
        desc: "Real applications for real jobs. See how people in sales, admin, marketing, HR, and more are using AI daily.",
        lessons: ["Automating repetitive tasks", "AI for your role", "Building a simple AI workflow"],
      },
      {
        num: "06",
        title: "Staying Safe and Staying Smart",
        desc: "Understand the risks, limitations, and ethics of AI. Use it with confidence, not blind trust.",
        lessons: ["When not to trust AI", "Data privacy basics", "Building good AI habits"],
      },
    ],
  },
  useCases: {
    label: "Real Life Use Cases",
    heading: "See what changes when you start using AI.",
    sub: "These are not made-up examples. They are the everyday situations this course is built around.",
    beforeLabel: "Before",
    afterLabel: "After",
    items: [
      {
        context: "At the office",
        icon: "💼",
        before: "You spend 40 minutes writing a client email you are not even happy with.",
        after: "You give AI a brief and have a great first draft in 30 seconds. You review and send.",
      },
      {
        context: "Running a business",
        icon: "🛍️",
        before: "You struggle to write product descriptions, social posts, and follow-up messages.",
        after: "AI helps you create a week's worth of content in an afternoon.",
      },
      {
        context: "In school",
        icon: "📚",
        before: "You stare at a blank page for an hour trying to start your assignment.",
        after: "You use AI to outline, draft, and refine your work without copying or cheating.",
      },
      {
        context: "Job hunting",
        icon: "📄",
        before: "You send the same CV to every job and wonder why you are not getting called.",
        after: "AI helps you tailor your CV and cover letter to each application in minutes.",
      },
      {
        context: "Learning something new",
        icon: "🧠",
        before: "You try to understand a complex topic and give up after reading the same paragraph five times.",
        after: "You ask AI to explain it simply, give you examples, and quiz you on it.",
      },
      {
        context: "Daily admin",
        icon: "✅",
        before: "Your inbox is full. You do not know where to start. Tasks keep piling up.",
        after: "You use AI to draft replies, summarise long emails, and plan your week.",
      },
    ],
  },
  whyDifferent: {
    label: "Why This Course",
    heading: "Other AI courses were not built for you. This one was.",
    sub: "Most AI education is made for a Western, tech-savvy audience. This course starts from a different place entirely.",
    items: [
      {
        icon: "🎯",
        title: "Built for beginners, not techies",
        desc: "We did not water down an advanced course. We built this from the ground up for people with zero technical background.",
      },
      {
        icon: "🌍",
        title: "Made for the African context",
        desc: "Our examples, use cases, and language are grounded in Nigerian and African realities. Not Silicon Valley assumptions.",
      },
      {
        icon: "🗣️",
        title: "Pidgin support, not an afterthought",
        desc: "Nigerian Pidgin is treated as a full learning language here, not a footnote. You can learn everything in Pidgin.",
      },
      {
        icon: "⚡",
        title: "You use it the same day",
        desc: "Every lesson ends with something you can do immediately. No waiting until you finish the course to get value.",
      },
      {
        icon: "🚫",
        title: "No fluff, no filler",
        desc: "We respect your time. No unnecessary history lessons, no bloated theory sections, no padding to look impressive.",
      },
      {
        icon: "🔄",
        title: "Always updated",
        desc: "AI is moving fast. This course stays current. When major tools change, the content gets updated to match.",
      },
    ],
  },
  instructor: {
    label: "Who Is Behind This",
    heading: "Built with a clear teaching point of view, not a placeholder guru persona.",
    title: "Course Builder",
    role: "Full instructor profile publishes before launch",
    bio: [
      "This course is being built around one simple standard: if a complete beginner in Nigeria cannot use it the same day, it does not belong in the curriculum.",
      "The full instructor profile, name, and photo will be published before launch. Until then, this section stays honest instead of pretending with placeholder credibility.",
      "What is already real is the teaching approach: beginner-first, practical, bilingual, and grounded in the way people here actually work, learn, and run businesses.",
    ],
    tags: ["Beginner-first", "Nigerian context", "Practical lessons", "English + Pidgin"],
  },
  faq: {
    label: "FAQ",
    heading: "Questions you probably have.",
    sub: "Honest answers. No marketing speak.",
    items: [
      {
        q: "Do I need any technical background to take this course?",
        a: "None at all. If you can use a smartphone or browse the internet, you have everything you need. This course starts from zero and explains everything step by step.",
      },
      {
        q: "What tools will I need?",
        a: "Just a phone or laptop and an internet connection. Most AI tools we cover have free tiers that are more than enough to get started. No paid subscriptions required.",
      },
      {
        q: "Is the Pidgin version the full course or just parts of it?",
        a: "Key lessons and explanations are available in Nigerian Pidgin. You can switch between English and Pidgin freely. The goal is for you to understand, not to limit you to one language.",
      },
      {
        q: "How long will the course take?",
        a: "Each module is designed to be completed in under an hour. The full course can be done in a weekend, or spread over a few weeks. There is no deadline. You go at your own pace.",
      },
      {
        q: "Will this course stay up to date as AI changes?",
        a: "Yes. AI is moving fast, and we know that. The course content is reviewed regularly and updated when major tools change or when better approaches emerge.",
      },
      {
        q: "What if I get stuck or have questions?",
        a: "You will have access to a community where you can ask questions and get support. You are not learning alone.",
      },
      {
        q: "Is there a certificate?",
        a: "Yes, you get a certificate of completion you can share on LinkedIn or add to your CV. We are building this to be meaningful, not just decorative.",
      },
      {
        q: "When does the course launch?",
        a: "We are finalising the content now. Join the waitlist to be the first to know when it goes live, and to get early access pricing.",
      },
    ],
  },
  finalCta: {
    heading: "The people using AI today are not smarter.",
    headingBreak: "They just started earlier.",
    sub: "Join the waitlist. Be part of the first group to access the course and build real, practical AI skills from the ground up.",
    primaryCta: "Join the Waitlist",
    secondaryCta: "See the Course",
  },
  waitlist: {
    label: "Join the Waitlist",
    heading: "Get early access when we launch.",
    sub: "Drop your details below. Waitlist members are the first to get in, and will get a special early rate when we open.",
    nameLabel: "Your name",
    emailLabel: "Your email address",
    namePlaceholder: "Ada Okonkwo",
    emailPlaceholder: "ada@example.com",
    submitCta: "Get Early Access",
    submittingLabel: "Joining...",
    trustItems: ["Free to join", "No spam", "Early rate for waitlist"],
    successHeading: "You are on the list!",
    successBody: "We will send you a message at {email} as soon as the course is ready. Watch your inbox.",
    errorBoth: "Please fill in both fields.",
    errorEmail: "Please enter a valid email address.",
    errorUnavailable: "Waitlist signup is not connected yet. Use the email link below for now.",
    errorSubmit: "Something went wrong while submitting your details. Please try again or email us directly.",
    fallbackCta: "Email us instead",
  },
};

const pidgin: SiteContent = {
  nav: {
    logo: "AI for Everyone",
    links: [
      { label: "Modules", href: "#modules" },
      { label: "Why This", href: "#why" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Join Waitlist",
  },
  hero: {
    eyebrow: "BUILT FOR THIS SIDE OF THE WORLD",
    headline: "AI no be for only people wey sabi tech.",
    headlineAccent: "You sef fit use am.",
    sub: "You dey already use Google, WhatsApp, and YouTube. AI tools na the same thing. This course go show you how to use dem for work, business, and daily life, for plain English and our Naija pidgin.",
    primaryCta: "Get Early Access",
    secondaryCta: "See the Course",
    nudge: "E free to join. No spam. Those wey dey on the list go get access first.",
  },
  problem: {
    label: "The Problem",
    heading: "You wan use AI. Something dey stop you.",
    sub: "E sound familiar? You no dey alone. Na that reason we build this course.",
    items: [
      {
        icon: "😰",
        title: "AI dey feel like too much",
        body: "You dey see people dey talk about ChatGPT, Gemini, Copilot, but you no even know where to start or wetin any of dem actually do.",
      },
      {
        icon: "😕",
        title: "Everything dey sound too technical",
        body: 'Every tutorial dey use jargon. "LLM", "prompt engineering", "tokens". You just wan know how to use am for real things.',
      },
      {
        icon: "😓",
        title: "You dey worry say you don dey behind",
        body: "E feel like everybody else don already sabi this and you be the only one wey still dey figure am out. You no be.",
      },
      {
        icon: "🤔",
        title: "You no sure say e even relate to you",
        body: "You think say AI na for tech people, software engineers, or big companies. But e don already dey change every kind of work and everyday life.",
      },
    ],
  },
  whoIsItFor: {
    label: "Who This One Na For",
    heading: "We build this course for you.",
    sub: "No need for tech background. No coding. No prior AI experience. Just real desire to learn something wey go help you.",
    items: [
      {
        role: "People Wey Dey Work",
        desc: "You wan do more for work, write faster, think more clear, and stop wasting time on tasks wey dey repeat.",
      },
      {
        role: "Business Owners",
        desc: "You wan use AI to grow your business, create content, answer customer questions, and do more with less.",
      },
      {
        role: "Students",
        desc: "You wan research better, write stronger essays, study smarter, and really understand difficult topics.",
      },
      {
        role: "Job Seekers",
        desc: "You wan write better CV and cover letter, prepare for interview, and stand out for competitive market.",
      },
      {
        role: "Curious Beginners",
        desc: "You don hear about AI and you wan understand wetin e actually be and how to use am without feeling confused.",
      },
      {
        role: "Anyone Wey Feel Like Dem Dey Behind",
        desc: "You feel like the world dey change fast and you wan keep up, stay relevant, and feel confident with new tools.",
      },
    ],
    callout: "You no need tech background. If you fit search, message, and browse online, you don ready. This course na your clear place to start.",
  },
  whatYouLearn: {
    label: "Wetin You Go Learn",
    heading: "Practical skills wey you fit use from day one.",
    body1: "This one no be theory. We design every lesson so you fit take am, use am immediately, and see real results for your daily life or work.",
    body2: "By the time you finish this course, AI go no longer feel like something wey happen to other people. E go be tool wey you actually dey use.",
    outcomes: [
      "Understand wetin AI actually be, without the jargon",
      "Use ChatGPT, Gemini, and other tools with confidence",
      "Write better, faster content using AI",
      "Save hours every week by automating repetitive tasks",
      "Use AI to research, summarise, and organise information",
      "Apply AI to your specific work, business, or school",
      "Spot AI-generated content and understand e limitations",
      "Stay safe and smart when you dey use AI tools",
      "Keep up with AI changes without feeling overwhelmed",
    ],
  },
  languageSupport: {
    label: "Language",
    heading: "Some things just make more sense for Pidgin.",
    sub: "This na the only AI course wey treat Nigerian Pidgin as full learning language. No be translation. No be footnote. Na the real thing.",
    englishCard: {
      title: "Plain English",
      body: "No buzzwords. No assumptions. Everything explained the way wey smart friend go explain am, no be textbook style.",
    },
    pidginCard: {
      title: "Nigerian Pidgin",
      body: "Some concepts land better for Pidgin. We sabi that. So the full course dey available for natural, everyday Pidgin. No watered-down version.",
    },
    note: "Switch between English and Pidgin anytime. Learn for the language wey make things click for you.",
  },
  modules: {
    label: "Course Modules",
    heading: "Six focused modules. No fluff.",
    sub: "We design each module so you fit finish am under one hour, with practical exercises wey you fit apply same day.",
    items: [
      {
        num: "01",
        title: "Wetin AI Actually Be?",
        desc: "Cut through the hype. Understand wetin AI fit and no fit do, where e come from, and why e matter now.",
        lessons: ["Demystifying AI", "How AI tools work", "Wetin change for 2023+"],
      },
      {
        num: "02",
        title: "Your First AI Tools",
        desc: "Hands-on introduction to ChatGPT, Gemini, and other beginner-friendly tools wey you fit start use today.",
        lessons: ["Setting up your account", "Your first conversation", "Tips for better results"],
      },
      {
        num: "03",
        title: "AI for Writing",
        desc: "Use AI to draft emails, reports, essays, messages, social media posts, and anything wey you write for work or school.",
        lessons: ["Writing faster with AI", "Editing and tone", "Avoiding AI-sounding text"],
      },
      {
        num: "04",
        title: "AI for Research and Learning",
        desc: "Learn how to use AI as research partner, no be search engine. Find better answers, faster.",
        lessons: ["Asking better questions", "Summarising long content", "Fact-checking AI outputs"],
      },
      {
        num: "05",
        title: "AI for Work and Business",
        desc: "Real applications for real jobs. See how people for sales, admin, marketing, HR, and more dey use AI daily.",
        lessons: ["Automating repetitive tasks", "AI for your role", "Building a simple AI workflow"],
      },
      {
        num: "06",
        title: "Stay Safe, Stay Smart",
        desc: "Understand the risks, limitations, and ethics of AI. Use am with confidence, no be blind trust.",
        lessons: ["When not to trust AI", "Data privacy basics", "Building good AI habits"],
      },
    ],
  },
  useCases: {
    label: "Real Life Use Cases",
    heading: "See wetin go change when you start use AI.",
    sub: "These no be made-up examples. Na the everyday situations wey we build this course around.",
    beforeLabel: "Before",
    afterLabel: "After",
    items: [
      {
        context: "For Work",
        icon: "💼",
        before: "You spend 40 minutes to write client email wey you no even happy with.",
        after: "You give AI a brief and you get great first draft in 30 seconds. You review am and send.",
      },
      {
        context: "Running Business",
        icon: "🛍️",
        before: "You dey struggle to write product descriptions, social posts, and follow-up messages.",
        after: "AI go help you create one week worth of content for one afternoon.",
      },
      {
        context: "For School",
        icon: "📚",
        before: "You dey stare at blank page for one hour trying to start your assignment.",
        after: "You use AI to outline, draft, and refine your work without copying or cheating.",
      },
      {
        context: "Job Hunting",
        icon: "📄",
        before: "You dey send the same CV to every job and you dey wonder why dem no dey call you.",
        after: "AI go help you tailor your CV and cover letter to each application in minutes.",
      },
      {
        context: "Learning Something New",
        icon: "🧠",
        before: "You try to understand complex topic and you give up after reading the same paragraph five times.",
        after: "You ask AI to explain am simply, give you examples, and quiz you on am.",
      },
      {
        context: "Daily Admin",
        icon: "✅",
        before: "Your inbox full. You no know where to start. Tasks keep piling up.",
        after: "You use AI to draft replies, summarise long emails, and plan your week.",
      },
    ],
  },
  whyDifferent: {
    label: "Why This Course",
    heading: "Other AI courses no build for you. This one na for you.",
    sub: "Most AI education na for Western, tech-savvy audience. This course start from different place entirely.",
    items: [
      {
        icon: "🎯",
        title: "Built for beginners, not techies",
        desc: "We no water down advanced course. We build this from ground up for people wey no get any technical background.",
      },
      {
        icon: "🌍",
        title: "Made for the African context",
        desc: "Our examples, use cases, and language na based on Nigerian and African realities. No be Silicon Valley assumptions.",
      },
      {
        icon: "🗣️",
        title: "Pidgin support, no be afterthought",
        desc: "Nigerian Pidgin dey treated as full learning language here, no be footnote. You fit learn everything for Pidgin.",
      },
      {
        icon: "⚡",
        title: "You fit use am same day",
        desc: "Every lesson end with something you fit do immediately. No need to wait till you finish the course before you get value.",
      },
      {
        icon: "🚫",
        title: "No fluff, no filler",
        desc: "We respect your time. No unnecessary history lessons, no bloated theory sections, no padding to look impressive.",
      },
      {
        icon: "🔄",
        title: "Always updated",
        desc: "AI dey move fast. This course dey stay current. When major tools change, the content go update to match.",
      },
    ],
  },
  instructor: {
    label: "Who Dey Behind This",
    heading: "We build am with clear teaching purpose, no be placeholder expert packaging.",
    title: "Course Builder",
    role: "Full instructor profile go show before launch",
    bio: [
      "We dey build this course around one simple standard: if complete beginner for Naija no fit use am that same day, e no belong inside the curriculum.",
      "The full instructor profile, name, and photo go show before launch. Till then, this section go stay honest instead of pretending with placeholder credibility.",
      "Wetin don already dey real na the teaching approach: beginner-first, practical, bilingual, and grounded for how people here dey work, learn, and run business.",
    ],
    tags: ["Beginner-first", "Naija context", "Practical lessons", "English + Pidgin"],
  },
  faq: {
    label: "FAQ",
    heading: "Questions wey you probably get.",
    sub: "Honest answers. No marketing talk.",
    items: [
      {
        q: "I need technical background before I fit take this course?",
        a: "You no need anything. If you fit use smartphone or browse internet, you don get everything you need. This course start from zero and explain everything step by step.",
      },
      {
        q: "Wetin tools I go need?",
        a: "Just phone or laptop and internet connection. Most AI tools wey we cover get free tiers wey more than enough to get started. No need to pay for subscription.",
      },
      {
        q: "The Pidgin version na full course or just parts?",
        a: "Key lessons and explanations dey available for Nigerian Pidgin. You fit switch between English and Pidgin anytime. The goal na for you to understand, no be to limit you to one language.",
      },
      {
        q: "How long the course go take?",
        a: "We design each module so you fit finish am under one hour. You fit do the full course for one weekend, or spread am over few weeks. No deadline. You go at your own pace.",
      },
      {
        q: "This course go stay current as AI dey change?",
        a: "Yes. AI dey move fast, and we sabi that. We dey review the course content regularly and update am when major tools change or when better approaches come out.",
      },
      {
        q: "Wetin happen if I get stuck or I get questions?",
        a: "You go get access to community where you fit ask questions and get support. You no dey learn alone.",
      },
      {
        q: "Certificate dey?",
        a: "Yes, you go get certificate of completion wey you fit share on LinkedIn or add to your CV. We dey build this to be meaningful, no be just decoration.",
      },
      {
        q: "When the course go launch?",
        a: "We dey finalise the content now. Join the waitlist to be the first to know when e go live, and to get early access pricing.",
      },
    ],
  },
  finalCta: {
    heading: "The people wey dey use AI today no be smarter.",
    headingBreak: "Dem just start earlier.",
    sub: "Join the waitlist. Be part of the first group wey go access the course and build real, practical AI skills from the ground up.",
    primaryCta: "Join the Waitlist",
    secondaryCta: "See the Course",
  },
  waitlist: {
    label: "Join the Waitlist",
    heading: "Get early access when we launch.",
    sub: "Drop your details below. Those wey dey on the waitlist go be the first to enter, and go get special early rate when we open.",
    nameLabel: "Your name",
    emailLabel: "Your email address",
    namePlaceholder: "Ada Okonkwo",
    emailPlaceholder: "ada@example.com",
    submitCta: "Get Early Access",
    submittingLabel: "Joining...",
    trustItems: ["E free to join", "No spam", "Early rate for waitlist"],
    successHeading: "You don join the list!",
    successBody: "We go send you message at {email} as soon as the course ready. Watch your inbox.",
    errorBoth: "Please fill the two fields.",
    errorEmail: "Please enter valid email address.",
    errorUnavailable: "Waitlist signup never connect yet. Use the email link below for now.",
    errorSubmit: "Something go wrong as we try submit your details. Abeg try again or email us direct.",
    fallbackCta: "Email us instead",
  },
};

export const content: Record<Lang, SiteContent> = { en, pidgin };
