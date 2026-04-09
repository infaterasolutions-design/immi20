// ── Inline ES module data for Next.js SSR pages ──
// This replaces the fs/vm approach which fails on Vercel serverless.

// ─── Simulated Admin Settings ───
const AdminConfig = {
  floatingBlogCard: {
    enabled: true,
    displayRules: { showOn: 'all' },
    triggerSettings: { type: 'time', value: 1 },
    position: 'bottom-right',
    recommendedPostId: 1,
    customOverride: {}
  },
  languageSwitcher: {
    enabled: true,
    defaultLanguage: 'en',
    allowedLanguages: [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'es', name: 'Spanish', flag: '🇪🇸' },
      { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
      { code: 'fr', name: 'French', flag: '🇫🇷' }
    ]
  },
  searchSettings: {
    enabled: true,
    trendingKeywords: [
      'H1B Visa 2025',
      'Green Card Priority Dates',
      'USCIS Processing Times',
      'F1 OPT Extension',
      'Immigration Reform Bill',
      'B1/B2 Visa Interview'
    ],
    searchPriority: 'blogs',
    noResultBehavior: 'popular',
    voiceSearchEnabled: true
  }
};

// ─── Unique Article Content Payloads ───
const content_h1b_cap = `
  <p class="text-xl text-slate-900 font-medium mb-8">USCIS has officially announced the FY 2025 H-1B cap registration dates, marking the beginning of a high-stakes season for thousands of employers and beneficiaries seeking specialty occupation visas.</p>
  <p>The electronic registration period will open on <strong>March 1, 2025</strong>, at 12:00 PM Eastern Time and will close on <strong>March 18, 2025</strong>. This 18-day window is consistent with prior years but comes with significant procedural changes designed to curb abuse of the lottery system.</p>
  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-slate-800">"The beneficiary-centric selection model ensures every individual has exactly one chance at selection, regardless of the number of registrations submitted on their behalf."</blockquote>
  <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4 font-['Plus_Jakarta_Sans']">Key Changes for FY 2025</h2>
  <p class="mb-6">Under the new beneficiary-centric model, USCIS will select unique beneficiaries rather than individual registrations. If a beneficiary is selected, any eligible registrations submitted by different employers for that beneficiary will be approved for filing.</p>
  <div class="my-10 p-8 bg-blue-50 border border-blue-100">
    <h3 class="font-bold text-primary mb-4 flex items-center gap-2"><span class="material-symbols-outlined pb-1">info</span> Critical Dates for H-1B Cap</h3>
    <ul class="space-y-3 text-sm text-slate-600 list-disc pl-5">
      <li><strong>myUSCIS Account Setup:</strong> Create or verify accounts by February 15, 2025.</li>
      <li><strong>Registration Opens:</strong> March 1, 2025, at 12:00 PM ET.</li>
      <li><strong>Registration Closes:</strong> March 18, 2025, at 12:00 PM ET.</li>
      <li><strong>Selection Notifications:</strong> Expected by March 31, 2025.</li>
      <li><strong>Filing Window:</strong> April 1 – June 30, 2025.</li>
    </ul>
  </div>
  <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4 font-['Plus_Jakarta_Sans']">What Employers Need to Know</h2>
  <p class="mb-6">Employers must ensure their organizational accounts are up to date and that all legal representatives are properly linked. The $10 registration fee per beneficiary remains unchanged, but USCIS has hinted at potential fee adjustments in future cycles.</p>
  <p>Immigration attorneys recommend reviewing all pending labor condition applications (LCAs) and ensuring wage level compliance before the registration window opens. Any discrepancies could lead to denial or requests for evidence (RFEs) during the petition phase.</p>
  <p class="mt-6">For beneficiaries currently in valid H-1B status, the cap-exempt extension process remains available. Those changing employers should consult with counsel about the transfer timeline relative to the cap season.</p>
`;

const content_eb1_expansion = `
  <p class="text-xl text-slate-900 font-medium mb-8">As the H-1B visa cap continues to leave thousands of highly skilled workers without options, major technology hubs across the United States are pushing for a significant expansion of the EB-1 extraordinary ability visa category.</p>
  <p>Leaders from Silicon Valley, Austin, Boston, and Seattle have jointly submitted a policy proposal to Congress advocating for tripling the annual allotment of EB-1 visas. The proposal argues that the current cap fails to meet the demands of the rapidly evolving AI and semiconductor industries.</p>
  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-slate-800">"We are in a global talent war. Every EB-1 visa we don't issue is a world-class researcher who ends up building technology for a competitor nation." — Sarah Chen, TechBridge Alliance</blockquote>
  <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4 font-['Plus_Jakarta_Sans']">The Current EB-1 Landscape</h2>
  <p class="mb-6">The EB-1 category currently accounts for approximately 28.6% of the total employment-based green card allotment. Unlike the H-1B, it does not require a labor certification, making it attractive for self-petitioning researchers and artists.</p>
  <p>The proposal has received bipartisan interest, though immigration hawks have voiced concerns about potential fraud. Tech industry groups counter that the EB-1's rigorous evidentiary standards already provide sufficient safeguards.</p>
  <p class="mt-6">If enacted, the expansion would take effect in fiscal year 2026, providing immediate relief to thousands of applicants currently facing multi-year backlogs in the EB-2 and EB-3 categories.</p>
`;

const content_h1b_rfe = `
  <p class="text-xl text-slate-900 font-medium mb-8">Receiving a Request for Evidence (RFE) on your H-1B petition can be stressful, but with the right strategy, most RFEs can be resolved favorably. This guide walks you through the process step by step.</p>
  <p>An RFE is not a denial—it's USCIS asking for additional documentation to support your petition. Common reasons include insufficient evidence of specialty occupation, wage level concerns, or questions about the employer-employee relationship.</p>
  <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4 font-['Plus_Jakarta_Sans']">Step 1: Analyze the RFE Notice Carefully</h2>
  <p class="mb-6">Read every line of the RFE notice. USCIS will specify exactly what additional evidence they need.</p>
  <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4 font-['Plus_Jakarta_Sans']">Step 2: Gather Supporting Documentation</h2>
  <p class="mb-6">Work closely with your immigration attorney to compile comprehensive evidence. Expert opinion letters from professors in the field can be particularly persuasive for specialty occupation RFEs.</p>
  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-slate-800">"The strongest RFE responses don't just answer the question—they overwhelm the adjudicator with evidence that makes approval the only reasonable conclusion."</blockquote>
  <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4 font-['Plus_Jakarta_Sans']">Step 3: Submit Before the Deadline</h2>
  <p>You typically have 84 calendar days (12 weeks) to respond. Never wait until the last minute. Submit your response via trackable mail and keep copies of everything. Late responses are treated as abandonments.</p>
`;

const content_asylum = `
  <p class="text-xl text-slate-900 font-medium mb-8">In a landmark 6-3 decision, the Supreme Court has ruled on the scope of asylum protections available to individuals simultaneously pursuing green card applications through family-based immigration channels.</p>
  <p>The ruling in <em>Garcia v. Mayorkas</em> addresses whether asylum seekers who have pending I-130 family petitions can maintain both applications concurrently, or whether they must elect one pathway. The Court sided with broader protections, affirming that dual-track processing is constitutionally permissible.</p>
  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-slate-800">"The statutory framework does not require an applicant to choose between seeking humanitarian protection and pursuing family unity. Both interests are fundamental to our immigration system." — Justice Elena Kagan, majority opinion</blockquote>
  <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4 font-['Plus_Jakarta_Sans']">Immediate Impact on Pending Cases</h2>
  <p class="mb-6">The ruling is expected to affect approximately 47,000 pending cases where applicants had been forced to withdraw either their asylum application or family petition. USCIS will need to issue new guidance within 90 days.</p>
  <p>Immigration advocates have praised the decision as a significant victory for immigrant families.</p>
`;

const content_i485 = `
  <p class="text-xl text-slate-900 font-medium mb-8">USCIS has released updated processing timelines for I-485 Adjustment of Status applications, revealing significant variations across service centers and field offices for the 2024 fiscal year.</p>
  <p>The new data shows that median processing times for employment-based I-485s range from <strong>8.5 months</strong> at the Nebraska Service Center to <strong>23 months</strong> at the National Benefits Center.</p>
  <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4 font-['Plus_Jakarta_Sans']">Processing Times by Category</h2>
  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-slate-800">"The disparity between service centers is unacceptable. Applicants in identical categories shouldn't face processing times that differ by over a year based on geography." — AILA President</blockquote>
  <p>USCIS Director Ur Jaddou has acknowledged the issue and committed to a redistribution initiative that will route cases between service centers to equalize wait times.</p>
`;

const content_gc_interview = `
  <p class="text-xl text-slate-900 font-medium mb-8">The green card marriage interview is one of the most critical steps in the family-based immigration process. Being prepared can make the difference between approval and a lengthy review.</p>
  <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4 font-['Plus_Jakarta_Sans']">1. How Did You Meet?</h2>
  <p class="mb-6">Officers want a natural, detailed story. Include specifics: the date, location, who introduced you, what you were both doing at the time.</p>
  <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4 font-['Plus_Jakarta_Sans']">2. When Did You Start Dating?</h2>
  <p class="mb-6">Be specific about the timeline. Officers often cross-reference this with social media evidence and photographs.</p>
  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-slate-800">"The interview is not designed to trick you. It's designed to confirm what you've already documented. If your relationship is genuine, the truth is your best preparation."</blockquote>
`;

const content_uscis_fees = `
  <p class="text-xl text-slate-900 font-medium mb-8">In a surprising reversal, USCIS has officially rejected a proposed fee increase for family-based immigration petitions following intense public commentary and advocacy from immigration rights organizations.</p>
  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-slate-800">"Pricing families out of the immigration system is not a solution to processing backlogs. We applaud USCIS for listening to the community." — National Immigration Law Center</blockquote>
  <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4 font-['Plus_Jakarta_Sans']">Current Fee Structure Remains</h2>
  <p>However, USCIS emphasized that fee adjustments remain necessary to fund operations and reduce backlogs.</p>
`;

const content_f1_grants = `
  <p class="text-xl text-slate-900 font-medium mb-8">A coalition of venture capital firms and university incubators has launched a landmark $200 million grant program specifically designed for immigrant founders currently holding F-1 OPT work authorization.</p>
  <p>The initiative, called <strong>FounderBridge</strong>, aims to address the unique challenges faced by international student entrepreneurs.</p>
  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-slate-800">"40% of Fortune 500 companies were founded by immigrants or their children. We're ensuring the next generation of founders doesn't slip through the cracks of our immigration system." — Marcus Wei, FounderBridge Director</blockquote>
  <p>Applications open on April 1, 2024, with rolling admissions through December.</p>
`;

const content_f1_stem = `
  <p class="text-xl text-slate-900 font-medium mb-8">The Student and Exchange Visitor Program (SEVP) has announced new reporting requirements for F-1 students on STEM OPT extensions, effective for the 2024-2025 academic year.</p>
  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-slate-800">"Students who fail to submit quarterly reports will receive a 30-day cure notice. Continued non-compliance will result in SEVIS record termination." — SEVP Policy Guidance</blockquote>
  <p>STEM OPT participants are advised to set calendar reminders for each reporting deadline and maintain ongoing communication with both their employer's training supervisor and their university's international student office.</p>
`;

const content_digital_nomad = `
  <p class="text-xl text-slate-900 font-medium mb-8">As remote work becomes permanent for millions of professionals, the question of legal status while working abroad has created a complex intersection between B1/B2 tourist visas and the growing category of digital nomad visas offered by other countries.</p>
  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-slate-800">"The biggest mistake remote workers make is assuming their B1/B2 allows them to work remotely during short US visits. The law is not that simple, and violations can result in future visa denials."</blockquote>
  <p>For US citizens and green card holders working abroad, the key considerations are tax obligations and maintaining ties for immigration purposes.</p>
`;

const content_consulate_wait = `
  <p class="text-xl text-slate-900 font-medium mb-8">New data from the State Department reveals a significant drop in consulate interview wait times for B1/B2 tourist visa applicants at several high-volume posts across India and Southeast Asia.</p>
  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-slate-800">"We've processed more visa interviews in Q1 2024 than in all of 2022. The staffing surge authorized by Congress is delivering real results." — State Department Consular Affairs spokesperson</blockquote>
  <p>H-1B and L-1 visa wait times have also improved but remain significantly longer than tourist visas at most posts.</p>
`;

const content_visa_bulletin = `
  <p class="text-xl text-slate-900 font-medium mb-8">The April 2024 Visa Bulletin has sent shockwaves through the immigration community, revealing massive retrogression in the EB-2 category for India-born applicants.</p>
  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-slate-800">"This retrogression is devastating for Indian professionals who have been waiting over a decade. Many will now face an additional 3–5 years of uncertainty." — Cyrus Mehta, immigration attorney</blockquote>
  <p>Immigration attorneys are advising affected clients to explore EB-1 self-petition options, EB-3 downgrade strategies, and National Interest Waiver (NIW) filings as potential alternatives.</p>
`;

const content_premium_processing = `
  <p class="text-xl text-slate-900 font-medium mb-8">Is the newly expanded premium processing service worth its multi-thousand dollar price tag? We break down the costs, benefits, and strategic considerations.</p>
  <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-slate-800">"Premium processing isn't just about speed—it's about certainty. In immigration, knowing your answer in 15 days versus 15 months can be worth far more than the filing fee."</blockquote>
  <p>However, premium processing does not guarantee approval. If USCIS issues an RFE during premium processing, the 15-day clock resets once you respond.</p>
`;

const NewsData = [
  { id: 1, title: 'USCIS Announces FY 2025 H-1B Cap Registration Dates', category: 'visa-news', subcategory: 'h1b-visa', date: 'MAR 14, 2024', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATI85OtLzj_sQ0MJSzY7OKWNh756JbG2932o_Ri9ycQHBm4OUaRqbyh-FeoXP0XLK493eluw7EUp-4FIA4-9luW02by7tRs_mL_MR_Ws222g37OrmvEvjAYGl9unpTvv8orNCrC9rejkU4y7tGbBYbgwpbx9fjIe5PLKHuEmm0OMlCoPk09_tkiejWjtYv2DTF5AsYoI39e1G3_eTfY8wHtn03Bugod6gUkWAKFyunVqistTzLjMBr3-q_ODnv9-mLSblCOpny5Vs', tag: 'H1B VISA', content: content_h1b_cap },
  { id: 2, title: 'Tech Hubs Push for EB-1 Expansion Amidst H-1B Shortages', category: 'visa-news', subcategory: 'h1b-visa', date: 'MAR 12, 2024', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoplYKZG0QKQQ9IQdfcHZhK3y9AwyMxcMCse8pg22L8N4EOb0u0_21wvZOODKiTWUVzzDhXQCmC43rxzxi0rVKUTgaZng0AS2OgM_o1LTi_RI9W3oyxRlnfT5_2BD4g2Nu8BUymyUE3WPC_GgPuhCxWVjk-tcRHE1DVQzXQ5Q534fbhwgIMqeyshtNl3L6idfwwlp1HYcfNxPD5NMSe1mI4hoJdTytWjFQ_w3wZVPRW9FQtf6KsesizAgwvuEUJQ2KEHNYc-BzLDA', tag: 'H1B VISA', content: content_eb1_expansion },
  { id: 3, title: 'How to Respond to an H-1B Request for Evidence (RFE)', category: 'visa-guides', subcategory: 'how-to', date: 'MAR 10, 2024', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOUgkbn0ejx90kCo_WeuweNcC65_qQXwgeYf0l_IkxuatVrUe987ygmQ6qrFxfTEj1neDn7iQXX9JTzQaRhcH_f7xPo4kq5bIUNlRibi9DukYjZvnk0kP2w0gEc9ZZaqG0K-1lZwmGT1e5ZQ9XxahHOsJRXf9s83cryBJmDoeO1t7G6zt6Nsl6PPZ9Ephlcr4fWzHt6UtzjqAkf2eXYkBSawGCgUxNfjJEM-I8AdbfyveerG3Ivnl0OyJPP6z5RCBAlP1qjUHkMbo', tag: 'HOW-TO', content: content_h1b_rfe },
  { id: 4, title: 'Supreme Court Rules on Asylum Protections for Green Card Seekers', category: 'visa-news', subcategory: 'green-card', date: 'MAR 14, 2024', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKyR3TjqB6H5OPwDD5Vz__oLTQIgC0VBZ9C2ZYm0RyBpgwXOH7WTjXTgwXJqWkuf7gRFQsTLhbqloYl9yK55LeUDv8sKXz1ekJHun-CZk70aVh5t5VEAxPFqHGZhcNKKjySgnb-cr9Endyb8WZaM1-i-HhW2s5LrwsuMcpUNBBkzzfJUa5SI_56b3PrbUkM48CFUJsvPnOULDbOk-7MbOO2Pfvwp6Adwopm5-RRqt7piQ5YH79s2ShR6BJ8_KPM-Y-cw18-MzUinI', tag: 'GREEN CARD', content: content_asylum },
  { id: 5, title: 'Understanding the 2024 Processing Timeline for I-485 Applications', category: 'processing-times', subcategory: 'index', date: 'MAR 11, 2024', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKs0Kp0aBoh8ydCgZzM4KwfpiM3qCjegaJqFzBP4vQpITa4xP7FwBjBwaqMJDszQRyfMTxdDdwG-tqc5bIUdPEcmoyWQJPQbDzFdsOsTjwwDmIyY1dbuV0JdPVuVAKedrbRT7z1wJOV23Jrfe5Luy8lRk2kGiZ-yfqPXbVoZKqrxszIB5FsxT_szvcPdBzR07-lGT75o2eW8PqXKHF2j4v448g5e_28trTBeZO2L97lDX2Nfc3LmkLW2_gVBrnBwhtO4h-JtINVFg', tag: 'PROCESSING TIMES', content: content_i485 },
  { id: 6, title: 'Green Card Marriage Interview: 10 Questions to Prepare For', category: 'visa-guides', subcategory: 'how-to', date: 'FEB 28, 2024', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdy4uD-BQ03LhtM8lZrABIkK0qOX4d2sGQJkbi3giDIUF3KG86OFIwheFA9pZSh0OgSzW4yVfpZ2UgQ1im5w7KDIy0sTg01HBEFW6gFmw2h4vGlWaacqGnI4JQRxu3EjG9dqreIp2AJ6qUXM-SPetQ75U0J0VRH0I3jxVuvyHzlZdV_sNcqeAd22jJfCF03ZnRQlkp4dnfRpL3s9igCZOrC5pJcVXMgfue_QyH0itIy8ojMUiWizLukhQDcurQgTsz9NiSSBcFMXQ', tag: 'HOW-TO', content: content_gc_interview },
  { id: 7, title: 'USCIS Rejects Proposed Green Card Fee Hikes for Family Petitions', category: 'visa-news', subcategory: 'uscis', date: 'FEB 25, 2024', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATI85OtLzj_sQ0MJSzY7OKWNh756JbG2932o_Ri9ycQHBm4OUaRqbyh-FeoXP0XLK493eluw7EUp-4FIA4-9luW02by7tRs_mL_MR_Ws222g37OrmvEvjAYGl9unpTvv8orNCrC9rejkU4y7tGbBYbgwpbx9fjIe5PLKHuEmm0OMlCoPk09_tkiejWjtYv2DTF5AsYoI39e1G3_eTfY8wHtn03Bugod6gUkWAKFyunVqistTzLjMBr3-q_ODnv9-mLSblCOpny5Vs', tag: 'USCIS UPDATES', content: content_uscis_fees },
  { id: 8, title: 'New Grant Programs for Immigrant Founders on F-1 OPT', category: 'visa-news', subcategory: 'f1-opt-cpt', date: 'MAR 08, 2024', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdy4uD-BQ03LhtM8lZrABIkK0qOX4d2sGQJkbi3giDIUF3KG86OFIwheFA9pZSh0OgSzW4yVfpZ2UgQ1im5w7KDIy0sTg01HBEFW6gFmw2h4vGlWaacqGnI4JQRxu3EjG9dqreIp2AJ6qUXM-SPetQ75U0J0VRH0I3jxVuvyHzlZdV_sNcqeAd22jJfCF03ZnRQlkp4dnfRpL3s9igCZOrC5pJcVXMgfue_QyH0itIy8ojMUiWizLukhQDcurQgTsz9NiSSBcFMXQ', tag: 'F1 & OPT/CPT', content: content_f1_grants },
  { id: 9, title: 'F-1 Students Face New Reporting Requirements for STEM OPT', category: 'visa-news', subcategory: 'f1-opt-cpt', date: 'FEB 20, 2024', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoplYKZG0QKQQ9IQdfcHZhK3y9AwyMxcMCse8pg22L8N4EOb0u0_21wvZOODKiTWUVzzDhXQCmC43rxzxi0rVKUTgaZng0AS2OgM_o1LTi_RI9W3oyxRlnfT5_2BD4g2Nu8BUymyUE3WPC_GgPuhCxWVjk-tcRHE1DVQzXQ5Q534fbhwgIMqeyshtNl3L6idfwwlp1HYcfNxPD5NMSe1mI4hoJdTytWjFQ_w3wZVPRW9FQtf6KsesizAgwvuEUJQ2KEHNYc-BzLDA', tag: 'F1 & OPT/CPT', content: content_f1_stem },
  { id: 10, title: 'Digital Nomad Visa Options for 2024 vs B1/B2 Renewals', category: 'visa-news', subcategory: 'b1-b2', date: 'MAR 14, 2024', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOUgkbn0ejx90kCo_WeuweNcC65_qQXwgeYf0l_IkxuatVrUe987ygmQ6qrFxfTEj1neDn7iQXX9JTzQaRhcH_f7xPo4kq5bIUNlRibi9DukYjZvnk0kP2w0gEc9ZZaqG0K-1lZwmGT1e5ZQ9XxahHOsJRXf9s83cryBJmDoeO1t7G6zt6Nsl6PPZ9Ephlcr4fWzHt6UtzjqAkf2eXYkBSawGCgUxNfjJEM-I8AdbfyveerG3Ivnl0OyJPP6z5RCBAlP1qjUHkMbo', tag: 'B1/B2', content: content_digital_nomad },
  { id: 11, title: 'Consulate Interview Wait Times Drop for Tourist Visas in India', category: 'processing-times', subcategory: 'consulate', date: 'JAN 15, 2024', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOUgkbn0ejx90kCo_WeuweNcC65_qQXwgeYf0l_IkxuatVrUe987ygmQ6qrFxfTEj1neDn7iQXX9JTzQaRhcH_f7xPo4kq5bIUNlRibi9DukYjZvnk0kP2w0gEc9ZZaqG0K-1lZwmGT1e5ZQ9XxahHOsJRXf9s83cryBJmDoeO1t7G6zt6Nsl6PPZ9Ephlcr4fWzHt6UtzjqAkf2eXYkBSawGCgUxNfjJEM-I8AdbfyveerG3Ivnl0OyJPP6z5RCBAlP1qjUHkMbo', tag: 'CONSULATE ALERTS', content: content_consulate_wait },
  { id: 12, title: 'Visa Bulletin For April 2024: Massive Retrogression in EB-2', category: 'visa-bulletin', subcategory: 'index', date: 'MAR 10, 2024', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKs0Kp0aBoh8ydCgZzM4KwfpiM3qCjegaJqFzBP4vQpITa4xP7FwBjBwaqMJDszQRyfMTxdDdwG-tqc5bIUdPEcmoyWQJPQbDzFdsOsTjwwDmIyY1dbuV0JdPVuVAKedrbRT7z1wJOV23Jrfe5Luy8lRk2kGiZ-yfqPXbVoZKqrxszIB5FsxT_szvcPdBzR07-lGT75o2eW8PqXKHF2j4v448g5e_28trTBeZO2L97lDX2Nfc3LmkLW2_gVBrnBwhtO4h-JtINVFg', tag: 'VISA BULLETIN', content: content_visa_bulletin },
  { id: 13, title: 'Is Premium Processing Worth the Increased Multi-Thousand Dollar Cost?', category: 'visa-guides', subcategory: 'faqs', date: 'FEB 01, 2024', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKs0Kp0aBoh8ydCgZzM4KwfpiM3qCjegaJqFzBP4vQpITa4xP7FwBjBwaqMJDszQRyfMTxdDdwG-tqc5bIUdPEcmoyWQJPQbDzFdsOsTjwwDmIyY1dbuV0JdPVuVAKedrbRT7z1wJOV23Jrfe5Luy8lRk2kGiZ-yfqPXbVoZKqrxszIB5FsxT_szvcPdBzR07-lGT75o2eW8PqXKHF2j4v448g5e_28trTBeZO2L97lDX2Nfc3LmkLW2_gVBrnBwhtO4h-JtINVFg', tag: 'FAQS', content: content_premium_processing }
];

const LiveUpdatesData = [];

module.exports = { AdminConfig, NewsData, LiveUpdatesData };
