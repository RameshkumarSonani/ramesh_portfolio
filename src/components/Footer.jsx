
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1120]">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="w-fit font-mono text-xl font-bold text-white transition hover:text-green-300"
          >
            ramesh<span className="text-green-400">.dev</span>
            <span className="text-green-400">_</span>
          </Link>

          <div className="flex flex-wrap items-center gap-5 text-sm">
            <a
              href="https://github.com/RameshkumarSonani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-green-300"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/ramesh-kumar-3b4b7224b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-green-300"
            >
              LinkedIn ↗
            </a>

            <Link
              to="/contact"
              className="text-slate-400 transition hover:text-green-300"
            >
              Contact ↗
            </Link>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-xs leading-6 text-slate-500">
            © {new Date().getFullYear()} Ramesh Kumar. Built with React
            and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
