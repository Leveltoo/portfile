import { skills } from '@/data/skills';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center pt-20">
      {/* --- Hero Section --- */}
      <section className="mb-16">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
          你好，我是
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
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          一名致力于用代码构建优雅、高效数字体验的全栈开发者。
        </p>
      </section>

      {/* --- Call to Action --- */}
      <section className="mb-24">
        <Link
          href="/projects"
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xl font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
        >
          查看我的项目
        </Link>
      </section>

      {/* --- Skills Preview --- */}
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
    </div>
  );
}
