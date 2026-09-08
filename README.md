# Shadcn Admin Dashboard

A modern admin dashboard built with **Next.js**, **TypeScript**, and **shadcn/ui** components. Features a responsive layout, interactive data tables, charts, and a clean component-driven architecture.

🔗 **Live Demo:** [shadcn-three-lime.vercel.app](https://shadcn-three-lime.vercel.app/)

## Features

- Responsive sidebar navigation with card-based dashboard layout
- Interactive data tables powered by **TanStack Table** (payment management, sortable/filterable rows)
- Dashboard charts for data visualization
- Reusable UI components: Field, HoverCard, Progress, Select, Textarea (via shadcn/ui)
- TodoList component integrated into the main dashboard
- Built with the Next.js App Router and optimized fonts via `next/font` (Geist)

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| UI Components | shadcn/ui |
| Tables | TanStack Table |
| Styling | Tailwind CSS |
| Package Manager | pnpm |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) — or npm/yarn/bun

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/rishavvrajj/shadcn.git
   cd shadcn
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   pnpm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   pnpm dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

You can start editing the dashboard by modifying files in the `src/` directory — the page auto-updates as you edit.

## Project Structure

\`\`\`
shadcn/
├── public/          # Static assets
├── src/             # Application source (pages, components, layouts)
├── components.json  # shadcn/ui component configuration
├── next.config.ts   # Next.js configuration
└── package.json     # Dependencies and scripts
\`\`\`

## Deployment

The easiest way to deploy this app is via the [Vercel Platform](https://vercel.com/new), the creators of Next.js. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [TanStack Table Documentation](https://tanstack.com/table/latest)

## License

This project is open source and available for personal and educational use.