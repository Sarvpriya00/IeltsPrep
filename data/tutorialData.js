/**
 * IELTS Academic Writing Masterclass Tutorial & Structural Blueprints
 */

export const tutorialData = {
  title: "Band 8/9 IELTS Academic Writing Masterclass",
  subtitle: "Official structural blueprints, examiner scoring criteria, and high-scoring vocabulary cheat sheets.",

  blueprints: {
    task1: {
      title: "Task 1: Academic Report Structural Blueprint (150+ Words)",
      paragraphs: [
        {
          name: "Paragraph 1: Introduction",
          purpose: "Paraphrase the prompt statement using synonyms.",
          template: "The [chart/graph/table/map/diagram] [illustrates / presents data on / compares] [topic] from [start year] to [end year].",
          rules: ["Write 1-2 sentences only.", "Never copy exact words from the prompt.", "Do not state specific numbers in the introduction."]
        },
        {
          name: "Paragraph 2: Overview (MANDATORY for Band 7+)",
          purpose: "Summarize 2-3 main overall trends, highest points, or key structural changes.",
          template: "Overall, it is clear that [main trend 1], whereas [main trend 2]. In addition, [key contrast or feature].",
          rules: ["MANDATORY for Band 7.0+.", "Highlight overall trends or patterns.", "NEVER include raw numbers or percentages in the overview!"]
        },
        {
          name: "Paragraph 3: Body Paragraph 1 (Specific Data)",
          purpose: "Group the first logical category of data and report specific numbers.",
          template: "Looking at the details in more detail, [category A] began at [number] in [year], before [rising/falling] to [number] in [year].",
          rules: ["Always cite raw numbers/units.", "Make direct comparisons between data categories.", "Group similar trends together."]
        },
        {
          name: "Paragraph 4: Body Paragraph 2 (Specific Data)",
          purpose: "Report the remaining data categories and secondary comparisons.",
          template: "In contrast, [category B] recorded a different pattern, [increasing/decreasing] from [number] to [number].",
          rules: ["Highlight key contrasts.", "Maintain formal academic tone."]
        }
      ]
    },

    task2: {
      title: "Task 2: Academic Essay Blueprints (250+ Words)",
      essayTypes: [
        {
          type: "Agree / Disagree (Opinion)",
          structure: [
            "Para 1: Intro (Paraphrase statement + Clear Thesis stating your position)",
            "Para 2: Body 1 (First strong argument supporting your position + Example)",
            "Para 3: Body 2 (Second strong argument supporting your position + Example)",
            "Para 4: Conclusion (Restate thesis + Summarize main points)"
          ]
        },
        {
          type: "Discuss Both Views & Give Opinion",
          structure: [
            "Para 1: Intro (Paraphrase prompt + State your opinion clearly)",
            "Para 2: Body 1 (Discuss View A and why proponents support it)",
            "Para 3: Body 2 (Discuss View B and why proponents support it + why you agree/disagree)",
            "Para 4: Conclusion (Summarize both views and state final opinion)"
          ]
        },
        {
          type: "Problem & Solution",
          structure: [
            "Para 1: Intro (Paraphrase problem statement + State causes/solutions will be analyzed)",
            "Para 2: Body 1 (Main Causes of the problem with explanation)",
            "Para 3: Body 2 (Effective Solutions that governments/individuals can implement)",
            "Para 4: Conclusion (Summarize causes and stress urgency of solutions)"
          ]
        }
      ]
    }
  },

  scoringCriteria: [
    {
      code: "TA/TR",
      name: "Task Achievement / Response (25%)",
      requirements: [
        "Task 1: Present an explicit Overview paragraph highlighting key trends.",
        "Task 2: Address all parts of the prompt equally.",
        "Present a clear position throughout the essay.",
        "Support main points with relevant explanations and real-world examples."
      ]
    },
    {
      code: "CC",
      name: "Coherence & Cohesion (25%)",
      requirements: [
        "Organize ideas logically into 4 distinct paragraphs.",
        "Use a clear topic sentence at the start of every body paragraph.",
        "Use cohesive devices (Furthermore, Conversely, Consequently) seamlessly."
      ]
    },
    {
      code: "LR",
      name: "Lexical Resource (25%)",
      requirements: [
        "Use a wide range of academic vocabulary and precise collocations.",
        "Avoid repetitive words by using accurate paraphrasing.",
        "Ensure correct word formation and spelling."
      ]
    },
    {
      code: "GRA",
      name: "Grammatical Range & Accuracy (25%)",
      requirements: [
        "Use a mix of simple, compound, and complex sentences.",
        "Incorporate conditionals, relative clauses, and passive voice structures.",
        "Maintain high accuracy in tense, agreement, and punctuation."
      ]
    }
  ],

  vocabularyBank: {
    trendsUp: [
      { word: "surged / skyrocketed", usage: "The number of jobs surged to a peak of 20 million." },
      { word: "climbed steadily", usage: "Retail sales climbed steadily over the 10-year period." },
      { word: "experienced an upward trend", usage: "Healthcare witnessed a significant upward trend." }
    ],
    trendsDown: [
      { word: "plummeted / dropped sharply", usage: "Agricultural jobs plummeted to an all-time low." },
      { word: "declined gradually", usage: "Participation declined gradually from 30 to 5." }
    ],
    fluctuations: [
      { word: "fluctuated wildly", usage: "Table tennis numbers fluctuated wildly between 2000 and 2010." },
      { word: "remained relatively stable / plateaued", usage: "Enrollment plateaued at approximately 50 students." }
    ]
  }
};
