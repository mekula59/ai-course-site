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
    englishDemo: string;
    pidginDemo: string;
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
  promptDemo: {
    label: string;
    heading: string;
    sub: string;
    beforeLabel: string;
    afterLabel: string;
  };
  finalCta: {
    eyebrow: string;
    heading: string;
    headingBreak: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    trustItems: [string, string, string];
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
      { label: "Course", href: "/courses/beginner-ai" },
      { label: "Modules", href: "#modules" },
      { label: "Why This", href: "#why" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Start Free Course",
  },
  hero: {
    eyebrow: "BUILT FOR THIS SIDE OF THE WORLD",
    headline: "AI is not just for people in tech.",
    headlineAccent: "You can use it too.",
    sub: "You already use Google, WhatsApp, and YouTube. AI tools are no different. This course will show you how to use them for real work, business, and daily life, in plain English and Nigerian Pidgin.",
    primaryCta: "Start Free Course",
    secondaryCta: "Join the Waitlist",
    nudge: "Free to start. No sign-in needed. Learn at your own pace.",
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
    heading: "Who this course is for",
    sub: "No technical background. No coding. No prior experience with AI. Just a real interest in learning something useful.",
    items: [
      {
        role: "Working professionals",
        desc: "You want to get more done at work, write faster, think more clearly, and spend less time on repetitive tasks.",
      },
      {
        role: "Business owners",
        desc: "You want to use AI to support your business, create content more easily, respond to customers faster, and save time.",
      },
      {
        role: "Students",
        desc: "You want to research better, write stronger essays, study more effectively, and understand difficult topics with less frustration.",
      },
      {
        role: "Job seekers",
        desc: "You want to write stronger CVs and cover letters, prepare for interviews, and present yourself with more confidence.",
      },
      {
        role: "Curious beginners",
        desc: "You have been hearing about AI and want to understand what it is and how to use it without feeling lost.",
      },
      {
        role: "Anyone falling behind",
        desc: "Things are changing quickly, and you want a simple way to catch up and feel more confident with new tools.",
      },
    ],
    callout: "You do not need a technical background. If you can search, message, and browse online, you can start here.",
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
    sub: "This course treats Nigerian Pidgin as a real learning language, not just a translation layer.",
    englishCard: {
      title: "Plain English",
      body: "No buzzwords. No assumptions. Everything explained the way a smart friend would explain it, not the way a textbook would.",
    },
    pidginCard: {
      title: "Nigerian Pidgin",
      body: "Some concepts land better in Pidgin. We know that. So the full course is available in natural, everyday Pidgin. No watered-down version.",
    },
    englishDemo: "AI is like texting a very knowledgeable assistant. Ask it anything. It answers clearly, without judgement.",
    pidginDemo: "AI na like say you dey chat with person wey sabi everything. You ask am anything. E go answer you clearly, no yab you.",
    note: "Switch between English and Pidgin freely. Learn in the language that makes things click.",
  },
  modules: {
    label: "Course Modules",
    heading: "Four focused modules. Built to help you understand and use AI in real life.",
    sub: "Each module gives you clear lessons, copyable prompts, and practical exercises you can apply the same day.",
    items: [
      {
        num: "01",
        title: "Start With AI Basics",
        desc: "Understand what AI is, where it helps, and how to use it without feeling technical.",
        lessons: ["What AI Is", "How to Ask AI for Help", "When to Trust AI"],
      },
      {
        num: "02",
        title: "Talk To AI Clearly",
        desc: "Learn how prompts work, why some prompts fail, and how to improve the first answer instead of starting over.",
        lessons: ["What a Prompt Really Is", "Why Some Prompts Fail", "How to Improve an Answer"],
      },
      {
        num: "03",
        title: "Use AI For Real Tasks",
        desc: "Apply AI to writing, research, summaries, and everyday tasks in a simple, useful way.",
        lessons: ["Using AI for Writing", "Using AI for Research and Summaries", "Using AI in Everyday Tasks"],
      },
      {
        num: "04",
        title: "Study, Decide, And Stay Safe",
        desc: "Use AI for learning and everyday decisions while protecting your privacy and checking important facts.",
        lessons: ["When AI Gets Things Wrong", "What Not to Share with AI", "Using AI Without Becoming Too Dependent"],
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
    heading: "Why this course feels different",
    sub: "A lot of AI education still feels too technical, too distant, or too abstract. This course is built to feel clearer, more practical, and easier to use in real life.",
    items: [
      {
        icon: "🎯",
        title: "Made for people starting from scratch",
        desc: "You do not need a technical background to follow this. It starts simply, explains things clearly, and helps you build confidence as you go.",
      },
      {
        icon: "🌍",
        title: "Grounded in real life here",
        desc: "The examples, language, and use cases are closer to the way many of us actually live and work, not distant theory or Silicon Valley assumptions.",
      },
      {
        icon: "🗣️",
        title: "Pidgin is treated seriously",
        desc: "Nigerian Pidgin is not used here as decoration or a side note. It is part of how the course explains ideas clearly and naturally.",
      },
      {
        icon: "⚡",
        title: "Useful from the beginning",
        desc: "Each lesson gives you something you can try straight away, so you are not just watching. You are using it.",
      },
      {
        icon: "🚫",
        title: "Clear, not crowded",
        desc: "The course keeps things focused. No unnecessary detours. No trying to impress you with complexity. Just what helps you understand and use AI well.",
      },
      {
        icon: "🔄",
        title: "Kept current as tools change",
        desc: "AI tools move quickly, and the course is made to stay useful as things change, so what you learn still makes sense later.",
      },
    ],
  },
  instructor: {
    label: "Meet Your Instructor",
    heading: "I am building a free AI course that feels clear, practical, and easy to start.",
    title: "Mekula",
    role: "Emeka Victor",
    bio: [
      "I am Mekula, also known as Emeka Victor. My background is in digital work, online communities, and practical communication, so I care a lot about making useful things easier to understand.",
      "The course is being built the same way I would explain it to someone sitting next to me. Start with the real task, explain it clearly, keep it practical, and make it easy to follow from the beginning.",
      "It is free to start, beginner-friendly, and grounded in the way people actually live and work. Later on, there may be live sessions for people who want deeper support.",
    ],
    tags: ["Beginner-first", "Practical communication", "Digital work", "English + Pidgin"],
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
        a: "The course is being finished now. Join the waitlist and you will be among the first to hear when it goes live.",
      },
    ],
  },
  promptDemo: {
    label: "The Difference",
    heading: "This is what one lesson changes.",
    sub: "AI gives you what you ask for. The problem is most people don't know how to ask. This course fixes that.",
    beforeLabel: "Without the course",
    afterLabel: "After one lesson",
  },
  finalCta: {
    eyebrow: "Free course first. Live sessions later.",
    heading: "Start free.",
    headingBreak: "Learn clearly.",
    sub: "Start the free course now. Join the waitlist if you want updates about new lessons and live sessions later.",
    primaryCta: "Start Free Course",
    secondaryCta: "Join the Waitlist",
    trustItems: ["Free to start", "No credit card", "Built for Nigeria"],
  },
  waitlist: {
    label: "Join the Waitlist",
    heading: "Join the waitlist",
    sub: "Leave your details below and you will hear first when the free course opens. No sign-in is needed yet.",
    nameLabel: "Your name",
    emailLabel: "Your email address",
    namePlaceholder: "Ada Okonkwo",
    emailPlaceholder: "ada@example.com",
    submitCta: "Join the Waitlist",
    submittingLabel: "Joining...",
    trustItems: ["Free to join", "No spam", "Be first to hear"],
    successHeading: "You’re on the list.",
    successBody: "I’ll let you know when the free course opens.",
    errorBoth: "Please fill in both fields.",
    errorEmail: "Please enter a valid email address.",
    errorUnavailable: "The waitlist is not ready right now. Please email us instead.",
    errorSubmit: "Something went wrong. Please try again.",
    fallbackCta: "Email us instead",
  },
};

const pidgin: SiteContent = {
  nav: {
    logo: "AI for Everyone",
    links: [
      { label: "Course", href: "/courses/beginner-ai" },
      { label: "Modules", href: "#modules" },
      { label: "Why This", href: "#why" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Start Free Course",
  },
  hero: {
    eyebrow: "BUILT FOR THIS SIDE OF THE WORLD",
    headline: "AI no be for only people wey sabi tech.",
    headlineAccent: "You sef fit use am.",
    sub: "You dey already use Google, WhatsApp, and YouTube. AI tools na the same thing. This course go show you how to use dem for work, business, and daily life, for plain English and our Naija pidgin.",
    primaryCta: "Start Free Course",
    secondaryCta: "Join the Waitlist",
    nudge: "E free to start. No sign-in needed. Learn at your own pace.",
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
    heading: "Who this course na for",
    sub: "No need for technical background. No coding. No prior AI experience. Just real interest to learn something wey go help you.",
    items: [
      {
        role: "People Wey Dey Work",
        desc: "You wan do more for work, write faster, think more clear, and stop wasting time on tasks wey dey repeat.",
      },
      {
        role: "Business Owners",
        desc: "You wan use AI support your business, create content more easily, answer customers faster, and save time.",
      },
      {
        role: "Students",
        desc: "You wan research better, write stronger essays, study better, and understand difficult topics without too much stress.",
      },
      {
        role: "Job Seekers",
        desc: "You wan write stronger CV and cover letter, prepare for interview, and present yourself with more confidence.",
      },
      {
        role: "Curious Beginners",
        desc: "You don dey hear about AI and you wan understand wetin e be and how to use am without feeling lost.",
      },
      {
        role: "Anyone Wey Feel Like Dem Dey Behind",
        desc: "Things dey change fast, and you wan simple way to catch up and feel more confident with new tools.",
      },
    ],
    callout: "You no need technical background. If you fit search, message, and browse online, you fit start here.",
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
    sub: "This course treat Nigerian Pidgin as real learning language, no be just translation layer.",
    englishCard: {
      title: "Plain English",
      body: "No buzzwords. No assumptions. Everything explained the way wey smart friend go explain am, no be textbook style.",
    },
    pidginCard: {
      title: "Nigerian Pidgin",
      body: "Some concepts land better for Pidgin. We sabi that. So the full course dey available for natural, everyday Pidgin. No watered-down version.",
    },
    englishDemo: "AI is like texting a very knowledgeable assistant. Ask it anything. It answers clearly, without judgement.",
    pidginDemo: "AI na like say you dey chat with person wey sabi everything. You ask am anything. E go answer you clearly, no yab you.",
    note: "Switch between English and Pidgin anytime. Learn for the language wey make things click for you.",
  },
  modules: {
    label: "Course Modules",
    heading: "Four focused modules. Built to help you understand and use AI for real life.",
    sub: "Each module get clear lessons, copyable prompts, and practical exercises wey you fit use same day.",
    items: [
      {
        num: "01",
        title: "Start With AI Basics",
        desc: "Understand wetin AI be, where e fit help, and how to use am without feeling technical.",
        lessons: ["Wetin AI Be", "How to Ask AI Make E Help You", "When You Fit Trust AI"],
      },
      {
        num: "02",
        title: "Talk To AI Clearly",
        desc: "Learn how prompts dey work, why some prompts fail, and how to improve the first answer instead of starting again.",
        lessons: ["Wetin Prompt Really Be", "Why Some Prompts Dey Fail", "How to Improve AI Answer"],
      },
      {
        num: "03",
        title: "Use AI For Real Tasks",
        desc: "Use AI for writing, research, summaries, and everyday tasks in simple, useful way.",
        lessons: ["How to Use AI for Writing", "How to Use AI for Research and Summary", "How to Use AI for Everyday Tasks"],
      },
      {
        num: "04",
        title: "Study, Decide, And Stay Safe",
        desc: "Use AI for learning and everyday decisions while you protect your privacy and check important facts.",
        lessons: ["When AI Answer Wrong", "Wetin You No Suppose Share with AI", "How to Use AI Without Depending Too Much"],
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
    heading: "Why this course feels different",
    sub: "Plenty AI education still dey feel too technical, too far, or too abstract. This course dey built to feel clearer, more practical, and easier to use for real life.",
    items: [
      {
        icon: "🎯",
        title: "Made for people wey dey start from scratch",
        desc: "You no need technical background to follow this. E start simple, explain things clearly, and help you build confidence as you dey go.",
      },
      {
        icon: "🌍",
        title: "Grounded for real life here",
        desc: "The examples, language, and use cases dey closer to how many of us actually dey live and work, no be distant theory or Silicon Valley assumptions.",
      },
      {
        icon: "🗣️",
        title: "Pidgin dey treated seriously",
        desc: "Nigerian Pidgin no dey used here as decoration or side note. Na part of how the course dey explain ideas clearly and naturally.",
      },
      {
        icon: "⚡",
        title: "Useful from the beginning",
        desc: "Each lesson give you something wey you fit try straight away, so you no go just dey watch. You go dey use am.",
      },
      {
        icon: "🚫",
        title: "Clear, no be crowded",
        desc: "The course dey keep things focused. No unnecessary detours. No trying to impress you with complexity. Just wetin go help you understand and use AI well.",
      },
      {
        icon: "🔄",
        title: "Kept current as tools change",
        desc: "AI tools dey move quickly, and the course dey made to stay useful as things change, so wetin you learn go still make sense later.",
      },
    ],
  },
  instructor: {
    label: "Meet Your Instructor",
    heading: "I dey build free AI course wey feel clear, practical, and easy to start.",
    title: "Mekula",
    role: "Emeka Victor",
    bio: [
      "Na me be Mekula, also known as Emeka Victor. My background dey for digital work, online communities, and practical communication, so I care well well about making useful things easier to understand.",
      "Na the same way I go explain am to person wey sit down next to me I dey use build the course. Start with the real task, explain am clearly, keep am practical, and make am easy to follow from the beginning.",
      "E free to start, beginner-friendly, and grounded for how people actually dey live and work. Later on, fit still get live sessions for people wey want deeper support.",
    ],
    tags: ["Beginner-first", "Practical communication", "Digital work", "English + Pidgin"],
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
        a: "We dey finish the course now. Join the waitlist and you go among the first people wey go hear when e go live.",
      },
    ],
  },
  promptDemo: {
    label: "The Difference",
    heading: "This na wetin one lesson go change.",
    sub: "AI go give you wetin you ask for. The problem na say most people no sabi how to ask. This course go fix that.",
    beforeLabel: "Without the course",
    afterLabel: "After one lesson",
  },
  finalCta: {
    eyebrow: "Free course first. Live sessions later.",
    heading: "Start free.",
    headingBreak: "Learn clearly.",
    sub: "Start the free course now. Join waitlist if you want updates about new lessons and live sessions later.",
    primaryCta: "Start Free Course",
    secondaryCta: "Join the Waitlist",
    trustItems: ["E free to start", "No card needed", "Built for Naija"],
  },
  waitlist: {
    label: "Join the Waitlist",
    heading: "Join the waitlist",
    sub: "Drop your details below and you go hear first when the free course open. No sign-in needed yet.",
    nameLabel: "Your name",
    emailLabel: "Your email address",
    namePlaceholder: "Ada Okonkwo",
    emailPlaceholder: "ada@example.com",
    submitCta: "Join the Waitlist",
    submittingLabel: "Joining...",
    trustItems: ["E free to join", "No spam", "You go hear first"],
    successHeading: "You don join the list.",
    successBody: "I go let you know when the free course open.",
    errorBoth: "Please fill the two fields.",
    errorEmail: "Please enter valid email address.",
    errorUnavailable: "The waitlist no dey ready right now. Please email us instead.",
    errorSubmit: "Something went wrong. Please try again.",
    fallbackCta: "Email us instead",
  },
};

export const content: Record<Lang, SiteContent> = { en, pidgin };
