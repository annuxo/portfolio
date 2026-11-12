import type { Experience, Profile, SkillGroup, Project, Education, Certification, LeadershipRole } from './types'

export const profile: Profile = {
  name: 'Annu Priya',
  role: 'Finance, Business Analytics & Marketing',
  tagline: 'Turning financial data into decisions, and strategies into impact.',
  email: 'annu05146@gmail.com',
  phone: '+91-9311426001',
  location: 'New Delhi, India',
  linkedin: 'https://www.linkedin.com/in/annu-priya-5b17892b5/',
  github: 'https://github.com/annuxo',
  bio: 'B.Com (Hons.) student at the University of Delhi with a multidisciplinary edge — spanning finance, data analytics, and digital marketing. I bring precision from the ledger and creativity from the campaign. Whether it\'s reconciling GST filings, mining consumer behaviour datasets, or growing an NGO\'s online reach, I thrive where numbers meet narrative. I\'m looking for internship and entry-level roles where I can contribute from day one.',
  photo: null, // [ADD: professional headshot — square, high-res]
}

export const experience: Experience[] = [
  {
    company: 'GGE Genset Pvt. Ltd.',
    title: 'Accounts & Finance Intern',
    period: 'Mar 2026 – Apr 2026',
    summary: 'Certified internship in the Accounts department (6 Mar – 28 Apr 2026): end-to-end support for basic accounting, invoicing, GST return filing, 26AS reconciliation, TDS fundamentals, and import-related documentation.',
    achievements: [
      'Maintained 100% accuracy across payroll sheets, leave records, and attendance registers, supporting HR-financial integration under Accounts & Finance Manager Priyanka Sinha',
      'Supported GST return filing — invoice raising, invoice reconciliation, and documentation structuring — ensuring full compliance with indirect tax requirements',
      'Reconciled Form 26AS, assisted with TDS fundamentals, and handled import-related documentation and processes',
      'Streamlined accounting data entry with Advanced MS Excel, cutting manual reconciliation time and improving financial reporting accuracy',
    ],
    certificate: './certificates/gge-internship-certificate.pdf',
  },
  {
    company: 'Neo Economist',
    title: 'Research Intern — International Trade & GST',
    period: 'Sep 2025 – Oct 2025',
    summary: 'Conducted policy research on international trade regulations and GST compliance frameworks under Managing Director Dr. S.P. Sharma, producing structured reports for senior stakeholders.',
    achievements: [
      'Analysed cross-border trade regulations and GST compliance frameworks, consolidating multi-source research into evidence-backed reports',
      'Delivered structured deliverables that improved the team\'s documentation of indirect taxation workflows',
      'Practised the full insight-to-recommendation workflow central to consulting-grade finance research',
    ],
  },
  {
    company: 'Suvidha NGO',
    title: 'Digital Marketing Intern',
    period: 'May 2024 – Jun 2024',
    summary: 'Designed and executed social media awareness campaigns, creating targeted content aligned to outreach KPIs that measurably grew online engagement.',
    achievements: [
      'Designed multi-platform awareness campaigns aligned with NGO outreach KPIs, driving measurable growth in online engagement',
      'Created targeted social content using Canva, supporting promotional activities for the organisation\'s mission',
    ],
  },
]

export const skills: SkillGroup[] = [
  {
    category: 'Technical',
    items: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Advanced MS Excel', 'Pivot Tables', 'VLOOKUP'],
  },
  {
    category: 'Finance & Compliance',
    items: ['GST Compliance', 'Invoice & PO Processing', 'Payroll Management', 'Financial Documentation', 'Data Entry'],
  },
  {
    category: 'Marketing & Design',
    items: ['Digital Marketing', 'Content Strategy', 'Canva', 'SEO Fundamentals', 'Event Management', 'Video Editing'],
  },
  {
    category: 'Soft Skills',
    items: ['Strategic Thinking', 'Critical Thinking', 'Business Communication', 'Negotiation', 'Professional Judgment', 'Team Leadership'],
  },
]

export const projects: Project[] = [
  {
    title: 'Consumer Behaviour Data Analysis',
    subtitle: 'Millennials vs. Gen Z — A Python-Based Study',
    period: 'Sep 2024',
    problem: 'Understanding generational differences in consumption patterns is critical for businesses targeting specific demographics — yet actionable insights require rigorous data analysis.',
    approach: 'Assembled, cleaned, and analysed a 1,000+ row dataset of demographic and behavioural variables using Pandas and NumPy. Performed comprehensive exploratory data analysis (EDA) to identify statistically significant consumption and purchasing patterns across Millennial and Gen Z cohorts.',
    outcome: 'Built interactive visualisations with Matplotlib and Seaborn, translating complex outputs into a clear findings deck presented to an academic panel. Delivered data-driven recommendations through a complete consulting-style insight-to-recommendation workflow.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA', 'Data Visualization'],
    link: null, // [ADD: GitHub repo link]
  },
  {
    title: 'Technology Risk Job Simulation',
    subtitle: 'EY — via Forage',
    period: 'Completed Jul 2026',
    problem: 'Understanding how technology risk is assessed in a consulting engagement requires hands-on practice with real-world risk frameworks and stakeholder interaction.',
    approach: 'Completed the EY Technology Risk simulation on Forage — certificate of completion issued 21 Jul 2026. Practised the basics of technology risk, interacting with the business, and asking probing questions to identify risk areas; worked through a team-based approach to put together client conclusions and recommendations.',
    outcome: 'Practised analytical problem-solving, bias recognition, data analysis, risk assessment, and internal controls — skills directly transferable to finance, audit, and consulting roles.',
    tags: ['Risk Analysis', 'Data Analysis', 'Internal Controls', 'Forage'],
    link: null, // [ADD: Forage certificate link]
  },
]

export const education: Education[] = [
  {
    degree: 'B.Com (Hons.)',
    institution: 'Bharati College, University of Delhi',
    year: '2024 – 2027',
    score: '8.0 CGPA',
  },
  {
    degree: '12th — CBSE',
    institution: 'Holy Convent School, New Delhi',
    year: '2024',
    score: '67.4%',
  },
  {
    degree: '10th — CBSE',
    institution: 'Tagore Senior Secondary School, New Delhi',
    year: '2022',
    score: '66.8%',
  },
]

export const certifications: Certification[] = [
  { name: 'Digital Marketing', issuer: 'Infosys — On Wingspan', year: 'Jul 2025', file: './certificates/digital-marketing-infosys.pdf' },
  { name: 'Introduction to Generative AI Studio', issuer: 'Google', year: 'Jul 2025', file: './certificates/generative-ai-studio-google.pdf' },
  { name: 'Introduction to MS Excel', issuer: 'Microsoft', year: 'Jul 2025', file: './certificates/ms-excel-microsoft.pdf' },
  { name: 'EY Technology Risk Job Simulation', issuer: 'Forage', year: 'Jul 2026', file: './certificates/ey-technology-risk-forage.pdf' },
  { name: 'Data Labeling Job Simulation', issuer: 'Forage', year: 'Jul 2026', file: './certificates/data-labeling-forage.pdf' },
  { name: 'Mastering Keyboard Proficiency', issuer: 'Certified', year: '—' },
  { name: 'Advanced MS Excel', issuer: 'Certified', year: '—' },
]

export const leadership: LeadershipRole[] = [
  {
    role: 'Team Captain — Table Tennis Squad',
    organisation: 'Bharati College, University of Delhi',
    period: '2024 – 2027',
    highlights: [
      'Led and coached the college table tennis team through intercollegiate tournaments',
      '2nd place, 2024–25 Intra-College Sports Day',
      '2nd place, IHE University of Delhi Jazba Sports tournament',
      '3rd place, 2025–26 Khelo DU',
    ],
  },
  {
    role: 'Member — Art Villa Arts & Culture Society',
    organisation: 'Bharati College, University of Delhi',
    period: '2024 – 2027',
    highlights: [
      'Contributed to cultural exhibitions and campus events as a visual arts member',
      'Created promotional content for society events',
    ],
  },
]
