export const grammarData = [
  // LEVEL 1: Basic Pluralization & SV Agreement (Band 5/5.5)
  {
    type: "mcq",
    level: 1,
    skill: "grammar",
    question: "Identify the correct sentence:",
    options: ["The childrens are playing in the park.", "The childs are playing in the park.", "The children are playing in the park."],
    answer: "The children are playing in the park.",
    explanation: "'Children' is already plural. Do not add an 's'."
  },
  {
    type: "mcq",
    level: 1,
    skill: "grammar",
    question: "Select the sentence with the correct subject-verb agreement:",
    options: ["The government have decided to increase taxes.", "The government has decided to increase taxes.", "The governments has decided to increase taxes."],
    answer: "The government has decided to increase taxes.",
    explanation: "'The government' is a singular collective noun and takes the singular verb 'has'."
  },
  {
    type: "error-spot",
    level: 1,
    skill: "grammar",
    question: "Find the error in pluralization:",
    text: "There are many peoples living in poverty.",
    errorPhrase: "peoples",
    correctPhrase: "people",
    explanation: "'People' is the plural of person. 'Peoples' is only used to refer to distinct ethnic groups."
  },
  {
    type: "tap-choice",
    level: 1,
    skill: "grammar",
    question: "Select the correct verb:",
    text: "The student [study/studies] for the IELTS exam every day.",
    answer: "studies",
    explanation: "A singular third-person subject ('student') requires the 's' on the present tense verb ('studies')."
  },
  {
    type: "mcq",
    level: 1,
    skill: "grammar",
    question: "Identify the correct negative form:",
    options: ["He do not like studying grammar.", "He does not like studying grammar.", "He not like studying grammar."],
    answer: "He does not like studying grammar.",
    explanation: "With a singular subject ('He'), use 'does not' or 'doesn't', followed by the base verb."
  },

  // LEVEL 2: Articles and Uncountable Nouns (Band 6)
  {
    type: "error-spot",
    level: 2,
    skill: "grammar",
    question: "Find the error in this sentence:",
    text: "The internet has provided a lot of informations for students.",
    errorPhrase: "informations",
    correctPhrase: "information",
    explanation: "'Information' is an uncountable noun. It cannot be pluralized with an 's'."
  },
  {
    type: "mcq",
    level: 2,
    skill: "grammar",
    question: "Choose the grammatically correct sentence:",
    options: ["Pollution is a major problem in the modern cities.", "The pollution is a major problem in modern cities.", "Pollution is a major problem in modern cities."],
    answer: "Pollution is a major problem in modern cities.",
    explanation: "Do not use 'the' with abstract uncountable nouns like 'pollution' unless specifying (e.g., 'the pollution in London')."
  },
  {
    type: "tap-choice",
    level: 2,
    skill: "grammar",
    question: "Select the correct article:",
    text: "I bought [a/an/the/-] new laptop yesterday.",
    answer: "a",
    explanation: "Use 'a' when referring to a singular, countable noun introduced for the first time."
  },
  {
    type: "error-spot",
    level: 2,
    skill: "grammar",
    question: "Identify the error regarding uncountable nouns:",
    text: "I need to buy some new furnitures for my apartment.",
    errorPhrase: "furnitures",
    correctPhrase: "furniture",
    explanation: "'Furniture' is an uncountable noun in English and has no plural form."
  },
  {
    type: "mcq",
    level: 2,
    skill: "grammar",
    question: "Which sentence correctly uses the definite article 'the'?",
    options: ["The education is important for success.", "Education is important for the success.", "Education is important for success."],
    answer: "Education is important for success.",
    explanation: "General concepts like 'education' and 'success' do not take 'the'."
  },

  // LEVEL 3: Complex Subject-Verb Agreement (Band 6.5)
  {
    type: "mcq",
    level: 3,
    skill: "grammar",
    question: "Which sentence uses the correct verb form?",
    options: ["A number of students is struggling.", "A number of students are struggling.", "The number of students are struggling."],
    answer: "A number of students are struggling.",
    explanation: "'A number of...' means 'several' and takes a plural verb. 'The number of...' takes a singular verb."
  },
  {
    type: "tap-choice",
    level: 3,
    skill: "grammar",
    question: "Select the correct verb to complete the sentence:",
    text: "The number of unemployed young people [has/have] increased significantly this year.",
    answer: "has",
    explanation: "'The number of' refers to the specific statistic, making it singular ('has')."
  },
  {
    type: "error-spot",
    level: 3,
    skill: "grammar",
    question: "Find the subject-verb agreement error:",
    text: "Everyone in the class have passed the exam.",
    errorPhrase: "have",
    correctPhrase: "has",
    explanation: "Indefinite pronouns like 'Everyone', 'Everybody', 'Someone' always take a singular verb."
  },
  {
    type: "mcq",
    level: 3,
    skill: "grammar",
    question: "Identify the correct sentence:",
    options: ["Either the teacher or the students is responsible.", "Either the teacher or the students are responsible.", "Either the teacher or the students am responsible."],
    answer: "Either the teacher or the students are responsible.",
    explanation: "With 'Either/Or', the verb agrees with the noun closest to it ('students' -> 'are')."
  },
  {
    type: "tap-choice",
    level: 3,
    skill: "grammar",
    question: "Select the correct verb:",
    text: "Mathematics [is/are] an essential subject in school.",
    answer: "is",
    explanation: "Fields of study ending in '-ics' (Mathematics, Physics, Economics) are singular."
  },

  // LEVEL 4: Tenses and Prepositions (Band 7)
  {
    type: "mcq",
    level: 4,
    skill: "grammar",
    question: "Select the best tense for describing a past trend in Task 1:",
    options: ["In 2010, the population of the city has risen.", "In 2010, the population of the city rose.", "In 2010, the population of the city rises."],
    answer: "In 2010, the population of the city rose.",
    explanation: "When a specific past time is mentioned ('In 2010'), use the Past Simple tense ('rose')."
  },
  {
    type: "typing",
    level: 4,
    skill: "grammar",
    question: "Type the correct preposition: 'There has been a decrease _____ the number of people smoking.'",
    answer: "in",
    explanation: "The noun 'decrease' is followed by 'in' when referring to what is decreasing."
  },
  {
    type: "error-spot",
    level: 4,
    skill: "grammar",
    question: "Identify the tense error:",
    text: "Over the last ten years, the cost of living rose significantly.",
    errorPhrase: "rose",
    correctPhrase: "has risen",
    explanation: "Phrases like 'Over the last ten years' indicate an action continuing to the present, requiring Present Perfect ('has risen')."
  },
  {
    type: "tap-choice",
    level: 4,
    skill: "grammar",
    question: "Select the correct preposition:",
    text: "The graph illustrates changes [on/in] the consumption of meat.",
    answer: "in",
    explanation: "We say 'changes in' something, not 'changes on'."
  },
  {
    type: "mcq",
    level: 4,
    skill: "grammar",
    question: "Which sentence correctly predicts a future trend?",
    options: ["By 2050, the population will reach 9 billion.", "By 2050, the population is going to reach 9 billion.", "By 2050, the population will have reached 9 billion."],
    answer: "By 2050, the population will have reached 9 billion.",
    explanation: "When using 'By + future date', the Future Perfect ('will have + V3') is highly academic and accurate."
  },

  // LEVEL 5: Advanced Nuance & Conditionals (Band 7.5 - 8)
  {
    type: "mcq",
    level: 5,
    skill: "grammar",
    question: "Identify the correct usage of 'Neither / Nor':",
    options: ["Neither the politicians nor the public are aware.", "Neither the politicians nor the public is aware.", "Neither the politicians or the public is aware."],
    answer: "Neither the politicians nor the public is aware.",
    explanation: "In 'Neither/Nor' structures, the verb agrees with the noun closest to it ('public' -> 'is')."
  },
  {
    type: "mcq",
    level: 5,
    skill: "grammar",
    question: "Which of these sentences correctly uses inversion for emphasis?",
    options: ["Not only the government should invest in education, but it should also improve healthcare.", "Not only should the government invest in education, but it should also improve healthcare.", "Should the government not only invest in education, but also improve healthcare."],
    answer: "Not only should the government invest in education, but it should also improve healthcare.",
    explanation: "When starting with 'Not only', invert the subject and auxiliary verb ('should the government')."
  },
  {
    type: "error-spot",
    level: 5,
    skill: "grammar",
    question: "Find the error in this third conditional sentence:",
    text: "If the government invested more in public transport, the traffic congestion would have been solved.",
    errorPhrase: "invested",
    correctPhrase: "had invested",
    explanation: "A third conditional referring to past unreal situations requires 'If + past perfect (had invested), ... would have + V3'."
  },
  {
    type: "tap-choice",
    level: 5,
    skill: "grammar",
    question: "Select the correct form:",
    text: "Despite [to work/working/work] long hours, many nurses are underpaid.",
    answer: "working",
    explanation: "'Despite' is a preposition and must be followed by a noun or gerund (-ing form)."
  },
  {
    type: "typing",
    level: 5,
    skill: "grammar",
    question: "Type the missing auxiliary verb to create emphasis: 'I ______ believe that environmental protection is paramount.' (Hint: do/does/did)",
    answer: "do",
    explanation: "Adding 'do' before a main verb in an affirmative sentence adds strong emphasis, an excellent technique for stating a thesis."
  }
];
