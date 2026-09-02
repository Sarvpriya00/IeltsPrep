export const cohesionData = [
  // LEVEL 1: Basic Sequencing (Band 5 to 5.5)
  {
    type: "mcq",
    level: 1,
    skill: "cohesion",
    question: "Which linking word is best used to add a similar point?",
    options: ["However,", "Furthermore,", "Consequently,"],
    answer: "Furthermore,",
    explanation: "'Furthermore' is used to add more information or another point."
  },
  {
    type: "tap-choice",
    level: 1,
    skill: "cohesion",
    question: "Select the correct transition word:",
    text: "Many people support the new policy. [Therefore/On the other hand], there are some who strongly oppose it.",
    answer: "On the other hand",
    explanation: "Because the second sentence introduces opposing views, 'On the other hand' is the correct contrast marker."
  },
  {
    type: "error-spot",
    level: 1,
    skill: "cohesion",
    question: "Identify the incorrect linking word for concluding:",
    text: "To start with, we must reduce pollution.",
    errorPhrase: "To start with",
    correctPhrase: "To conclude",
    explanation: "'To start with' introduces the first point, not a conclusion."
  },
  {
    type: "tap-choice",
    level: 1,
    skill: "cohesion",
    question: "Select the correct sequence word:",
    text: "[Firstly/Finally], we need to look at the causes of the problem before finding solutions.",
    answer: "Firstly",
    explanation: "You begin an argument with 'Firstly' or 'First of all'."
  },
  {
    type: "mcq",
    level: 1,
    skill: "cohesion",
    question: "Which word indicates a result?",
    options: ["Although", "Therefore", "Because"],
    answer: "Therefore",
    explanation: "'Therefore', 'Thus', and 'Consequently' all indicate a result."
  },

  // LEVEL 2: Identifying the Topic Sentence (Band 6)
  {
    type: "mcq",
    level: 2,
    skill: "cohesion",
    question: "Which of these is a strong Topic Sentence for a paragraph about the benefits of public transport?",
    options: ["For example, buses in London run 24 hours a day.", "The primary advantage of public transport is its positive environmental impact.", "Therefore, public transport is better than driving."],
    answer: "The primary advantage of public transport is its positive environmental impact.",
    explanation: "A topic sentence must introduce the main idea of the paragraph clearly."
  },
  {
    type: "ordering",
    level: 2,
    skill: "cohesion",
    question: "Order these sentences to form a logical paragraph:",
    steps: [
      "First, online learning provides unparalleled flexibility for students.",
      "They can access lectures and materials at any time that suits them.",
      "This means that individuals with full-time jobs can still pursue higher education.",
      "As a result, distance learning is becoming increasingly popular worldwide."
    ],
    explanation: "Topic Sentence -> Explanation -> Real-world Example/Implication -> Concluding Result."
  },
  {
    type: "error-spot",
    level: 2,
    skill: "cohesion",
    question: "Identify the sentence that breaks the flow (doesn't belong):",
    text: "Exercise improves cardiovascular health. It also boosts mood. Video games are fun to play. Moreover, it strengthens muscles.",
    errorPhrase: "Video games are fun to play.",
    correctPhrase: "",
    explanation: "The paragraph is about the benefits of exercise. Video games are off-topic."
  },
  {
    type: "tap-choice",
    level: 2,
    skill: "cohesion",
    question: "Select the correct linker:",
    text: "The internet is useful. [For instance/However], it can be a major distraction.",
    answer: "However",
    explanation: "The sentence shifts from a positive to a negative, requiring a contrast linker."
  },
  {
    type: "mcq",
    level: 2,
    skill: "cohesion",
    question: "Which phrase introduces an example?",
    options: ["In conclusion,", "To illustrate,", "In addition,"],
    answer: "To illustrate,",
    explanation: "'To illustrate', 'For instance', and 'For example' introduce examples."
  },

  // LEVEL 3: Advanced Transition Words (Band 6.5 - 7)
  {
    type: "tap-choice",
    level: 3,
    skill: "cohesion",
    question: "Select the most appropriate formal linking phrase:",
    text: "The cost of living has skyrocketed in major cities. [As a result/So], many families are moving to the suburbs.",
    answer: "As a result",
    explanation: "'As a result' is a formal, academic transition. 'So' is generally considered too informal for IELTS essays when starting a sentence."
  },
  {
    type: "error-spot",
    level: 3,
    skill: "cohesion",
    question: "Identify the incorrect or unnatural transition:",
    text: "Firstly, solar power is renewable. Besides, it is much cleaner than coal.",
    errorPhrase: "Besides,",
    correctPhrase: "Moreover,",
    explanation: "'Besides' is often used in spoken English. 'Moreover' or 'Furthermore' are much better for adding points in academic writing."
  },
  {
    type: "mcq",
    level: 3,
    skill: "cohesion",
    question: "Which word is a synonym for 'However'?",
    options: ["Therefore", "Nevertheless", "Moreover"],
    answer: "Nevertheless",
    explanation: "'Nevertheless' and 'Nonetheless' are excellent formal synonyms for 'However'."
  },
  {
    type: "typing",
    level: 3,
    skill: "cohesion",
    question: "Type the missing word: '_________, it can be argued that fast food is convenient.' (Hint: To begin with)",
    answer: "Firstly",
    explanation: "'Firstly' or 'First and foremost' formally introduce the first main argument."
  },
  {
    type: "error-spot",
    level: 3,
    skill: "cohesion",
    question: "Find the repetitive linking word:",
    text: "Furthermore, the government should act. Furthermore, they should raise taxes.",
    errorPhrase: "Furthermore,",
    correctPhrase: "In addition,",
    explanation: "Vary your linking words. Do not repeat 'Furthermore' in consecutive sentences."
  },

  // LEVEL 4: Demonstrative Referencing (Band 7 - 7.5)
  {
    type: "mcq",
    level: 4,
    skill: "cohesion",
    question: "How can you link these sentences naturally without a standard transition word?\n'Crime rates are rising. The government must act.'",
    options: ["Crime rates are rising. Firstly, the government must act.", "Crime rates are rising. This alarming trend requires immediate government action.", "Crime rates are rising. However, the government must act."],
    answer: "Crime rates are rising. This alarming trend requires immediate government action.",
    explanation: "Using demonstrative pronouns with summary nouns (e.g., 'This alarming trend') is a Band 8+ technique for seamless cohesion."
  },
  {
    type: "typing",
    level: 4,
    skill: "cohesion",
    question: "Type a single demonstrative word to connect this sentence back to the previous one: 'Automated machines are replacing factory workers. _____ technological shift has led to widespread unemployment.'",
    answer: "This",
    explanation: "Using 'This' followed by a summary phrase creates excellent flow."
  },
  {
    type: "error-spot",
    level: 4,
    skill: "cohesion",
    question: "Identify the vague reference:",
    text: "Pollution is increasing. It is a big problem. People must solve it.",
    errorPhrase: "It",
    correctPhrase: "This environmental issue",
    explanation: "Using 'It' too many times is vague. Clarify what 'It' is by using demonstrative phrasing ('This issue')."
  },
  {
    type: "tap-choice",
    level: 4,
    skill: "cohesion",
    question: "Select the best reference phrase:",
    text: "Many species are going extinct. [This issue/These animals] must be protected.",
    answer: "These animals",
    explanation: "While 'This issue' is okay, 'These animals' specifically references the species going extinct."
  },
  {
    type: "mcq",
    level: 4,
    skill: "cohesion",
    question: "What does 'the former' refer to?",
    options: ["The second item mentioned.", "The first item mentioned.", "Neither item mentioned."],
    answer: "The first item mentioned.",
    explanation: "'The former' refers to the first of two things just mentioned. 'The latter' refers to the second."
  },

  // LEVEL 5: Concession and Nuance (Band 7.5 - 8)
  {
    type: "mcq",
    level: 5,
    skill: "cohesion",
    question: "Select the sentence that correctly introduces a concession:",
    options: ["Admittedly, playing video games can improve hand-eye coordination; nevertheless, the sedentary lifestyle it promotes is highly damaging.", "Playing video games can improve hand-eye coordination. Furthermore, the sedentary lifestyle it promotes is highly damaging.", "Since playing video games can improve hand-eye coordination, the sedentary lifestyle it promotes is highly damaging."],
    answer: "Admittedly, playing video games can improve hand-eye coordination; nevertheless, the sedentary lifestyle it promotes is highly damaging.",
    explanation: "The 'Admittedly ... nevertheless' structure acknowledges an opposing argument and then shuts it down."
  },
  {
    type: "ordering",
    level: 5,
    skill: "cohesion",
    question: "Order the sentences to build a Band 8 Concession Paragraph:",
    steps: [
      "Admittedly, there are some minor benefits to relying heavily on fast food.",
      "For instance, it provides a cheap and convenient option for busy, working families.",
      "However, these short-term conveniences are vastly outweighed by the long-term health consequences.",
      "A diet high in processed foods inevitably leads to chronic conditions such as obesity and heart disease."
    ],
    explanation: "Concession logic: 1. Acknowledge the other side. 2. Explain their point briefly. 3. Introduce your counter-argument. 4. Prove it."
  },
  {
    type: "tap-choice",
    level: 5,
    skill: "cohesion",
    question: "Select the best phrase to counter an argument:",
    text: "Some argue that space exploration is a waste of money. [Therefore/Conversely], I believe it drives technological innovation.",
    answer: "Conversely",
    explanation: "'Conversely' or 'On the contrary' introduces a contrasting or opposite view."
  },
  {
    type: "typing",
    level: 5,
    skill: "cohesion",
    question: "Type the missing word to complete the concession: '________ it is true that taxes may rise, the benefits of universal healthcare justify the cost.'",
    answer: "While",
    explanation: "'While', 'Although', or 'Even though' are excellent subordinating conjunctions for concession."
  },
  {
    type: "error-spot",
    level: 5,
    skill: "cohesion",
    question: "Identify the incorrect usage in this complex paragraph:",
    text: "In spite of the fact that it is expensive, but it is necessary.",
    errorPhrase: "but",
    correctPhrase: "",
    explanation: "'In spite of the fact that' already establishes the contrast. Adding 'but' is grammatically redundant and incorrect."
  }
];
