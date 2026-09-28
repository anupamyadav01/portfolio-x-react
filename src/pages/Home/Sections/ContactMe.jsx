import { useState, useRef } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function ContactMe({ id = "contact" }) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    text: "",
    isError: false,
  });

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("anupamy571@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ text: "", isError: false });

    // Replace with your EmailJS service ID, template ID, and public key
    emailjs
      .sendForm(
        "service_placeholder",
        "template_placeholder",
        formRef.current,
        "publicKey_placeholder",
      )
      .then(
        () => {
          setLoading(false);
          setStatusMessage({
            text: "Message sent successfully!",
            isError: false,
          });
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
        },
        () => {
          setLoading(false);
          setStatusMessage({
            text: "Failed to send message. Please reach out directly via email.",
            isError: true,
          });
        },
      );
  };

  return (
    <section
      id={id}
      className="relative w-full py-20 px-6 sm:px-10 overflow-hidden bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-900 dark:text-white transition-colors duration-300"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none bg-gradient-to-tr from-cyan-400/15 via-sky-500/10 to-indigo-500/10 dark:from-cyan-400/10 dark:via-sky-500/5 dark:to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-sky-500/20 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl shadow-2xl">
          {/* Left Column: Contact Details & Status */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-300 font-mono text-xs uppercase tracking-wider w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Let&apos;s Build Together</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Let&apos;s Get in{" "}
                <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
                  Touch.
                </span>
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                Have an open role, an exciting product idea, or just want to
                chat front-end engineering? My inbox is always open.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="flex flex-col gap-3">
              {/* Email Card with Copy Trigger */}
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 dark:border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-950/50 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-500/10 text-cyan-600 dark:text-[#36ffe6]">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-500">
                      Email Me
                    </span>
                    <a
                      href="mailto:anupamy571@gmail.com"
                      className="text-xs sm:text-sm font-semibold hover:text-cyan-500 transition-colors"
                    >
                      anupamy571@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-[#36ffe6] transition-colors"
                  aria-label="Copy Email"
                >
                  {copied ? (
                    <FaCheck className="text-emerald-400" />
                  ) : (
                    <FaCopy />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-950/50 hover:border-cyan-500/40 transition-colors">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-500/10 text-cyan-600 dark:text-[#36ffe6]">
                  <FaPhoneAlt />
                </div>
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-500">
                    Phone
                  </span>
                  <a
                    href="tel:+919982709506"
                    className="text-xs sm:text-sm font-semibold hover:text-cyan-500 transition-colors"
                  >
                    +91-9982709506
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-950/50">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-500/10 text-cyan-600 dark:text-[#36ffe6]">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-500">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Jaipur, Rajasthan, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-3 border-t border-slate-200 dark:border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500">Connect with me:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/anupamyadav01/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950/60 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500 transition-colors text-sm"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/anupamyadav01"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950/60 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500 transition-colors text-sm"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form Panel (Guaranteed not to overflow) */}
          <div className="lg:col-span-7 flex flex-col justify-center rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-950/50 shadow-inner">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="user_name"
                  className="text-xs font-semibold text-slate-600 dark:text-slate-600 dark:text-slate-400"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-200 dark:border-slate-800 bg-white dark:bg-[#030712] text-sm text-slate-900 dark:text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="user_email"
                  className="text-xs font-semibold text-slate-600 dark:text-slate-600 dark:text-slate-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-200 dark:border-slate-800 bg-white dark:bg-[#030712] text-sm text-slate-900 dark:text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-semibold text-slate-600 dark:text-slate-600 dark:text-slate-400"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Job Opportunity"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-200 dark:border-slate-800 bg-white dark:bg-[#030712] text-sm text-slate-900 dark:text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-slate-600 dark:text-slate-600 dark:text-slate-400"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about what you're looking to build..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-200 dark:border-slate-800 bg-white dark:bg-[#030712] text-sm text-slate-900 dark:text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-1 w-full py-3 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-sky-600 text-slate-950 shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="w-5 h-5 rounded-full border-2 border-slate-950/30 border-t-slate-950 animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-xs" />
                  </>
                )}
              </button>

              {statusMessage.text && (
                <p
                  className={`text-center text-xs mt-2 ${
                    statusMessage.isError ? "text-rose-500" : "text-emerald-400"
                  }`}
                >
                  {statusMessage.text}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

ContactMe.propTypes = {
  id: PropTypes.string,
};
