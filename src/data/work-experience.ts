import type { Skill } from '@/types';

export interface Milestone {
  title: string;
  period: string;
  description: string[];
  skills: Skill[];
}

export const milestones: Milestone[] = [
  {
    title: '前端基础与Vue生态探索',
    period: '2018年 - 2020年', // 示例时间，请根据实际情况调整
    description: [
      '深入学习前端基础知识，包括HTML、CSS、JavaScript。',
      '熟练掌握Vue 2框架，参与并完成了多个基于Vue 2的Web项目。',
      '探索并实践了Vue生态系统中的常用库和工具，如Vuex、Vue Router等。'
    ],
    skills: [
      { name: 'Vue', icon: 'i-logos-vue' },
      { name: 'JavaScript', icon: 'i-logos-javascript' }, // 假设有JavaScript技能图标
      { name: 'HTML', icon: 'i-logos-html-5' }, // 假设有HTML技能图标
      { name: 'CSS', icon: 'i-logos-css-3' } // 假设有CSS技能图标
    ]
  },
  {
    title: '跨平台开发实践与小程序生态',
    period: '2020年 - 2021年', // 示例时间，请根据实际情况调整
    description: [
      '转向跨平台开发，深入学习并使用uni-app进行多端应用开发。',
      '完成了多个小程序项目，积累了小程序开发经验。',
      '掌握了uni-app的组件化开发和API调用。'
    ],
    skills: [
      { name: 'Uniapp', icon: 'i-logos-unocss' }, // 暂时使用UnoCSS图标，待确认uni-app图标
      { name: 'Vue', icon: 'i-logos-vue' }
    ]
  },
  {
    title: 'React生态与企业级应用开发',
    period: '2021年 - 2022年', // 示例时间，请根据实际情况调整
    description: [
      '系统学习React框架，理解其核心概念和工作原理。',
      '参与并主导了多个基于React的企业级Web应用开发。',
      '熟练运用React Hooks、Context API等新特性，提升开发效率。',
      '接触并使用了Ant Design等UI组件库。'
    ],
    skills: [
      { name: 'React', icon: 'i-logos-react' },
      { name: 'Ant Design', icon: 'i-logos-ant-design' },
      { name: 'TypeScript', icon: 'i-logos-typescript-icon' }
    ]
  },
  {
    title: '桌面应用与多端融合探索',
    period: '2022年 - 2023年', // 示例时间，请根据实际情况调整
    description: [
      '学习并实践Taro框架，进行多端（微信小程序、H5、React Native）开发。',
      '探索桌面应用开发，使用Electron构建跨平台桌面应用。',
      '将前端技术栈扩展到桌面端和更多移动端场景。',
      '接触并应用Three.js进行3D图形渲染，提升视觉交互体验。'
    ],
    skills: [
      { name: 'Taro', icon: 'i-logos-taro' },
      { name: 'Electron', icon: 'i-logos-electron' },
      { name: 'React', icon: 'i-logos-react' },
      { name: 'Three.js', icon: 'i-logos-threejs' }
    ]
  },
  {
    title: '全栈进阶与高性能应用构建及工程化实践',
    period: '2023年 - 至今', // 示例时间，请根据实际情况调整
    description: [
      '深入学习Next.js，掌握其SSR、SSG等特性，构建高性能Web应用。',
      '学习并使用Nest.js进行后端开发，构建可伸缩、可维护的API服务。',
      '实践全栈开发模式，独立完成前后端项目。',
      '接触并使用了Prisma进行数据库操作。',
      '主导并推动前端工程化建设，包括但不限于：',
      '  - 引入并配置ESLint、Prettier、Stylelint，统一代码风格和质量。',
      '  - 搭建Commitizen和Commitlint，规范Git提交信息，提升版本管理效率。',
      '  - 利用Husky和lint-staged实现Git Hooks自动化，确保代码提交前的质量检查。',
      '  - 优化构建流程，引入UnoCSS等现代CSS工具，提升开发效率和性能。'
    ],
    skills: [
      { name: 'Next.js', icon: 'i-logos-nextjs-icon' },
      { name: 'Nest.js', icon: 'i-logos-nestjs' },
      { name: 'TypeScript', icon: 'i-logos-typescript-icon' },
      { name: 'Node.js', icon: 'i-logos-nodejs-icon' },
      { name: 'Prisma', icon: 'i-logos-prisma' },
      { name: 'ESLint', icon: 'i-logos-eslint' }, // 假设有ESLint图标
      { name: 'Prettier', icon: 'i-logos-prettier' }, // 假设有Prettier图标
      { name: 'Stylelint', icon: 'i-logos-stylelint' }, // 假设有Stylelint图标
      { name: 'Husky', icon: 'i-logos-husky' }, // 假设有Husky图标
      { name: 'Commitlint', icon: 'i-logos-commitlint' } // 假设有Commitlint图标
    ]
  }
];
