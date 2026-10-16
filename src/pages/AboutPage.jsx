
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100">
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}
