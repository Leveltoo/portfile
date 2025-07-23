import { skills } from '@/data/skills';
import Link from 'next/link';
import ThreeDBackground from '@/components/ThreeDBackground'; // Import the Three.js background component

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center pt-20 relative overflow-hidden">
      {' '}
      {/* Added relative and overflow-hidden */}
      <ThreeDBackground /> {/* Render the Three.js background component */}
      {/* Existing content, ensure it's above the background with z-index */}
      <div className="relative z-10 w-full">
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 text-center w-full max-w-4xl mx-auto rounded-xl shadow-2xl mb-16 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            急单通道 · 今天付款今晚开工
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a
              href="#pay"
              className="bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 hover:text-red-800 transition-all duration-300 transform hover:-translate-y-1"
            >
              3D数据大屏 ¥1999
            </a>
            <a
              href="#pay"
              className="bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 hover:text-red-800 transition-all duration-300 transform hover:-translate-y-1"
            >
              小程序商城 ¥999
            </a>
            <a
              href="#pay"
              className="bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 hover:text-red-800 transition-all duration-300 transform hover:-translate-y-1"
            >
              企业官网 ¥699
            </a>
          </div>
          <p className="text-base md:text-lg mb-4">微信扫码加我 → 发送「套餐A」锁档期</p>
          <p className="text-base md:text-lg mb-4">支持定金转账/合同/开票</p>
          <img
            src="/images/qrcode_placeholder.jpg"
            alt="微信二维码"
            className="w-40 h-40 mx-auto rounded-lg shadow-xl border-4 border-white"
          />
        </section>{' '}
        {/* Added relative z-10 and w-full */}
        {/* Particle Logo positioned absolutely over the hero section */}
        {/* --- Hero Section */}
        <section className="mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
            我是
            <span
              className="tech-stack-gradient-text"
              style={{
                fontFamily:
                  '"Segoe Script", "Brush Script MT", "Chalkboard SE", "Comic Sans MS", cursive',
                fontStyle: 'italic',
                fontWeight: 'bold'
              }}
            >
              GemChen
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
            3D 数据大屏：Three.js 4K 60 帧，24h 上线
          </p>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
            小程序商城：Taro 跨端，一套代码多端发布
          </p>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            企业官网：Next.js SSR，首屏 &lt;1.2 s，SEO 满分
          </p>
        </section>
        {/* --- Call to Action */}
        <section className="mb-24 flex flex-col items-center">
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            立即联系我，开始您的数字化转型之旅！
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white text-xl font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-pink-500/50 transform hover:-translate-y-1"
            >
              联系我
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 text-xl font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              查看我的项目
            </Link>
          </div>
        </section>
        {/* --- Skills Preview */}
        <section>
          <h2 className="text-2xl font-bold text-cyan-400 mb-8">我的核心技术</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.slice(0, 5).map(
              (
                skill // Show first 5 skills as a preview
              ) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300 hover:-translate-y-1 cursor-pointer"
                >
                  {skill.icon && <div className={`${skill.icon} text-2xl`}></div>}
                  <span className="text-lg">{skill.name}</span>
                </div>
              )
            )}
          </div>
        </section>
        <div
          id="pay"
          className="h-screen w-full flex items-center justify-center text-white text-2xl"
        ></div>
      </div>
    </div>
  );
}
