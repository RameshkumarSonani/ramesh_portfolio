
const achievements = [
  "Built an E-Commerce Website as part of the internship project work.",
  "Developed a Social Media Platform to gain hands-on full-stack development experience.",
  "Completed the internship and received a Certificate of Completion and a Letter of Recommendation.",
];

const skills = ["React.js","TailwindCSS","Django","SQLite","Python","Web Development"];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12">
          <p className="mb-3 font-mono text-sm text-green-400">
            {"//"} My journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Experience<span className="text-green-400">.</span>
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-slate-400">
            Hands-on experience building web applications and
            strengthening full-stack development skills.
          </p>
        </div>

        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827] p-6 transition-colors duration-300 hover:border-green-400/30 sm:p-8">
          <div className="absolute left-0 top-0 h-full w-1 bg-green-400" />

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-green-400">
                Internship · Completed
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Full Stack Developer Intern
              </h3>

              <p className="mt-2 text-slate-400">
                CodeAlpha
              </p>
            </div>

            <span className="w-fit rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1.5 text-xs font-medium text-green-300">
              Completed
            </span>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <h4 className="mb-5 font-semibold text-white">
              Key Achievements
            </h4>

            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li
                  key={achievement}
                  className="flex items-start gap-3 text-sm leading-7 text-slate-400"
                >
                  <span className="mt-1 font-mono text-green-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/10 px-3 py-1.5 font-mono text-xs text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
            <a
              href="/codealpha-certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-green-300"
            >
              <span>View Certificate</span>
              <span>↗</span>
            </a>

            <a
              href="/codealpha-lor.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-green-400/40 hover:text-green-300"
            >
              <span>View Letter of Recommendation</span>
              <span>↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
