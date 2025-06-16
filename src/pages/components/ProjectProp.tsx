import { ArrowRight } from "lucide-react"
import { useState } from "react";

type Props = {
    title: string,
    description: string,
    tech: string[],
    img: string,
    repo?: string,
    onClick?: () => void
}

const ProjectProp = ({ title, description, tech, img, repo, onClick }: Props) => {
    const [hoveredProject, setHoveredProject] = useState<boolean>(false);
    
  return (
    <>
        <div
                key={title}
                className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-cyan-400/40 transition-all duration-300 cursor-pointer hover:scale-105"
                onMouseEnter={() => setHoveredProject(true)}
                onMouseLeave={() => setHoveredProject(false)}
                onClick={onClick}
              >
              <a href={repo} target="_blank">

                <div className="bg-slate-900/90 rounded-xl h-auto mb-6 flex items-center justify-center text-4xl border border-slate-700/50">
                  <img src={img} alt={title} className="h-full w-full object-cover" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
                <p className="text-gray-400 text-sm mb-4">{description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((tech, index) => (
                    <span
                    key={index}
                    className="px-2 py-1 bg-cyan-400/15 text-cyan-200 rounded-md text-xs border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end">
                  <ArrowRight 
                    className={`w-5 h-5 transition-all duration-300 ease-in-out ${
                      hoveredProject
                      ? 'text-cyan-300 transform translate-x-1' 
                        : 'text-gray-600'
                      }`}
                      />
                </div>
              </a>
        </div>
    </>
  )
}

export default ProjectProp