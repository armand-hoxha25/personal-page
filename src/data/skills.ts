export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Agentic / LLM',
    icon: '🤖',
    skills: ['LangGraph', 'LangChain', 'PromptFlow', 'Pinecone (RAG)', 'OpenAI API'],
  },
  {
    name: 'ML / Data Science',
    icon: '🧠',
    skills: ['Spark', 'Sklearn', 'SkTime', 'MLflow', 'Jupyter Notebooks'],
  },
  {
    name: 'Deep Learning',
    icon: '⚡',
    skills: ['Keras', 'PyTorch'],
  },
  {
    name: 'Data Engineering',
    icon: '🗄️',
    skills: ['Spark', 'SQL', 'MongoDB', 'Databricks'],
  },
  {
    name: 'Web / API',
    icon: '🌐',
    skills: ['FastAPI', 'Streamlit', 'React', 'Django', 'HTMX'],
  },
  {
    name: 'DevOps / Infra',
    icon: '☁️',
    skills: ['Docker (ECS)', 'CI/CD', 'Azure', 'AWS', 'Git / GitHub'],
  },
  {
    name: 'Dev Languages',
    icon: '⌨️',
    skills: ['Python', 'TypeScript', 'Bash / Shell'],
  },
];
