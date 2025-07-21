import { skills } from '@/data/skills';
import { workExperiences } from '@/data/work-experience';

export default function AboutPage() {
  return (
    <div className="min-h-screen container mx-auto px-4 py-12">
      {/* --- Personal Intro --- */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-4">关于我</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          我是一名充满激情、以结果为导向的全栈开发者，热衷于使用现代技术构建优雅、高效且用户友好的数字体验。我坚信，好的代码不仅能解决问题，更能带来愉悦。
        </p>
      </section>

      {/* --- Work Experience --- */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">工作经历</h2>
        <div className="relative border-l-2 border-cyan-500/30 pl-8 space-y-12">
          {workExperiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-10 top-1 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-semibold">
                {exp.role} <span className="text-gray-400">@ {exp.company}</span>
              </h3>
              <p className="text-gray-500 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- Skills --- */}
      <section>
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">我的技能栈</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700"
            >
              {skill.icon && <div className={`${skill.icon} text-2xl`}></div>}
              <span className="text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
