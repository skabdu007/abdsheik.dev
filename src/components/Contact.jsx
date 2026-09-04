import React, { useState } from "react";
import { personalData } from "@/data/personal";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Copy,
  Check,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/Button";

export const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formState.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formState.email.trim() || !/^\S+@\S+\.\S+$/.test(formState.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formState.subject.trim()) {
      setErrorMessage("Please specify a subject for your message.");
      return;
    }
    if (!formState.message.trim() || formState.message.length < 10) {
      setErrorMessage("Please enter a message of at least 10 characters.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    // Simulate async submission (ready for Formspree / EmailJS backend integration)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sky-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Headings & Direct Channels */}
          <div className="lg:col-span-6 space-y-8">
            <AnimatedContainer direction="left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-sky-500/30 bg-sky-500/10 text-sky-300 shadow-glow-sm mb-4">
                <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
                <span>Get In Touch</span>
              </div>

              {/* Large Heading */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4">
                LET&apos;S BUILD <br />
                <span className="text-gradient-accent">SOMETHING TOGETHER.</span>
              </h2>

              {/* Short Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-lg">
                Have a React.js or frontend project? Let&apos;s discuss how I can help.
              </p>

              {/* Contact Information Cards */}
              <div className="space-y-4 pt-4">
                {/* Email Item */}
                <div className="p-4 rounded-xl glass-card border border-white/[0.08] flex items-center justify-between group hover:border-sky-500/40 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Email</p>
                      <a
                        href={`mailto:${personalData.contact.email}`}
                        className="text-sm sm:text-base font-medium text-white hover:text-sky-300 transition-colors"
                      >
                        {personalData.contact.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalData.contact.email, "email")}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email address"
                  >
                    {copiedField === "email" ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* GitHub Item */}
                <div className="p-4 rounded-xl glass-card border border-white/[0.08] flex items-center justify-between group hover:border-sky-500/40 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-200 flex items-center justify-center shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">GitHub</p>
                      <a
                        href={personalData.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-medium text-white hover:text-sky-300 transition-colors inline-flex items-center gap-1"
                      >
                        <span>github.com/{personalData.contact.githubUsername || "skabd2004"}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <div className="p-4 rounded-xl glass-card border border-white/[0.08] flex items-center justify-between group hover:border-sky-500/40 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">LinkedIn</p>
                      <a
                        href={personalData.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-medium text-white hover:text-sky-300 transition-colors inline-flex items-center gap-1"
                      >
                        <span>linkedin.com/in/{personalData.contact.linkedinUsername || "skabd2004"}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl glass-card border border-white/[0.08] flex items-center justify-between group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Location</p>
                      <p className="text-sm sm:text-base font-medium text-white">
                        {personalData.contact.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    Open to Remote
                  </span>
                </div>
              </div>
            </AnimatedContainer>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-6">
            <AnimatedContainer direction="right" delay={0.15}>
              <div className="p-6 sm:p-8 md:p-10 rounded-3xl glass-card border border-white/[0.08] shadow-glass relative">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-2">
                  Send A Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6 font-mono">
                  Fill out the details below and I&apos;ll get back to you promptly.
                </p>

                {/* Success Alert */}
                {isSubmitted && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider font-mono">Message Sent Successfully!</h4>
                      <p className="text-xs text-emerald-200/90 mt-0.5">
                        Thank you for reaching out. I will respond to your inquiry via email shortly.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Alert */}
                {errorMessage && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
                    <p className="text-xs font-mono">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                      Your Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      required
                      className="w-full px-4 py-3 text-sm bg-[#070c1c] border border-white/[0.08] rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                      Your Email <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      required
                      className="w-full px-4 py-3 text-sm bg-[#070c1c] border border-white/[0.08] rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                      Subject <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="React.js Project / Consultation"
                      required
                      className="w-full px-4 py-3 text-sm bg-[#070c1c] border border-white/[0.08] rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                      Message <span className="text-sky-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project scope, timelines, or technology requirements..."
                      required
                      className="w-full px-4 py-3 text-sm bg-[#070c1c] border border-white/[0.08] rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary"
                      size="lg"
                      icon={Send}
                      iconPosition="right"
                      className="w-full"
                    >
                      {isSubmitting ? "SENDING MESSAGE..." : "SEND MESSAGE"}
                    </Button>
                  </div>
                </form>
              </div>
            </AnimatedContainer>
          </div>

        </div>
      </div>
    </section>
  );
};
