import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, theme } from 'antd';
import './globals.css';

export const metadata: Metadata = {
  title: 'my next protfile',
  description: '作品集 作品集 next 全栈 前端 后端 接单 简历 项目 个人主页'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm
          }}
        >
          <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
