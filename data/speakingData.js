/**
 * IELTS Speaking Test Suite & Band Criteria Guidelines
 */

export const speakingData = {
  parts: [
    {
      part: 1,
      title: "Part 1: Introduction & General Questions",
      duration: "4–5 minutes",
      topics: [
        {
          name: "Hometown & Living Space",
          questions: [
            "Where is your hometown located?",
            "What do you like most about living in your city?",
            "Has your hometown changed much over the last ten years?",
            "Would you prefer to live in a house or an apartment in the future?"
          ]
        },
        {
          name: "Studies & Career",
          questions: [
            "Are you currently studying or working?",
            "Why did you choose your field of study?",
            "What is the most challenging aspect of your studies or job?",
            "Do you plan to pursue further education abroad?"
          ]
        },
        {
          name: "Technology & Daily Life",
          questions: [
            "How often do you use social media apps during the day?",
            "Do you think technology makes life simpler or more complex?",
            "What is your favorite electronic gadget?"
          ]
        }
      ]
    },
    {
      part: 2,
      title: "Part 2: Individual Long Turn (Cue Cards)",
      duration: "3–4 minutes (1 min prep, 2 mins speaking)",
      cards: [
        {
          id: "card-1",
          topic: "Describe an important decision you made in your life",
          bullets: [
            "What the decision was and when you made it",
            "What options or alternatives were available to you",
            "Why you chose that specific option",
            "And explain how you felt after making that decision"
          ],
          followUp: "Do you usually consult family or friends before making major choices?"
        },
        {
          id: "card-2",
          topic: "Describe a public park or garden you enjoy visiting",
          bullets: [
            "Where it is located and how often you go there",
            "What facilities or natural features it has",
            "Who you usually go with",
            "And explain why this park is special to you"
          ],
          followUp: "Should municipal governments invest more in urban green spaces?"
        },
        {
          id: "card-3",
          topic: "Describe a useful piece of technology you use every day",
          bullets: [
            "What it is and how long you have owned it",
            "What main functions you use it for",
            "How easy or difficult it was to learn to use it",
            "And explain how your daily routine would change without it"
          ],
          followUp: "Do older generations adapt easily to digital innovations?"
        }
      ]
    },
    {
      part: 3,
      title: "Part 3: Two-Way In-Depth Discussion",
      duration: "4–5 minutes",
      topics: [
        {
          name: "Decision Making & Leadership",
          questions: [
            "Why do some people find it difficult to make quick decisions under pressure?",
            "Should children be allowed to make important decisions about their education early in life?",
            "How has artificial intelligence impacted managerial decision-making in businesses?"
          ]
        },
        {
          name: "Environmental Conservation & Urban Planning",
          questions: [
            "What responsibilities do individuals have toward environmental conservation compared to governments?",
            "How can urban planners balance modern building developments with natural ecosystem protection?",
            "Will future generations face worse environmental challenges than we face today?"
          ]
        }
      ]
    }
  ],

  criteriaRubric: {
    fluency: {
      name: "Fluency & Coherence (FC)",
      description: "Measures speech flow, hesitation frequency, self-correction, and logical connection of ideas using discourse markers."
    },
    lexical: {
      name: "Lexical Resource (LR)",
      description: "Evaluates vocabulary range, idiomatic phrasing, precise word choice, and effective paraphrase capability."
    },
    grammar: {
      name: "Grammatical Range & Accuracy (GRA)",
      description: "Assesses complex sentence structure frequency, grammatical correctness, and punctuation/tense mastery."
    },
    pronunciation: {
      name: "Pronunciation (P)",
      description: "Evaluates sentence stress, intonation patterns, clear articulation, and individual sound clarity."
    }
  }
};
