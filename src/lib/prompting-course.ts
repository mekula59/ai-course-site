import type { Course, CourseModule, CourseStandaloneLesson, Lesson } from "@/lib/course";
import {
  promptingBetterHabitsModule,
  promptingPlaybook,
  promptingRefiningResponsesModule,
} from "@/lib/prompting-course-advanced";

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

export const promptingContextToneFormatModule: CourseModule = {
  slug: "context-tone-and-format",
  number: "02",
  title: {
    en: "Context, Tone & Format",
    pidgin: "Context, Tone & Answer Format",
  },
  description: {
    en: "Give AI the background it needs, choose how the answer should feel, and ask for a structure you can use straight away.",
    pidgin:
      "Give AI the background wey e need, choose how the answer suppose sound, and ask for format wey you fit use straight away.",
  },
  diagram: {
    steps: [
      { en: "Useful context", pidgin: "Useful context" },
      { en: "Right tone", pidgin: "Correct tone" },
      { en: "Useful format", pidgin: "Useful format" },
      { en: "A usable answer", pidgin: "Answer wey you fit use" },
    ],
  },
  lessons: [
    {
      slug: "how-to-give-ai-better-context",
      title: {
        en: "Give AI the Context It Needs",
        pidgin: "Give AI the Context Wey E Need",
      },
      intro: {
        en: "Context is the background that helps AI understand your task. The useful details are not everything you know, but the details that could change the answer.",
        pidgin:
          "Context na the background wey help AI understand your task. You no need tell am everything. Give am the details wey fit change the answer.",
      },
      diagram: {
        label: {
          en: "From guessing to understanding",
          pidgin: "From guesswork reach understanding",
        },
        steps: [
          { en: "A broad request", pidgin: "Broad request" },
          { en: "AI fills the gaps", pidgin: "AI guess the gaps" },
          { en: "Add useful context", pidgin: "Add useful context" },
          { en: "Answer fits the task", pidgin: "Answer fit the task" },
        ],
        connectors: [
          { en: "leads to", pidgin: "lead to" },
          { en: "instead", pidgin: "instead" },
          { en: "then", pidgin: "then" },
        ],
      },
      content: [
        {
          heading: {
            en: "Context answers the questions behind the task",
            pidgin: "Context dey answer the questions behind the task",
          },
          body: {
            en: "When you ask AI to write a customer reply, it does not know what the customer complained about, what your business can offer, or how you normally speak to customers. Without those details, it has to make assumptions.\n\nUseful context can include the audience, goal, situation, source material, constraints, and what you have already tried. Include a detail when it affects the advice, wording, or decision. Leave it out when it does not.",
            pidgin:
              "If you ask AI to write customer reply, e no know wetin the customer complain about, wetin your business fit offer, or how you normally dey talk to customers. Without those details, e go begin guess.\n\nUseful context fit include the audience, goal, situation, material wey AI go use, limits, and wetin you don already try. Add detail if e go affect the advice, wording, or decision. Leave am if e no matter.",
          },
        },
        {
          heading: {
            en: "Watch one prompt become useful",
            pidgin: "See how one prompt become useful",
          },
          body: {
            en: "The prompt improves because each new detail removes an important guess. It does not need a long story.",
            pidgin:
              "The prompt improve because every new detail remove one important guess. E no need long story.",
          },
          examples: [
            {
              label: { en: "1. Too little", pidgin: "1. Context no reach" },
              content: {
                en: "Reply to this customer.",
                pidgin: "Reply this customer.",
              },
            },
            {
              label: { en: "2. Add the situation", pidgin: "2. Add the situation" },
              content: {
                en: "Reply to a customer whose delivery is two days late.",
                pidgin: "Reply customer wey delivery don late by two days.",
              },
            },
            {
              label: { en: "3. Add what matters", pidgin: "3. Add wetin matter" },
              content: {
                en: "Write a calm WhatsApp reply to a customer whose delivery is two days late. The courier says it should arrive tomorrow, but that is not guaranteed. Apologise, explain the update honestly, and offer to check again by 4pm today. Keep it under 90 words.",
                pidgin:
                  "Write calm WhatsApp reply to customer wey delivery don late by two days. Courier talk say e fit arrive tomorrow, but dem never confirm am. Apologise, explain the update honestly, and offer to check again by 4pm today. Make e no pass 90 words.",
              },
            },
          ],
        },
        {
          heading: {
            en: "A quick context checklist",
            pidgin: "Quick context checklist",
          },
          body: {
            en: "Before sending a prompt, check whether AI knows enough about the people involved and the result you need. You will not need every item for every task.",
            pidgin:
              "Before you send prompt, check whether AI know enough about the people involved and the result wey you need. No be every task need everything for this list.",
          },
          examples: [
            {
              label: { en: "Audience and goal", pidgin: "Audience and goal" },
              content: {
                en: "Who is this for, and what should the answer help them understand or do?",
                pidgin: "Who the answer dey for, and wetin e suppose help dem understand or do?",
              },
            },
            {
              label: { en: "Situation and source", pidgin: "Situation and source" },
              content: {
                en: "What happened, and which notes, draft, topic, or facts should AI work from?",
                pidgin: "Wetin happen, and which notes, draft, topic, or facts AI suppose use?",
              },
            },
            {
              label: { en: "Limits and earlier attempts", pidgin: "Limits and wetin you don try" },
              content: {
                en: "Is there a deadline, budget, word limit, rule, or approach that did not work?",
                pidgin: "Deadline, budget, word limit, rule, or method wey no work dey?",
              },
            },
          ],
        },
        {
          heading: {
            en: "Different tasks need different context",
            pidgin: "Different tasks need different context",
          },
          body: {
            en: "For school help, the learner's level and the exact topic matter. For a work email, the relationship, purpose, and facts matter. For a community event, the date, expected crowd, budget, venue, and available helpers may shape the plan.",
            pidgin:
              "For school help, the learner level and exact topic matter. For work email, the relationship, purpose, and facts matter. For community event, date, number of people, budget, venue, and available helpers fit shape the plan.",
          },
          examples: [
            {
              label: { en: "School topic", pidgin: "School topic" },
              content: {
                en: "Explain fractions to a Primary 5 learner who understands halves but struggles with different denominators. Use a food-sharing example, then give two practice questions.",
                pidgin:
                  "Explain fractions to Primary 5 learner wey understand halves but dey struggle with different denominators. Use food-sharing example, then give two practice questions.",
              },
            },
            {
              label: { en: "Work email", pidgin: "Work email" },
              content: {
                en: "Improve this email to my manager. I am asking to move Friday's deadline to Monday because the client sent the final figures late. Keep the facts, sound responsible, and do not blame the client: [paste draft].",
                pidgin:
                  "Improve this email to my manager. I dey ask make Friday deadline move to Monday because client send final figures late. Keep the facts, make e sound responsible, and no blame the client: [paste draft].",
              },
            },
            {
              label: { en: "Community event", pidgin: "Community event" },
              content: {
                en: "Create a simple plan for a Saturday estate cleanup for about 30 people. We have two hours, six volunteers, and N45,000 for water, gloves, and waste bags. Group tasks into before, during, and after the event.",
                pidgin:
                  "Create simple plan for Saturday estate cleanup for about 30 people. We get two hours, six volunteers, and N45,000 for water, gloves, and waste bags. Group tasks into before, during, and after the event.",
              },
            },
          ],
        },
        {
          heading: {
            en: "Useful does not mean personal",
            pidgin: "Useful no mean say make e personal",
          },
          body: {
            en: "Do not paste passwords, bank details, private health records, confidential work files, or another person's personal information unless you have a safe and approved reason. Replace names and identifying details when they are not needed.\n\nToo much irrelevant context can also bury the task. If a detail will not change the answer, remove it. A focused brief is easier to use than a life story.",
            pidgin:
              "No paste password, bank details, private health record, confidential work file, or another person personal information unless you get safe and approved reason. Change names and identifying details when dem no matter.\n\nToo much information wey no concern the task fit hide the real request. If one detail no go change the answer, remove am. Focused brief better pass full life story.",
          },
        },
      ],
      keyTakeaway: {
        en: "Give AI the few background details that change the answer. Include the audience, goal, situation, source, or limits when they matter, and keep sensitive information out.",
        pidgin:
          "Give AI the few background details wey go change the answer. Add audience, goal, situation, source, or limits when dem matter, and keep sensitive information outside.",
      },
      examplePrompt: {
        en: "Help me with this task: [state the task].\n\nAudience: [who it is for].\nGoal: [what the answer should help achieve].\nSituation or source material: [give the relevant facts or paste safe material].\nConstraints: [deadline, budget, length, rules, or facts to preserve].\nWhat I have already tried: [optional].\n\nIf a missing detail could change the answer, ask me one short question first.",
        pidgin:
          "Help me with this task: [talk the task].\n\nAudience: [who e dey for].\nGoal: [wetin the answer suppose help achieve].\nSituation or source material: [give the important facts or paste safe material].\nLimits: [deadline, budget, length, rules, or facts wey must remain].\nWetin I don already try: [optional].\n\nIf one missing detail fit change the answer, ask me one short question first.",
      },
      practiceTask: {
        en: "Choose a customer reply, school topic, work email, or community event. Write a one-line prompt, then use the checklist to add only the context that changes the answer. Compare both responses. Remove one unnecessary detail if you included any.",
        pidgin:
          "Choose customer reply, school topic, work email, or community event. Write one-line prompt, then use the checklist add only the context wey change the answer. Compare both responses. Remove one detail wey no matter if you add any.",
      },
      quickCheck: [
        {
          en: "Which detail tells AI who the answer is for?",
          pidgin: "Which detail tell AI who the answer dey for?",
        },
        {
          en: "Which detail would meaningfully change the answer?",
          pidgin: "Which detail go really change the answer?",
        },
        {
          en: "Have I removed private or irrelevant information?",
          pidgin: "I don remove private information and details wey no matter?",
        },
      ],
    },
    {
      slug: "how-to-control-tone",
      title: {
        en: "Choose the Right Tone",
        pidgin: "Choose the Tone Wey Fit",
      },
      intro: {
        en: "Tone is how a message feels to the person reading it. The right tone depends on who they are, what has happened, and what the message needs to achieve.",
        pidgin:
          "Tone na how message dey feel to the person wey read am. The correct tone depend on who the person be, wetin happen, and wetin the message need achieve.",
      },
      content: [
        {
          heading: {
            en: "Name the feeling, then explain the situation",
            pidgin: "Name the feeling, then explain the situation",
          },
          body: {
            en: "Words such as warm, direct, calm, formal, friendly, apologetic, and confident can guide AI. They work better when you also name the audience and purpose.\n\nWrite a warm message is open to interpretation. Write a warm WhatsApp message to neighbours, inviting them to Saturday's cleanup without making anyone feel pressured gives the tone a real job to do.",
            pidgin:
              "Words like warm, direct, calm, formal, friendly, apologetic, and confident fit guide AI. Dem dey work better when you still name the audience and purpose.\n\nWrite warm message still broad. Write warm WhatsApp message to neighbours, invite dem to Saturday cleanup without making anybody feel pressured give the tone a real job.",
          },
        },
        {
          heading: {
            en: "One update, five tones",
            pidgin: "One update, five different tones",
          },
          body: {
            en: "The fact stays the same: tomorrow's delivery will arrive late. Notice how the relationship and purpose change the wording.",
            pidgin:
              "The fact remain the same: tomorrow delivery go late. Notice how the relationship and purpose change the wording.",
          },
          examples: [
            {
              label: { en: "Professional", pidgin: "Professional" },
              content: {
                en: "Please note that tomorrow's delivery is now expected by 2pm. Thank you for your patience while we complete the final checks.",
                pidgin:
                  "Please note say tomorrow delivery go now arrive around 2pm. Thank you for your patience as we complete the final checks.",
              },
            },
            {
              label: { en: "Warm", pidgin: "Warm" },
              content: {
                en: "A quick update: your delivery should reach you by 2pm tomorrow. Thank you for bearing with us, we really appreciate your patience.",
                pidgin:
                  "Small update: your delivery suppose reach you by 2pm tomorrow. Thank you as you dey patient with us, we appreciate am well well.",
              },
            },
            {
              label: { en: "Direct", pidgin: "Direct" },
              content: {
                en: "Tomorrow's delivery has moved to 2pm. I will confirm as soon as it leaves.",
                pidgin:
                  "Tomorrow delivery don move to 2pm. I go confirm once e leave.",
              },
            },
            {
              label: { en: "Casual", pidgin: "Casual" },
              content: {
                en: "Hi, small heads-up: the delivery will come around 2pm tomorrow instead. I will message you once it is on the way.",
                pidgin:
                  "Hi, small heads-up: the delivery go come around 2pm tomorrow instead. I go message you once e dey road.",
              },
            },
            {
              label: { en: "Apologetic", pidgin: "Apologetic" },
              content: {
                en: "I am sorry for the delay. Your delivery is now expected by 2pm tomorrow, and I will keep you updated until it arrives.",
                pidgin:
                  "I sorry for the delay. Your delivery suppose arrive by 2pm tomorrow, and I go keep you updated until e reach.",
              },
            },
          ],
        },
        {
          heading: {
            en: "Match the tone to the moment",
            pidgin: "Match the tone with the situation",
          },
          body: {
            en: "A customer complaint may need a calm, apologetic tone that takes responsibility. An application email may need to sound professional and confident. A social caption can be casual and lively without becoming unclear.\n\nTone is not about making every message cheerful. It is about helping the reader receive the message as intended.",
            pidgin:
              "Customer complaint fit need calm, apologetic tone wey take responsibility. Application email fit need professional and confident tone. Social caption fit casual and lively without becoming confusing.\n\nTone no mean say every message must sound happy. Na to help the reader receive the message the way you intend.",
          },
          examples: [
            {
              label: { en: "WhatsApp announcement", pidgin: "WhatsApp announcement" },
              content: {
                en: "Friendly and clear. Put the key date early and avoid sounding like an official memo.",
                pidgin: "Friendly and clear. Put the key date early and no make am sound like official memo.",
              },
            },
            {
              label: { en: "Customer complaint", pidgin: "Customer complaint" },
              content: {
                en: "Calm and apologetic. Acknowledge the problem before explaining the next step.",
                pidgin: "Calm and apologetic. Accept the problem before you explain the next step.",
              },
            },
            {
              label: { en: "Application email", pidgin: "Application email" },
              content: {
                en: "Professional and confident. Be specific without sounding boastful.",
                pidgin: "Professional and confident. Be specific without making too much noise about yourself.",
              },
            },
            {
              label: { en: "Social caption", pidgin: "Social caption" },
              content: {
                en: "Casual and inviting. Keep the useful information easy to spot.",
                pidgin: "Casual and inviting. Make the useful information easy to see.",
              },
            },
          ],
        },
        {
          heading: {
            en: "Help AI sound more like you",
            pidgin: "Help AI sound more like you",
          },
          body: {
            en: "If tone labels are not enough, share a short sample you wrote and explain what to borrow: sentence length, level of formality, or use of simple language. Remove private details first.\n\nAsk AI to follow the style, not to pretend to be a real person. It should not impersonate your manager, a public figure, or anyone else in a deceptive message. You remain responsible for reviewing the final wording.",
            pidgin:
              "If tone labels no reach, share short sample wey you write and explain wetin AI suppose copy from the style: sentence length, how formal e be, or simple language. Remove private details first.\n\nAsk AI to follow the style, no be to pretend say e be real person. E no suppose impersonate your manager, public figure, or anybody for deceptive message. Na you still go review the final wording.",
          },
        },
        {
          heading: {
            en: "Rewrite for two audiences",
            pidgin: "Rewrite for two audiences",
          },
          body: {
            en: "Start with this fact: The workshop begins at 9am, and late arrivals may miss the first activity.\n\nWrite one version for colleagues attending a formal training. Then write another for friends joining a casual community workshop. Keep the fact unchanged while you adjust the greeting, word choice, and level of formality.",
            pidgin:
              "Start with this fact: The workshop go start by 9am, and people wey come late fit miss the first activity.\n\nWrite one version for colleagues wey dey attend formal training. Then write another one for friends wey dey join casual community workshop. Keep the fact the same as you adjust greeting, word choice, and how formal the message be.",
          },
        },
      ],
      keyTakeaway: {
        en: "Choose tone from the audience, situation, and purpose. Name the feeling you want, give enough context, and review the result before sending it.",
        pidgin:
          "Choose tone from the audience, situation, and purpose. Name how you want the message to feel, give enough context, and review am before you send.",
      },
      examplePrompt: {
        en: "Rewrite this message for [audience].\n\nPurpose: [what the message needs to achieve].\nTone: [warm, direct, calm, formal, friendly, apologetic, or confident].\nKeep these facts unchanged: [list the facts].\nAvoid: [anything that would feel wrong for this audience].\n\nMessage: [paste your draft].\n\nGive me one version and briefly explain two choices you made about tone.",
        pidgin:
          "Rewrite this message for [audience].\n\nPurpose: [wetin the message need achieve].\nTone: [warm, direct, calm, formal, friendly, apologetic, or confident].\nKeep these facts the same: [list the facts].\nAvoid: [anything wey no go fit this audience].\n\nMessage: [paste your draft].\n\nGive me one version and briefly explain two choices wey you make about the tone.",
      },
      practiceTask: {
        en: "Use the workshop message above or one safe message of your own. Ask AI for two versions aimed at different audiences. Highlight three words or phrases that changed, then decide which version fits each audience better and why.",
        pidgin:
          "Use the workshop message above or one safe message of your own. Ask AI for two versions for different audiences. Mark three words or phrases wey change, then decide which version fit each audience better and why.",
      },
      quickCheck: [
        {
          en: "Who will read this message, and what is the situation?",
          pidgin: "Who go read this message, and wetin be the situation?",
        },
        {
          en: "Does the tone support the purpose without changing the facts?",
          pidgin: "The tone support the purpose without changing the facts?",
        },
        {
          en: "Am I asking for a style, rather than deceptive impersonation?",
          pidgin: "I dey ask for style, instead of deceptive impersonation?",
        },
      ],
    },
    {
      slug: "how-to-ask-for-the-right-format",
      title: {
        en: "Ask for the Output You Actually Want",
        pidgin: "Ask for the Answer Wey You Really Want",
      },
      intro: {
        en: "AI may choose a sensible-looking structure that is awkward for your task. Tell it how the answer should be arranged so you can read, compare, share, or act on it more easily.",
        pidgin:
          "AI fit choose structure wey look okay but no fit your task. Tell am how to arrange the answer so you fit read, compare, share, or use am easily.",
      },
      content: [
        {
          heading: {
            en: "Format is part of the instruction",
            pidgin: "Format still be part of the instruction",
          },
          body: {
            en: "Output instructions can set the length, order, headings, and shape of an answer. You can ask for a short paragraph, bullets, table, script, checklist, or step-by-step guide.\n\nChoose the format that matches what you need to do next. A table helps comparison. A checklist helps action. A short paragraph may be better when you need a simple explanation.",
            pidgin:
              "Output instruction fit set the length, order, headings, and shape of the answer. You fit ask for short paragraph, bullets, table, script, checklist, or step-by-step guide.\n\nChoose the format wey match wetin you wan do next. Table dey help comparison. Checklist dey help action. Short paragraph fit better when you need simple explanation.",
          },
        },
        {
          heading: {
            en: "The same event update, five useful shapes",
            pidgin: "The same event update, five useful formats",
          },
          body: {
            en: "The information is the same: a neighbourhood skills workshop is on Saturday at 10am in the community hall. Registration closes Thursday. The best format depends on where the information will be used.",
            pidgin:
              "The information remain the same: neighbourhood skills workshop dey Saturday 10am for community hall. Registration close Thursday. The best format depend on where you wan use the information.",
          },
          examples: [
            {
              label: { en: "Short paragraph", pidgin: "Short paragraph" },
              content: {
                en: "Explain the event in one paragraph under 70 words for the estate newsletter.",
                pidgin: "Explain the event for one paragraph wey no pass 70 words for estate newsletter.",
              },
            },
            {
              label: { en: "Bullet points", pidgin: "Bullet points" },
              content: {
                en: "List the event name, date, time, venue, and registration deadline as five bullets.",
                pidgin: "List event name, date, time, venue, and registration deadline as five bullets.",
              },
            },
            {
              label: { en: "Table", pidgin: "Table" },
              content: {
                en: "Put the event details in a two-column table labelled Detail and Information.",
                pidgin: "Put the event details for two-column table labelled Detail and Information.",
              },
            },
            {
              label: { en: "WhatsApp message", pidgin: "WhatsApp message" },
              content: {
                en: "Write a friendly WhatsApp message under 80 words. Put the date and time on their own line and end with the registration deadline.",
                pidgin: "Write friendly WhatsApp message wey no pass 80 words. Put date and time for their own line and end with registration deadline.",
              },
            },
            {
              label: { en: "Simple checklist", pidgin: "Simple checklist" },
              content: {
                en: "Turn the information into a checklist for someone who wants to attend: register, save the date, note the venue, and arrive on time.",
                pidgin: "Turn the information into checklist for person wey wan attend: register, save the date, note the venue, and arrive on time.",
              },
            },
          ],
        },
        {
          heading: {
            en: "Match the structure to the work",
            pidgin: "Match the structure with the work",
          },
          body: {
            en: "Do not ask for a table just because it looks organised. Use it when rows and columns make the information easier to compare. For a study plan, a weekly schedule may help. For an event plan, phases and owners may matter more.\n\nFor a product comparison, ask for criteria such as price, size, strengths, and trade-offs. For a weekly content plan, ask for day, topic, format, and call to action. The headings should reflect the decisions you need to make.",
            pidgin:
              "No ask for table just because e look organised. Use am when rows and columns make the information easy to compare. For study plan, weekly schedule fit help. For event plan, stages and who dey responsible fit matter pass.\n\nFor product comparison, ask for things like price, size, strengths, and trade-offs. For weekly content plan, ask for day, topic, format, and call to action. The headings suppose match the decisions wey you need make.",
          },
          examples: [
            {
              label: { en: "Study plan", pidgin: "Study plan" },
              content: {
                en: "Create a seven-day revision plan with columns for day, topic, time, activity, and a short self-test.",
                pidgin: "Create seven-day revision plan with columns for day, topic, time, activity, and short self-test.",
              },
            },
            {
              label: { en: "Product comparison", pidgin: "Product comparison" },
              content: {
                en: "Compare these three options in a table using only the details I provide. Add columns for price, key feature, limitation, and best fit: [paste details].",
                pidgin: "Compare these three options for table using only the details wey I provide. Add columns for price, key feature, limitation, and best fit: [paste details].",
              },
            },
            {
              label: { en: "Weekly content plan", pidgin: "Weekly content plan" },
              content: {
                en: "Plan five posts as a numbered list. For each one, include the topic, content format, opening line, and one clear next step for readers.",
                pidgin: "Plan five posts as numbered list. For each one, include topic, content format, opening line, and one clear next step for readers.",
              },
            },
          ],
        },
        {
          heading: {
            en: "Structure helps usability, not accuracy",
            pidgin: "Structure help usability, e no guarantee accuracy",
          },
          body: {
            en: "A neat table can still contain incorrect facts. Clear headings and polished bullets do not prove that the information is true. Check important claims, dates, prices, calculations, and sources before relying on them.\n\nIf the first format is not useful, refine it with a follow-up: Keep the same information but group the checklist by urgency. Add a column for cost. Shorten each bullet to one sentence. You do not need to restart the conversation.",
            pidgin:
              "Fine table fit still contain wrong facts. Clear headings and clean bullets no prove say the information correct. Check important claims, dates, prices, calculations, and sources before you depend on dem.\n\nIf the first format no useful, refine am with follow-up: Keep the same information but group the checklist by urgency. Add column for cost. Shorten every bullet to one sentence. You no need start the conversation again.",
          },
        },
        {
          heading: {
            en: "Module 2 recap",
            pidgin: "Module 2 recap",
          },
          body: {
            en: "Context tells AI what surrounds the task. Tone guides how the response should feel. Format shapes how the answer is arranged. Together, they make an answer easier to understand and use.\n\nThey do not replace your judgement. Keep private details out, make sure the tone fits the people involved, and check important information before you act on it.",
            pidgin:
              "Context tell AI wetin surround the task. Tone guide how the answer suppose feel. Format shape how AI arrange the answer. Together, dem make answer easier to understand and use.\n\nDem no replace your judgement. Keep private details outside, make sure the tone fit the people involved, and check important information before you act on am.",
          },
        },
      ],
      keyTakeaway: {
        en: "Ask for a format that fits the next action, such as reading, comparing, sharing, or doing. Refine the structure with follow-ups, and still check the facts.",
        pidgin:
          "Ask for format wey fit the next action, whether na to read, compare, share, or do something. Refine the structure with follow-up, and still check the facts.",
      },
      examplePrompt: {
        en: "Create [type of output] for [task].\n\nUse this information: [paste safe facts or notes].\nAudience: [who will use it].\nLength: [word count, number of items, or time].\nStructure: [paragraphs, bullets, table, script, checklist, or steps].\nOrder or headings: [state what should come first and name any columns or headings].\n\nDo not add facts that are not in my information. If another format may suit the task better, suggest it after the requested version.",
        pidgin:
          "Create [type of output] for [task].\n\nUse this information: [paste safe facts or notes].\nAudience: [who go use am].\nLength: [word count, number of items, or time].\nStructure: [paragraphs, bullets, table, script, checklist, or steps].\nOrder or headings: [talk wetin suppose come first and name any columns or headings].\n\nNo add facts wey no dey my information. If another format fit the task better, suggest am after the version wey I request.",
      },
      practiceTask: {
        en: "Fill in the prompt template for a study plan, event plan, product comparison, or weekly content plan. Generate the answer, then ask for the same information in a second format. Compare which version is easier to use and explain why in one sentence.",
        pidgin:
          "Fill the prompt template for study plan, event plan, product comparison, or weekly content plan. Generate the answer, then ask for the same information for another format. Compare which version easy to use pass and explain why for one sentence.",
      },
      quickCheck: [
        {
          en: "What will I do with the answer after I receive it?",
          pidgin: "Wetin I go do with the answer after I receive am?",
        },
        {
          en: "Which length, order, headings, or format would make that easier?",
          pidgin: "Which length, order, headings, or format go make that one easy?",
        },
        {
          en: "Have I checked important facts instead of trusting the layout?",
          pidgin: "I don check important facts instead of trusting the fine layout?",
        },
      ],
    },
  ],
};

const teachingUpgrade = (
  question: [string, string],
  situation: [string, string],
  before: [string, string],
  after: [string, string],
  why: [string, string],
  notice: [string, string],
  mistake: [string, string]
): NonNullable<Lesson["teaching"]> => ({
  question: { en: question[0], pidgin: question[1] },
  situation: { en: situation[0], pidgin: situation[1] },
  comparison: {
    label: { en: "Let's fix it together", pidgin: "Make we fix am together" },
    before: { en: before[0], pidgin: before[1] },
    after: { en: after[0], pidgin: after[1] },
    why: { en: why[0], pidgin: why[1] },
  },
  didYouNotice: { en: notice[0], pidgin: notice[1] },
  commonMistake: { en: mistake[0], pidgin: mistake[1] },
});

const existingLessonUpgrades: Record<string, NonNullable<Lesson["teaching"]>> = {
  "what-a-prompt-really-is": teachingUpgrade(
    ["What am I actually giving AI when I type a message?", "Wetin I really dey give AI when I type message?"],
    ["You type one sentence and get an answer that misses the point. You've probably wondered whether there is a special way to talk to AI. There isn't. Let's look at what the tool can actually see.", "You type one sentence and the answer miss the point. You fit don wonder whether special way dey to talk to AI. E no dey. Make we look wetin the tool fit actually see."],
    ["Help me with this.", "Help me with this."],
    ["Turn the notes below into a friendly WhatsApp reminder for parents in our school group. Put the date and fee on separate lines. Notes: [paste notes].", "Turn the notes below into friendly WhatsApp reminder for parents for our school group. Put date and fee for separate lines. Notes: [paste notes]."],
    ["The second prompt gives AI a task, material, audience, tone, and useful format. Nothing about it is technical.", "The second prompt give AI task, material, audience, tone, and useful format. Nothing for am be tech grammar."],
    ["The pasted notes are part of the prompt too. A prompt is more than the sentence that begins the request.", "The pasted notes still be part of the prompt. Prompt pass the sentence wey start the request."],
    ["Trying to sound clever instead of sharing the material and details AI needs.", "To dey find clever grammar instead of sharing the material and details wey AI need."]
  ),
  "why-vague-prompts-give-weak-answers": teachingUpgrade(
    ["Why does AI keep giving me generic answers?", "Why AI dey always give me general answer?"],
    ["You ask for a caption. The answer sounds polished, but it could belong to any business. You try again and get another version of the same thing. Here's what's happening: AI is filling in decisions you left open.", "You ask for caption. The answer clean, but any business fit use am. You try again and get another version of the same thing. Wetin happen be say AI dey fill decisions wey you leave open."],
    ["Write a caption for my business.", "Write caption for my business."],
    ["Write a warm Instagram caption for a small Abuja bakery announcing Saturday cinnamon-roll boxes. Pre-orders close Friday at 4pm. Keep it under 80 words and end with a simple order invitation.", "Write warm Instagram caption for small Abuja bakery wey dey announce Saturday cinnamon-roll boxes. Pre-order close Friday 4pm. Make e no pass 80 words and end with simple invitation to order."],
    ["The improved version closes the gaps that would otherwise produce generic wording.", "The improved version close the gaps wey for make the wording too general."],
    ["The useful prompt is still short. Clarity comes from the right decisions, not from writing more words.", "The useful prompt still short. Clarity dey come from the right decisions, no be plenty words."],
    ["Adding random detail after a weak answer. Add the audience, purpose, facts, limits, or format that actually changes the result.", "To add random details after weak answer. Add audience, purpose, facts, limits, or format wey really change the result."]
  ),
  "the-simple-prompt-formula": teachingUpgrade(
    ["What should I include when I don't know how to start?", "Wetin I suppose include when I no know how to start?"],
    ["The blank chat box can make a simple task feel harder than it is. You don't need a script. Use four small questions to organise your thinking: what is the task, what is the context, what must the answer respect, and what should come back?", "Blank chat box fit make simple task look hard. You no need script. Use four small questions arrange your thinking: wetin be the task, wetin be the context, wetin the answer must follow, and which kind answer you need?"],
    ["Write an email about the meeting.", "Write email about the meeting."],
    ["Write a respectful email to Mr Adeyemi asking to move tomorrow's 10am meeting. I have an appointment I cannot move. Offer Wednesday at 2pm or Thursday at 11am. Don't mention medical details. Give me a subject line and keep it under 120 words.", "Write respectful email to Mr Adeyemi to ask make tomorrow 10am meeting move. I get appointment wey I no fit shift. Offer Wednesday 2pm or Thursday 11am. No mention medical details. Give me subject line and make e no pass 120 words."],
    ["Task, context, requirements, and output are all present, but the prompt still sounds natural.", "Task, context, requirements, and output dey inside, but the prompt still sound natural."],
    ["The formula is a checklist, not a compulsory format. You can write the same information as normal sentences.", "The formula na checklist, no be compulsory format. You fit write the same information with normal sentences."],
    ["Forcing all four parts into a tiny request that was already clear. Use only the parts that help.", "To force all four parts enter small request wey already clear. Use only the parts wey help."]
  ),
  "how-to-give-ai-better-context": teachingUpgrade(
    ["Why does AI keep misunderstanding the situation?", "Why AI dey misunderstand the situation?"],
    ["You ask AI to reply to a customer. It apologises for the wrong problem and promises something your business can't offer. The tool isn't reading your mind. Let's give it the few background details that change the reply.", "You ask AI to reply customer. E apologise for wrong problem and promise wetin your business no fit offer. The tool no dey read your mind. Make we give am the few background details wey change the reply."],
    ["Reply to this customer.", "Reply this customer."],
    ["Write a calm WhatsApp reply to a customer whose delivery is two days late. The courier says it may arrive tomorrow, but that isn't confirmed. Apologise, share the update honestly, and promise another check by 4pm today. Keep it under 90 words.", "Write calm WhatsApp reply to customer wey delivery don late by two days. Courier say e fit arrive tomorrow, but dem never confirm am. Apologise, share the update honestly, and promise another check by 4pm today. Make e no pass 90 words."],
    ["Every added detail changes what a responsible reply should say. Nothing irrelevant is included.", "Every detail wey enter change wetin responsible reply suppose talk. Nothing wey no matter enter."],
    ["Useful context reduces guessing. It doesn't mean pasting your whole history.", "Useful context reduce guesswork. E no mean say make you paste your whole history."],
    ["Pasting private customer details when the task works just as well with names and identifiers removed.", "To paste private customer details when the task fit work if you remove names and identifying details."]
  ),
  "how-to-control-tone": teachingUpgrade(
    ["Can I make AI sound more like the moment and less generic?", "I fit make AI sound like the real situation and no too general?"],
    ["A customer complaint, church announcement, job email, and birthday message shouldn't sound the same. Tone isn't decoration. It helps the message fit the person reading it and what just happened.", "Customer complaint, church announcement, job email, and birthday message no suppose sound the same. Tone no be decoration. E dey help message fit the person wey dey read am and wetin just happen."],
    ["Make this sound nice.", "Make this sound nice."],
    ["Rewrite this for a customer whose order arrived damaged. Sound calm, apologetic, and responsible. Acknowledge the inconvenience before explaining the replacement steps. Keep every fact from my draft.", "Rewrite this for customer wey order arrive damaged. Make e calm, apologetic, and responsible. Acknowledge the inconvenience before you explain replacement steps. Keep every fact from my draft."],
    ["The tone words now have an audience, situation, and purpose to guide them.", "The tone words now get audience, situation, and purpose wey guide dem."],
    ["Tone works best when AI knows who is reading and what the message needs to achieve.", "Tone dey work best when AI know who dey read and wetin the message need achieve."],
    ["Asking AI to impersonate a real person. Share a short writing sample and ask it to follow the style instead.", "To ask AI make e impersonate real person. Share short writing sample and ask am to follow the style instead." ]
  ),
  "how-to-ask-for-the-right-format": teachingUpgrade(
    ["Why does ChatGPT keep writing essays when I need something usable?", "Why ChatGPT dey write essay when I need something wey I fit use?"],
    ["You ask for an event plan and receive six long paragraphs. The ideas may be fine, but you can't see what to do first. AI chose a format because you didn't. Let's ask for the shape that fits the next action.", "You ask for event plan and receive six long paragraphs. The ideas fit okay, but you no fit see wetin to do first. AI choose format because you no choose am. Make we ask for the shape wey fit the next action."],
    ["Plan our community event.", "Plan our community event."],
    ["Create a checklist for our community event. Group tasks under two weeks before, one week before, and event day. Add an owner and deadline beside each task. Use only the details below: [paste details].", "Create checklist for our community event. Group tasks under two weeks before, one week before, and event day. Add owner and deadline beside every task. Use only the details below: [paste details]."],
    ["The output is now organised around action, timing, and responsibility.", "The output now arrange around action, timing, and responsibility."],
    ["The best format depends on what you will do next: read, compare, send, present, or act.", "The best format depend on wetin you wan do next: read, compare, send, present, or act."],
    ["Choosing a table because it looks organised even when a short message or checklist would be easier to use.", "To choose table because e look organised even when short message or checklist go easier to use." ]
  ),
};

for (const module of [promptingFoundationsModule, promptingContextToneFormatModule]) {
  for (const lesson of module.lessons) {
    lesson.teaching = existingLessonUpgrades[lesson.slug];
  }
}

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
  releaseStatus: "live",
  modules: [
    promptingFoundationsModule,
    promptingContextToneFormatModule,
    promptingRefiningResponsesModule,
    promptingBetterHabitsModule,
  ],
  startHere: promptingBasicsStartHere,
  finalWrapUp: promptingPlaybook,
};
