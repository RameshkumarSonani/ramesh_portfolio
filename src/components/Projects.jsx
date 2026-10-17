

const projects = [
  {
    number: "01",
    title: "E-Commerce Website",
    category: "Full Stack Development",
    description:
      "A web-based shopping platform built to provide users with a smooth and responsive shopping experience.",
    technologies: ["React.js","TailwindCSS", "Django", "Python"],
    github:
      "https://github.com/RameshkumarSonani/CodeAlpha_Ecommerce_Website",
    demo: "https://lnkd.in/p/dz5nwvVQ",
  },
  {
    number: "02",
    title: "Social Media Platform",
    category: "Full Stack Development",
    description:
      "A social platform project focused on user interaction and a responsive, user-friendly interface.",
    technologies: ["React.js","TailwindCSS", "Django", "Python"],
    github:
      "https://github.com/RameshkumarSonani/CodeAlpha_Social_Media_Platform",
    demo: "https://lnkd.in/p/dVNdMiN6",
  },
  {
    number: "03",
    title: "Career Counseling Platform",
    category: "Career Technology",
    description:
      "A career guidance platform designed to help users explore career options and work with resume-related matching features.",
    technologies: ["Python", "Django","Bootstrap"],
    github: "https://github.com/RameshkumarSonani/CareerCounselingPlatform.git",
    demo: "https://lnkd.in/p/dVNdMiN6",
  },
  {
    number:"04",
    title:"Electronic-TechyStore",
    category:"E-commerce",
    description:"A Electronic online shop to order electronic devices, like Laptops,TV's, Power Suppliers and other products",
    technologies: ["React.js","Tailwind CSS", "React-Hooks","ReactToolkit"],
    github: "https://github.com/RameshkumarSonani/TechyStore.git",
    demo:"https://techy-store-beta.vercel.app/",
  },
];


export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 font-mono text-sm text-green-400">
              {"//"} Things I've built
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-400">
              A selection of projects where I turn ideas into practical
              web applications.
            </p>
          </div>

          <a
            href="https://github.com/RameshkumarSonani"
            target="_blank"
            rel="noreferrer"
            className="w-fit text-sm font-medium text-green-300 transition-colors hover:text-green-200"
          >
            More on GitHub ↗
          </a>
        </div>

        {/* Project cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex flex-col rounded-2xl border border-white/10 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/40 sm:p-7"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-sm text-green-400">
                  PROJECT_{project.number}
                </span>

                <span className="text-xl text-slate-500 transition-colors group-hover:text-green-400">
                  ↗
                </span>
              </div>

              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                {project.category}
              </p>

              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-white/10 px-2.5 py-1.5 font-mono text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>


              <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-green-400/40 hover:text-green-300"
                  >
                    GitHub ↗
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-green-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-green-300"
                  >
                    Watch Demo ▶
                  </a>
                )}
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
