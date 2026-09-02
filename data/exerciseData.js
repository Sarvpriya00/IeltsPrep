/**
 * IELTS Writing Interactive Exercises Dataset
 */

export const exerciseData = {
  // Exercise 1: Structural Paragraph Reordering Challenge
  reorderExercises: [
    {
      id: "reorder-1",
      title: "Task 1: Line Graph Structural Order Challenge",
      promptTitle: "US Jobs in 4 Sectors (1960–2020)",
      correctOrder: ["intro", "overview", "body1", "body2"],
      blocks: [
        {
          id: "body1",
          type: "Body Paragraph 1 (Detailed Data)",
          text: "In 1960, manufacturing provided the highest number of jobs at approximately 15 million, rising to a peak of 20 million in 1980 before steadily declining to under 15 million by 2020. Conversely, retail employment began at roughly 5 million jobs and grew consistently, reaching 15 million by 2020."
        },
        {
          id: "intro",
          type: "Introduction (Paraphrase)",
          text: "The graph illustrates changes in the number of jobs across four economic sectors in the United States between 1960 and 2020."
        },
        {
          id: "body2",
          type: "Body Paragraph 2 (Detailed Data)",
          text: "The healthcare sector exhibited dramatic growth after 1980, rising sharply to match retail at 15 million jobs in 2020. Agriculture maintained the lowest employment numbers throughout, gradually decreasing from 5 million in 1960 to around 2.5 million by the end of the timeframe."
        },
        {
          id: "overview",
          type: "Overview Paragraph (Key Trends)",
          text: "Overall, the manufacturing and agricultural sectors experienced long-term declines in job numbers, whereas retail and healthcare demonstrated significant growth over the 60-year period."
        }
      ]
    },
    {
      id: "reorder-2",
      title: "Task 2: Agree / Disagree Essay Structural Challenge",
      promptTitle: "Tall Apartment Blocks in Cities",
      correctOrder: ["intro", "body1", "body2", "conclusion"],
      blocks: [
        {
          id: "body1",
          type: "Body Paragraph 1 (Main Argument 1)",
          text: "First and foremost, vertical development optimizes land usage in high-density metropolitan areas where land is scarce and costly. By building upwards, municipal authorities can accommodate thousands of residents on a fraction of the land area required for single-family housing."
        },
        {
          id: "conclusion",
          type: "Conclusion (Summary & Position)",
          text: "In conclusion, high-rise apartment construction provides an efficient, sustainable, and economically viable strategy for urban housing needs. Urban planners should prioritize vertical housing alongside robust infrastructure."
        },
        {
          id: "intro",
          type: "Introduction (Paraphrase + Thesis)",
          text: "Rapid urbanization and population growth have made urban housing a critical challenge worldwide. While some advocate for low-density suburban development, I strongly agree that constructing high-rise residential apartment blocks represents the most effective solution for urban housing shortages."
        },
        {
          id: "body2",
          type: "Body Paragraph 2 (Main Argument 2)",
          text: "Moreover, high-density residential towers preserve green spaces within urban landscapes. Rather than sprawling into surrounding countryside, vertical housing allows municipalities to reserve ground space for public parks, recreational areas, and ecological zones, enhancing urban liveability."
        }
      ]
    }
  ],

  // Exercise 2: Essay Type & Thesis Statement Builder
  thesisExercises: [
    {
      id: "thesis-1",
      prompt: "All university undergraduate courses should include a period of time spent studying abroad or doing a work placement. Do you think the advantages of this would outweigh the disadvantages?",
      essayTypeOptions: [
        "Opinion (Agree/Disagree)",
        "Advantages / Disadvantages (Outweigh)",
        "Discussion Essay",
        "Problem & Solution"
      ],
      correctType: "Advantages / Disadvantages (Outweigh)",
      paraphraseOptions: [
        "Integrating practical work placements or international study periods into undergraduate curricula has become a prominent higher education proposal.",
        "Universities are bad because they force students to travel overseas.",
        "Students like to work in offices and travel to other countries."
      ],
      correctParaphraseIndex: 0,
      thesisOptions: [
        "In my view, the substantial professional and intercultural benefits of mandatory placements far outweigh potential financial and logistical drawbacks.",
        "I think work placements are good but studying abroad is boring.",
        "This essay will talk about universities."
      ],
      correctThesisIndex: 0
    },
    {
      id: "thesis-2",
      prompt: "Some people argue that primary schools focus too much on formal learning. To what extent do you agree with this opinion?",
      essayTypeOptions: [
        "Opinion (Agree/Disagree)",
        "Discussion Essay",
        "Problem & Solution",
        "Direct Question"
      ],
      correctType: "Opinion (Agree/Disagree)",
      paraphraseOptions: [
        "Educational approaches in primary schools heavily influence childhood development.",
        "Primary schools are useless for young children.",
        "Children like to play games in school."
      ],
      correctParaphraseIndex: 0,
      thesisOptions: [
        "I strongly agree that modern primary education places excessive emphasis on formal academic instruction at the expense of unstructured play.",
        "I don't know if schools focus too much on learning.",
        "Primary schools should be closed down."
      ],
      correctThesisIndex: 0
    }
  ],

  // Exercise 3: Overview Spotter & Checker
  overviewExercises: [
    {
      id: "ov-1",
      taskTitle: "Task 1: Line Graph - US Jobs (1960-2020)",
      overviews: [
        {
          text: "Overall, the manufacturing and agricultural sectors experienced long-term declines in job numbers, whereas retail and healthcare demonstrated significant growth over the 60-year period.",
          isBand8: true,
          explanation: "EXCELLENT (Band 8+): Clearly identifies key overall trends across all categories without including raw numbers."
        },
        {
          text: "Manufacturing started at 15 million in 1960 and went to 20 million in 1980 while retail went to 15 million in 2020.",
          isBand8: false,
          explanation: "WEAK (Band 5/6): Lists raw numbers instead of summarizing overall trends. Raw numbers belong in Body Paragraphs, not the Overview."
        }
      ]
    }
  ]
};
