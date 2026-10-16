
export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_30%,rgba(34,197,94,0.09),transparent_45%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Introduction */}
        <div className="animate-[fadeUp_0.7s_ease-out_both]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-3 py-2 font-mono text-xs text-green-300">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Available for opportunities
          </div>

          <p className="mb-3 font-mono text-sm text-slate-400">
            Hello, world! I'm
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ramesh Kumar
            <span className="mt-2 block text-green-400">
              Full Stack Developer.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I build modern, responsive web applications using React,
            Django and Python, with a focus on clean interfaces and
            practical solutions.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-green-400 px-5 py-3 font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-green-300"
            >
              Explore Projects <span>↗</span>
            </a>

            <a
              href="/Ramesh_kumar_Full_Stack_Developer_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-medium text-slate-200 transition duration-200 hover:border-green-400/50 hover:text-green-300"
            >
              Download Resume <span>↓</span>
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-5 text-sm text-slate-400">
            <a
              href="https://github.com/RameshkumarSonani"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-green-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/ramesh-kumar-3b4b7224b"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-green-400"
            >
              LinkedIn ↗
            </a>

            <span className="text-slate-600">Karachi, Pakistan</span>
          </div>
        </div>

        {/* Terminal visual */}
        <div className="animate-[fadeUp_0.9s_ease-out_0.15s_both]">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a] shadow-2xl shadow-black/30">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />

              <span className="ml-3 font-mono text-xs text-slate-500">
                developer.js
              </span>
            </div>

            <div className="overflow-x-auto p-5 font-mono text-xs leading-7 sm:p-7 sm:text-sm">
              <p className="text-slate-500">
                // A little about me
              </p>

              <p>
                <span className="text-purple-300">const</span>{" "}
                <span className="text-sky-300">developer</span>{" "}
                <span className="text-white">= {"{"}</span>
              </p>

              <div className="pl-5">
                <p>
                  <span className="text-sky-200">name</span>
                  <span className="text-white">: </span>
                  <span className="text-amber-200">"Ramesh Kumar"</span>,
                </p>

                <p>
                  <span className="text-sky-200">frontend</span>
                  <span className="text-white">: </span>
                  <span className="text-amber-200">"React.js"</span>,
                </p>

                <p>
                  <span className="text-sky-200">backend</span>
                  <span className="text-white">: </span>
                  <span className="text-amber-200">"Django, Python"</span>,
                </p>

                <p>
                  <span className="text-sky-200">styling</span>
                  <span className="text-white">: </span>
                  <span className="text-amber-200">"Tailwind CSS"</span>,
                </p>

                <p>
                  <span className="text-sky-200">mindset</span>
                  <span className="text-white">: </span>
                  <span className="text-amber-200">"Always learning"</span>
                </p>
              </div>

              <p className="text-white">{"};"}</p>

              <div className="mt-6 rounded-lg border border-white/10 bg-black/20 p-4">
                <p className="text-green-300">
                  $ npm run build
                </p>
                <p className="text-slate-400">
                  Building great ideas into real products...
                </p>
                <p className="text-green-400">
                  ✓ Ready to create something useful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
