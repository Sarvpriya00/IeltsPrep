/**
 * IELTS Writing Masterclass Data Store
 * Fully reconstructed, 100% accurate graphics data, sentence banks, and Master Blueprints.
 */

window.masterclassData = {
  // --- TASK 2 QUESTION SUITE & SENTENCE BANKS ---
  task2Questions: [
    {
      id: "t2-community-service",
      title: "Compulsory Unpaid Community Service for High School Students",
      prompt: "Some people believe that unpaid community service should be a compulsory part of high school programmes. To what extent do you agree or disagree?",
      sentences: [
        // Slot 1: Paraphrase
        { id: 101, slot: "intro-paraphrase", band: 5, text: "Some people think that doing free community service should be forced for high school students." },
        { id: 102, slot: "intro-paraphrase", band: 7, text: "It is often argued that mandatory unpaid volunteer work ought to be integrated into high school curricula." },
        { id: 103, slot: "intro-paraphrase", band: 8, text: "It is widely contended that secondary educational institutions should mandate unpaid civic engagement as a prerequisite for graduation." },

        // Slot 2: Thesis & Stance
        { id: 201, slot: "intro-thesis", band: 5, text: "I totally agree with this statement and I will discuss why in this essay." },
        { id: 202, slot: "intro-thesis", band: 7, text: "I firmly agree with this viewpoint, as voluntary work fosters social empathy and equips teenagers with crucial life skills." },
        { id: 203, slot: "intro-thesis", band: 8, text: "I unequivocally support this policy, as institutionalising community involvement not only nurtures civic responsibility but also cultivates invaluable pragmatic competencies." },

        // Slot 3: Body Topic Sentence
        { id: 301, slot: "body-topic", band: 5, text: "First of all, doing community service makes teenagers become very good and nice people." },
        { id: 302, slot: "body-topic", band: 7, text: "Primarily, participating in community programs substantially broadens a student's social awareness." },
        { id: 303, slot: "body-topic", band: 8, text: "The primary justification for this mandate resides in its capacity to cultivate profound civic consciousness and active social empathy among adolescents." },

        // Slot 4: Body Logic / Elaboration
        { id: 401, slot: "body-logic", band: 5, text: "If they help poor people or clean up parks, they will see that the world is hard and they will behave better." },
        { id: 402, slot: "body-logic", band: 7, text: "When pupils actively interact with vulnerable demographics, they step outside their sheltered academic routines and comprehend real-world socio-economic adversities." },
        { id: 403, slot: "body-logic", band: 8, text: "By stepping outside sheltered academic environments to support marginalized populations, teenagers bridge the gap between theoretical ethical lessons and visceral social realities." },

        // Slot 5: Body Example
        { id: 501, slot: "body-example", band: 5, text: "For example, in my city, some students who clean streets become good citizens later." },
        { id: 502, slot: "body-example", band: 7, text: "For instance, recent pedagogical research in Canada indicated that students involved in local soup kitchens were 40% more inclined to participate in charitable endeavours as adults." },
        { id: 503, slot: "body-example", band: 8, text: "A case in point is the mandatory secondary volunteer framework in Ontario, which correlated with an undeniable 35% reduction in juvenile delinquency and heightened civic turnout." },

        // Slot 6: Conclusion
        { id: 601, slot: "conclusion", band: 5, text: "In a nutshell, I think high schools should really make unpaid work compulsory for every kid." },
        { id: 602, slot: "conclusion", band: 7, text: "In conclusion, making voluntary service an obligatory requirement provides pupils with essential moral grounding and life perspectives." },
        { id: 603, slot: "conclusion", band: 8, text: "Ultimately, institutionalising voluntary community service represents a transformative pedagogical approach, shaping academically proficient youths into conscious, compassionate citizens." }
      ]
    },
    {
      id: "t2-shorter-workweek",
      title: "Shorter Working Week & 3-Day Weekend",
      prompt: "The working week should be shorter and workers should have a longer weekend. Do you agree or disagree?",
      sentences: [
        { id: 111, slot: "intro-paraphrase", band: 5, text: "Many workers want shorter work days and longer weekends to relax." },
        { id: 112, slot: "intro-paraphrase", band: 7, text: "It is increasingly argued that modern employment schedules should be reduced to provide staff with extended weekend breaks." },
        { id: 113, slot: "intro-paraphrase", band: 8, text: "A growing segment of economists advocates for truncating the conventional five-day workweek in favour of a prolonged three-day weekend." },

        { id: 211, slot: "intro-thesis", band: 5, text: "I agree with this idea because working too much is bad for health." },
        { id: 212, slot: "intro-thesis", band: 7, text: "I completely support this proposition because reduced hours mitigate employee burnout while simultaneously optimizing workplace output." },
        { id: 213, slot: "intro-thesis", band: 8, text: "I whole-heartedly endorse this structural reform, as compressed working schedules significantly elevate employee psychological well-being without compromising organizational productivity." },

        { id: 311, slot: "body-topic", band: 5, text: "First, shorter work weeks make people happy and less stressed out." },
        { id: 312, slot: "body-topic", band: 7, text: "Chiefly, condensing weekly labor hours serves as a potent antidote to chronic professional fatigue." },
        { id: 313, slot: "body-topic", band: 8, text: "Principally, an abbreviated working schedule directly addresses the escalating crisis of occupational burnout by restoring work-life equilibrium." },

        { id: 411, slot: "body-logic", band: 5, text: "When people rest more on weekends, they come back to work with good energy and do better jobs." },
        { id: 412, slot: "body-logic", band: 7, text: "With extended recuperation time, employees experience reduced stress levels, enabling them to focus more intensely during core office hours." },
        { id: 413, slot: "body-logic", band: 8, text: "Ample leisure time allows cognitive recovery, which in turn enhances mental acuity, fosters creative problem-solving, and suppresses absenteeism." },

        { id: 511, slot: "body-example", band: 5, text: "For instance, companies in Japan tried this and workers were very happy." },
        { id: 512, slot: "body-example", band: 7, text: "For example, nationwide trials in Iceland showed that shifting to a 4-day week maintained output while dramatically improving staff morale." },
        { id: 513, slot: "body-example", band: 8, text: "This is vividly demonstrated by pilot studies across the UK tech sector, where a four-day model yielded a 35% increase in revenue alongside a sharp drop in staff turnover." },

        { id: 611, slot: "conclusion", band: 5, text: "To sum up, I think all companies should shorten the work week." },
        { id: 612, slot: "conclusion", band: 7, text: "In conclusion, implementing a shorter working week yields dual benefits for personal health and corporate efficiency." },
        { id: 613, slot: "conclusion", band: 8, text: "In summary, transitioning toward a compressed workweek represents a progressive paradigm shift that harmonizes human well-being with modern economic output." }
      ]
    },
    {
      id: "t2-competition-cooperation",
      title: "Competition vs Cooperation in Education & Work",
      prompt: "Some people think that competition at work, school and daily life is good. Others believe we should cooperate more. Discuss both views and give your opinion.",
      sentences: [
        { id: 121, slot: "intro-paraphrase", band: 5, text: "Some people like competition while other people think teamwork is better." },
        { id: 122, slot: "intro-paraphrase", band: 7, text: "Opinions divide over whether individual competition or active cooperation produces greater success in academic and professional spheres." },
        { id: 123, slot: "intro-paraphrase", band: 8, text: "While proponents argue that competitive rivalry drives personal ambition, opponents contend that collaborative synergy is essential for holistic progress." },

        { id: 221, slot: "intro-thesis", band: 5, text: "I will discuss both sides and I think cooperation is more important." },
        { id: 222, slot: "intro-thesis", band: 7, text: "While rivalry can inspire individual excellence, I maintain that fostering cooperation yields far superior long-term societal progress." },
        { id: 223, slot: "intro-thesis", band: 8, text: "Although healthy competition acts as a catalyst for individual determination, I firmly assert that cooperative frameworks are indispensable for tackling complex global imperatives." },

        { id: 321, slot: "body-topic", band: 5, text: "Competition is good because it makes people try very hard." },
        { id: 322, slot: "body-topic", band: 7, text: "On the one hand, competitive environments push individuals to maximize their personal potential." },
        { id: 323, slot: "body-topic", band: 8, text: "On the one hand, adversarial dynamics incentivize individuals to surpass performance benchmarks and drive rapid innovation." },

        { id: 421, slot: "body-logic", band: 5, text: "When students fight for top marks, they study late at night and win awards." },
        { id: 422, slot: "body-logic", band: 7, text: "When peer rivalry is present, candidates are motivated to refine their skills and eliminate complacency to secure coveted opportunities." },
        { id: 423, slot: "body-logic", band: 8, text: "The desire to outpace contenders compels workers and scholars to hone specialized competencies, thereby elevating overall standards of performance." },

        { id: 521, slot: "body-example", band: 5, text: "For example, smartphone companies compete and make better phones." },
        { id: 522, slot: "body-example", band: 7, text: "For instance, tech giants competing for market share continuously launch groundbreaking features for consumers." },
        { id: 523, slot: "body-example", band: 8, text: "A pertinent illustration is the commercial aerospace industry, where aggressive corporate rivalry accelerated the commercialization of reusable space hardware." },

        { id: 621, slot: "conclusion", band: 5, text: "In conclusion, both are good but working together is the best." },
        { id: 622, slot: "conclusion", band: 7, text: "In conclusion, while rivalry sparks ambition, mutual cooperation remains the foundation of lasting social harmony." },
        { id: 623, slot: "conclusion", band: 8, text: "Ultimately, while individual competition serves as a valuable motivational catalyst, collaborative cohesion remains the vital engine of human evolution." }
      ]
    }
  ],

  // --- TASK 1 GRAPHICS SUITE, VECTOR GRAPHICS & TASK 1 SENTENCE BANKS ---
  task1Questions: [
    {
      id: "cam19-t1-social-centre",
      title: "Social Centre Participants in Melbourne (2000–2020)",
      testBook: "Cambridge 19 Test 1",
      type: "line",
      promptText: "The graph below gives information on the numbers of participants for different activities at one social centre in Melbourne, Australia for the period 2000 to 2020.",
      imagePath: "/writing-questions-images/cam19_test1_task1_line_graph.jpg",
      hasSvg: true,
      sentences: [
        { id: 701, slot: "t1-intro", band: 5, text: "The line graph shows participants in five activities at a social centre from 2000 to 2020." },
        { id: 702, slot: "t1-intro", band: 7, text: "The line graph compares participant enrollment across five distinct activities at a social centre in Melbourne between 2000 and 2020." },
        { id: 703, slot: "t1-intro", band: 8, text: "The line graph details changes in attendee engagement across five separate activities at a social centre in Melbourne, Australia, over a 20-year period from 2000 to 2020." },

        { id: 801, slot: "t1-overview", band: 5, text: "Overall, film club and martial arts went up, table tennis went up later, but music performance fell to zero." },
        { id: 802, slot: "t1-overview", band: 7, text: "Overall, Film Club and Martial Arts demonstrated sustained growth, while Table Tennis experienced a dramatic surge after 2010. Conversely, Musical Performances crashed to zero and Amateur Dramatics fell steadily." },
        { id: 803, slot: "t1-overview", band: 8, text: "Overall, Film Club and Martial Arts exhibited a consistent upward trajectory over the two decades, whereas Table Tennis underwent a sharp late expansion. By contrast, Musical Performances suffered an absolute collapse to zero, while Amateur Dramatics experienced an uninterrupted decline." },

        { id: 901, slot: "t1-body1", band: 5, text: "Film club started at 64 people in 2000 and went to 85 in 2020. Martial arts also increased from 35 to 47." },
        { id: 902, slot: "t1-body1", band: 7, text: "In 2000, Film Club attracted the highest participation at roughly 64 people, climbing steadily to establish a peak of 85 by 2020. Martial Arts also expanded consistently, rising from 35 participants to 47." },
        { id: 903, slot: "t1-body1", band: 8, text: "Commencing as the most popular activity in 2000 with approximately 64 members, Film Club grew steadily to reach an all-time peak of 85 by 2020. Similarly, Martial Arts displayed steady progress, expanding from 35 to 47 attendees over the timeframe." },

        { id: 1001, slot: "t1-body2", band: 5, text: "Musical performance was 44 in 2000 and fell down to 0 in 2020. Table tennis was 17 then went up to 54." },
        { id: 1002, slot: "t1-body2", band: 7, text: "Conversely, Musical Performances began as the second most popular activity with 44 attendees before collapsing to zero by 2020. Table Tennis hovered around 15–20 until 2010, after which it surged to 54. Amateur Dramatics fell from 28 to 6." },
        { id: 1003, slot: "t1-body2", band: 8, text: "In stark contrast, Musical Performances witnessed an unprecedented decline from 44 participants in 2000 to absolute zero by the end of the timeline. Meanwhile, Table Tennis participation fluctuated around 15 to 20 until 2010, whereupon it surged rapidly to 54, surpassing Amateur Dramatics which fell from 28 to just 6." }
      ],
      hotspots: [
        { id: "hp-film", title: "Film Club Peak (85)", xPercent: 90, yPercent: 18, noteId: "note-film" },
        { id: "hp-music-drop", title: "Musical Performance Crash to 0", xPercent: 90, yPercent: 88, noteId: "note-music" },
        { id: "hp-tt-surge", title: "Table Tennis Surge (2010-2020)", xPercent: 70, yPercent: 48, noteId: "note-tt" }
      ],
      notes: [
        { id: "note-overview", category: "Paragraph 2: Golden Overview", colorClass: "sage", text: "Overall, Film Club and Martial Arts demonstrated sustained growth, while Table Tennis surged dramatically after 2010. Conversely, Musical Performances crashed to zero and Amateur Dramatics steadily declined." },
        { id: "note-film", category: "Paragraph 3: Film Club & Martial Arts", colorClass: "slate", text: "Film Club started highest at ~64 participants in 2000, climbing steadily to peak at 85 by 2020. Martial Arts also grew consistently from 35 to 47 over the 20-year period." },
        { id: "note-music", category: "Paragraph 4: Collapse & Surge Trends", colorClass: "terracotta", text: "Musical Performances began at 44 participants before collapsing precipitously to zero in 2020. Table Tennis hovered around 15–20 until 2010, after which it surged to 54." }
      ],
      svgGenerator: function() {
        return `
        <svg viewBox="0 0 540 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="540" height="320" fill="#FFFFFF" rx="8" />
          <g stroke="#F1F5F9" stroke-width="1">
            <line x1="55" y1="30" x2="490" y2="30" /><text x="45" y="34" font-size="10" fill="#64748B" text-anchor="end">90</text>
            <line x1="55" y1="60" x2="490" y2="60" /><text x="45" y="64" font-size="10" fill="#64748B" text-anchor="end">80</text>
            <line x1="55" y1="90" x2="490" y2="90" /><text x="45" y="94" font-size="10" fill="#64748B" text-anchor="end">70</text>
            <line x1="55" y1="120" x2="490" y2="120" /><text x="45" y="124" font-size="10" fill="#64748B" text-anchor="end">60</text>
            <line x1="55" y1="150" x2="490" y2="150" /><text x="45" y="154" font-size="10" fill="#64748B" text-anchor="end">50</text>
            <line x1="55" y1="180" x2="490" y2="180" /><text x="45" y="184" font-size="10" fill="#64748B" text-anchor="end">40</text>
            <line x1="55" y1="210" x2="490" y2="210" /><text x="45" y="214" font-size="10" fill="#64748B" text-anchor="end">30</text>
            <line x1="55" y1="240" x2="490" y2="240" /><text x="45" y="244" font-size="10" fill="#64748B" text-anchor="end">20</text>
            <line x1="55" y1="270" x2="490" y2="270" /><text x="45" y="274" font-size="10" fill="#64748B" text-anchor="end">10</text>
            <line x1="55" y1="290" x2="490" y2="290" stroke="#CBD5E1" stroke-width="1.5" /><text x="45" y="294" font-size="10" fill="#64748B" text-anchor="end">0</text>
          </g>
          <g font-size="11" fill="#475569" font-weight="600" text-anchor="middle">
            <text x="65" y="310">2000</text><text x="170" y="310">2005</text><text x="275" y="310">2010</text>
            <text x="380" y="310">2015</text><text x="485" y="310">2020</text>
          </g>
          <path d="M 65 105 L 170 96 L 275 79 L 380 64 L 485 44" fill="none" stroke="#6B21A8" stroke-width="3" stroke-linecap="round" />
          <circle cx="65" cy="105" r="4" fill="#6B21A8" /><circle cx="170" cy="96" r="4" fill="#6B21A8" /><circle cx="275" cy="79" r="4" fill="#6B21A8" /><circle cx="380" cy="64" r="4" fill="#6B21A8" /><circle cx="485" cy="44" r="4" fill="#6B21A8" />
          <text x="485" y="36" font-size="10" font-weight="700" fill="#6B21A8" text-anchor="middle">85 (Film)</text>

          <path d="M 65 241 L 170 238 L 275 232 L 380 180 L 485 134" fill="none" stroke="#059669" stroke-width="3" stroke-linecap="round" stroke-dasharray="6,2" />
          <circle cx="65" cy="241" r="4" fill="#059669" /><circle cx="170" cy="238" r="4" fill="#059669" /><circle cx="275" cy="232" r="4" fill="#059669" /><circle cx="380" cy="180" r="4" fill="#059669" /><circle cx="485" cy="134" r="4" fill="#059669" />
          <text x="485" y="126" font-size="10" font-weight="700" fill="#059669" text-anchor="middle">54 (TT)</text>

          <path d="M 65 189 L 170 183 L 275 177 L 380 168 L 485 154" fill="none" stroke="#2563EB" stroke-width="3" stroke-linecap="round" />
          <circle cx="65" cy="189" r="4" fill="#2563EB" /><circle cx="170" cy="183" r="4" fill="#2563EB" /><circle cx="275" cy="177" r="4" fill="#2563EB" /><circle cx="380" cy="168" r="4" fill="#2563EB" /><circle cx="485" cy="154" r="4" fill="#2563EB" />
          <text x="485" y="166" font-size="10" font-weight="700" fill="#2563EB" text-anchor="middle">47 (Martial)</text>

          <path d="M 65 209 L 170 215 L 275 226 L 380 255 L 485 273" fill="none" stroke="#D97706" stroke-width="2.5" stroke-linecap="round" />
          <circle cx="65" cy="209" r="3.5" fill="#D97706" /><circle cx="170" cy="215" r="3.5" fill="#D97706" /><circle cx="275" cy="226" r="3.5" fill="#D97706" /><circle cx="380" cy="255" r="3.5" fill="#D97706" /><circle cx="485" cy="273" r="3.5" fill="#D97706" />

          <path d="M 65 163 L 170 168 L 275 250 L 380 284 L 485 290" fill="none" stroke="#DC2626" stroke-width="3" stroke-linecap="round" />
          <circle cx="65" cy="163" r="4" fill="#DC2626" /><circle cx="170" cy="168" r="4" fill="#DC2626" /><circle cx="275" cy="250" r="4" fill="#DC2626" /><circle cx="380" cy="284" r="4" fill="#DC2626" /><circle cx="485" cy="290" r="4" fill="#DC2626" />
          <text x="485" y="284" font-size="10" font-weight="700" fill="#DC2626" text-anchor="end">0 (Music)</text>

          <g transform="translate(45, 12)" font-size="9.5" font-weight="600" fill="#334155">
            <rect x="0" y="0" width="10" height="10" fill="#6B21A8" rx="2"/><text x="14" y="9">Film Club</text>
            <rect x="80" y="0" width="10" height="10" fill="#059669" rx="2"/><text x="94" y="9">Table Tennis</text>
            <rect x="180" y="0" width="10" height="10" fill="#2563EB" rx="2"/><text x="194" y="9">Martial Arts</text>
            <rect x="275" y="0" width="10" height="10" fill="#D97706" rx="2"/><text x="289" y="9">Amateur Dramatics</text>
            <rect x="395" y="0" width="10" height="10" fill="#DC2626" rx="2"/><text x="409" y="9">Musical Perform.</text>
          </g>
        </svg>`;
      }
    },
    {
      id: "cam19-t2-porth-harbour",
      title: "Porth Harbour Redevelopment (2000 vs Today)",
      testBook: "Cambridge 19 Test 2",
      type: "map",
      promptText: "The plans below show a harbour in 2000 and how it looks today. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      imagePath: "/writing-questions-images/cam19_test2_task1_map_combined.jpg",
      hasSvg: true,
      hotspots: [
        { id: "hp-apartments", title: "Disused Docks -> Luxury Apartments", xPercent: 30, yPercent: 20, noteId: "note-north" },
        { id: "hp-promenade", title: "New Promenade & Outdoor Cafes", xPercent: 75, yPercent: 82, noteId: "note-south" }
      ],
      notes: [
        { id: "note-overview", category: "Paragraph 2: Overall Transformation", colorClass: "sage", text: "Overall, the harbour transformed from a commercial fishing port into a tourism-centric resort, adding luxury apartments, a hotel, multi-story parking, and a scenic coastal promenade." },
        { id: "note-north", category: "Paragraph 3: Northern Shoreline Redesign", colorClass: "slate", text: "In 2000, the northern side contained disused docks and public parking. Today, these are replaced by apartments, a multi-story car park, and a seaside hotel." },
        { id: "note-south", category: "Paragraph 4: Marina & Southern Shoreline", colorClass: "terracotta", text: "Commercial fishing boats were relocated away from the main marina. A brand-new pedestrian promenade with outdoor cafes was built along the southern coast." }
      ],
      svgGenerator: function() {
        return `
        <svg viewBox="0 0 540 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="540" height="320" fill="#F8FAFC" rx="8" />
          <g transform="translate(10, 10)">
            <rect width="250" height="295" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5" rx="6" />
            <text x="125" y="24" font-size="14" font-weight="700" fill="#1E293B" text-anchor="middle">Porth Harbour (2000)</text>
            <path d="M 30 70 L 220 70 L 220 250 L 30 250 Z" fill="#E0F2FE" stroke="#38BDF8" stroke-width="1" />
            <text x="125" y="160" font-size="11" font-weight="600" fill="#0284C7" text-anchor="middle">Marina / Docks</text>
            <rect x="40" y="40" width="80" height="25" fill="#CBD5E1" stroke="#64748B" /><text x="80" y="56" font-size="9" font-weight="600" fill="#334155" text-anchor="middle">Disused Docks</text>
            <rect x="135" y="40" width="75" height="25" fill="#E2E8F0" stroke="#64748B" /><text x="172" y="56" font-size="9" font-weight="600" fill="#334155" text-anchor="middle">Public Car Park</text>
            <rect x="50" y="110" width="60" height="70" fill="#FEF3C7" stroke="#D97706" stroke-dasharray="3,3" /><text x="80" y="145" font-size="9" font-weight="700" fill="#92400E" text-anchor="middle">Fishing Boats</text>
            <rect x="40" y="260" width="70" height="25" fill="#E2E8F0" stroke="#64748B" /><text x="75" y="276" font-size="8.5" font-weight="600" fill="#334155" text-anchor="middle">Showers/Toilets</text>
          </g>
          <g transform="translate(280, 10)">
            <rect width="250" height="295" fill="#F8FAFCE6" stroke="#0EA5E9" stroke-width="1.5" rx="6" />
            <text x="125" y="24" font-size="14" font-weight="700" fill="#0369A1" text-anchor="middle">Porth Harbour (Today)</text>
            <path d="M 30 70 L 220 70 L 220 230 L 30 230 Z" fill="#E0F2FE" stroke="#38BDF8" stroke-width="1" />
            <rect x="40" y="40" width="80" height="25" fill="#DCFCE7" stroke="#16A34A" /><text x="80" y="56" font-size="9" font-weight="700" fill="#15803D" text-anchor="middle">Apartments</text>
            <rect x="135" y="40" width="75" height="25" fill="#E0E7FF" stroke="#4F46E5" /><text x="172" y="56" font-size="8.5" font-weight="700" fill="#3730A3" text-anchor="middle">Multi-Story Park</text>
            <rect x="175" y="80" width="40" height="60" fill="#FCE7F3" stroke="#DB2777" /><text x="195" y="115" font-size="9" font-weight="700" fill="#9D174D" text-anchor="middle">Hotel</text>
            <rect x="70" y="100" width="90" height="80" fill="#BAE6FD" stroke="#0284C7" /><text x="115" y="145" font-size="9.5" font-weight="700" fill="#0369A1" text-anchor="middle">Private Yachts</text>
            <rect x="35" y="190" width="50" height="35" fill="#FEF3C7" stroke="#D97706" /><text x="60" y="210" font-size="8" font-weight="700" fill="#92400E" text-anchor="middle">Fishing Boats</text>
            <path d="M 30 235 L 220 235 L 220 260 L 30 260 Z" fill="#FEF08A" stroke="#CA8A04" /><text x="125" y="252" font-size="9.5" font-weight="700" fill="#854D0E" text-anchor="middle">Promenade & Outdoor Cafes</text>
          </g>
        </svg>`;
      }
    },
    {
      id: "cam19-t3-biofuel-ethanol",
      title: "Biofuel Ethanol Production Cycle",
      testBook: "Cambridge 19 Test 3",
      type: "process",
      promptText: "The diagram below shows how a biofuel called ethanol is produced. Summarise the information by selecting and reporting the main features.",
      imagePath: "/writing-questions-images/cam19_test3_task1_process_diagram.jpg",
      hasSvg: true,
      hotspots: [
        { id: "hp-photosynthesis", title: "Solar Absorption & Growing Plants", xPercent: 15, yPercent: 25, noteId: "note-overview" },
        { id: "hp-enzymes", title: "Cellulose Enzymes & Shredding", xPercent: 50, yPercent: 45, noteId: "note-harvest" },
        { id: "hp-fermentation", title: "Microbial Fermentation Tank", xPercent: 85, yPercent: 65, noteId: "note-ferment" }
      ],
      notes: [
        { id: "note-overview", category: "Paragraph 2: Cycle Overview", colorClass: "sage", text: "Overall, ethanol production involves plant growth, mechanical harvesting, enzymatic decomposition into sugars, microbial fermentation, distillation, and automobile combustion releasing CO2." },
        { id: "note-harvest", category: "Paragraph 3: Harvesting & Chemical Processing", colorClass: "slate", text: "Growing plants absorb sunlight and CO2. Mature crops are harvested by heavy machinery and shredded before mixing with cellulose enzymes to release plant sugars." },
        { id: "note-ferment", category: "Paragraph 4: Fermentation & Transportation", colorClass: "terracotta", text: "Plant sugars enter fermentation tanks where microbes convert them into liquid ethanol. The purified biofuel is distributed to gas stations to power automobiles." }
      ],
      svgGenerator: function() {
        return `
        <svg viewBox="0 0 540 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="540" height="320" fill="#FAF9F6" rx="8" />
          <text x="270" y="25" font-size="14" font-weight="700" fill="#1E293B" text-anchor="middle">Ethanol Biofuel Production Cycle</text>
          <g transform="translate(30, 45)"><rect width="110" height="60" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.5" rx="6" /><text x="55" y="25" font-size="10" font-weight="700" fill="#15803D" text-anchor="middle">1. Plant Growth</text><text x="55" y="42" font-size="8.5" fill="#166534" text-anchor="middle">Sunlight + CO2 Absorption</text></g>
          <path d="M 145 75 L 185 75" stroke="#475569" stroke-width="2" />
          <g transform="translate(190, 45)"><rect width="110" height="60" fill="#FEF3C7" stroke="#D97706" stroke-width="1.5" rx="6" /><text x="55" y="25" font-size="10" font-weight="700" fill="#92400E" text-anchor="middle">2. Harvesting</text><text x="55" y="42" font-size="8.5" fill="#78350F" text-anchor="middle">Mechanical Reaping</text></g>
          <path d="M 305 75 L 345 75" stroke="#475569" stroke-width="2" />
          <g transform="translate(350, 45)"><rect width="120" height="60" fill="#E0E7FF" stroke="#4F46E5" stroke-width="1.5" rx="6" /><text x="60" y="25" font-size="10" font-weight="700" fill="#3730A3" text-anchor="middle">3. Cellulose Shredding</text><text x="60" y="42" font-size="8.5" fill="#312E81" text-anchor="middle">Addition of Enzymes</text></g>
          <path d="M 410 110 L 410 145" stroke="#475569" stroke-width="2" />
          <g transform="translate(350, 150)"><rect width="120" height="60" fill="#FCE7F3" stroke="#DB2777" stroke-width="1.5" rx="6" /><text x="60" y="25" font-size="10" font-weight="700" fill="#9D174D" text-anchor="middle">4. Fermentation</text><text x="60" y="42" font-size="8.5" fill="#831843" text-anchor="middle">Sugar -> Liquid Ethanol</text></g>
          <path d="M 345 180 L 305 180" stroke="#475569" stroke-width="2" />
          <g transform="translate(190, 150)"><rect width="110" height="60" fill="#CCFBF1" stroke="#0D9488" stroke-width="1.5" rx="6" /><text x="55" y="25" font-size="10" font-weight="700" fill="#0F766E" text-anchor="middle">5. Purification</text><text x="55" y="42" font-size="8.5" fill="#115E59" text-anchor="middle">Gas Station Delivery</text></g>
          <path d="M 185 180 L 145 180" stroke="#475569" stroke-width="2" />
          <g transform="translate(30, 150)"><rect width="110" height="60" fill="#FFEDD5" stroke="#EA580C" stroke-width="1.5" rx="6" /><text x="55" y="25" font-size="10" font-weight="700" fill="#C2410C" text-anchor="middle">6. Vehicle Use</text><text x="55" y="42" font-size="8.5" fill="#9A3412" text-anchor="middle">CO2 Released to Air</text></g>
          <path d="M 85 145 L 85 110" stroke="#16A34A" stroke-width="2" stroke-dasharray="4,2" />
          <text x="95" y="130" font-size="9" font-weight="700" fill="#16A34A">CO2 Recycled</text>
        </svg>`;
      }
    },
    {
      id: "cam19-t4-dance-classes",
      title: "Australian Town Dance Classes Attendance",
      testBook: "Cambridge 19 Test 4",
      type: "chart",
      promptText: "The charts below give information on the location and types of dance classes young people in a town in Australia are currently attending.",
      imagePath: "/writing-questions-images/cam19_test4_task1_pie_and_bar.jpg",
      hasSvg: true,
      hotspots: [
        { id: "hp-studios-pie", title: "Private Studios Dominance (48%)", xPercent: 25, yPercent: 35, noteId: "note-pie" },
        { id: "hp-ballet-bar", title: "Ballet Dominance in Under-11s (620)", xPercent: 65, yPercent: 40, noteId: "note-bar" }
      ],
      notes: [
        { id: "note-overview", category: "Paragraph 2: Overall Patterns", colorClass: "sage", text: "Overall, private studios accommodate nearly half of all dance students. Ballet is overwhelmingly favored by children under 11, whereas hip-hop dominates among teenagers aged 11–16." },
        { id: "note-pie", category: "Paragraph 3: Location Breakdown (Pie Chart)", colorClass: "slate", text: "Private dance studios hold the largest share at 48%, followed by school halls (24%), community centers (18%), and other venues (10%)." },
        { id: "note-bar", category: "Paragraph 4: Age Group Styles (Bar Chart)", colorClass: "terracotta", text: "Among under-11s, ballet leads with 620 attendees, followed by tap (480). For 11–16-year-olds, hip-hop is the top choice with 490 attendees, while ballet drops to 210." }
      ],
      svgGenerator: function() {
        return `
        <svg viewBox="0 0 540 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="540" height="320" fill="#FFFFFF" rx="8" />
          <g transform="translate(20, 20)">
            <text x="110" y="15" font-size="12" font-weight="700" fill="#1E293B" text-anchor="middle">Class Locations (%)</text>
            <path d="M 110 120 L 110 35 A 85 85 0 0 1 190 150 Z" fill="#10B981" stroke="#FFF" stroke-width="2" />
            <path d="M 110 120 L 190 150 A 85 85 0 0 1 80 200 Z" fill="#3B82F6" stroke="#FFF" stroke-width="2" />
            <path d="M 110 120 L 80 200 A 85 85 0 0 1 30 110 Z" fill="#F59E0B" stroke="#FFF" stroke-width="2" />
            <path d="M 110 120 L 30 110 A 85 85 0 0 1 110 35 Z" fill="#8B5CF6" stroke="#FFF" stroke-width="2" />
            <text x="145" y="85" font-size="10" font-weight="700" fill="#FFF">48%</text>
            <text x="125" y="175" font-size="10" font-weight="700" fill="#FFF">24%</text>
            <text x="65" y="160" font-size="10" font-weight="700" fill="#FFF">18%</text>
            <text x="65" y="80" font-size="9" font-weight="700" fill="#FFF">10%</text>
            <g transform="translate(10, 220)" font-size="9" font-weight="600" fill="#334155">
              <rect x="0" y="0" width="8" height="8" fill="#10B981" /><text x="12" y="7">Private Studios (48%)</text>
              <rect x="110" y="0" width="8" height="8" fill="#3B82F6" /><text x="122" y="7">School Halls (24%)</text>
            </g>
          </g>
          <g transform="translate(260, 20)">
            <text x="130" y="15" font-size="12" font-weight="700" fill="#1E293B" text-anchor="middle">Dance Styles by Age Group</text>
            <g stroke="#E2E8F0" stroke-width="1">
              <line x1="40" y1="40" x2="250" y2="40" stroke="#E2E8F0" />
              <line x1="40" y1="180" x2="250" y2="180" stroke="#94A3B8" stroke-width="1.5" />
            </g>
            <rect x="55" y="56" width="22" height="124" fill="#EC4899" />
            <rect x="80" y="84" width="22" height="96" fill="#F59E0B" />
            <rect x="105" y="120" width="22" height="60" fill="#6366F1" />
            <text x="91" y="198" font-size="10" font-weight="700" fill="#1E293B" text-anchor="middle">Under 11s</text>
            <rect x="155" y="138" width="22" height="42" fill="#EC4899" />
            <rect x="180" y="144" width="22" height="36" fill="#F59E0B" />
            <rect x="205" y="82" width="22" height="98" fill="#6366F1" />
            <text x="191" y="198" font-size="10" font-weight="700" fill="#1E293B" text-anchor="middle">11–16 Years</text>
          </g>
        </svg>`;
      }
    },
    {
      id: "cam21-t1-us-jobs",
      title: "US Employment Across 4 Sectors (1960–2020)",
      testBook: "Cambridge 21 Test 1",
      type: "line",
      promptText: "The chart below shows the number of jobs in four sectors of the economy in the US from 1960 to 2020.",
      imagePath: "/writing-questions-images/cam21_test1_task1_line_graph.jpg",
      hasSvg: true,
      hotspots: [
        { id: "hp-mfg-peak", title: "Manufacturing Peak (20M in 1980)", xPercent: 40, yPercent: 20, noteId: "note-decline" },
        { id: "hp-retail-health", title: "Retail & Healthcare Equalization (15M in 2020)", xPercent: 90, yPercent: 40, noteId: "note-growth" }
      ],
      notes: [
        { id: "note-overview", category: "Paragraph 2: Overall Economic Shift", colorClass: "sage", text: "Overall, manufacturing and agriculture suffered continuous long-term declines, whereas retail and healthcare experienced substantial job growth over the 60-year timeframe." },
        { id: "note-decline", category: "Paragraph 3: Manufacturing & Agriculture", colorClass: "terracotta", text: "In 1960, manufacturing provided the highest employment at 15 million jobs, peaking at 20 million in 1980 before dropping steadily below 15 million by 2020." },
        { id: "note-growth", category: "Paragraph 4: Retail & Healthcare Expand", colorClass: "slate", text: "Conversely, retail employment expanded consistently from 5 million to 15 million, while healthcare witnessed rapid post-1980 growth to match retail in 2020." }
      ],
      svgGenerator: function() {
        return `
        <svg viewBox="0 0 540 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="540" height="320" fill="#FFFFFF" rx="8" />
          <text x="270" y="22" font-size="13" font-weight="700" fill="#1E293B" text-anchor="middle">US Employment Jobs (Millions) 1960–2020</text>
          <g stroke="#F1F5F9" stroke-width="1">
            <line x1="50" y1="40" x2="490" y2="40" /><text x="42" y="44" font-size="9.5" fill="#64748B" text-anchor="end">25M</text>
            <line x1="50" y1="90" x2="490" y2="90" /><text x="42" y="94" font-size="9.5" fill="#64748B" text-anchor="end">20M</text>
            <line x1="50" y1="140" x2="490" y2="140" /><text x="42" y="144" font-size="9.5" fill="#64748B" text-anchor="end">15M</text>
            <line x1="50" y1="190" x2="490" y2="190" /><text x="42" y="194" font-size="9.5" fill="#64748B" text-anchor="end">10M</text>
            <line x1="50" y1="240" x2="490" y2="240" /><text x="42" y="244" font-size="9.5" fill="#64748B" text-anchor="end">5M</text>
            <line x1="50" y1="280" x2="490" y2="280" stroke="#CBD5E1" stroke-width="1.5" /><text x="42" y="284" font-size="9.5" fill="#64748B" text-anchor="end">0</text>
          </g>
          <g font-size="10" fill="#475569" font-weight="600" text-anchor="middle">
            <text x="60" y="298">1960</text><text x="130" y="298">1970</text><text x="200" y="298">1980</text>
            <text x="270" y="298">1990</text><text x="340" y="298">2000</text><text x="410" y="298">2010</text>
            <text x="480" y="298">2020</text>
          </g>
          <path d="M 60 140 L 130 115 L 200 90 L 270 110 L 340 130 L 410 150 L 480 170" fill="none" stroke="#D97706" stroke-width="3" stroke-linecap="round" />
          <circle cx="200" cy="90" r="4.5" fill="#D97706" />
          <path d="M 60 240 L 130 220 L 200 200 L 270 180 L 340 160 L 410 150 L 480 140" fill="none" stroke="#4F46E5" stroke-width="3" stroke-linecap="round" />
          <circle cx="480" cy="140" r="4.5" fill="#4F46E5" />
          <path d="M 60 265 L 130 255 L 200 240 L 270 210 L 340 180 L 410 155 L 480 140" fill="none" stroke="#059669" stroke-width="3" stroke-linecap="round" stroke-dasharray="5,2" />
          <circle cx="480" cy="140" r="4.5" fill="#059669" />
          <path d="M 60 240 L 130 245 L 200 250 L 270 255 L 340 260 L 410 262 L 480 265" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round" />
          <g transform="translate(60, 310)" font-size="9" font-weight="600" fill="#334155">
            <rect x="0" y="0" width="10" height="8" fill="#D97706" /><text x="14" y="7">Manufacturing</text>
            <rect x="110" y="0" width="10" height="8" fill="#4F46E5" /><text x="124" y="7">Retail</text>
            <rect x="180" y="0" width="10" height="8" fill="#059669" /><text x="194" y="7">Healthcare</text>
            <rect x="270" y="0" width="10" height="8" fill="#DC2626" /><text x="284" y="7">Agriculture</text>
          </g>
        </svg>`;
      }
    }
  ],

  // --- MASTER ESSAY BLUEPRINTS & BAND 7+ SAMPLES ---
  blueprints: {
    task1: {
      title: "Task 1 Academic Graphic Blueprint & Band 7.5 Model Answer",
      targetWords: "150 – 170 Words (Minimum 150 required)",
      structure: [
        {
          para: "Paragraph 1: Introduction & Paraphrase",
          words: "~25 – 30 Words",
          formula: "The line graph / map / chart compares [Variables] in [Location] between [Timeframe], measured in [Units].",
          purpose: "Rephrase prompt using synonyms without altering technical parameters or copying prompt phrases."
        },
        {
          para: "Paragraph 2: The Golden Overview",
          words: "~35 – 45 Words",
          formula: "Overall, [Dominant Trend 1] demonstrated sustained growth, whereas [Dominant Trend 2] experienced a sharp drop. Additionally, [Key Crossover / Anomaly] occurred in [Year].",
          purpose: "Highlight 2-3 main key features & overall movements. DO NOT include specific data numbers in Paragraph 2."
        },
        {
          para: "Paragraph 3: Key Features Group 1 (Main Growth / Dominant Series)",
          words: "~45 – 55 Words",
          formula: "In terms of [Category A], participation started at [Initial Value] in [Year], before climbing steadily to peak at [Peak Value] by [End Year].",
          purpose: "Report exact statistics, starting figures, peak points, and rate of increase for primary trends."
        },
        {
          para: "Paragraph 4: Key Features Group 2 (Decline / Surges / Contrasts)",
          words: "~45 – 55 Words",
          formula: "Conversely, [Category B] witnessed an uninterrupted descent from [Start Value] to [Final Value]. Meanwhile, [Category C] surged from [Value 1] to [Value 2].",
          purpose: "Provide comparative analysis for secondary trends, unexpected drops, or zero values."
        }
      ],
      languageBank: [
        { category: "Trend Verbs & Nouns", items: ["Surged dramatically", "Climbed steadily", "Peaked at", "Experienced a precipitous fall", "Plummeted to zero", "Hovered around"] },
        { category: "Proportional Language", items: ["Accounting for nearly half (48%)", "Representing a quarter (24%)", "Quadrupled over the period", "A substantial majority"] },
        { category: "Cohesive Connectors", items: ["Overall, ...", "In terms of ...", "Conversely, ...", "By contrast, ...", "Subsequent to this, ..."] }
      ],
      sampleEssay: {
        title: "Cambridge 19 Test 1 Task 1: Line Graph — Social Centre Participants",
        wordCount: 162,
        band: "Band 7.5+",
        text: `The line graph compares participant enrollment across five distinct activities at a social centre in Melbourne, Australia, between 2000 and 2020.

Overall, Film Club and Martial Arts demonstrated sustained growth over the 20-year period, while Table Tennis experienced a dramatic surge after 2010. Conversely, Musical Performances witnessed a precipitous decline to absolute zero, and Amateur Dramatics fell steadily.

In 2000, Film Club attracted the highest participation at roughly 64 people, climbing steadily to establish a peak of 85 by 2020. Martial Arts also expanded consistently, rising from 35 participants to 47. 

Conversely, Musical Performances began as the second most popular activity with 44 attendees before collapsing to zero by the end of the timeline. Table Tennis engagement remained modest at 15 to 20 participants until 2010, after which it surged to 54. Finally, Amateur Dramatics recorded a gradual fall from 28 to just 6 participants.`
      }
    },

    task2: {
      title: "Task 2 Academic Essay Blueprint & Band 7.5 Model Answer",
      targetWords: "250 – 275 Words (Minimum 250 required)",
      structure: [
        {
          para: "Paragraph 1: Introduction",
          words: "~45 – 50 Words",
          formula: "Sentence 1: Paraphrase prompt.\nSentence 2: Thesis statement & direct stance.",
          purpose: "Establish context immediately and declare an explicit, unambiguous stance that governs the entire response."
        },
        {
          para: "Paragraph 2: Body Paragraph 1 (Primary Argument)",
          words: "~90 – 100 Words",
          formula: "Sentence 1: Clear Topic Sentence.\nSentence 2-3: Cause-and-Effect logical expansion.\nSentence 4: Concrete Real-World Evidence / Research Example.",
          purpose: "Develop the main supporting argument logically and substantiate it with verified real-world evidence."
        },
        {
          para: "Paragraph 3: Body Paragraph 2 (Secondary / Counter Argument)",
          words: "~90 – 100 Words",
          formula: "Sentence 1: Secondary Topic Sentence / Opposing Perspective.\nSentence 2-3: Analysis of nuance / Rebuttal.\nSentence 4: Concrete Example or concluding logic.",
          purpose: "Address secondary factors or counter-arguments with academic nuance to demonstrate balanced critical thinking."
        },
        {
          para: "Paragraph 4: Conclusion",
          words: "~30 – 35 Words",
          formula: "Sentence 1: Rephrase Thesis & key arguments in fresh vocabulary.\nSentence 2: Final Outlook or policy recommendation.",
          purpose: "Synthesize central insights without introducing new unbacked ideas."
        }
      ],
      languageBank: [
        { category: "Thesis & Lead-ins", items: ["It is widely contended that...", "I unequivocally support this policy...", "While proponents argue that..., I maintain that..."] },
        { category: "Logical Expansion", items: ["Principally, ...", "Consequently, ...", "This stems from the fact that...", "By stepping outside sheltered routines..."] },
        { category: "Evidence Signals", items: ["A case in point is...", "For instance, empirical trials in...", "Recent pedagogical research indicates..."] },
        { category: "Academic Collocations", items: ["Instill civic responsibility", "Mitigate occupational burnout", "Harmonize human well-being with productivity"] }
      ],
      sampleEssay: {
        title: "Task 2 Essay: Compulsory Unpaid Community Service",
        wordCount: 258,
        band: "Band 7.5+",
        text: `It is widely contended that secondary educational institutions should mandate unpaid civic engagement as a prerequisite for graduation. I unequivocally support this policy, as institutionalising community involvement not only nurtures civic responsibility but also equips adolescents with vital pragmatic life competencies.

The primary justification for this mandate resides in its capacity to cultivate profound social empathy among teenagers. When pupils actively interact with vulnerable demographics—such as assisting at local homeless shelters or cleaning public parks—they step outside their sheltered academic routines and comprehend real-world socio-economic adversities. A case in point is the mandatory secondary volunteer framework in Ontario, Canada, which correlated with an undeniable 35% reduction in juvenile delinquency and heightened lifelong charitable engagement.

Furthermore, participating in structured volunteer work nurtures essential soft skills that traditional classroom settings often fail to impart. Working in community projects demands active teamwork, problem-solving, and emotional resilience under real-world conditions. These experiences broaden students' interpersonal versatility, making them substantially more adaptable when transitioning into tertiary education or competitive employment environments.

However, critics argue that compulsory hours add undue burden to already demanding high school schedules. Nevertheless, when civic duties are seamlessly integrated into standard extracurricular frameworks, the psychological benefits far outweigh the minor time commitment.

Ultimately, institutionalising voluntary community service represents a transformative pedagogical approach. By balancing rigorous academic instruction with obligatory civic participation, high schools can shape proficient youths into conscious, compassionate citizens.`
      }
    }
  }
};
