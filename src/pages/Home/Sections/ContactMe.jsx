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
      className="relative w-full py-24 px-6 sm:px-10 lg:px-14 overflow-hidden bg-[#030712] text-slate-100"
    >
      {/* 1. High-Contrast Visible Grid Pattern in Pure Dark Mode */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(231, 96, 46, 0.20) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(231, 96, 46, 0.20) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 85% 70% at 50% 50%, black 50%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 70% at 50% 50%, black 50%, transparent 100%)",
        }}
      />

      {/* 2. Content Card Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl p-6 sm:p-10 border border-white/10 bg-[#0b111e]/90 backdrop-blur-xl shadow-2xl">
          {/* Left Column: Contact Details & Status */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                Let&apos;s Get in{" "}
                <span className="bg-gradient-to-r from-[#E7602E] via-[#ff7c47] to-[#ffa177] bg-clip-text text-transparent">
                  Touch.
                </span>
              </h2>

              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                Have an open role, an exciting product idea, or just want to
                discuss scalable front-end systems? My inbox is always open.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="flex flex-col gap-3">
              {/* Email Card with Copy Trigger */}
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-white/10 bg-slate-950/60 hover:border-[#E7602E]/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#E7602E]/10 text-[#E7602E]">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-400">
                      Email Me
                    </span>
                    <a
                      href="mailto:anupamy571@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-[#E7602E] transition-colors"
                    >
                      anupamy571@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-[#E7602E] transition-colors"
                  title="Copy email address"
                  aria-label="Copy Email"
                >
                  {copied ? (
                    <FaCheck className="text-emerald-500" />
                  ) : (
                    <FaCopy />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-slate-950/60 hover:border-[#E7602E]/50 transition-colors">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#E7602E]/10 text-[#E7602E]">
                  <FaPhoneAlt />
                </div>
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    Phone
                  </span>
                  <a
                    href="tel:+919982709506"
                    className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-[#E7602E] transition-colors"
                  >
                    +91-9982709506
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-slate-950/60">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#E7602E]/10 text-[#E7602E]">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-300">
                    Jaipur, Rajasthan, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-3 border-t border-white/10">
              <span className="text-xs text-slate-400">Connect with me:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/anupamyadav01/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 bg-slate-950/60 text-slate-300 hover:text-white hover:border-[#E7602E] hover:bg-[#E7602E]/15 transition-all text-sm"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form Panel */}
          <div className="lg:col-span-7 flex flex-col justify-center rounded-2xl p-6 sm:p-7 border border-white/10 bg-slate-950/60">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="user_name"
                  className="text-xs font-semibold text-slate-300"
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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#040812] text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#E7602E] focus:ring-2 focus:ring-[#E7602E]/20 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="user_email"
                  className="text-xs font-semibold text-slate-300"
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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#040812] text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#E7602E] focus:ring-2 focus:ring-[#E7602E]/20 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-semibold text-slate-300"
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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#040812] text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#E7602E] focus:ring-2 focus:ring-[#E7602E]/20 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-slate-300"
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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#040812] text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#E7602E] focus:ring-2 focus:ring-[#E7602E]/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full sm:w-1/2 mx-auto py-3 px-6 rounded-xl font-bold text-sm bg-[#E7602E] hover:bg-[#ff723b] text-white shadow-lg shadow-[#E7602E]/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-xs" />
                  </>
                )}
              </button>

              {statusMessage.text && (
                <p
                  className={`text-center text-xs mt-2 font-medium ${
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
