# Ayush Gaur Portfolio

A modern one-page personal portfolio website for Ayush Gaur, an ML/AI Engineer and Data
Scientist. The site presents professional background, education, featured AI projects,
technical skills, resume access, and contact links in a responsive, recruiter-friendly layout.

## Tech Stack

- React with TypeScript
- Vite
- Tailwind CSS v4 using the Vite plugin
- ESLint
- Static deployment for Vercel

## Project Structure

```text
src/
  components/       Page sections and shared UI components
  data/             Editable projects, skills, navigation, and profile links
  App.tsx           Page composition
  main.tsx          React entry point
  index.css         Theme and Tailwind styles
public/
  favicon.svg
  resume-placeholder.txt
```

## Run Locally

Install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

To validate a production build:

```bash
npm run lint
npm run build
npm run preview
```

## Deploy To Vercel

1. Push the project to a GitHub repository.
2. In Vercel, select **Add New Project** and import the repository.
3. Vercel will detect Vite automatically. Confirm these values if prompted:

```text
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

4. Select **Deploy**. No environment variables or backend services are required.

You can also deploy with the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Update Personal Content

Replace placeholders before publishing:

- Edit `src/data/links.ts` with the real email, GitHub URL, and LinkedIn URL.
- Replace `public/profile.jpg` to update the hero profile photo.
- The resume PDF is served from `public/Ayush-Gaur-Resume.pdf`. Replace that file when
  updating your resume.
- Edit the undergraduate university name and degree details in
  `src/components/Education.tsx`.
- Replace each project GitHub placeholder URL in `src/data/projects.ts`.

Project descriptions and technical highlights are also maintained in `src/data/projects.ts`,
while skill groups can be updated in `src/data/skills.ts`.
