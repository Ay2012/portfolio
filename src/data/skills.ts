export interface SkillGroup {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'R', 'C++'],
  },
  {
    category: 'ML/AI',
    skills: ['PyTorch', 'scikit-learn', 'Transformers', 'Hugging Face', 'CLIP', 'Diffusers'],
  },
  {
    category: 'LLM Systems',
    skills: ['LangGraph', 'RAG', 'OpenAI API', 'Gemini API', 'Prompt Orchestration'],
  },
  {
    category: 'Backend/Data',
    skills: ['FastAPI', 'DuckDB', 'SQLite', 'SQLAlchemy', 'Pandas', 'NumPy'],
  },
  {
    category: 'Frontend/Deployment',
    skills: ['React', 'Vite', 'Tailwind CSS', 'Docker', 'Vercel', 'GitHub Actions'],
  },
  {
    category: 'Testing',
    skills: ['Pytest', 'Vitest', 'Playwright'],
  },
]

