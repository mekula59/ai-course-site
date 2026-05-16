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
    title: "Write And Communicate Better",
    description:
      "Use AI to write clearer messages, summarise information, and shape rough ideas into usable drafts.",
    lessons: [
      {
        slug: "lesson-1",
        title: "Write Clearer Messages",
        intro:
          "AI can help you write messages that sound clear, respectful, and appropriate for the situation.",
        content: [
          {
            heading: "Start with the situation",
            body:
              "Tell AI who you are writing to and why. A message to your manager, customer, classmate, or supplier should not sound the same.",
          },
          {
            heading: "Choose the tone",
            body:
              "Ask for a tone that fits the moment. You can say polite, firm, warm, professional, apologetic, direct, or friendly.",
          },
          {
            heading: "Edit before sending",
            body:
              "AI can sound too polished or too generic. Read the message out loud and change any line that does not sound like you.",
          },
        ],
        keyTakeaway:
          "AI helps you draft faster, but your final message should still sound human and fit the relationship.",
        examplePrompt:
          "Rewrite this message so it sounds polite, clear, and professional. Keep my meaning the same: [paste your message].",
        practiceTask:
          "Find one rough message in your notes or chat drafts. Ask AI to make it clearer, then edit the final version yourself.",
      },
      {
        slug: "lesson-2",
        title: "Summarise Long Information",
        intro:
          "Long articles, meeting notes, PDFs, and voice-note transcripts can become easier to understand when AI summarises them well.",
        content: [
          {
            heading: "Ask for the main points",
            body:
              "A good summary should show what matters most. Ask AI to separate key points, decisions, action items, and unclear areas.",
          },
          {
            heading: "Keep the original nearby",
            body:
              "Summaries can miss details. Use them to understand faster, then return to the original when the topic is important.",
          },
          {
            heading: "Choose your level",
            body:
              "You can ask for a one-paragraph summary, five bullet points, or a detailed study note. The right format depends on how you plan to use the information.",
          },
        ],
        keyTakeaway:
          "AI summaries save time when you ask for the right structure and still check important details.",
        examplePrompt:
          "Summarise this text for me. Give me the main idea, five key points, any action items, and three questions I should ask next: [paste text].",
        practiceTask:
          "Paste a long article or set of notes into AI and ask for a summary. Then ask it to turn the summary into a simple checklist.",
      },
      {
        slug: "lesson-3",
        title: "Turn Rough Ideas Into A First Draft",
        intro:
          "When your idea is messy, AI can help you turn it into something structured enough to edit.",
        content: [
          {
            heading: "Do not wait for perfect thoughts",
            body:
              "You can give AI rough notes, scattered bullet points, or a voice-note transcript. Ask it to organize the ideas before asking for a polished draft.",
          },
          {
            heading: "Pick a clear output",
            body:
              "Tell AI whether you need a caption, proposal, email, lesson plan, speech, CV section, or social post. The output should match the job.",
          },
          {
            heading: "Use AI for structure",
            body:
              "The most helpful first draft gives you a beginning, middle, and end. You can then add your real examples, voice, and judgement.",
          },
        ],
        keyTakeaway:
          "AI is strongest when it helps you move from messy notes to an editable draft.",
        examplePrompt:
          "Turn these rough notes into a clear first draft for a short LinkedIn post. Keep it practical and not motivational: [paste notes].",
        practiceTask:
          "Write five rough bullet points about something you know well. Ask AI to turn them into a first draft, then improve the draft yourself.",
      },
    ],
  },
  {
    slug: "module-3",
    number: "03",
    title: "Use AI For Work And Business",
    description:
      "Apply AI to planning, customer support, and simple business content without making things complicated.",
    lessons: [
      {
        slug: "lesson-1",
        title: "Plan Your Week With AI",
        intro:
          "AI can help you sort tasks, reduce overwhelm, and turn a busy week into a practical plan.",
        content: [
          {
            heading: "List everything first",
            body:
              "Start by dumping all your tasks into one place. Do not organize them yet. The first job is to get the mess out of your head.",
          },
          {
            heading: "Ask AI to group and prioritize",
            body:
              "AI can group tasks by project, urgency, effort, or deadline. It can also suggest what to do first and what to postpone.",
          },
          {
            heading: "Make the plan realistic",
            body:
              "AI may overpack your day. Ask it to leave buffer time and to choose the most important tasks, not every possible task.",
          },
        ],
        keyTakeaway:
          "AI can organize your workload, but you should decide what is realistic for your time and energy.",
        examplePrompt:
          "Here are my tasks for the week. Group them, pick the top priorities, and create a realistic Monday to Friday plan with buffer time: [paste tasks].",
        practiceTask:
          "Write down ten tasks you need to handle. Ask AI to group them and create a simple plan for the next three days.",
      },
      {
        slug: "lesson-2",
        title: "Support Customers Faster",
        intro:
          "For small businesses, AI can help draft helpful replies, FAQs, and follow-up messages without losing your human voice.",
        content: [
          {
            heading: "Create reusable answers",
            body:
              "If customers ask the same questions often, AI can help you create clear answers for pricing, delivery, refunds, booking, or product details.",
          },
          {
            heading: "Keep the tone respectful",
            body:
              "Customer messages need care. Ask AI to sound calm, direct, and helpful. Avoid replies that feel cold or dismissive.",
          },
          {
            heading: "Check sensitive details",
            body:
              "Before sending, confirm prices, dates, account numbers, policies, and promises. AI should not decide those for you.",
          },
        ],
        keyTakeaway:
          "AI can speed up customer communication, but accurate details and care still come from you.",
        examplePrompt:
          "Create five polite customer replies for a small Nigerian business. Include one for price inquiry, one for delayed delivery, one for payment confirmation, one for out-of-stock items, and one for thank you after purchase.",
        practiceTask:
          "Pick three common customer questions in your business or workplace. Ask AI to draft replies, then edit them to match your real tone.",
      },
      {
        slug: "lesson-3",
        title: "Create Simple Business Content",
        intro:
          "AI can help you create useful content for your business without forcing you to become a full-time content creator.",
        content: [
          {
            heading: "Start from customer questions",
            body:
              "Good content often answers real questions. Think about what people ask before they buy, after they buy, or when they are confused.",
          },
          {
            heading: "Ask for options",
            body:
              "Instead of asking for one caption, ask for five angles. You can choose the most honest and useful one.",
          },
          {
            heading: "Make it specific",
            body:
              "Generic content is easy to ignore. Add local details, product facts, customer situations, and your own point of view.",
          },
        ],
        keyTakeaway:
          "Useful business content starts with real customer questions, not random posting.",
        examplePrompt:
          "I sell [product or service] to [type of customer]. Give me ten simple content ideas based on questions customers usually ask before buying.",
        practiceTask:
          "Ask AI for ten content ideas for your work or business. Choose one and ask it to turn the idea into a short post.",
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
