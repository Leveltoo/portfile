import type { Project } from '@/types';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
      <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-500">[项目截图]</span>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-cyan-400 mb-2">{project.name}</h3>
        <p className="text-gray-300 mb-4 h-20 overflow-hidden">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                查看线上
              </Link>
            )}
            {project.sourceUrl && (
              <Link
                href={project.sourceUrl}
                target="_blank"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                查看源码
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
