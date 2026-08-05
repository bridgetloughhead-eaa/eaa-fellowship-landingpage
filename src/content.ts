// ─────────────────────────────────────────────────────────────────────────────
//  APPLICATIONS OPEN / CLOSED
//
//  false → the site shows the "between rounds" page (newsletter + EAGx).
//  true  → the site shows the full "Apply now" page.
//
//  To turn applications back on for the next round, see SWITCHING.md in the
//  repo root. It is a three-step change: this flag, the dates in siteContent
//  below, and one commented block in index.html.
// ─────────────────────────────────────────────────────────────────────────────
export const courseOpen = false;

// ─────────────────────────────────────────────────────────────────────────────
//  BETWEEN-ROUNDS PAGE CONTENT
//  Shown when courseOpen === false. Sections it does not define (the syllabus
//  topics, testimonials, "who's behind this", the footer) are reused from
//  siteContent below, so those only need editing in one place.
// ─────────────────────────────────────────────────────────────────────────────
export const betweenRounds = {
  links: {
    newsletter: "https://eaa.org.au/newsletter",
    eagx: "https://effectivealtruism.org.au/get-involved/eagx/?utm_source=introcourse&utm_medium=referral&utm_campaign=eagx26&utm_content=between_rounds",
    careerAdvising: "https://eaa.org.au/1-to-1",
    localCommunity: "https://effectivealtruism.org.au/get-involved/local-community/",
    bestCharities: "https://effectivealtruism.org.au/best-charities/",
  },
  navigation: {
    newsletterButton: "Get course updates",
  },
  hero: {
    // The hero headline itself ("What if you spent six weeks...") is markup in
    // BetweenRoundsPage.tsx, matching ApplyPage.tsx. Only the status line below
    // it differs between the two states.
    statusLine: "The next round opens in early 2027",
    note: "We'll email you when applications open.",
    primaryButton: "Get course updates",
    secondaryLinkText: "Explore Effective Altruism Australia",
  },
  statusStrip: [
    "Applications closed",
    "Next round: early 2027",
    "Free",
    "6 weeks",
    "Online with some in-person options",
  ],
  eagx: {
    eyebrow: "Happening this year",
    title: "EAGxAustralasia 2026",
    body: "Three days with people working out how to do more good, and what to do about it. Talks, workshops and one-on-ones with people working on the problems this course covers.",
    details: "27 to 29 November · Melbourne Connect, Melbourne",
    button: "Learn more",
  },
  inTheMeantime: {
    title: "In the meantime",
    items: [
      {
        title: "Best charities",
        desc: "where a donation goes furthest, and the evidence behind each one.",
        linkKey: "bestCharities" as const,
      },
      {
        title: "1:1 career advising",
        desc: "talk through your options with someone who knows the landscape.",
        linkKey: "careerAdvising" as const,
      },
      {
        title: "Local events and meetups",
        desc: "keep the conversation going in your city.",
        linkKey: "localCommunity" as const,
      },
    ],
  },
  // Plain-text version of siteContent.theSyllabus.curriculumCreditHtml. Keeps
  // the attribution to CEA but without the link, so the between-rounds page
  // doesn't send people off to the reading list. The apply page keeps its link.
  syllabusCredit: "The syllabus draws on the Introductory EA Program, a curriculum developed by the Centre for Effective Altruism and used by groups around the world.",
  finalCta: {
    eyebrow: "Next round: early 2027",
    title: "Be first to hear when applications open.",
    body: "Join the Effective Altruism Australia newsletter and we'll let you know when the next round opens.",
    button: "Join the newsletter",
  },
  // No FAQ on this page: with applications closed there is nothing to answer
  // that the hero and the status strip don't already say.
};

// ─────────────────────────────────────────────────────────────────────────────
//  APPLY-ROUND PAGE CONTENT
//  Shown when courseOpen === true. Also supplies the shared sections used by
//  the between-rounds page (syllabus, testimonials, who's behind this, footer).
// ─────────────────────────────────────────────────────────────────────────────
export const siteContent = {
  links: {
    mainWebsite: "https://effectivealtruism.org.au",
    applyForm: "https://forms.gle/31vLBvQA9g4KQmYS7",
    logoFullColor: "https://effective-altruism-australia.github.io/design-guidelines/large-logo-full-colour.svg",
    logoWhite: "https://effective-altruism-australia.github.io/design-guidelines/large-logo-white.svg",
  },
  navigation: {
    applyButton: "Apply now",
  },
  hero: {
    staggeredText: [
      "What if you spent",
      "six weeks thinking",
      "about the world's",
      "biggest problems?",
      "And what you could",
      "do about them."
    ],
    description: "The Intro to Effective Altruism Course is a free 6-week program where you find the time to work through that question with a small group of curious people.",
    applyButton: "Apply now",
    closingDate: "Applications close Monday 13 July 2026",
    applyNote: "Apply early to secure your preferred time slot.",
  },
  quickFacts: ["Free", "6 weeks, 20 July – 29 August", "1.5hr a week + 1hr readings", "Online with some in-person options"],
  theGap: {
    quote: "The world is awful. The world is much better. The world can be much better.",
    citationAuthor: "Max Roser",
    citationTitle: "\"The world is awful. The world is much better. The world can be much better.\"",
    citationSource: "Our World in Data",
    citationLink: "https://ourworldindata.org/much-better-awful-can-be-better",
  },
  whyEa: {
    title: "Why effective altruism?",
    paragraphs: [
      "If the world can be much better, how do we get there? It's hard to know where to start.",
      "Many of us devote our career, time or money to causes we care about, but it is hard to know whether that effort goes as far as it could. We rarely get clear information to compare our options. When we do, the differences can be surprisingly large. They depend on where an opportunity happens to be, rather than how much people care.",
      "<a href=\"https://www.effectivealtruism.org/articles/introduction-to-effective-altruism\" target=\"_blank\" rel=\"noopener noreferrer\">Effective altruism</a> is the practice of taking this line of thinking seriously, using evidence and careful reasoning to find ways to help others as much as we can, and then acting on them. At its core it is a question: how can we do more good?",
      "The Intro to Effective Altruism Course is six weeks set aside to explore that question properly, alongside a small group of people working through the same ideas."
    ]
  },
  theSyllabus: {
    title: "What the EA Intro Course covers",
    description1: "Each week for six weeks, you explore a different way of thinking about how to do good. You read a curated piece, meet your small group led by volunteer facilitators, and talk it through.",
    curriculumCreditHtml: "The syllabus draws on the <a href=\"https://www.effectivealtruism.org/courses/introductory-program\" target=\"_blank\" rel=\"noopener noreferrer\">Introductory EA Program</a>, a curriculum developed by the Centre for Effective Altruism and used by groups around the world.",
    topicsTitle: "Questions you'll explore:",
    topics: [
      "How much more good can the best options do?",
      "Where does a donation save the most lives?",
      "How much should we care about animal suffering?",
      "What do we owe future generations?",
      "What could AI mean for humanity?",
      "How far can your career and giving go?"
    ],
    description2: "No background knowledge needed. Just bring the questions you already have."
  },
  howItWorks: {
    title: "How it works",
    steps: [
      { step: 1, title: "Apply", desc: "Fill out the short application form — it only takes a few minutes." },
      { step: 2, title: "Get matched", desc: "We'll place you in a small group of 5-7 with an experienced facilitator." },
      { step: 3, title: "Show up", desc: "One 90-minute session a week, plus about an hour of reading. 20 July to 29 August. Free." }
    ],
    note: ""
  },
  whosBehindThis: {
    title: "Who's behind this",
    paragraphsHtml: [
      "We're <a href=\"https://effectivealtruism.org.au\" target=\"_blank\" rel=\"noopener noreferrer\">Effective Altruism Australia</a>, a nonprofit that's been running community programs since 2022. We've seen what happens when people get the space to think this through: careers shift, giving changes, people find a community they didn't know existed.",
      "It's free because our programs are funded by the <a href=\"https://www.effectivealtruism.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Centre for Effective Altruism</a>, a global organisation that supports EA community building worldwide."
    ]
  },
  testimonial: {
    title: "What past participants say",
    quote: "I'd been thinking about these ideas for a while. The course was an amazing place to meet other people, ask questions, and it gave me the confidence to dive into a career change.",
    citation: "— Kevin Rassool, Operations, Strategy & Community Building @ High Impact Athletes"
  },
  moreTestimonials: [
    {
      quote: "The thoughts I'm having in my spare time are actually worth pursuing... getting in touch with EA will help me get a broader reach for these ideas.",
      citation: "— Cameron, 2026 course participant"
    },
    {
      quote: "The course has opened my eyes to what altruism means to many people. It isn't one thing... it has provided tools I can use to support my arguments. I am keen to start.",
      citation: "— Liz, 2026 course participant"
    },
    {
      quote: "I was wanting to change my career to something more meaningful... this clarified that into wanting to do something meaningful and effective.",
      citation: "— Andrew, 2026 course participant"
    }
  ],
  whatComesNext: {
    title: "The course is just the start.",
    items: [
      { title: "1:1 career advising", desc: "to talk through your options with someone who knows the landscape", link: "https://eaa.org.au/1-to-1" },
      { title: "EAGxAustralasia", desc: "our flagship annual conference for the effective altruism community in Australia and New Zealand. 27–29 November, Melbourne.", link: "http://eaa.org.au/eagx" },
      { title: "Local events and meetups", desc: "to keep the conversation going in your city", link: "https://effectivealtruism.org.au/get-involved/local-community/" }
    ]
  },
  finalCta: {
    dateRange: "Course runs 20 July – 29 August 2026 · Applications close Monday 13 July",
    title: "Six weeks could change how you think about doing good.",
    applyButton: "Apply now",
    secondaryText: "Want updates?",
    secondaryLinkText: "Sign up for our newsletter →",
    secondaryLinkUrl: "https://eaa.org.au/newsletter"
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        q: "Will I be the only one who's new to this?",
        a: "Most people who join have never been involved in EA. You'll be in good company."
      },
      {
        q: "What if I disagree with some of the ideas?",
        a: "That's welcome. The readings present strong arguments, but the discussions are genuinely exploratory. Past cohorts have included people who challenged the ideas throughout, and those were often the best conversations."
      },
      {
        q: "Is it really free?",
        a: "Yes. EAA is a nonprofit. We run this because we think these questions matter."
      }
    ]
  },
  contact: {
    text: "Questions? Email us at",
    email: "community@eaa.org.au"
  },
  footer: {
    contact: {
      email: "info@eaa.org.au",
      phone: "0492 841 596",
      address: "PO Box 550 Doncaster Victoria 3108",
    },
    social: [
      { name: "LinkedIn", url: "https://au.linkedin.com/company/effective-altruism-australia" },
      { name: "Facebook", url: "https://www.facebook.com/effectivealtruismaustralia" },
      { name: "YouTube", url: "https://www.youtube.com/channel/UCB7RsmYLb7QhsxIGISsqnew" },
      { name: "X", url: "https://twitter.com/EA_Aus" },
    ],
    keyPages: [
      { label: "Other Ways to Donate", url: "https://effectivealtruism.org.au/other-ways-to-donate/" },
      { label: "Best Charities", url: "https://effectivealtruism.org.au/best-charities/" },
      { label: "Get Involved", url: "https://effectivealtruism.org.au/get-involved/" },
      { label: "Latest News & Resources", url: "https://effectivealtruism.org.au/latest-news-and-resources/" },
      { label: "About Us", url: "https://effectivealtruism.org.au/about-us/" },
      { label: "Contact Us", url: "https://effectivealtruism.org.au/contact/" },
    ],
    legalTextHtml: 'Effective Altruism Australia (<a href="https://www.acnc.gov.au/charity/charities?search=87608863467" target="_blank" rel="noopener noreferrer">ABN 87 608 863 467</a>) and Effective Altruism Australia Environment (<a href="https://www.acnc.gov.au/charity/charities?search=57659447417" target="_blank" rel="noopener noreferrer">ABN 57 659 447 417</a>) are endorsed as Deductible Gift Recipients by the Australian Taxation Office. Donations of $2 or more are tax deductible in Australia.',
    copyright: "© 2026 Effective Altruism Australia. All rights reserved.",
    privacyPolicy: "https://effectivealtruism.org.au/privacy-policy",
    terms: "https://effectivealtruism.org.au/terms",
  }
};
