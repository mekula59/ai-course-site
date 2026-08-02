import type { Course, CourseModule, CourseStandaloneLesson } from "@/lib/course";

export const promptingBasicsStartHere: CourseStandaloneLesson = {
  slug: "start-here",
  eyebrow: { en: "Prompting Basics", pidgin: "Prompting Basics" },
  lesson: {
    slug: "start-here",
    title: { en: "Start Here", pidgin: "Start From Here" },
    intro: {
      en: "This course will help you move from typing a quick request to giving AI a clear, useful brief. You will practise with everyday tasks and improve your prompts one step at a time.",
      pidgin:
        "This course go help you move from quick request reach clear brief wey AI fit work with. You go practise with everyday tasks and improve your prompts one step at a time.",
    },
    content: [
      {
        heading: {
          en: "What this course will help you do",
          pidgin: "Wetin this course go help you do",
        },
        body: {
          en: "You already know that AI can help with writing, planning, explaining, and organising ideas. This follow-up course is about communicating with those tools more deliberately.\n\nYou will learn how to name the task, give useful context, ask for the kind of answer you need, and improve an answer that is close but not quite right. These habits work in ChatGPT, Claude, and Gemini.",
          pidgin:
            "You already know say AI fit help with writing, planning, explanation, and arranging ideas. This follow-up course na to help you communicate with those tools with more intention.\n\nYou go learn how to name the task, give useful context, ask for the kind answer wey you need, and improve answer wey close but never balance. These habits dey work for ChatGPT, Claude, and Gemini.",
        },
      },
      {
        heading: {
          en: "A practical next step",
          pidgin: "The next practical step",
        },
        body: {
          en: "This course is for anyone who has tried an AI chat tool but still gets answers that feel too broad, too formal, or disconnected from the real task.",
          pidgin:
            "This course dey for anybody wey don try AI chat tool but still dey get answers wey too broad, too formal, or no connect with the real task.",
        },
        examples: [
          {
            label: { en: "You can already", pidgin: "You already fit" },
            content: {
              en: "Open ChatGPT, Claude, or Gemini, type a request, and read the answer.",
              pidgin:
                "Open ChatGPT, Claude, or Gemini, type request, and read the answer.",
            },
          },
          {
            label: { en: "You want to", pidgin: "You wan learn how to" },
            content: {
              en: "Ask with more clarity, guide the response, and reuse prompts that work.",
              pidgin:
                "Ask with more clarity, guide the answer, and use good prompts again.",
            },
          },
          {
            label: { en: "You do not need", pidgin: "You no need" },
            content: {
              en: "A technical background, a paid AI plan, or special prompt vocabulary.",
              pidgin:
                "Tech background, paid AI plan, or any special prompt grammar.",
            },
          },
        ],
      },
      {
        heading: {
          en: "How to use each lesson",
          pidgin: "How to use each lesson",
        },
        body: {
          en: "Read the explanation first, then pause at the examples. Before looking at the improved prompt, notice what you would change yourself.\n\nUse the copyable prompt with a real task. Replace the words in brackets, read the answer carefully, and complete the Try it now exercise. The quick check helps you notice the habit behind the example. It is not an exam.",
          pidgin:
            "Read the explanation first, then pause when you reach the examples. Before you look the improved prompt, think about wetin you go change by yourself.\n\nUse the copyable prompt with real task. Replace the words inside brackets, read the answer well, and do the Try am now exercise. The quick check dey help you notice the habit behind the example. No be exam.",
        },
        examples: [
          {
            label: { en: "Read", pidgin: "Read" },
            content: {
              en: "Understand one prompting idea.",
              pidgin: "Understand one prompting idea.",
            },
          },
          {
            label: { en: "Notice", pidgin: "Notice" },
            content: {
              en: "Compare what changed between prompts.",
              pidgin: "Compare wetin change between the prompts.",
            },
          },
          {
            label: { en: "Try", pidgin: "Try" },
            content: {
              en: "Use the prompt for one real task.",
              pidgin: "Use the prompt for one real task.",
            },
          },
          {
            label: { en: "Adjust", pidgin: "Adjust" },
            content: {
              en: "Give a follow-up when the answer needs work.",
              pidgin: "Ask follow-up when the answer never balance.",
            },
          },
        ],
      },
      {
        heading: {
          en: "Use the tool you already have",
          pidgin: "Use the tool wey you already get",
        },
        body: {
          en: "You can use ChatGPT, Claude, or Gemini for the exercises. Their answers will not be identical, and that is fine. The skill you are building is how you explain the task and respond to what comes back.\n\nA free version is enough for this course. If a feature such as image upload is unavailable on your account, use a text example instead and keep going.",
          pidgin:
            "You fit use ChatGPT, Claude, or Gemini for the exercises. Their answers no go be exactly the same, and no problem with that. The skill wey you dey build na how you explain the task and how you respond to the answer.\n\nFree version dey enough for this course. If feature like image upload no dey for your account, use text example instead and continue.",
        },
      },
      {
        heading: {
          en: "There is no perfect prompt",
          pidgin: "Perfect prompt no dey",
        },
        body: {
          en: "A useful prompt is not a spell and it is not a performance. It is a clear starting point. The best wording depends on the task, the information you have, and what you need back.\n\nPrompting is mostly clear thinking, useful context, and iteration. Iteration simply means reading the answer and asking for a change when something is missing. You are allowed to begin simply and improve the prompt after the first response.",
          pidgin:
            "Useful prompt no be spell and no be performance. Na clear place to start. The best wording depend on the task, the information wey you get, and the kind answer wey you need.\n\nPrompting na mostly clear thinking, useful context, and trying again with better direction. Read the answer, notice wetin miss, then ask for change. You fit start simple and improve the prompt after the first response.",
        },
      },
      {
        heading: {
          en: "What you should know before you begin",
          pidgin: "Wetin you suppose know before you start",
        },
        body: {
          en: "This course follows AI for Everyone. You should already know how to open an AI chat, send a message, and check an answer before using it. You should also keep private or sensitive information out of your prompts.\n\nYou do not need to remember every lesson from the beginner course. If you can use an AI chat tool for a small task and apply your own judgement to the answer, you are ready.",
          pidgin:
            "This course dey follow AI for Everyone. You suppose already know how to open AI chat, send message, and check answer before you use am. You still suppose keep private or sensitive information outside your prompts.\n\nYou no need remember every lesson from the beginner course. If you fit use AI chat tool for small task and use your own sense check the answer, you ready.",
        },
      },
      {
        heading: {
          en: "A short readiness check",
          pidgin: "Small readiness check",
        },
        body: {
          en: "Choose one small task you can safely practise with today. It might be a WhatsApp announcement, a topic you want explained, a simple plan, or a paragraph you want to improve.\n\nOpen your preferred AI tool and keep that task nearby. You will use it again during Module 1.",
          pidgin:
            "Choose one small task wey you fit safely practise with today. E fit be WhatsApp announcement, topic wey you want understand, simple plan, or paragraph wey you want improve.\n\nOpen the AI tool wey you prefer and keep that task near you. You go use am again for Module 1.",
        },
      },
    ],
    keyTakeaway: {
      en: "Good prompting begins with clear thinking. Give AI enough useful context to start, then improve the answer through normal follow-up questions.",
      pidgin:
        "Better prompting dey start with clear thinking. Give AI enough useful context, then improve the answer with normal follow-up questions.",
    },
    examplePrompt: {
      en: "I am practising how to write clearer prompts.\n\nMy task is: [describe one small real task].\n\nBefore you answer the task, ask me up to three short questions about any important context you need.",
      pidgin:
        "I dey practise how to write clearer prompts.\n\nMy task na: [describe one small real task].\n\nBefore you answer the task, ask me up to three short questions about any important context wey you need.",
    },
    practiceTask: {
      en: "Fill in the prompt above with one safe, real task. Answer the questions the AI asks, then read its final response. Write down one detail that helped it understand your task better.",
      pidgin:
        "Fill the prompt above with one safe, real task. Answer the questions wey AI ask, then read the final response. Write down one detail wey help am understand your task better.",
    },
    quickCheck: [
      {
        en: "Can I open and use an AI chat tool?",
        pidgin: "I fit open and use AI chat tool?",
      },
      {
        en: "Do I have one safe task to practise with?",
        pidgin: "I get one safe task wey I fit practise with?",
      },
      {
        en: "Am I ready to read, try, and adjust instead of searching for a perfect prompt?",
        pidgin:
          "I ready to read, try, and adjust instead of finding perfect prompt?",
      },
    ],
  },
};

export const promptingFoundationsModule: CourseModule = {
  slug: "prompting-foundations",
  number: "01",
  title: {
    en: "Prompting Foundations",
    pidgin: "How Better Prompt Take Start",
  },
  description: {
    en: "Understand what counts as a prompt, why vague requests often produce weak answers, and how to shape a clear prompt without sounding technical.",
    pidgin:
      "Understand wetin count as prompt, why vague request dey often give weak answer, and how to shape clear prompt without tech grammar.",
  },
  diagram: {
    steps: [
      { en: "Name the task", pidgin: "Name the task" },
      { en: "Add useful context", pidgin: "Add useful context" },
      { en: "Guide the answer", pidgin: "Guide the answer" },
      { en: "Read and adjust", pidgin: "Read and adjust" },
    ],
  },
  lessons: [
    {
      slug: "what-a-prompt-really-is",
      title: {
        en: "What a Prompt Really Is",
        pidgin: "Wetin Prompt Really Be",
      },
      intro: {
        en: "A prompt is everything you give an AI to work with. Once you see it that way, prompting becomes less about clever wording and more about sharing the right material.",
        pidgin:
          "Prompt na everything wey you give AI make e work with. Once you see am like that, prompting no go look like clever grammar. Na to share the right material.",
      },
      content: [
        {
          heading: {
            en: "More than a question",
            pidgin: "Prompt pass ordinary question",
          },
          body: {
            en: "A prompt can be an instruction, a question, information, or material you want the AI to work on. It can be one sentence, several paragraphs, a list of facts, or a conversation that continues over several messages.\n\nIf you paste a rough WhatsApp announcement and ask for a clearer version, the announcement and your instruction are both part of the prompt. If you upload an image and ask what could be improved, the image and the question work together as the prompt.",
            pidgin:
              "Prompt fit be instruction, question, information, or material wey you want make AI work on. E fit be one sentence, plenty paragraphs, list of facts, or conversation wey continue for different messages.\n\nIf you paste rough WhatsApp announcement and ask for clearer version, the announcement and your instruction join as the prompt. If you upload image and ask wetin fit improve, the image and the question dey work together as the prompt.",
          },
          examples: [
            {
              label: { en: "Instruction", pidgin: "Instruction" },
              content: {
                en: "Turn these notes into a short WhatsApp announcement.",
                pidgin:
                  "Turn these notes into short WhatsApp announcement.",
              },
            },
            {
              label: { en: "Question", pidgin: "Question" },
              content: {
                en: "Why do prices rise when inflation is high? Explain it simply.",
                pidgin:
                  "Why prices dey rise when inflation high? Explain am simply.",
              },
            },
            {
              label: { en: "Material", pidgin: "Material" },
              content: {
                en: "Paste a CV paragraph, class note, email draft, table, or image, then say what you want done with it.",
                pidgin:
                  "Paste CV paragraph, class note, email draft, table, or image, then talk wetin you want make AI do with am.",
              },
            },
          ],
        },
        {
          heading: {
            en: "AI works from the context it has",
            pidgin: "AI dey work with the context wey e get",
          },
          body: {
            en: "AI does not automatically know who the message is for, what happened before this moment, which details matter, or what a useful answer looks like to you. It can only respond from the conversation, files, images, and instructions available in that chat.\n\nThis does not mean you should explain your whole life. Give the details that change the answer. For a meal plan, allergies and budget matter. The colour of your kitchen probably does not.",
            pidgin:
              "AI no automatically know who the message dey for, wetin happen before now, which details matter, or the kind answer wey go useful for you. E fit only respond from the conversation, files, images, and instructions wey dey that chat.\n\nThis one no mean say make you explain your whole life. Give details wey go change the answer. For meal plan, allergy and budget matter. The colour of your kitchen no really matter.",
          },
        },
        {
          heading: {
            en: "You do not need to sound technical",
            pidgin: "You no need sound technical",
          },
          body: {
            en: "Write naturally. Clear everyday language is enough. You can say what you are trying to do, who it is for, what information must be included, and how you want the answer presented.\n\nThe goal is not to impress the tool. The goal is to reduce avoidable guessing.",
            pidgin:
              "Write naturally. Clear everyday language dey enough. You fit talk wetin you wan do, who e dey for, which information must enter, and how you want the answer.\n\nThe goal no be to impress the tool. Na to reduce unnecessary guessing.",
          },
        },
        {
          heading: {
            en: "Weak and improved prompts",
            pidgin: "Weak prompt and improved prompt",
          },
          body: {
            en: "The improved versions are not better because they are longer. They are better because they tell AI what kind of help is needed and add context that changes the answer.",
            pidgin:
              "The improved versions no better because dem long. Dem better because dem tell AI the kind help wey you need and add context wey change the answer.",
          },
          examples: [
            {
              label: {
                en: "WhatsApp announcement",
                pidgin: "WhatsApp announcement",
              },
              content: {
                en: "Weak: Write an announcement.\n\nImproved: Turn these notes into a warm WhatsApp announcement for our estate group. Keep it under 100 words and put the date, time, and venue on separate lines. Notes: [paste notes].",
                pidgin:
                  "Weak: Write announcement.\n\nImproved: Turn these notes into warm WhatsApp announcement for our estate group. Make e no pass 100 words and put date, time, and venue for separate lines. Notes: [paste notes].",
              },
            },
            {
              label: { en: "Difficult topic", pidgin: "Difficult topic" },
              content: {
                en: "Weak: Explain photosynthesis.\n\nImproved: Explain photosynthesis to a JSS2 student using simple language, one everyday example, and five short bullet points.",
                pidgin:
                  "Weak: Explain photosynthesis.\n\nImproved: Explain photosynthesis to JSS2 student with simple language, one everyday example, and five short bullet points.",
              },
            },
            {
              label: { en: "Meal planning", pidgin: "Meal planning" },
              content: {
                en: "Weak: Plan my meals.\n\nImproved: Plan five simple dinners for two adults in Lagos. Budget is N25,000. No oven, no seafood. Reuse ingredients so there is less waste.",
                pidgin:
                  "Weak: Plan my meals.\n\nImproved: Plan five simple dinners for two adults for Lagos. Budget na N25,000. No oven, no seafood. Reuse ingredients make waste reduce.",
              },
            },
            {
              label: { en: "CV paragraph", pidgin: "CV paragraph" },
              content: {
                en: "Weak: Improve this CV.\n\nImproved: Rewrite this CV paragraph for an entry-level customer support role. Keep every fact accurate, use clear action words, and do not invent numbers: [paste paragraph].",
                pidgin:
                  "Weak: Improve this CV.\n\nImproved: Rewrite this CV paragraph for entry-level customer support role. Keep every fact correct, use clear action words, and no invent numbers: [paste paragraph].",
              },
            },
          ],
        },
        {
          heading: {
            en: "Follow-ups are part of the prompt",
            pidgin: "Follow-up still be part of the prompt",
          },
          body: {
            en: "A prompt does not end after your first message. If the answer is useful but too formal, you can say: Make it warmer and use shorter sentences. If one detail is wrong, correct it and ask for a revision.\n\nEach follow-up adds context to the same conversation. You are guiding the work, not admitting that your first prompt failed.",
            pidgin:
              "Prompt no end after your first message. If the answer useful but e too formal, you fit say: Make am warmer and use shorter sentences. If one detail wrong, correct am and ask for revision.\n\nEvery follow-up dey add context to the same conversation. You dey guide the work. E no mean say your first prompt fail.",
          },
        },
      ],
      keyTakeaway: {
        en: "A prompt is the full set of instructions, questions, context, examples, and material you give AI. Use natural language and include what the tool needs for the task.",
        pidgin:
          "Prompt na all the instructions, questions, context, examples, and material wey you give AI. Use natural language and include wetin the tool need for the task.",
      },
      examplePrompt: {
        en: "Help me improve this real task.\n\nWhat I want done: [write, explain, plan, review, or improve something].\n\nMaterial to work with: [paste your notes, paragraph, list, or rough draft].\n\nWho it is for: [person or group].\n\nImportant context: [details that could change the answer].\n\nBefore you answer, tell me if one important detail is missing.",
        pidgin:
          "Help me improve this real task.\n\nWetin I want make you do: [write, explain, plan, review, or improve something].\n\nMaterial to work with: [paste your notes, paragraph, list, or rough draft].\n\nWho e dey for: [person or group].\n\nImportant context: [details wey fit change the answer].\n\nBefore you answer, tell me if one important detail dey miss.",
      },
      practiceTask: {
        en: "Choose one of these: a WhatsApp announcement, a topic you want explained, a meal plan, or a CV paragraph. Use the copyable prompt with your real details. After the answer, add one follow-up that changes the tone, length, or level of detail.",
        pidgin:
          "Choose one: WhatsApp announcement, topic wey you want understand, meal plan, or CV paragraph. Use the copyable prompt with your real details. After the answer, add one follow-up wey change the tone, length, or amount of detail.",
      },
      quickCheck: [
        {
          en: "Can a prompt include pasted text or an image?",
          pidgin: "Prompt fit include pasted text or image?",
        },
        {
          en: "Which context in my example actually changes the answer?",
          pidgin: "Which context for my example really change the answer?",
        },
        {
          en: "What follow-up could I give if the first answer is close but not right?",
          pidgin:
            "Which follow-up I fit give if the first answer close but e never correct?",
        },
      ],
    },
    {
      slug: "why-vague-prompts-give-weak-answers",
      title: {
        en: "Why Vague Prompts Give Weak Answers",
        pidgin: "Why Vague Prompt Dey Give Weak Answer",
      },
      intro: {
        en: "When a prompt leaves out decisions that matter, AI fills the gaps itself. The answer may look polished, but it can still miss the audience, tone, purpose, or format you needed.",
        pidgin:
          "When prompt leave out decisions wey matter, AI go fill the gaps by itself. The answer fit look clean but still miss the audience, tone, purpose, or format wey you need.",
      },
      diagram: {
        label: {
          en: "From broad to useful",
          pidgin: "From broad reach useful",
        },
        steps: [
          { en: "Write a post", pidgin: "Write post" },
          { en: "Name the channel", pidgin: "Name the channel" },
          {
            en: "Add purpose and audience",
            pidgin: "Add purpose and audience",
          },
          {
            en: "Guide tone and ending",
            pidgin: "Guide tone and ending",
          },
        ],
        connectors: [
          { en: "add", pidgin: "add" },
          { en: "then", pidgin: "then" },
          { en: "then", pidgin: "then" },
        ],
      },
      content: [
        {
          heading: {
            en: "Vague prompts leave choices to the AI",
            pidgin: "Vague prompt leave choices for AI",
          },
          body: {
            en: "Write a post does not say where the post will appear, what it should announce, who should care, how long it should be, or what readers should do next. AI has to choose all of that.\n\nSometimes its guesses will be acceptable. Often they will be generic because the tool is trying to produce an answer that could fit many situations at once.",
            pidgin:
              "Write a post no talk where the post go appear, wetin e dey announce, who suppose care, how long e suppose be, or wetin readers suppose do next. AI go choose all those things by itself.\n\nSometimes the guess fit manage. Many times the answer go too general because the tool dey try write something wey fit many situations at once.",
          },
        },
        {
          heading: {
            en: "Watch the prompt become clearer",
            pidgin: "See how the prompt dey become clearer",
          },
          body: {
            en: "Each version below makes one useful decision. The final prompt is still short, but the AI no longer has to invent the channel, topic, audience, tone, or ending.",
            pidgin:
              "Every version below dey make one useful decision. The final prompt still short, but AI no need invent the channel, topic, audience, tone, or ending.",
          },
          examples: [
            {
              label: { en: "1. Broad", pidgin: "1. Broad" },
              content: { en: "Write a post.", pidgin: "Write post." },
            },
            {
              label: {
                en: "2. Add the channel",
                pidgin: "2. Add the channel",
              },
              content: {
                en: "Write an Instagram post.",
                pidgin: "Write Instagram post.",
              },
            },
            {
              label: {
                en: "3. Add the real brief",
                pidgin: "3. Add the real brief",
              },
              content: {
                en: "Write a short Instagram post announcing a free beginner AI course for people who feel left behind by AI. Keep it warm and simple. End with an invitation to start.",
                pidgin:
                  "Write short Instagram post to announce free beginner AI course for people wey feel say AI don leave dem behind. Make e warm and simple. End am with invitation to start.",
              },
            },
          ],
        },
        {
          heading: {
            en: "Vague does not always mean short",
            pidgin: "Vague no always mean short",
          },
          body: {
            en: "A long prompt can repeat background information and still hide the actual task. A short prompt can be clear when the task is simple and the context is already present in the conversation.\n\nFor example, after pasting an email draft, Rewrite this in a warmer tone and keep it under 120 words is short and clear. The material, task, tone, and limit are all there.",
            pidgin:
              "Long prompt fit repeat plenty background and still hide the real task. Short prompt fit clear when the task simple and the context already dey the conversation.\n\nFor example, after you paste email draft, Rewrite this with warmer tone and make e no pass 120 words dey short and clear. The material, task, tone, and limit dey there.",
          },
        },
        {
          heading: {
            en: "Use details that change the answer",
            pidgin: "Use details wey change the answer",
          },
          body: {
            en: "More words do not automatically create a better prompt. Include details that affect the result: audience, purpose, facts, constraints, tone, and output format. Leave out private information and background that does not help with the task.\n\nA good test is simple: if I remove this detail, could the answer meaningfully change? If yes, it may be useful context.",
            pidgin:
              "More words no automatically make prompt better. Include details wey affect the result: audience, purpose, facts, limits, tone, and output format. Leave out private information and background wey no help the task.\n\nUse this small test: if I remove this detail, the answer fit change well well? If yes, e fit be useful context.",
          },
          examples: [
            {
              label: { en: "Work", pidgin: "Work" },
              content: {
                en: "Summarise these meeting notes for colleagues who were absent. List decisions first, then owners and deadlines. Do not add anything that is not in the notes.",
                pidgin:
                  "Summarise these meeting notes for colleagues wey no attend. List decisions first, then who dey responsible and deadlines. No add anything wey no dey the notes.",
              },
            },
            {
              label: { en: "Business", pidgin: "Business" },
              content: {
                en: "Write a friendly WhatsApp reply to a customer asking if a sold-out dress will return. Restock is expected next Friday, but the date is not confirmed. Offer to add her to the update list.",
                pidgin:
                  "Write friendly WhatsApp reply to customer wey ask if sold-out dress go return. Restock fit come next Friday, but date never confirm. Offer to add her to update list.",
              },
            },
            {
              label: { en: "School", pidgin: "School" },
              content: {
                en: "Explain supply and demand to an SS1 student. Use a market example from Nigeria, then ask three practice questions. Do not answer the questions yet.",
                pidgin:
                  "Explain supply and demand to SS1 student. Use market example from Nigeria, then ask three practice questions. No answer the questions yet.",
              },
            },
            {
              label: { en: "Everyday life", pidgin: "Everyday life" },
              content: {
                en: "Plan four quick dinners for one person with rice, beans, eggs, tomatoes, and N8,000 for extra ingredients. Each meal should take under 35 minutes.",
                pidgin:
                  "Plan four quick dinners for one person with rice, beans, eggs, tomatoes, and N8,000 for extra ingredients. Every meal suppose take less than 35 minutes.",
              },
            },
          ],
        },
        {
          heading: {
            en: "Choose the decisions you care about",
            pidgin: "Choose the decisions wey matter to you",
          },
          body: {
            en: "You do not need to control every word. Decide which parts of the result matter to you and state those. Let the AI handle lower-risk choices, then review what it produces.\n\nIf the answer is weak, ask what was missing before adding random detail. Better context is targeted, not crowded.",
            pidgin:
              "You no need control every word. Decide which parts of the result matter to you and state dem. Make AI handle the small choices, then review wetin e produce.\n\nIf the answer weak, check wetin miss before you add random details. Better context dey targeted, e no crowded.",
          },
        },
      ],
      keyTakeaway: {
        en: "A vague prompt leaves important choices to the AI. Add the few details that shape the answer, not extra words for their own sake.",
        pidgin:
          "Vague prompt leave important choices for AI. Add the few details wey shape the answer, no be extra words just to make prompt long.",
      },
      examplePrompt: {
        en: "Help me make this request clearer without making it unnecessarily long.\n\nMy first request: [paste it].\n\nThe result is for: [audience or situation].\n\nWhat matters most: [facts, tone, limit, deadline, or format].\n\nFirst, show me what the request leaves unclear. Then write two improved versions: one concise and one more detailed.",
        pidgin:
          "Help me make this request clearer without making am long for no reason.\n\nMy first request: [paste am].\n\nThe result dey for: [audience or situation].\n\nWetin matter pass: [facts, tone, limit, deadline, or format].\n\nFirst, show me wetin the request leave unclear. Then write two improved versions: one concise and one more detailed.",
      },
      practiceTask: {
        en: "Start with a vague request from work, business, school, or everyday life. Write it in one line. Then add only three details that would meaningfully change the answer. Compare the two responses and identify which added detail helped most.",
        pidgin:
          "Start with vague request from work, business, school, or everyday life. Write am for one line. Then add only three details wey go really change the answer. Compare the two responses and identify which detail help pass.",
      },
      quickCheck: [
        {
          en: "Which important decision did my first prompt leave to the AI?",
          pidgin: "Which important decision my first prompt leave for AI?",
        },
        {
          en: "Can a short prompt still be clear?",
          pidgin: "Short prompt fit still clear?",
        },
        {
          en: "Which detail could I remove without changing the answer?",
          pidgin: "Which detail I fit remove without changing the answer?",
        },
      ],
    },
    {
      slug: "the-simple-prompt-formula",
      title: {
        en: "The Simple Prompt Formula",
        pidgin: "Simple Formula for Better Prompt",
      },
      intro: {
        en: "Task + Context + Requirements + Output is a useful checklist when you are unsure what to include. It is a guide for thinking, not a rigid script for every message.",
        pidgin:
          "Task + Context + Requirements + Output na useful checklist when you no sure wetin to include. Na guide for thinking, no be strict script for every message.",
      },
      content: [
        {
          heading: {
            en: "Four parts you can use",
            pidgin: "Four parts wey you fit use",
          },
          body: {
            en: "The formula helps you check whether AI understands the job, the situation, any boundaries, and the kind of answer you want back. You can write the parts as labels, bullets, or normal sentences.\n\nNot every prompt needs all four. If you have already pasted the text, the context may be obvious. If the answer format does not matter, you can leave it open.",
            pidgin:
              "The formula dey help you check whether AI understand the work, the situation, any limits, and the kind answer wey you want. You fit write the parts as labels, bullets, or normal sentences.\n\nNo be every prompt need all four. If you don paste the text, the context fit already clear. If answer format no matter, you fit leave am open.",
          },
          examples: [
            {
              label: { en: "Task", pidgin: "Task" },
              content: {
                en: "What do you want done? Use a clear action such as write, explain, compare, plan, review, or improve.",
                pidgin:
                  "Wetin you want make AI do? Use clear action like write, explain, compare, plan, review, or improve.",
              },
            },
            {
              label: { en: "Context", pidgin: "Context" },
              content: {
                en: "What does AI need to know about the situation, audience, source material, or goal?",
                pidgin:
                  "Wetin AI need know about the situation, audience, source material, or goal?",
              },
            },
            {
              label: { en: "Requirements", pidgin: "Requirements" },
              content: {
                en: "What facts, tone, limits, boundaries, or details must the answer respect?",
                pidgin:
                  "Which facts, tone, limits, boundaries, or details the answer must follow?",
              },
            },
            {
              label: { en: "Output", pidgin: "Output" },
              content: {
                en: "Should the answer be an email, table, checklist, caption, plan, or another useful format?",
                pidgin:
                  "The answer suppose be email, table, checklist, caption, plan, or another useful format?",
              },
            },
          ],
        },
        {
          heading: {
            en: "One complete example",
            pidgin: "One complete example",
          },
          body: {
            en: "Ngozi needs to move a client meeting because of a medical appointment. She wants a short email that is respectful but does not share private medical details.",
            pidgin:
              "Ngozi need shift client meeting because of medical appointment. She want short email wey respectful but no share private medical details.",
          },
          examples: [
            {
              label: { en: "Task", pidgin: "Task" },
              content: {
                en: "Write an email asking to move a client meeting.",
                pidgin: "Write email to ask make dem shift client meeting.",
              },
            },
            {
              label: { en: "Context", pidgin: "Context" },
              content: {
                en: "The meeting is tomorrow at 10am. I have an appointment I cannot move. The client is Mr. Adeyemi.",
                pidgin:
                  "The meeting na tomorrow 10am. I get appointment wey I no fit shift. The client na Mr. Adeyemi.",
              },
            },
            {
              label: { en: "Requirements", pidgin: "Requirements" },
              content: {
                en: "Sound respectful and responsible. Do not mention medical details. Offer Wednesday at 2pm or Thursday at 11am.",
                pidgin:
                  "Make e respectful and responsible. No mention medical details. Offer Wednesday 2pm or Thursday 11am.",
              },
            },
            {
              label: { en: "Output", pidgin: "Output" },
              content: {
                en: "Give me a subject line and an email under 120 words.",
                pidgin:
                  "Give me subject line and email wey no pass 120 words.",
              },
            },
          ],
        },
        {
          heading: {
            en: "The full prompt in natural language",
            pidgin: "The full prompt with natural language",
          },
          body: {
            en: "Write an email asking to move a client meeting scheduled for tomorrow at 10am. The client is Mr. Adeyemi, and I have an appointment I cannot move. Sound respectful and responsible, but do not mention medical details. Offer Wednesday at 2pm or Thursday at 11am. Give me a subject line and keep the email under 120 words.\n\nThe formula is present, but the prompt still sounds like a person speaking normally.",
            pidgin:
              "Write email to ask make we shift client meeting wey dey tomorrow 10am. The client na Mr. Adeyemi, and I get appointment wey I no fit shift. Make e respectful and responsible, but no mention medical details. Offer Wednesday 2pm or Thursday 11am. Give me subject line and make the email no pass 120 words.\n\nThe formula dey inside, but the prompt still sound like normal person.",
          },
        },
        {
          heading: {
            en: "Use the formula for different tasks",
            pidgin: "Use the formula for different tasks",
          },
          body: {
            en: "The same checklist can support many kinds of work. What changes is the useful context and the output you need.",
            pidgin:
              "The same checklist fit support different kinds of work. Wetin go change na the useful context and the output wey you need.",
          },
          examples: [
            {
              label: { en: "Email", pidgin: "Email" },
              content: {
                en: "Write a follow-up email to a supplier who missed yesterday's delivery. Order: 30 notebooks. Ask for a confirmed delivery time today. Be firm but professional. Keep it under 100 words.",
                pidgin:
                  "Write follow-up email to supplier wey miss yesterday delivery. Order: 30 notebooks. Ask for confirmed delivery time today. Make e firm but professional. Make e no pass 100 words.",
              },
            },
            {
              label: { en: "Studying", pidgin: "Studying" },
              content: {
                en: "Explain opportunity cost to an SS2 student preparing for Economics. Use one Nigerian household example, then give a five-question quiz without answers.",
                pidgin:
                  "Explain opportunity cost to SS2 student wey dey prepare for Economics. Use one Nigerian household example, then give five-question quiz without answers.",
              },
            },
            {
              label: {
                en: "Business caption",
                pidgin: "Business caption",
              },
              content: {
                en: "Write an Instagram caption for a small Abuja bakery launching weekend cinnamon rolls. Pre-orders close Friday at 4pm. Tone should be warm, not pushy. Give two caption options and one short call to action.",
                pidgin:
                  "Write Instagram caption for small Abuja bakery wey dey launch weekend cinnamon rolls. Pre-order close Friday 4pm. Make the tone warm, no pushy. Give two caption options and one short call to action.",
              },
            },
            {
              label: { en: "Event planning", pidgin: "Event planning" },
              content: {
                en: "Create a planning checklist for a 25-person family lunch at home in three weeks. Budget is N180,000. Group tasks by this week, next week, and event day. Include food, seating, shopping, and cleanup.",
                pidgin:
                  "Create planning checklist for family lunch of 25 people for house in three weeks. Budget na N180,000. Group tasks by this week, next week, and event day. Include food, seating, shopping, and cleanup.",
              },
            },
          ],
        },
        {
          heading: {
            en: "Follow-up prompts are normal",
            pidgin: "Follow-up prompts dey normal",
          },
          body: {
            en: "A clear prompt can still produce an answer that needs shaping. You might discover that you want a shorter email, a simpler explanation, or a different order after you see the first response.\n\nTell the AI what to change: Keep the same facts, but make the opening warmer. Put the checklist in order of urgency. Explain the second point with an example. This is part of the work, not a mistake.",
            pidgin:
              "Clear prompt fit still produce answer wey need shaping. You fit discover say you want shorter email, simpler explanation, or different order after you see the first response.\n\nTell AI wetin to change: Keep the same facts, but make the opening warmer. Put the checklist in order of urgency. Explain the second point with example. This one na part of the work, no be mistake.",
          },
        },
        {
          heading: { en: "Module 1 recap", pidgin: "Module 1 recap" },
          body: {
            en: "A prompt is all the material and direction you give AI. Vague prompts become weak when they leave decisions you care about unstated. The four-part formula gives you a quick way to notice what may be missing.\n\nStart naturally. Add useful context. Guide the parts of the answer that matter. Then read and adjust.",
            pidgin:
              "Prompt na all the material and direction wey you give AI. Vague prompts dey weak when dem leave decisions wey matter to you unstated. The four-part formula give you quick way to notice wetin fit miss.\n\nStart naturally. Add useful context. Guide the parts of the answer wey matter. Then read and adjust.",
          },
        },
      ],
      keyTakeaway: {
        en: "Task + Context + Requirements + Output is a flexible checklist. Use the parts that help your task, write naturally, and use follow-ups to shape the answer.",
        pidgin:
          "Task + Context + Requirements + Output na flexible checklist. Use the parts wey help your task, write naturally, and use follow-ups shape the answer.",
      },
      examplePrompt: {
        en: "Task: [What do you want AI to do?]\n\nContext: [What situation, audience, goal, or material does AI need?]\n\nRequirements: [What facts, tone, limits, details, or boundaries matter?]\n\nOutput: [What form should the answer take?]\n\nIf an important detail is missing, ask me before you begin.",
        pidgin:
          "Task: [Wetin you want make AI do?]\n\nContext: [Which situation, audience, goal, or material AI need?]\n\nRequirements: [Which facts, tone, limits, details, or boundaries matter?]\n\nOutput: [Which form the answer suppose take?]\n\nIf important detail dey miss, ask me before you start.",
      },
      practiceTask: {
        en: "Choose one real task and fill in all four parts of the template. Then rewrite the same prompt as a natural paragraph. Try both versions. The answers should be similar because the useful information is the same.\n\nAfterward, ask one follow-up that improves the answer without starting over.",
        pidgin:
          "Choose one real task and fill all four parts of the template. Then rewrite the same prompt as normal paragraph. Try both versions. The answers suppose similar because the useful information na the same.\n\nAfter that, ask one follow-up wey improve the answer without starting again.",
      },
      quickCheck: [
        {
          en: "What is the task in my prompt?",
          pidgin: "Wetin be the task for my prompt?",
        },
        {
          en: "Which context changes the answer?",
          pidgin: "Which context dey change the answer?",
        },
        {
          en: "Which requirement or output format matters most?",
          pidgin: "Which requirement or output format matter pass?",
        },
        {
          en: "Which part could I leave out and still get a useful answer?",
          pidgin:
            "Which part I fit leave out and still get useful answer?",
        },
      ],
    },
  ],
};

const promptingBasicsDraftWrapUp: CourseStandaloneLesson = {
  slug: "your-first-prompt-toolkit",
  eyebrow: { en: "Draft", pidgin: "Draft" },
  lesson: {
    slug: "your-first-prompt-toolkit",
    title: {
      en: "Your First Prompt Toolkit",
      pidgin: "Your First Prompt Toolkit",
    },
    intro: "",
    content: [],
    keyTakeaway: "",
    examplePrompt: "",
    practiceTask: "",
  },
};

export const promptingBasicsCourse: Course = {
  slug: "prompting-basics",
  title: {
    en: "Prompting Basics: How to Ask AI Better Questions",
    pidgin: "Prompting Basics: How You Fit Ask AI Better Questions",
  },
  description: {
    en: "Learn how to give AI clearer instructions, add useful context, improve weak answers, and build prompt habits you can reuse.",
    pidgin:
      "Learn how to give AI clear instructions, add useful context, improve weak answers, and build prompt habits wey you fit use again.",
  },
  level: {
    en: "Beginner follow-up",
    pidgin: "Next beginner step",
  },
  priceLabel: "Free",
  languageSupport: "English + Pidgin",
  releaseStatus: "preview",
  modules: [promptingFoundationsModule],
  startHere: promptingBasicsStartHere,
  finalWrapUp: promptingBasicsDraftWrapUp,
};
