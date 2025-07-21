'use client';

import { useState } from 'react';

const contactEmail = 'your.email@example.com';

export default function ContactPage() {
  const [copyStatus, setCopyStatus] = useState('点击复制');

  const handleCopy = () => {
    navigator.clipboard.writeText(contactEmail).then(
      () => {
        setCopyStatus('已复制!');
        setTimeout(() => {
          setCopyStatus('点击复制');
        }, 2000);
      },
      () => {
        setCopyStatus('复制失败');
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-4">与我联系</h1>
      <p className="text-xl text-gray-400 mb-8 max-w-2xl">
        我非常乐意与您交流。如果您有任何问题、项目合作意向，或者只是想打个招呼，都可以通过下面的邮箱与我联系。
      </p>

      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex items-center space-x-4">
        <span className="text-lg text-cyan-400">{contactEmail}</span>
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md transition-all duration-300 w-28"
        >
          {copyStatus}
        </button>
      </div>

      <div className="mt-12">
        <p className="text-gray-500 mb-4">或者在这些平台找到我</p>
        <div className="flex space-x-6">
          <a
            href="#"
            target="_blank"
            className="i-ant-design-github-filled text-4xl text-gray-400 hover:text-white transition-colors"
          ></a>
          <a
            href="#"
            target="_blank"
            className="i-ant-design-linkedin-filled text-4xl text-gray-400 hover:text-white transition-colors"
          ></a>
          {/* Add more social links here */}
        </div>
      </div>
    </div>
  );
}
