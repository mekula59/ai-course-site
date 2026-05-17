import type { Lang } from "@/types/language";

export type LocalizedText = string | Record<Lang, string>;

export interface LessonSection {
  heading: LocalizedText;
  body: LocalizedText;
  examples?: LessonExample[];
}

export interface LessonExample {
  label: LocalizedText;
  content: LocalizedText;
}

export interface Lesson {
  slug: string;
  title: LocalizedText;
  intro: LocalizedText;
  content: LessonSection[];
  keyTakeaway: LocalizedText;
  examplePrompt: LocalizedText;
  practiceTask: LocalizedText;
  quickCheck?: LocalizedText[];
}

export interface LocalizedLessonSection {
  heading: string;
  body: string;
  examples: LocalizedLessonExample[];
}

export interface LocalizedLessonExample {
  label: string;
  content: string;
}

export interface LocalizedLesson {
  slug: string;
  title: string;
  intro: string;
  content: LocalizedLessonSection[];
  keyTakeaway: string;
  examplePrompt: string;
  practiceTask: string;
  quickCheck: string[];
}

export interface CourseModule {
  slug: string;
  number: string;
  title: LocalizedText;
  description: LocalizedText;
  lessons: Lesson[];
}

export interface CourseStandaloneLesson {
  slug: string;
  eyebrow: LocalizedText;
  lesson: Lesson;
}

export interface Course {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  level: LocalizedText;
  priceLabel: LocalizedText;
  languageSupport: LocalizedText;
  modules: CourseModule[];
  startHere: CourseStandaloneLesson;
  finalWrapUp: CourseStandaloneLesson;
}

export interface LessonReference {
  course: Course;
  module: CourseModule;
  lesson: Lesson;
  moduleIndex: number;
  lessonIndex: number;
}

export interface CourseNavTarget {
  href: string;
  title: LocalizedText;
}

export function getLocalizedText(copy: LocalizedText, lang: Lang) {
  if (typeof copy === "string") return copy;
  return copy[lang] || copy.en;
}

export function getLocalizedLesson(lesson: Lesson, lang: Lang): LocalizedLesson {
  return {
    slug: lesson.slug,
    title: getLocalizedText(lesson.title, lang),
    intro: getLocalizedText(lesson.intro, lang),
    content: lesson.content.map((section) => ({
      heading: getLocalizedText(section.heading, lang),
      body: getLocalizedText(section.body, lang),
      examples: (section.examples || []).map((example) => ({
        label: getLocalizedText(example.label, lang),
        content: getLocalizedText(example.content, lang),
      })),
    })),
    keyTakeaway: getLocalizedText(lesson.keyTakeaway, lang),
    examplePrompt: getLocalizedText(lesson.examplePrompt, lang),
    practiceTask: getLocalizedText(lesson.practiceTask, lang),
    quickCheck: (lesson.quickCheck || []).map((item) =>
      getLocalizedText(item, lang)
    ),
  };
}

export const courseStartHere: CourseStandaloneLesson = {
  slug: "start-here",
  eyebrow: {
    en: "Start Here",
    pidgin: "Start From Here",
  },
  lesson: {
    slug: "start-here",
    title: {
      en: "Start Here",
      pidgin: "Start From Here",
    },
    intro: {
      en: "This free beginner course starts with everyday AI use: writing, planning, summarising, asking better questions, and checking answers before you use them.",
      pidgin:
        "This free beginner course go start with everyday AI use first: writing message, planning, summarising, asking better questions, and checking answer before you use am.",
    },
    content: [
      {
        heading: {
          en: "What this course is",
          pidgin: "Wetin this course be",
        },
        body: {
          en: "AI for Everyone is a practical course for complete beginners. This first course starts with everyday use first, not technical jargon or trying to sound like a tech person.\n\nIt is about using AI tools like ChatGPT, Gemini, Claude, or Copilot to help with real things: writing a message, understanding a topic, planning your week, summarising notes, improving a draft, or thinking through an idea.\n\nYou will learn how to ask clearly, work with the answer, check what matters, and decide what to use.",
          pidgin:
            "AI for Everyone na practical course for complete beginners. This first course go start with everyday use first, no be technical jargon or trying to sound like tech person.\n\nNa about using AI tools like ChatGPT, Gemini, Claude, or Copilot to help with real things: write message, understand topic, plan your week, summarise notes, improve draft, or think through idea.\n\nYou go learn how to ask clearly, work with the answer, check wetin matter, and decide wetin you go use.",
        },
      },
      {
        heading: {
          en: "What you will be able to do",
          pidgin: "Wetin you go fit do",
        },
        body: {
          en: "After the course, you should feel more comfortable using AI without feeling lost or dependent on it.\n\nYou will not know everything, and you do not need to. You should be able to start with a real task, give AI useful details, improve the answer, and know when to slow down and check.",
          pidgin:
            "After the course, you suppose feel more comfortable to use AI without feeling lost or depending on am too much.\n\nYou no go sabi everything, and you no need sabi everything. You suppose fit start with real task, give AI useful details, improve the answer, and know when you suppose slow down and check.",
        },
        examples: [
          {
            label: {
              en: "Ask better",
              pidgin: "Ask better",
            },
            content: {
              en: "Give AI the task, audience, details, and tone instead of typing one vague sentence.",
              pidgin:
                "Give AI the task, audience, details, and tone instead of typing one vague sentence.",
            },
          },
          {
            label: {
              en: "Improve answers",
              pidgin: "Improve answers",
            },
            content: {
              en: "Tell AI what to make clearer, shorter, warmer, more direct, or more specific.",
              pidgin:
                "Tell AI wetin e suppose make clearer, shorter, warmer, more direct, or more specific.",
            },
          },
          {
            label: {
              en: "Stay careful",
              pidgin: "Stay careful",
            },
            content: {
              en: "Check important facts, remove private details, and make the final decision yourself.",
              pidgin:
                "Check important facts, remove private details, and make the final decision by yourself.",
            },
          },
        ],
      },
      {
        heading: {
          en: "How to use the course",
          pidgin: "How to use the course",
        },
        body: {
          en: "Use this course like a workbook. Read one lesson, try the prompt, do the small practice task, then answer the quick check before you move on.\n\nThe course has this Start Here page, four core modules with twelve lessons, and a final wrap-up. If you are new, follow the order the first time.",
          pidgin:
            "Use this course like workbook. Read one lesson, try the prompt, do the small practice task, then answer the quick check before you move.\n\nThe course get this Start Here page, four core modules with twelve lessons, and final wrap-up. If you dey new, follow the order the first time.",
        },
        examples: [
          {
            label: {
              en: "Read",
              pidgin: "Read",
            },
            content: {
              en: "Go through the lesson slowly enough to understand the main idea.",
              pidgin:
                "Read the lesson slowly enough make you understand the main idea.",
            },
          },
          {
            label: {
              en: "Try",
              pidgin: "Try",
            },
            content: {
              en: "Copy the prompt, replace the bracketed parts with your own details, and run it in your AI tool.",
              pidgin:
                "Copy the prompt, replace the bracket parts with your own details, and run am for your AI tool.",
            },
          },
          {
            label: {
              en: "Check",
              pidgin: "Check",
            },
            content: {
              en: "Read the answer. Fix anything that is wrong, too generic, too formal, or not true for your situation.",
              pidgin:
                "Read the answer. Fix anything wey wrong, too general, too formal, or no true for your situation.",
            },
          },
          {
            label: {
              en: "Use",
              pidgin: "Use",
            },
            content: {
              en: "Apply the part that helps you. Leave the rest. You are still the person making the final call.",
              pidgin:
                "Use the part wey help you. Leave the rest. Na you still dey make the final decision.",
            },
          },
        ],
      },
      {
        heading: {
          en: "Choose English or Pidgin",
          pidgin: "Choose English or Pidgin",
        },
        body: {
          en: "Use the EN and Pidgin switch at the top of the course. English and Pidgin are two full ways to learn here. Pidgin is not a small support note.\n\nYou can read in English, switch to Pidgin when you want a more familiar explanation, or stay in Pidgin from start to finish.",
          pidgin:
            "Use the EN and Pidgin switch for the top of the course. English and Pidgin na two full ways to learn here. Pidgin no be small support note.\n\nYou fit read for English, switch to Pidgin when you want explanation wey familiar pass, or stay for Pidgin from start to finish.",
        },
      },
      {
        heading: {
          en: "How to use the prompts",
          pidgin: "How to use the prompts",
        },
        body: {
          en: "Each lesson includes a copyable prompt. Copy it, paste it into your AI tool, and replace the bracketed parts with your own details.\n\nThe prompt is only a starting point. If the first answer is close but not right, ask AI to adjust it. You can say make it shorter, make it warmer, use simpler words, ask me questions first, or remove anything that sounds too formal.\n\nDo not paste private details unless they are truly needed. Use placeholders like [customer], [amount], or [location].",
          pidgin:
            "Each lesson get prompt wey you fit copy. Copy am, paste am inside your AI tool, and replace the bracket parts with your own details.\n\nThe prompt na only starting point. If the first answer close but e no correct, ask AI make e adjust am. You fit say make am shorter, make am warmer, use simpler words, ask me questions first, or remove anything wey sound too formal.\n\nNo paste private details unless dem really need am. Use placeholders like [customer], [amount], or [location].",
        },
      },
      {
        heading: {
          en: "Practise with real small tasks",
          pidgin: "Practise with real small tasks",
        },
        body: {
          en: "Do not practise with fake examples if you have real tasks waiting. Use something small from your day.\n\nA WhatsApp reply. A school explanation. A customer message. A summary of notes. A plan for your week. A simple caption for your business.\n\nSmall tasks are better at the beginning because you can see quickly what AI helped with and what you still needed to change.",
          pidgin:
            "No practise with fake examples if real tasks dey wait for you. Use small thing from your day.\n\nWhatsApp reply. School explanation. Customer message. Summary of notes. Plan for your week. Simple caption for your business.\n\nSmall tasks better for beginning because you go see quickly wetin AI help with and wetin you still need change.",
        },
      },
      {
        heading: {
          en: "Before Module 1",
          pidgin: "Before Module 1",
        },
        body: {
          en: "Choose one small task you want AI to help with today. Do not choose the biggest problem in your life. Choose something simple enough to try in ten minutes.\n\nWrite it down before you start Module 1. You will use that task as your first practice example.",
          pidgin:
            "Choose one small task wey you want make AI help with today. No choose the biggest problem for your life. Choose something simple wey you fit try in ten minutes.\n\nWrite am down before you start Module 1. You go use that task as your first practice example.",
        },
      },
    ],
    keyTakeaway: {
      en: "Start small. Choose one real task, give AI clear details, check the answer, and edit it before you use it.",
      pidgin:
        "Start small. Choose one real task, give AI clear details, check the answer, and edit am before you use am.",
    },
    examplePrompt: {
      en: "I am starting a beginner AI course.\n\nHelp me choose one small real task I can practise with today.\n\nAbout me:\n[student, worker, business owner, creator, job seeker, parent, or other]\n\nThings I do often:\n[list 3 normal tasks]\n\nPlease suggest:\n1. One easy task to practise with today\n2. What I should ask AI to help me do\n3. What details I should give AI\n4. What I should check before using the answer",
      pidgin:
        "I dey start beginner AI course.\n\nHelp me choose one small real task wey I fit practise with today.\n\nAbout me:\n[student, worker, business owner, creator, job seeker, parent, or other]\n\nThings wey I dey do often:\n[list 3 normal tasks]\n\nPlease suggest:\n1. One easy task wey I fit practise with today\n2. Wetin I suppose ask AI make e help me do\n3. Which details I suppose give AI\n4. Wetin I suppose check before I use the answer",
    },
    practiceTask: {
      en: "Before Module 1, choose one small task you want AI to help with today. It should be something you can try in ten minutes.\n\nUse the prompt above if you are not sure what to pick. Write down the task, the details AI will need, and one thing you will check before using the answer.",
      pidgin:
        "Before Module 1, choose one small task wey you want make AI help with today. Make e be something wey you fit try in ten minutes.\n\nUse the prompt above if you no sure wetin to pick. Write down the task, the details AI go need, and one thing wey you go check before you use the answer.",
    },
    quickCheck: [
      {
        en: "What small task will I use AI for first?",
        pidgin: "Which small task I go use AI for first?",
      },
      {
        en: "Which language helps me understand better right now?",
        pidgin: "Which language go help me understand better now?",
      },
      {
        en: "What detail will I give AI so it does not guess?",
        pidgin: "Which detail I go give AI make e no guess?",
      },
      {
        en: "What will I check before using the answer?",
        pidgin: "Wetin I go check before I use the answer?",
      },
    ],
  },
};

export const courseModules: CourseModule[] = [
  {
    slug: "module-1",
    number: "01",
    title: {
      en: "Start With AI Basics",
      pidgin: "Start With AI Basics",
    },
    description: {
      en: "Understand what AI is, where it helps, and how to use it without feeling technical.",
      pidgin:
        "Understand wetin AI be, where e fit help, and how to use am without feeling technical.",
    },
    lessons: [
      {
        slug: "lesson-1",
        title: {
          en: "What AI Is",
          pidgin: "Wetin AI Be",
        },
        intro: {
          en: "Before you start using AI for work or school, you need a plain picture of what it is. Not the big tech version. The normal version you can actually use.",
          pidgin:
            "Before you start to use AI for work or school, you need simple picture of wetin e be. No be the big tech version. Na the normal version wey you fit actually use.",
        },
        content: [
          {
            heading: {
              en: "What AI means here",
              pidgin: "Wetin AI mean here",
            },
            body: {
              en: "In this course, when I say AI, I mostly mean tools like ChatGPT, Gemini, Claude, or Copilot. You type something in. The tool replies with something back.\n\nThat reply might be a draft, an explanation, a list, a summary, a plan, or an idea. You can ask it to write a message, explain a topic, compare options, turn rough notes into cleaner words, or help you start when your mind is blank.\n\nA simple way to think about it: AI is software that can respond to your words in a useful way. It is not a person sitting inside the app. It does not know your life by default. It only works with what you give it.",
              pidgin:
                "For this course, when I talk AI, I mostly mean tools like ChatGPT, Gemini, Claude, or Copilot. You type something inside. The tool go reply you back.\n\nThat reply fit be draft, explanation, list, summary, plan, or idea. You fit ask am make e write message, explain topic, compare options, arrange rough notes, or help you start when your mind blank.\n\nSimple way to see am: AI na software wey fit respond to your words in useful way. No be person wey sit down inside the app. E no sabi your life by default. E dey work with wetin you give am.",
            },
          },
          {
            heading: {
              en: "What it does and what it does not do",
              pidgin: "Wetin e dey do and wetin e no dey do",
            },
            body: {
              en: "AI can help you move faster with words and ideas. It can give you a first draft, explain something in simpler language, suggest options, or help you organise your thoughts.\n\nBut it does not understand your situation the way a close friend, teacher, customer, or manager would. It can sound confident and still be wrong. It can give you an answer that is too general because you gave it a question that was too general.\n\nThis is where many people get confused. The answer may sound polished, so they assume it must be correct. Do not do that. A clean answer still needs your judgement.",
              pidgin:
                "AI fit help you move faster with words and ideas. E fit give you first draft, explain something with simpler language, suggest options, or help you arrange your thoughts.\n\nBut e no understand your situation like close friend, teacher, customer, or manager go understand am. E fit sound confident and still wrong. E fit give you answer wey too general because your question too general.\n\nNa here many people dey confuse. The answer fit sound polished, so dem go think say e must correct. No do like that. Clean answer still need your judgement.",
            },
          },
          {
            heading: {
              en: "What this looks like in normal life",
              pidgin: "How e dey look for normal life",
            },
            body: {
              en: "If you type only caption, AI has to guess what you mean. It does not know your business, your customer, your price, your tone, or what you are trying to sell.\n\nIf you say, I sell hair products, I need a friendly Instagram caption for new customers, mention same-day delivery in Lagos, the answer has something real to work with.\n\nYou do not need to sound technical. Give it the normal details you would give a person helping you: what you want done, who it is for, what facts must be correct, and how you want it to sound.",
              pidgin:
                "If you type only caption, AI go guess wetin you mean. E no sabi your business, your customer, your price, your tone, or wetin you dey try sell.\n\nIf you talk say, I dey sell hair products, I need friendly Instagram caption for new customers, mention same-day delivery for Lagos, the answer go get real thing to work with.\n\nYou no need sound technical. Give am the normal details wey you go give person wey wan help you: wetin you want make e do, who the answer dey for, which facts must correct, and how you want make e sound.",
            },
          },
          {
            heading: {
              en: "A real example",
              pidgin: "Real example",
            },
            body: {
              en: "Ada sells hair products on Instagram. She is in the middle of other things when a customer asks about price and delivery. She wants to answer fast, but she still wants the reply to sound like a real person, not a stiff business template.",
              pidgin:
                "Ada dey sell hair products for Instagram. She dey do other things when customer ask price and delivery. She want answer fast, but she still want make the reply sound like real person, no be stiff business template.",
            },
            examples: [
              {
                label: {
                  en: "The customer asked",
                  pidgin: "Customer ask",
                },
                content: {
                  en: "Hi, how much is the growth oil, and do you deliver to Yaba?",
                  pidgin:
                    "Hi, how much be the growth oil, and una dey deliver go Yaba?",
                },
              },
              {
                label: {
                  en: "Ada typed",
                  pidgin: "Ada type",
                },
                content: {
                  en: "Write a short WhatsApp reply to a customer asking about my growth oil.\n\nPrice: N8,500\nDelivery to Yaba: N1,500\nTone: friendly, clear, not too formal\nMention that delivery can go out today if they confirm before 3pm.\nDo not make it sound too corporate.",
                  pidgin:
                    "Write short WhatsApp reply give customer wey ask about my growth oil.\n\nPrice: N8,500\nDelivery to Yaba: N1,500\nTone: friendly, clear, no too formal\nMention say delivery fit go out today if dem confirm before 3pm.\nNo make am sound too corporate.",
                },
              },
              {
                label: {
                  en: "AI gave back",
                  pidgin: "AI give back",
                },
                content: {
                  en: "Hi, thanks for reaching out. The growth oil is N8,500 and delivery to Yaba is available for N1,500. If you confirm before 3pm, your order can go out today. Kindly let me know if you would like to proceed.",
                  pidgin:
                    "Hi, thanks for reaching out. The growth oil na N8,500 and delivery to Yaba dey available for N1,500. If you confirm before 3pm, your order fit go out today. Kindly let me know if you want proceed.",
                },
              },
              {
                label: {
                  en: "Ada changed it before sending",
                  pidgin: "Ada change am before she send",
                },
                content: {
                  en: "Hi Amaka, yes, the growth oil is N8,500. Delivery to Yaba is N1,500, and it can go out today if you confirm before 3pm. I can send payment details now if that works for you.",
                  pidgin:
                    "Hi Amaka, yes, the growth oil na N8,500. Delivery to Yaba na N1,500, and e fit go out today if you confirm before 3pm. I fit send payment details now if e work for you.",
                },
              },
            ],
          },
          {
            heading: {
              en: "Why this works",
              pidgin: "Why this one work",
            },
            body: {
              en: "Ada did not ask for help with one vague word. She gave AI the job, the channel, the price, the delivery fee, the deadline, and the tone. That is why the first draft was already usable.\n\nStill, she did not send it untouched. She added Amaka's name. She changed the ending from kindly let me know if you would like to proceed to I can send payment details now if that works for you. Same meaning, but it sounds more natural for WhatsApp. That small edit matters.",
              pidgin:
                "Ada no ask with one vague word. She give AI the work, the channel, the price, delivery fee, deadline, and tone. Na why the first draft already useful.\n\nStill, she no send am like that. She add Amaka name. She change the ending from kindly let me know if you want proceed to I fit send payment details now if e work for you. Same meaning, but e sound more natural for WhatsApp. That small edit matter.",
            },
          },
          {
            heading: {
              en: "One thing to avoid",
              pidgin: "One thing to avoid",
            },
            body: {
              en: "Do not copy the first answer just because it looks clean. AI can write a smooth sentence and still miss the real point. It may use the wrong tone, leave out a price, invent a detail, or sound like a company memo when you need a normal WhatsApp reply.\n\nBefore you use the answer, pause for a few seconds. Is it true? Does it sound like you? Is anything important missing? If it is close but not right, ask one follow-up. That is usually faster than starting from zero.",
              pidgin:
                "No copy first answer just because e clean. AI fit write smooth sentence and still miss the real point. E fit use wrong tone, leave price out, invent detail, or sound like company memo when you need normal WhatsApp reply.\n\nBefore you use the answer, pause small. E true? E sound like you? Anything important dey miss? If e close but no correct, ask one follow-up. That one usually faster than to start from zero.",
            },
          },
        ],
        keyTakeaway: {
          en: "Do not bring AI a vague word. Bring it a real situation. Let it give you a first draft, then check the facts, add what only you know, and make the final answer sound like you.",
          pidgin:
            "No carry vague word go meet AI. Carry real situation. Make e give you first draft, then check the facts, add wetin only you sabi, and make the final answer sound like you.",
        },
        examplePrompt: {
          en: "I am new to AI.\nExplain AI to me in simple words.\n\nUse examples from everyday life in Nigeria, like WhatsApp messages, school work, small business, or office tasks.\n\nAfter the explanation, give me:\n1. Three simple ways I can use AI this week\n2. One small task I should try now\n3. One mistake I should avoid",
          pidgin:
            "I dey new to AI.\nExplain AI give me with simple words.\n\nUse examples from everyday life for Nigeria, like WhatsApp messages, school work, small business, or office tasks.\n\nAfter the explanation, give me:\n1. Three simple ways wey I fit use AI this week\n2. One small task wey I fit try now\n3. One mistake wey I suppose avoid",
        },
        practiceTask: {
          en: "Open any AI tool and paste the prompt above. Read the answer once. Do not worry yet about whether it is perfect.\n\nPick one example it gives you, then ask this follow-up:\n\nMake this fit my own situation. I am [write who you are or what you do], and I want to use AI for [write one real task].\n\nAfter it replies, change at least one line yourself. This part is important. You are learning how to shape the answer, not just collect it.",
          pidgin:
            "Open any AI tool and paste the prompt above. Read the answer once. No worry first whether e perfect.\n\nPick one example wey e give you, then ask this follow-up:\n\nMake this one fit my own situation. I be [write who you be or wetin you dey do], and I want use AI for [write one real task].\n\nAfter e reply, change at least one line by yourself. This part important. You dey learn how to shape the answer, no be only to collect am.",
        },
        quickCheck: [
          {
            en: "What did you actually ask AI to help with?",
            pidgin: "Wetin you actually ask AI make e help you with?",
          },
          {
            en: "What detail made the answer more useful?",
            pidgin: "Which detail make the answer more useful?",
          },
          {
            en: "Which line would you rewrite in your own words?",
            pidgin: "Which line you go rewrite with your own words?",
          },
          {
            en: "What would you ask next if the answer still felt off?",
            pidgin: "Wetin you go ask next if the answer still no balance?",
          },
        ],
      },
      {
        slug: "lesson-2",
        title: {
          en: "How to Ask AI for Help",
          pidgin: "How to Ask AI Make E Help You",
        },
        intro: {
          en: "AI answers better when it understands the job. You do not need special words. You just need to explain the situation clearly enough.",
          pidgin:
            "AI dey answer better when e understand the work. You no need special grammar. You just need explain the situation well enough.",
        },
        content: [
          {
            heading: {
              en: "What asking really means",
              pidgin: "Wetin asking really mean",
            },
            body: {
              en: "A prompt is the message you type into AI. It can be one sentence, a few bullets, or a full explanation. The point is not to sound smart. The point is to help AI understand what you want it to do.\n\nWhen your request is too vague, AI has to guess. It will guess the audience, the tone, the details, and even the kind of answer you want. That is why a prompt like write a message often gives you something plain and stiff.\n\nA better prompt gives AI a small brief. It tells the tool the task, the situation, the person receiving the answer, and the kind of response you want back.",
              pidgin:
                "Prompt na the message wey you type give AI. E fit be one sentence, few bullet points, or full explanation. The matter no be to sound smart. Na to help AI understand wetin you want make e do.\n\nWhen your request too vague, AI go start to guess. E go guess who go read am, the tone, the details, and even the kind answer wey you want. Na why prompt like write a message fit give you something plain and stiff.\n\nBetter prompt dey give AI small brief. E tell the tool the task, the situation, the person wey go receive the answer, and the kind response you want back.",
            },
          },
          {
            heading: {
              en: "Four things to tell AI",
              pidgin: "Four things wey you go tell AI",
            },
            body: {
              en: "Before you type, slow down for a moment. You do not need a perfect prompt. You just need to give AI the main things a helpful person would ask you before doing the work.\n\nUse this small checklist before you send your prompt. Even if you only answer two or three of them, the reply will usually get better.",
              pidgin:
                "Before you type, calm down small. You no need perfect prompt. You just need give AI the main things wey helpful person go ask you before e do the work.\n\nUse this small checklist before you send your prompt. Even if you answer only two or three, the reply go usually better.",
            },
            examples: [
              {
                label: {
                  en: "1. Task",
                  pidgin: "1. Task",
                },
                content: {
                  en: "What do I want AI to make, explain, rewrite, plan, or summarise?",
                  pidgin: "Wetin you want make AI do?",
                },
              },
              {
                label: {
                  en: "2. Audience",
                  pidgin: "2. Who e dey for",
                },
                content: {
                  en: "Who is this for?",
                  pidgin: "Na who go read am or use am?",
                },
              },
              {
                label: {
                  en: "3. Details",
                  pidgin: "3. Details",
                },
                content: {
                  en: "What facts, names, dates, prices, location, or context must be correct?",
                  pidgin: "Which details must correct?",
                },
              },
              {
                label: {
                  en: "4. Tone",
                  pidgin: "4. Tone",
                },
                content: {
                  en: "How should it sound?",
                  pidgin: "How e suppose sound?",
                },
              },
            ],
          },
          {
            heading: {
              en: "Use follow-up questions",
              pidgin: "Use follow-up questions",
            },
            body: {
              en: "The first answer does not need to be the final answer. This is one of the biggest things beginners miss. If the reply is close but not right, do not throw it away immediately.\n\nAsk a follow-up. You can say make it shorter, make it warmer, remove the big grammar, add the price, make it sound like WhatsApp, give me three options, or explain it like I am new to this.\n\nThat is how you shape the answer. You are not starting over each time. You are using the first response as a rough draft, then guiding it toward what you actually need.",
              pidgin:
                "The first answer no need be the final answer. Na one big thing wey beginners dey miss. If the reply close but e no correct, no rush throw am away.\n\nAsk follow-up. You fit say make am shorter, make am warmer, remove big grammar, add the price, make e sound like WhatsApp, give me three options, or explain am like say I dey new to this thing.\n\nNa so you dey shape the answer. You no dey start afresh every time. You dey use the first response as rough draft, then guide am reach wetin you actually need.",
            },
          },
          {
            heading: {
              en: "Real example",
              pidgin: "Real example",
            },
            body: {
              en: "Tunde repairs phones in Surulere. A customer collected a repaired phone yesterday and promised to send the remaining balance by evening. The money has not come in. Tunde wants to remind him without sounding rude.",
              pidgin:
                "Tunde dey repair phones for Surulere. One customer collect repaired phone yesterday and promise say e go send remaining balance by evening. The money never enter. Tunde want remind am without sounding rude.",
            },
            examples: [
              {
                label: {
                  en: "The first thing Tunde typed",
                  pidgin: "The first thing wey Tunde type",
                },
                content: {
                  en: "Write a payment reminder.",
                  pidgin: "Write payment reminder.",
                },
              },
              {
                label: {
                  en: "AI gave back",
                  pidgin: "AI give back",
                },
                content: {
                  en: "Dear customer, this is a reminder that your payment is still pending. Kindly make the payment at your earliest convenience. Thank you.",
                  pidgin:
                    "Dear customer, this is a reminder that your payment is still pending. Kindly make the payment at your earliest convenience. Thank you.",
                },
              },
              {
                label: {
                  en: "What was missing",
                  pidgin: "Wetin miss",
                },
                content: {
                  en: "The answer was not wrong, but it was too general. It did not mention WhatsApp, the customer's name, the balance, the phone repair, or the tone Tunde wanted. It also sounded like a company email, not a message to someone who already knows him.",
                  pidgin:
                    "The answer no wrong, but e too general. E no mention WhatsApp, customer name, the balance, phone repair, or the tone wey Tunde want. E still sound like company email, no be message to person wey already sabi am.",
                },
              },
              {
                label: {
                  en: "Tunde asked a follow-up",
                  pidgin: "Tunde ask follow-up",
                },
                content: {
                  en: "Make it a WhatsApp message.\n\nCustomer name: Mr. Bello\nBalance: N12,000\nContext: He collected his repaired phone yesterday and said he would send the balance by evening.\nTone: polite but clear. Not angry. Not too formal.\nEnd by asking if he can send it before 2pm today.",
                  pidgin:
                    "Make am WhatsApp message.\n\nCustomer name: Mr. Bello\nBalance: N12,000\nContext: E collect him repaired phone yesterday and talk say e go send balance by evening.\nTone: polite but clear. No vex. No too formal.\nEnd am by asking if e fit send am before 2pm today.",
                },
              },
              {
                label: {
                  en: "The better result",
                  pidgin: "The better result",
                },
                content: {
                  en: "Good morning Mr. Bello. Just a quick reminder about the N12,000 balance for the phone repair from yesterday. Please, can you send it before 2pm today? Thank you.",
                  pidgin:
                    "Good morning Mr. Bello. Just quick reminder about the N12,000 balance for the phone repair from yesterday. Abeg, you fit send am before 2pm today? Thank you.",
                },
              },
            ],
          },
          {
            heading: {
              en: "Why the second answer worked better",
              pidgin: "Why the second answer better",
            },
            body: {
              en: "The second prompt gave AI the missing picture. It named the channel, the person, the amount, the reason for the money, the deadline, and the tone.\n\nThat is why the answer became more useful. Tunde still needs to read it before sending. He might remove thank you if it feels too soft, or add his account details if that is what he wants next. But now he has a real draft, not a blank message pretending to be finished.",
              pidgin:
                "The second prompt give AI the missing picture. E mention the channel, the person, the amount, why the money dey, the deadline, and the tone.\n\nNa why the answer come useful pass. Tunde still need read am before e send. E fit remove thank you if e feel too soft, or add account details if na that one e want next. But now e get real draft, no be empty message wey dey pretend say e finish.",
            },
          },
          {
            heading: {
              en: "One thing to avoid",
              pidgin: "One thing to avoid",
            },
            body: {
              en: "Do not judge AI only from your first weak prompt. If you type caption, message, email, or explain this, the tool has almost nothing to work with. It may still give you an answer, but that answer will probably be average.\n\nAlso, do not keep opening a fresh chat every time the answer is not perfect. Stay with the same answer for one or two follow-ups. Ask it to adjust the part that is wrong. That habit will save you time.",
              pidgin:
                "No judge AI only from your first weak prompt. If you type caption, message, email, or explain this, the tool no get enough thing to work with. E fit still answer you, but the answer fit just be average.\n\nAlso, no dey open fresh chat every time the answer no perfect. Stay with the same answer for one or two follow-ups. Ask am make e adjust the part wey no correct. That habit go save you time.",
            },
          },
          {
            heading: {
              en: "Before you try it",
              pidgin: "Before you try am",
            },
            body: {
              en: "Use the prompt below with a real task, but keep private information out. You can change the words inside the brackets. The important part is the pattern: task, context, tone, format, then one follow-up question.",
              pidgin:
                "Use the prompt below with real task, but no put private information inside. You fit change the words inside the brackets. The important thing na the pattern: task, context, tone, format, then one follow-up question.",
            },
          },
        ],
        keyTakeaway: {
          en: "Ask AI like you are briefing a helpful person. Give it the task, the context, the tone, and the format. If the first answer is close but not right, ask a follow-up instead of starting over.",
          pidgin:
            "Ask AI like say you dey brief person wey wan help you. Give am the task, the context, the tone, and the format. If the first answer close but e no correct, ask follow-up instead of starting again.",
        },
        examplePrompt: {
          en: "I need help with a real message.\n\nTask: Write a [WhatsApp message/email/caption] about [what happened].\nContext: [who the message is for, what they already know, and any important details].\nTone: [friendly, firm, respectful, simple, warm, or direct].\nFormat: Keep it under [number] words and give me 2 options.\n\nAfter writing it, tell me one thing I should check before I send it.",
          pidgin:
            "I need help with real message.\n\nTask: Write [WhatsApp message/email/caption] about [wetin happen].\nContext: [who the message dey for, wetin the person already sabi, and any important detail].\nTone: [friendly, firm, respectful, simple, warm, or direct].\nFormat: Make e no pass [number] words and give me 2 options.\n\nAfter you write am, tell me one thing wey I suppose check before I send am.",
        },
        practiceTask: {
          en: "Pick one real message you need to write this week. It can be for a customer, classmate, colleague, church group, family member, or friend.\n\nFirst, ask AI in a weak way on purpose, like write a reminder message or help me write a caption. Read what it gives you.\n\nThen use the prompt above and fill in the brackets with your real details. Compare both answers. After that, ask one follow-up, such as make it shorter, make it sound more like WhatsApp, or make it warmer but still clear.",
          pidgin:
            "Pick one real message wey you need write this week. E fit be for customer, classmate, colleague, church group, family member, or friend.\n\nFirst, ask AI with weak style on purpose, like write reminder message or help me write caption. Read wetin e give you.\n\nThen use the prompt above and fill the brackets with your real details. Compare the two answers. After that, ask one follow-up, like make am shorter, make e sound more like WhatsApp, or make am warmer but still clear.",
        },
        quickCheck: [
          {
            en: "What did your first prompt leave out?",
            pidgin: "Wetin your first prompt leave out?",
          },
          {
            en: "Which detail made the second answer more useful?",
            pidgin: "Which detail make the second answer useful pass?",
          },
          {
            en: "What follow-up did you ask instead of starting again?",
            pidgin: "Which follow-up you ask instead of starting again?",
          },
          {
            en: "Which sentence did you change so the final answer sounded more like you?",
            pidgin:
              "Which sentence you change so the final answer go sound more like you?",
          },
        ],
      },
      {
        slug: "lesson-3",
        title: {
          en: "When to Trust AI",
          pidgin: "When You Fit Trust AI",
        },
        intro: {
          en: "AI can help you move faster, but it can also sound sure when it is wrong. This lesson is about using the help without switching off your own judgement.",
          pidgin:
            "AI fit help you move faster, but e fit still sound sure when e wrong. This lesson na about how to use the help without switching off your own sense.",
        },
        content: [
          {
            heading: {
              en: "What trust means here",
              pidgin: "Wetin trust mean here",
            },
            body: {
              en: "AI is useful for rough work. It can help with first drafts, ideas, summaries, explanations, outlines, and simple plans. That is real help, especially when you are stuck or tired.\n\nBut a useful answer is not always a correct answer. AI may invent a detail, use old information, misunderstand your situation, or write something that sounds better than it actually is.\n\nSo do not treat AI like the final authority. Treat it like a fast assistant. Let it help you start, then check the answer before you depend on it.",
              pidgin:
                "AI dey useful for rough work. E fit help with first draft, ideas, summary, explanation, outline, and simple plan. That one na real help, especially when you stuck or you tire.\n\nBut useful answer no always mean correct answer. AI fit invent detail, use old information, misunderstand your situation, or write something wey sound better than wetin e really be.\n\nSo no treat AI like final authority. Treat am like fast assistant. Make e help you start, then check the answer before you depend on am.",
            },
          },
          {
            heading: {
              en: "Before you trust the answer",
              pidgin: "Before you trust the answer",
            },
            body: {
              en: "Use this small check before you copy, send, post, submit, or act on an AI answer. The more serious the situation is, the more carefully you should check.\n\nIf the answer touches money, health, legal issues, private information, school work, workplace decisions, government rules, or anything that could affect another person, slow down. AI can still help, but it should not be the only thing you rely on.",
              pidgin:
                "Use this small check before you copy, send, post, submit, or act on AI answer. The more serious the matter be, the more you suppose check am well.\n\nIf the answer touch money, health, legal matter, private information, school work, work decision, government rule, or anything wey fit affect another person, slow down. AI fit still help, but no make am the only thing wey you depend on.",
            },
            examples: [
              {
                label: {
                  en: "1. Facts",
                  pidgin: "1. Facts",
                },
                content: {
                  en: "Are the names, dates, prices, places, links, or claims correct?",
                  pidgin:
                    "The names, dates, prices, places, links, or claims correct?",
                },
              },
              {
                label: {
                  en: "2. Fit",
                  pidgin: "2. Fit",
                },
                content: {
                  en: "Does this match your real situation?",
                  pidgin: "E match your real situation?",
                },
              },
              {
                label: {
                  en: "3. Tone",
                  pidgin: "3. Tone",
                },
                content: {
                  en: "Does it sound like you or the person/business you are writing for?",
                  pidgin:
                    "E sound like you or the person/business wey you dey write for?",
                },
              },
              {
                label: {
                  en: "4. Risk",
                  pidgin: "4. Risk",
                },
                content: {
                  en: "Could this cause a problem if it is wrong?",
                  pidgin: "If e wrong, e fit cause problem?",
                },
              },
            ],
          },
          {
            heading: {
              en: "Ask AI to show uncertainty",
              pidgin: "Ask AI make e show where e no sure",
            },
            body: {
              en: "You can ask AI to be more careful. This helps because AI often writes in a confident voice, even when it is guessing.\n\nTry adding lines like: if you are not sure, say so. Tell me what needs checking. Separate facts from suggestions. Ask me follow-up questions if you need more information.\n\nThat does not make the answer perfect. You still need to check important things yourself. But it can make the weak spots easier to see.",
              pidgin:
                "You fit ask AI make e careful pass. This one dey help because AI dey often write with confident voice, even when e dey guess.\n\nTry add lines like: if you no sure, talk say you no sure. Tell me wetin need checking. Separate facts from suggestions. Ask me follow-up questions if you need more information.\n\nThat one no mean say the answer go perfect. You still need check important things by yourself. But e fit make the weak spots easy to see.",
            },
          },
          {
            heading: {
              en: "Real example",
              pidgin: "Real example",
            },
            body: {
              en: "Zainab helps her auntie post weekend food tray updates on WhatsApp. Her auntie sells jollof rice, fried rice, and chicken packs in Abuja. Zainab wants the message to sound clear, so she asks AI for help.",
              pidgin:
                "Zainab dey help her auntie post weekend food tray update for WhatsApp. Her auntie dey sell jollof rice, fried rice, and chicken packs for Abuja. Zainab want make the message clear, so she ask AI for help.",
            },
            examples: [
              {
                label: {
                  en: "What Zainab asked AI",
                  pidgin: "Wetin Zainab ask AI",
                },
                content: {
                  en: "Write a WhatsApp broadcast for my auntie's weekend food trays. Mention jollof rice, fried rice, chicken, delivery in Abuja, and make it sound friendly.",
                  pidgin:
                    "Write WhatsApp broadcast for my auntie weekend food trays. Mention jollof rice, fried rice, chicken, delivery for Abuja, and make e sound friendly.",
                },
              },
              {
                label: {
                  en: "AI gave back",
                  pidgin: "AI give back",
                },
                content: {
                  en: "Weekend food trays are ready. Get jollof rice, fried rice, and chicken packs for only N3,500. We deliver anywhere in Abuja within 30 minutes. Free delivery for orders above N10,000. Send a message now to place your order.",
                  pidgin:
                    "Weekend food trays don ready. Get jollof rice, fried rice, and chicken packs for only N3,500. We dey deliver anywhere for Abuja within 30 minutes. Free delivery for orders above N10,000. Send message now to place your order.",
                },
              },
              {
                label: {
                  en: "What looked okay at first",
                  pidgin: "Wetin look okay at first",
                },
                content: {
                  en: "The message was short. It mentioned the food and sounded friendly. If Zainab was rushing, she might have copied it straight away.",
                  pidgin:
                    "The message short. E mention the food and e sound friendly. If Zainab dey rush, she fit copy am straight.",
                },
              },
              {
                label: {
                  en: "What was wrong or risky",
                  pidgin: "Wetin wrong or risky",
                },
                content: {
                  en: "AI invented the price, the 30-minute delivery promise, and free delivery. Her auntie's real price was N4,500. Delivery depended on location. If Zainab posted the AI version, customers could complain or expect a promise the business could not keep.",
                  pidgin:
                    "AI invent the price, the 30-minute delivery promise, and free delivery. Her auntie real price na N4,500. Delivery depend on location. If Zainab post the AI version, customers fit complain or expect promise wey the business no fit keep.",
                },
              },
              {
                label: {
                  en: "How she checked it",
                  pidgin: "How she check am",
                },
                content: {
                  en: "Zainab checked the price list, confirmed delivery with her auntie, and asked AI to rewrite the message using only the real details.",
                  pidgin:
                    "Zainab check the price list, confirm delivery with her auntie, and ask AI make e rewrite the message with only the real details.",
                },
              },
              {
                label: {
                  en: "The safer final version",
                  pidgin: "The safer final version",
                },
                content: {
                  en: "Weekend trays are available this Saturday. Each pack comes with jollof rice, fried rice, and chicken for N4,500. Delivery is available in Abuja, and the delivery fee depends on your location. Send a message to order or ask for delivery price.",
                  pidgin:
                    "Weekend trays dey available this Saturday. Each pack come with jollof rice, fried rice, and chicken for N4,500. Delivery dey available for Abuja, and delivery fee depend on your location. Send message to order or ask for delivery price.",
                },
              },
            ],
          },
          {
            heading: {
              en: "Why this check matters",
              pidgin: "Why this check matter",
            },
            body: {
              en: "The first answer was not useless. It gave Zainab a structure and a friendly starting point. The problem was that AI filled empty spaces with guesses.\n\nThat is why checking matters. Keep what helps. Remove what AI invented. Add the real details. The safer version still sounds clear, but now it will not mislead customers.",
              pidgin:
                "The first answer no useless. E give Zainab structure and friendly starting point. The problem be say AI fill empty spaces with guesses.\n\nNa why checking matter. Keep wetin help. Remove wetin AI invent. Add the real details. The safer version still clear, but now e no go mislead customers.",
            },
          },
          {
            heading: {
              en: "One thing to avoid",
              pidgin: "One thing to avoid",
            },
            body: {
              en: "Do not let a smooth answer rush you. Smooth is not the same as true.\n\nIf an AI answer gives a fact, price, rule, deadline, medical advice, legal advice, or anything about someone's private information, check it outside AI before you use it. Ask the person involved. Check the original source. Look at your own records. Use AI to help you think, not to replace checking.",
              pidgin:
                "No let smooth answer rush you. Smooth no mean say e true.\n\nIf AI answer give fact, price, rule, deadline, medical advice, legal advice, or anything about person private information, check am outside AI before you use am. Ask the person involved. Check the original source. Look your own records. Use AI make e help you think, no use am replace checking.",
            },
          },
          {
            heading: {
              en: "Before you try it",
              pidgin: "Before you try am",
            },
            body: {
              en: "The prompt below is for checking an answer you already have. You can use it after AI writes a message, summary, explanation, CV line, caption, or plan.\n\nPaste the answer in, add your real situation, and ask AI to point out what may be wrong. Then do your own check before using the final version.",
              pidgin:
                "The prompt below na for checking answer wey you already get. You fit use am after AI write message, summary, explanation, CV line, caption, or plan.\n\nPaste the answer inside, add your real situation, and ask AI make e point out wetin fit wrong. Then do your own check before you use the final version.",
            },
          },
        ],
        keyTakeaway: {
          en: "Use AI for drafts, ideas, summaries, and explanations, but slow down before you rely on it. Check facts, fit, tone, and risk, especially when money, health, law, private information, school, or work is involved.",
          pidgin:
            "Use AI for draft, ideas, summary, and explanation, but slow down before you depend on am. Check facts, fit, tone, and risk, especially when money, health, law, private information, school, or work dey involved.",
        },
        examplePrompt: {
          en: "Review this AI answer before I use it.\n\nHere is the answer:\n[paste the AI answer]\n\nMy real situation:\n[explain what this is for and any important details]\n\nPlease check:\n1. What might be wrong, invented, or too confident?\n2. What facts should I verify myself?\n3. What does not fit my situation?\n4. What should I rewrite before using it?\n\nIf you are unsure about anything, say so. Ask me follow-up questions if you need more information.",
          pidgin:
            "Review this AI answer before I use am.\n\nHere is the answer:\n[paste the AI answer]\n\nMy real situation:\n[explain wetin this thing dey for and any important details]\n\nPlease check:\n1. Wetin fit wrong, invented, or too confident?\n2. Which facts I suppose verify by myself?\n3. Wetin no match my situation?\n4. Wetin I suppose rewrite before I use am?\n\nIf you no sure about anything, talk am. Ask me follow-up questions if you need more information.",
        },
        practiceTask: {
          en: "Take one AI answer from this course or from a real task you tried recently. It can be a message, caption, summary, plan, or explanation.\n\nPaste it into the prompt above. When AI reviews it, mark three things: one line you can keep, one line you should change, and one fact you must check outside AI.\n\nThen rewrite the final version yourself. Even if the edit is small, make sure the final answer is true, fits your situation, and sounds like something you can stand behind.",
          pidgin:
            "Take one AI answer from this course or from real task wey you try recently. E fit be message, caption, summary, plan, or explanation.\n\nPaste am inside the prompt above. When AI review am, mark three things: one line wey you fit keep, one line wey you suppose change, and one fact wey you must check outside AI.\n\nThen rewrite the final version by yourself. Even if the edit small, make sure the final answer true, e fit your situation, and e sound like something wey you fit stand behind.",
        },
        quickCheck: [
          {
            en: "Which fact in the answer could cause trouble if it is wrong?",
            pidgin: "Which fact inside the answer fit cause wahala if e wrong?",
          },
          {
            en: "Which line sounds too confident or too perfect?",
            pidgin: "Which line sound too confident or too perfect?",
          },
          {
            en: "What do you need to check outside AI?",
            pidgin: "Wetin you need check outside AI?",
          },
          {
            en: "What follow-up question would make the answer safer?",
            pidgin: "Which follow-up question go make the answer safer?",
          },
        ],
      },
    ],
  },
  {
    slug: "module-2",
    number: "02",
    title: {
      en: "Talk To AI Clearly",
      pidgin: "Talk To AI Clearly",
    },
    description: {
      en: "Learn how to ask better questions, avoid weak prompts, and improve the answers AI gives you.",
      pidgin:
        "Learn how to ask better questions, avoid weak prompts, and improve the answers wey AI give you.",
    },
    lessons: [
      {
        slug: "lesson-1",
        title: {
          en: "What a Prompt Really Is",
          pidgin: "Wetin Prompt Really Be",
        },
        intro: {
          en: "A prompt is what you type or say to AI. It can be simple. What matters is that AI understands the job you want it to do.",
          pidgin:
            "Prompt na wetin you type or talk give AI. E fit be simple. The main thing be say AI understand the work wey you want make e do.",
        },
        content: [
          {
            heading: {
              en: "What a prompt is",
              pidgin: "Wetin prompt be",
            },
            body: {
              en: "A prompt is the message you give AI before it answers you. It can be a question, a task, an instruction, or a request.\n\nYou might ask AI to explain something, write a message, rewrite a rough note, plan your day, compare two options, or turn scattered thoughts into something clearer.\n\nYou do not need special language. You do not need to sound technical. A good prompt is usually just a clear request with enough detail for AI to stop guessing.",
              pidgin:
                "Prompt na the message wey you give AI before e answer you. E fit be question, task, instruction, or request.\n\nYou fit ask AI make e explain something, write message, rewrite rough note, plan your day, compare two options, or turn scattered thoughts into something clearer.\n\nYou no need special language. You no need sound technical. Good prompt na clear request wey get enough detail make AI no dey guess too much.",
            },
          },
          {
            heading: {
              en: "Prompt = Task + Context + Output",
              pidgin: "Prompt = Task + Context + Output",
            },
            body: {
              en: "This is a simple way to remember it. You tell AI the task, the context, and the output you want back.\n\nYou will not use this perfectly every time. That is fine. But when your prompt has these three parts, the answer usually becomes easier to use.",
              pidgin:
                "Na simple way to remember am be this. Tell AI the task, the context, and the output wey you want make e give you back.\n\nYou no go use am perfectly every time. That one okay. But when your prompt get these three parts, the answer usually dey easier to use.",
            },
            examples: [
              {
                label: {
                  en: "Task",
                  pidgin: "Task",
                },
                content: {
                  en: "What do you want AI to do? Write, explain, rewrite, plan, summarise, compare, or list?",
                  pidgin:
                    "Wetin you want make AI do? Write, explain, rewrite, plan, summarise, compare, or list?",
                },
              },
              {
                label: {
                  en: "Context",
                  pidgin: "Context",
                },
                content: {
                  en: "What should AI know about your situation, audience, deadline, location, or important details?",
                  pidgin:
                    "Wetin AI suppose know about your situation, who go read am, deadline, location, or important details?",
                },
              },
              {
                label: {
                  en: "Output",
                  pidgin: "Output",
                },
                content: {
                  en: "How should the answer come back? A WhatsApp message, list, table, short explanation, plan, or three options?",
                  pidgin:
                    "How you want make the answer come back? WhatsApp message, list, table, short explanation, plan, or three options?",
                },
              },
            ],
          },
          {
            heading: {
              en: "You can talk normally",
              pidgin: "You fit talk normal",
            },
            body: {
              en: "Some people freeze because they think prompting is a technical skill with secret words. It is not like that.\n\nWrite the way you would explain the task to a helpful person sitting beside you. If your thoughts are rough, type them rough. If you only know half of what you want, say that too.\n\nAI can help you shape the request, but it needs something real to start with.",
              pidgin:
                "Some people dey freeze because dem think say prompting na technical skill wey get secret words. No be like that.\n\nWrite am the way you go explain the work to helpful person wey sit down beside you. If your thoughts rough, type am rough. If you only sabi half of wetin you want, talk am too.\n\nAI fit help you shape the request, but e need something real to start with.",
            },
          },
          {
            heading: {
              en: "Real example",
              pidgin: "Real example",
            },
            body: {
              en: "Ngozi needs to send a WhatsApp message to her landlord. Rent is due today, but her salary has not entered yet. She wants to ask for two extra days without sounding careless.",
              pidgin:
                "Ngozi need send WhatsApp message give her landlord. Rent due today, but her salary never enter. She want ask for two extra days without sounding careless.",
            },
            examples: [
              {
                label: {
                  en: "What she typed first",
                  pidgin: "Wetin she type first",
                },
                content: {
                  en: "Write a message to my landlord.",
                  pidgin: "Write message give my landlord.",
                },
              },
              {
                label: {
                  en: "AI gave back",
                  pidgin: "AI give back",
                },
                content: {
                  en: "Dear landlord, I hope you are well. I am writing to inform you that I will not be able to make payment at this time. I kindly request your patience and understanding.",
                  pidgin:
                    "Dear landlord, I hope you are well. I am writing to inform you that I will not be able to make payment at this time. I kindly request your patience and understanding.",
                },
              },
              {
                label: {
                  en: "What was missing",
                  pidgin: "Wetin miss",
                },
                content: {
                  en: "The answer was polite, but it was too formal and too vague. It did not mention rent, two extra days, WhatsApp, or the exact tone Ngozi needed.",
                  pidgin:
                    "The answer polite, but e too formal and too vague. E no mention rent, two extra days, WhatsApp, or the exact tone wey Ngozi need.",
                },
              },
              {
                label: {
                  en: "The clearer prompt",
                  pidgin: "The clearer prompt",
                },
                content: {
                  en: "Write a short WhatsApp message to my landlord.\n\nSituation: My rent is due today, but my salary has not entered yet.\nRequest: Ask for two extra days to pay.\nTone: respectful, honest, not too dramatic.\nOutput: Keep it under 70 words.",
                  pidgin:
                    "Write short WhatsApp message give my landlord.\n\nSituation: My rent due today, but my salary never enter.\nRequest: Ask for two extra days to pay.\nTone: respectful, honest, no too dramatic.\nOutput: Make e no pass 70 words.",
                },
              },
              {
                label: {
                  en: "The better result",
                  pidgin: "The better result",
                },
                content: {
                  en: "Good evening sir. Please, I wanted to let you know that my salary has not entered yet. I will need two extra days to complete the rent payment. I am sorry for the delay, and I will update you once payment is made.",
                  pidgin:
                    "Good evening sir. Abeg, I wan let you know say my salary never enter yet. I go need two extra days to complete the rent payment. Sorry for the delay, I go update you once I pay.",
                },
              },
            ],
          },
          {
            heading: {
              en: "Why the better prompt worked",
              pidgin: "Why the better prompt work",
            },
            body: {
              en: "The second prompt gave AI the job, the situation, the request, the tone, and the format. That is why the answer sounded closer to what Ngozi could actually send.\n\nThe prompt was not fancy. It was just specific. That is the habit you are building.",
              pidgin:
                "The second prompt give AI the work, the situation, the request, the tone, and the format. Na why the answer sound closer to wetin Ngozi fit actually send.\n\nThe prompt no fancy. E just specific. Na that habit you dey build.",
            },
          },
          {
            heading: {
              en: "One thing to avoid",
              pidgin: "One thing to avoid",
            },
            body: {
              en: "Do not worry about writing the perfect prompt before you start. That pressure makes people stop before they even try.\n\nStart with the normal words you have. Then add task, context, and output. If the answer is still weak, you can improve it in the next message.",
              pidgin:
                "No worry about writing perfect prompt before you start. That pressure dey make people stop before dem even try.\n\nStart with the normal words wey you get. Then add task, context, and output. If the answer still weak, you fit improve am for the next message.",
            },
          },
        ],
        keyTakeaway: {
          en: "A prompt is not a secret formula. It is what you type or say to AI. A clearer prompt usually gives AI the task, the context, and the output you want back.",
          pidgin:
            "Prompt no be secret formula. Na wetin you type or talk give AI. Clearer prompt usually dey give AI the task, the context, and the output wey you want back.",
        },
        examplePrompt: {
          en: "I want to ask AI for help, but my request is still rough.\n\nRough request:\n[write the simple thing you want]\n\nMy situation:\n[add what is happening, who it is for, and any important detail]\n\nOutput I want:\n[a WhatsApp message, list, plan, explanation, table, or 3 options]\n\nTurn this into a clear prompt using Task + Context + Output.\nAfter that, explain why the new prompt is clearer.",
          pidgin:
            "I want ask AI for help, but my request still rough.\n\nRough request:\n[write the simple thing wey you want]\n\nMy situation:\n[add wetin dey happen, who e dey for, and any important detail]\n\nOutput I want:\n[WhatsApp message, list, plan, explanation, table, or 3 options]\n\nTurn this one into clear prompt using Task + Context + Output.\nAfter that, explain why the new prompt clearer.",
        },
        practiceTask: {
          en: "Pick one thing you want AI to help you with this week. Write it first as a rough request.\n\nThen rewrite it using Task + Context + Output. Paste both into AI and compare the answers. Notice what changed when your prompt became clearer.",
          pidgin:
            "Pick one thing wey you want make AI help you with this week. Write am first as rough request.\n\nThen rewrite am using Task + Context + Output. Paste the two inside AI and compare the answers. Notice wetin change when your prompt clear pass.",
        },
        quickCheck: [
          {
            en: "What task did you ask AI to do?",
            pidgin: "Which task you ask AI make e do?",
          },
          {
            en: "What context did you give it?",
            pidgin: "Which context you give am?",
          },
          {
            en: "What output did you ask for?",
            pidgin: "Which output you ask for?",
          },
          {
            en: "What would you add if the first answer was too general?",
            pidgin: "Wetin you go add if the first answer too general?",
          },
        ],
      },
      {
        slug: "lesson-2",
        title: {
          en: "Why Some Prompts Fail",
          pidgin: "Why Some Prompts Dey Fail",
        },
        intro: {
          en: "When AI gives a weak answer, it does not always mean the tool is bad. Sometimes the prompt did not give enough direction.",
          pidgin:
            "When AI give weak answer, e no always mean say the tool bad. Sometimes the prompt no give enough direction.",
        },
        content: [
          {
            heading: {
              en: "A weak prompt makes AI guess",
              pidgin: "Weak prompt dey make AI guess",
            },
            body: {
              en: "AI tries to answer the request you give it. If the request is vague, AI fills the empty spaces by guessing.\n\nThat is how you get answers that sound fine but do not really help. The answer may be too broad, too formal, too long, too generic, or just not connected to your real situation.\n\nThis is why a bad answer does not always mean bad AI. First, check whether the prompt gave AI enough to work with.",
              pidgin:
                "AI dey try answer the request wey you give am. If the request vague, AI go fill the empty spaces by guessing.\n\nNa so you dey get answers wey sound okay but no really help. The answer fit too broad, too formal, too long, too generic, or e no connect to your real situation.\n\nNa why bad answer no always mean bad AI. First, check whether the prompt give AI enough thing to work with.",
            },
          },
          {
            heading: {
              en: "Common missing pieces",
              pidgin: "Common things wey dey miss",
            },
            body: {
              en: "Most weak prompts are missing one of these pieces. You do not need all of them every time, but they are good to check before you blame the answer.",
              pidgin:
                "Most weak prompts dey miss one of these pieces. You no need all of them every time, but dem good to check before you blame the answer.",
            },
            examples: [
              {
                label: {
                  en: "Task",
                  pidgin: "Task",
                },
                content: {
                  en: "What exactly should AI do?",
                  pidgin: "Wetin exactly AI suppose do?",
                },
              },
              {
                label: {
                  en: "Audience",
                  pidgin: "Audience",
                },
                content: {
                  en: "Who is the answer for?",
                  pidgin: "Who the answer dey for?",
                },
              },
              {
                label: {
                  en: "Details",
                  pidgin: "Details",
                },
                content: {
                  en: "What facts, examples, limits, prices, dates, or background must be included?",
                  pidgin:
                    "Which facts, examples, limits, prices, dates, or background must dey inside?",
                },
              },
              {
                label: {
                  en: "Tone and format",
                  pidgin: "Tone and format",
                },
                content: {
                  en: "Should it sound warm, direct, simple, firm, or professional? Should the answer be a list, message, table, or short plan?",
                  pidgin:
                    "E suppose sound warm, direct, simple, firm, or professional? The answer suppose be list, message, table, or short plan?",
                },
              },
            ],
          },
          {
            heading: {
              en: "Do not ask for everything at once",
              pidgin: "No ask for everything one time",
            },
            body: {
              en: "Some prompts fail because the request is too big. If you ask AI to create a full business plan, write captions, design an offer, plan your launch, and fix your pricing in one message, the answer may become scattered.\n\nBreak the work into smaller steps. Ask for ideas first. Then ask for the best three. Then ask for a draft. Then ask for improvements. Smaller prompts often give stronger answers.",
              pidgin:
                "Some prompts dey fail because the request too big. If you ask AI make e create full business plan, write captions, design offer, plan launch, and fix pricing inside one message, the answer fit scatter.\n\nBreak the work into smaller steps. Ask for ideas first. Then ask for the best three. Then ask for draft. Then ask for improvements. Smaller prompts dey often give stronger answers.",
            },
          },
          {
            heading: {
              en: "Real example",
              pidgin: "Real example",
            },
            body: {
              en: "Emeka sells handmade leather sandals in Abuja. He wants Instagram ideas, but his first prompt is too broad, so the answer feels like something any business could use.",
              pidgin:
                "Emeka dey sell handmade leather sandals for Abuja. He want Instagram ideas, but him first prompt too broad, so the answer feel like something wey any business fit use.",
            },
            examples: [
              {
                label: {
                  en: "The weak prompt",
                  pidgin: "The weak prompt",
                },
                content: {
                  en: "Create content for my brand.",
                  pidgin: "Create content for my brand.",
                },
              },
              {
                label: {
                  en: "AI gave back",
                  pidgin: "AI give back",
                },
                content: {
                  en: "Here are some content ideas: behind the scenes, customer testimonials, product features, brand story, promotional offers, and educational posts.",
                  pidgin:
                    "Here are some content ideas: behind the scenes, customer testimonials, product features, brand story, promotional offers, and educational posts.",
                },
              },
              {
                label: {
                  en: "What was missing",
                  pidgin: "Wetin miss",
                },
                content: {
                  en: "AI did not know the product, city, customer, price level, platform, or what kind of content Emeka wanted. So it gave safe, general ideas.",
                  pidgin:
                    "AI no know the product, city, customer, price level, platform, or the kind content wey Emeka want. So e give safe, general ideas.",
                },
              },
              {
                label: {
                  en: "The better prompt",
                  pidgin: "The better prompt",
                },
                content: {
                  en: "I sell handmade leather sandals in Abuja.\n\nAudience: Men and women who want durable sandals for work, church, casual outings, and travel.\nPlatform: Instagram.\nTask: Give me 5 post ideas for this week.\nTone: practical and warm, not luxury-brand language.\nFormat: For each idea, give me a caption angle and what photo or video to post.",
                  pidgin:
                    "I dey sell handmade leather sandals for Abuja.\n\nAudience: Men and women wey want durable sandals for work, church, casual outings, and travel.\nPlatform: Instagram.\nTask: Give me 5 post ideas for this week.\nTone: practical and warm, no use luxury-brand language.\nFormat: For each idea, give me caption angle and wetin I fit post as photo or video.",
                },
              },
              {
                label: {
                  en: "The better result",
                  pidgin: "The better result",
                },
                content: {
                  en: "1. Workday sandal check: show one pair beside office clothes. Caption angle: Comfortable enough for the office, strong enough for Abuja movement.\n\n2. Church Sunday fit: short video of a simple Sunday outfit with the sandals. Caption angle: Clean, easy, and ready for Sunday.\n\n3. Travel pair: photo of sandals beside a small travel bag. Caption angle: One pair you can carry for a weekend trip.",
                  pidgin:
                    "1. Workday sandal check: show one pair beside office clothes. Caption angle: Comfortable enough for office, strong enough for Abuja movement.\n\n2. Church Sunday fit: short video of simple Sunday outfit with the sandals. Caption angle: Clean, easy, and ready for Sunday.\n\n3. Travel pair: photo of sandals beside small travel bag. Caption angle: One pair wey you fit carry for weekend trip.",
                },
              },
            ],
          },
          {
            heading: {
              en: "Why the better prompt worked",
              pidgin: "Why the better prompt work",
            },
            body: {
              en: "The second prompt did not just say content. It named the product, the city, the customer, the platform, the tone, and the format.\n\nAI no longer had to guess the whole business. It could now answer inside Emeka's real situation.",
              pidgin:
                "The second prompt no just talk content. E mention the product, the city, the customer, the platform, the tone, and the format.\n\nAI no need guess the whole business again. E fit now answer inside Emeka real situation.",
            },
          },
          {
            heading: {
              en: "One thing to avoid",
              pidgin: "One thing to avoid",
            },
            body: {
              en: "Do not keep repeating the same vague prompt and hoping the next answer will be better. If the first answer is weak, look for what was missing.\n\nAdd the missing piece and ask again. That is usually faster than blaming the tool or opening a fresh chat.",
              pidgin:
                "No dey repeat the same vague prompt dey hope say the next answer go better. If the first answer weak, look for wetin miss.\n\nAdd the missing piece and ask again. That one usually faster pass blaming the tool or opening fresh chat.",
            },
          },
          {
            heading: {
              en: "Before you try it",
              pidgin: "Before you try am",
            },
            body: {
              en: "The prompt below helps you inspect a weak prompt before you use it. You can use it on your own prompt or on a prompt AI gives you.",
              pidgin:
                "The prompt below go help you inspect weak prompt before you use am. You fit use am for your own prompt or prompt wey AI give you.",
            },
          },
        ],
        keyTakeaway: {
          en: "A prompt often fails because AI is missing the task, audience, details, tone, or format. Before you give up on the answer, improve the prompt.",
          pidgin:
            "Prompt dey often fail because task, audience, details, tone, or format dey miss. Before you give up on the answer, improve the prompt.",
        },
        examplePrompt: {
          en: "Review this weak prompt before I use it.\n\nWeak prompt:\n[paste your prompt]\n\nTell me:\n1. What is vague?\n2. What details are missing?\n3. What questions should I answer before asking AI?\n4. Rewrite it into a stronger prompt.\n\nUse this structure: task, audience, details, tone, and format.",
          pidgin:
            "Review this weak prompt before I use am.\n\nWeak prompt:\n[paste your prompt]\n\nTell me:\n1. Wetin vague?\n2. Which details dey miss?\n3. Which questions I suppose answer before I ask AI?\n4. Rewrite am into stronger prompt.\n\nUse this structure: task, audience, details, tone, and format.",
        },
        practiceTask: {
          en: "Write one weak prompt on purpose. Keep it short and vague, like help me with my business or write a caption.\n\nThen use the prompt above to review it. Add the missing pieces and test the improved version. Compare both answers and write down what changed.",
          pidgin:
            "Write one weak prompt on purpose. Make e short and vague, like help me with my business or write caption.\n\nThen use the prompt above to review am. Add the missing pieces and test the improved version. Compare the two answers and write down wetin change.",
        },
        quickCheck: [
          {
            en: "What was vague in your first prompt?",
            pidgin: "Wetin vague inside your first prompt?",
          },
          {
            en: "Which missing detail made the improved prompt stronger?",
            pidgin: "Which missing detail make the improved prompt stronger?",
          },
          {
            en: "Did the better answer become more specific or just longer?",
            pidgin: "The better answer specific pass, or e just long pass?",
          },
          {
            en: "What would you add if the answer still felt generic?",
            pidgin: "Wetin you go add if the answer still feel generic?",
          },
        ],
      },
      {
        slug: "lesson-3",
        title: {
          en: "How to Improve an Answer",
          pidgin: "How to Improve AI Answer",
        },
        intro: {
          en: "You do not have to accept the first answer. Most of the time, the better answer comes after one or two clear follow-ups.",
          pidgin:
            "You no need accept the first answer. Most times, better answer dey come after one or two clear follow-ups.",
        },
        content: [
          {
            heading: {
              en: "The first answer is a draft",
              pidgin: "The first answer na draft",
            },
            body: {
              en: "When AI gives you an answer, think of it as a first draft. It may be useful, but it may not fit yet.\n\nMaybe it is too long. Maybe it sounds too formal. Maybe it uses big grammar. Maybe it is not Nigerian enough for your audience. Maybe it missed the one detail that matters.\n\nYou do not always need to start again. Tell AI what to change.",
              pidgin:
                "When AI give you answer, see am like first draft. E fit useful, but e fit never fit well.\n\nMaybe e too long. Maybe e sound too formal. Maybe e use big grammar. Maybe e no Nigerian enough for your audience. Maybe e miss the one detail wey matter.\n\nYou no always need start again. Tell AI wetin make e change.",
            },
          },
          {
            heading: {
              en: "Give one clear follow-up",
              pidgin: "Give one clear follow-up",
            },
            body: {
              en: "A follow-up is the next instruction you send after the first answer. Keep it specific.\n\nYou can ask AI to make the answer shorter, warmer, clearer, simpler, more Nigerian, more direct, more specific, or easier to send on WhatsApp. You can also ask it to give you options, remove exaggeration, add examples, or turn the answer into steps.",
              pidgin:
                "Follow-up na the next instruction wey you send after the first answer. Make am specific.\n\nYou fit ask AI make the answer shorter, warmer, clearer, simpler, more Nigerian, more direct, more specific, or easier to send for WhatsApp. You fit also ask am make e give you options, remove exaggeration, add examples, or turn the answer into steps.",
            },
            examples: [
              {
                label: {
                  en: "Shorter",
                  pidgin: "Shorter",
                },
                content: {
                  en: "Make this half the length and keep only the important parts.",
                  pidgin: "Make this one half the length and keep only important parts.",
                },
              },
              {
                label: {
                  en: "Warmer",
                  pidgin: "Warmer",
                },
                content: {
                  en: "Make it sound warmer and more human, but not too emotional.",
                  pidgin:
                    "Make am sound warmer and more human, but no make am too emotional.",
                },
              },
              {
                label: {
                  en: "More specific",
                  pidgin: "More specific",
                },
                content: {
                  en: "Add details from my situation and remove anything generic.",
                  pidgin:
                    "Add details from my situation and remove anything generic.",
                },
              },
              {
                label: {
                  en: "Ask what is missing",
                  pidgin: "Ask wetin miss",
                },
                content: {
                  en: "Before rewriting, ask me what information you need from me.",
                  pidgin:
                    "Before you rewrite am, ask me wetin you need from me.",
                },
              },
            ],
          },
          {
            heading: {
              en: "Ask AI what it needs from you",
              pidgin: "Ask AI wetin e need from you",
            },
            body: {
              en: "Sometimes you do not know why the answer feels weak. In that case, ask AI to help you find the missing piece.\n\nYou can say: before you improve this, ask me three questions that would help you make it more useful. That simple move turns AI from a guessing tool into something closer to a thinking partner.",
              pidgin:
                "Sometimes you no go know why the answer feel weak. For that kind case, ask AI make e help you find the missing piece.\n\nYou fit say: before you improve this, ask me three questions wey go help you make am more useful. That simple move go turn AI from guessing tool to something closer to thinking partner.",
            },
          },
          {
            heading: {
              en: "Real example",
              pidgin: "Real example",
            },
            body: {
              en: "Aisha wants to apply for an admin assistant role at a logistics company in Lagos. She asks AI to write an email, but the first version sounds stiff and says too much.",
              pidgin:
                "Aisha want apply for admin assistant role for logistics company for Lagos. She ask AI make e write email, but the first version sound stiff and talk too much.",
            },
            examples: [
              {
                label: {
                  en: "Aisha's first prompt",
                  pidgin: "Aisha first prompt",
                },
                content: {
                  en: "Write a job application email for an admin assistant role.",
                  pidgin: "Write job application email for admin assistant role.",
                },
              },
              {
                label: {
                  en: "AI gave back",
                  pidgin: "AI give back",
                },
                content: {
                  en: "Dear Hiring Manager, I am writing to express my profound interest in the administrative assistant position at your reputable organization. I possess exceptional organizational, communication, and administrative skills that make me the ideal candidate for this role.",
                  pidgin:
                    "Dear Hiring Manager, I am writing to express my profound interest in the administrative assistant position at your reputable organization. I possess exceptional organizational, communication, and administrative skills that make me the ideal candidate for this role.",
                },
              },
              {
                label: {
                  en: "What was weak",
                  pidgin: "Wetin weak",
                },
                content: {
                  en: "It sounded too polished and too sure. It also invented strong claims about her skills. Aisha has experience helping at her uncle's shop, but she does not want to exaggerate.",
                  pidgin:
                    "E sound too polished and too sure. E still invent strong claims about her skills. Aisha get experience helping for her uncle shop, but she no want exaggerate.",
                },
              },
              {
                label: {
                  en: "Aisha's follow-up",
                  pidgin: "Aisha follow-up",
                },
                content: {
                  en: "Make it shorter and more natural.\n\nUse my real experience: I helped manage customer records and daily sales notes at my uncle's shop for 8 months.\nDo not exaggerate.\nTone: polite, confident, simple.\nAsk me if any detail is missing before you add it.",
                  pidgin:
                    "Make am shorter and more natural.\n\nUse my real experience: I help manage customer records and daily sales notes for my uncle shop for 8 months.\nNo exaggerate.\nTone: polite, confident, simple.\nAsk me if any detail dey miss before you add am.",
                },
              },
              {
                label: {
                  en: "Improved output",
                  pidgin: "Improved output",
                },
                content: {
                  en: "Dear Hiring Manager, I would like to apply for the Admin Assistant role. I have 8 months of experience helping with customer records and daily sales notes at my uncle's shop. I am organised, willing to learn, and comfortable handling simple records. I would be glad to be considered for the role.",
                  pidgin:
                    "Dear Hiring Manager, I would like to apply for the Admin Assistant role. I have 8 months of experience helping with customer records and daily sales notes at my uncle shop. I am organised, willing to learn, and comfortable handling simple records. I would be glad to be considered for the role.",
                },
              },
              {
                label: {
                  en: "Aisha's final edit",
                  pidgin: "Aisha final edit",
                },
                content: {
                  en: "Dear Hiring Manager, I would like to apply for the Admin Assistant role. I have 8 months of experience helping with customer records and daily sales notes at my uncle's shop. I am organised, willing to learn, and careful with details. I have attached my CV for your review. Thank you.",
                  pidgin:
                    "Dear Hiring Manager, I would like to apply for the Admin Assistant role. I have 8 months of experience helping with customer records and daily sales notes at my uncle shop. I am organised, willing to learn, and careful with details. I have attached my CV for your review. Thank you.",
                },
              },
            ],
          },
          {
            heading: {
              en: "Why the final version worked",
              pidgin: "Why the final version work",
            },
            body: {
              en: "Aisha did not start over. She used the first answer as a draft, then gave AI the missing context and tone. After that, she still made a human edit.\n\nThat is the rhythm: ask, read, follow up, edit. The goal is not to make AI sound impressive. The goal is to get an answer that fits your real situation.",
              pidgin:
                "Aisha no start again. She use the first answer as draft, then give AI the missing context and tone. After that, she still do human edit.\n\nNa the rhythm be this: ask, read, follow up, edit. The goal no be to make AI sound impressive. The goal na to get answer wey fit your real situation.",
            },
          },
          {
            heading: {
              en: "One thing to avoid",
              pidgin: "One thing to avoid",
            },
            body: {
              en: "Do not send follow-ups like make it better. Better how? Shorter? Clearer? Warmer? More direct? More Nigerian? More specific?\n\nName the change you want. The clearer your follow-up, the easier it is for AI to improve the answer.",
              pidgin:
                "No send follow-up like make it better. Better how? Shorter? Clearer? Warmer? More direct? More Nigerian? More specific?\n\nName the change wey you want. The clearer your follow-up, the easier AI fit improve the answer.",
            },
          },
          {
            heading: {
              en: "Before you try it",
              pidgin: "Before you try am",
            },
            body: {
              en: "Use the prompt below when an AI answer is close, but not yet right. It helps you improve the answer without throwing everything away.",
              pidgin:
                "Use the prompt below when AI answer close, but e never correct. E go help you improve the answer without throwing everything away.",
            },
          },
        ],
        keyTakeaway: {
          en: "Do not treat the first answer as final. Use follow-ups to make it shorter, clearer, warmer, more specific, or better suited to your real situation, then edit it yourself.",
          pidgin:
            "No treat the first answer like final. Use follow-ups make e shorter, clearer, warmer, more specific, or make e fit your real situation, then edit am by yourself.",
        },
        examplePrompt: {
          en: "Improve this answer instead of starting over.\n\nHere is the answer:\n[paste the AI answer]\n\nWhat I need it for:\n[explain the real situation]\n\nPlease revise it so it is:\n- shorter\n- clearer\n- more natural\n- [add the tone you want]\n\nAlso tell me what information is missing from me.\nDo not add facts I did not provide.",
          pidgin:
            "Improve this answer instead of starting over.\n\nHere is the answer:\n[paste the AI answer]\n\nWetin I need am for:\n[explain the real situation]\n\nPlease revise am make e:\n- shorter\n- clearer\n- more natural\n- [add the tone wey you want]\n\nAlso tell me wetin information dey miss from me.\nNo add facts wey I no provide.",
        },
        practiceTask: {
          en: "Ask AI to help with one small task. Let it give you the first answer.\n\nDo not start over. Send one follow-up that names the exact change you want. For example: make it more direct, make it sound like WhatsApp, remove exaggeration, add two examples, or ask me what information is missing.\n\nThen make one final human edit before you use it.",
          pidgin:
            "Ask AI make e help you with one small task. Make e give you the first answer.\n\nNo start again. Send one follow-up wey name the exact change wey you want. For example: make am more direct, make e sound like WhatsApp, remove exaggeration, add two examples, or ask me wetin information dey miss.\n\nThen do one final human edit before you use am.",
        },
        quickCheck: [
          {
            en: "What was wrong with the first answer?",
            pidgin: "Wetin wrong with the first answer?",
          },
          {
            en: "What exact follow-up did you send?",
            pidgin: "Which exact follow-up you send?",
          },
          {
            en: "Did the second answer fit your situation better?",
            pidgin: "The second answer fit your situation better?",
          },
          {
            en: "What final edit did you make yourself?",
            pidgin: "Which final edit you do by yourself?",
          },
        ],
      },
    ],
  },
  {
    slug: "module-3",
    number: "03",
    title: {
      en: "Use AI For Real Tasks",
      pidgin: "Use AI For Real Tasks",
    },
    description: {
      en: "Apply AI to writing, research, summaries, and everyday tasks in a simple, useful way.",
      pidgin:
        "Use AI for writing, research, summaries, and everyday tasks in simple, useful way.",
    },
    lessons: [
      {
        slug: "lesson-1",
        title: {
          en: "Using AI for Writing",
          pidgin: "How to Use AI for Writing",
        },
        intro: {
          en: "AI can help you start writing when your mind is blank. The trick is to use it for drafts and direction, then make the final words sound like you.",
          pidgin:
            "AI fit help you start writing when your mind blank. The trick na to use am for draft and direction, then make the final words sound like you.",
        },
        content: [
          {
            heading: {
              en: "What AI can help you write",
              pidgin: "Wetin AI fit help you write",
            },
            body: {
              en: "AI is useful when you need a first draft, a rewrite, a caption, an email, an announcement, a WhatsApp message, a CV line, or a cleaner version of rough notes.\n\nIt helps most when you already know the real situation but you are struggling to find the words. You bring the facts. AI helps arrange them.\n\nThe important thing is this: the first answer is a draft. Do not copy it just because it looks neat. Read it, remove what is not true, add your real details, and change any line that does not sound like you.",
              pidgin:
                "AI dey useful when you need first draft, rewrite, caption, email, announcement, WhatsApp message, CV line, or cleaner version of rough notes.\n\nE dey help pass when you already sabi the real situation but words no dey come. You bring the facts. AI go help arrange am.\n\nThe important thing na this: the first answer na draft. No copy am just because e look neat. Read am, remove wetin no true, add your real details, and change any line wey no sound like you.",
            },
          },
          {
            heading: {
              en: "Give the writing some direction",
              pidgin: "Give the writing direction",
            },
            body: {
              en: "For writing, a strong prompt usually needs four things: the goal, the audience, the tone, and the key details.\n\nYou do not need to write a long brief. A few rough bullets can be enough. But AI needs to know what you are writing, who will read it, how it should sound, and which facts must be included.",
              pidgin:
                "For writing, strong prompt usually need four things: the goal, the audience, the tone, and the key details.\n\nYou no need write long brief. Few rough bullet points fit enough. But AI need know wetin you dey write, who go read am, how e suppose sound, and which facts must dey inside.",
            },
            examples: [
              {
                label: {
                  en: "Goal",
                  pidgin: "Goal",
                },
                content: {
                  en: "What are you trying to write? A WhatsApp message, email, caption, notice, proposal, or apology?",
                  pidgin:
                    "Wetin you dey try write? WhatsApp message, email, caption, notice, proposal, or apology?",
                },
              },
              {
                label: {
                  en: "Audience",
                  pidgin: "Audience",
                },
                content: {
                  en: "Who will read it? A customer, manager, parent, classmate, landlord, or group chat?",
                  pidgin:
                    "Who go read am? Customer, manager, parent, classmate, landlord, or group chat?",
                },
              },
              {
                label: {
                  en: "Tone",
                  pidgin: "Tone",
                },
                content: {
                  en: "Should it sound friendly, firm, respectful, simple, warm, direct, or apologetic?",
                  pidgin:
                    "E suppose sound friendly, firm, respectful, simple, warm, direct, or apologetic?",
                },
              },
              {
                label: {
                  en: "Key details",
                  pidgin: "Key details",
                },
                content: {
                  en: "What facts, names, prices, dates, locations, or limits must be correct?",
                  pidgin:
                    "Which facts, names, prices, dates, locations, or limits must correct?",
                },
              },
            ],
          },
          {
            heading: {
              en: "Keep your own voice",
              pidgin: "Keep your own voice",
            },
            body: {
              en: "AI writing can sound too smooth. That is not always a good thing. A message can be clean and still feel like it came from a stranger.\n\nBefore you use AI writing, ask yourself: would I say this? Is this true? Is the tone right for the person reading it? Is anything important missing?\n\nYour job is not to make AI write perfectly. Your job is to shape the draft until it fits the real person, real place, and real situation.",
              pidgin:
                "AI writing fit sound too smooth. That one no always good. Message fit clean and still feel like say na stranger write am.\n\nBefore you use AI writing, ask yourself: I fit talk like this? This thing true? The tone correct for the person wey go read am? Anything important dey miss?\n\nYour work no be to make AI write perfectly. Your work na to shape the draft until e fit the real person, real place, and real situation.",
            },
          },
          {
            heading: {
              en: "Real example",
              pidgin: "Real example",
            },
            body: {
              en: "Kemi sells thrift bags on Instagram in Ibadan. A customer asks if a black tote bag is still available. Kemi wants to reply quickly, mention the price, and encourage the customer to pay before someone else picks it.",
              pidgin:
                "Kemi dey sell thrift bags for Instagram for Ibadan. Customer ask whether black tote bag still dey available. Kemi want reply quick, mention the price, and encourage the customer make she pay before another person pick am.",
            },
            examples: [
              {
                label: {
                  en: "Kemi's rough request",
                  pidgin: "Kemi rough request",
                },
                content: {
                  en: "Write a reply to a customer asking about a bag.",
                  pidgin: "Write reply give customer wey ask about bag.",
                },
              },
              {
                label: {
                  en: "AI gave back",
                  pidgin: "AI give back",
                },
                content: {
                  en: "Hello, thank you for your interest in the bag. It is still available. Please let me know if you would like to purchase it.",
                  pidgin:
                    "Hello, thank you for your interest in the bag. It is still available. Please let me know if you would like to purchase it.",
                },
              },
              {
                label: {
                  en: "What felt off",
                  pidgin: "Wetin no balance",
                },
                content: {
                  en: "The reply was correct, but too plain. It did not mention the price, payment, delivery, or the fact that thrift items can sell fast. It also sounded a bit too formal for Instagram DM.",
                  pidgin:
                    "The reply correct, but e too plain. E no mention price, payment, delivery, or say thrift items fit sell fast. E still sound too formal for Instagram DM.",
                },
              },
              {
                label: {
                  en: "The improved prompt",
                  pidgin: "The improved prompt",
                },
                content: {
                  en: "Write a short Instagram DM reply to a customer asking if a black thrift tote bag is still available.\n\nDetails:\nPrice: N12,000\nLocation: Ibadan\nDelivery: available, fee depends on area\nTone: friendly, natural, not too formal\nMention that payment confirms the order because it is a thrift item.",
                  pidgin:
                    "Write short Instagram DM reply give customer wey ask if black thrift tote bag still dey available.\n\nDetails:\nPrice: N12,000\nLocation: Ibadan\nDelivery: dey available, fee depend on area\nTone: friendly, natural, no too formal\nMention say payment dey confirm order because na thrift item.",
                },
              },
              {
                label: {
                  en: "Better final version",
                  pidgin: "Better final version",
                },
                content: {
                  en: "Yes, it is still available. The black tote is N12,000. Delivery is available in Ibadan, and the fee depends on your area. Since it is thrift, payment confirms the order. I can send payment details if you want to take it.",
                  pidgin:
                    "Yes, e still dey available. The black tote na N12,000. Delivery dey available for Ibadan, and fee depend on your area. Since na thrift, payment dey confirm order. I fit send payment details if you want take am.",
                },
              },
            ],
          },
          {
            heading: {
              en: "Why the improved version worked",
              pidgin: "Why the improved version work",
            },
            body: {
              en: "The second prompt gave AI the real job. It named the channel, the customer, the product, the price, the delivery detail, and the tone.\n\nKemi still needs to read the answer before sending it. She might add the customer's name or make the last line shorter. But the draft is now useful because it is built from her real details.",
              pidgin:
                "The second prompt give AI the real work. E mention the channel, the customer, the product, the price, delivery detail, and the tone.\n\nKemi still need read the answer before she send am. She fit add customer name or make the last line shorter. But the draft useful now because e come from her real details.",
            },
          },
          {
            heading: {
              en: "One thing to avoid",
              pidgin: "One thing to avoid",
            },
            body: {
              en: "Do not let AI erase your voice. If you normally write simply, keep it simple. If your customer already knows you, do not send a message that sounds like a bank email.\n\nUse AI to get unstuck, not to sound like someone else.",
              pidgin:
                "No let AI erase your voice. If you normally write simple, keep am simple. If your customer already sabi you, no send message wey sound like bank email.\n\nUse AI make you no stuck, no use am sound like another person.",
            },
          },
          {
            heading: {
              en: "Before you try it",
              pidgin: "Before you try am",
            },
            body: {
              en: "The prompt below helps you turn rough writing notes into a first draft. Use it for a message, email, caption, announcement, or short update.",
              pidgin:
                "The prompt below go help you turn rough writing notes into first draft. Use am for message, email, caption, announcement, or short update.",
            },
          },
        ],
        keyTakeaway: {
          en: "AI can help you start writing, but the final voice should still be yours. Give it the goal, audience, tone, and key details, then edit the draft before using it.",
          pidgin:
            "AI fit help you start writing, but the final voice suppose still be your own. Give am the goal, audience, tone, and key details, then edit the draft before you use am.",
        },
        examplePrompt: {
          en: "Turn these rough notes into a clear first draft.\n\nWhat I am writing:\n[WhatsApp message, email, caption, announcement, or other]\n\nAudience:\n[who will read it]\n\nTone:\n[friendly, firm, respectful, warm, direct, or simple]\n\nKey details:\n[paste your rough notes, prices, dates, names, or facts]\n\nRules:\n- Do not add facts I did not give you\n- Keep it natural\n- Give me 2 options\n- After the draft, tell me what I should check before sending",
          pidgin:
            "Turn these rough notes into clear first draft.\n\nWetin I dey write:\n[WhatsApp message, email, caption, announcement, or other]\n\nAudience:\n[who go read am]\n\nTone:\n[friendly, firm, respectful, warm, direct, or simple]\n\nKey details:\n[paste your rough notes, prices, dates, names, or facts]\n\nRules:\n- No add facts wey I no give you\n- Make e natural\n- Give me 2 options\n- After the draft, tell me wetin I suppose check before I send am",
        },
        practiceTask: {
          en: "Choose one real thing you need to write this week. It can be a WhatsApp reply, email, caption, notice, or short update.\n\nWrite your rough notes first. Then paste them into the prompt above. When AI gives you the draft, change at least two lines yourself before you use it.",
          pidgin:
            "Choose one real thing wey you need write this week. E fit be WhatsApp reply, email, caption, notice, or short update.\n\nWrite your rough notes first. Then paste am inside the prompt above. When AI give you the draft, change at least two lines by yourself before you use am.",
        },
        quickCheck: [
          {
            en: "What is the goal of the message?",
            pidgin: "Wetin be the goal of the message?",
          },
          {
            en: "Who is going to read it?",
            pidgin: "Who go read am?",
          },
          {
            en: "Which line sounds least like you?",
            pidgin: "Which line no sound like you?",
          },
          {
            en: "What detail must be checked before sending?",
            pidgin: "Which detail you must check before you send am?",
          },
        ],
      },
      {
        slug: "lesson-2",
        title: {
          en: "Using AI for Research and Summaries",
          pidgin: "How to Use AI for Research and Summary",
        },
        intro: {
          en: "AI can help you understand long or confusing information faster. But it should help you think and check, not replace the source of truth.",
          pidgin:
            "AI fit help you understand long or confusing information faster. But e suppose help you think and check, no replace the source of truth.",
        },
        content: [
          {
            heading: {
              en: "What AI is good for here",
              pidgin: "Wetin AI good for here",
            },
            body: {
              en: "AI is useful when you need to understand information quickly. You can paste a long note, article, message, meeting transcript, school material, or policy, then ask AI to explain it in simpler words.\n\nIt can pull out the main idea, key points, action items, confusing parts, and questions you should ask next.\n\nBut AI can also miss details or explain something wrongly. For important information, especially anything about money, health, law, school, work rules, or deadlines, check from the original source or someone responsible.",
              pidgin:
                "AI dey useful when you need understand information quick. You fit paste long note, article, message, meeting transcript, school material, or policy, then ask AI make e explain am with simpler words.\n\nE fit bring out the main idea, key points, action items, confusing parts, and questions wey you suppose ask next.\n\nBut AI fit still miss details or explain something wrongly. For important information, especially anything about money, health, law, school, work rules, or deadlines, check from the original source or person wey responsible.",
            },
          },
          {
            heading: {
              en: "A simple summary framework",
              pidgin: "Simple summary framework",
            },
            body: {
              en: "Do not only ask, summarise this. That can give you a neat paragraph that still hides what you need.\n\nAsk AI to separate the answer into parts. This makes the summary easier to check and easier to use.",
              pidgin:
                "No just ask, summarise this. That one fit give you neat paragraph wey still hide wetin you need.\n\nAsk AI make e separate the answer into parts. This one dey make the summary easier to check and easier to use.",
            },
            examples: [
              {
                label: {
                  en: "Main idea",
                  pidgin: "Main idea",
                },
                content: {
                  en: "What is this text mostly about?",
                  pidgin: "This text mostly dey about wetin?",
                },
              },
              {
                label: {
                  en: "Key points",
                  pidgin: "Key points",
                },
                content: {
                  en: "What are the most important things to remember?",
                  pidgin: "Which things important pass make person remember?",
                },
              },
              {
                label: {
                  en: "Questions",
                  pidgin: "Questions",
                },
                content: {
                  en: "What should I ask or clarify before acting on this?",
                  pidgin: "Wetin I suppose ask or clarify before I act on this?",
                },
              },
              {
                label: {
                  en: "Needs checking",
                  pidgin: "Need checking",
                },
                content: {
                  en: "What facts, dates, prices, rules, or claims should I verify?",
                  pidgin:
                    "Which facts, dates, prices, rules, or claims I suppose verify?",
                },
              },
            ],
          },
          {
            heading: {
              en: "Research is not the same as truth",
              pidgin: "Research no be the same as truth",
            },
            body: {
              en: "AI can make information easier to understand, but do not treat its answer as final truth. It can mix things up. It can sound confident about something that needs checking.\n\nIf you are using the answer for an assignment, business decision, work report, legal issue, medical issue, money decision, or public post, verify the important parts. Check the original document, official website, teacher, manager, expert, or trusted source.",
              pidgin:
                "AI fit make information easier to understand, but no treat the answer like final truth. E fit mix things up. E fit sound confident about something wey need checking.\n\nIf you dey use the answer for assignment, business decision, work report, legal matter, medical matter, money decision, or public post, verify the important parts. Check the original document, official website, teacher, manager, expert, or trusted source.",
            },
          },
          {
            heading: {
              en: "Real example",
              pidgin: "Real example",
            },
            body: {
              en: "Damilola is a student in Abeokuta. Her class rep sends a long WhatsApp message about a group assignment. The message has deadlines, group rules, and what each person should submit. Damilola wants a clear summary before she replies.",
              pidgin:
                "Damilola na student for Abeokuta. Her class rep send long WhatsApp message about group assignment. The message get deadlines, group rules, and wetin each person suppose submit. Damilola want clear summary before she reply.",
            },
            examples: [
              {
                label: {
                  en: "What she pasted",
                  pidgin: "Wetin she paste",
                },
                content: {
                  en: "Group 4, please note that our sociology assignment is due next Friday by 6pm. Everyone must submit their section to me by Wednesday night so we can edit on Thursday. Tobi and Rukayat should handle introduction. Damilola and Peace should handle causes and effects. Ahmed should handle recommendations. Please include at least two sources each. We also need one person to prepare slides before Friday morning.",
                  pidgin:
                    "Group 4, please note that our sociology assignment is due next Friday by 6pm. Everybody must submit their section to me by Wednesday night so we can edit on Thursday. Tobi and Rukayat go handle introduction. Damilola and Peace go handle causes and effects. Ahmed go handle recommendations. Please include at least two sources each. We also need one person to prepare slides before Friday morning.",
                },
              },
              {
                label: {
                  en: "What she asked AI",
                  pidgin: "Wetin she ask AI",
                },
                content: {
                  en: "Summarise this class group message for me.\n\nSeparate it into:\n1. Main idea\n2. My own task\n3. Deadlines\n4. Questions I should ask\n5. Anything I need to verify before I start",
                  pidgin:
                    "Summarise this class group message for me.\n\nSeparate am into:\n1. Main idea\n2. My own task\n3. Deadlines\n4. Questions I suppose ask\n5. Anything I need verify before I start",
                },
              },
              {
                label: {
                  en: "AI gave back",
                  pidgin: "AI give back",
                },
                content: {
                  en: "Main idea: Group 4 needs to submit the sociology assignment by next Friday at 6pm.\n\nYour task: You and Peace should handle causes and effects, with at least two sources each.\n\nDeadlines: Send your section by Wednesday night. Editing happens Thursday. Slides should be ready before Friday morning.\n\nQuestions to ask: Who is preparing the slides? How long should each section be? What citation style should you use?\n\nNeeds checking: Confirm the exact topic and whether the final submission is online or printed.",
                  pidgin:
                    "Main idea: Group 4 need submit sociology assignment by next Friday 6pm.\n\nYour task: You and Peace suppose handle causes and effects, with at least two sources each.\n\nDeadlines: Send your section by Wednesday night. Editing na Thursday. Slides suppose ready before Friday morning.\n\nQuestions to ask: Who go prepare the slides? How long each section suppose be? Which citation style una go use?\n\nNeeds checking: Confirm the exact topic and whether final submission na online or printed.",
                },
              },
              {
                label: {
                  en: "What was useful",
                  pidgin: "Wetin useful",
                },
                content: {
                  en: "Damilola could quickly see her own task, the deadlines, and the questions to ask. She did not need to reread the long message five times.",
                  pidgin:
                    "Damilola fit quick see her own task, the deadlines, and the questions to ask. She no need read the long message five times.",
                },
              },
              {
                label: {
                  en: "What she still checked",
                  pidgin: "Wetin she still check",
                },
                content: {
                  en: "She checked the original message again for the deadline and asked the class rep for the exact assignment topic. She did not depend only on AI for those details.",
                  pidgin:
                    "She check the original message again for the deadline and ask class rep for the exact assignment topic. She no depend only on AI for those details.",
                },
              },
            ],
          },
          {
            heading: {
              en: "Why this worked",
              pidgin: "Why this one work",
            },
            body: {
              en: "Damilola did not ask for a vague summary. She asked AI to separate the answer into useful parts. That made it easier to act on the information and easier to see what still needed checking.\n\nThis is the habit: use AI to make information clearer, then verify what matters.",
              pidgin:
                "Damilola no ask for vague summary. She ask AI make e separate the answer into useful parts. That make am easier to act on the information and easier to see wetin still need checking.\n\nNa the habit be this: use AI make information clearer, then verify wetin matter.",
            },
          },
          {
            heading: {
              en: "One thing to avoid",
              pidgin: "One thing to avoid",
            },
            body: {
              en: "Do not quote AI as your source. If you need to cite, report, submit, or make a serious decision, go back to the original material or a trusted source.\n\nAI can help you understand the road. It should not be the only map.",
              pidgin:
                "No quote AI as your source. If you need cite, report, submit, or make serious decision, go back to the original material or trusted source.\n\nAI fit help you understand the road. E no suppose be the only map.",
            },
          },
          {
            heading: {
              en: "Before you try it",
              pidgin: "Before you try am",
            },
            body: {
              en: "Use the prompt below when you have a long text, notes, class message, article, meeting update, or document you need to understand quickly.",
              pidgin:
                "Use the prompt below when you get long text, notes, class message, article, meeting update, or document wey you need understand quick.",
            },
          },
        ],
        keyTakeaway: {
          en: "AI can help you understand information faster, but it is not the final source of truth. Ask for main idea, key points, questions, and what needs checking.",
          pidgin:
            "AI fit help you understand information faster, but e no be final source of truth. Ask for main idea, key points, questions, and wetin need checking.",
        },
        examplePrompt: {
          en: "Summarise this text for me in a way I can actually use.\n\nText:\n[paste the text]\n\nPlease separate the answer into:\n1. Main idea\n2. Key points\n3. Action items\n4. Questions I should ask next\n5. Facts, dates, numbers, rules, or claims I should verify\n\nUse simple language. If anything is unclear, say so.",
          pidgin:
            "Summarise this text for me in a way wey I fit actually use.\n\nText:\n[paste the text]\n\nPlease separate the answer into:\n1. Main idea\n2. Key points\n3. Action items\n4. Questions I suppose ask next\n5. Facts, dates, numbers, rules, or claims wey I suppose verify\n\nUse simple language. If anything no clear, talk am.",
        },
        practiceTask: {
          en: "Find one long message, note, article, or document you need to understand. Paste it into the prompt above.\n\nRead the summary, then compare it with the original. Mark one useful point, one question you need to ask, and one fact you should verify outside AI.",
          pidgin:
            "Find one long message, note, article, or document wey you need understand. Paste am inside the prompt above.\n\nRead the summary, then compare am with the original. Mark one useful point, one question wey you need ask, and one fact wey you suppose verify outside AI.",
        },
        quickCheck: [
          {
            en: "What is the main idea of the text?",
            pidgin: "Wetin be the main idea of the text?",
          },
          {
            en: "What action do you need to take?",
            pidgin: "Which action you need take?",
          },
          {
            en: "What question should you ask before acting?",
            pidgin: "Which question you suppose ask before you act?",
          },
          {
            en: "Which fact should you verify from the original source?",
            pidgin: "Which fact you suppose verify from the original source?",
          },
        ],
      },
      {
        slug: "lesson-3",
        title: {
          en: "Using AI in Everyday Tasks",
          pidgin: "How to Use AI for Everyday Tasks",
        },
        intro: {
          en: "AI is not only for big work. It can help you plan, organise, make checklists, think through options, and handle small tasks with less stress.",
          pidgin:
            "AI no be only for big work. E fit help you plan, organise, make checklist, think through options, and handle small tasks with less stress.",
        },
        content: [
          {
            heading: {
              en: "Start with small real tasks",
              pidgin: "Start with small real tasks",
            },
            body: {
              en: "Everyday AI use does not need to be dramatic. You can use it to plan a busy week, organise errands, make a shopping list, create a study routine, compare options, turn messy notes into steps, or think through a small budget.\n\nThe best place to start is with something you already need to do. Not a pretend task. A real task from your week.\n\nAI is helpful here because it can arrange your thoughts. But you still decide what fits your time, money, energy, and real life.",
              pidgin:
                "Everyday AI use no need dramatic. You fit use am plan busy week, organise errands, make shopping list, create study routine, compare options, turn messy notes into steps, or think through small budget.\n\nThe best place to start na something wey you already need do. No be pretend task. Real task from your week.\n\nAI dey helpful here because e fit arrange your thoughts. But na you still decide wetin fit your time, money, energy, and real life.",
            },
          },
          {
            heading: {
              en: "Give AI your real limits",
              pidgin: "Give AI your real limits",
            },
            body: {
              en: "For everyday tasks, AI works better when you explain the real situation. Tell it your time, budget, location, deadline, energy level, what you already have, and what cannot change.\n\nIf you hide the limits, AI may give you a plan that looks nice but cannot work. A realistic plan is better than a perfect-looking plan.",
              pidgin:
                "For everyday tasks, AI dey work better when you explain the real situation. Tell am your time, budget, location, deadline, energy level, wetin you already get, and wetin no fit change.\n\nIf you hide the limits, AI fit give you plan wey look nice but no fit work. Realistic plan better pass plan wey only look perfect.",
            },
            examples: [
              {
                label: {
                  en: "Time",
                  pidgin: "Time",
                },
                content: {
                  en: "How much time do you actually have?",
                  pidgin: "How much time you actually get?",
                },
              },
              {
                label: {
                  en: "Money",
                  pidgin: "Money",
                },
                content: {
                  en: "What is your budget or spending limit?",
                  pidgin: "Wetin be your budget or spending limit?",
                },
              },
              {
                label: {
                  en: "Place",
                  pidgin: "Place",
                },
                content: {
                  en: "Where are you starting from, and where do you need to go?",
                  pidgin:
                    "Where you dey start from, and where you need go?",
                },
              },
              {
                label: {
                  en: "Energy",
                  pidgin: "Energy",
                },
                content: {
                  en: "Do you need a light plan or can you handle a packed day?",
                  pidgin:
                    "You need light plan or you fit handle packed day?",
                },
              },
            ],
          },
          {
            heading: {
              en: "Ask for something you can use",
              pidgin: "Ask for something wey you fit use",
            },
            body: {
              en: "Do not stop at advice. Ask AI to turn the answer into a checklist, simple schedule, shopping list, step-by-step plan, message, or table.\n\nThe output should help you move. If the answer is too broad, ask for the first three steps. If it is too much, ask AI to make it lighter. If it ignores your budget or time, tell it to adjust.",
              pidgin:
                "No stop for advice. Ask AI make e turn the answer into checklist, simple schedule, shopping list, step-by-step plan, message, or table.\n\nThe output suppose help you move. If the answer too broad, ask for the first three steps. If e too much, ask AI make e lighter. If e ignore your budget or time, tell am make e adjust.",
            },
          },
          {
            heading: {
              en: "Real example",
              pidgin: "Real example",
            },
            body: {
              en: "Bisi works during the week and has a packed Saturday in Lagos. She needs to go to the market, cook soup, wash clothes, visit her auntie, and prepare for Monday. She only has from 8am to 6pm and does not want to exhaust herself.",
              pidgin:
                "Bisi dey work during the week and her Saturday packed for Lagos. She need go market, cook soup, wash clothes, visit her auntie, and prepare for Monday. She only get 8am to 6pm and she no want tire finish.",
            },
            examples: [
              {
                label: {
                  en: "What Bisi asked first",
                  pidgin: "Wetin Bisi ask first",
                },
                content: {
                  en: "Help me plan my Saturday.",
                  pidgin: "Help me plan my Saturday.",
                },
              },
              {
                label: {
                  en: "AI gave back",
                  pidgin: "AI give back",
                },
                content: {
                  en: "Start with exercise, then make breakfast, clean the house, do laundry, go shopping, visit family, prepare meals, and relax in the evening.",
                  pidgin:
                    "Start with exercise, then make breakfast, clean the house, do laundry, go shopping, visit family, prepare meals, and relax in the evening.",
                },
              },
              {
                label: {
                  en: "What was weak",
                  pidgin: "Wetin weak",
                },
                content: {
                  en: "The answer was too general. It added exercise and cleaning even though Bisi did not ask for them. It did not consider Lagos movement, market time, cooking time, or her energy.",
                  pidgin:
                    "The answer too general. E add exercise and cleaning even though Bisi no ask for them. E no consider Lagos movement, market time, cooking time, or her energy.",
                },
              },
              {
                label: {
                  en: "The improved prompt",
                  pidgin: "The improved prompt",
                },
                content: {
                  en: "Help me plan my Saturday realistically.\n\nLocation: Lagos\nAvailable time: 8am to 6pm\nTasks: go to market, cook soup, wash clothes, visit my auntie for 1 hour, prepare clothes and bag for Monday\nEnergy: I do not want a packed plan\nOutput: give me a simple schedule and a checklist\nNote: include buffer time for traffic and rest",
                  pidgin:
                    "Help me plan my Saturday realistically.\n\nLocation: Lagos\nAvailable time: 8am to 6pm\nTasks: go market, cook soup, wash clothes, visit my auntie for 1 hour, prepare clothes and bag for Monday\nEnergy: I no want packed plan\nOutput: give me simple schedule and checklist\nNote: include buffer time for traffic and rest",
                },
              },
              {
                label: {
                  en: "Better plan",
                  pidgin: "Better plan",
                },
                content: {
                  en: "8:00 to 9:30, market run.\n9:30 to 10:00, rest and sort food items.\n10:00 to 12:30, cook soup.\n12:30 to 1:15, eat and rest.\n1:15 to 2:30, wash clothes.\n2:30 to 4:30, visit auntie, including movement time.\n4:30 to 5:30, prepare clothes and bag for Monday.\n5:30 to 6:00, check what is left and stop.",
                  pidgin:
                    "8:00 to 9:30, market run.\n9:30 to 10:00, rest and sort food items.\n10:00 to 12:30, cook soup.\n12:30 to 1:15, eat and rest.\n1:15 to 2:30, wash clothes.\n2:30 to 4:30, visit auntie, including movement time.\n4:30 to 5:30, prepare clothes and bag for Monday.\n5:30 to 6:00, check wetin remain and stop.",
                },
              },
              {
                label: {
                  en: "What Bisi adjusted",
                  pidgin: "Wetin Bisi adjust",
                },
                content: {
                  en: "Bisi moved the auntie visit to Sunday because traffic might waste time. She kept the market, cooking, laundry, and Monday prep. The final plan was lighter and easier to follow.",
                  pidgin:
                    "Bisi move the auntie visit go Sunday because traffic fit waste time. She keep market, cooking, laundry, and Monday prep. The final plan come lighter and easier to follow.",
                },
              },
            ],
          },
          {
            heading: {
              en: "Why the final plan helped",
              pidgin: "Why the final plan help",
            },
            body: {
              en: "The improved prompt gave AI real limits. It included time, place, tasks, energy level, and the kind of output Bisi wanted.\n\nBut Bisi still made the final decision. That is how everyday AI should work. Let it organise the options, then choose what fits your life.",
              pidgin:
                "The improved prompt give AI real limits. E include time, place, tasks, energy level, and the kind output wey Bisi want.\n\nBut Bisi still make the final decision. Na how everyday AI suppose work. Make e organise the options, then choose wetin fit your life.",
            },
          },
          {
            heading: {
              en: "One thing to avoid",
              pidgin: "One thing to avoid",
            },
            body: {
              en: "Do not follow an AI plan blindly. AI does not feel your tiredness, know your exact transport situation, or understand every family expectation.\n\nUse the plan as a starting point. Adjust it like a real person living your real life.",
              pidgin:
                "No follow AI plan blindly. AI no dey feel your tiredness, e no know your exact transport situation, and e no understand every family expectation.\n\nUse the plan as starting point. Adjust am like real person wey dey live your real life.",
            },
          },
          {
            heading: {
              en: "Before you try it",
              pidgin: "Before you try am",
            },
            body: {
              en: "Use the prompt below for any small everyday task that needs planning. Start with something real and simple.",
              pidgin:
                "Use the prompt below for any small everyday task wey need planning. Start with something real and simple.",
            },
          },
        ],
        keyTakeaway: {
          en: "AI can help with everyday planning, but the best answers come from your real situation. Give it your time, budget, place, limits, and task list, then adjust the plan yourself.",
          pidgin:
            "AI fit help with everyday planning, but the best answers dey come from your real situation. Give am your time, budget, place, limits, and task list, then adjust the plan by yourself.",
        },
        examplePrompt: {
          en: "Help me plan this everyday task realistically.\n\nWhat I need to do:\n[paste your tasks]\n\nMy real situation:\nTime available: [add time]\nLocation: [add location]\nBudget or limit: [add budget or limit]\nEnergy level: [light, normal, or tired]\nWhat cannot change: [add anything fixed]\n\nPlease give me:\n1. A realistic order\n2. A simple schedule or checklist\n3. What to do first\n4. What I should remove or move if the plan is too much",
          pidgin:
            "Help me plan this everyday task realistically.\n\nWetin I need do:\n[paste your tasks]\n\nMy real situation:\nTime available: [add time]\nLocation: [add location]\nBudget or limit: [add budget or limit]\nEnergy level: [light, normal, or tired]\nWetin no fit change: [add anything fixed]\n\nPlease give me:\n1. Realistic order\n2. Simple schedule or checklist\n3. Wetin I suppose do first\n4. Wetin I suppose remove or move if the plan too much",
        },
        practiceTask: {
          en: "Write down five tasks you need to handle this week. Choose one day and add your real limits: time, location, budget, and energy level.\n\nPaste everything into the prompt above. When AI gives you a plan, remove one thing that feels unrealistic and adjust one time block yourself.",
          pidgin:
            "Write down five tasks wey you need handle this week. Choose one day and add your real limits: time, location, budget, and energy level.\n\nPaste everything inside the prompt above. When AI give you plan, remove one thing wey no realistic and adjust one time block by yourself.",
        },
        quickCheck: [
          {
            en: "What real task did you ask AI to help with?",
            pidgin: "Which real task you ask AI make e help with?",
          },
          {
            en: "What limits did you give it?",
            pidgin: "Which limits you give am?",
          },
          {
            en: "Which part of the plan felt unrealistic?",
            pidgin: "Which part of the plan no feel realistic?",
          },
          {
            en: "What did you change so the plan fits your life?",
            pidgin: "Wetin you change so the plan go fit your life?",
          },
        ],
      },
    ],
  },
  {
    slug: "module-4",
    number: "04",
    title: {
      en: "Study, Decide, And Stay Safe",
      pidgin: "Study, Decide, And Stay Safe",
    },
    description: {
      en: "Use AI for learning and everyday decisions while protecting your privacy and checking important facts.",
      pidgin:
        "Use AI for learning and everyday decisions while you protect your privacy and check important facts.",
    },
    lessons: [
      {
        slug: "lesson-1",
        title: {
          en: "When AI Gets Things Wrong",
          pidgin: "When AI Answer Wrong",
        },
        intro: {
          en: "AI can sound confident and still be wrong. The point is not to fear it. The point is to know when to slow down and check.",
          pidgin:
            "AI fit sound confident and still wrong. No be to fear am. The point na to know when you suppose slow down and check.",
        },
        content: [
          {
            heading: {
              en: "Why wrong answers happen",
              pidgin: "Why wrong answers dey happen",
            },
            body: {
              en: "AI does not know everything. Sometimes it guesses. Sometimes your prompt is too vague. Sometimes the topic is sensitive. Sometimes the facts are current, and the tool may not have the latest information.\n\nThe confusing part is that AI can write the wrong answer in a very clean voice. It may give you names, dates, prices, rules, or links that look real. That is why you should not judge an answer only by how polished it sounds.\n\nUse AI for help, but pause before you post, apply, buy, advise someone, or make a serious decision from its answer.",
              pidgin:
                "AI no sabi everything. Sometimes e dey guess. Sometimes your prompt too vague. Sometimes the topic sensitive. Sometimes the facts dey current, and the tool fit no get latest information.\n\nThe confusing part be say AI fit write wrong answer with very clean voice. E fit give you names, dates, prices, rules, or links wey look real. Na why you no suppose judge answer only by how polished e sound.\n\nUse AI for help, but pause before you post, apply, buy, advise person, or make serious decision from the answer.",
            },
          },
          {
            heading: {
              en: "Check four things",
              pidgin: "Check four things",
            },
            body: {
              en: "Before you trust an AI answer, check these four things. You will not need the same level of checking for every small task, but this habit matters when the answer could affect money, work, school, health, law, safety, or another person.",
              pidgin:
                "Before you trust AI answer, check these four things. You no need the same level of checking for every small task, but this habit matter when the answer fit affect money, work, school, health, law, safety, or another person.",
            },
            examples: [
              {
                label: {
                  en: "Facts",
                  pidgin: "Facts",
                },
                content: {
                  en: "Are the names, dates, prices, places, links, rules, or claims correct?",
                  pidgin:
                    "The names, dates, prices, places, links, rules, or claims correct?",
                },
              },
              {
                label: {
                  en: "Fit",
                  pidgin: "Fit",
                },
                content: {
                  en: "Does this answer match your real situation, location, audience, and limits?",
                  pidgin:
                    "The answer match your real situation, location, audience, and limits?",
                },
              },
              {
                label: {
                  en: "Tone",
                  pidgin: "Tone",
                },
                content: {
                  en: "Does it sound right for the person reading it?",
                  pidgin: "E sound right for the person wey go read am?",
                },
              },
              {
                label: {
                  en: "Risk",
                  pidgin: "Risk",
                },
                content: {
                  en: "What problem could happen if this answer is wrong?",
                  pidgin: "Wetin fit happen if this answer wrong?",
                },
              },
            ],
          },
          {
            heading: {
              en: "Real example",
              pidgin: "Real example",
            },
            body: {
              en: "Chinedu runs a small printing shop in Enugu. He sees a forwarded WhatsApp message about a business support programme and wants to post it in a group for other small business owners. Before posting, he asks AI to make the message clearer.",
              pidgin:
                "Chinedu get small printing shop for Enugu. He see forwarded WhatsApp message about business support programme and wan post am for group wey small business owners dey. Before e post, e ask AI make e make the message clearer.",
            },
            examples: [
              {
                label: {
                  en: "What Chinedu typed",
                  pidgin: "Wetin Chinedu type",
                },
                content: {
                  en: "Rewrite this business grant message so it sounds clear and helpful for small business owners in Nigeria. Mention the deadline and how to apply.",
                  pidgin:
                    "Rewrite this business grant message make e clear and helpful for small business owners for Nigeria. Mention the deadline and how to apply.",
                },
              },
              {
                label: {
                  en: "AI gave back",
                  pidgin: "AI give back",
                },
                content: {
                  en: "Small business owners can apply for the 2026 SME Support Grant before May 30. Visit the official portal, fill the form, upload your CAC certificate, and wait for confirmation. Do not miss this opportunity.",
                  pidgin:
                    "Small business owners fit apply for the 2026 SME Support Grant before May 30. Visit the official portal, fill the form, upload your CAC certificate, and wait for confirmation. No miss this opportunity.",
                },
              },
              {
                label: {
                  en: "What looked okay",
                  pidgin: "Wetin look okay",
                },
                content: {
                  en: "The message sounded clear. It had a deadline, a process, and a confident tone. It looked ready to post.",
                  pidgin:
                    "The message clear. E get deadline, process, and confident tone. E look ready to post.",
                },
              },
              {
                label: {
                  en: "What was risky",
                  pidgin: "Wetin risky",
                },
                content: {
                  en: "AI invented details. Chinedu had not provided the official programme name, deadline, portal, or CAC rule. If he posted it, people could trust wrong information or click a fake link later.",
                  pidgin:
                    "AI invent details. Chinedu no give official programme name, deadline, portal, or CAC rule. If e post am, people fit trust wrong information or click fake link later.",
                },
              },
              {
                label: {
                  en: "How he checked it",
                  pidgin: "How e check am",
                },
                content: {
                  en: "He searched for the programme on the official organisation page, checked the original WhatsApp message again, and asked the sender where the information came from. He could not confirm the deadline, so he removed it.",
                  pidgin:
                    "E search for the programme for official organisation page, check the original WhatsApp message again, and ask the sender where the information come from. E no fit confirm the deadline, so e remove am.",
                },
              },
              {
                label: {
                  en: "Safer final version",
                  pidgin: "Safer final version",
                },
                content: {
                  en: "I saw this business support message being shared. Please check the official source before applying or sending any documents. I have not confirmed the deadline or portal yet. If anyone has the official link, please share it here.",
                  pidgin:
                    "I see this business support message wey people dey share. Abeg check official source before you apply or send any document. I never confirm the deadline or portal yet. If anybody get official link, make una share am here.",
                },
              },
            ],
          },
          {
            heading: {
              en: "Why the safer version worked",
              pidgin: "Why the safer version work",
            },
            body: {
              en: "Chinedu did not pretend to know what he had not confirmed. He still shared useful information, but he removed the invented details and told people to check the source.\n\nThat is responsible AI use. You can use the draft, but you must not let AI turn guesses into facts.",
              pidgin:
                "Chinedu no pretend say e sabi wetin e never confirm. E still share useful information, but e remove the invented details and tell people make dem check the source.\n\nNa responsible AI use be that. You fit use the draft, but no let AI turn guesses into facts.",
            },
          },
          {
            heading: {
              en: "One thing to avoid",
              pidgin: "One thing to avoid",
            },
            body: {
              en: "Do not post, forward, submit, or advise someone with an AI answer you have not checked, especially when the answer includes dates, money, links, rules, medical advice, legal advice, or application steps.\n\nA confident answer still needs checking.",
              pidgin:
                "No post, forward, submit, or advise person with AI answer wey you never check, especially when the answer get dates, money, links, rules, medical advice, legal advice, or application steps.\n\nConfident answer still need checking.",
            },
          },
          {
            heading: {
              en: "Before you try it",
              pidgin: "Before you try am",
            },
            body: {
              en: "Use the prompt below when AI gives you an answer you may post, submit, send, or act on. It helps you slow down before using the answer.",
              pidgin:
                "Use the prompt below when AI give you answer wey you fit post, submit, send, or act on. E go help you slow down before you use the answer.",
            },
          },
        ],
        keyTakeaway: {
          en: "AI can sound sure and still be wrong. Before you depend on an answer, check the facts, fit, tone, and risk.",
          pidgin:
            "AI fit sound sure and still wrong. Before you depend on answer, check the facts, fit, tone, and risk.",
        },
        examplePrompt: {
          en: "Review this AI answer before I use it.\n\nAnswer:\n[paste the answer]\n\nMy situation:\n[explain what I want to use it for]\n\nPlease check:\n1. What facts might be wrong or invented?\n2. What needs to be verified from a trusted source?\n3. Does the answer fit my real situation?\n4. Is the tone right for the audience?\n5. What could go wrong if I use this without checking?\n\nGive me a safer version I can use after I verify the important details.",
          pidgin:
            "Review this AI answer before I use am.\n\nAnswer:\n[paste the answer]\n\nMy situation:\n[explain wetin I wan use am for]\n\nPlease check:\n1. Which facts fit wrong or invented?\n2. Wetin need verification from trusted source?\n3. The answer fit my real situation?\n4. The tone correct for the audience?\n5. Wetin fit go wrong if I use am without checking?\n\nGive me safer version wey I fit use after I verify the important details.",
        },
        practiceTask: {
          en: "Take one AI answer you might use for a real task. It can be a message, caption, application note, study answer, or advice.\n\nPaste it into the prompt above. Mark one fact to check, one line to rewrite, and one risk to think about before using it.",
          pidgin:
            "Take one AI answer wey you fit use for real task. E fit be message, caption, application note, study answer, or advice.\n\nPaste am inside the prompt above. Mark one fact to check, one line to rewrite, and one risk to think about before you use am.",
        },
        quickCheck: [
          {
            en: "Which fact in the answer needs checking?",
            pidgin: "Which fact inside the answer need checking?",
          },
          {
            en: "Does the answer fit your real situation?",
            pidgin: "The answer fit your real situation?",
          },
          {
            en: "What could go wrong if the answer is false?",
            pidgin: "Wetin fit go wrong if the answer false?",
          },
          {
            en: "What safer version would you use?",
            pidgin: "Which safer version you go use?",
          },
        ],
      },
      {
        slug: "lesson-2",
        title: {
          en: "What Not to Share with AI",
          pidgin: "Wetin You No Suppose Share with AI",
        },
        intro: {
          en: "AI can help with sensitive situations, but you do not need to paste every private detail. You can get help while protecting yourself and other people.",
          pidgin:
            "AI fit help with sensitive situations, but you no need paste every private detail. You fit get help while you protect yourself and other people.",
        },
        content: [
          {
            heading: {
              en: "Private details need care",
              pidgin: "Private details need care",
            },
            body: {
              en: "Do not paste private information into AI carelessly. Avoid passwords, OTPs, bank details, card details, full home addresses, private customer data, secret business information, full private chats, medical details, legal details, and anything that could harm someone if exposed.\n\nThis does not mean AI cannot help. It means you should remove or replace sensitive details before asking.\n\nYou can say customer instead of the person's real name. You can say my bank instead of naming the account. You can describe the issue without pasting the full private chat.",
              pidgin:
                "No paste private information inside AI anyhow. Avoid passwords, OTP, bank details, card details, full house address, private customer data, secret business information, full private chats, medical details, legal details, and anything wey fit harm person if e expose.\n\nThis one no mean say AI no fit help. E mean say you suppose remove or replace sensitive details before you ask.\n\nYou fit say customer instead of the person real name. You fit say my bank instead of naming the account. You fit explain the issue without pasting the full private chat.",
            },
          },
          {
            heading: {
              en: "Use remove, replace, reduce",
              pidgin: "Use remove, replace, reduce",
            },
            body: {
              en: "Before you paste anything, clean it up. This simple habit lets you get useful help without exposing too much.",
              pidgin:
                "Before you paste anything, clean am first. This simple habit go let you get useful help without exposing too much.",
            },
            examples: [
              {
                label: {
                  en: "Remove",
                  pidgin: "Remove",
                },
                content: {
                  en: "Take out passwords, OTPs, account numbers, addresses, private names, and screenshots with sensitive details.",
                  pidgin:
                    "Comot passwords, OTPs, account numbers, addresses, private names, and screenshots wey get sensitive details.",
                },
              },
              {
                label: {
                  en: "Replace",
                  pidgin: "Replace",
                },
                content: {
                  en: "Use placeholders like [customer], [company], [amount], [date], or [location].",
                  pidgin:
                    "Use placeholders like [customer], [company], [amount], [date], or [location].",
                },
              },
              {
                label: {
                  en: "Reduce",
                  pidgin: "Reduce",
                },
                content: {
                  en: "Share only the detail AI needs to help. Do not paste the whole private story if a short summary is enough.",
                  pidgin:
                    "Share only the detail wey AI need to help. No paste the whole private story if short summary don enough.",
                },
              },
            ],
          },
          {
            heading: {
              en: "Real example",
              pidgin: "Real example",
            },
            body: {
              en: "Tara ordered clothes from an online vendor. The delivery came late and one item was missing. She wants AI to help write a refund message, but her first version includes too much private information.",
              pidgin:
                "Tara order clothes from online vendor. Delivery late and one item no dey inside. She want make AI help write refund message, but her first version include too much private information.",
            },
            examples: [
              {
                label: {
                  en: "Unsafe version she almost pasted",
                  pidgin: "Unsafe version wey she almost paste",
                },
                content: {
                  en: "Write a complaint message. My name is Tara Okafor, my phone number is 08000000000, my address is 22 Example Street, Lekki, and I paid from account 1234567890. The vendor, Ada Styles, sent my order late and the blue dress was missing. Here is our full chat: [full private chat].",
                  pidgin:
                    "Write complaint message. My name na Tara Okafor, my phone number na 08000000000, my address na 22 Example Street, Lekki, and I paid from account 1234567890. The vendor, Ada Styles, send my order late and the blue dress no dey. Here is our full chat: [full private chat].",
                },
              },
              {
                label: {
                  en: "AI could still answer",
                  pidgin: "AI fit still answer",
                },
                content: {
                  en: "Dear Ada Styles, my name is Tara Okafor. I ordered clothes to 22 Example Street, Lekki, and the blue dress was missing. Please refund me to account 1234567890.",
                  pidgin:
                    "Dear Ada Styles, my name is Tara Okafor. I ordered clothes to 22 Example Street, Lekki, and the blue dress was missing. Please refund me to account 1234567890.",
                },
              },
              {
                label: {
                  en: "What was risky",
                  pidgin: "Wetin risky",
                },
                content: {
                  en: "The answer repeated private details that did not need to be there: full name, phone number, address, account number, vendor name, and private chat content.",
                  pidgin:
                    "The answer repeat private details wey no need dey there: full name, phone number, address, account number, vendor name, and private chat content.",
                },
              },
              {
                label: {
                  en: "Safer anonymized prompt",
                  pidgin: "Safer anonymized prompt",
                },
                content: {
                  en: "Help me write a polite but firm refund message to an online vendor.\n\nSituation: My order came late and one item was missing.\nAmount to mention: [amount]\nTone: calm, clear, not insulting\nDo not include my address, phone number, bank details, or full private chat.\nAsk for either delivery of the missing item or a refund.",
                  pidgin:
                    "Help me write polite but firm refund message give online vendor.\n\nSituation: My order come late and one item no dey inside.\nAmount to mention: [amount]\nTone: calm, clear, no insult\nNo include my address, phone number, bank details, or full private chat.\nAsk for either delivery of the missing item or refund.",
                },
              },
              {
                label: {
                  en: "Safer output",
                  pidgin: "Safer output",
                },
                content: {
                  en: "Hi, I received my order, but one item was missing and the delivery came later than agreed. Please confirm whether the missing item can be sent today. If not, I would like a refund for that item. Thank you.",
                  pidgin:
                    "Hi, I received my order, but one item no dey inside and the delivery come later than agreed. Abeg confirm whether una fit send the missing item today. If not, I go like refund for that item. Thank you.",
                },
              },
            ],
          },
          {
            heading: {
              en: "Why the safer version worked",
              pidgin: "Why the safer version work",
            },
            body: {
              en: "Tara still gave AI enough context to write a useful message. She removed details that were not needed for the task.\n\nThat is the balance. Do not hide the situation so much that AI cannot help. But do not paste private information just because it is available.",
              pidgin:
                "Tara still give AI enough context make e write useful message. She remove details wey no need for the task.\n\nNa the balance be that. No hide the situation reach where AI no fit help. But no paste private information just because e dey available.",
            },
          },
          {
            heading: {
              en: "One thing to avoid",
              pidgin: "One thing to avoid",
            },
            body: {
              en: "Do not paste full private chats into AI when a short summary will do. A private chat may include another person's phone number, address, emotions, business details, or personal problem.\n\nSummarise the situation. Replace names. Remove what the tool does not need.",
              pidgin:
                "No paste full private chats inside AI when short summary fit do the work. Private chat fit get another person phone number, address, emotions, business details, or personal problem.\n\nSummarise the situation. Replace names. Remove wetin the tool no need.",
            },
          },
          {
            heading: {
              en: "Before you try it",
              pidgin: "Before you try am",
            },
            body: {
              en: "The prompt below helps you ask for help while keeping private details out. Use it before writing complaints, HR messages, refund notes, customer replies, or personal messages.",
              pidgin:
                "The prompt below go help you ask for help while private details no enter. Use am before writing complaints, HR messages, refund notes, customer replies, or personal messages.",
            },
          },
        ],
        keyTakeaway: {
          en: "AI can help with sensitive situations, but remove private details first. Share the situation, not secrets.",
          pidgin:
            "AI fit help with sensitive situations, but remove private details first. Share the situation, no share secrets.",
        },
        examplePrompt: {
          en: "Help me write this message without exposing private information.\n\nSituation:\n[explain the issue with names, addresses, account numbers, phone numbers, and private chats removed]\n\nWhat I want:\n[complaint, refund request, HR message, customer reply, apology, or other]\n\nTone:\n[calm, firm, respectful, simple, or direct]\n\nBefore writing, tell me:\n1. What private details I should remove\n2. What can be replaced with placeholders\n3. What details are safe to keep\n\nThen write the message.",
          pidgin:
            "Help me write this message without exposing private information.\n\nSituation:\n[explain the issue with names, addresses, account numbers, phone numbers, and private chats removed]\n\nWetin I want:\n[complaint, refund request, HR message, customer reply, apology, or other]\n\nTone:\n[calm, firm, respectful, simple, or direct]\n\nBefore you write, tell me:\n1. Which private details I suppose remove\n2. Wetin I fit replace with placeholders\n3. Which details safe to keep\n\nThen write the message.",
        },
        practiceTask: {
          en: "Take one message you might ask AI to help with. Before pasting it, rewrite the situation in a safer way.\n\nRemove names, phone numbers, account details, addresses, and full private chats. Use placeholders where needed. Then use the prompt above.",
          pidgin:
            "Take one message wey you fit ask AI make e help with. Before you paste am, rewrite the situation in safer way.\n\nRemove names, phone numbers, account details, addresses, and full private chats. Use placeholders where you need. Then use the prompt above.",
        },
        quickCheck: [
          {
            en: "What private detail did you remove?",
            pidgin: "Which private detail you remove?",
          },
          {
            en: "What did you replace with a placeholder?",
            pidgin: "Wetin you replace with placeholder?",
          },
          {
            en: "Does AI still have enough context to help?",
            pidgin: "AI still get enough context to help?",
          },
          {
            en: "Could this harm anyone if it was exposed?",
            pidgin: "This thing fit harm anybody if e expose?",
          },
        ],
      },
      {
        slug: "lesson-3",
        title: {
          en: "Using AI Without Becoming Too Dependent",
          pidgin: "How to Use AI Without Depending Too Much",
        },
        intro: {
          en: "AI should support your thinking, not replace it. The goal is to become more capable, not to hand over every decision.",
          pidgin:
            "AI suppose support your thinking, no be to replace am. The goal na to make you more capable, no be to hand over every decision.",
        },
        content: [
          {
            heading: {
              en: "Use AI as support",
              pidgin: "Use AI as support",
            },
            body: {
              en: "AI is good for getting started, comparing options, practising, improving drafts, and seeing what you may have missed.\n\nBut if you let it do all the thinking, you can become passive. You may stop noticing mistakes. You may accept answers that do not fit your life. You may lose confidence in your own judgement.\n\nA healthier way is to use AI like a thinking assistant. It can help you see options, but you still review, edit, and decide.",
              pidgin:
                "AI good for helping you start, compare options, practise, improve drafts, and see wetin you fit miss.\n\nBut if you let am do all the thinking, you fit become passive. You fit stop noticing mistakes. You fit accept answers wey no fit your life. You fit lose confidence for your own judgement.\n\nBetter way na to use AI like thinking assistant. E fit help you see options, but na you go still review, edit, and decide.",
            },
          },
          {
            heading: {
              en: "Ask, review, edit, decide",
              pidgin: "Ask, review, edit, decide",
            },
            body: {
              en: "This simple habit keeps you involved in the work. Do not skip the middle steps.",
              pidgin:
                "This simple habit go keep you involved for the work. No skip the middle steps.",
            },
            examples: [
              {
                label: {
                  en: "Ask",
                  pidgin: "Ask",
                },
                content: {
                  en: "Use AI to start, explain, draft, compare, or suggest options.",
                  pidgin:
                    "Use AI make e start, explain, draft, compare, or suggest options.",
                },
              },
              {
                label: {
                  en: "Review",
                  pidgin: "Review",
                },
                content: {
                  en: "Read the answer and check what is true, useful, missing, or wrong.",
                  pidgin:
                    "Read the answer and check wetin true, useful, missing, or wrong.",
                },
              },
              {
                label: {
                  en: "Edit",
                  pidgin: "Edit",
                },
                content: {
                  en: "Change the answer so it fits your voice, facts, and situation.",
                  pidgin:
                    "Change the answer make e fit your voice, facts, and situation.",
                },
              },
              {
                label: {
                  en: "Decide",
                  pidgin: "Decide",
                },
                content: {
                  en: "Make the final choice yourself. You live with the result, not the tool.",
                  pidgin:
                    "Make the final choice by yourself. Na you go live with the result, no be the tool.",
                },
              },
            ],
          },
          {
            heading: {
              en: "Real example",
              pidgin: "Real example",
            },
            body: {
              en: "Musa has a civic education assignment. He is tired and wants to finish quickly, so he first uses AI in a lazy way. The answer looks complete, but it does not help him understand the topic.",
              pidgin:
                "Musa get civic education assignment. E tire and wan finish quick, so e first use AI for lazy way. The answer look complete, but e no help am understand the topic.",
            },
            examples: [
              {
                label: {
                  en: "Lazy version",
                  pidgin: "Lazy version",
                },
                content: {
                  en: "Answer this assignment for me: Explain three duties of a citizen.",
                  pidgin:
                    "Answer this assignment for me: Explain three duties of a citizen.",
                },
              },
              {
                label: {
                  en: "AI gave back",
                  pidgin: "AI give back",
                },
                content: {
                  en: "The duties of a citizen include obeying the law, paying taxes, and voting during elections. Citizens should also respect national symbols and contribute to national development.",
                  pidgin:
                    "The duties of a citizen include obeying the law, paying taxes, and voting during elections. Citizens should also respect national symbols and contribute to national development.",
                },
              },
              {
                label: {
                  en: "What was weak",
                  pidgin: "Wetin weak",
                },
                content: {
                  en: "The answer was not useless, but Musa could copy it without learning anything. It was also too general and had no example from his own understanding.",
                  pidgin:
                    "The answer no useless, but Musa fit copy am without learning anything. E still too general and no get example from him own understanding.",
                },
              },
              {
                label: {
                  en: "Better guided version",
                  pidgin: "Better guided version",
                },
                content: {
                  en: "Explain three duties of a citizen in simple words. Give one Nigerian example for each. Then ask me three questions to check if I understand. Do not write the final assignment for me yet.",
                  pidgin:
                    "Explain three duties of a citizen with simple words. Give one Nigerian example for each. Then ask me three questions to check if I understand. No write the final assignment for me yet.",
                },
              },
              {
                label: {
                  en: "AI helped him practise",
                  pidgin: "AI help am practise",
                },
                content: {
                  en: "AI explained obeying laws, paying taxes, and voting, then asked Musa to write one example for each. Musa answered in his own words and asked AI to check if his examples made sense.",
                  pidgin:
                    "AI explain obeying laws, paying taxes, and voting, then ask Musa make e write one example for each. Musa answer with him own words and ask AI make e check if him examples make sense.",
                },
              },
              {
                label: {
                  en: "Final human edit",
                  pidgin: "Final human edit",
                },
                content: {
                  en: "Musa wrote the final answer himself using his own examples: obeying traffic rules, paying small business taxes when required, and voting for leaders. AI helped him learn, but Musa made the final answer.",
                  pidgin:
                    "Musa write the final answer by himself with him own examples: obeying traffic rules, paying small business taxes when required, and voting for leaders. AI help am learn, but Musa make the final answer.",
                },
              },
            ],
          },
          {
            heading: {
              en: "Why this worked better",
              pidgin: "Why this one work better",
            },
            body: {
              en: "Musa used AI to practise instead of using it to escape the work. He asked for explanation, examples, and questions. Then he wrote the final answer himself.\n\nThat is how AI can build your skill instead of weakening it.",
              pidgin:
                "Musa use AI practise instead of using am run away from the work. E ask for explanation, examples, and questions. Then e write the final answer by himself.\n\nNa how AI fit build your skill instead of weakening am.",
            },
          },
          {
            heading: {
              en: "One thing to avoid",
              pidgin: "One thing to avoid",
            },
            body: {
              en: "Do not ask AI to make every final choice for you. If you always ask, what should I do, and copy the answer, you stop practising your own judgement.\n\nA better question is: help me think through this, show me options, and tell me what I should consider before I decide.",
              pidgin:
                "No ask AI make e make every final choice for you. If you always ask, wetin I suppose do, and you copy the answer, you go stop practising your own judgement.\n\nBetter question na: help me think through this, show me options, and tell me wetin I suppose consider before I decide.",
            },
          },
          {
            heading: {
              en: "Before you try it",
              pidgin: "Before you try am",
            },
            body: {
              en: "The prompt below helps you use AI without giving away the whole task. It keeps you involved in the thinking.",
              pidgin:
                "The prompt below go help you use AI without giving away the whole task. E go keep you involved for the thinking.",
            },
          },
        ],
        keyTakeaway: {
          en: "Use AI to start, practise, compare, and improve, but stay involved. Ask, review, edit, and decide for yourself.",
          pidgin:
            "Use AI make you start, practise, compare, and improve, but stay involved. Ask, review, edit, and decide by yourself.",
        },
        examplePrompt: {
          en: "Help me think through this without doing all the thinking for me.\n\nTask or decision:\n[describe it]\n\nPlease help me by:\n1. Explaining the issue simply\n2. Showing me 2 or 3 options\n3. Asking me questions I should answer\n4. Pointing out what I should check\n5. Giving me a rough draft or plan I can edit\n\nDo not make the final decision for me. Help me decide for myself.",
          pidgin:
            "Help me think through this without doing all the thinking for me.\n\nTask or decision:\n[describe am]\n\nPlease help me by:\n1. Explaining the issue simply\n2. Showing me 2 or 3 options\n3. Asking me questions wey I suppose answer\n4. Pointing out wetin I suppose check\n5. Giving me rough draft or plan wey I fit edit\n\nNo make the final decision for me. Help me decide by myself.",
        },
        practiceTask: {
          en: "Pick one task you normally ask AI to finish for you. This time, use the prompt above.\n\nLet AI help you think, then write your own final version. At the end, name one thing AI helped with and one decision you made yourself.",
          pidgin:
            "Pick one task wey you normally ask AI make e finish for you. This time, use the prompt above.\n\nMake AI help you think, then write your own final version. For the end, name one thing wey AI help with and one decision wey you make by yourself.",
        },
        quickCheck: [
          {
            en: "Did AI help you think or replace your thinking?",
            pidgin: "AI help you think or e replace your thinking?",
          },
          {
            en: "What did you review before using the answer?",
            pidgin: "Wetin you review before you use the answer?",
          },
          {
            en: "What did you edit in your own words?",
            pidgin: "Wetin you edit with your own words?",
          },
          {
            en: "What final decision did you make yourself?",
            pidgin: "Which final decision you make by yourself?",
          },
        ],
      },
    ],
  },
];

export const courseFinalWrapUp: CourseStandaloneLesson = {
  slug: "final-wrap-up",
  eyebrow: {
    en: "Final Wrap-up",
    pidgin: "Final Wrap-up",
  },
  lesson: {
    slug: "final-wrap-up",
    title: {
      en: "You Made It To The End",
      pidgin: "You Don Reach The End",
    },
    intro: {
      en: "You have finished the beginner course. That matters. Now the point is to keep using AI for small real tasks, with your judgement still in the work.",
      pidgin:
        "You don finish the beginner course. That one matter. Now the main thing na to keep using AI for small real tasks, while your own judgement still dey inside the work.",
    },
    content: [
      {
        heading: {
          en: "What you can do now",
          pidgin: "Wetin you fit do now",
        },
        body: {
          en: "You do not need to remember every line of the course. Keep the main skills.\n\nYou now have a beginner foundation for using AI with more care. You can start with a task, explain what you need, improve the answer, and decide what is worth using.",
          pidgin:
            "You no need remember every line for the course. Keep the main skills.\n\nYou now get beginner foundation to use AI with better sense. You fit start with task, explain wetin you need, improve the answer, and decide wetin worth using.",
        },
        examples: [
          {
            label: {
              en: "Understand AI",
              pidgin: "Understand AI",
            },
            content: {
              en: "You know AI is a tool that responds to what you give it, not a person that already knows your full situation.",
              pidgin:
                "You sabi say AI na tool wey dey respond to wetin you give am, no be person wey already sabi your full matter.",
            },
          },
          {
            label: {
              en: "Ask better questions",
              pidgin: "Ask better questions",
            },
            content: {
              en: "You can give the task, context, audience, details, tone, and format.",
              pidgin:
                "You fit give the task, context, audience, details, tone, and format.",
            },
          },
          {
            label: {
              en: "Use AI for real tasks",
              pidgin: "Use AI for real tasks",
            },
            content: {
              en: "You can use AI for writing, summaries, research support, planning, and everyday work.",
              pidgin:
                "You fit use AI for writing, summaries, research support, planning, and everyday work.",
            },
          },
          {
            label: {
              en: "Check before trusting",
              pidgin: "Check before you trust",
            },
            content: {
              en: "You know how to check facts, fit, tone, and risk before using an answer.",
              pidgin:
                "You sabi how to check facts, fit, tone, and risk before you use answer.",
            },
          },
          {
            label: {
              en: "Protect private details",
              pidgin: "Protect private details",
            },
            content: {
              en: "You know not to paste passwords, OTPs, bank details, private chats, or sensitive information carelessly.",
              pidgin:
                "You sabi say make you no paste passwords, OTP, bank details, private chats, or sensitive information anyhow.",
            },
          },
          {
            label: {
              en: "Stay in charge",
              pidgin: "Stay in charge",
            },
            content: {
              en: "You can use AI to help you think without letting it make every decision for you.",
              pidgin:
                "You fit use AI make e help you think without letting am make every decision for you.",
            },
          },
        ],
      },
      {
        heading: {
          en: "The simple AI routine",
          pidgin: "The simple AI routine",
        },
        body: {
          en: "Use this routine when you are not sure what to do next: ask, check, edit, use.\n\nIt is simple, but it protects you from the two common mistakes: typing something too vague, then copying the answer too quickly.",
          pidgin:
            "Use this routine when you no sure wetin to do next: ask, check, edit, use.\n\nE simple, but e go protect you from two common mistakes: typing something wey too vague, then copying the answer too fast.",
        },
        examples: [
          {
            label: {
              en: "Ask",
              pidgin: "Ask",
            },
            content: {
              en: "Tell AI the task, audience, details, tone, and format you want.",
              pidgin:
                "Tell AI the task, audience, details, tone, and format wey you want.",
            },
          },
          {
            label: {
              en: "Check",
              pidgin: "Check",
            },
            content: {
              en: "Look for wrong facts, missing context, weak advice, private details, or anything too confident.",
              pidgin:
                "Look for wrong facts, missing context, weak advice, private details, or anything wey too confident.",
            },
          },
          {
            label: {
              en: "Edit",
              pidgin: "Edit",
            },
            content: {
              en: "Change the answer so it sounds true, useful, and natural for the situation.",
              pidgin:
                "Change the answer make e sound true, useful, and natural for the situation.",
            },
          },
          {
            label: {
              en: "Use",
              pidgin: "Use",
            },
            content: {
              en: "Use only the part that makes sense after you have checked it.",
              pidgin:
                "Use only the part wey make sense after you don check am.",
            },
          },
        ],
      },
      {
        heading: {
          en: "A five-day practice plan",
          pidgin: "Five-day practice plan",
        },
        body: {
          en: "For the next week, keep practice small. You are not trying to become an expert in five days. You are building a habit you can repeat.",
          pidgin:
            "For next week, keep the practice small. You no dey try become expert in five days. You dey build habit wey you fit repeat.",
        },
        examples: [
          {
            label: {
              en: "Day 1",
              pidgin: "Day 1",
            },
            content: {
              en: "Use AI to improve one real message before you send it.",
              pidgin:
                "Use AI improve one real message before you send am.",
            },
          },
          {
            label: {
              en: "Day 2",
              pidgin: "Day 2",
            },
            content: {
              en: "Ask AI to explain one topic you need to understand.",
              pidgin:
                "Ask AI make e explain one topic wey you need understand.",
            },
          },
          {
            label: {
              en: "Day 3",
              pidgin: "Day 3",
            },
            content: {
              en: "Use AI to summarise one note, article, message, or document.",
              pidgin:
                "Use AI summarise one note, article, message, or document.",
            },
          },
          {
            label: {
              en: "Day 4",
              pidgin: "Day 4",
            },
            content: {
              en: "Use AI to plan one task, then remove anything unrealistic.",
              pidgin:
                "Use AI plan one task, then remove anything wey no realistic.",
            },
          },
          {
            label: {
              en: "Day 5",
              pidgin: "Day 5",
            },
            content: {
              en: "Review what worked and save one prompt you want to reuse.",
              pidgin:
                "Review wetin work and save one prompt wey you wan reuse.",
            },
          },
        ],
      },
      {
        heading: {
          en: "Prompts worth keeping",
          pidgin: "Prompts wey worth saving",
        },
        body: {
          en: "You do not need a huge prompt library. Save a few prompts that help you do real work.\n\nStart with prompts that help you draft, check, simplify, and plan. Then edit them as you learn what works for you.",
          pidgin:
            "You no need big prompt library. Save few prompts wey dey help you do real work.\n\nStart with prompts wey help you draft, check, simplify, and plan. Then edit dem as you dey learn wetin work for you.",
        },
        examples: [
          {
            label: {
              en: "Draft",
              pidgin: "Draft",
            },
            content: {
              en: "Write a first draft for [task]. Audience: [who]. Tone: [tone]. Details to include: [details].",
              pidgin:
                "Write first draft for [task]. Audience: [who]. Tone: [tone]. Details to include: [details].",
            },
          },
          {
            label: {
              en: "Check",
              pidgin: "Check",
            },
            content: {
              en: "Review this answer before I use it. Tell me what may be wrong, missing, too private, or too confident.",
              pidgin:
                "Review this answer before I use am. Tell me wetin fit wrong, missing, too private, or too confident.",
            },
          },
          {
            label: {
              en: "Simplify",
              pidgin: "Simplify",
            },
            content: {
              en: "Explain this in simpler words with one Nigerian example.",
              pidgin:
                "Explain this with simpler words and one Nigerian example.",
            },
          },
          {
            label: {
              en: "Plan",
              pidgin: "Plan",
            },
            content: {
              en: "Help me plan this task. Ask me what you need to know before giving the plan.",
              pidgin:
                "Help me plan this task. Ask me wetin you need know before you give me the plan.",
            },
          },
        ],
      },
      {
        heading: {
          en: "Keep improving your prompts",
          pidgin: "Keep improving your prompts",
        },
        body: {
          en: "A better prompt is usually a clearer version of your first thought. You do not need fancy words.\n\nWhen an answer is weak, do not always start again. Tell AI what to change. Say what is missing. Give one more detail. Ask it to explain its assumptions. Ask it to make the answer more specific to your situation.",
          pidgin:
            "Better prompt na usually clearer version of your first thought. You no need fancy words.\n\nWhen answer weak, no always start again. Tell AI wetin to change. Talk wetin miss. Give one more detail. Ask am make e explain the assumptions. Ask am make the answer more specific to your situation.",
        },
      },
      {
        heading: {
          en: "Your next step",
          pidgin: "Your next step",
        },
        body: {
          en: "Pick one real task for this week. Not a perfect task. Not a huge task. One message, one topic, one summary, one plan, or one decision you need to think through.\n\nUse the final prompt below. Save one prompt that works. That is enough for the next step.",
          pidgin:
            "Pick one real task for this week. No be perfect task. No be big task. One message, one topic, one summary, one plan, or one decision wey you need think through.\n\nUse the final prompt below. Save one prompt wey work. That one don enough for next step.",
        },
      },
    ],
    keyTakeaway: {
      en: "AI is not the skill. The skill is knowing what to ask, what to check, and what to change before using the answer.",
      pidgin:
        "AI no be the skill. The skill na to sabi wetin to ask, wetin to check, and wetin to change before you use the answer.",
    },
    examplePrompt: {
      en: "Help me keep using AI after this beginner course.\n\nAbout me:\n[student, worker, business owner, creator, job seeker, parent, or other]\n\nThis week, I want help with:\n[one real task]\n\nTime I have:\n[how much time]\n\nPlease help me:\n1. Turn this into a clear AI task\n2. Write a good prompt I can use\n3. Tell me what details I should add\n4. Tell me what I should check before using the answer\n5. Suggest one small way to improve the prompt after the first answer\n6. Give me one version of the prompt worth saving",
      pidgin:
        "Help me keep using AI after this beginner course.\n\nAbout me:\n[student, worker, business owner, creator, job seeker, parent, or other]\n\nThis week, I want help with:\n[one real task]\n\nTime wey I get:\n[how much time]\n\nPlease help me:\n1. Turn this into clear AI task\n2. Write good prompt wey I fit use\n3. Tell me which details I suppose add\n4. Tell me wetin I suppose check before I use the answer\n5. Suggest one small way to improve the prompt after the first answer\n6. Give me one version of the prompt wey worth saving",
    },
    practiceTask: {
      en: "Choose one task for this week and use the prompt above.\n\nAfter AI replies, save one prompt you would actually reuse. Then write one sentence about what you checked or changed before using the answer.",
      pidgin:
        "Choose one task for this week and use the prompt above.\n\nAfter AI reply, save one prompt wey you fit actually reuse. Then write one sentence about wetin you check or change before you use the answer.",
    },
    quickCheck: [
      {
        en: "What task will I use AI for this week?",
        pidgin: "Which task I go use AI for this week?",
      },
      {
        en: "What kind of answer do I need?",
        pidgin: "Which kind answer I need?",
      },
      {
        en: "What will I check before using it?",
        pidgin: "Wetin I go check before I use am?",
      },
      {
        en: "What prompt is worth saving?",
        pidgin: "Which prompt worth saving?",
      },
    ],
  },
};

export const beginnerCourse: Course = {
  slug: "beginner-ai",
  title: "AI for Everyone: Beginner AI Course",
  description: {
    en: "Learn how to use AI for real work, business, school, and everyday tasks in English and Nigerian Pidgin.",
    pidgin:
      "Learn how to use AI for real work, business, school, and everyday tasks with English and Nigerian Pidgin.",
  },
  level: {
    en: "Beginner",
    pidgin: "Beginner",
  },
  priceLabel: {
    en: "Free",
    pidgin: "Free",
  },
  languageSupport: "English + Pidgin",
  modules: courseModules,
  startHere: courseStartHere,
  finalWrapUp: courseFinalWrapUp,
};

export const courses: Course[] = [beginnerCourse];

export function getCourse(courseSlug: string) {
  return courses.find((course) => course.slug === courseSlug);
}

export function getLessonReferences(course: Course = beginnerCourse) {
  return course.modules.flatMap((module, moduleIndex) =>
    module.lessons.map((lesson, lessonIndex) => ({
      course,
      module,
      lesson,
      moduleIndex,
      lessonIndex,
    }))
  );
}

export const lessonReferences: LessonReference[] =
  getLessonReferences(beginnerCourse);

export function getCourseModule(
  moduleSlug: string,
  course: Course = beginnerCourse
) {
  return course.modules.find((module) => module.slug === moduleSlug);
}

export function getLessonReference(
  moduleSlug: string,
  lessonSlug: string,
  course: Course = beginnerCourse
) {
  return getLessonReferences(course).find(
    ({ module, lesson }) => module.slug === moduleSlug && lesson.slug === lessonSlug
  );
}

export function getAdjacentLessons(
  moduleSlug: string,
  lessonSlug: string,
  course: Course = beginnerCourse
) {
  const references = getLessonReferences(course);
  const currentIndex = references.findIndex(
    ({ module, lesson }) => module.slug === moduleSlug && lesson.slug === lessonSlug
  );

  return {
    previous: currentIndex > 0 ? references[currentIndex - 1] : undefined,
    next:
      currentIndex >= 0 && currentIndex < references.length - 1
        ? references[currentIndex + 1]
        : undefined,
  };
}

export function getCourseStepCount(course: Course = beginnerCourse) {
  return getLessonReferences(course).length + 2;
}

export function getCoursesPath() {
  return "/courses";
}

export function getCoursePath(courseSlug = beginnerCourse.slug) {
  return `${getCoursesPath()}/${courseSlug}`;
}

export function getCourseStartPath(course: Course = beginnerCourse) {
  return `${getCoursePath(course.slug)}/${course.startHere.slug}`;
}

export function getCourseFinalWrapUpPath(course: Course = beginnerCourse) {
  return `${getCoursePath(course.slug)}/${course.finalWrapUp.slug}`;
}

export function getStandaloneCourseLesson(
  slug: string,
  course: Course = beginnerCourse
) {
  if (slug === course.startHere.slug) return course.startHere;
  if (slug === course.finalWrapUp.slug) return course.finalWrapUp;
  return undefined;
}

export function getCoreCourseStepNumber(
  moduleSlug: string,
  lessonSlug: string,
  course: Course = beginnerCourse
) {
  const references = getLessonReferences(course);
  const currentIndex = references.findIndex(
    ({ module, lesson }) => module.slug === moduleSlug && lesson.slug === lessonSlug
  );

  return currentIndex >= 0 ? currentIndex + 2 : 1;
}

export function getStandaloneCourseStepNumber(
  slug: string,
  course: Course = beginnerCourse
) {
  if (slug === course.startHere.slug) return 1;
  if (slug === course.finalWrapUp.slug) return getCourseStepCount(course);
  return 1;
}

function getLessonNavTarget(reference: LessonReference): CourseNavTarget {
  return {
    href: getLessonPath(
      reference.module.slug,
      reference.lesson.slug,
      reference.course.slug
    ),
    title: reference.lesson.title,
  };
}

function getStartNavTarget(course: Course = beginnerCourse): CourseNavTarget {
  return {
    href: getCourseStartPath(course),
    title: course.startHere.lesson.title,
  };
}

function getFinalWrapUpNavTarget(
  course: Course = beginnerCourse
): CourseNavTarget {
  return {
    href: getCourseFinalWrapUpPath(course),
    title: course.finalWrapUp.lesson.title,
  };
}

export function getAdjacentCourseLessonSteps(
  moduleSlug: string,
  lessonSlug: string,
  course: Course = beginnerCourse
) {
  const references = getLessonReferences(course);
  const currentIndex = references.findIndex(
    ({ module, lesson }) => module.slug === moduleSlug && lesson.slug === lessonSlug
  );

  return {
    previous:
      currentIndex === 0
        ? getStartNavTarget(course)
        : currentIndex > 0
          ? getLessonNavTarget(references[currentIndex - 1])
          : undefined,
    next:
      currentIndex === references.length - 1
        ? getFinalWrapUpNavTarget(course)
        : currentIndex >= 0 && currentIndex < references.length - 1
          ? getLessonNavTarget(references[currentIndex + 1])
          : undefined,
  };
}

export function getAdjacentStandaloneCourseSteps(
  slug: string,
  course: Course = beginnerCourse
) {
  const references = getLessonReferences(course);

  if (slug === course.startHere.slug) {
    return {
      previous: undefined,
      next: references[0]
        ? getLessonNavTarget(references[0])
        : getFinalWrapUpNavTarget(course),
    };
  }

  if (slug === course.finalWrapUp.slug) {
    const lastLesson = references[references.length - 1];

    return {
      previous: lastLesson ? getLessonNavTarget(lastLesson) : getStartNavTarget(course),
      next: undefined,
    };
  }

  return {
    previous: undefined,
    next: undefined,
  };
}

export function getLessonPath(
  moduleSlug: string,
  lessonSlug: string,
  courseSlug = beginnerCourse.slug
) {
  return `${getCoursePath(courseSlug)}/${moduleSlug}/${lessonSlug}`;
}

export function getModulePath(
  moduleSlug: string,
  courseSlug = beginnerCourse.slug
) {
  return `${getCoursePath(courseSlug)}/${moduleSlug}`;
}
