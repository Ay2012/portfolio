export interface Project {
  title: string
  description: string
  technologies: string[]
  highlights: string[]
  githubUrl: string
}

export const projects: Project[] = [
  {
    title: 'Planera - Agentic Analytics Copilot for Structured Data',
    description:
      'A full-stack AI analytics copilot that turns messy CSV/JSON uploads into schema-grounded business insights using automated profiling, query planning, SQL generation, DuckDB execution, validation, and answer synthesis.',
    technologies: [
      'Python',
      'FastAPI',
      'DuckDB',
      'SQLite',
      'SQLAlchemy',
      'LangGraph',
      'React',
      'TypeScript',
      'Docker',
      'JWT',
      'Pytest',
      'Vitest',
    ],
    highlights: [
      'Converts natural-language business questions into validated SQL workflows',
      'Uses hallucination-mitigation checks and insufficient-evidence handling',
      'Exposes SQL traces, result previews, and audit-ready reasoning paths',
      'Benchmarked across 10 datasets and 3 business domains with over 90% workflow completion',
    ],
    githubUrl: 'https://github.com/Ay2012/planera',
  },
  {
    title: 'Adaptive Diffusion Runtime Optimizer',
    description:
      'A prompt-adaptive Stable Diffusion inference system that dynamically adjusts denoising steps using a local LLM controller while preserving image quality through CLIP-based evaluation.',
    technologies: [
      'Python',
      'PyTorch',
      'Hugging Face Diffusers',
      'Stable Diffusion v1.5',
      'CLIP',
      'Ollama',
      'Streamlit',
      'Pytest',
    ],
    highlights: [
      'Uses prompt complexity to choose runtime inference steps',
      'Adds optional latent-convergence early stopping',
      'Benchmarks adaptive vs. fixed-step diffusion pipelines',
      'Achieved significant latency reduction while maintaining near-equivalent CLIP alignment',
    ],
    githubUrl: 'https://github.com/Ay2012/adaptive-diffusion-inference',
  },
  {
    title: 'Contour - AI Sprint Planning & Jira Orchestration Copilot',
    description:
      'An AI sprint planning assistant that converts sprint goals, messy backlog items, team skills, and capacity limits into Jira-ready sprint plans with task recommendations, owner suggestions, and delivery risk flags.',
    technologies: [
      'FastAPI',
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Pydantic',
      'Jira API',
      'OpenAI API',
      'SQLite',
      'Vitest',
      'Playwright',
    ],
    highlights: [
      'Normalizes freeform backlog items into Jira-ready issues',
      'Recommends owners based on skills and capacity',
      'Detects capacity overages and planning risks',
      'Supports dry-run previews before Jira sync',
    ],
    githubUrl: 'https://github.com/saranshkr/contour',
  },
]
