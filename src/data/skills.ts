import type { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend Frameworks & Libraries
  { name: 'React', icon: 'i-logos-react' },
  { name: 'Vue', icon: 'i-logos-vue' },
  { name: 'Next.js', icon: 'i-logos-nextjs-icon' },
  { name: 'Taro', icon: 'i-logos-taro' },
  { name: 'Uniapp', icon: 'i-logos-unocss' }, // Note: Using UnoCSS icon as a placeholder for Uniapp

  // Graphics & Animation
  { name: 'Three.js', icon: 'i-logos-threejs' },
  { name: 'Cocos', icon: 'i-logos-cocos' },

  // Desktop & Mobile
  { name: 'Electron', icon: 'i-logos-electron' },

  // Language & Styling
  { name: 'TypeScript', icon: 'i-logos-typescript-icon' },
  { name: 'UnoCSS', icon: 'i-logos-unocss' },
  { name: 'Ant Design', icon: 'i-logos-ant-design' },
  { name: 'ESLint', icon: 'i-logos-eslint' },
  { name: 'Prettier', icon: 'i-logos-prettier' },
  { name: 'Stylelint', icon: 'i-logos-stylelint' },
  { name: 'Husky', icon: 'i-logos-husky' },
  { name: 'Commitlint', icon: 'i-logos-git' }, // 使用git图标作为占位符

  // Web Fundamentals
  { name: 'JavaScript', icon: 'i-logos-javascript' },
  { name: 'HTML', icon: 'i-logos-html-5' },
  { name: 'CSS', icon: 'i-logos-css-3' },

  // Backend & Database
  { name: 'Node.js', icon: 'i-logos-nodejs-icon' },
  { name: 'Nest.js', icon: 'i-logos-nestjs' },
  { name: 'Prisma', icon: 'i-logos-prisma' },
  { name: 'PostgreSQL', icon: 'i-logos-postgresql' },
  { name: 'Docker', icon: 'i-logos-docker-icon' }
];
