export const task2Data = [
  // LEVEL 1: Understanding the Prompt (Band 5 to 5.5)
  {
    type: "mcq",
    level: 1,
    skill: "task2",
    question: "If an essay prompt asks 'To what extent do you agree or disagree?', which MUST you do?",
    options: ["Discuss both sides equally without giving your opinion.", "Give a clear opinion in the introduction.", "Only discuss the advantages."],
    answer: "Give a clear opinion in the introduction.",
    explanation: "If the prompt asks for your opinion ('agree/disagree'), you MUST state your position clearly in the introduction to score a Band 6 or higher."
  },
  {
    type: "error-spot",
    level: 1,
    skill: "task2",
    question: "Identify the informal phrase in this introduction:",
    text: "In this essay, I will talk about why fast food is bad for people.",
    errorPhrase: "talk about",
    correctPhrase: "discuss",
    explanation: "'Talk about' is spoken English. Use 'discuss', 'examine', or 'analyze'."
  },
  {
    type: "mcq",
    level: 1,
    skill: "task2",
    question: "What does 'Discuss both views and give your opinion' require?",
    options: ["Only writing about my opinion.", "Writing one paragraph for View A, one for View B, and stating my opinion clearly.", "Writing only about the view I disagree with."],
    answer: "Writing one paragraph for View A, one for View B, and stating my opinion clearly.",
    explanation: "You must cover all parts of the prompt. If you ignore one view, your Task Response score drops to a maximum of 5."
  },
  {
    type: "tap-choice",
    level: 1,
    skill: "task2",
    question: "Select the appropriate academic tone:",
    text: "[You can easily see that/It is evident that] crime is increasing in urban areas.",
    answer: "It is evident that",
    explanation: "Avoid using 'You' in academic essays. Use passive structures or 'It is' constructs."
  },
  {
    type: "error-spot",
    level: 1,
    skill: "task2",
    question: "Find the informal slang:",
    text: "Many people think that getting a degree is super important.",
    errorPhrase: "super important",
    correctPhrase: "crucial",
    explanation: "'Super' is spoken slang. Use 'crucial', 'vital', or 'essential'."
  },

  // LEVEL 2: The Thesis Statement (Band 6 to 6.5)
  {
    type: "ordering",
    level: 2,
    skill: "task2",
    question: "Order these sentences to create a strong Introduction paragraph:",
    steps: [
      "It is often argued that university education should be completely free for all students.",
      "While this would certainly increase access to higher education, it could also place a massive burden on taxpayers.",
      "In my opinion, I completely agree that higher education should be free because it promotes social equality.",
      "This essay will discuss the benefits of free education before presenting a final conclusion."
    ],
    explanation: "1. Hook/Background. 2. Paraphrase debate. 3. Thesis statement (opinion). 4. Outline."
  },
  {
    type: "mcq",
    level: 2,
    skill: "task2",
    question: "Which of the following is the best thesis statement?",
    options: ["I agree with this statement because it has many advantages and disadvantages.", "I strongly believe that implementing a four-day workweek improves employee productivity and mental health.", "This essay agrees with the topic."],
    answer: "I strongly believe that implementing a four-day workweek improves employee productivity and mental health.",
    explanation: "A strong thesis gives your opinion AND briefly states your main reasons."
  },
  {
    type: "error-spot",
    level: 2,
    skill: "task2",
    question: "Identify the empty, memorized phrase:",
    text: "This topic is highly controversial and people have different opinions about it.",
    errorPhrase: "This topic is highly controversial and people have different opinions about it.",
    correctPhrase: "",
    explanation: "Examiners hate memorized, empty sentences that add no meaning to the specific prompt. Delete them."
  },
  {
    type: "tap-choice",
    level: 2,
    skill: "task2",
    question: "Select the better outline statement:",
    text: "[This essay will explain the reasons for this trend./I will write about why this is happening.]",
    answer: "This essay will explain the reasons for this trend.",
    explanation: "'This essay will...' is the standard academic way to outline your essay structure."
  },
  {
    type: "typing",
    level: 2,
    skill: "task2",
    question: "Complete the thesis phrase: 'In my _________, the benefits outweigh the drawbacks.'",
    answer: "opinion",
    explanation: "'In my opinion' or 'In my view' clearly signals your position."
  },

  // LEVEL 3: PEEL Paragraph Structure (Band 6.5 - 7)
  {
    type: "ordering",
    level: 3,
    skill: "task2",
    question: "Order these sentences to form a perfect PEEL paragraph:",
    steps: [
      "The primary advantage of remote work is the significant reduction in commuting time.",
      "By not traveling to an office every day, employees can save several hours each week.",
      "For instance, a recent study showed that the average London worker saves over ten hours a week by working from home.",
      "Consequently, this extra time can be spent on exercise or family, leading to a better work-life balance."
    ],
    explanation: "1. Point (Main idea). 2. Explain (Why/How). 3. Example (Evidence). 4. Link (Result)."
  },
  {
    type: "tap-choice",
    level: 3,
    skill: "task2",
    question: "Select the most appropriate phrase to introduce an example:",
    text: "Many cities are suffering from severe air pollution. [For example/As a result], Beijing regularly issues 'red alerts' advising citizens to stay indoors.",
    answer: "For example",
    explanation: "You are giving a specific real-world instance (Beijing) to prove the point."
  },
  {
    type: "mcq",
    level: 3,
    skill: "task2",
    question: "What is the purpose of the 'Link' sentence in a PEEL paragraph?",
    options: ["To introduce a completely new idea.", "To show the result of your example and tie it back to the essay prompt.", "To summarize the whole essay."],
    answer: "To show the result of your example and tie it back to the essay prompt.",
    explanation: "The Link sentence (e.g., 'Consequently, this leads to...') shows *why* your example proves your point."
  },
  {
    type: "error-spot",
    level: 3,
    skill: "task2",
    question: "Identify the illogical transition:",
    text: "Fast food is unhealthy. Therefore, for instance, McDonalds sells burgers.",
    errorPhrase: "Therefore, for instance,",
    correctPhrase: "For instance,",
    explanation: "Never stack transition words incorrectly. 'Therefore' and 'for instance' serve completely different functions."
  },
  {
    type: "typing",
    level: 3,
    skill: "task2",
    question: "Type the missing word to introduce an explanation: 'This is _______ people need to earn a living.' (Starts with 'b')",
    answer: "because",
    explanation: "'This is because' is a simple but effective way to move from your Point to your Explanation."
  },

  // LEVEL 4: Avoiding Generalizations (Band 7 - 7.5)
  {
    type: "error-spot",
    level: 4,
    skill: "task2",
    question: "Find the over-generalization in this sentence:",
    text: "All teenagers are addicted to their smartphones, which causes depression.",
    errorPhrase: "All teenagers",
    correctPhrase: "Many teenagers",
    explanation: "Never use absolute words like 'All', 'Every', or 'Always'. Use hedging words like 'Many' or 'Often'."
  },
  {
    type: "mcq",
    level: 4,
    skill: "task2",
    question: "Which sentence uses 'hedging' correctly to sound objective?",
    options: ["Playing violent video games definitely makes children violent.", "Playing violent video games tends to increase aggressive behavior in some children.", "Playing violent video games always results in criminal behavior."],
    answer: "Playing violent video games tends to increase aggressive behavior in some children.",
    explanation: "Academic writing relies on probability ('tends to', 'in some children') rather than absolute certainty."
  },
  {
    type: "tap-choice",
    level: 4,
    skill: "task2",
    question: "Select the better academic verb:",
    text: "Social media [proves/suggests] that people crave connection.",
    answer: "suggests",
    explanation: "Unless it's hard scientific law, use 'suggests', 'indicates', or 'implies' instead of 'proves'."
  },
  {
    type: "error-spot",
    level: 4,
    skill: "task2",
    question: "Find the absolute word to remove:",
    text: "If the government bans cars, pollution will completely disappear.",
    errorPhrase: "completely disappear",
    correctPhrase: "decrease significantly",
    explanation: "Pollution won't 'completely disappear' (factories still exist). Hedging makes your argument logical and defensible."
  },
  {
    type: "typing",
    level: 4,
    skill: "task2",
    question: "Complete this hedged statement: 'A ___________ number of students are choosing to study abroad.' (Starts with 's')",
    answer: "significant",
    explanation: "'A significant number' or 'a substantial proportion' sounds much better than 'a lot' or 'all'."
  },

  // LEVEL 5: Concessions and Complex Arguments (Band 7.5 - 8)
  {
    type: "mcq",
    level: 5,
    skill: "task2",
    question: "What is the purpose of a 'Concession Paragraph'?",
    options: ["To completely change your opinion halfway.", "To acknowledge the opposing view before explaining why your view is stronger.", "To list all possible disadvantages."],
    answer: "To acknowledge the opposing view before explaining why your view is stronger.",
    explanation: "A concession paragraph shows the examiner you understand the nuance of the debate."
  },
  {
    type: "sentence-combine",
    level: 5,
    skill: "task2",
    question: "Combine these ideas into a complex concession sentence using 'While':",
    sentences: ["Tourism brings money to developing countries.", "Tourism often destroys local cultures."],
    hint: "Start with 'While...'",
    answerRegex: /While tourism brings money to developing countries,? it (often )?destroys local cultures\./i,
    explanation: "Starting with 'While' perfectly frames the contrast."
  },
  {
    type: "tap-choice",
    level: 5,
    skill: "task2",
    question: "Select the best phrase to counter a point you just conceded:",
    text: "Admittedly, taxes will increase. [Nevertheless/Similarly], the long-term benefits to public health are undeniable.",
    answer: "Nevertheless",
    explanation: "'Nevertheless' or 'However' pivots back to your main argument."
  },
  {
    type: "error-spot",
    level: 5,
    skill: "task2",
    question: "Identify the weak conclusion phrase:",
    text: "In a nutshell, the advantages outweigh the disadvantages.",
    errorPhrase: "In a nutshell",
    correctPhrase: "In conclusion",
    explanation: "'In a nutshell' is informal idiom. Always use 'In conclusion' or 'To conclude'."
  },
  {
    type: "mcq",
    level: 5,
    skill: "task2",
    question: "Which of these makes a conclusion Band 8 level?",
    options: ["Repeating the exact same thesis statement from the introduction.", "Adding a brand new argument.", "Summarizing the main points and providing a final thought or recommendation."],
    answer: "Summarizing the main points and providing a final thought or recommendation.",
    explanation: "A Band 8 conclusion paraphrases the main points and leaves the reader with a final, insightful recommendation or prediction."
  }
];
