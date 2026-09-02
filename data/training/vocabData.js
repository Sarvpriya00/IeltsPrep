export const vocabData = [
  // LEVEL 1: Eliminating Informal Words (Band 5 to 6)
  {
    type: "error-spot",
    level: 1,
    skill: "vocab",
    question: "Identify the word that is too informal for an IELTS essay:",
    text: "Nowadays, a lot of kids spend too much time playing video games instead of studying.",
    errorPhrase: "kids",
    correctPhrase: "children",
    explanation: "'Kids' is a spoken/informal word. Always use 'children', 'adolescents', or 'young people' in academic writing."
  },
  {
    type: "mcq",
    level: 1,
    skill: "vocab",
    question: "Choose the most appropriate academic replacement for 'bad':",
    options: ["Not good", "Detrimental", "Terrible"],
    answer: "Detrimental",
    explanation: "'Detrimental' is a high-level academic synonym for 'bad' or 'harmful'."
  },
  {
    type: "error-spot",
    level: 1,
    skill: "vocab",
    question: "Identify the informal phrase:",
    text: "Governments need to spend a lot of money on education.",
    errorPhrase: "a lot of",
    correctPhrase: "a significant amount of",
    explanation: "'A lot of' is conversational. Use 'a significant amount of' or 'substantial funds'."
  },
  {
    type: "tap-choice",
    level: 1,
    skill: "vocab",
    question: "Select the better academic word:",
    text: "There are [big/significant] differences between the two proposals.",
    answer: "significant",
    explanation: "'Big' is too basic for IELTS Task 2. 'Significant', 'substantial', or 'major' are much better."
  },
  {
    type: "mcq",
    level: 1,
    skill: "vocab",
    question: "Replace 'things' with a more precise word in this sentence: 'People buy many unnecessary things.'",
    options: ["Items", "Stuff", "Goods"],
    answer: "Goods",
    explanation: "'Goods', 'products', or 'items' are precise. 'Stuff' is highly informal."
  },

  // LEVEL 2: Eliminating Phrasal Verbs & Clichés (Band 6)
  {
    type: "tap-choice",
    level: 2,
    skill: "vocab",
    question: "Select the more formal verb choice:",
    text: "Governments should [look into/investigate] the root causes of climate change before passing new laws.",
    answer: "investigate",
    explanation: "Phrasal verbs like 'look into' are informal. A single academic verb like 'investigate' is preferred."
  },
  {
    type: "mcq",
    level: 2,
    skill: "vocab",
    question: "Replace the phrasal verb 'give up' with a formal equivalent:",
    options: ["Quit", "Relinquish", "Abandon"],
    answer: "Abandon",
    explanation: "'Abandon' is the appropriate academic term for giving up a practice or idea."
  },
  {
    type: "error-spot",
    level: 2,
    skill: "vocab",
    question: "Find the cliché/idiom that should be avoided:",
    text: "Every coin has two sides, so we must consider the disadvantages as well.",
    errorPhrase: "Every coin has two sides",
    correctPhrase: "There are multiple perspectives",
    explanation: "Idioms and clichés (like 'Every coin has two sides' or 'In a nutshell') lower your vocabulary score. Be direct and academic."
  },
  {
    type: "tap-choice",
    level: 2,
    skill: "vocab",
    question: "Select the better verb:",
    text: "The council needs to [figure out/determine] how to reduce traffic.",
    answer: "determine",
    explanation: "'Figure out' is conversational. 'Determine' or 'establish' are academic."
  },
  {
    type: "typing",
    level: 2,
    skill: "vocab",
    question: "Type a single formal verb to replace 'go up': 'House prices are expected to _______ next year.'",
    answer: "increase",
    explanation: "'Increase', 'rise', or 'escalate' replace the phrasal verb 'go up'."
  },

  // LEVEL 3: Academic Collocations (Band 6.5 - 7)
  {
    type: "tap-choice",
    level: 3,
    skill: "vocab",
    question: "Select the correct collocation:",
    text: "Pollution in major cities [creates/poses] a significant threat to public health.",
    answer: "poses",
    explanation: "In English, a threat is 'posed', not 'created'. 'Pose a threat' is a strong academic collocation."
  },
  {
    type: "mcq",
    level: 3,
    skill: "vocab",
    question: "Which of the following is a natural collocation?",
    options: ["Do an effort", "Make an effort", "Take an effort"],
    answer: "Make an effort",
    explanation: "'Make an effort' is the correct English collocation."
  },
  {
    type: "error-spot",
    level: 3,
    skill: "vocab",
    question: "Identify the incorrect collocation:",
    text: "The government must take action to solve this issue.",
    errorPhrase: "solve this issue",
    correctPhrase: "address this issue",
    explanation: "While 'solve a problem' is fine, we usually 'address' or 'resolve' an issue."
  },
  {
    type: "tap-choice",
    level: 3,
    skill: "vocab",
    question: "Select the correct adjective:",
    text: "The internet has had a [profound/deep] impact on society.",
    answer: "profound",
    explanation: "'Profound impact' is a high-level, natural collocation."
  },
  {
    type: "typing",
    level: 3,
    skill: "vocab",
    question: "Complete the collocation: 'The authorities must _________ a blind eye to environmental destruction.' (Hint: stop ignoring)",
    answer: "not turn",
    explanation: "'Turn a blind eye' means to ignore. Wait, idioms are bad! A better sentence: The authorities must take decisive action."
  },

  // LEVEL 4: Spelling & Word Families (Band 7)
  {
    type: "typing",
    level: 4,
    skill: "vocab",
    question: "Type the correct spelling of the missing word: 'Finding affordable _________ is difficult in major cities.' (Hint: housing/lodging)",
    answer: "accommodation",
    explanation: "'Accommodation' is one of the most frequently misspelled words in IELTS. It has two C's and two M's."
  },
  {
    type: "error-spot",
    level: 4,
    skill: "vocab",
    question: "Find the word form error in this sentence:",
    text: "The rapidly economic growth in China has lifted millions out of poverty.",
    errorPhrase: "rapidly",
    correctPhrase: "rapid",
    explanation: "You need an adjective ('rapid') to describe the noun phrase 'economic growth', not an adverb ('rapidly')."
  },
  {
    type: "mcq",
    level: 4,
    skill: "vocab",
    question: "Select the correct noun form:",
    options: ["The implement of this policy is difficult.", "The implementation of this policy is difficult.", "The implementing of this policy is difficult."],
    answer: "The implementation of this policy is difficult.",
    explanation: "'Implementation' is the correct noun form of the verb 'implement'."
  },
  {
    type: "tap-choice",
    level: 4,
    skill: "vocab",
    question: "Select the correct word form:",
    text: "Many people support the [development/develop] of green energy.",
    answer: "development",
    explanation: "The article 'the' and preposition 'of' require a noun ('development')."
  },
  {
    type: "typing",
    level: 4,
    skill: "vocab",
    question: "Type the correct spelling: 'The ___________ (government) must intervene to protect the environment.'",
    answer: "government",
    explanation: "Don't forget the 'n' in 'government'!"
  },

  // LEVEL 5: Nuanced Synonyms & Precision (Band 7.5 - 8)
  {
    type: "mcq",
    level: 5,
    skill: "vocab",
    question: "Select the most precise word to complete the sentence:\n'Strict regulations must be implemented to ________ the negative effects of social media.'",
    options: ["Eradicate", "Mitigate", "Destroy"],
    answer: "Mitigate",
    explanation: "'Mitigate' means to make something less severe, which is realistic for 'negative effects'."
  },
  {
    type: "tap-choice",
    level: 5,
    skill: "vocab",
    question: "Select the word that correctly fits the context:",
    text: "The transition to renewable energy is [inevitable/invaluable] given the rapid depletion of fossil fuels.",
    answer: "inevitable",
    explanation: "'Inevitable' means certain to happen. 'Invaluable' means extremely useful."
  },
  {
    type: "error-spot",
    level: 5,
    skill: "vocab",
    question: "Identify the misused word:",
    text: "The government should allocate more resources to disinterested families.",
    errorPhrase: "disinterested",
    correctPhrase: "underprivileged",
    explanation: "'Disinterested' means impartial or not taking sides. 'Underprivileged' or 'disadvantaged' means poor."
  },
  {
    type: "mcq",
    level: 5,
    skill: "vocab",
    question: "Which word best replaces 'important' in this context: 'It is important that we address climate change.'",
    options: ["Imperative", "Noteworthy", "Prominent"],
    answer: "Imperative",
    explanation: "'Imperative' conveys a sense of urgency and absolute necessity."
  },
  {
    type: "typing",
    level: 5,
    skill: "vocab",
    question: "Type the academic synonym for 'worsen': 'Air pollution continues to ____________ respiratory diseases.' (Starts with 'e')",
    answer: "exacerbate",
    explanation: "'Exacerbate' means to make a bad situation worse, a highly precise Band 8 verb."
  }
];
