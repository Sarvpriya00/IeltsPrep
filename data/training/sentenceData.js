export const sentenceData = [
  // LEVEL 1: Compound Sentences (Band 5 to 5.5)
  {
    type: "sentence-combine",
    level: 1,
    skill: "sentence",
    question: "Combine these two simple sentences using a conjunction:",
    sentences: ["Many people live in cities.", "The cities are becoming overcrowded."],
    hint: "Use 'and' or 'so'.",
    answerRegex: /Many people live in cities,? (and|so) the cities are becoming overcrowded\./i,
    explanation: "Using basic conjunctions like 'and' or 'so' creates a compound sentence."
  },
  {
    type: "mcq",
    level: 1,
    skill: "sentence",
    question: "Which of the following is a grammatically correct compound sentence?",
    options: ["Public transport is cheap, but it is often unreliable.", "Public transport is cheap, although it is often unreliable.", "Because public transport is cheap, but it is often unreliable."],
    answer: "Public transport is cheap, but it is often unreliable.",
    explanation: "'Although' creates a complex sentence. 'Because...but...' is grammatically incorrect."
  },
  {
    type: "tap-choice",
    level: 1,
    skill: "sentence",
    question: "Select the correct conjunction:",
    text: "He studied hard for the test, [but/so] he passed with a high score.",
    answer: "so",
    explanation: "'So' introduces a result. 'But' introduces a contrast."
  },
  {
    type: "sentence-combine",
    level: 1,
    skill: "sentence",
    question: "Combine the sentences using 'or':",
    sentences: ["Governments can increase taxes.", "They can cut public spending."],
    hint: "Governments can increase taxes or...",
    answerRegex: /Governments can increase taxes or (they can )?cut public spending\./i,
    explanation: "'Or' presents alternatives."
  },
  {
    type: "error-spot",
    level: 1,
    skill: "sentence",
    question: "Find the error in this sentence:",
    text: "The internet is useful, and is also dangerous.",
    errorPhrase: "and is",
    correctPhrase: "but it is",
    explanation: "A compound sentence needs a subject after the conjunction if the subject changes or for clarity, and 'but' is better for contrast."
  },

  // LEVEL 2: Introduction to Complex Sentences (Band 6)
  {
    type: "tap-choice",
    level: 2,
    skill: "sentence",
    question: "Select the correct relative pronoun:",
    text: "The government, [who/which] is responsible for infrastructure, must increase spending.",
    answer: "which",
    explanation: "'The government' is an entity/organization, so we use 'which'. 'Who' is reserved for people."
  },
  {
    type: "sentence-combine",
    level: 2,
    skill: "sentence",
    question: "Combine the sentences using 'Because':",
    sentences: ["Cars produce greenhouse gases.", "They contribute to global warming."],
    hint: "Start the sentence with 'Because'.",
    answerRegex: /Because cars produce greenhouse gases,? they contribute to global warming\./i,
    explanation: "When starting a sentence with 'Because', a comma is required to separate the dependent clause from the main clause."
  },
  {
    type: "mcq",
    level: 2,
    skill: "sentence",
    question: "Which relative clause is correct?",
    options: ["The book that I bought it yesterday is interesting.", "The book that I bought yesterday is interesting.", "The book what I bought yesterday is interesting."],
    answer: "The book that I bought yesterday is interesting.",
    explanation: "Do not repeat the object pronoun ('it') in a relative clause."
  },
  {
    type: "sentence-combine",
    level: 2,
    skill: "sentence",
    question: "Combine using 'although':",
    sentences: ["The exam was difficult.", "Most students passed."],
    hint: "Although...",
    answerRegex: /Although the exam was difficult,? most students passed\./i,
    explanation: "'Although' introduces a subordinate clause of concession."
  },
  {
    type: "error-spot",
    level: 2,
    skill: "sentence",
    question: "Find the punctuation error:",
    text: "If people eat healthier food they will live longer.",
    errorPhrase: "food they",
    correctPhrase: "food, they",
    explanation: "When an 'If' clause starts a sentence, it must be followed by a comma."
  },

  // LEVEL 3: Complex Sentences & Relative Clauses (Band 6.5 - 7)
  {
    type: "sentence-combine",
    level: 3,
    skill: "sentence",
    question: "Combine these sentences using 'which' (non-defining relative clause):",
    sentences: ["The new tax policy was implemented last year.", "The new tax policy has caused widespread anger."],
    hint: "Use commas around the relative clause.",
    answerRegex: /The new tax policy,? which was implemented last year,? has caused widespread anger\./i,
    explanation: "A non-defining relative clause adds extra information and must be enclosed in commas."
  },
  {
    type: "error-spot",
    level: 3,
    skill: "sentence",
    question: "Identify the grammatical error in this complex sentence:",
    text: "Although the internet has many benefits, but it also has drawbacks.",
    errorPhrase: "but",
    correctPhrase: "",
    explanation: "Never use 'Although' and 'but' in the same sentence. 'Although' already establishes the contrast."
  },
  {
    type: "mcq",
    level: 3,
    skill: "sentence",
    question: "Select the sentence with the correct non-defining relative clause:",
    options: ["My father who is 60 years old still plays football.", "My father, who is 60 years old, still plays football.", "My father, that is 60 years old, still plays football."],
    answer: "My father, who is 60 years old, still plays football.",
    explanation: "Non-defining relative clauses must use commas and cannot use 'that'."
  },
  {
    type: "sentence-combine",
    level: 3,
    skill: "sentence",
    question: "Combine using 'while' to show contrast:",
    sentences: ["Some people prefer living in cities.", "Others prefer the countryside."],
    hint: "While some people...",
    answerRegex: /While some people prefer living in cities,? others prefer the countryside\./i,
    explanation: "'While' is excellent for contrasting two differing viewpoints."
  },
  {
    type: "tap-choice",
    level: 3,
    skill: "sentence",
    question: "Select the correct pronoun:",
    text: "The students [who/whom] the teacher praised were very happy.",
    answer: "whom",
    explanation: "'Whom' is the object of the verb 'praised' (the teacher praised them)."
  },

  // LEVEL 4: Conditionals and Concession (Band 7 - 7.5)
  {
    type: "sentence-combine",
    level: 4,
    skill: "sentence",
    question: "Rewrite using 'Unless' to form a conditional sentence:",
    sentences: ["If we do not reduce emissions, climate change will worsen."],
    hint: "Unless...",
    answerRegex: /Unless we reduce emissions,? climate change will worsen\./i,
    explanation: "'Unless' means 'if not'."
  },
  {
    type: "mcq",
    level: 4,
    skill: "sentence",
    question: "Select the sentence with the correct punctuation:",
    options: ["Despite of the high cost many students choose to study abroad.", "Despite the high cost, many students choose to study abroad.", "In spite of the high cost many students choose, to study abroad."],
    answer: "Despite the high cost, many students choose to study abroad.",
    explanation: "'Despite' does not take 'of', and a comma follows the phrase."
  },
  {
    type: "error-spot",
    level: 4,
    skill: "sentence",
    question: "Find the error in this concession structure:",
    text: "Despite he was tired, he finished the report.",
    errorPhrase: "he was",
    correctPhrase: "being",
    explanation: "'Despite' must be followed by a noun or gerund ('being tired' or 'his tiredness'), not a full clause."
  },
  {
    type: "sentence-combine",
    level: 4,
    skill: "sentence",
    question: "Combine using 'Even though':",
    sentences: ["Electric cars are expensive.", "They are becoming more popular."],
    hint: "Even though...",
    answerRegex: /Even though electric cars are expensive,? they are becoming more popular\./i,
    explanation: "'Even though' is a strong concession linker."
  },
  {
    type: "typing",
    level: 4,
    skill: "sentence",
    question: "Type the missing word: '__________ the fact that it rained, the event was a success.'",
    answer: "Despite",
    explanation: "'Despite the fact that' is a formal way to introduce a clause after 'despite'."
  },

  // LEVEL 5: Participial Phrases & Inversion (Band 7.5 - 8)
  {
    type: "sentence-combine",
    level: 5,
    skill: "sentence",
    question: "Combine the sentences using a present participle ('-ing' phrase):",
    sentences: ["The factory released toxic chemicals into the river.", "This caused the death of thousands of fish."],
    hint: "End the first sentence with a comma and use 'causing'.",
    answerRegex: /The factory released toxic chemicals into the river, causing the death of thousands of fish\./i,
    explanation: "Using a participial phrase ('..., causing...') is an advanced way to show a result."
  },
  {
    type: "error-spot",
    level: 5,
    skill: "sentence",
    question: "Correct the error in this inverted sentence:",
    text: "Rarely people consider the long-term impact of their daily choices.",
    errorPhrase: "people consider",
    correctPhrase: "do people consider",
    explanation: "When starting a sentence with a restrictive adverb ('Rarely'), you must invert the subject and auxiliary verb."
  },
  {
    type: "mcq",
    level: 5,
    skill: "sentence",
    question: "Which sentence correctly uses a past participial phrase?",
    options: ["Built in 1900, the building is now a museum.", "Building in 1900, the museum is now open.", "Built in 1900, the museum opened its doors."],
    answer: "Built in 1900, the building is now a museum.",
    explanation: "'Built' (past participle) gives a passive meaning, modifying 'the building'."
  },
  {
    type: "sentence-combine",
    level: 5,
    skill: "sentence",
    question: "Combine using an absolute phrase:",
    sentences: ["The exam was over.", "The students left the room."],
    hint: "The exam being...",
    answerRegex: /The exam being over, the students left the room\./i,
    explanation: "An absolute phrase ('The exam being over') modifies the whole sentence without a conjunction."
  },
  {
    type: "typing",
    level: 5,
    skill: "sentence",
    question: "Complete this inversion: 'Under no circumstances ______ this policy be accepted.'",
    answer: "should",
    explanation: "Inversion with negative phrases ('Under no circumstances') requires an auxiliary verb ('should') before the subject."
  }
];
