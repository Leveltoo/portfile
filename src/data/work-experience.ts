import type { Skill } from '@/types';

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: Skill[];
}

export const workExperiences: WorkExperience[] = [
  {
    company: '未来科技公司 (Future Tech Inc.)',
    role: '高级全栈工程师',
    period: '2022年8月 - 至今',
    description: [
      '主导并开发了公司核心的 SaaS 产品，使用 Next.js 和 TypeScript 将前端性能提升了 50%。',
      '设计并实现了一套基于微服务架构的后端系统，使用 Node.js 和 Docker 实现了服务的弹性伸缩。',
      '通过引入 UnoCSS 和组件化开发，将项目的开发效率和可维护性提高了 30%。'
    ],
    skills: [] // You can populate this later from your main skills list
  },
  {
    company: '创新解决方案 (Innovative Solutions)',
    role: '前端开发工程师',
    period: '2020年6月 - 2022年7月',
    description: [
      '负责公司旗舰产品的多个核心功能模块的开发与维护，主要使用 React 和 Ant Design。',
      '参与了项目从 JavaScript 到 TypeScript 的重构，显著提高了代码的健壮性。',
      '通过性能优化，将页面的平均加载时间减少了 200ms。'
    ],
    skills: []
  }
];
