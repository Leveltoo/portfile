import type { Project } from '@/types';
import { skills } from './skills';

export const projects: Project[] = [
  {
    id: 'project-1',
    problem: '', // 根据类型要求补充 problem 属性，初始设为空字符串
    value: '', // 根据类型要求补充 value 属性，初始设为空字符串
    name: '个人作品集网站',
    description: '一个用于展示个人项目、技能和经验的现代化、响应式网站。',
    longDescription:
      '该项目旨在构建一个功能齐全、视觉效果出众的个人品牌展示平台。它采用 Next.js 进行服务端渲染，以获得最佳的性能和 SEO 效果。前端使用 UnoCSS 实现原子化、可定制的样式，并结合 Ant Design 的高质量组件库。整个项目遵循严格的开发规范，并配置了完整的 CI/CD 流程。',
    imageUrl: 'https://via.placeholder.com/800x600.png?text=Project+Screenshot+1',
    tags: ['全栈开发', '个人项目', '响应式设计'],
    skills: skills.filter((s) =>
      ['React', 'Next.js', 'TypeScript', 'UnoCSS', 'Ant Design'].includes(s.name)
    ),
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    id: 'project-2',
    problem: '', // 根据类型要求补充 problem 属性，初始设为空字符串
    value: '', // 根据类型要求补充 value 属性，初始设为空字符串
    name: '电商后台管理系统',
    description: '一个功能强大的电商后台，支持商品、订单、用户和权限管理。',
    longDescription:
      '这是一个模拟真实业务场景的复杂后台管理系统。前端使用 React 和 Ant Design Pro 构建，实现了复杂的表单、表格和图表功能。后端使用 Node.js 和 Express 构建 RESTful API，并通过 Prisma 操作 PostgreSQL 数据库。整个系统通过 Docker 进行容器化部署。',
    imageUrl: 'https://via.placeholder.com/800x600.png?text=Project+Screenshot+2',
    tags: ['后台管理', '数据可视化', '数据库'],
    skills: skills.filter((s) =>
      ['React', 'Ant Design', 'Node.js', 'Prisma', 'PostgreSQL', 'Docker'].includes(s.name)
    ),
    sourceUrl: '#'
  }
];
