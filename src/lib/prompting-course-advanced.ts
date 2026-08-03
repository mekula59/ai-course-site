import type { CourseModule, CourseStandaloneLesson, Lesson } from "@/lib/course";

const refiningLessons: Lesson[] = [
  {
    slug: "dont-start-over-refine-the-answer",
    title: { en: "Don't Start Over, Refine the Answer", pidgin: "No Start Again, Adjust the Answer" },
    intro: {
      en: "Should you continue this chat or start again? First check whether the task is still the same. If it is, the answer you already have may be useful material, even when part of it needs work.",
      pidgin: "You suppose continue this chat or start again? First check whether na still the same work. If na the same work, the answer wey you get fit still help, even if part of am need correction.",
    },
    teaching: {
      question: { en: "The task is still the same. What should I do next?", pidgin: "Na still the same work. Wetin I suppose do next?" },
      situation: {
        en: "You ask for a customer reply. The facts are right, but it sounds cold. Most people delete everything and try a different prompt. That throws away the parts that already worked. Let's fix only the problem.",
        pidgin: "You ask for customer reply. The facts correct, but e sound cold. Plenty people go delete everything and try another prompt. That one throw away the parts wey already work. Make we fix only the problem.",
      },
      comparison: {
        label: { en: "Keep the useful work", pidgin: "Keep the useful work" },
        before: { en: "Write the reply again.", pidgin: "Write the reply again." },
        after: { en: "Keep the facts and apology from your first reply. Make the opening warmer, shorten the explanation, and end with the exact next step. Keep it under 90 words.", pidgin: "Keep the facts and apology from your first reply. Make the opening warmer, shorten the explanation, and end with the exact next step. Make e no pass 90 words." },
        why: { en: "The improved prompt protects what is already right and names three changes you can check.", pidgin: "The improved prompt protect wetin already correct and name three changes wey you fit check." },
      },
      didYouNotice: { en: "The follow-up points back to the first answer. You don't need to paste the whole task again in the same chat.", pidgin: "The follow-up point back to the first answer. You no need paste the whole task again for the same chat." },
      commonMistake: { en: "Saying make it better. Better could mean shorter, friendlier, more detailed, or something else. Name the change.", pidgin: "To say make am better. Better fit mean shorter, friendlier, more detailed, or another thing. Name the change." },
    },
    content: [
      {
        heading: { en: "Use keep, change, remove", pidgin: "Use keep, change, remove" },
        body: { en: "Read the answer once before replying. What should stay? What needs to change? What should disappear? Those three questions turn a vague reaction into an edit brief.\n\nFor a work email, you might keep the facts, change the tone, and remove repeated background. For meeting notes, keep the decisions, change the order, and remove side conversations.", pidgin: "Read the answer once before you reply. Wetin suppose remain? Wetin need change? Wetin suppose comot? Those three questions turn vague reaction into clear edit brief.\n\nFor work email, you fit keep the facts, change the tone, and remove repeated background. For meeting notes, keep the decisions, change the order, and remove side talk." },
      },
      {
        heading: { en: "Make one edit at a time when the answer is messy", pidgin: "Make one edit at a time if the answer scatter" },
        body: { en: "If five things feel wrong, start with the biggest one. Fix the structure first, then the wording. That makes it easier to see whether each instruction worked.", pidgin: "If five things wrong, start with the biggest one. Fix the structure first, then the wording. That way, e easy to see whether every instruction work." },
        examples: [
          { label: { en: "Birthday message", pidgin: "Birthday message" }, content: { en: "Keep the personal memory. Remove the generic praise. Make it sound like a close friend, not a greeting card.", pidgin: "Keep the personal memory. Remove the generic praise. Make e sound like close friend, no be greeting card." } },
          { label: { en: "Meeting notes", pidgin: "Meeting notes" }, content: { en: "Keep every decision. Put action items first, add each owner beside the task, and remove repeated discussion.", pidgin: "Keep every decision. Put action items first, add each owner beside the task, and remove repeated discussion." } },
        ],
      },
      {
        heading: { en: "Pause before you read on", pidgin: "Pause before you continue" },
        body: { en: "Think of the last AI answer you almost used. What one sentence would you give it now: Keep..., Change..., Remove...? Write that sentence before trying the prompt below.", pidgin: "Think about the last AI answer wey you nearly use. Which one sentence you go give am now: Keep..., Change..., Remove...? Write that sentence before you try the prompt below." },
      },
    ],
    examplePrompt: { en: "Revise your last answer.\n\nKeep: [the facts, ideas, or lines that already work].\nChange: [tone, length, order, detail, or wording].\nRemove: [repetition, weak opening, jargon, or anything unnecessary].\n\nDo not add new facts. Show me the revised version first, then list the three main edits you made.", pidgin: "Revise your last answer.\n\nKeep: [facts, ideas, or lines wey already work].\nChange: [tone, length, order, detail, or wording].\nRemove: [repetition, weak opening, jargon, or anything wey no need].\n\nNo add new facts. Show me the revised version first, then list the three main edits wey you make." },
    practiceTask: { en: "Take one answer from an earlier lesson. Give it a keep, change, remove instruction. Compare the first and revised versions. Did the useful parts survive?", pidgin: "Take one answer from earlier lesson. Give am keep, change, remove instruction. Compare the first and revised versions. The useful parts still dey?" },
    quickCheck: [
      { en: "What is already working?", pidgin: "Wetin already work?" },
      { en: "Can I name the exact change I want?", pidgin: "I fit name the exact change wey I want?" },
      { en: "Did the revision keep the facts accurate?", pidgin: "The revision keep the facts correct?" },
    ],
    keyTakeaway: { en: "A nearly-right answer is useful material. Keep what works, name the change, and remove what gets in the way.", pidgin: "Answer wey nearly correct na useful material. Keep wetin work, name the change, and remove wetin dey block am." },
  },
  {
    slug: "ask-better-follow-up-questions",
    title: { en: "Ask Better Follow-up Questions", pidgin: "Ask Better Follow-up Questions" },
    intro: { en: "Sometimes the answer isn't wrong. It's just shallow, unclear, or heading in the wrong direction. A good follow-up tells AI where to go next.", pidgin: "Sometimes the answer no wrong. E just shallow, unclear, or dey go wrong direction. Better follow-up tell AI where e suppose go next." },
    teaching: {
      question: { en: "What do I say when the first answer isn't enough?", pidgin: "Wetin I go talk when the first answer no reach?" },
      situation: { en: "You ask AI to explain inflation. The answer gives a definition, but you still can't picture it. Typing explain more may produce a longer version of the same confusion. Let's ask for the missing kind of help.", pidgin: "You ask AI to explain inflation. The answer give definition, but you still no fit picture am. If you type explain more, e fit just make the same confusion longer. Make we ask for the kind help wey miss." },
      comparison: {
        label: { en: "Go deeper with direction", pidgin: "Go deeper with direction" },
        before: { en: "Explain more.", pidgin: "Explain more." },
        after: { en: "Explain the second point again using one market example from Lagos. Show what changes for a buyer and a seller, then ask me one question to check my understanding.", pidgin: "Explain the second point again with one market example from Lagos. Show wetin change for buyer and seller, then ask me one question to check whether I understand." },
        why: { en: "The follow-up identifies the unclear part, asks for a concrete example, and creates a small check for understanding.", pidgin: "The follow-up identify the unclear part, ask for concrete example, and add small check for understanding." },
      },
      didYouNotice: { en: "You can ask AI to clarify, go deeper, change direction, or ask you a question. A follow-up isn't just an edit.", pidgin: "You fit ask AI to clarify, go deeper, change direction, or ask you question. Follow-up no be only edit." },
      commonMistake: { en: "Asking several unrelated follow-ups in one message. Handle the biggest gap first so you can judge the answer.", pidgin: "To ask plenty unrelated follow-ups for one message. Handle the biggest gap first so you fit judge the answer." },
    },
    content: [
      { heading: { en: "Name what is missing", pidgin: "Name wetin miss" }, body: { en: "Use a follow-up when you need clarification, more depth, a different example, another point of view, or a new direction. Point to the exact sentence or section when you can.\n\nYou can say: What do you mean by...? Show me how this works with... What assumption are you making? Compare this with... What would change if...?", pidgin: "Use follow-up when you need clarification, more depth, different example, another point of view, or new direction. Point to the exact sentence or section if you fit.\n\nYou fit say: Wetin you mean by...? Show me how this work with... Which assumption you dey make? Compare this with... Wetin go change if...?" } },
      { heading: { en: "Use follow-ups for real decisions", pidgin: "Use follow-up for real decisions" }, body: { en: "A travel plan might need: Which part changes if my budget drops by N50,000? A job application draft might need: Which sentence sounds least specific, and what fact should I add? A study answer might need: Don't give me the solution yet. Give me one hint.", pidgin: "Travel plan fit need: Which part go change if my budget drop by N50,000? Job application draft fit need: Which sentence no specific, and which fact I suppose add? Study answer fit need: No give me solution yet. Give me one hint." } },
      { heading: { en: "Spot the problem", pidgin: "Spot the problem" }, body: { en: "Which follow-up will help more after a confusing explanation? A: Try again. B: Explain the first step with a simple example, then let me describe it back to you.\n\nB works better because it names the gap and gives the conversation a next move.", pidgin: "Which follow-up go help after confusing explanation? A: Try again. B: Explain the first step with simple example, then make I describe am back to you.\n\nB better because e name the gap and give the conversation next move." } },
    ],
    examplePrompt: { en: "I want to understand your last answer better.\n\nThe part I am unsure about is: [quote or name the part].\nWhat I need next: [a simpler explanation, real example, comparison, reason, evidence, or one hint].\nMy situation or level: [useful context].\n\nAnswer that part only, then ask me one short question to check whether it is clear.", pidgin: "I want understand your last answer better.\n\nThe part wey I no sure about na: [quote or name the part].\nWetin I need next: [simpler explanation, real example, comparison, reason, evidence, or one hint].\nMy situation or level: [useful context].\n\nAnswer only that part, then ask me one short question to check whether e clear." },
    practiceTask: { en: "Open an answer from this course and ask one clarifying follow-up, then one deeper follow-up. Notice how each question moves the conversation differently.", pidgin: "Open one answer from this course and ask one clarifying follow-up, then one deeper follow-up. Notice how every question move the conversation differently." },
    quickCheck: [
      { en: "Can I point to the part that needs work?", pidgin: "I fit point to the part wey need work?" },
      { en: "Am I asking for the missing kind of help?", pidgin: "I dey ask for the kind help wey miss?" },
      { en: "Would one focused follow-up be clearer than five?", pidgin: "One focused follow-up go clearer pass five?" },
    ],
    keyTakeaway: { en: "A useful follow-up names the gap and gives the conversation one clear next move.", pidgin: "Useful follow-up dey name the gap and give the conversation one clear next move." },
  },
  {
    slug: "turn-one-answer-into-many-versions",
    title: { en: "Turn One Answer Into Many Versions", pidgin: "Use One Answer Make Different Versions" },
    intro: { en: "You don't need to write the same update seven times. Start with one accurate source, then adapt it for each place and audience without changing the facts.", pidgin: "You no need write the same update seven times. Start with one correct source, then adjust am for every place and audience without changing the facts." },
    teaching: {
      question: { en: "Can one good answer do more than one job?", pidgin: "One good answer fit do more than one work?" },
      situation: { en: "The family contribution details are already confirmed. Now you need an email, WhatsApp reminder, and simple checklist. Starting from scratch each time creates extra work and makes it easier for the amount or deadline to change by mistake.", pidgin: "Family contribution details don confirm. Now you need email, WhatsApp reminder, and simple checklist. If you start again every time, the work plenty and you fit mistakenly change the amount or deadline." },
      comparison: {
        label: { en: "Adapt, don't duplicate", pidgin: "Adapt am, no duplicate blindly" },
        before: { en: "Turn this into different messages.", pidgin: "Turn this into different messages." },
        after: { en: "Using the confirmed family contribution details below, create: 1) a short email, 2) a WhatsApp reminder, and 3) a simple payment checklist. Keep the amount, deadline, and contact person exactly the same. Adjust the opening and length for each format.", pidgin: "Use the family contribution details wey don confirm create: 1) short email, 2) WhatsApp reminder, and 3) simple payment checklist. Keep the amount, deadline, and contact person exactly the same. Change the opening and length make e fit every format." },
        why: { en: "The improved prompt names each version and protects the facts that must stay consistent.", pidgin: "The improved prompt name every version and protect the facts wey must remain the same." },
      },
      didYouNotice: { en: "The source stays fixed while the audience, length, and structure change.", pidgin: "The source remain fixed while audience, length, and structure change." },
      commonMistake: { en: "Letting AI invent missing details while repurposing. Mark approved facts clearly and ask it not to add new ones.", pidgin: "To allow AI invent missing details as e dey repurpose. Mark approved facts clearly and tell am no add new ones." },
    },
    content: [
      { heading: { en: "Choose one source of truth", pidgin: "Choose one correct source" }, body: { en: "Use approved notes, a final announcement, or a checked answer as the source. Tell AI which facts must not change. Then name the audience and job of each version.\n\nAn email can explain. WhatsApp can remind. LinkedIn can share a professional reflection. Instagram can lead with a strong opening. A checklist can turn information into action. A speech should sound natural when read aloud.", pidgin: "Use approved notes, final announcement, or checked answer as the source. Tell AI which facts must not change. Then name the audience and work of every version.\n\nEmail fit explain. WhatsApp fit remind. LinkedIn fit share professional reflection. Instagram fit start with strong opening. Checklist fit turn information into action. Speech suppose sound natural when person read am aloud." } },
      { heading: { en: "Ask for versions in a sensible order", pidgin: "Ask for versions with sensible order" }, body: { en: "Create the detailed version first when the shorter versions depend on it. For a family event, approve the full announcement before asking for the reminder and checklist. That gives you one place to correct the facts.", pidgin: "Create the detailed version first if the shorter versions depend on am. For family event, approve the full announcement before you ask for reminder and checklist. That give you one place to correct the facts." } },
      { heading: { en: "What would you change?", pidgin: "Wetin you go change?" }, body: { en: "A LinkedIn post and a WhatsApp reminder shouldn't have the same opening, length, or call to action. Before asking AI, write one difference you expect between them. Then check whether the result respects it.", pidgin: "LinkedIn post and WhatsApp reminder no suppose get the same opening, length, or call to action. Before you ask AI, write one difference wey you expect. Then check whether the result follow am." } },
    ],
    examplePrompt: { en: "Use the approved source below to create several versions. Do not add or change facts.\n\nSource: [paste checked information].\n\nCreate:\n1. Email: [audience, purpose, length].\n2. WhatsApp message: [audience, purpose, length].\n3. LinkedIn or Instagram post: [audience, tone, call to action].\n4. Checklist or bullet summary: [who will use it].\n5. Short speech: [occasion and speaking time].\n\nLabel each version clearly. Afterward, list the facts you kept consistent.", pidgin: "Use the approved source below create different versions. No add or change facts.\n\nSource: [paste checked information].\n\nCreate:\n1. Email: [audience, purpose, length].\n2. WhatsApp message: [audience, purpose, length].\n3. LinkedIn or Instagram post: [audience, tone, call to action].\n4. Checklist or bullet summary: [who go use am].\n5. Short speech: [occasion and speaking time].\n\nLabel every version clearly. After that, list the facts wey remain the same." },
    practiceTask: { en: "Use one checked announcement or answer. Turn it into two versions for different channels. Compare the openings, length, and next step, then verify every fact against the source.", pidgin: "Use one checked announcement or answer. Turn am into two versions for different channels. Compare the openings, length, and next step, then verify every fact with the source." },
    quickCheck: [
      { en: "Is my source accurate and approved?", pidgin: "My source correct and approved?" },
      { en: "Did I name the job of each version?", pidgin: "I name the work of every version?" },
      { en: "Did the facts stay consistent?", pidgin: "The facts remain the same?" },
    ],
    keyTakeaway: { en: "Keep one checked source. Change the delivery for each audience, not the facts.", pidgin: "Keep one checked source. Change how you deliver am for every audience, no change the facts." },
  },
];

export const promptingRefiningResponsesModule: CourseModule = {
  slug: "refining-ai-responses",
  number: "03",
  title: { en: "Refining AI Responses", pidgin: "How to Improve AI Answer" },
  description: { en: "Fix what is weak, ask useful follow-ups, and turn one checked answer into versions for different places.", pidgin: "Fix wetin weak, ask useful follow-ups, and turn one checked answer into versions for different places." },
  diagram: { steps: [{ en: "Read", pidgin: "Read" }, { en: "Name the gap", pidgin: "Name the gap" }, { en: "Refine", pidgin: "Refine" }, { en: "Check again", pidgin: "Check again" }] },
  lessons: refiningLessons,
};

const habitLesson = (
  slug: string,
  title: { en: string; pidgin: string },
  intro: { en: string; pidgin: string },
  question: { en: string; pidgin: string },
  situation: { en: string; pidgin: string },
  before: { en: string; pidgin: string },
  after: { en: string; pidgin: string },
  why: { en: string; pidgin: string },
  notice: { en: string; pidgin: string },
  mistake: { en: string; pidgin: string },
  body: { en: string; pidgin: string },
  examples: Lesson["content"][number]["examples"],
  prompt: { en: string; pidgin: string },
  practice: { en: string; pidgin: string },
  takeaway: { en: string; pidgin: string }
): Lesson => ({
  slug,
  title,
  intro,
  teaching: { question, situation, comparison: { label: { en: "A habit that holds up", pidgin: "Habit wey go last" }, before, after, why }, didYouNotice: notice, commonMistake: mistake },
  content: [
    { heading: { en: "Keep it simple enough to use", pidgin: "Make e simple enough to use" }, body, examples },
    { heading: { en: "Pause and make one decision", pidgin: "Pause choose one thing" }, body: { en: "Before you continue, choose one real task you repeat. What would make the next attempt quicker without making the prompt rigid? Write that down.", pidgin: "Before you continue, choose one real task wey you dey repeat. Wetin go make the next attempt easier without making the prompt too fixed? Write am down." } },
    { heading: { en: "Try this with real work", pidgin: "Try am with real work" }, body: { en: "Use the prompt below for something you already do. A useful habit should save thinking next time while still leaving room for the details that change.", pidgin: "Use the prompt below for something wey you already dey do. Good habit suppose make the next work easier and still leave space for details wey fit change." } },
  ],
  examplePrompt: prompt,
  practiceTask: practice,
  quickCheck: [
    { en: "Will I genuinely use this again?", pidgin: "I go really use this again?" },
    { en: "Which parts should stay fixed?", pidgin: "Which parts suppose remain fixed?" },
    { en: "Which details must I change each time?", pidgin: "Which details I must change every time?" },
  ],
  keyTakeaway: takeaway,
});

export const promptingBetterHabitsModule: CourseModule = {
  slug: "building-better-prompt-habits",
  number: "04",
  title: { en: "Building Better Prompt Habits", pidgin: "How to Build Better Prompt Habits" },
  description: { en: "Keep the prompts that earn their place, turn repeated work into flexible templates, and build a small toolkit around your real life.", pidgin: "Keep prompts wey prove useful, turn repeated work into flexible templates, and build small toolkit around your real life." },
  diagram: { steps: [{ en: "Use it", pidgin: "Use am" }, { en: "Improve it", pidgin: "Improve am" }, { en: "Save it", pidgin: "Save am" }, { en: "Reuse with care", pidgin: "Reuse am with care" }] },
  lessons: [
    habitLesson(
      "save-prompts-youll-reuse",
      { en: "Save Prompts You'll Reuse", pidgin: "Save Prompts Wey Worth Keeping" },
      { en: "A useful prompt disappears quickly inside old chats. Save the ones that solve repeated problems, not every prompt you've ever typed.", pidgin: "Useful prompt fit disappear inside old chats. Save the ones wey solve repeated problems, no be every prompt wey you don type." },
      { en: "Which prompts are worth keeping?", pidgin: "Which prompts worth keeping?" },
      { en: "A vendor follow-up prompt worked well last month, but now you can't find it. Your chat history is full, and the useful wording is buried. Let's give prompts that work a proper home.", pidgin: "One vendor follow-up prompt work well last month, but now you no fit find am. Your chat history full and the useful wording hide. Make we give prompts wey work proper place." },
      { en: "Save every prompt in one long note called AI prompts.", pidgin: "Save every prompt for one long note called AI prompts." },
      { en: "Customer reply: delayed order\nUse when: delivery is late but a new date is not confirmed\nPrompt: [saved prompt]\nLast improved: [date]", pidgin: "Customer reply: delayed order\nUse am when: delivery late but new date never confirm\nPrompt: [saved prompt]\nLast improved: [date]" },
      { en: "The improved version has a clear name, a use case, and enough context to find it later.", pidgin: "The improved version get clear name, use case, and enough context to find am later." },
      { en: "The label matters almost as much as the prompt. Future you needs to recognise the situation quickly.", pidgin: "The label nearly matter like the prompt. Future you need recognise the situation quickly." },
      { en: "Saving an untested prompt because it looks clever. Save prompts after they produce something useful, then keep the improved version.", pidgin: "To save prompt wey you never test because e look clever. Save prompt after e produce useful result, then keep the improved version." },
      { en: "A notes app, document, or spreadsheet is enough. Give each prompt a task name, when to use it, the prompt itself, and one note about what to check. Keep categories practical: Work, Business, School, Home, Writing.\n\nReview saved prompts occasionally. Delete duplicates and fix wording that no longer fits how you work.", pidgin: "Notes app, document, or spreadsheet dey enough. Give every prompt task name, when to use am, the prompt itself, and one note about wetin to check. Keep categories practical: Work, Business, School, Home, Writing.\n\nCheck saved prompts sometimes. Delete duplicates and fix wording wey no longer fit how you dey work." },
      [
        { label: { en: "Worth saving", pidgin: "Worth saving" }, content: { en: "A weekly meeting-summary prompt you've used three times and adjusted after real results.", pidgin: "Weekly meeting-summary prompt wey you don use three times and adjust after real results." } },
        { label: { en: "Probably not", pidgin: "Maybe no need" }, content: { en: "A one-off birthday message for a person and situation that won't repeat.", pidgin: "One-off birthday message for person and situation wey no go repeat." } },
      ],
      { en: "Help me clean up this prompt before I save it.\n\nTask it solves: [task].\nWhen I use it: [situation].\nCurrent prompt: [paste prompt].\n\nRemove details that belong only to today's example. Replace changing details with clear [brackets]. Keep any instruction that protects accuracy, tone, or privacy. Give the template a short, searchable name.", pidgin: "Help me clean this prompt before I save am.\n\nTask wey e solve: [task].\nWhen I dey use am: [situation].\nCurrent prompt: [paste prompt].\n\nRemove details wey belong only to today example. Replace details wey dey change with clear [brackets]. Keep any instruction wey protect accuracy, tone, or privacy. Give the template short name wey easy to search." },
      { en: "Find one prompt that worked for a repeated task. Clean it up, name it by the problem it solves, and save it somewhere you already use.", pidgin: "Find one prompt wey work for repeated task. Clean am, name am by the problem wey e solve, and save am somewhere wey you already dey use." },
      { en: "Save proven prompts by the problem they solve. A small, searchable collection beats a crowded archive.", pidgin: "Save prompts wey don work by the problem wey dem solve. Small collection wey easy to search better pass crowded archive." }
    ),
    habitLesson(
      "build-simple-prompt-templates",
      { en: "Build Simple Prompt Templates", pidgin: "Build Simple Prompt Templates" },
      { en: "A template keeps the useful shape of a prompt while leaving the changing details open. It should make repeated work easier, not force every situation into the same answer.", pidgin: "Template dey keep the useful shape of prompt while e leave changing details open. E suppose make repeated work easy, no be force every situation enter the same answer." },
      { en: "How do I reuse a prompt without making it rigid?", pidgin: "How I fit reuse prompt without making am too rigid?" },
      { en: "Your weekly business caption prompt works, but every product, audience, and offer changes. Copying last week's prompt risks leaving old details inside. Let's separate what stays from what changes.", pidgin: "Your weekly business caption prompt work, but product, audience, and offer dey change. If you copy last week prompt, old details fit remain inside. Make we separate wetin stay from wetin change." },
      { en: "Write an Instagram caption for my red sandals. They cost N18,000 and orders close Friday.", pidgin: "Write Instagram caption for my red sandals. Price na N18,000 and order close Friday." },
      { en: "Write a [channel] caption for [product].\nAudience: [who it is for].\nOffer and deadline: [details].\nTone: [tone].\nLength: [limit].\nEnd with: [next step].\nDo not invent product claims.", pidgin: "Write [channel] caption for [product].\nAudience: [who e dey for].\nOffer and deadline: [details].\nTone: [tone].\nLength: [limit].\nEnd with: [next step].\nNo invent product claims." },
      { en: "The brackets show exactly what to replace, while the safety and format instructions stay useful each time.", pidgin: "The brackets show exactly wetin you go replace, while safety and format instructions remain useful every time." },
      { en: "A good template still asks you to think. You must fill in the audience, facts, and goal instead of pressing send blindly.", pidgin: "Good template still make you think. You must fill audience, facts, and goal instead of sending am blindly." },
      { en: "Leaving old names, prices, dates, or private details inside a template. Use obvious brackets and read every filled prompt before sending.", pidgin: "To leave old names, prices, dates, or private details inside template. Use clear brackets and read every filled prompt before you send." },
      { en: "Start from a prompt that has already worked. Highlight details that change every time and replace them with clear placeholders. Keep stable instructions such as check the facts, don't invent details, or use short paragraphs.\n\nTest the template with two different examples. If it works for only one, it is still an example, not a reusable template.", pidgin: "Start from prompt wey don already work. Mark details wey dey change every time and replace dem with clear placeholders. Keep stable instructions like check the facts, no invent details, or use short paragraphs.\n\nTest the template with two different examples. If e work for only one, e still be example, no be reusable template." },
      [
        { label: { en: "Fixed parts", pidgin: "Parts wey remain" }, content: { en: "The task, quality checks, and useful output structure.", pidgin: "The work, wetin you go check, and how the answer suppose arrange." } },
        { label: { en: "Changing parts", pidgin: "Parts wey dey change" }, content: { en: "Audience, names, dates, facts, tone, budget, and source material.", pidgin: "Audience, names, dates, facts, tone, budget, and source material." } },
      ],
      { en: "Turn this tested prompt into a reusable template: [paste prompt].\n\n1. Put [brackets] around details that should change each time.\n2. Keep instructions that protect quality or accuracy.\n3. Remove details that belong only to this example.\n4. Add a short checklist of fields I must fill before using it.\n5. Test the template with two different sample situations.", pidgin: "Turn this tested prompt into reusable template: [paste prompt].\n\n1. Put [brackets] around details wey suppose change every time.\n2. Keep instructions wey protect quality or accuracy.\n3. Remove details wey belong only to this example.\n4. Add short checklist of fields wey I must fill before I use am.\n5. Test the template with two different sample situations." },
      { en: "Take one saved prompt. Replace the changing details with brackets, then test it with two genuinely different situations. Fix any part that still depends on the first example.", pidgin: "Take one saved prompt. Replace changing details with brackets, then test am with two different situations. Fix any part wey still depend on the first example." },
      { en: "A template keeps the useful decisions and exposes the details that must change. Test it twice before trusting it.", pidgin: "Template keep the parts wey help and show the details wey must change. Test am twice before you trust am." }
    ),
    habitLesson(
      "create-your-personal-prompt-toolkit",
      { en: "Create Your Personal Prompt Toolkit", pidgin: "Create Your Own Prompt Toolkit" },
      { en: "You don't need hundreds of prompts. You need a small set that matches the work, school, business, and everyday tasks you actually repeat.", pidgin: "You no need hundreds of prompts. You need small set wey match the work, school, business, and everyday tasks wey you really dey repeat." },
      { en: "What should go into my personal toolkit?", pidgin: "Wetin suppose enter my personal toolkit?" },
      { en: "You download a huge prompt list. Most of it doesn't fit your life, so you stop opening it. A useful toolkit starts with your repeated tasks, not somebody else's collection.", pidgin: "You download huge prompt list. Most of am no concern the things wey you dey do, so after some time you stop opening am. Useful toolkit suppose start with your own repeated tasks, no be another person collection." },
      { en: "Collect 100 prompts from the internet and sort them later.", pidgin: "Collect 100 prompts from internet and sort dem later." },
      { en: "Start with five jobs I repeat:\n1. Reply to customers\n2. Summarise meeting notes\n3. Plan weekly study\n4. Improve application emails\n5. Write community announcements", pidgin: "Start with five tasks wey I dey repeat:\n1. Reply customers\n2. Summarise meeting notes\n3. Plan weekly study\n4. Improve application emails\n5. Write community announcements" },
      { en: "The improved list begins with real behaviour. Each task can earn one tested template.", pidgin: "The better list start from things wey you really dey do. Every task fit get one template wey you don test." },
      { en: "Your toolkit can be tiny and still valuable. Five prompts you use beat fifty you forget.", pidgin: "Your toolkit fit small and still useful. Five prompts wey you use better pass fifty wey you forget." },
      { en: "Organising the toolkit for hours before testing the prompts. Use a simple page first, then improve the organisation when the collection grows.", pidgin: "To arrange toolkit for hours before you test the prompts. Use simple page first, then improve the arrangement when the collection grow." },
      { en: "List the tasks you repeat in a normal month. Choose the five where a clear prompt would save time or improve quality. For each one, keep the template, one example, and a short check before use.\n\nAdd a date when you revise a prompt. Tools change, but your judgement about the task matters more than chasing every new prompting trick.", pidgin: "List the tasks wey you dey repeat for normal month. Choose five where clear prompt fit save time or improve quality. For each one, keep the template, one example, and short check before use.\n\nAdd date when you revise prompt. Tools dey change, but your judgement about the task matter pass chasing every new prompting trick." },
      [
        { label: { en: "One toolkit page", pidgin: "One toolkit page" }, content: { en: "Prompt name, when to use it, template, example, and what to check.", pidgin: "Prompt name, when to use am, template, example, and wetin to check." } },
        { label: { en: "Monthly five-minute review", pidgin: "Five-minute monthly review" }, content: { en: "Remove what you don't use. Improve what gave a weak answer. Add only what solved a repeated task.", pidgin: "Remove wetin you no use. Improve wetin give weak answer. Add only wetin solve repeated task." } },
      ],
      { en: "Help me choose the first five prompts for my personal toolkit.\n\nTasks I repeat at work, school, business, or home: [list them].\nTasks that usually take too long or come out inconsistently: [list them].\n\nGroup similar tasks, then recommend five toolkit entries. For each entry, give it a clear name, say when to use it, and tell me what information I should prepare before prompting. Do not write the full templates yet.", pidgin: "Help me choose the first five prompts for my personal toolkit.\n\nTasks wey I dey repeat for work, school, business, or home: [list dem].\nTasks wey dey take too long or no dey consistent: [list dem].\n\nGroup similar tasks, then recommend five toolkit entries. For every entry, give am clear name, talk when to use am, and tell me which information I suppose prepare before prompting. No write the full templates yet." },
      { en: "List ten tasks you repeat. Circle five that are frequent, safe to use with AI, and easy to review. Build one toolkit entry today, not all five.", pidgin: "List ten tasks wey you dey repeat. Circle five wey you dey do often, wey safe to use with AI, and wey easy to check. Build one toolkit entry today, no be all five." },
      { en: "Build your toolkit around repeated problems. Start with five tested prompts and let the collection grow from real use.", pidgin: "Build your toolkit around repeated problems. Start with five tested prompts and make the collection grow from real use." }
    ),
  ],
};

const promptBank = {
  en: "1. Turn these notes into a clear WhatsApp message for [audience].\n2. Rewrite this email to sound [tone] while keeping every fact.\n3. Turn this announcement into email, WhatsApp, and Instagram versions.\n4. Shorten this to [length] without removing [important point].\n5. Summarise these meeting notes into decisions, owners, and deadlines.\n6. Turn these rough work notes into a clear action list with owners and deadlines.\n7. Write a professional application email using only these facts: [facts].\n8. Check this draft for unclear claims and questions the reader may still have.\n9. Explain [topic] to [level] using [example], then ask me two questions.\n10. Create a seven-day study plan for [topic] with [time] each day.\n11. Give me one hint for [problem] without giving the full answer.\n12. Reply to this customer complaint calmly and explain the next step.\n13. Give me three caption openings for [product] without inventing claims.\n14. Compare [options] in a table using [criteria].\n15. Create a checklist for [event or task] grouped by [stages].\n16. Turn these rough ideas into a weekly content plan for [audience].\n17. Ask me up to three questions before planning [task].\n18. Help me choose the repeated tasks worth adding to my prompt toolkit.\n19. Make this answer more specific using examples from [context].\n20. Keep [parts], change [parts], and remove [parts] from your last answer.\n21. Show me the assumptions in your answer and which facts I should verify.\n22. Explain what is weak in this answer before rewriting it.",
  pidgin: "1. Turn these notes into clear WhatsApp message for [audience].\n2. Rewrite this email make e sound [tone], but keep every fact.\n3. Turn this announcement into email, WhatsApp, and Instagram versions.\n4. Shorten this reach [length], but no remove [important point].\n5. Summarise these meeting notes into decisions, who go handle each one, and deadlines.\n6. Turn these rough work notes into clear action list with who go handle each task and the deadline.\n7. Write professional application email using only these facts: [facts].\n8. Check this draft for claims wey no clear and questions wey reader fit still ask.\n9. Explain [topic] for person wey dey [level] with [example], then ask me two questions.\n10. Create seven-day study plan for [topic] with [time] every day.\n11. Give me one hint for [problem] without giving me the full answer.\n12. Reply this customer complaint calmly and explain the next step.\n13. Give me three caption openings for [product]. No add any claim wey I no give you.\n14. Compare [options] inside table using [criteria].\n15. Create checklist for [event or task] and group am by [stages].\n16. Turn these rough ideas into weekly content plan for [audience].\n17. Before you plan [task], ask me up to three questions if important details dey miss.\n18. Help me choose the tasks wey I dey repeat and suppose add to my prompt toolkit.\n19. Use examples from [context] make this answer more specific.\n20. Keep [parts], change [parts], and remove [parts] from your last answer.\n21. Show me the assumptions inside your answer and the facts wey I suppose verify.\n22. Explain wetin weak for this answer before you rewrite am.",
};

export const promptingPlaybook: CourseStandaloneLesson = {
  slug: "prompt-playbook",
  eyebrow: { en: "Keep this close", pidgin: "Keep this one near you" },
  lesson: {
    slug: "prompt-playbook",
    title: { en: "Prompt Playbook", pidgin: "Prompt Playbook" },
    intro: { en: "This isn't another summary. It's a practical page to return to when a prompt feels stuck, an answer feels wrong, or you need a useful starting point.", pidgin: "This one no be another summary. Na practical page wey you fit return to when prompt stuck, answer wrong, or you need useful place to start." },
    content: [
      { heading: { en: "The CORE prompt check", pidgin: "CORE check for your prompt" }, body: { en: "Before you send it, check the CORE.\n\nContext: What does AI need to know?\nObjective: What do you want AI to do?\nRules: What facts, limits, tone, requirements, or boundaries should it follow?\nExpected result: What kind of answer do you want back?\n\nWrite naturally. CORE is a reminder, not a required order.", pidgin: "Before you send the prompt, check the CORE.\n\nContext: Wetin AI need know?\nObjective: Wetin you want make AI do?\nRules: Which rules, facts, limits, tone, or details AI no suppose miss?\nExpected result: Which kind answer you want back?\n\nWrite am naturally. CORE na reminder, no be compulsory order." } },
      { heading: { en: "Context, tone, and output guides", pidgin: "Context, tone, and output guides" }, body: { en: "Context: audience, goal, situation, source material, constraints, and what you've tried.\nTone: choose from warm, calm, direct, friendly, formal, apologetic, or confident, then name the audience and purpose.\nOutput: choose paragraph, bullets, table, email, WhatsApp message, script, checklist, or steps based on what you'll do next.", pidgin: "Context: audience, goal, situation, source material, limits, and wetin you don try.\nTone: choose warm, calm, direct, friendly, formal, apologetic, or confident, then name the audience and purpose.\nOutput: choose paragraph, bullets, table, email, WhatsApp message, script, checklist, or steps based on wetin you wan do next." } },
      { heading: { en: "When AI gets it wrong", pidgin: "When AI get am wrong" }, body: { en: "Stop and name the problem. Correct wrong facts. Point to the unclear part. Say what to keep, change, or remove. Ask for evidence when it matters. If the task is sensitive or the answer still feels unreliable, don't use it.\n\nNever let a confident tone replace checking.", pidgin: "Stop and name the problem. Correct wrong facts. Point to the unclear part. Talk wetin e suppose keep, change, or remove. Ask for evidence when e matter. If the task sensitive or the answer still no reliable, no use am.\n\nNo allow confident tone replace checking." } },
      { heading: { en: "What to avoid", pidgin: "Wetin to avoid" }, body: { en: "Don't paste private information you don't need. Don't ask AI to impersonate someone deceptively. Don't trust dates, prices, sources, calculations, or important claims without checking. Don't crowd a prompt with details that don't affect the answer. Don't keep refining a bad direction when starting with corrected facts would be safer.", pidgin: "No paste private information wey you no need. No ask AI make e pretend to be another person so e fit deceive somebody. No trust dates, prices, sources, calculations, or important claims without checking. No put plenty details wey no affect the answer until the main instruction no clear again. No continue to adjust wrong direction when e safer to start with correct facts." } },
      { heading: { en: "22 prompts to keep", pidgin: "22 prompts wey you fit keep" }, body: promptBank },
      { heading: { en: "A ten-minute practice routine", pidgin: "Ten-minute practice routine" }, body: { en: "Minutes 1-2: choose one real, safe task.\nMinutes 3-4: write a first prompt, then check the CORE.\nMinutes 5-6: read the answer and name one gap.\nMinutes 7-8: give one focused follow-up.\nMinutes 9-10: check the facts and save the prompt only if it earned a place in your toolkit.\n\nDo this once or twice a week. Good habits come from using prompts, not collecting them.", pidgin: "Minutes 1-2: choose one real, safe task.\nMinutes 3-4: write first prompt, then check the CORE.\nMinutes 5-6: read the answer and name one gap.\nMinutes 7-8: give one focused follow-up.\nMinutes 9-10: check the facts and save the prompt only if e deserve space for your toolkit.\n\nDo am once or twice every week. Good habits dey come from using prompts, no be to collect plenty." } },
    ],
    examplePrompt: promptBank,
    practiceTask: { en: "Choose one prompt from the bank and replace every bracket with details from a real, safe task. Try it, improve the answer once, then note what you checked before using the result.", pidgin: "Choose one prompt from the bank and replace every bracket with details from real task wey safe. Try am, improve the answer once, then note wetin you check before you use the result." },
    quickCheck: [
      { en: "Did I give AI enough useful context?", pidgin: "I give AI enough useful context?" },
      { en: "Does the tone and format fit the real situation?", pidgin: "The tone and format fit the real situation?" },
      { en: "What did I verify myself?", pidgin: "Wetin I verify by myself?" },
    ],
    keyTakeaway: { en: "Give AI a clear job, use one focused follow-up, then do your own final check before using the answer.", pidgin: "Give AI clear work, use one focused follow-up, then do your own final check before you use the answer." },
  },
};
