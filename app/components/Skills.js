'use client'

import React from 'react'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'C++', 'C#', 'JavaScript', 'Kotlin'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'HTML5 / CSS3', 'Tailwind CSS', 'Figma', 'XML'],
  },
  {
    title: 'Backend & APIs',
    skills: ['ASP.NET MVC', 'Blazor WASM', '.NET Web APIs', 'FastAPI', 'Entity Framework', 'SignalR', 'REST'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['PyTorch', 'YOLOv8', 'OpenCV', 'LangChain', 'LangGraph', 'LLMs', 'RAG Pipelines'],
  },
  {
    title: 'Databases & Tools',
    skills: ['SQL Server', 'MongoDB', 'PostgreSQL', 'Sequelize', 'Docker', 'Git', 'JIRA', 'n8n'],
  },
  {
    title: 'Node.js Ecosystem',
    skills: ['Node.js', 'Express.js', 'Apache Kafka', 'Kubernetes'],
  },
]

const strengths = [
  {
    title: 'Full-Stack Architecture',
    body: 'End-to-end product development across .NET, React, and FastAPI stacks with clean separation of concerns.',
  },
  {
    title: 'AI System Design',
    body: 'Computer vision pipelines (YOLOv8), RAG document systems, and multi-agent LLM orchestration with LangGraph.',
  },
  {
    title: 'Algorithmic Thinking',
    body: 'Strong foundations in data structures and algorithms with hands-on competitive programming experience.',
  },
  {
    title: 'Mentoring & Leadership',
    body: 'Taught 50+ students in DSA, ML, and Web Engineering as a TA; led teams as Class Representative.',
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-28 lg:py-36 bg-white dark:bg-[#111009]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="mb-16">
          <p className="section-label mb-3">Skills</p>
          <h2 className="section-heading">Technical expertise.</h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="card p-6 hover:shadow-sm dark:hover:shadow-[0_2px_16px_rgba(0,0,0,0.25)] transition-shadow duration-300"
            >
              <h3
                className="text-xs font-semibold text-stone-400 dark:text-stone-500 tracking-[0.12em] uppercase mb-4"
                style={{ fontFamily: 'Inter Tight, sans-serif' }}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Strengths — editorial horizontal bands */}
        <div className="border-t border-stone-200 dark:border-[#252219] pt-12">
          <p className="section-label mb-8">Core Strengths</p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {strengths.map((s, i) => (
              <div key={i} className="flex gap-5">
                <span
                  className="text-2xl font-light text-stone-300 dark:text-stone-700 leading-none flex-shrink-0 mt-0.5"
                  style={{ fontFamily: 'Inter Tight, sans-serif' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4
                    className="font-semibold text-stone-900 dark:text-stone-100 text-sm mb-1.5"
                    style={{ fontFamily: 'Inter Tight, sans-serif' }}
                  >
                    {s.title}
                  </h4>
                  <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills