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
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface LessonReference {
  module: CourseModule;
  lesson: Lesson;
  moduleIndex: number;
  lessonIndex: number;
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

export const courseModules: CourseModule[] = [
  {
    slug: "module-1",
    number: "01",
    title: "Start With AI Basics",
    description:
      "Understand what AI is, where it helps, and how to use it without feeling technical.",
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
          en: "How To Ask AI",
          pidgin: "How To Ask AI",
        },
        intro: {
          en: "A prompt is just the message you send to AI. The clearer the message, the less guessing AI has to do.",
          pidgin:
            "Prompt na just the message wey you send give AI. The clearer the message, the less AI go need guess.",
        },
        content: [
          {
            heading: {
              en: "What this means",
              pidgin: "Wetin this one mean",
            },
            body: {
              en: "Good prompting is not about sounding clever. It is about giving enough direction so the answer has somewhere to land.",
              pidgin:
                "Better prompting no be to sound clever. Na to give enough direction make the answer know where e suppose land.",
            },
          },
          {
            heading: {
              en: "Say the real thing",
              pidgin: "Talk the real thing",
            },
            body: {
              en: "Write the task the way you would explain it to a helpful person. Mention who it is for, what happened, and how you want it to sound.",
              pidgin:
                "Explain the work like say na helpful person you dey talk to. Mention who go receive am, wetin happen, and how you want make e sound.",
            },
          },
          {
            heading: {
              en: "A simple way to ask",
              pidgin: "Simple way to ask",
            },
            body: {
              en: "Use this order: task, context, tone, format. It does not need to be long. Even two extra sentences can turn a weak answer into something useful.",
              pidgin:
                "Use this order: task, context, tone, format. E no need long. Even two extra sentences fit turn weak answer to something useful.",
            },
          },
          {
            heading: {
              en: "Real example",
              pidgin: "Real example",
            },
            body: {
              en: "Tunde needs to remind a customer about an unpaid balance. If he types, write a payment reminder, the answer may sound stiff. If he says it is for WhatsApp, the customer knows him, and the tone should be polite but firm, the reply gets much better.",
              pidgin:
                "Tunde need remind customer about balance wey never complete. If e type, write payment reminder, the answer fit sound stiff. If e talk say na WhatsApp message, the customer sabi am, and the tone suppose polite but firm, the reply go better.",
            },
          },
          {
            heading: {
              en: "Why this works better",
              pidgin: "Why this one better",
            },
            body: {
              en: "The second version gives AI the missing pieces. It knows where the message will go, who will read it, and the kind of tone Tunde wants.",
              pidgin:
                "The second version give AI the missing pieces. E know where the message go, who go read am, and the kind tone wey Tunde want.",
            },
          },
          {
            heading: {
              en: "How to use the prompt",
              pidgin: "How to use this prompt",
            },
            body: {
              en: "The prompt below is not fancy. It simply gives AI the job, the channel, the audience, the tone, and the length.",
              pidgin:
                "The prompt below no fancy. E just give AI the work, where the message go, who go receive am, the tone, and the length.",
            },
          },
          {
            heading: {
              en: "One mistake to avoid",
              pidgin: "One mistake to avoid",
            },
            body: {
              en: "Do not ask with one lonely word, like caption or email, then expect a strong answer. Add the situation, even if it is just two or three extra sentences.",
              pidgin:
                "No ask with only one word, like caption or email, then expect strong answer. Add the situation, even if na just two or three extra sentences.",
            },
          },
          {
            heading: {
              en: "Before you move on",
              pidgin: "Before you move",
            },
            body: {
              en: "Take one prompt you have used before and add more context. You will feel the difference quickly.",
              pidgin:
                "Take one prompt wey you don use before and add more context. You go feel the difference quick quick.",
            },
          },
        ],
        keyTakeaway: {
          en: "A strong prompt usually has four parts: the task, the context, the tone, and the format.",
          pidgin:
            "Strong prompt usually get four parts: the task, the context, the tone, and the format.",
        },
        examplePrompt: {
          en: "Write a polite WhatsApp message to a customer who has not paid their balance. Keep it firm but respectful. Use simple English and keep it under 80 words.",
          pidgin:
            "Write polite WhatsApp message give customer wey never pay balance. Make e firm but respectful. Use simple English and make e no pass 80 words.",
        },
        practiceTask: {
          en: "Pick one message you need to send this week. Write a basic prompt first, then improve it by adding the task, context, tone, and format. Compare the two answers and notice which one is more useful.",
          pidgin:
            "Pick one message wey you need send this week. Write basic prompt first, then improve am by adding task, context, tone, and format. Compare the two answers and notice which one useful pass.",
        },
      },
      {
        slug: "lesson-3",
        title: {
          en: "When To Trust AI",
          pidgin: "When You Fit Trust AI",
        },
        intro: {
          en: "AI can be useful and still be wrong. The point is not to fear it. The point is to know what to check.",
          pidgin:
            "AI fit help you and still wrong sometimes. No be to fear am. The main thing na to know wetin you suppose check.",
        },
        content: [
          {
            heading: {
              en: "What this means",
              pidgin: "Wetin this one mean",
            },
            body: {
              en: "Use AI for a first pass, not as the final authority. Some answers are good enough to edit. Some need checking. Some should not be used.",
              pidgin:
                "Use AI for first pass, no treat am like final authority. Some answers good enough make you edit. Some need checking. Some no suppose be used.",
            },
          },
          {
            heading: {
              en: "Where AI is useful",
              pidgin: "Where AI dey useful",
            },
            body: {
              en: "AI is strongest when you need rough work: first drafts, ideas, summaries, simple explanations, and planning. Be more careful when the answer involves exact facts, private details, recent events, money, health, law, or rules you must follow.",
              pidgin:
                "AI strong pass for rough work: first draft, ideas, summary, simple explanation, and planning. But take am easy when the answer get exact facts, private details, recent gist, money, health, law, or rules wey you must follow.",
            },
          },
          {
            heading: {
              en: "A simple checking habit",
              pidgin: "Simple way to check am",
            },
            body: {
              en: "Read once for the main idea. Read again for details. Mark anything that sounds too neat, too confident, or too vague. Check important facts before you use the answer.",
              pidgin:
                "Read once to understand the main idea. Read again for details. Mark anything wey sound too neat, too confident, or too vague. Check important facts before you use the answer.",
            },
          },
          {
            heading: {
              en: "Real example",
              pidgin: "Real example",
            },
            body: {
              en: "Mariam asks AI to write a CV summary. The draft sounds good, but it adds skills she does not have. Mariam removes those lines, adds her real experience, and only keeps what is true.",
              pidgin:
                "Mariam ask AI make e write CV summary. The draft sound nice, but e add skills wey she no get. Mariam remove those lines, add her real experience, and keep only wetin true.",
            },
          },
          {
            heading: {
              en: "Why this works better",
              pidgin: "Why this one better",
            },
            body: {
              en: "She keeps the structure and removes the invention. That is the move. Use the help, but do not let AI invent your life for you.",
              pidgin:
                "She keep the structure and remove the invention. Na the move be that. Use the help, but no let AI invent your life for you.",
            },
          },
          {
            heading: {
              en: "How to use the prompt",
              pidgin: "How to use this prompt",
            },
            body: {
              en: "The prompt below asks AI to slow down and review its own answer. It helps you spot what is useful, what may be wrong, and what still needs checking.",
              pidgin:
                "The prompt below ask AI make e slow down and review the answer. E help you spot wetin useful, wetin fit wrong, and wetin still need checking.",
            },
          },
          {
            heading: {
              en: "One mistake to avoid",
              pidgin: "One mistake to avoid",
            },
            body: {
              en: "Do not let a smooth answer rush you. Smooth is not the same as true. If the answer affects money, health, school, work, safety, or another person, slow down.",
              pidgin:
                "No let smooth answer rush you. Smooth no mean say e true. If the answer fit affect money, health, school, work, safety, or another person, slow down.",
            },
          },
          {
            heading: {
              en: "Before you move on",
              pidgin: "Before you move",
            },
            body: {
              en: "The useful skill is not just asking. It is reviewing the answer after it arrives.",
              pidgin:
                "The useful skill no be only to ask. Na to review the answer after e show.",
            },
          },
        ],
        keyTakeaway: {
          en: "Trust AI for help getting started, but check important details before you depend on the answer.",
          pidgin:
            "Trust AI make e help you start, but check important details before you depend on the answer.",
        },
        examplePrompt: {
          en: "Review this AI answer before I use it. Tell me what sounds useful, what may be wrong or unclear, what facts I should verify, and how I can make it more honest and practical: [paste answer].",
          pidgin:
            "Check this AI answer before I use am. Tell me wetin useful, wetin fit wrong or unclear, wetin I need verify, and how I fit make am more honest and practical: [paste answer].",
        },
        practiceTask: {
          en: "Ask AI to help with a simple task, then review the answer before using it. Write down three things: what is useful, what feels unclear, and what you need to check yourself.",
          pidgin:
            "Ask AI make e help you with simple task, then review the answer before you use am. Write down three things: wetin useful, wetin no clear, and wetin you need check by yourself.",
        },
      },
    ],
  },
  {
    slug: "module-2",
    number: "02",
    title: "Talk To AI Clearly",
    description:
      "Learn how to ask better questions, avoid weak prompts, and improve the answers AI gives you.",
    lessons: [
      {
        slug: "lesson-1",
        title: "What a Prompt Really Is",
        intro:
          "A prompt is simply the instruction you give AI. The clearer your instruction, the easier it is for AI to help you.",
        content: [
          {
            heading: "A prompt is a request",
            body:
              "When you type into AI, you are making a request. You might ask it to explain something, write a draft, plan your day, compare options, or make your rough idea clearer.",
          },
          {
            heading: "Good prompts give direction",
            body:
              "AI works better when you tell it what you want, who the answer is for, and what style or format you prefer. You do not need fancy words. You just need useful details.",
          },
          {
            heading: "You can talk normally",
            body:
              "You do not have to sound technical. Write the way you would explain the task to a helpful person sitting beside you. Simple language is enough.",
          },
          {
            heading: "Real example",
            body:
              "Ngozi wants help writing a message to her landlord. Instead of typing, write a message, she says, write a polite message to my landlord asking for two extra days to pay rent. Keep it respectful and short. That extra detail makes the answer more useful.",
          },
        ],
        keyTakeaway:
          "A prompt is not a secret formula. It is a clear request with enough detail to guide the answer.",
        examplePrompt:
          "Explain what a prompt is to me like I am a complete beginner. Use simple English and give me three examples I can try today.",
        practiceTask:
          "Write one simple request you would normally ask a friend for help with. Turn it into a prompt by adding who it is for, what tone you want, and what format you need.",
      },
      {
        slug: "lesson-2",
        title: "Why Some Prompts Fail",
        intro:
          "When AI gives a weak answer, the problem is often the prompt. A small change in your instruction can make the answer much better.",
        content: [
          {
            heading: "The prompt is too vague",
            body:
              "If you ask, help me with my business, AI has to guess what kind of help you need. It may give a broad answer that sounds fine but does not help you do anything specific.",
          },
          {
            heading: "The prompt has no context",
            body:
              "AI needs the right background. Tell it what you are working on, who the answer is for, what has already happened, and what result you want.",
          },
          {
            heading: "The prompt asks for too much at once",
            body:
              "If your request is too big, the answer can become scattered. Break the work into smaller steps. Ask for ideas first, then a draft, then improvements.",
          },
          {
            heading: "Real example",
            body:
              "Emeka types, create content for my brand, and gets a generic list. Then he rewrites it: I sell handmade leather sandals in Abuja. Give me five Instagram post ideas for customers who want durable sandals for work and church. The second prompt gives him ideas he can actually use.",
          },
        ],
        keyTakeaway:
          "A prompt usually fails when it is too vague, missing context, or trying to do too many things at once.",
        examplePrompt:
          "Look at this prompt and tell me why it may give a weak answer. Then rewrite it to be clearer and more useful: [paste your prompt].",
        practiceTask:
          "Write one vague prompt, then rewrite it with more detail. Add the task, the context, the audience, and the format you want.",
      },
      {
        slug: "lesson-3",
        title: "How to Improve an Answer",
        intro:
          "The first answer is not always the best answer. You can guide AI with follow-up instructions until the result becomes more useful.",
        content: [
          {
            heading: "Tell AI what to change",
            body:
              "If the answer is too long, too formal, too vague, or not practical enough, say so. Ask AI to make a specific change instead of starting again from scratch.",
          },
          {
            heading: "Ask for another version",
            body:
              "You can ask for a shorter version, a warmer version, a more direct version, or a version for WhatsApp, email, school, customers, or your manager.",
          },
          {
            heading: "Add what was missing",
            body:
              "Sometimes the answer is weak because AI did not have enough information. Add the missing facts, examples, names, limits, or tone, then ask it to try again.",
          },
          {
            heading: "Real example",
            body:
              "Aisha asks AI to write a job application email. The first answer sounds too stiff. She replies, make it warmer, shorter, and more confident, but do not exaggerate my experience. The second version sounds closer to what she needs.",
          },
        ],
        keyTakeaway:
          "You do not have to accept the first answer. Improve it by asking for specific changes.",
        examplePrompt:
          "Improve this answer. Make it clearer, shorter, and more practical. Keep the meaning the same and point out anything important that may be missing: [paste answer].",
        practiceTask:
          "Ask AI for help with a small task. Then send one follow-up instruction to improve the answer, such as make it shorter, add examples, make it warmer, or turn it into a checklist.",
      },
    ],
  },
  {
    slug: "module-3",
    number: "03",
    title: "Use AI For Real Tasks",
    description:
      "Apply AI to writing, research, summaries, and everyday tasks in a simple, useful way.",
    lessons: [
      {
        slug: "lesson-1",
        title: "Using AI for Writing",
        intro:
          "AI can help you start writing when your mind feels blank. Use it for drafts, ideas, and clearer wording, then edit the final result yourself.",
        content: [
          {
            heading: "Start with the writing goal",
            body:
              "Tell AI what you are trying to write. It may be an email, WhatsApp message, caption, CV summary, school paragraph, proposal, or report. The clearer the goal, the better the draft.",
          },
          {
            heading: "Give your rough thoughts",
            body:
              "You do not need perfect notes. You can paste rough bullet points, a messy paragraph, or a few ideas. Ask AI to organize them into a first draft you can improve.",
          },
          {
            heading: "Edit it to sound like you",
            body:
              "AI writing can sound too polished or too general. Read the draft, remove anything false, add your real details, and change any sentence that does not sound natural.",
          },
          {
            heading: "Real example",
            body:
              "Chika needs to email her manager about a delayed task. She gives AI the situation, the reason for the delay, and the new date she can deliver. AI drafts the email, then Chika makes it shorter and adds her own tone before sending it.",
          },
        ],
        keyTakeaway:
          "AI can help you start and shape writing, but the final voice, details, and honesty should come from you.",
        examplePrompt:
          "Turn these rough notes into a clear first draft. Keep it warm, simple, and natural. Do not add facts I did not give you: [paste notes].",
        practiceTask:
          "Choose one message, email, caption, or paragraph you need to write. Give AI your rough notes, ask for a draft, then edit the draft so it sounds like you.",
      },
      {
        slug: "lesson-2",
        title: "Using AI for Research and Summaries",
        intro:
          "AI can help you understand information faster. Use it to explain, summarise, compare, and organize, but always check important facts.",
        content: [
          {
            heading: "Use AI to understand faster",
            body:
              "When a topic feels confusing, ask AI to explain it in plain English. You can also ask for examples from work, school, business, or daily life.",
          },
          {
            heading: "Ask for a clear summary",
            body:
              "If you have a long article, note, transcript, or document, ask AI to pull out the main idea, key points, action items, and questions you should ask next.",
          },
          {
            heading: "Verify what matters",
            body:
              "AI can be wrong or outdated. Check names, dates, numbers, rules, prices, sources, and anything connected to school, money, health, law, or safety.",
          },
          {
            heading: "Real example",
            body:
              "Yusuf has a long article about remote work. He asks AI for a five-point summary, then asks for the main lessons for a small Nigerian team. He uses the summary to understand the article faster, but checks the original before quoting anything.",
          },
        ],
        keyTakeaway:
          "AI can make information easier to understand, but important facts still need your own checking.",
        examplePrompt:
          "Summarise this text for me. Give me the main idea, five key points, any action items, and three questions I should ask next: [paste text].",
        practiceTask:
          "Paste a long article, note, or document into AI. Ask for a summary, then compare the summary with the original and mark anything you need to verify.",
      },
      {
        slug: "lesson-3",
        title: "Using AI in Everyday Tasks",
        intro:
          "AI is not only for work. It can help with small daily tasks, planning, learning, decisions, and simple organization.",
        content: [
          {
            heading: "Use it for small tasks",
            body:
              "You can ask AI to make a shopping list, plan errands, explain a bill, create a study plan, compare options, or turn a messy to-do list into steps.",
          },
          {
            heading: "Give your real limits",
            body:
              "Tell AI your budget, time, location, deadline, energy level, and what you already have. Everyday help is better when the answer fits your real life.",
          },
          {
            heading: "Turn the answer into action",
            body:
              "Ask for the answer in a format you can use immediately, like a checklist, schedule, short message, or step-by-step plan.",
          },
          {
            heading: "Real example",
            body:
              "Bisi has a busy Saturday. She needs to buy food, visit her aunt, wash clothes, and prepare for Monday. She gives AI the tasks, her available time, and her location. AI helps her arrange the day in a realistic order.",
          },
        ],
        keyTakeaway:
          "AI becomes useful in daily life when you give it your real situation and ask for a practical next step.",
        examplePrompt:
          "Help me plan these everyday tasks. Arrange them in a realistic order, show what to do first, and turn the plan into a simple checklist: [paste tasks].",
        practiceTask:
          "Write down five tasks you need to handle this week. Ask AI to turn them into a simple plan, then adjust the plan so it fits your real schedule.",
      },
    ],
  },
  {
    slug: "module-4",
    number: "04",
    title: "Study, Decide, And Stay Safe",
    description:
      "Use AI for learning and everyday decisions while protecting your privacy and checking important facts.",
    lessons: [
      {
        slug: "lesson-1",
        title: "Study Difficult Topics",
        intro:
          "AI can act like a patient tutor. You can ask it to explain, test you, and give examples until the topic becomes clearer.",
        content: [
          {
            heading: "Ask for simple explanations",
            body:
              "Begin with plain English. If the answer is still confusing, ask for examples from school, business, family life, or Nigeria.",
          },
          {
            heading: "Use active recall",
            body:
              "Do not only read the answer. Ask AI to quiz you, check your answer, and explain what you missed.",
          },
          {
            heading: "Build a study note",
            body:
              "After learning, ask AI to create a short note with definitions, examples, common mistakes, and practice questions.",
          },
        ],
        keyTakeaway:
          "AI can help you study better when you ask questions, test yourself, and build notes in your own words.",
        examplePrompt:
          "Teach me [topic] like a patient tutor. Start simple, give Nigerian examples, then ask me five questions to check if I understand.",
        practiceTask:
          "Choose one topic from school, work, or personal learning. Ask AI to teach it, then answer the quiz questions it gives you.",
      },
      {
        slug: "lesson-2",
        title: "Make Better Decisions",
        intro:
          "AI can help you compare options, notice tradeoffs, and prepare questions before making a decision.",
        content: [
          {
            heading: "Use AI to think, not to decide for you",
            body:
              "AI can list pros and cons, risks, costs, and questions. You still make the final choice because you understand your life and constraints better than the tool.",
          },
          {
            heading: "Give the real constraints",
            body:
              "Better advice comes from better context. Mention budget, deadline, location, people affected, and what matters most to you.",
          },
          {
            heading: "Ask what you may be missing",
            body:
              "A useful prompt is to ask AI what assumptions you are making and what questions you should ask before deciding.",
          },
        ],
        keyTakeaway:
          "AI can improve your thinking by showing options and tradeoffs, but it should not replace your judgement.",
        examplePrompt:
          "Help me think through this decision: [describe decision]. List my options, pros and cons, risks, hidden assumptions, and questions I should answer before choosing.",
        practiceTask:
          "Pick a small decision you need to make this week. Ask AI to compare your options, then write down your own final choice and why.",
      },
      {
        slug: "lesson-3",
        title: "Use AI Safely",
        intro:
          "Using AI safely means protecting private information, checking important claims, and knowing when to ask a person.",
        content: [
          {
            heading: "Protect private details",
            body:
              "Do not paste passwords, bank details, private customer data, confidential work documents, or sensitive personal information into AI tools.",
          },
          {
            heading: "Verify important claims",
            body:
              "For legal, medical, financial, school, or business decisions, check AI answers with trusted sources or a qualified person.",
          },
          {
            heading: "Keep your voice",
            body:
              "AI can help you write and think, but do not let it remove your personality, values, or responsibility from the final result.",
          },
        ],
        keyTakeaway:
          "Use AI like a helpful assistant, not a place to put secrets or a final authority on serious matters.",
        examplePrompt:
          "Review this AI-generated answer for safety. Tell me what facts I should verify, what private information I should remove, and what advice may need an expert.",
        practiceTask:
          "Look at one AI answer you received. Check whether it includes facts, advice, or private details that need extra care before you use it.",
      },
    ],
  },
];

export const lessonReferences: LessonReference[] = courseModules.flatMap(
  (module, moduleIndex) =>
    module.lessons.map((lesson, lessonIndex) => ({
      module,
      lesson,
      moduleIndex,
      lessonIndex,
    }))
);

export function getCourseModule(moduleSlug: string) {
  return courseModules.find((module) => module.slug === moduleSlug);
}

export function getLessonReference(moduleSlug: string, lessonSlug: string) {
  return lessonReferences.find(
    ({ module, lesson }) => module.slug === moduleSlug && lesson.slug === lessonSlug
  );
}

export function getAdjacentLessons(moduleSlug: string, lessonSlug: string) {
  const currentIndex = lessonReferences.findIndex(
    ({ module, lesson }) => module.slug === moduleSlug && lesson.slug === lessonSlug
  );

  return {
    previous: currentIndex > 0 ? lessonReferences[currentIndex - 1] : undefined,
    next:
      currentIndex >= 0 && currentIndex < lessonReferences.length - 1
        ? lessonReferences[currentIndex + 1]
        : undefined,
  };
}

export function getLessonPath(moduleSlug: string, lessonSlug: string) {
  return `/course/${moduleSlug}/${lessonSlug}`;
}

export function getModulePath(moduleSlug: string) {
  return `/course/${moduleSlug}`;
}
