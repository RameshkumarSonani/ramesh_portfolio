
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactLinks = [
  {
    label: "GitHub",
    value: "Explore my projects",
    href: "https://github.com/RameshkumarSonani",
    icon: "⌘",
  },
  {
    label: "LinkedIn",
    value: "Let's connect professionally",
    href: "https://www.linkedin.com/in/ramesh-kumar-3b4b7224b/",
    icon: "in",
  },
];

const highlights = [
  "Full Stack Web Development",
  "React.js & Python / Django",
  "Building practical web applications",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus({ type: "", message: "" });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        "service_u42epnk",
        "template_z0iu9kb",
        formData,
        "k9MkJiy9rtDY_0-RJ"
      );

      setStatus({
        type: "success",
        message:
          "Message sent successfully! Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message:
          "Your message couldn't be sent. Please try again or contact me directly by email.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-green-400/60 focus:ring-2 focus:ring-green-400/10";

  return (
    <section className="min-h-screen overflow-hidden bg-[#0b1120] px-5 py-20 text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="mb-3 font-mono text-sm text-green-400">
            {"// Get in touch"}
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let's build something
            <br />
            <span className="text-green-400">meaningful.</span>
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            Have a job opportunity, a project idea, or just want to
            connect? I'd love to hear from you. Send me a message
            and let's start a conversation.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left: Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Availability card */}
            <div className="rounded-2xl border border-green-400/20 bg-green-400/[0.04] p-6">
              <div className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-green-400"
                  aria-hidden="true"
                />

                <p className="font-mono text-sm text-green-300">
                  OPEN TO OPPORTUNITIES
                </p>
              </div>

              <h2 className="mt-4 text-xl font-semibold">
                Let's work together
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Interested in full-time roles, collaborative projects,
                and opportunities to grow as a developer.
              </p>
            </div>

            {/* Contact links */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <h2 className="mb-5 text-lg font-semibold">
                Connect with me
              </h2>

              <div className="space-y-3">
                {contactLinks.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={
                      item.label === "Email" ? undefined : "_blank"
                    }
                    rel={
                      item.label === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-[#111a2e] p-4 transition-colors hover:border-green-400/30"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-green-400/20 bg-green-400/[0.07] font-mono text-sm font-semibold text-green-300">
                      {item.icon}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-white">
                        {item.label}
                      </span>

                      <span className="mt-1 block text-xs text-slate-400">
                        {item.value}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-slate-500 transition-colors group-hover:text-green-300"
                    >
                      ↗
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Developer highlights */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <p className="mb-4 font-mono text-xs text-green-400">
                {"// What I bring"}
              </p>

              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 text-green-400"
                    >
                      ✓
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 shadow-2xl shadow-black/10 sm:p-8"
          >
            <div className="mb-8">
              <p className="mb-2 font-mono text-xs text-green-400">
                {"<contact_form />"}
              </p>

              <h2 className="text-2xl font-bold">
                Send me a message
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Fill in the details below and I'll get back to you.
              </p>
            </div>

            <form onSubmit={sendEmail} className="space-y-5">
              <div>
                <label
                  htmlFor="user_name"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Your name
                </label>

                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  autoComplete="name"
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  maxLength={100}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Email address
                </label>

                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  autoComplete="email"
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  maxLength={254}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Your message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your opportunity or project..."
                  maxLength={5000}
                  required
                  className={`${inputClasses} resize-y`}
                />
              </div>

              {status.message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border p-4 text-sm leading-6 ${
                    status.type === "success"
                      ? "border-green-400/20 bg-green-400/[0.06] text-green-300"
                      : "border-red-400/20 bg-red-400/[0.06] text-red-300"
                  }`}
                >
                  {status.message}
                </p>
              )}

              <motion.button
                whileHover={{ scale: isSending ? 1 : 1.01 }}
                whileTap={{ scale: isSending ? 1 : 0.99 }}
                type="submit"
                disabled={isSending}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-400 px-5 py-4 font-semibold text-slate-950 transition-colors hover:bg-green-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? (
                  <>
                    <span
                      className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950"
                      aria-hidden="true"
                    />
                    Sending message...
                  </>
                ) : (
                  <>
                    Send Message
                    <span aria-hidden="true">→</span>
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs leading-5 text-slate-500">
                Your details are used to respond to your message.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom note */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center font-mono text-xs text-slate-500">
            {"<"} Thanks for stopping by.{" />"}
          </p>
        </div>
      </div>
    </section>
  );
}
