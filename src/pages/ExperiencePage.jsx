
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100">
      <Navbar />
      <main>
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
