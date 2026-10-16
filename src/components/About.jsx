import { Link } from "react-router-dom";
const highlights = [
  {
    number: "01",
    title: "Problem Solver",
    description:
      "I enjoy breaking complex problems into smaller, manageable solutions.",
  },
  {
    number: "02",
    title: "Full Stack Mindset",
    description:
      "I work across frontend interfaces and backend logic to build complete web applications.",
  },
  {
    number: "03",
    title: "Continuous Learner",
    description:
      "I keep improving my skills by building projects and learning new development techniques.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Introduction */}
          <div>
            <p className="mb-3 font-mono text-sm text-green-400">
              {"//"} Get to know me
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              About Me
              <span className="text-green-400">.</span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-400">
              <p>
                I'm Ramesh Kumar, a Full Stack Developer focused on
                building modern, responsive web applications using
                React.js, Django, and Python.
              </p>

              <p>
                I enjoy turning ideas into useful digital products,
                creating clean user interfaces, and working on the
                backend logic that makes applications function.
              </p>

              <p>
                My goal is to keep strengthening my development skills,
                contribute to real-world projects, and grow as an
                engineer by solving practical problems.
              </p>
            </div>

            <Link
              to="/contact" onClick={() => setMenuOpen(false)}
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-green-400/30 px-5 py-3 text-sm font-medium text-green-300 transition duration-200 hover:bg-green-400 hover:text-slate-950"
            >
              Let's Connect <span>↗</span>
            </Link>
          </div>

          {/* Strengths */}
          <div className="space-y-4">
            {highlights.map((item) => (
              <article
                key={item.number}
                className="rounded-xl border border-white/10 bg-[#111827] p-6 transition duration-300 hover:border-green-400/30 sm:p-7"
              >
                <div className="mb-4 font-mono text-sm text-green-400">
                  {item.number}
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
