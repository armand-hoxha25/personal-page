export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Extra Space Storage',
    role: 'Senior Machine Learning Engineer',
    period: 'Aug 2021 — Present',
    description: [
      'Architected and deployed Agentic AI systems using LangGraph, enabling autonomous resolution of Tier-1 IT support tickets and automating complex data analysis workflows in Azure & AWS using container orchestration (ECS)',
      'Engineered a distributed pricing engine on Databricks, migrating legacy local-server logic to a scalable cluster environment managing pricing optimization for over 4,000 facilities',
      'Built a customer-facing conversational AI chatbot (LangChain + FastAPI) providing real-time storage unit recommendations and intelligently routing calls, reducing escalation rate',
      'Developed a RAG-powered internal knowledge chatbot using Pinecone vector store and LangGraph, integrated with the Jira Service Desk API to automate internal ticket workflows',
      'Built an automated invoice categorization system using LLM-based classification and ML pipelines (Sklearn) to intelligently categorize expenses at scale',
      'Optimized churn forecasting models, achieving a 5% increase in accuracy by refining feature engineering pipelines and validation strategies',
      'Built and maintained full-stack internal ML tools using FastAPI, Streamlit, and MLflow for non-technical leadership to access real-time model inferences',
      'Designed and executed A/B testing frameworks to validate pricing algorithms, ensuring statistically significant revenue uplift',
      'Led CI/CD modernization and containerized deployments to enhance developer productivity and system reliability',
    ],
    tags: ['LangGraph', 'LangChain', 'RAG', 'Pinecone', 'Databricks', 'FastAPI', 'Sklearn', 'MLflow', 'Docker', 'Azure', 'AWS'],
  },
  {
    company: 'Motor Development Lab at USC',
    role: 'IoT & Full Stack Data Scientist (Contract)',
    period: 'Jun 2024',
    description: [
      'Developed an IoT device deployed on Raspberry Pi with facial recognition capabilities to detect and react to user activity in real time',
    ],
    tags: ['Raspberry Pi', 'IoT', 'Computer Vision', 'Python'],
  },
  {
    company: 'Neuromuscular Dynamics',
    role: 'Full Stack Developer (Contract)',
    period: 'Oct 2022',
    description: [
      'Front-end development using React for a customer-facing portal for clinical data collection and analytics',
      'Back-end development in Django, MongoDB, and PostgreSQL, deployed on Azure with CI/CD enabled',
    ],
    tags: ['React', 'Django', 'MongoDB', 'PostgreSQL', 'Azure', 'CI/CD'],
  },
  {
    company: 'Kessler Foundation',
    role: 'Senior Research Biomedical Engineer',
    period: 'Dec 2015 — Aug 2021',
    description: [
      'Led engineering across 4 research teams responsible for designing and evaluating neural experimentation and data analysis pipelines for clinical publication (15+ publications & conference presentations)',
      'Designed and implemented real-time clinical data extraction pipelines for processing patient biosignals (EEG, fNIRS, MRI), applying advanced time-series analysis to surface actionable functional insights',
      'Engineered automated feature extraction algorithms on Windows/Linux systems processing multi-modal neurological signals, translating raw biomedical data into structured, publication-ready metrics',
    ],
    tags: ['Python', 'Signal Processing', 'EEG', 'fNIRS', 'MRI', 'Time-Series', 'Clinical Research'],
  },
];
