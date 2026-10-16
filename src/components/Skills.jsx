
const skillGroups = [
  {
    title: "Frontend",
    number: "01",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    number: "02",
    skills: ["Python", "Django", "REST APIs"],
  },
  {
    title: "Database",
    number: "03",
    skills: ["SQL","PostgreSQL", "Database Design"],
  },
  {
    title: "Tools & Workflow",
    number: "04",
    skills: ["Git", "GitHub", "VS Code", "Responsive Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Section heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-green-400">
            {"//"} My toolkit
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills & Technologies
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            The technologies I use to build responsive interfaces,
            backend services, and practical web applications.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="group rounded-xl border border-white/10 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/40"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-sm text-green-400">
                  {group.number}
                </span>

                <span className="text-slate-600 transition-colors group-hover:text-green-400">
                  ↗
                </span>
              </div>

              <h3 className="mb-5 text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-green-400/30 hover:text-green-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}