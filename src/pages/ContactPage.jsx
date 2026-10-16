
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100">
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
