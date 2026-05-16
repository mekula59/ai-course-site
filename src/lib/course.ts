export interface LessonSection {
  heading: string;
  body: string;
}

export interface Lesson {
  slug: string;
  title: string;
  intro: string;
  content: LessonSection[];
  keyTakeaway: string;
  examplePrompt: string;
  practiceTask: string;
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
        title: "What AI Is",
        intro:
          "AI is a tool that can help you think, write, plan, and explain things. You give it a task, and it gives you a useful starting point.",
        content: [
          {
            heading: "AI responds to instructions",
            body:
              "When you type into a tool like ChatGPT or Gemini, you are giving it an instruction. It reads what you ask for and tries to give you a helpful answer, draft, plan, or explanation.",
          },
          {
            heading: "It helps with everyday tasks",
            body:
              "You can use AI for simple, real things. It can help you write a message, understand a hard topic, create a list of ideas, plan your week, or make rough notes easier to read.",
          },
          {
            heading: "You still lead the work",
            body:
              "AI is helpful, but it is not perfect. It can misunderstand you or give wrong details. Treat the answer as a first draft, then read it, check it, and decide what to keep.",
          },
          {
            heading: "Real example",
            body:
              "Ada sells hair products on Instagram. She asks AI to write a short WhatsApp reply for a customer asking about prices and delivery. AI gives her a draft, then Ada edits the price, adds her delivery areas, and makes the message sound like her.",
          },
        ],
        keyTakeaway:
          "AI is not magic. It is a practical helper that gives you a starting point, while you stay in charge of the final answer.",
        examplePrompt:
          "Explain AI to me like I am a beginner who uses WhatsApp and Google every day. Keep it simple and give me three examples I can use at work, in business, or at school.",
        practiceTask:
          "Open an AI tool and ask it to explain what AI is in simple English. Then ask for three examples that match your own work, business, school, or daily life.",
      },
      {
        slug: "lesson-2",
        title: "How To Ask AI",
        intro:
          "A good prompt is just a clear instruction. Tell AI what you want, why you need it, and how you want the answer.",
        content: [
          {
            heading: "Start with the task",
            body:
              "Begin by saying exactly what you want AI to do. Use simple words like write, explain, summarise, compare, plan, rewrite, or translate.",
          },
          {
            heading: "Add the useful details",
            body:
              "Give the details that matter. Say who the answer is for, what tone you want, what the situation is, and any facts AI should not guess.",
          },
          {
            heading: "Choose the format",
            body:
              "Tell AI how to arrange the answer. You can ask for a short message, bullet points, a table, a checklist, a simple plan, or a first draft.",
          },
          {
            heading: "Real example",
            body:
              "Tunde needs to remind a customer about an unpaid balance. If he only writes, write a payment reminder, the answer may sound too stiff. If he adds that the customer is familiar, the tone should be polite, and the message is for WhatsApp, the reply becomes much more useful.",
          },
        ],
        keyTakeaway:
          "A useful prompt has three parts: the task, the details, and the format you want.",
        examplePrompt:
          "Write a polite WhatsApp message to a customer who has not paid their balance. Keep it firm but respectful. Use simple English and keep it under 80 words.",
        practiceTask:
          "Pick one message you need to send this week. Ask AI for a first draft, then ask it to make the same message shorter, warmer, and clearer.",
      },
      {
        slug: "lesson-3",
        title: "When To Trust AI",
        intro:
          "AI can save you time, but you should not trust every answer immediately. The smart move is to use it, then check it.",
        content: [
          {
            heading: "Trust it for rough work",
            body:
              "AI is good for first drafts, ideas, summaries, simple explanations, and planning. It is useful when you need to get started or make messy thoughts easier to understand.",
          },
          {
            heading: "Check important details",
            body:
              "Do not trust AI blindly with names, dates, prices, laws, medical advice, school rules, money decisions, or anything private. If the detail matters, verify it before you use it.",
          },
          {
            heading: "Use your judgement",
            body:
              "The best results come when you combine AI speed with your own sense. Ask yourself: does this sound true, useful, respectful, and correct for my situation?",
          },
          {
            heading: "Real example",
            body:
              "Mariam asks AI to write a short CV summary. The draft is helpful, but it adds skills she does not have. Mariam removes those lines, adds her real experience, and checks that the final version is honest before sending it.",
          },
        ],
        keyTakeaway:
          "Use AI to move faster, but check important details and keep your own judgement in the process.",
        examplePrompt:
          "Give me a simple checklist I can use to review an AI answer before I send it to a customer, teacher, manager, or client.",
        practiceTask:
          "Ask AI to help with a simple task. Before using the answer, mark three things: what is useful, what feels unclear, and what you need to check yourself.",
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
