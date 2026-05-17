'use client'

import React, { useState } from 'react'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    index: '01',
    title: 'LeadGenerationPro',
    subtitle: 'Final Year Project',
    description:
      'A smart B2B lead generation platform featuring a general-purpose web scraper, parallel task orchestration with Apache Kafka, and containerized deployment using Docker and Kubernetes.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Apache Kafka', 'Docker', 'Kubernetes'],
    achievements: ['Scalable parallel scraping', 'Structured data extraction', 'Full CI/CD pipeline'],
    github: 'https://github.com/SadiaKhalil125/LeadGenerationPro',
    accentColor: 'bg-blue-50 dark:bg-blue-950/30',
    accentBorder: 'border-blue-100 dark:border-blue-900/30',
  },
  {
    index: '02',
    title: 'LUKE — AI Legal Integrator',
    subtitle: 'AI Agent Framework',
    description:
      'An advanced live AI agent framework specialized for Peruvian Law. Provides legal answers with official citations, performs clause audits, compares document versions, and automates regulatory alerts.',
    tech: ['RAG', 'OpenAI', 'OCR', 'Selenium', 'FastAPI', 'TypeScript'],
    achievements: ['Official citation retrieval', 'Document version comparison', 'Regulatory alert automation'],
    github: 'https://github.com/cleonruiz-netizen/LUKE.git',
    accentColor: 'bg-amber-50 dark:bg-amber-950/20',
    accentBorder: 'border-amber-100 dark:border-amber-900/30',
  },
  {
    index: '03',
    title: 'AI Code Lab',
    subtitle: 'Intelligent Coding Platform',
    description:
      'An intelligent coding platform with AI-powered question generation, dual-pane code editor, real-time evaluation and scoring powered by Llama 3. Supports user authentication and topic selection.',
    tech: ['React.js', 'FastAPI', 'Llama 3', 'JWT Auth', 'Python', 'MUI'],
    achievements: ['AI-generated coding questions', 'Real-time code evaluation', 'Personalized topic sessions'],
    github: 'https://github.com/SadiaKhalil125/AI-Code-Lab.git',
    accentColor: 'bg-indigo-50 dark:bg-indigo-950/20',
    accentBorder: 'border-indigo-100 dark:border-indigo-900/30',
  },
  {
    index: '04',
    title: 'Autonomous News Agent',
    subtitle: 'AI Video Automation',
    description:
      'An autonomous agent that converts news articles into engaging videos. Orchestrates scraping, script generation, voiceover creation, and video compilation with visuals — end-to-end.',
    tech: ['LangGraph', 'Grok', 'Llama', 'OpenAI', 'ElevenLabs', 'Moviepy'],
    achievements: ['Fully autonomous pipeline', 'AI-generated voiceovers', 'Multi-step LLM orchestration'],
    github: 'https://github.com/SadiaKhalil125/Auto-News-Cast-Agent.git',
    accentColor: 'bg-cyan-50 dark:bg-cyan-950/20',
    accentBorder: 'border-cyan-100 dark:border-cyan-900/30',
  },
  {
    index: '05',
    title: 'Queryly-AI',
    subtitle: 'SQL Learning Platform',
    description:
      'Comprehensive SQL learning platform with an AI-powered ReAct agent — featuring NLP-to-SQL conversion (Llama 3.1), an AI quiz generator (GPT-4), and RAG-based document Q&A.',
    tech: ['LangChain', 'ChromaDB', 'Llama-4', 'Python', 'MongoDB'],
    achievements: ['Natural language to SQL', 'AI quiz generation', 'RAG document Q&A'],
    github: 'https://github.com/SadiaKhalil125/Queryly-AI.git',
    accentColor: 'bg-purple-50 dark:bg-purple-950/20',
    accentBorder: 'border-purple-100 dark:border-purple-900/30',
  },
  {
    index: '06',
    title: 'Bonded Social Network',
    subtitle: 'Real-Time Social Platform',
    description:
      'A real-time social platform with follow, like, comment, push notifications, and chat — powered by SignalR. Fully dockerized and published to Docker Hub.',
    tech: ['ASP.NET MVC', 'SignalR', 'Docker', 'SQL Server'],
    achievements: ['Real-time messaging with SignalR', 'Dockerized deployment', 'Full social graph'],
    github: 'https://github.com/SadiaKhalil125/FullStack-SocialMediaBasedProject.git',
    accentColor: 'bg-rose-50 dark:bg-rose-950/20',
    accentBorder: 'border-rose-100 dark:border-rose-900/30',
  },
  {
    index: '07',
    title: 'VocaHire — AI Interview',
    subtitle: 'Interview Practice Platform',
    description:
      'AI-powered interview practice platform that simulates real-time interview sessions, provides detailed feedback, tracks session history, and supports body language analysis via pose detection.',
    tech: ['FastAPI', 'React', 'OpenAI', 'Redux', 'Pose Detection'],
    achievements: ['Real-time AI feedback', 'Body language analysis', 'Session history tracking'],
    github: 'https://github.com/SadiaKhalil125/VocaHire-AIInterviewPartner.git',
    accentColor: 'bg-teal-50 dark:bg-teal-950/20',
    accentBorder: 'border-teal-100 dark:border-teal-900/30',
  },
  {
    index: '08',
    title: 'Plant Disease Detection',
    subtitle: 'Computer Vision',
    description:
      'Trained YOLOv5 and YOLOv8 object detection models achieving 95% accuracy across 30+ plant diseases. Deployed via a Flask-based web application with real-time inference.',
    tech: ['Python', 'PyTorch', 'YOLOv8', 'Flask', 'OpenCV'],
    achievements: ['95% detection accuracy', '30+ disease classes', 'Real-time inference UI'],
    github: 'https://github.com/SadiaKhalil125/PlantDiseaseDetection.git',
    accentColor: 'bg-emerald-50 dark:bg-emerald-950/20',
    accentBorder: 'border-emerald-100 dark:border-emerald-900/30',
  },
]

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="projects" className="py-28 lg:py-36 bg-[#F8F6F2] dark:bg-[#0E0D0B]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
          <div>
            <p className="section-label mb-3">Projects</p>
            <h2 className="section-heading">Selected work.</h2>
          </div>
          <a
            href="https://github.com/SadiaKhalil125"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200 group"
          >
            <Github size={16} strokeWidth={1.75} />
            <span>View all on GitHub</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="card overflow-hidden hover:shadow-lg dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Top accent bar */}
              <div className={`h-1.5 w-full ${project.accentColor} ${project.accentBorder}`} />

              <div className="p-7 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[0.6875rem] font-medium text-stone-400 dark:text-stone-500 tracking-widest uppercase">{project.index}</span>
                    <h3
                      className="font-semibold text-stone-900 dark:text-stone-100 text-[1.0625rem] leading-snug mt-0.5"
                      style={{ fontFamily: 'Inter Tight, sans-serif' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-[#9B8B6E] dark:text-[#C4A882] text-xs font-medium mt-0.5">{project.subtitle}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-[#252219] transition-all duration-200 flex-shrink-0"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github size={16} strokeWidth={1.75} />
                  </a>
                </div>

                {/* Description */}
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-5 space-y-1.5">
                  {project.achievements.map((ach) => (
                    <div key={ach} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-[#9B8B6E] dark:bg-[#C4A882] flex-shrink-0" />
                      <span className="text-stone-600 dark:text-stone-400 text-xs">{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-stone-100 dark:border-[#252219]">
                  {project.tech.map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects