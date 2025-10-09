
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
    title: 'Brain Tumor Classification',
    blurb: 'A deep learning-based system designed for the classification of brain tumors using MRI images. The project involved fine-tuning the model with TensorFlow and enhancing accuracy with image processing and data augmentation, achieving 89.54% accuracy',
    img: 'project_img/brain_tumor.png',
    tags: ['OpenCV', 'Machine Learning', 'Tensorflow', 'Image Processing', 'Data Augmentation'],
    link: 'https://github.com/genmaster465/brain-tumor-classification',
  },
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
    blurb: 'Problem: Noisy intraday moves led to inconsistent discretionary trades and missed risk limits. Stable signal quality with improving validation accuracy ',
    img: 'project_img/Backtest_Equity.png',
    tags: ['PyTorch', 'Slack/Email alerts', 'IBKR API', 'TensorFlow'],
    link: '#',
  },
  {
    title: 'Large Language Model Benchmarking',
    blurb: 'Led a study benchmarking LLMs like Mistral, Falcon, and LLama2 for replicating developer feedback. Analyzed 3,000+ feedback instances scraped from Stack Exchange and Reddit using prompt engineering and evaluated model performance with Cosine Similarity and ROUGE-L Score',
    img: 'project_img/llm.png',
    tags: ['Mistral', 'Llama 2', 'Falcon', 'Scraping', 'NLP', 'Prompt Engineering'],
    link: 'https://github.com/genmaster465/Benchmarking-LLMs',
  },
  {
    title: 'Real-Time Marketing Analytics Automation',
    blurb: 'Developed a fully automated marketing analytics workflow using n8n that aggregates campaign data from Facebook Ads, Google Ads, and LinkedIn Ads.',
    img: 'project_img/kajavi.png',
    tags: ['kajavi', 'Gmail/Outlook', 'n8n'],
    link: '#',
  },
  {
    title: 'Board Sequence Game',
    blurb: 'A multiplayer game of Sequence for four players (2 in each team). Player 1 and 3 will be team 1 and player 2 and 4 will be team 2 by default.',
    img: 'project_img/board.jpg',
    tags: ['HTML/CSS', 'JavaScript', 'Node', 'WebSocket', 'Game'],
    link: 'https://github.com/genmaster465/Board-Sequence-Game',
  },
]
