import type {
  CourseModule,
  CourseStandaloneLesson,
  Lesson,
  LocalizedText,
  QuickCheckItem,
} from "@/lib/course";

const t = (en: string, pidgin: string): LocalizedText => ({ en, pidgin });

const findLesson = (modules: CourseModule[], slug: string) => {
  const lesson = modules.flatMap((module) => module.lessons).find((item) => item.slug === slug);
  if (!lesson) throw new Error(`Prompting lesson not found: ${slug}`);
  return lesson;
};

const checks = (
  items: Array<[string, string, string, string, string, string]>
): QuickCheckItem[] =>
  items.map(([questionEn, questionPidgin, answerEn, answerPidgin, explanationEn, explanationPidgin]) => ({
    question: t(questionEn, questionPidgin),
    answer: t(answerEn, answerPidgin),
    explanation: t(explanationEn, explanationPidgin),
  }));

const addResult = (
  lesson: Lesson,
  beforeEn: string,
  beforePidgin: string,
  afterEn: string,
  afterPidgin: string,
  explanationEn: string,
  explanationPidgin: string
) => {
  if (!lesson.teaching) return;
  Object.assign(lesson.teaching.comparison, {
    resultLabel: t(
      "One possible response. The exact wording may differ, but notice what changed.",
      "Na one answer wey fit come out. AI fit use different words, but check wetin change."
    ),
    beforeResult: t(beforeEn, beforePidgin),
    afterResult: t(afterEn, afterPidgin),
    resultExplanation: t(explanationEn, explanationPidgin),
  });
};

export function applyPromptingCourseQuality({
  modules,
  startHere,
  playbook,
}: {
  modules: CourseModule[];
  startHere: CourseStandaloneLesson;
  playbook: CourseStandaloneLesson;
}) {
  modules[0].framing = t(
    "You may remember Task, Context, Requirements, and Output. CORE keeps the same thinking, but turns it into a quicker check you can remember before sending a prompt.",
    "You fit remember Task, Context, Requirements, and Output. CORE keep the same idea, but e turn am into quick check wey easy to remember before you send prompt."
  );
  if (modules[2].diagram) {
    modules[2].diagram.steps = [
      t("Read", "Read am"),
      t("Name the gap", "Find wetin miss"),
      t("Refine", "Adjust am"),
      t("Check again", "Check am again"),
    ];
  }
  if (modules[3].diagram) {
    modules[3].diagram.steps = [
      t("Use it", "Use am"),
      t("Improve it", "Make am better"),
      t("Save it", "Save am"),
      t("Reuse with care", "Use am well again"),
    ];
  }

  addResult(
    findLesson(modules, "why-vague-prompts-give-weak-answers"),
    "Our bakery has good products. Buy from us today.",
    "Our bakery get good products. Buy from us today.",
    "Saturday cinnamon-roll boxes are coming fresh from our Abuja kitchen. Pre-order by Friday at 4pm so your box is ready for the weekend. Send us a message to place your order.",
    "Saturday cinnamon-roll boxes dey come fresh from our Abuja kitchen. Pre-order before Friday 4pm so your box go ready for weekend. Send us message to place your order.",
    "The first answer has no useful detail. The second gives the product, location, deadline, and next step, so a customer can act.",
    "The first answer no get useful detail. The second one show the product, location, deadline, and next step, so customer know wetin to do."
  );
  addResult(
    findLesson(modules, "how-to-give-ai-better-context"),
    "We are sorry for the inconvenience. Your order will arrive soon.",
    "We sorry for the inconvenience. Your order go arrive soon.",
    "I'm sorry your delivery is two days late. The courier says it may arrive tomorrow, but that is not confirmed yet. I'll check again and send you an update by 4pm today.",
    "Sorry say your delivery don late by two days. Courier say e fit arrive tomorrow, but dem never confirm am. I go check again and send you update before 4pm today.",
    "Useful context lets the reply acknowledge the real delay, give the known update, and avoid inventing a delivery promise.",
    "Useful context make the reply talk about the real delay, give the update wey dey, and no invent delivery promise."
  );
  addResult(
    findLesson(modules, "how-to-ask-for-the-right-format"),
    "To plan the event, choose a venue, invite people, arrange refreshments, prepare materials, and confirm volunteers. You should also create a budget and timeline.",
    "To plan the event, choose venue, invite people, arrange refreshments, prepare materials, and confirm volunteers. You suppose also create budget and timeline.",
    "TWO WEEKS BEFORE\n[ ] Confirm venue and budget | Owner: [name] | Deadline: [date]\n[ ] Assign volunteer leads | Owner: [name] | Deadline: [date]\n\nONE WEEK BEFORE\n[ ] Confirm attendance | Owner: [name] | Deadline: [date]\n\nEVENT DAY\n[ ] Brief volunteers | Owner: [name] | Deadline: [time]",
    "TWO WEEKS BEFORE\n[ ] Confirm venue and budget | Person in charge: [name] | Deadline: [date]\n[ ] Choose volunteer leads | Person in charge: [name] | Deadline: [date]\n\nONE WEEK BEFORE\n[ ] Confirm who dey come | Person in charge: [name] | Deadline: [date]\n\nEVENT DAY\n[ ] Brief volunteers | Person in charge: [name] | Deadline: [time]",
    "Both answers contain similar ideas, but the staged checklist is easier to assign, scan, and use while planning.",
    "Both answers get similar ideas, but the checklist arrange am by stage, so e easy to assign and use for planning."
  );
  addResult(
    findLesson(modules, "dont-start-over-refine-the-answer"),
    "We acknowledge your complaint. The delivery delay occurred because of a logistics issue. Please be informed that your item will be delivered on Thursday.",
    "We don see your complaint. Delivery delay because of logistics issue. Your item go arrive Thursday.",
    "I'm sorry your order is late. The courier has confirmed delivery for Thursday. Please reply here if you need help before then.",
    "Sorry say your order late. Courier don confirm say delivery na Thursday. Reply here if you need any help before then.",
    "The revision keeps the facts but makes the opening warmer, the explanation shorter, and the next step clearer.",
    "The revision keep the facts, make the opening warmer, shorten the explanation, and show the next step well."
  );
  addResult(
    findLesson(modules, "ask-better-follow-up-questions"),
    "Inflation is a sustained increase in the general price level of goods and services over time, reducing purchasing power.",
    "Inflation na when prices of goods and services dey rise over time, so money no fit buy as much as before.",
    "Imagine a basket of tomatoes in Mile 12 rises from N8,000 to N12,000. A buyer can afford fewer baskets with the same money. A seller receives more naira, but may also pay more for transport and stock. If your income stays the same, what happens to how much you can buy?",
    "Imagine say basket of tomato for Mile 12 move from N8,000 reach N12,000. Buyer no fit buy the same quantity with the same money. Seller collect more naira, but transport and new stock fit cost more too. If your income no change, wetin go happen to how much you fit buy?",
    "The second response turns a definition into a situation the learner can picture, then checks whether the idea landed.",
    "The second answer use situation wey learner fit picture, then e ask one question to check whether the idea clear."
  );
  addResult(
    findLesson(modules, "turn-one-answer-into-many-versions"),
    "EMAIL, WHATSAPP, INSTAGRAM\nJoin our community clean-up this Saturday at 8am at Unity Park. Bring gloves.",
    "EMAIL, WHATSAPP, INSTAGRAM\nJoin our community clean-up this Saturday by 8am for Unity Park. Bring gloves.",
    "EMAIL: Join our community clean-up on Saturday at 8am at Unity Park.\n\nWHATSAPP: Reminder: community clean-up, Saturday, 8am, Unity Park. Bring gloves.\n\nINSTAGRAM: This Saturday, let's make Unity Park cleaner together. Meet us at 8am. Bring gloves. #CommunityCleanUp",
    "EMAIL: Join our community clean-up on Saturday by 8am for Unity Park.\n\nWHATSAPP: Reminder: clean-up na Saturday, 8am, Unity Park. Bring gloves.\n\nINSTAGRAM: This Saturday, make we clean Unity Park together. Meet us by 8am. Bring gloves. #CommunityCleanUp",
    "The improved prompt can produce distinct versions while protecting the approved facts. The weak prompt may simply repeat one message under several labels.",
    "Better prompt fit produce different versions and still protect the approved facts. Weak prompt fit repeat the same message under different labels."
  );
  addResult(
    findLesson(modules, "build-simple-prompt-templates"),
    "Fresh red sandals are available for N18,000. Order before Friday. Send a DM now.",
    "Fresh red sandals dey available for N18,000. Order before Friday. Send DM now.",
    "A: Looking for an easy pair for weekend outings? Our red sandals are N18,000. Orders close Friday. Send a DM to order.\n\nB: Saturday study group starts at 10am in Room 4. Come with your notes and calculator. Reply YES to confirm.",
    "A: You dey find simple sandal for weekend outing? Red sandals na N18,000. Order close Friday. Send DM to order.\n\nB: Saturday study group start 10am for Room 4. Come with your notes and calculator. Reply YES to confirm.",
    "The template keeps the useful structure but changes the audience, facts, tone, and next step. Testing it twice shows whether it is genuinely reusable.",
    "The template keep the useful structure but change audience, facts, tone, and next step. When you test am twice, you go know whether e really reusable."
  );

  const toneLesson = findLesson(modules, "how-to-control-tone");
  toneLesson.content[0].heading = t(
    "Name the feeling, then explain the situation",
    "Talk how you want make e sound, then explain wetin happen"
  );
  toneLesson.content.push({
    heading: t("When tone words are not enough", "When tone words no reach"),
    body: t(
      "A short writing sample can show the rhythm or structure you want more clearly than one tone word. Remove private details first, and ask AI to use the sample as a reference rather than copy it or pretend to be the writer.",
      "Short writing sample fit show the kind rhythm or structure wey you want better pass one tone word. Comot private details first. Tell AI make e use the sample as guide, no copy am and no pretend say na the person write am."
    ),
    examples: [
      {
        label: t("Too open", "E too open"),
        content: t("Write something warm.", "Write something warm."),
      },
      {
        label: t("With a style reference", "With style example"),
        content: t(
          "Use this short message as a style reference. Keep the new message simple, personal, and under 80 words. Do not copy the wording. Sample: [paste a safe sample].",
          "Use this short message as style guide. Make the new message simple, personal, and no pass 80 words. No copy the wording. Sample: [paste sample wey safe]."
        ),
      },
      {
        label: t("Try it", "Try am"),
        content: t(
          "Choose one safe message you wrote. Remove names and private details. Ask AI to write a new message for a different audience using only its tone and structure as a guide.",
          "Choose one message wey you write and wey safe. Comot names and private details. Ask AI to write new message for another audience, using only the tone and structure as guide."
        ),
      },
    ],
  });

  const formatLesson = findLesson(modules, "how-to-ask-for-the-right-format");
  formatLesson.content.push({
    heading: t("Take a large task in stages", "Break big task into stages"),
    body: t(
      "A large task often becomes easier when you handle it in order: plan, draft, review, then produce the final version. You are simply doing one difficult job step by step, so you can correct the direction before too much work is done.",
      "Big task dey easier when you handle am one stage at a time: plan, draft, review, then final version. Na just to do difficult work step by step, so you fit correct direction before plenty work don happen."
    ),
    examples: [
      {
        label: t("Community event", "Community event"),
        content: t(
          "First, turn my notes into a simple event plan. Wait for me to approve it. Then create the announcement. After that, check the announcement against the approved plan before making the final checklist.",
          "First, turn my notes into simple event plan. Wait make I approve am. Then create the announcement. After that, check the announcement with the approved plan before you make final checklist."
        ),
      },
    ],
  });

  const refineLesson = findLesson(modules, "dont-start-over-refine-the-answer");
  refineLesson.content[0].heading = t("Use keep, change, remove", "Choose wetin go remain, change, or comot");
  refineLesson.content.push(
    {
      heading: t("Continue this chat or start a fresh one?", "Continue this chat or start new one?"),
      body: t(
        "Continue when AI needs the earlier response, the task is still the same, or you are refining the current result. Start a fresh chat when the task has changed, old instructions are causing confusion, you want clean context, or old information should no longer guide the answer.",
        "Continue the same chat when AI need the earlier answer, the task still be the same, or you dey adjust the current result. Start new chat when the task don change, old instruction dey cause confusion, you want clean context, or old information no suppose guide the answer again."
      ),
      examples: [
        { label: t("Continue", "Continue"), content: t("Make the customer reply warmer but keep the confirmed delivery date.", "Make the customer reply warmer, but keep the delivery date wey don confirm.") },
        { label: t("Start fresh", "Start new chat"), content: t("You were planning an event. Now you need help studying biology. The earlier event details are not useful.", "You dey plan event before. Now you need help study biology. The old event details no useful here.") },
      ],
    },
    {
      heading: t("Check the answer before rewriting it", "Check the answer before you rewrite am"),
      body: t(
        "Compare the result with the original instructions. Did it complete the task, use the requested tone, follow the length and format, keep important facts, and avoid unsupported additions? Ask for the check first so you can see the gaps clearly.",
        "Compare the result with your first instruction. E do the task? E use the tone, length, and format wey you ask for? E keep the important facts? E add anything wey no get support? Ask for the check first so you fit see the gaps well."
      ),
      examples: [{
        label: t("Reusable checking prompt", "Prompt to check answer"),
        content: t(
          "Check this answer against my original instructions. List what it followed, what it missed, and what should be corrected. Do not rewrite it yet.",
          "Check this answer with my original instructions. List wetin e follow, wetin e miss, and wetin need correction. No rewrite am yet."
        ),
      }],
    }
  );

  const followUpLesson = findLesson(modules, "ask-better-follow-up-questions");
  followUpLesson.title = t("Ask Better Follow-up Questions", "How to Ask Follow-up Wey Go Help");
  if (followUpLesson.teaching) {
    followUpLesson.teaching.comparison.label = t("Go deeper with direction", "Show AI where e suppose go next");
  }
  followUpLesson.content.push(
    {
      heading: t("Let AI ask before it assumes", "Make AI ask before e assume"),
      body: t(
        "For tasks that depend on details AI does not have, add: Before answering, ask me up to three questions if important information is missing. You do not need this for every small request, and you still need to answer carefully.",
        "For task wey depend on details AI no get, add: Before you answer, ask me up to three questions if important information dey miss. You no need am for every small request, and you still need answer the questions carefully."
      ),
      examples: [{
        label: t("Planning example", "Planning example"),
        content: t(
          "Request: Plan a small community event.\n\nUseful AI questions: Who is the event for? What budget and date are fixed? What outcome should the event achieve?",
          "Request: Plan small community event.\n\nUseful questions from AI: Who the event dey for? Which budget and date don fix? Wetin the event suppose achieve?"
        ),
      }],
    },
    {
      heading: t("Move a difficult task one stage at a time", "Move difficult task one stage at a time"),
      body: t(
        "For a CV, you might first identify the strongest experience, then draft one section, review it against the job description, and only then prepare the final version. Stages make it easier to catch a wrong direction early.",
        "For CV, first find the strongest experience, then draft one section, check am with the job description, and after that prepare final version. Stages make am easy to catch wrong direction early."
      ),
      examples: [],
    }
  );

  const repurposeLesson = findLesson(modules, "turn-one-answer-into-many-versions");
  repurposeLesson.content.push({
    heading: t("Check every version against the source", "Check every version with the source"),
    body: t(
      "Before using the versions, check that each one completed its job, fits its channel, keeps the approved facts, and adds nothing unsupported. A polished caption is still wrong if it changes the date or invents a claim.",
      "Before you use the versions, check say every one do im own job, fit the channel, keep the approved facts, and no add anything wey no get support. Fine caption still wrong if e change date or invent claim."
    ),
    examples: [],
  });

  const saveLesson = findLesson(modules, "save-prompts-youll-reuse");
  saveLesson.content = [
    {
      heading: t("Save it or leave it?", "Save am or leave am?"),
      body: t(
        "A prompt earns a place when the task repeats, the result was useful, you know which details will change, and it is safe to keep. Decide before opening another folder or notes app.",
        "Prompt deserve space when the task dey repeat, the result useful, you know the details wey go change, and e safe to keep. Decide first before you open another folder or notes app."
      ),
      examples: [
        { label: t("Save", "Save am"), content: t("A weekly meeting-summary prompt used three times, with names replaced by brackets.", "Weekly meeting-summary prompt wey you don use three times, with names replaced by brackets.") },
        { label: t("Leave", "Leave am"), content: t("A one-off birthday message with private family details.", "One-time birthday message wey get private family details.") },
        { label: t("Improve first", "Improve am first"), content: t("A customer reply prompt that works but still contains last month's delivery date.", "Customer reply prompt wey work but still get last month delivery date.") },
        { label: t("Do not save", "No save am"), content: t("A prompt containing a customer's password, account number, or medical details.", "Prompt wey get customer password, account number, or medical details.") },
      ],
    },
    {
      heading: t("Give useful prompts a proper home", "Give useful prompts proper place"),
      body: t(
        "A notes app, document, or spreadsheet is enough. Save the task name, when to use it, the tested prompt, fields to change, and one check before use. Review the collection sometimes and remove what no longer helps.",
        "Notes app, document, or spreadsheet dey enough. Save task name, when to use am, tested prompt, fields wey go change, and one check before use. Check the collection sometimes and comot wetin no dey help again."
      ),
      examples: [],
    },
  ];

  const templateLesson = findLesson(modules, "build-simple-prompt-templates");
  templateLesson.title = t("Build Simple Prompt Templates", "How to Build Simple Prompt Template");
  if (templateLesson.teaching) {
    templateLesson.teaching.comparison.after = t(
      "Reusable template:\nWrite a [tone] [channel] message for [audience] about [topic]. Include [facts]. Keep it under [length]. End with [next step]. Do not invent details.\n\nTest A: Instagram caption for red sandals, young professionals, N18,000, orders close Friday, friendly, under 70 words, end with Send a DM to order.\n\nTest B: WhatsApp notice for first-year students, Saturday study group, 10am, Room 4, direct, under 60 words, end with Reply YES to confirm.",
      "Template wey you fit use again:\nWrite [tone] [channel] message for [audience] about [topic]. Add [facts]. Make e no pass [length]. End with [next step]. No invent details.\n\nTest A: Instagram caption for red sandals, young professionals, N18,000, order close Friday, friendly, no pass 70 words, end with Send DM to order.\n\nTest B: WhatsApp notice for first-year students, Saturday study group, 10am, Room 4, direct, no pass 60 words, end with Reply YES to confirm."
    );
  }
  templateLesson.content = [
    {
      heading: t("Workshop: turn one prompt into a template", "Workshop: turn one prompt into template"),
      body: t(
        "Start with a prompt that already worked. Keep the task, safety checks, and useful structure fixed. Replace the product, audience, price, date, tone, and next step with clear brackets.",
        "Start with prompt wey don work. Keep the task, safety checks, and useful structure fixed. Replace product, audience, price, date, tone, and next step with clear brackets."
      ),
      examples: [
        { label: t("Completed prompt", "Prompt wey don complete"), content: t("Write a friendly Instagram caption for red sandals for young professionals. Price: N18,000. Orders close Friday. Keep it under 70 words and end with 'Send a DM to order.' Do not invent product claims.", "Write friendly Instagram caption for red sandals for young professionals. Price: N18,000. Order close Friday. Make e no pass 70 words and end with 'Send DM to order.' No invent product claims.") },
        { label: t("Fixed parts", "Parts wey no change"), content: t("Write a caption, use the length limit, end with a next step, and do not invent claims.", "Write caption, follow length limit, end with next step, and no invent claims.") },
        { label: t("Changing parts", "Parts wey dey change"), content: t("Channel, product, audience, price, deadline, tone, and what the reader should do next.", "Channel, product, audience, price, deadline, tone, and wetin reader suppose do next.") },
        { label: t("Template", "Template"), content: t("Write a [tone] [channel] caption for [product] for [audience]. Offer: [price or details]. Deadline: [date]. Keep it under [length]. End with [next step]. Do not invent claims.", "Write [tone] [channel] caption for [product] for [audience]. Offer: [price or details]. Deadline: [date]. Make e no pass [length]. End with [next step]. No invent claims.") },
        { label: t("Filled version A", "Example A after you fill am"), content: t("Instagram, red sandals, young professionals, N18,000, Friday, friendly, send a DM.", "Instagram, red sandals, young professionals, N18,000, Friday, friendly, send DM.") },
        { label: t("Filled version B", "Example B after you fill am"), content: t("WhatsApp, Saturday study group, first-year students, 10am in Room 4, direct, reply YES.", "WhatsApp, Saturday study group, first-year students, 10am for Room 4, direct, reply YES.") },
      ],
    },
    {
      heading: t("Test it twice", "Test am twice"),
      body: t(
        "Version A should produce a short product caption. Version B should produce a practical study-group notice. If old product details appear in B, the template is not clean yet. Turn one prompt you already use into a template, fill it for two different situations, and fix any part that still belongs to the first example.",
        "Version A suppose produce short product caption. Version B suppose produce practical study-group notice. If old product details enter B, the template never clean. Turn one prompt wey you dey use into template, fill am for two different situations, then fix any part wey still belong to the first example."
      ),
      examples: [],
    },
  ];

  const toolkitLesson = findLesson(modules, "create-your-personal-prompt-toolkit");
  toolkitLesson.title = t("Create Your Personal Prompt Toolkit", "Build Your Own Prompt Toolkit");
  toolkitLesson.content = [
    {
      heading: t("Choose five tasks from your real life", "Choose five tasks wey you dey do often"),
      body: t(
        "Look across messages, work or school, planning, content, learning, business, and personal organisation. Choose five tasks you genuinely repeat, not five prompts that merely look impressive.",
        "Look messages, work or school, planning, content, learning, business, and personal organisation. Choose five tasks wey you really dey repeat, no be five prompts wey just look impressive."
      ),
      examples: [
        { label: t("Entry 1", "Entry 1"), content: t("Customer delay reply", "Reply customer about delay") },
        { label: t("Entry 2", "Entry 2"), content: t("Weekly study plan", "Weekly study plan") },
        { label: t("Entry 3", "Entry 3"), content: t("Meeting notes summary", "Meeting notes summary") },
        { label: t("Entry 4", "Entry 4"), content: t("Community announcement", "Community announcement") },
        { label: t("Entry 5", "Entry 5"), content: t("Monthly content plan", "Monthly content plan") },
      ],
    },
    {
      heading: t("Build every entry the same useful way", "Give every entry the useful details"),
      body: t(
        "For each entry, record its name, when to use it, the prompt or template, fields to change, and what to check before using the answer. Build all five, then review the set: Is each task repeated? Is every template safe? Can you find and fill it quickly? Have you tested it with real work?",
        "For every entry, write the name, when to use am, the prompt or template, fields wey go change, and wetin to check before you use the answer. Build all five, then review dem: The task dey repeat? Every template safe? You fit find and fill am quickly? You don test am with real work?"
      ),
      examples: [],
    },
  ];
  toolkitLesson.practiceTask = t(
    "Create five toolkit entries now. Use this structure for each: Name, when to use it, prompt or template, fields to change, and what to check. Test at least one entry with a real task today.",
    "Create five toolkit entries now. For every one, write: Name, when to use am, prompt or template, fields wey go change, and wetin to check. Test at least one with real task today."
  );

  const quickCheckBySlug: Record<string, QuickCheckItem[]> = {
    "what-a-prompt-really-is": checks([["What makes a prompt useful beyond naming a topic?", "Apart from the topic, wetin else make prompt useful?", "It says what AI should do and gives the details that affect the answer.", "E talk wetin AI suppose do and give the details wey fit change the answer.", "A topic alone leaves the task open. A clear action gives the conversation a direction.", "Topic alone no show the work. Clear action tell AI where to start."]]),
    "why-vague-prompts-give-weak-answers": checks([["Why is 'Write a post for my bakery' likely to produce a weak answer?", "Why 'Write post for my bakery' fit produce weak answer?", "It leaves the audience, offer, purpose, and next step unclear.", "E no show audience, offer, purpose, or next step.", "AI must guess the missing details, so the result may sound generic or be unusable.", "AI go guess the missing details, so the result fit sound generic or no useful."]]),
    "the-simple-prompt-formula": checks([["Which CORE part tells AI what must not change or be invented?", "Which CORE part tell AI wetin no suppose change or invent?", "Rules.", "Na Rules.", "Rules protect important facts, limits, tone, requirements, and boundaries. CORE is only a check, so you can still write the prompt naturally.", "Rules dey protect important facts, limits, tone, requirements, and boundaries. CORE na check, so you fit still write the prompt naturally."]]),
    "how-to-give-ai-better-context": checks([["Should you paste every detail you know?", "You suppose paste every detail wey you know?", "No. Include only details that affect the answer, and remove private information you do not need.", "No. Add only details wey affect the answer, and comot private information wey no need.", "Irrelevant detail can bury the task, while sensitive detail creates avoidable risk.", "Details wey no matter fit hide the task, and private details fit create problem wey no need."]]),
    "how-to-control-tone": checks([["Why can a safe writing sample work better than saying 'sound warm'?", "Why safe writing sample fit work better pass 'make e sound warm'?", "It shows the rhythm or structure you want, while the instruction explains what AI may borrow.", "E show rhythm or structure wey you want, while the instruction explain wetin AI fit follow.", "Tone words can mean different things. A short reference makes the preference more concrete without deceptive imitation.", "Tone words fit mean different things. Short example make the style clearer without pretending to be another person."]]),
    "how-to-ask-for-the-right-format": checks([["Why might a staged checklist be better than a paragraph for an event plan?", "Why checklist wey get stages fit better pass paragraph for event plan?", "It makes tasks easier to scan, assign, and complete in order.", "E make tasks easy to scan, assign, and complete with order.", "Format should match what you will do with the answer next.", "Format suppose match how you wan use the answer next."]]),
    "dont-start-over-refine-the-answer": checks([["When should you keep working in the same chat?", "When you suppose continue for the same chat?", "When the task is still the same and AI needs the earlier answer or instructions.", "When the task still be the same and AI need the earlier answer or instructions.", "The existing context helps a focused revision. Start fresh when that context no longer belongs to the task.", "The old context dey help focused revision. Start fresh when the context no concern the task again."]]),
    "ask-better-follow-up-questions": checks([["When is it useful to ask AI to clarify before answering?", "When e useful make AI ask questions before e answer?", "When important missing details could change the result.", "When important details wey miss fit change the result.", "Clarifying questions reduce assumptions on planning or other context-dependent tasks, but are unnecessary for every small request.", "Clarifying questions reduce guesswork for planning or task wey need context, but no be every small request need am."]]),
    "turn-one-answer-into-many-versions": checks([["What should change when one announcement becomes an email and a WhatsApp reminder?", "Wetin suppose change when one announcement turn email and WhatsApp reminder?", "The opening, length, structure, and next step may change. Approved facts should not.", "Opening, length, structure, and next step fit change. Approved facts no suppose change.", "Each channel has a different job, but all versions need one checked source of truth.", "Every channel get different work, but all versions need one checked source wey correct."]]),
    "save-prompts-youll-reuse": checks([["Which prompt is worth saving?", "Which kind prompt worth saving?", "A tested prompt for a repeated task, with private and one-off details removed.", "Prompt wey you don test for task wey dey repeat, after you comot private and one-time details.", "Saving fewer proven prompts creates a safer, more searchable collection.", "Small collection of prompts wey don work dey safer and easier to search."]]),
    "build-simple-prompt-templates": checks([["How do you know a prompt has become a reusable template?", "How you go know say prompt don become reusable template?", "The changing details are clear placeholders, the useful fixed instructions remain, and it works for two different situations.", "Changing details dey as clear placeholders, useful fixed instructions remain, and e work for two different situations.", "One successful example is not enough. A second test exposes details that were accidentally left fixed.", "One example no enough. Second test go expose details wey remain fixed by mistake."]]),
    "create-your-personal-prompt-toolkit": checks([["What belongs in a useful first toolkit?", "Wetin useful first toolkit suppose get?", "Five tested entries for tasks you genuinely repeat, each with fields to change and a check before use.", "Five entries wey you don test for tasks wey you dey repeat, with fields to change and wetin to check before use.", "A small toolkit built around real work is easier to trust and maintain than a large downloaded list.", "Small toolkit wey follow your real work easy to trust and maintain pass big list wey you download."]]),
  };
  for (const module of modules) {
    for (const lesson of module.lessons) lesson.quickCheck = quickCheckBySlug[lesson.slug];
  }

  startHere.lesson.quickCheck = checks([["What should you bring into this course?", "Wetin you suppose bring enter this course?", "One real, safe task you can practise with and the willingness to check AI's answer.", "One real task wey safe to practise with, plus readiness to check AI answer.", "The course works best when each idea is tested on something you actually need, without sharing sensitive information.", "The course go work better when you test every idea with something wey you need, without sharing private information."]]);

  const playbookLesson = playbook.lesson;
  playbookLesson.content[4] = {
    heading: t("Know what a better prompt cannot fix", "Know wetin better prompt no fit fix"),
    body: t(
      "A clearer prompt cannot give AI information it does not have, open your private account or document, repair poor notes, or guarantee that every fact is correct. It also cannot replace a doctor, lawyer, financial adviser, or another qualified person when the decision is serious.\n\nTry this decision: You ask AI for the current price of a bus ticket, but the tool cannot check today's price. Should you keep rewriting the prompt? No. Check the transport company's official page or ask at the terminal. The problem is missing current information, not the way you asked.\n\nThink of one recent AI answer you could not trust. Was the prompt unclear, or did you need a better source, a tool with access, or help from a qualified person?",
      "Clearer prompt no fit give AI information wey e no get, open your private account or document, repair poor notes, or guarantee say every fact correct. E no fit replace doctor, lawyer, financial adviser, or another person wey qualify when the decision serious.\n\nTry this one: You ask AI the current price of bus ticket, but the tool no fit check today's price. You suppose continue to rewrite the prompt? No. Check the transport company official page or ask for the terminal. The problem no be how you ask. Na current information dey miss.\n\nThink about one AI answer wey you no fit trust recently. The prompt no clear, or you need better source, tool wey get access, or help from person wey qualify?"
    ),
    examples: [],
  };

  const bank = playbookLesson.examplePrompt;
  const bankEn = typeof bank === "string" ? bank : bank.en;
  const bankPidgin = typeof bank === "string" ? bank : bank.pidgin;
  const enPrompts = bankEn.split("\n").map((line) => line.replace(/^\d+\.\s*/, ""));
  const pidginPrompts = bankPidgin.split("\n").map((line) => line.replace(/^\d+\.\s*/, ""));
  playbookLesson.examplePrompt = {
    en: enPrompts.map((prompt, index) => `${index + 1}. ${prompt}`).join("\n"),
    pidgin: pidginPrompts.map((prompt, index) => `${index + 1}. ${prompt}`).join("\n"),
  };
  const group = (title: LocalizedText, indexes: number[]) => ({
    title,
    prompts: indexes.map((index) => ({
      label: t(`Prompt ${index}`, `Prompt ${index}`),
      prompt: t(enPrompts[index - 1], pidginPrompts[index - 1]),
    })),
  });
  playbookLesson.promptGroups = [
    group(t("Writing and messages", "Messages and other writing"), [1, 2, 3, 4]),
    group(t("Work and productivity", "Work wey AI fit make easier"), [5, 6, 7, 8]),
    group(t("Learning and study", "Learning and study"), [9, 10, 11]),
    group(t("Business and customers", "Business and customer reply"), [12, 13, 14]),
    group(t("Planning and organisation", "Planning and how to arrange work"), [15, 16, 17, 18]),
    group(t("Checking and improving answers", "How to check and improve answer"), [19, 20, 21, 22]),
  ];

  playbookLesson.capstone = {
    title: t("From Rough Request to Final Result", "From Rough Request Reach Answer Wey Ready"),
    intro: t(
      "Follow one small community event from rough notes to two usable results. These are teaching examples, so another AI tool may use different wording.",
      "Follow one small community event from rough notes reach two results wey person fit use. Na teaching examples, so another AI tool fit use different wording."
    ),
    steps: [
      { label: t("1. Rough request", "1. First rough request"), content: t("Write a WhatsApp announcement and checklist for our free community event.", "Write WhatsApp announcement and checklist for our free community event.") },
      { label: t("2. What is missing", "2. Wetin dey miss"), content: t("The audience, purpose, date, time, venue, what to bring, organiser, and response deadline are unclear.", "Audience, purpose, date, time, venue, wetin to bring, organiser, and response deadline no clear.") },
      { label: t("3. Clarification questions", "3. Questions wey AI suppose ask"), content: t("Who is invited? What are the confirmed date, time, and venue? What should people bring or do before attending?", "Who una invite? Which date, time, and venue don confirm? Wetin people suppose bring or do before dem come?") },
      { label: t("4. Learner's source notes", "4. Notes from the learner"), content: t("Free CV clinic for final-year students and recent graduates. Saturday 18 October, 10am to 1pm, Unity Hall, Surulere. Bring a phone or laptop and a current CV. Twelve volunteer reviewers. Reply YES by Thursday. Contact: Ada, 0800 000 0000.", "Free CV clinic for final-year students and recent graduates. Saturday 18 October, 10am reach 1pm, Unity Hall, Surulere. Bring phone or laptop and current CV. Twelve volunteer reviewers. Reply YES before Thursday. Contact: Ada, 0800 000 0000.") },
      { label: t("5. Improved first prompt", "5. Better first prompt"), content: t("Using only the confirmed notes below, write a warm, clear WhatsApp announcement for final-year students and recent graduates. Keep it under 130 words. Include the purpose, date, time, venue, what to bring, reply deadline, and contact. Do not invent benefits or details. Then create a preparation checklist for the organiser.", "Use only the confirmed notes below. Write warm, clear WhatsApp announcement for final-year students and recent graduates. Make e no pass 130 words. Add purpose, date, time, venue, wetin to bring, reply deadline, and contact. No invent benefit or detail. Then create preparation checklist for organiser.") },
      { label: t("6. One possible first response", "6. One first answer wey fit come out"), content: t("Free CV Clinic this Saturday at Unity Hall, Surulere, from 10am to 1pm. Final-year students and recent graduates can get expert CV reviews. Bring your phone or laptop. Reply YES by Thursday. Contact Ada on 0800 000 0000.\n\nChecklist: confirm hall, brief volunteers, print signs, set up registration.", "Free CV Clinic na this Saturday for Unity Hall, Surulere, from 10am reach 1pm. Final-year students and recent graduates fit get expert CV review. Bring phone or laptop. Reply YES before Thursday. Contact Ada for 0800 000 0000.\n\nChecklist: confirm hall, brief volunteers, print signs, set registration.") },
      { label: t("7. Instruction check", "7. Check whether e follow instruction"), content: t("It included most details and stayed short. It missed the full date and current CV. It added 'expert', which the notes did not support. The checklist also added signs and registration setup. Those may be useful suggestions, but they were not confirmed facts.", "E include most details and e short. E miss full date and current CV. E add 'expert', but that one no dey inside the notes. The checklist still add signs and registration setup. Those ideas fit help, but dem no be facts wey don confirm.") },
      { label: t("8. Focused follow-up", "8. Follow-up to fix am"), content: t("Keep the structure. Add Saturday 18 October and tell people to bring a current CV. Remove 'expert' because it is not in the source notes. For the checklist, use tasks supported by the notes and label any extra planning idea as a suggestion.", "Keep the structure. Add Saturday 18 October and tell people make dem bring current CV. Comot 'expert' because e no dey inside the notes. For the checklist, use tasks wey the notes support and mark any extra planning idea as suggestion.") },
      { label: t("9. Revised response", "9. Answer after correction"), content: t("Free CV Clinic for final-year students and recent graduates. Join us on Saturday 18 October, 10am to 1pm, at Unity Hall, Surulere. Bring your current CV and a phone or laptop. Reply YES by Thursday to attend. Questions? Contact Ada on 0800 000 0000.", "Free CV Clinic for final-year students and recent graduates. Join us Saturday 18 October, 10am reach 1pm, for Unity Hall, Surulere. Bring your current CV and phone or laptop. Reply YES before Thursday if you wan attend. For questions, contact Ada for 0800 000 0000.") },
      { label: t("10. Fact and privacy check", "10. Check facts and private details"), content: t("The date, time, venue, audience, items, deadline, and contact match the notes. The organiser confirms the phone number is meant to be public before posting.", "Date, time, venue, audience, items, deadline, and contact match the notes. Organiser confirm say the phone number fit enter public post before dem send am.") },
      { label: t("11. Final WhatsApp announcement", "11. Final WhatsApp announcement"), content: t("FREE CV CLINIC\n\nFinal-year student or recent graduate? Join us on Saturday 18 October, from 10am to 1pm, at Unity Hall, Surulere. Bring your current CV and a phone or laptop.\n\nThe session is free. Reply YES by Thursday to attend. For questions, contact Ada on 0800 000 0000.", "FREE CV CLINIC\n\nYou be final-year student or recent graduate? Join us Saturday 18 October, from 10am reach 1pm, for Unity Hall, Surulere. Bring your current CV and phone or laptop.\n\nThe session free. Reply YES before Thursday if you wan attend. For questions, contact Ada for 0800 000 0000.") },
      { label: t("12. Preparation checklist", "12. Turn am into checklist"), content: t("CONFIRMED TASKS\n[ ] Record YES replies by Thursday.\n[ ] Confirm the 12 volunteer reviewers.\n[ ] Keep the venue, time, contact, and attendee requirements together.\n[ ] Welcome attendees and match each person with a reviewer.\n\nPLANNING SUGGESTION TO CONFIRM\n[ ] Decide what time organisers should arrive at Unity Hall.", "TASKS WEY DON CONFIRM\n[ ] Record YES replies before Thursday.\n[ ] Confirm the 12 volunteer reviewers.\n[ ] Keep venue, time, contact, and wetin attendees suppose bring together.\n[ ] Welcome people and match each person with reviewer.\n\nPLANNING IDEA WEY ORGANISER SUPPOSE CONFIRM\n[ ] Decide the time wey organisers suppose reach Unity Hall.") },
    ],
    learnerTitle: t("Your turn", "Now try your own"),
    learnerTask: t(
      "Choose one real, safe task from your life and take it through the same steps. Keep the task small enough to finish, and check the final result before you use it.",
      "Choose one real task from your life wey safe and follow the same steps. Make the task small enough to finish, then check the final result before you use am."
    ),
    worksheet: [
      t("CORE: My objective", "CORE: Wetin I want make AI do"), t("CORE: Audience and situation", "CORE: Who the answer dey for and wetin dey happen"), t("CORE: Useful context or source notes", "CORE: Useful details or notes wey AI suppose use"),
      t("Missing information", "Information wey miss"), t("My clarification questions", "Questions wey I need ask first"), t("My source notes", "Notes wey AI suppose use"),
      t("CORE: Tone", "CORE: How the answer suppose sound"), t("CORE: Other rules", "CORE: Other rules wey the answer suppose follow"),
      t("CORE: Expected result", "CORE: The kind answer wey I need"), t("First result", "First answer"), t("What needs fixing", "Wetin need fixing"),
      t("My corrective follow-up", "Follow-up wey go fix am"), t("Final result", "Final answer"), t("My second useful format", "Another format wey go help"),
      t("What I checked before using it", "Wetin I check before I use am"),
    ],
  };
  playbookLesson.quickCheck = checks([
    ["What should you do when a response sounds polished but adds an unsupported fact?", "Wetin you suppose do if answer sound fine but add fact wey no get support?", "Do not use the new fact. Compare it with the source, remove or correct it, and verify important claims yourself.", "No use the new fact. Compare am with the source, comot or correct am, then verify important claims by yourself.", "Better wording cannot make an invented fact reliable.", "Better wording no fit make invented fact reliable."],
    ["When should you stop refining and use another source, tool, or person?", "When you suppose stop to refine and use another source, tool, or person?", "When AI lacks needed access or current information, the source is poor, the task needs professional judgement, or the tool cannot do the job.", "When AI no get needed access or current information, source poor, task need professional judgement, or the tool no fit do the work.", "Prompting improves instructions. It does not remove every limitation of the tool or the information available.", "Prompting improve instruction. E no remove every limit of the tool or information wey dey available."],
  ]);
}
