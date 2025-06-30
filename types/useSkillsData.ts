import type { Skill } from '@/types/skill.type';

export interface TabItem {
  key: string
  label: string
  icon?: string
}

export const useSkillsData = () => {
  const competences: Record<string, Skill[]> = {
    frontend: [
      {
        name: 'React / React-Native',
        icon: '/react.svg',
      },
      {
        name: 'Next.js',
        icon: '/nextjs.svg',
      },
      {
        name: 'Nuxt.js',
        icon: '/nuxtjs.svg',
      },
      {
        name: 'TypeScript',
        icon: '/typescript.svg',
      },
      {
        name: 'Tailwind CSS',
        icon: '/tailwindcss.svg',
      },
      {
        name: 'Dart',
        icon: '/dart.svg',
      },
      {
        name: 'Flutter',
        icon: '/flutter.svg',
      },
      {
        name: 'Motion',
        icon: '/motion.svg',
      },
      {
        name: 'Pinia',
        icon: '/pinia.svg',
      },
      {
        name: 'Zod',
        icon: '/zod.svg',
      },
      {
        name: 'Shadcn Ui',
        icon: '/shadcnui-dark.png',
      }
    ],
    backend: [
      {
        name: 'Node.js',
        icon: '/nodejs.svg',
      },
      {
        name: 'Express.js',
        icon: '/expressjs-dark.png',
      },
      {
        name: 'Nest.js',
        icon: '/nestjs.svg',
      },
      {
        name: 'Jest',
        icon: '/jest.svg',
      },
      {
        name: 'Vitest',
        icon: '/vitest.svg',
      },
      {
        name: 'Java',
        icon: '/java.svg',
      },
      {
        name: 'PHP',
        icon: '/php-dark.svg',
      },
      {
        name: 'Laravel',
        icon: '/laravel.svg'
      },
      {
        name: 'REST API',
        icon: '/rest-api.svg',
      },
      {
        name: 'GraphQL',
        icon: '/graphql.svg',
      },
      {
        name: 'Prisma',
        icon: '/prisma.svg',
      }
    ],
    database: [
      {
        name: 'MongoDB',
        icon: '/mongodb.svg',
      },
      {
        name: 'PostgreSQL',
        icon: '/postgres.svg',
      },
      {
        name: 'MySQL',
        icon: '/mysql.svg',
      },
      {
        name: 'Redis',
        icon: '/redis.svg',
      },
      {
        name: 'Firebase',
        icon: '/firebase.svg',
      },
      {
        name: 'Aws',
        icon: '/aws.svg',
      }
    ],
    tools: [
      {
        name: 'Git',
        icon: '/gitlab.svg',
      },
      {
        name: 'Docker',
        icon: '/docker.svg',
      },
      {
        name: 'IntelliJ IDEA',
        icon : '/intellijidea.svg',
      },
      {
        name: 'Figma',
        icon: '/figma.svg',
      },
      {
        name: 'Postman',
        icon: '/postman.svg',
      },
      {
        name: 'Stripe',
        icon: '/stripe.svg',
      },
      {
        name: 'Vercel',
        icon: '/vercel-dark.svg',
      }
    ]
  }

  const tabs: TabItem[] = [
    {
      key: 'frontend',
      label: 'Frontend',
      icon: 'i-heroicons-computer-desktop'
    },
    {
      key: 'backend',
      label: 'Backend',
      icon: 'i-heroicons-server'
    },
    {
      key: 'database',
      label: 'Base de données',
      icon: 'i-heroicons-circle-stack'
    },
    {
      key: 'tools',
      label: 'Outils',
      icon: 'i-heroicons-wrench-screwdriver'
    }
  ]

  return {
    competences,
    tabs
  }
}
