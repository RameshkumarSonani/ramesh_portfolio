
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100">
      <Navbar />
      <main>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
