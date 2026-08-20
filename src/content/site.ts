/**
 * All Snowfox site copy, in one place.
 *
 * Every claim here traces back to https://snowfox-ai.com/en_us/ — services,
 * solutions, success cases, testimonials and team were pulled from that site's
 * WordPress REST API and rewritten for a US business audience. Nothing is
 * invented: no client names, statistics, ROI figures or partnerships appear
 * here that were not already published.
 *
 * Testimonials are the exception to the rewrite. They are attributed quotes
 * from named people, so they are reproduced as published (light punctuation
 * and spacing repair only) rather than edited for style.
 */

export type Outcome = {
  title: string
  detail: string
}

/**
 * The old site's spine: More Results / More Efficiency / More Scalability.
 * Kept as the first thing after the hero, with each outcome tied to something
 * a business actually measures.
 */
export const outcomes: Outcome[] = [
  {
    title: 'More results',
    detail:
      'Machine learning applied where it moves a number you already track — conversion, margin, yield, cycle time.',
  },
  {
    title: 'More efficiency',
    detail:
      'Automate the repetitive work that surrounds a decision, and lower what each decision costs to make.',
  },
  {
    title: 'More scalability',
    detail:
      'Systems that hold up as volume grows, without adding headcount in proportion to it.',
  },
]

export type Service = {
  name: string
  summary: string
  points: string[]
}

export type Pillar = {
  label: string
  lede: string
  services: Service[]
}

/**
 * Two pillars, deliberately equal. Snowfox is an AI *and* data firm, and the
 * old site organizes its services exactly this way — collapsing them into one
 * list would misrepresent the offering.
 */
export const pillars: Pillar[] = [
  {
    label: 'Artificial intelligence',
    lede: 'From the strategy question through to the model running in production.',
    services: [
      {
        name: 'AI consulting',
        summary:
          'End-to-end involvement, from strategic questions to implemented solutions — with a pragmatic, results-oriented team rather than a deck.',
        points: [
          'AI strategy: the vision, where AI can realistically be applied, the impact on the business model, and the maturity you are starting from',
          'Planning and execution of AI transformation: staging the work, running the program, and prioritizing use cases',
          'Implementation: assessment, data collection and preparation, then the model itself',
          'MLOps consulting: architecting how models get built, shipped and managed',
        ],
      },
      {
        name: 'MLOps',
        summary:
          'Standardize how models are deployed, operated and improved, so your team ships faster and you keep ownership of the intellectual property.',
        points: [
          'An AI team still forming, or demand running ahead of what it can deliver',
          'A long horizon (24 months or more) where owning the model matters',
          'Pressure to shift capital expense into operating expense early on',
          'R&D capacity too thin to keep pace with new model development',
        ],
      },
      {
        name: 'MLaaS',
        summary:
          'Machine learning as a service. Pre-built models put to work now, for teams that need value before they need ownership.',
        points: [
          'A need to move quickly from proven models rather than build from scratch',
          'An AI team still forming, or demand running ahead of delivery capacity',
          'A long horizon with budget sitting in operating expense',
          'Limited R&D capacity to track new model development',
        ],
      },
    ],
  },
  {
    label: 'Data',
    lede: 'The foundation the AI work stands on — and valuable on its own.',
    services: [
      {
        name: 'Data-driven strategy',
        summary:
          'Deciding with evidence stopped being an advantage and became table stakes. We align the data strategy to the business strategy.',
        points: [
          'Assessing where data can genuinely improve decision-making',
          'Aligning business strategy and data strategy',
          'Architecture and data design: infrastructure, models, pipelines, storage, and the tooling choices behind them',
          'Governance and compliance: security, retention, and privacy you can defend',
        ],
      },
      {
        name: 'Data engineering',
        summary:
          'Data is only an asset if it is available and trustworthy at every stage. We make it both.',
        points: [
          'Diagnosing pipelines and ETL, then fixing the bottlenecks that cost you performance and reliability',
          'Designing and building warehouses and BI in public or private cloud',
          'Building the analysis and visualization layer people actually use',
        ],
      },
      {
        name: 'Big data consulting',
        summary:
          'High-volume, real-time processing, designed and deployed at the speed the business needs.',
        points: [
          'Big data strategy: the sources that matter, the metrics that count, and the reporting that follows',
          'Assessment and implementation with Apache Spark, NoSQL, and cloud warehouses',
          'Training so your team can run it without us',
        ],
      },
    ],
  },
]

export type Solution = {
  name: string
  tag?: string
  summary: string
}

/** Applied solutions, including the two named Snowfox products. */
export const solutions: Solution[] = [
  {
    name: 'Generative AI',
    summary:
      'LLM systems built for production: codebase and cloud migration, agents for data analysis, customer support and process automation, and internal assistants wired into ERP and CRM.',
  },
  {
    name: 'Computer vision',
    summary:
      'Recognition, detection, segmentation and video analysis, applied to inspection, document processing and security.',
  },
  {
    name: 'Natural language processing',
    summary:
      'Classification, entity extraction, summarization, generation, translation and speech — applied to contracts, filings, email and customer feedback.',
  },
  {
    name: 'Agritech',
    summary:
      'Precision agriculture from drone and satellite imagery: crop monitoring, pest and disease detection, and grading by size, color and maturity.',
  },
  {
    name: 'segMENTOR',
    tag: '©',
    summary:
      'Offer segmentation that finds patterns conventional segmentation misses and runs with very little human intervention — across exit-intent, dynamic CTAs, email and push.',
  },
  {
    name: 'priceGURU',
    tag: '©',
    summary:
      'Price optimization across the portfolio, accounting for margin, elasticity, cannibalization and competitor position, tuned to the strategic goal you are actually pursuing.',
  },
]

export type Case = {
  title: string
  detail: string
  tag: string
}

/** Published success cases. Wording tightened; claims unchanged. */
export const cases: Case[] = [
  {
    title: 'Financial process automation with computer vision',
    detail:
      'Automating steps in financial processes using computer vision, raising the efficiency of the process end to end.',
    tag: 'Computer vision',
  },
  {
    title: 'Automated PDF extraction using IDP',
    detail:
      'An automatic document-processing pipeline combining intelligent document processing with supervised entity extraction from natural-language text.',
    tag: 'NLP',
  },
  {
    title: 'Behavior-based push notifications',
    detail:
      'Push targeting driven by shopper behavior inside shopping centers, weighing external and behavioral factors. The result was more effective communication and increased sales.',
    tag: 'segMENTOR',
  },
  {
    title: 'Click-through rate lift for a multinational CPG',
    detail:
      'Behavioral analysis, segmentation to reach the right audience, and an optimized smart exit-intent design working together to raise engagement.',
    tag: 'segMENTOR',
  },
  {
    title: 'Price optimization for a retailer',
    detail:
      'A causal learning model set to the company’s macro-market strategy. Combining demand forecasting, cross-elasticity forecasting and precise price adjustment produced a significant increase in profit margin.',
    tag: 'priceGURU',
  },
  {
    title: 'Crop mapping and yield forecasting',
    detail:
      'Remote sensing and AI used to analyze and predict crop productivity against climate, soil and cultivation practice — improving resource management and yields.',
    tag: 'Agritech',
  },
  {
    title: 'Data and analytics pipeline for a media company',
    detail:
      'A data-driven transformation delivered quickly, giving visibility of every performance indicator. With more than 50 views in place, decision-making became measurably faster.',
    tag: 'Data engineering',
  },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
}

/**
 * Reproduced as published on snowfox-ai.com. These are attributed to named
 * people, so they are not rewritten. Company affiliations are omitted because
 * the source site does not state them.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      'The segmentation solution from snowfoxAI has been fundamental to offer the right product in a very efficient way to our customers. In addition, the solution allows us to have a level of scalability very interesting to test new offers to various customer segments.',
    name: 'Diego Nasra',
    role: 'Product Owner',
  },
  {
    quote:
      'snowfoxAI is an important piece in our new martech strategy. With the restructuring of the new Exame, we are able to accelerate results through a deeper understanding of our user, offering and optimizing our campaigns to impact the right person, at the right time, with the right campaign.',
    name: 'Rodrigo Ney',
    role: 'Head of Data',
  },
  {
    quote:
      'We had a big challenge to scale our operation and chose Snow Fox AI to develop an artificial intelligence solution to overcome this challenge. With a fantastic technical team focused on the customer’s goal, they delivered an innovative, reliable product that runs in the core of our company, allowing automated business scale.',
    name: 'Luidi Andrade',
    role: 'CTO',
  },
  {
    quote:
      'The technical quality and the delivery capacity of Snow Fox AI exceeded my expectations. My team did not have advanced maturity in the area of Artificial Intelligence and we urgently needed smart tools to use our data in a relevant way for the business. We found in Snow Fox AI a partner with deep knowledge of AI models with a focus on the customer.',
    name: 'Hugo Carvalho',
    role: 'CTO',
  },
  {
    quote:
      'SnowFox demonstrates an exceptional ability to apply artificial intelligence to solve real market challenges. The theoretical knowledge, combined with practical experience, results in effective and innovative solutions for our specific needs.',
    name: 'Julio Chagas',
    role: 'CIO',
  },
]

/**
 * The end-to-end claim, made concrete. This is a genuine sequence — each stage
 * depends on the one before it — so the steps are numbered.
 */
export const approach = [
  {
    title: 'Understand the opportunity',
    detail:
      'How the business runs today, where the bottlenecks are, and what the data can and cannot support.',
  },
  {
    title: 'Define the strategy',
    detail:
      'Where AI and data create value here, what it changes about the business model, and the maturity you are starting from.',
  },
  {
    title: 'Prioritize use cases',
    detail:
      'Sequenced by value and feasibility, so the first thing built is the one worth building first.',
  },
  {
    title: 'Build the solution',
    detail:
      'Data collection and preparation through to the model, engineered for production rather than demo.',
  },
  {
    title: 'Integrate it',
    detail:
      'Into the systems people already use — ERP, CRM, the warehouse — so it becomes part of the workflow.',
  },
  {
    title: 'Scale it',
    detail:
      'Operate, monitor and improve, with MLOps in place so the second and tenth models cost less than the first.',
  },
]

export const team = [
  { name: 'Markus Rosa', role: 'CEO and Founder' },
  { name: 'Giovanni Gabriele', role: 'COO and CFO' },
  { name: 'Gabriel Nóbrega', role: 'Head of Software Engineering' },
  { name: 'Allan Souza', role: 'Head of Artificial Intelligence' },
]

/** The five dimensions of the Snowfox AI Readiness assessment. */
export const readinessDimensions = [
  {
    name: 'Data',
    detail: 'What exists, where it lives, whether it can be trusted',
  },
  {
    name: 'Technology',
    detail: 'Systems in use, how they connect, what they cannot do',
  },
  {
    name: 'Strategy',
    detail: 'Which business outcomes the work is meant to move',
  },
  {
    name: 'People & culture',
    detail: 'Skills, ownership, and appetite for changing how work is done',
  },
  {
    name: 'Governance & processes',
    detail: 'Decision rights, risk, and how changes get approved',
  },
]
