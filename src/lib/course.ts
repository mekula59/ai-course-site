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
