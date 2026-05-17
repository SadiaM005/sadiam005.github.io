'use client'

import React from 'react'

const experiences = [
  {
    role: 'Software Engineer Trainee',
    company: 'Dubizzle Labs',
    period: 'Mar 2026 – May 2026',
    type: 'Internship',
    description:
      'Worked on PROPFORCE within the sales team, resolving and implementing backend tickets using Node.js, Express.js, and Sequelize. Collaborated with cross-functional teams to debug issues and enhance product functionality.',
    tags: ['Node.js', 'Express.js', 'Sequelize', 'PROPFORCE'],
  },
  {
    role: 'Software Engineer',
    company: 'Spiral Labs',
    period: 'Part-time',
    type: 'Work',
    description:
      'Developed and maintained software products using modern JavaScript frameworks, contributing to end-to-end feature development and code quality improvement.',
    tags: ['JavaScript', 'React', 'Full-Stack'],
  },
  {
    role: 'Teaching Assistant',
    company: 'PUCIT',
    period: 'Multiple semesters',
    type: 'Academic',
    description:
      'Mentored 50+ students across three courses: Web Engineering (ASP.NET C#), Machine Learning (CNNs, PyTorch), and OOP/PF (C++). Conducted lab sessions, reviewed assignments, and provided one-on-one guidance.',
    tags: ['ASP.NET', 'PyTorch', 'C++', 'Mentoring'],
  },
  {
    role: 'DSA Mentor',
    company: 'Peer Community',
    period: 'Ongoing',
    type: 'Mentoring',
    description:
      'Solved a significant number of LeetCode problems and conducted structured peer sessions on data structures, algorithms, and problem-solving strategies.',
    tags: ['LeetCode', 'Data Structures', 'Algorithms'],
  },
  {
    role: 'Class Representative',
    company: 'PUCIT',
    period: 'Through-out the degree',
    type: 'Leadership',
    description:
      'Served as the primary liaison between students and faculty throughout the degree. Advocated for academic improvements and facilitated communication across departments.',
    tags: ['Leadership', 'Communication', 'Advocacy'],
  },
]

const typeBadgeClass = {
  Internship: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800/40',
  Work: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800/40',
  Academic: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800/40',
  Mentoring: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-900/20 dark:text-sky-300 dark:border-sky-800/40',
  Leadership: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-800/40',
}

const Experience = () => {
  return (
    <section id="experience" className="py-28 lg:py-36 bg-[#F8F6F2] dark:bg-[#0E0D0B]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="mb-16">
          <p className="section-label mb-3">Experience</p>
          <h2 className="section-heading">Where I've worked.</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 lg:left-[11.5rem] top-0 bottom-0 w-px bg-stone-200 dark:bg-[#252219] hidden lg:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="group relative grid lg:grid-cols-[11.5rem_1fr] gap-4 lg:gap-10">

                {/* Date / Meta column */}
                <div className="lg:text-right lg:pt-0.5 flex lg:flex-col items-center lg:items-end gap-3 lg:gap-1.5">
                  <span className="text-sm text-stone-500 dark:text-stone-400 font-medium mr-3">{exp.period}</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.6875rem] font-medium border mr-3 ${typeBadgeClass[exp.type]}`}>
                    {exp.type}
                  </span>
                </div>

                {/* Content column */}
                <div className="relative pl-0 lg:pl-10">
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute -left-[11px] top-1.5 w-[22px] h-[22px] rounded-full border-4 border-[#F8F6F2] dark:border-[#0E0D0B] bg-stone-300 dark:bg-stone-600 group-hover:bg-[#9B8B6E] dark:group-hover:bg-[#C4A882] transition-colors duration-300" />

                  <div className="card p-6 lg:p-8 hover:shadow-md dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-shadow duration-300">
                    <div className="flex flex-wrap items-start gap-2 justify-between mb-3">
                      <div>
                        <h3
                          className="font-semibold text-stone-900 dark:text-stone-100 text-base leading-snug"
                          style={{ fontFamily: 'Inter Tight, sans-serif' }}
                        >
                          {exp.role}
                        </h3>
                        <p className="text-[#9B8B6E] dark:text-[#C4A882] text-sm font-medium mt-0.5">{exp.company}</p>
                      </div>
                    </div>

                    <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="skill-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
