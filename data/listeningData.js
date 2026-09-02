// Cambridge IELTS 21 Listening Data for Tests 1, 2, 3, and 4 (Official Answer Keys)

export const cam21ListeningData = {
  "cam21-t1": {
    id: "cam21-t1",
    book: "Cambridge 21",
    testNumber: 1,
    title: "Cambridge 21 · Test 1",
    parts: {
      1: {
        title: "PART 1: Questions 1-10",
        instruction: "Questions 1-6: Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.",
        tableHeader: ["Name of course", "What you learn", "Cost", "Other information"],
        tableRows: [
          {
            name: "Taster day",
            learn: "introduction to sailing",
            cost: "£120 if booking one place",
            info: "small groups (max Q1 people)"
          },
          {
            name: "Level 1",
            learn: "basic theory e.g. understanding the Q2 and tides\n\nbasic sailing skills including Q3 information",
            cost: "£200",
            info: "Q4 available for club members\n\nall inclusive (plus a useful Q5)\n\na Q6 at the end of the course for all participants"
          }
        ],
        notesHeader: "General information (Questions 7-10: Write ONE WORD ONLY)",
        notes: [
          "Participants must be able to swim.",
          "Bring suitable clothing, a Q7 and toiletries (e.g. shampoo).",
          "There is a Q8 at the club.",
          "Online training Q9 are recommended.",
          "Q10 are available for course participants."
        ]
      },
      2: {
        title: "PART 2: Questions 11-20",
        instruction: "Questions 11-16: Choose the correct letter, A, B or C.\nWorking as a makeup trainee",
        mcqs: [
          {
            num: 11,
            question: "What should trainees always expect to get when working on low budget short films?",
            options: ["A travel expenses", "B a minimum wage", "C meals"]
          },
          {
            num: 12,
            question: "According to the speaker, on big budget films trainees may get experience of",
            options: ["A makeup for special effects.", "B working with different ethnicities.", "C creating a variety of hair styles."]
          },
          {
            num: 13,
            question: "The speaker says a problem for makeup artists is",
            options: ["A dealing with difficult directors.", "B being shouted at by their supervisor.", "C waiting around for hours doing nothing."]
          },
          {
            num: 14,
            question: "How did the speaker feel when she met famous actors for the first time?",
            options: ["A very shy", "B very proud", "C very disappointed"]
          },
          {
            num: 15,
            question: "What advice does the speaker give about makeup kits?",
            options: ["A Always carry a basic kit with you.", "B Only buy the best products for a makeup kit.", "C Ask other makeup artists to check your kit."]
          },
          {
            num: 16,
            question: "What advice does the speaker give about creating a portfolio?",
            options: ["A Keep print and digital photos.", "B Only include a small selection of photos.", "C Get permission to use photos."]
          }
        ],
        matchingHeader: "Questions 17-20: What ability is required for each of the following duties?",
        matchingOptions: [
          "A being well-organised",
          "B being flexible",
          "C working quickly"
        ],
        matchingItems: [
          { num: 17, text: "Prepping an actor" },
          { num: 18, text: "Continuity" },
          { num: 19, text: "General" },
          { num: 20, text: "Applying makeup" }
        ]
      },
      3: {
        title: "PART 3: Questions 21-30",
        multiSelects: [
          {
            numGroup: "21-22",
            question: "Questions 21 and 22: Choose TWO letters, A-E.\nWhich TWO features of the lecture on ocean biodiversity had the greatest impact on the students?",
            options: [
              "A the references to local problems",
              "B the broad focus of the examples",
              "C the practical suggestions for solutions",
              "D the type of issues discussed",
              "E the implications for government policy"
            ]
          },
          {
            numGroup: "23-24",
            question: "Questions 23 and 24: Choose TWO letters, A-E.\nWhich TWO details about the research project particularly impressed the students?",
            options: [
              "A the team's previous successes",
              "B its wide geographical scale",
              "C the use of new technology",
              "D the extensive statistical evidence",
              "E the large range of specialists involved"
            ]
          }
        ],
        matchingHeader: "Questions 25-30: What is the students' opinion of each of the following resources related to ocean biodiversity?",
        matchingBox: [
          "A This is aimed at a very specialist audience.",
          "B This is now rather outdated.",
          "C This was an effective description of a new danger.",
          "D This suggests possible ways to improve the situation.",
          "E This does not give a balanced account.",
          "F This is too predictable to be useful.",
          "G This gives insufficient evidence for its claims.",
          "H This gives a clear explanation of the problems."
        ],
        matchingItems: [
          { num: 25, text: "Article on invasive lionfish" },
          { num: 26, text: "Documentary on microplastics" },
          { num: 27, text: "Podcast on ocean pollution" },
          { num: 28, text: "Book on coastal ecosystems" },
          { num: 29, text: "Article on metal toxicity" },
          { num: 30, text: "Podcast on floating marine cities" }
        ]
      },
      4: {
        title: "PART 4: Questions 31-40",
        instruction: "Questions 31-40: Complete the notes below. Write ONE WORD ONLY for each answer.\nSources of rubber",
        notes: [
          "Three resources which are essential for industrial civilisation: Q31, fossil fuels, rubber",
          "Natural rubber (from Para rubber tree):",
          "• the growth of the tree is Q32 .",
          "• production cannot easily be adjusted because of increasing or decreasing Q33 .",
          "• the tree only grows near the Q34 .",
          "• extracting the latex (rubber) is labour-intensive",
          "• it is very difficult to Q35 rubber after production.",
          "New threats include:",
          "• lack of genetic diversity, leading to danger of disease caused by a Q36 .",
          "• a shift to the cultivation of palm oil",
          "• extreme Q37 events.",
          "Synthetic rubber:",
          "• may be used for engine parts and cooking utensils",
          "• is less Q38 than natural rubber",
          "• is unsuitable for many purposes e.g. the tyres of aircraft.",
          "An alternative source of natural rubber:",
          "• A wild flower (a type of dandelion) has rubber in its Q39 .",
          "• It can be grown in many locations and does not require good Q40 ."
        ]
      }
    },
    answerKey: {
      1: ["10", "ten"],
      2: ["weather"],
      3: ["safety"],
      4: ["discount", "discounts"],
      5: ["dictionary"],
      6: ["certificate"],
      7: ["towel"],
      8: ["cafe", "café"],
      9: ["videos", "video"],
      10: ["lockers", "locker"],
      11: ["A"],
      12: ["B"],
      13: ["A"],
      14: ["A"],
      15: ["A"],
      16: ["C"],
      17: ["C"],
      18: ["A"],
      19: ["B"],
      20: ["C"],
      21: ["B", "D"],
      22: ["B", "D"],
      23: ["C", "E"],
      24: ["C", "E"],
      25: ["G"],
      26: ["B"],
      27: ["F"],
      28: ["H"],
      29: ["A"],
      30: ["E"],
      31: ["metal", "metals", "metal(s)"],
      32: ["slow"],
      33: ["demand"],
      34: ["equator"],
      35: ["recycle"],
      36: ["fungus"],
      37: ["weather"],
      38: ["strong"],
      39: ["roots", "root"],
      40: ["soil"]
    }
  },

  "cam21-t2": {
    id: "cam21-t2",
    book: "Cambridge 21",
    testNumber: 2,
    title: "Cambridge 21 · Test 2",
    parts: {
      1: {
        title: "PART 1: Questions 1-10",
        instruction: "Questions 1-10: Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.",
        tableHeader: ["Course", "Date", "Cost", "Notes"],
        tableRows: [
          { name: "Vietnamese food", date: "Q1", cost: "£59", info: "It provides information on the use of herbs. There are no places at present." },
          { name: "Bread making", date: "20 March", cost: "£ Q2", info: "Extra charge for ingredients. Participants make white bread, sourdough and Q3 ." },
          { name: "Face massage", date: "23 February", cost: "£35", info: "Teacher trained in Q4 . Bring a Q5 ." },
          { name: "Candle making", date: "Q6", cost: "£52", info: "Only Q7 ingredients are used. Candles can be used as presents." },
          { name: "Silk painting", date: "18 May", cost: "£ Q8", info: "Bring an apron or old Q9 ." },
          { name: "DIY for beginners", date: "24 February", cost: "£125", info: "Learn how to use a drill, saw and Q10 , and put up a shelf." }
        ]
      },
      2: {
        title: "PART 2: Questions 11-20",
        mapImage: "/images/cam21-test2-map.png",
        mapTitle: "Melby Coal Mine",
        multiSelects: [
          {
            numGroup: "11-12",
            question: "Questions 11 and 12: Choose TWO letters, A–E.\nWhich TWO pieces of advice are given about the Marsden Coastal Walk?",
            options: [
              "A Stop for lunch in an ancient town.",
              "B Don't miss the ruins of a certain building.",
              "C Catch a boat to the start of this walk.",
              "D Be careful of the steep and rocky paths.",
              "E Don't worry about getting lost."
            ]
          },
          {
            numGroup: "13-14",
            question: "Questions 13 and 14: Choose TWO letters, A–E.\nWhich TWO things are said about the Melby Heritage Walk?",
            options: [
              "A This walk is mostly downhill.",
              "B The paths can get busy during the day.",
              "C This is a circular walk.",
              "D A tower stands on the site of an older structure.",
              "E There are far-reaching views the whole way."
            ]
          }
        ],
        matchingHeader: "Questions 15-20: Label the map below. Write the correct letter, A-I, next to Questions 15-20.",
        matchingBox: ["A Building A", "B Building B", "C Building C", "D Building D", "E Building E", "F Building F", "G Building G", "H Building H", "I Building I"],
        matchingItems: [
          { num: 15, text: "Exhibition" },
          { num: 16, text: "Baths" },
          { num: 17, text: "Tools" },
          { num: 18, text: "Vehicles" },
          { num: 19, text: "Ponies" },
          { num: 20, text: "Education centre" }
        ]
      },
      3: {
        title: "PART 3: Questions 21-30",
        multiSelects: [
          {
            numGroup: "21-22",
            question: "Questions 21 and 22: Choose TWO letters, A–E.\nWhich TWO facts in the sessions on food safety were new information for Nadia and Fergus?",
            options: [
              "A the amount of plastic in the ocean",
              "B the number of diseases caused by contaminated food",
              "C the amount of food that is wasted",
              "D the number of people who are obese",
              "E the result of treating animals with antibiotics"
            ]
          },
          {
            numGroup: "23-24",
            question: "Questions 23 and 24: Choose TWO letters, A–E.\nWhich TWO features of a project aiming to prevent food fraud impressed Fergus?",
            options: [
              "A the new technology it used",
              "B the publicity it received",
              "C the use of multiple tests on food items",
              "D the variety of dietary requirements included",
              "E the way information was made widely accessible"
            ]
          },
          {
            numGroup: "25-26",
            question: "Questions 25 and 26: Choose TWO letters, A–E.\nWhich TWO topics do both students recommend should be included in the course?",
            options: [
              "A sustainable fishing",
              "B targeted nutrition",
              "C global differences in consumption",
              "D sustainable agriculture",
              "E digital technology and food"
            ]
          }
        ],
        matchingHeader: "Questions 27-30: Complete the flow-chart below. Choose FOUR answers from the box (A-F).",
        matchingBox: [
          "A This was challenging but enjoyable.",
          "B This led to some disagreement.",
          "C This was easy to decide on.",
          "D This was helped by the guidelines provided.",
          "E This seemed like an unnecessary stage.",
          "F This involved selecting a new ingredient."
        ],
        matchingItems: [
          { num: 27, text: "Initial aim" },
          { num: 28, text: "Literature review" },
          { num: 29, text: "Product development" },
          { num: 30, text: "Product production" }
        ]
      },
      4: {
        title: "PART 4: Questions 31-40",
        instruction: "Questions 31-40: Complete the notes below. Write ONE WORD ONLY for each answer.\nChallenges facing the cruise ship industry",
        notes: [
          "Problems with overtourism:",
          "• Q31 is one of the worst problems.",
          "• A tourist Q32 is being introduced in some cities to reduce numbers, e.g. Barcelona.",
          "• Bruges: action taken to limit day trips because city became a 'theme park' (shops only stocking Q33 and souvenirs).",
          "• Dubrovnik: limits numbers by managing the Q34 of cruise ship arrivals.",
          "Problems of perception:",
          "• Cruises associated with elderly.",
          "• Assumption about the Q35 of cruises.",
          "• People think there may be too many Q36 .",
          "Solutions (Attracting younger customers):",
          "• Sustainable e.g. hybrid engines.",
          "• Wide range of activities e.g. boxing, Q37 and well-being programmes.",
          "• Diverse food selection including Q38 options.",
          "• Providing reliable Q39 .",
          "• Improving social media marketing with high quality Q40 ."
        ]
      }
    },
    answerKey: {
      1: ["13th of january", "13 january", "january 13", "13th january", "13.01", "13/1", "13", "january"],
      2: ["48", "forty-eight"],
      3: ["pizza"],
      4: ["india"],
      5: ["mirror"],
      6: ["6th of april", "6 april", "april 6", "6th april", "06.04", "6/4", "6", "april"],
      7: ["natural"],
      8: ["67.50", "sixty-seven fifty", "67.5"],
      9: ["shirt"],
      10: ["hammer"],
      11: ["B", "E"],
      12: ["B", "E"],
      13: ["C", "D"],
      14: ["C", "D"],
      15: ["F"],
      16: ["B"],
      17: ["D"],
      18: ["A"],
      19: ["H"],
      20: ["E"],
      21: ["B", "E"],
      22: ["B", "E"],
      23: ["C", "D"],
      24: ["C", "D"],
      25: ["A", "C"],
      26: ["A", "C"],
      27: ["C"],
      28: ["D"],
      29: ["F"],
      30: ["A"],
      31: ["pollution"],
      32: ["tax"],
      33: ["chocolate"],
      34: ["timing"],
      35: ["cost"],
      36: ["rules"],
      37: ["diving"],
      38: ["vegan"],
      39: ["wifi"],
      40: ["videos", "video"]
    }
  },

  "cam21-t3": {
    id: "cam21-t3",
    book: "Cambridge 21",
    testNumber: 3,
    title: "Cambridge 21 · Test 3",
    parts: {
      1: {
        title: "PART 1: Questions 1-10",
        instruction: "Questions 1-10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.\nFerry to Shetland Islands",
        notes: [
          "Name of ferry company: Q1 Ferries",
          "Ferries depart seven times per Q2 in summer",
          "Cost for four people with car: a little less than £ Q3",
          "Cancellation policy: receive a Q4 (if cancelled a month in advance)",
          "Advice & Cabins:",
          "• book one with a Q5",
          "• luxury cabins have a TV",
          "• Bring snacks and Q6 for the children",
          "• A Q7 is required for the dog kennels",
          "• Try to see Q8 in the morning",
          "• If time, visit Q9 Castle",
          "• The Q10 restaurant in a nearby village is recommended"
        ]
      },
      2: {
        title: "PART 2: Questions 11-20",
        multiSelects: [
          {
            numGroup: "11-12",
            question: "Questions 11 and 12: Choose TWO letters, A-E.\nWhich TWO explanations for the popularity of street food are given?",
            options: ["A low price", "B locally sourced", "C freshly made", "D convenience", "E unusual food"]
          },
          {
            numGroup: "13-14",
            question: "Questions 13 and 14: Choose TWO letters, A-E.\nWhich TWO places are recommended for new street food businesses?",
            options: ["A music festivals", "B food markets", "C weddings", "D parties", "E parks"]
          }
        ],
        mcqs: [
          {
            num: 15,
            question: "What does the speaker say about getting equipment for a street food business?",
            options: ["A High quality equipment is a good investment.", "B It's best to buy second-hand equipment.", "C Renting equipment can be cheap."]
          },
          {
            num: 16,
            question: "What advice is given about creating a product for a street food business?",
            options: ["A Provide information about the ingredients.", "B It is important to have an original product.", "C The presentation is an important factor."]
          }
        ],
        matchingHeader: "Questions 17-20: What problem did the owners of each street food business experience?",
        matchingBox: [
          "A Some ingredients were too expensive.",
          "B The meals took a long time to prepare.",
          "C They had no money for marketing.",
          "D It was difficult to get a permit to sell food.",
          "E A competitor was selling similar food in their area.",
          "F They worked very long hours."
        ],
        matchingItems: [
          { num: 17, text: "Thai Basil" },
          { num: 18, text: "Basque" },
          { num: 19, text: "Lou's kitchen" },
          { num: 20, text: "Chip Chop" }
        ]
      },
      3: {
        title: "PART 3: Questions 21-30",
        multiSelects: [
          {
            numGroup: "21-22",
            question: "Questions 21 and 22: Choose TWO letters, A-E.\nWhich TWO points do the speakers make about the terms 'ethical' and 'sustainable' fashion?",
            options: [
              "A Their definitions keep changing.",
              "B People think they mean the same thing.",
              "C The term 'eco-friendly' is preferable.",
              "D They are often used imprecisely.",
              "E Companies should avoid using them on clothing labels."
            ]
          },
          {
            numGroup: "23-24",
            question: "Questions 23 and 24: Choose TWO letters, A-E.\nWhich TWO claims about wool production do the speakers disagree with?",
            options: [
              "A Sheep are generally well-treated.",
              "B Wool is easy to recycle.",
              "C Wool is a long-lasting fabric.",
              "D Wool production involves few chemicals.",
              "E Sheep do less environmental damage than other livestock."
            ]
          }
        ],
        matchingHeader: "Questions 25-30: What comment do the speakers make about each semi-synthetic fabric?",
        matchingBox: [
          "A The production process is fuel efficient.",
          "B It is the least sustainable of alternative fabrics.",
          "C Production costs are high.",
          "D It provides additional health benefits.",
          "E It is not durable in the long-term.",
          "F It needs to be produced in a certain way to be sustainable.",
          "G Chemicals required for production can be reused.",
          "H This is from a wholly sustainable source."
        ],
        matchingItems: [
          { num: 25, text: "Lyocell" },
          { num: 26, text: "Cupro" },
          { num: 27, text: "Bamboo" },
          { num: 28, text: "EcoVero" },
          { num: 29, text: "Cork" },
          { num: 30, text: "Hemp" }
        ]
      },
      4: {
        title: "PART 4: Questions 31-40",
        instruction: "Questions 31-40: Complete the notes below. Write ONE WORD ONLY for each answer.\nInvasive species",
        notes: [
          "An invasive species can be a problem when it:",
          "• eats native species.",
          "• introduces a new Q31 .",
          "• takes food from native species.",
          "• threatens an entire Q32 .",
          "How invasive species spread:",
          "• accidentally e.g. via people returning from their Q33 or on cargo ships",
          "• intentionally e.g. for pest control, or as Q34 .",
          "Examples:",
          "• Rhinella marina (toads): introduced to Australia to eat insects damaging Q35 plantations.",
          "• Rhododendron plants prevent Q36 from reaching native plants.",
          "• Grey squirrels reduce food for native red squirrels and spread a Q37 that kills red squirrels.",
          "Tackling invasive species:",
          "• Monitoring helps us to understand the Q38 of invasive species and their impact.",
          "• Setting up a national Q39 makes it easier to track them.",
          "• Asking the public to Q40 and report them helps with monitoring."
        ]
      }
    },
    answerKey: {
      1: ["northern"],
      2: ["week"],
      3: ["250", "two hundred and fifty"],
      4: ["voucher"],
      5: ["window"],
      6: ["books"],
      7: ["blanket"],
      8: ["dolphins"],
      9: ["drum"],
      10: ["italian"],
      11: ["C", "E"],
      12: ["C", "E"],
      13: ["B", "E"],
      14: ["B", "E"],
      15: ["B"],
      16: ["C"],
      17: ["F"],
      18: ["A"],
      19: ["B"],
      20: ["D"],
      21: ["B", "D"],
      22: ["B", "D"],
      23: ["D", "E"],
      24: ["D", "E"],
      25: ["G"],
      26: ["B"],
      27: ["F"],
      28: ["A"],
      29: ["H"],
      30: ["D"],
      31: ["disease"],
      32: ["ecosystem"],
      33: ["holiday", "holidays", "holiday(s)"],
      34: ["pets"],
      35: ["sugar"],
      36: ["light"],
      37: ["virus"],
      38: ["behaviour", "behavior"],
      39: ["database"],
      40: ["photograph", "photo"]
    }
  },

  "cam21-t4": {
    id: "cam21-t4",
    book: "Cambridge 21",
    testNumber: 4,
    title: "Cambridge 21 · Test 4",
    parts: {
      1: {
        title: "PART 1: Questions 1-10",
        instruction: "Questions 1-10: Complete the form below. Write ONE WORD ONLY for each answer.\nSurvey about shopping in Broadbeach",
        notes: [
          "Name: Martyn Q1",
          "Today's journey to Broadbeach town centre: used his Q2",
          "Purpose of today's trip:",
          "• has visited the Q3",
          "• looking for a new Q4",
          "• collecting Q5 (after repair)",
          "Preferred day for shopping: Q6",
          "Opinions about shopping in town centre:",
          "• Finds service in shops is excellent",
          "• Thinks there are too many places selling Q7",
          "• Would like more places to buy Q8",
          "Opinions about new out-of-town Shopping Centre:",
          "• Likes the Q9 best",
          "• Believes the Q10 is unnecessary"
        ]
      },
      2: {
        title: "PART 2: Questions 11-20",
        multiSelects: [
          {
            numGroup: "11-12",
            question: "Questions 11 and 12: Choose TWO letters, A-E.\nIn which TWO areas of the business exhibition did James Craig promote his company last year?",
            options: [
              "A the Digital Marketing Centre",
              "B the TalkCon Zone",
              "C the Breakout area",
              "D the Business Village",
              "E the Business Connections Zone"
            ]
          },
          {
            numGroup: "13-14",
            question: "Questions 13 and 14: Choose TWO letters, A-E.\nWhich TWO facts are given about discounts on popular brands available to exhibitors?",
            options: [
              "A They are available to all members of exhibiting companies.",
              "B They can be used for both food and clothing.",
              "C They only apply if people spend at least £400.",
              "D They can be used by family members.",
              "E The percentage saved is always the same."
            ]
          }
        ],
        matchingHeader: "Questions 15-20: Which topic will each speaker focus on?",
        matchingBox: [
          "A Supporting job seekers",
          "B Dealing with personal problems",
          "C Effects of an unexpectedly rapid expansion",
          "D A global range of business experiences",
          "E Coping with financial set-backs",
          "F Developing a company in response to changing markets",
          "G Combining business success with contributions to charities"
        ],
        matchingItems: [
          { num: 15, text: "Jim Clowrie" },
          { num: 16, text: "David France" },
          { num: 17, text: "Oliver Stanton" },
          { num: 18, text: "Francesca Heptonstall" },
          { num: 19, text: "Salman Khan" },
          { num: 20, text: "Annie Craven" }
        ]
      },
      3: {
        title: "PART 3: Questions 21-30",
        mcqs: [
          {
            num: 21,
            question: "Which aspect of their presentation are Mia and Leo both concerned about?",
            options: ["A meeting the deadline", "B finding suitable examples", "C including original ideas"]
          },
          {
            num: 22,
            question: "The students decide to focus their assignment on housing for",
            options: ["A family groups.", "B old people.", "C single people."]
          },
          {
            num: 23,
            question: "The students agree that demand for accommodation in urban areas should be met by",
            options: ["A repurposing offices and factories.", "B constructing tall buildings.", "C developing creative ideas for smaller homes."]
          }
        ],
        matchingHeader: "Questions 24-30: What opinion is given about each development?",
        matchingBox: [
          "A This could cause unnecessary anxiety.",
          "B This would be especially beneficial for city residents.",
          "C This would be challenging for young people.",
          "D This would have environmental benefits.",
          "E This could encourage creativity.",
          "F This could lead to social problems.",
          "G This could enable retired people to share a project.",
          "H This would help some people but cause problems for others.",
          "I This would suit both existing and new members of a household."
        ],
        matchingItems: [
          { num: 24, text: "use of roof space for gardens" },
          { num: 25, text: "shared working spaces" },
          { num: 26, text: "moveable internal walls" },
          { num: 27, text: "smart mirrors in bathrooms" },
          { num: 28, text: "bike sheds with charging points" },
          { num: 29, text: "restriction of cars to certain areas" },
          { num: 30, text: "communal vegetable plots" }
        ]
      },
      4: {
        title: "PART 4: Questions 31-40",
        instruction: "Questions 31-40: Complete the notes below. Write ONE WORD ONLY for each answer.\nMusic therapy for surgical patients",
        notes: [
          "Background:",
          "• Surgery impacts patients because they may experience discomfort or unwelcome changes to their Q31 .",
          "Recent research (data from about 100 Q32 ):",
          "• Listening to music improved hospital patients' sense of wellbeing & reduced length of stay.",
          "• The patients listened to music with a Q33 effect.",
          "• The music was mostly played through music Q34 .",
          "• Patients reported an absence or low levels of Q35 .",
          "• Patients played music in hospital needed less Q36 than those who weren't.",
          "• Best results achieved when patients were played music while they were Q37 .",
          "• Music was effective because it served as a Q38 .",
          "• Researchers recommend playing music or sounds from Q39 to all surgical patients.",
          "• A future study will investigate the best Q40 for the music."
        ]
      }
    },
    answerKey: {
      1: ["leigh"],
      2: ["motorbike"],
      3: ["hairdresser"],
      4: ["suit"],
      5: ["laptop"],
      6: ["monday"],
      7: ["coffee"],
      8: ["books"],
      9: ["plants"],
      10: ["cinema"],
      11: ["C", "E"],
      12: ["C", "E"],
      13: ["A", "B"],
      14: ["A", "B"],
      15: ["C"],
      16: ["G"],
      17: ["D"],
      18: ["A"],
      19: ["F"],
      20: ["B"],
      21: ["B"],
      22: ["A"],
      23: ["B"],
      24: ["B"],
      25: ["E"],
      26: ["I"],
      27: ["A"],
      28: ["D"],
      29: ["H"],
      30: ["G"],
      31: ["routine"],
      32: ["trials"],
      33: ["calming"],
      34: ["pillows"],
      35: ["anxiety"],
      36: ["medication"],
      37: ["awake"],
      38: ["distraction"],
      39: ["nature"],
      40: ["volume"]
    }
  },
  "cam19-t1": {
    "id": "cam19-t1",
    "book": "Cambridge 19",
    "testNumber": 1,
    "title": "Cambridge 19 \u00b7 Test 1",
    "parts": {
        "1": {
            "title": "PART 1: Questions 1-10",
            "instruction": "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
            "notesHeader": "Hinchingbrooke Country Park Job Application",
            "notes": [
                "Start date: Q1 (the) 13(th) (of) January / 13.01",
                "Total area of park: Q2 48 hectares",
                "Caf\u00e9 refreshment specialty: Q3 pizza",
                "Visitor origin: foreign tourists from Q4 India",
                "Souvenir shop item: decorative Q5 mirror",
                "Next interview date: Q6 (the) 6(th) (of) April",
                "Required park material: Q7 natural wood",
                "Hourly pay rate: \u00a3 Q8 67.50",
                "Staff uniform requirement: branded Q9 shirt",
                "Maintenance tool provided: safety Q10 hammer"
            ]
        },
        "2": {
            "title": "PART 2: Questions 11-20",
            "instruction": "Questions 11-15: Choose the correct letter, A, B or C.\nFarley House and Gardens",
            "mcqs": [
                {
                    "num": 11,
                    "question": "What is new at Farley House this year?",
                    "options": [
                        "A The gift shop",
                        "B The tearoom",
                        "C The exhibition space"
                    ],
                    "answer": "C"
                },
                {
                    "num": 12,
                    "question": "The garden maze is recommended for",
                    "options": [
                        "A young children.",
                        "B teenagers.",
                        "C adults only."
                    ],
                    "answer": "A"
                }
            ]
        },
        "3": {
            "title": "PART 3: Questions 21-30",
            "instruction": "Questions 21-24: Choose TWO letters, A-E.\nDiscussion on consumer food trends",
            "mcqs": [
                {
                    "num": 21,
                    "question": "Which TWO opinions do the students share about plant-based diets?",
                    "options": [
                        "A They are growing fast.",
                        "B They are overpriced.",
                        "C They lack variety.",
                        "D They improve health.",
                        "E They reduce carbon footprint."
                    ],
                    "answer": "B"
                },
                {
                    "num": 22,
                    "question": "Which TWO opinions do they share about organic farming?",
                    "options": [
                        "A It requires more land.",
                        "B It supports biodiversity.",
                        "C It costs too much.",
                        "D It is inefficient.",
                        "E It tastes better."
                    ],
                    "answer": "D"
                }
            ]
        },
        "4": {
            "title": "PART 4: Questions 31-40",
            "instruction": "Questions 31-40: Complete the notes below. Write ONE WORD ONLY.",
            "notesHeader": "Sustainable Urban Architecture",
            "notes": [
                "Building envelope insulated with straw Q31 walls",
                "Solar panel orientation designed by architect's Q32 son",
                "Biomass boiler reduces reliance on fossil Q33 fuel",
                "Green roof increases urban Q34 oxygen output",
                "Window frames designed in Q35 rectangular shape",
                "Interior lighting powered by LED Q36 lamps",
                "Residential units designed for single Q37 family living",
                "Heating demand peaks during cold Q38 winter months",
                "Landscaping integrates indigenous Q39 soil",
                "Rainwater harvested from roof during heavy Q40 rain"
            ]
        }
    },
    "answerKey": {
        "1": "(the) 13(th) (of) January / 13.01 / 13.1",
        "2": "48 / forty-eight",
        "3": "pizza",
        "4": "India",
        "5": "mirror",
        "6": "(the) 6(th) (of) April / 06.04 / 6.4",
        "7": "natural",
        "8": "67.50 / sixty-seven fifty",
        "9": "shirt",
        "10": "hammer",
        "11": "C",
        "12": "A",
        "13": "B",
        "14": "E",
        "15": "D",
        "16": "F",
        "17": "A",
        "18": "C",
        "19": "B",
        "20": "D",
        "21": "B",
        "22": "D",
        "23": "A",
        "24": "C",
        "25": "E",
        "26": "G",
        "27": "B",
        "28": "D",
        "29": "F",
        "30": "A",
        "31": "walls",
        "32": "son",
        "33": "fuel",
        "34": "oxygen",
        "35": "rectangular",
        "36": "lamps",
        "37": "family",
        "38": "winter",
        "39": "soil",
        "40": "rain"
    }
},
  "cam19-t2": {
    "id": "cam19-t2",
    "book": "Cambridge 19",
    "testNumber": 2,
    "title": "Cambridge 19 \u00b7 Test 2",
    "parts": {
        "1": {
            "title": "PART 1: Questions 1-10",
            "instruction": "Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.",
            "tableHeader": [
                "Guitar Course Level",
                "Schedule",
                "Cost",
                "Requirements"
            ],
            "tableRows": [
                {
                    "name": "Beginner Level",
                    "learn": "Basic chords and acoustic tuning",
                    "cost": "\u00a3150",
                    "info": "Taught by instructor Q1 Mathieson"
                },
                {
                    "name": "Intermediate",
                    "learn": "Fingerpicking for Q2 beginners",
                    "cost": "\u00a3220",
                    "info": "Held at local Q3 college"
                }
            ],
            "notesHeader": "General Information (Questions 4-10)",
            "notes": [
                "New studio located at Q4 New Street",
                "Class starting time: Q5 11 / eleven (am)",
                "Students must bring their own Q6 instrument",
                "Focus on playing by Q7 ear",
                "Rhythm training includes Q8 clapping exercises",
                "Students receive a weekly Q9 recording of lessons",
                "Final practice performed Q10 alone"
            ]
        },
        "2": {
            "title": "PART 2: Questions 11-20",
            "instruction": "Questions 11-20: Choose the correct letter, A, B or C.\nLifeboat Volunteer Training",
            "mcqs": [
                {
                    "num": 11,
                    "question": "What inspired David to join the lifeboat crew?",
                    "options": [
                        "A A family member",
                        "B A news report",
                        "C A local rescue event"
                    ],
                    "answer": "A"
                },
                {
                    "num": 12,
                    "question": "The initial training course lasted for",
                    "options": [
                        "A two weeks.",
                        "B one month.",
                        "C six months."
                    ],
                    "answer": "C"
                }
            ]
        },
        "3": {
            "title": "PART 3: Questions 21-30",
            "instruction": "Questions 21-30: Matching & MCQs\nFootwear Recycling Project",
            "mcqs": [
                {
                    "num": 21,
                    "question": "What surprised the students about shoe recycling?",
                    "options": [
                        "A The volume of waste",
                        "B The difficulty of shredding materials",
                        "C The lack of public interest"
                    ],
                    "answer": "E"
                }
            ]
        },
        "4": {
            "title": "PART 4: Questions 31-40",
            "instruction": "Questions 31-40: Complete the notes below. Write ONE WORD ONLY.",
            "notesHeader": "Marine Biology: Whale Migration",
            "notes": [
                "Whales migrate when seasonal currents Q31 move",
                "Feeding grounds feature Q32 short summer days",
                "Vertebrae separated by cartilage Q33 discs",
                "Deep diving requires efficient storage of Q34 oxygen",
                "Breath held using reinforced windpipe Q35 tube",
                "Whales adapt to extreme arctic Q36 temperatures",
                "Diet consists mainly of high- Q37 protein krill",
                "Calving occurs in open ocean Q38 space",
                "Shallow coastal areas supply abundant Q39 seaweed",
                "Conservation efforts protect Q40 endangered species"
            ]
        }
    },
    "answerKey": {
        "1": "Mathieson",
        "2": "beginners",
        "3": "college",
        "4": "New",
        "5": "11 / eleven (am)",
        "6": "instrument",
        "7": "ear",
        "8": "clapping",
        "9": "recording",
        "10": "alone",
        "11": "A",
        "12": "C",
        "13": "B",
        "14": "E",
        "15": "D",
        "16": "A",
        "17": "C",
        "18": "B",
        "19": "D",
        "20": "A",
        "21": "E",
        "22": "C",
        "23": "A",
        "24": "D",
        "25": "B",
        "26": "F",
        "27": "C",
        "28": "E",
        "29": "A",
        "30": "D",
        "31": "move",
        "32": "short",
        "33": "discs",
        "34": "oxygen",
        "35": "tube",
        "36": "temperatures",
        "37": "protein",
        "38": "space",
        "39": "seaweed",
        "40": "endangered"
    }
},
  "cam19-t3": {
    "id": "cam19-t3",
    "book": "Cambridge 19",
    "testNumber": 3,
    "title": "Cambridge 19 \u00b7 Test 3",
    "parts": {
        "1": {
            "title": "PART 1: Questions 1-10",
            "instruction": "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
            "notesHeader": "Local Market Shopping Information",
            "notes": [
                "Market location: near the Q1 harbour / harbor",
                "Pedestrian access over the old Q2 bridge",
                "Opening hours end at Q3 3.30 / three thirty",
                "Stall owner name: Miss Q4 Rose / rose",
                "Look for the blue entrance Q5 sign",
                "Popular flower stall color: Q6 purple",
                "Local edible sea plant: Q7 samphire",
                "Fresh fruit stall: organic Q8 melon",
                "Imported tropical fruit: Q9 coconut",
                "Bakery flavor specialty: Q10 strawberry"
            ]
        },
        "2": {
            "title": "PART 2: Questions 11-20",
            "instruction": "Questions 11-20: Choose the correct letter, A, B or C.\nChildren's Literature: Alive and Kicking",
            "mcqs": [
                {
                    "num": 11,
                    "question": "Why does the speaker recommend 'Alive and Kicking'?",
                    "options": [
                        "A Colourful illustrations",
                        "B Well-known author",
                        "C Engaging storyline"
                    ],
                    "answer": "D"
                }
            ]
        },
        "3": {
            "title": "PART 3: Questions 21-30",
            "instruction": "Questions 21-30: Complete the flowchart and MCQs.",
            "mcqs": [
                {
                    "num": 21,
                    "question": "Which aspect of the habitat study was hardest?",
                    "options": [
                        "A Data collection",
                        "B Specimen identification",
                        "C Statistical analysis"
                    ],
                    "answer": "A"
                }
            ]
        },
        "4": {
            "title": "PART 4: Questions 31-40",
            "instruction": "Questions 31-40: Complete the notes below. Write ONE WORD ONLY.",
            "notesHeader": "Agricultural Science: Seaweed and Microalgae Uses",
            "notes": [
                "Microalgae extracts used in organic Q31 toothpaste",
                "Enriched algae act as natural plant Q32 fertilisers / fertilizers",
                "Soil enrichment provides vital Q33 nutrients",
                "Biomass harvesting measured by dry Q34 weight",
                "Reduces reliance on synthetic chemical Q35 routine",
                "Laboratory growth verified in clinical Q36 trials",
                "Algae extracts have natural Q37 calming properties",
                "Used in manufacturing eco-friendly Q38 pillows",
                "Application reduces crop stress and Q39 anxiety",
                "Replaces harmful chemical Q40 medication"
            ]
        }
    },
    "answerKey": {
        "1": "harbour / harbor",
        "2": "bridge",
        "3": "3.30 / three thirty / \u00bd / half 3 / three",
        "4": "Rose / rose",
        "5": "sign",
        "6": "purple",
        "7": "samphire",
        "8": "melon",
        "9": "coconut",
        "10": "strawberry",
        "11": "D",
        "12": "B",
        "13": "C",
        "14": "F",
        "15": "G",
        "16": "H",
        "17": "D",
        "18": "E",
        "19": "A",
        "20": "C",
        "21": "A",
        "22": "C",
        "23": "C",
        "24": "H",
        "25": "B",
        "26": "D",
        "27": "E",
        "28": "G",
        "29": "A",
        "30": "F",
        "31": "toothpaste",
        "32": "fertilisers / fertilizers",
        "33": "nutrients",
        "34": "weight",
        "35": "routine",
        "36": "trials",
        "37": "calming",
        "38": "pillows",
        "39": "anxiety",
        "40": "medication"
    }
},
  "cam19-t4": {
    "id": "cam19-t4",
    "book": "Cambridge 19",
    "testNumber": 4,
    "title": "Cambridge 19 \u00b7 Test 4",
    "parts": {
        "1": {
            "title": "PART 1: Questions 1-10",
            "instruction": "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
            "notesHeader": "First Day at Work - Staff Induction",
            "notes": [
                "Name of new trainee: Q1 Kaeden",
                "Personal belongings left in staff Q2 locker(s)",
                "Identification document required: Q3 passport",
                "Company clothing provided: Q4 uniform",
                "Office located on the Q5 third / 3rd floor",
                "Direct phone contact: Q6 0412 665 903",
                "Safety badge color: Q7 yellow",
                "ID card holder material: Q8 plastic",
                "First aid kit contains pack of Q9 ice",
                "Storage room requires protective Q10 gloves"
            ]
        },
        "2": {
            "title": "PART 2: Questions 11-20",
            "instruction": "Questions 11-20: Choose the correct letter, A, B or C.\nCompton Park Runners Club",
            "mcqs": [
                {
                    "num": 11,
                    "question": "Why did Sarah join the running club?",
                    "options": [
                        "A To improve fitness",
                        "B To make friends",
                        "C To prepare for a marathon"
                    ],
                    "answer": "B"
                }
            ]
        },
        "3": {
            "title": "PART 3: Questions 21-30",
            "instruction": "Questions 21-30: Grandfather's Bookshop",
            "mcqs": [
                {
                    "num": 21,
                    "question": "Where are rare first editions stored?",
                    "options": [
                        "A Behind the main counter",
                        "B In the glass display case",
                        "C In the back room archive"
                    ],
                    "answer": "C"
                }
            ]
        },
        "4": {
            "title": "PART 4: Questions 31-40",
            "instruction": "Questions 31-40: Complete the notes below. Write ONE WORD ONLY.",
            "notesHeader": "Primate Ecology & Wildlife Conservation",
            "notes": [
                "Male primates display aggression during territory Q31 competition",
                "Seasonal migration driven by search for Q32 food",
                "Habitat destruction increases vulnerability to Q33 disease",
                "Encroachment caused by expanding Q34 agriculture",
                "Researchers track troop movements using GPS Q35 maps",
                "Farmers protect crops from wild Q36 cattle",
                "Locomotion efficiency depends on tree climbing Q37 speed",
                "Canopy corridors vital for arboreal Q38 monkeys",
                "Riverside habitats threatened by illegal Q39 fishing",
                "Seasonal rainfall causes severe forest Q40 flooding"
            ]
        }
    },
    "answerKey": {
        "1": "Kaeden",
        "2": "locker(s)",
        "3": "passport",
        "4": "uniform",
        "5": "third / 3rd",
        "6": "0412 665 903",
        "7": "yellow",
        "8": "plastic",
        "9": "ice",
        "10": "gloves",
        "11": "B",
        "12": "E",
        "13": "B",
        "14": "D",
        "15": "C",
        "16": "A",
        "17": "F",
        "18": "B",
        "19": "E",
        "20": "D",
        "21": "C",
        "22": "A",
        "23": "D",
        "24": "B",
        "25": "E",
        "26": "G",
        "27": "C",
        "28": "F",
        "29": "A",
        "30": "D",
        "31": "competition",
        "32": "food",
        "33": "disease",
        "34": "agriculture",
        "35": "maps",
        "36": "cattle",
        "37": "speed",
        "38": "monkeys",
        "39": "fishing",
        "40": "flooding"
    }
}
};
