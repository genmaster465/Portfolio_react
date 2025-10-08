
export const nebulaColors = [
  'from-fuchsia-500/40 via-purple-500/30 to-indigo-500/40',
  'from-cyan-400/40 via-sky-500/30 to-indigo-500/40',
  'from-emerald-400/40 via-teal-500/30 to-cyan-500/40',
] as const

export type Project = {
  title: string
  blurb: string
  tags: string[]
  link: string
  img: string
}

export const projects: Project[] = [
  {
    title: 'Sams Family Dental',
    blurb: 'I’m working part-time on building a website focused on medical technology, as I’m deeply interested in health. The project is built with React, MySQL, and Tailwind CSS, and it also requires some medical knowledge.',
    tags: ['TypeScript', 'React', 'Mysql', 'Tailwind css'],
    img: 'project_img/1.png',
    link: 'https://www.samsfamilydental.com',
  },
  {
    title: 'Smart Plant Health Monitor & Disease Detector',
    blurb: 'Early detection helps prevent spread and improves yields. Many farmers can’t afford disease-detection labs; a smartphone + model can help.',
    img:'project_img/leaf.jpg',
    tags: ['Django', 'sqlite', 'ML', 'TensorFlow'],
    link: '#',
  },
  {
    title: 'ML Signals + Risk-Aware Execution',
    blurb: 'Problem: Noisy intraday moves led to inconsistent discretionary trades and missed risk limits.<br>Stable signal quality with improving validation accuracy ',
    img: 'project_img/Backtest_Equity.png',
    tags: ['PyTorch', 'Slack/Email alerts', 'IBKR API', 'TensorFlow'],
    link: '#',
  },
  {
    title: 'Real-Time Marketing Analytics Automation',
    blurb: 'Developed a fully automated marketing analytics workflow using n8n that aggregates campaign data from Facebook Ads, Google Ads, and LinkedIn Ads.',
    img: 'project_img/kajavi.png',
    tags: ['kajavi', 'Gmail/Outlook', 'n8n'],
    link: '#',
  },
]
