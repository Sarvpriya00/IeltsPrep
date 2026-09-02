/**
 * IELTS Academic Writing Tasks Suite (8 Task 1s + 8 Task 2s = 16 Total Tasks)
 */

export const writingData = [
  // --- TASK 1 SUITE (8 TASKS) ---
  {
    id: 1,
    testBook: "Cambridge 19",
    testNumber: 1,
    task: 1,
    title: "Cambridge 19 Test 1 Task 1: Line Graph — Social Centre Participants",
    prompt: `The graph below gives information on the numbers of participants for different activities at one social centre in Melbourne, Australia for the period 2000 to 2020.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`,
    image: "/images/cam19/t1_task1.jpg",
    targetWords: 150,
    sampleAnswer: `The line graph compares participant enrollment in five distinct activities at a social centre in Melbourne, Australia, between 2000 and 2020.

Overall, film club and martial arts demonstrated significant growth in popularity over the 20-year period, while table tennis experienced fluctuations and musical performances witnessed a dramatic decline.

In 2000, film club attracted the highest participation at roughly 64 people, rising steadily to peak at 85 by 2020. Martial arts also grew consistently, increasing from 35 participants to 47. Conversely, musical performances started at 44 participants before precipitously dropping to absolute zero by 2020.

Table tennis engagement fluctuated between 15 and 20 participants until 2010, after which it surged to 54. Amateur dramatics saw a gradual fall from 28 to just 6 participants by the end of the timeline.`
  },
  {
    id: 2,
    testBook: "Cambridge 19",
    testNumber: 2,
    task: 1,
    title: "Cambridge 19 Test 2 Task 1: Map / Plan — Porth Harbour Redevelopment",
    prompt: `The plans below show a harbour in 2000 and how it looks today.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`,
    image: "/images/cam19/t2_task1_today.jpg",
    targetWords: 150,
    sampleAnswer: `The maps illustrate the structural developments that have taken place at Porth Harbour from 2000 to the present day.

Overall, the harbour has transformed from a primarily commercial fishing dock into a modernized leisure and tourism destination, adding new marina facilities, hotel accommodation, and recreational infrastructure.

In 2000, the northern side of the harbour contained disused docks and public car parking. Today, these areas have been redeveloped into luxury apartments, a multi-story car park, and a seaside hotel complex. The commercial fishing boats have been relocated away from the main marina area.

Additionally, a brand-new promenade with coastal access and outdoor cafes has been constructed along the southern shoreline, catering to increased tourist traffic.`
  },
  {
    id: 3,
    testBook: "Cambridge 19",
    testNumber: 3,
    task: 1,
    title: "Cambridge 19 Test 3 Task 1: Process Diagram — Biofuel Ethanol Production",
    prompt: `The diagram below shows how a biofuel called ethanol is produced.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`,
    image: "/images/cam19/t3_task1.jpg",
    targetWords: 150,
    sampleAnswer: `The flow diagram outlines the cyclical biological and industrial stages involved in producing ethanol biofuel.

Overall, the process is driven by plant photosynthesis, followed by mechanical harvesting, chemical processing, fermentation, and ultimate redistribution for transportation fuel.

Initially, energy from sunlight and carbon dioxide are absorbed by growing plants and trees. Once fully grown, crops are harvested by heavy machinery and transported to industrial processing plants. The harvested plant matter is shredded and mixed with cellulose enzymes to break down plant fibers into complex sugars.

Next, the sugar mixture undergoes microbial fermentation in specialized tanks, converting plant sugars into liquid ethanol. The purified ethanol is subsequently distributed to gas stations to fuel automobiles, releasing carbon dioxide back into the atmosphere to restart the cycle.`
  },
  {
    id: 4,
    testBook: "Cambridge 19",
    testNumber: 4,
    task: 1,
    title: "Cambridge 19 Test 4 Task 1: Pie & Bar Chart — Australian Dance Classes",
    prompt: `The charts below give information on the location and types of dance classes young people in a town in Australia are currently attending.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`,
    image: "/images/cam19/t4_task1.jpg",
    targetWords: 150,
    sampleAnswer: `The pie chart and bar chart detail where young people in an Australian town attend dance classes and the relative popularity of different dance styles across age groups.

Overall, private dance studios accommodate the majority of dance students, while ballet and tap are overwhelmingly preferred by younger children, whereas hip-hop dominates among teenagers.

According to the pie chart, 48% of students attend classes in private dance studios, followed by 24% at school halls and 18% in community centers.

The bar chart indicates that among under-11s, ballet is the most popular choice with over 600 attendees, closely followed by tap dance. Conversely, for the 11-16 age bracket, hip-hop is the undisputed favorite with nearly 500 participants, while ballet numbers decline sharply.`
  },
  {
    id: 5,
    testBook: "Cambridge 21",
    testNumber: 1,
    task: 1,
    title: "Cambridge 21 Test 1 Task 1: Line Graph — US Jobs (1960–2020)",
    prompt: `The chart below shows the number of jobs in four sectors of the economy in the US from 1960 to 2020.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`,
    image: "/images/cam21/t1_task1.jpg",
    targetWords: 150,
    sampleAnswer: `The graph illustrates changes in employment numbers across four economic sectors in the United States between 1960 and 2020.

Overall, manufacturing and agriculture suffered continuous long-term declines, whereas retail and healthcare experienced substantial job growth over the 60-year timeframe.

In 1960, manufacturing provided the highest employment at 15 million jobs, peaking at 20 million in 1980 before declining steadily below 15 million by 2020. Conversely, retail employment expanded consistently from 5 million to 15 million.

Healthcare witnessed rapid growth after 1980, rising to equal retail at 15 million jobs in 2020. Agriculture recorded the lowest numbers throughout, falling from 5 million in 1960 to 2.5 million.`
  },
  {
    id: 6,
    testBook: "Cambridge 21",
    testNumber: 2,
    task: 1,
    title: "Cambridge 21 Test 2 Task 1: Map / Plan — College Café Redesign",
    prompt: `The plans below show a college café before it was redesigned and how it looks now.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`,
    image: "/images/cam21/t2_task1.jpg",
    targetWords: 150,
    sampleAnswer: `The diagrams compare the layout of a college café before and after recent structural renovations.

Overall, the café has been modernized to enhance dining capacity, replacing staff-only areas with takeaway counters, a coffee bar, and an outdoor barbecue terrace.

Previously, the main building contained a staff dining room, a central seating area, and a traditional food counter. Following the redesign, the staff dining room was removed to install a coffee bar and takeaway counter.

Externally, an outdoor dining patio was built along the southern boundary, incorporating an outdoor barbecue area at the far end.`
  },
  {
    id: 7,
    testBook: "Cambridge 21",
    testNumber: 3,
    task: 1,
    title: "Cambridge 21 Test 3 Task 1: Process Diagram — Rain-Shadow Desert",
    prompt: `The diagram below shows how one type of desert, known as a rain-shadow desert, is formed.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`,
    image: "/images/cam21/t3_task1.jpg",
    targetWords: 150,
    sampleAnswer: `The process diagram explains the geographical formation of a rain-shadow desert.

Overall, rain-shadow deserts are formed when tall mountain ranges block moisture-bearing coastal winds from reaching inland areas.

Moist ocean air moves inland toward coastal mountain peaks. As the air ascends the windward side, it cools and condenses, creating precipitation on the coastal slope.

After losing its moisture, the dry air crosses the mountain peaks and descends the leeward side, absorbing ground moisture and creating an arid desert zone.`
  },
  {
    id: 8,
    testBook: "Cambridge 21",
    testNumber: 4,
    task: 1,
    title: "Cambridge 21 Test 4 Task 1: Pie & Table — Library User Survey",
    prompt: `The chart and table below show the results of a survey of library users at a university.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`,
    image: "/images/cam21/t4_task1.jpg",
    targetWords: 150,
    sampleAnswer: `The pie chart and table summarize student satisfaction ratings and resource usage frequency at a university library.

Overall, user satisfaction is overwhelmingly positive, with digital catalog access and study spaces receiving top ratings.

The pie chart indicates that 68% of respondents rated library services as 'good' or 'very good', while 20% rated them 'satisfactory' and 12% expressed dissatisfaction.

The table reveals that electronic journal databases are the most frequently used service, accessed daily by 45% of students.`
  },

  // --- TASK 2 SUITE (8 TASKS) ---
  {
    id: 9,
    testBook: "Cambridge 19",
    testNumber: 1,
    task: 2,
    title: "Cambridge 19 Test 1 Task 2: Essay — Competition vs Cooperation",
    prompt: `Some people think that competition at work, at school and in daily life is a good thing. Others believe that we should try to cooperate more, rather than competing against each other.

Discuss both these views and give your own opinion.

Give reasons for your answer and include any relevant examples from your own knowledge or experience.`,
    image: null,
    targetWords: 250,
    sampleAnswer: `The debate over whether human progress is better served by competition or cooperation is central to modern education and workplace philosophy. While competitive environments encourage individual drive and innovation, I firmly believe that fostering teamwork and mutual cooperation produces far greater societal benefits.

Proponents of competition argue that it drives individuals to achieve personal excellence. In academic and corporate settings, rivalry encourages students and employees to push beyond their comfort zones, leading to breakthrough discoveries and high performance. For instance, tech companies competing for market share continuously refine products, benefiting consumers.

Conversely, advocates of cooperation emphasize that complex modern challenges require collective problem-solving. In workplaces, collaborative environments encourage knowledge-sharing and reduce stress, leading to higher overall productivity. Furthermore, teaching children cooperation in schools nurtures empathy, emotional intelligence, and social cohesion.

In conclusion, while healthy competition can spur individual ambition, cooperation remains the essential cornerstone of sustainable societal advancement and personal well-being.`
  },
  {
    id: 10,
    testBook: "Cambridge 19",
    testNumber: 2,
    task: 2,
    title: "Cambridge 19 Test 2 Task 2: Essay — Shorter Working Week",
    prompt: `The working week should be shorter and workers should have a longer weekend.

Do you agree or disagree?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.`,
    image: null,
    targetWords: 250,
    sampleAnswer: `In recent years, the concept of a four-day working week with extended weekends has gained significant momentum worldwide. I strongly agree that shortening the standard workweek benefits both employees' mental health and overall workplace productivity.

First and foremost, a shorter working week reduces workplace burnout and improves work-life balance. Modern professional life is increasingly demanding, leading to chronic stress, fatigue, and mental health issues. Longer weekends allow workers adequate time to rest, pursue personal interests, and spend quality time with family, resulting in a happier and healthier workforce.

Furthermore, empirical trials of four-day workweeks in countries like Iceland and the UK demonstrate that shorter hours do not decrease productivity. On the contrary, well-rested employees exhibit sharper focus, make fewer errors, and accomplish tasks more efficiently during working hours.

In conclusion, transitioning toward a shorter working week represents a progressive step for modern society, boosting employee well-being while maintaining economic output.`
  },
  {
    id: 11,
    testBook: "Cambridge 19",
    testNumber: 3,
    task: 2,
    title: "Cambridge 19 Test 3 Task 2: Essay — Saving Money for Future",
    prompt: `It is important for everyone, including young people, to save money for their future.

To what extent do you agree or disagree with this statement?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.`,
    image: null,
    targetWords: 250,
    sampleAnswer: `Financial literacy and personal savings habits are essential life skills. I completely agree that building a financial reserve is crucial for everyone, particularly for young people entering an unpredictable economic climate.

First, maintaining personal savings provides a vital security net against unexpected life emergencies, such as sudden illness, job loss, or economic downturns. Young adults who cultivate disciplined saving early are far better equipped to navigate economic instability without accumulating high-interest debt.

Second, saving money early enables long-term investments, such as purchasing a home, funding post-graduate education, or launching an entrepreneurial business venture. Compound interest rewards those who begin saving early in life.

In conclusion, instilling financial discipline and saving habits in young people guarantees individual financial independence and long-term security.`
  },
  {
    id: 12,
    testBook: "Cambridge 19",
    testNumber: 4,
    task: 2,
    title: "Cambridge 19 Test 4 Task 2: Essay — Global Supermarket Food",
    prompt: `In many countries nowadays, consumers can go to a supermarket and buy food produced all over the world.

Do you think this is a positive or negative development?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.`,
    image: null,
    targetWords: 250,
    sampleAnswer: `Globalization has transformed food retail, allowing consumers access to imported produce year-round. In my opinion, while international food trade presents environmental concerns, it is predominantly a positive development for consumer nutrition and global economic trade.

On the positive side, globalized food supply chains enhance dietary variety and nutrition. Consumers in colder climates can access fresh fruits, vegetables, and exotic ingredients regardless of local growing seasons. Additionally, food trade supports agriculture-dependent economies in developing nations.

However, transporting food globally via air freight generates substantial carbon emissions. To mitigate this, governments should encourage sustainable packaging and balance imported food with support for local farming.

In conclusion, global supermarket food availability enhances culinary diversity and international commerce, making it a positive overall trend.`
  },
  {
    id: 13,
    testBook: "Cambridge 21",
    testNumber: 1,
    task: 2,
    title: "Cambridge 21 Test 1 Task 2: Essay — Tall Apartment Blocks in Cities",
    prompt: `The best way to provide enough homes in large cities is to build tall apartment blocks.

To what extent do you agree or disagree with this statement?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.`,
    image: null,
    targetWords: 250,
    sampleAnswer: `Urban housing shortages are an escalating crisis in major global cities. I strongly agree that high-rise residential apartments offer the most practical and sustainable solution for metropolitan housing needs.

Building vertically optimizes scarce urban land, allowing thousands of residents to live near employment hubs while preserving ground space for public parks and infrastructure.

Furthermore, high-density residential towers reduce municipal expenditure on public transport, utilities, and sanitation networks compared to low-density urban sprawl.

In conclusion, constructing tall residential apartment blocks is essential for creating sustainable, accessible, and affordable modern cities.`
  },
  {
    id: 14,
    testBook: "Cambridge 21",
    testNumber: 2,
    task: 2,
    title: "Cambridge 21 Test 2 Task 2: Essay — Theatres & Cinemas in Digital Age",
    prompt: `Some people say that in the digital age, theatres and cinemas are no longer important as people can watch all the entertainment they want online. Others argue that theatres and cinemas are still important both economically and culturally.

Discuss both these views and give your own opinion.

Give reasons for your answer and include any relevant examples from your own knowledge or experience.`,
    image: null,
    targetWords: 250,
    sampleAnswer: `Digital streaming platforms offer unprecedented convenience for home entertainment. However, I agree with those who contend that physical cinemas and theatres remain culturally and economically vital.

While online streaming provides affordable, on-demand content, physical venues deliver an immersive, shared cultural experience that screens cannot replicate.

Economically, movie theatres and live venues support millions of jobs across hospitality, performing arts, and technical production.

In conclusion, digital platforms complement rather than replace physical entertainment venues, which remain central to community culture.`
  },
  {
    id: 15,
    testBook: "Cambridge 21",
    testNumber: 3,
    task: 2,
    title: "Cambridge 21 Test 3 Task 2: Essay — Study Abroad & Work Placements",
    prompt: `All university undergraduate courses should include a period of time spent studying abroad or doing a work placement.

Do you think the advantages of this would outweigh the disadvantages?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.`,
    image: null,
    targetWords: 250,
    sampleAnswer: `Integrating practical work placements or international exchange programs into university degree programs has gained strong support. The career and personal growth benefits of mandatory placements far outweigh potential financial drawbacks.

Mandatory internships bridge academic theory and real-world employment, giving graduates a competitive edge in the job market. Similarly, studying abroad builds global competence and language skills.

In conclusion, university-supported placements deliver invaluable long-term career benefits that far exceed short-term challenges.`
  },
  {
    id: 16,
    testBook: "Cambridge 21",
    testNumber: 4,
    task: 2,
    title: "Cambridge 21 Test 4 Task 2: Essay — Primary School Formal Learning vs Play",
    prompt: `Some people argue that primary schools focus too much on formal learning.

To what extent do you agree with this opinion?

How important do you think it is for children to play as well as learn in the primary school classroom?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.`,
    image: null,
    targetWords: 250,
    sampleAnswer: `Early childhood education heavily shapes social and cognitive development. I strongly agree that modern primary schools place excessive emphasis on formal academic instruction at the expense of unstructured play.

Excessive early academic testing can induce anxiety in young children. Play-based learning, by contrast, fosters creativity, problem-solving, and peer collaboration.

In conclusion, primary education must balance structured academic instruction with active play to support healthy child development.`
  }
];
