'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Cpu, 
  Code, 
  Rocket, 
  Brain, 
  GraduationCap, 
  Handshake, 
  MapPin, 
  Clock, 
  Mail, 
  BookOpen 
} from "lucide-react";

const contactReasons = [
  { icon: Cpu, label: "Hardware & IoT Development" },
  { icon: Code, label: "Software & Platform" },
  { icon: Rocket, label: "End-to-End Solutions" },
  { icon: Brain, label: "Technology Consultancy" },
  { icon: GraduationCap, label: "Internship / Learning" },
  { icon: Handshake, label: "Partnership Inquiry" },
];

export default function ContactPage() {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  return (
    <div className="relative overflow-hidden bg-[#fffcf9] text-slate-900">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 80, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-orange-200/20 blur-[120px]" />
        <motion.div animate={{ scale: [1.2, 1, 1.2], x: [0, -60, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-32 top-48 h-[700px] w-[700px] rounded-full bg-blue-200/20 blur-[140px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[40px] border border-orange-100 bg-gradient-to-br from-white via-orange-50/30 to-blue-50/30 p-8 shadow-xl lg:p-14">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-400/5 blur-3xl" />
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-700">
                📬 Get in Touch
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-orange-600 via-blue-600 to-blue-700 bg-clip-text text-transparent">Intelligent</span> Together
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Whether you need a custom hardware product, a software platform, an end-to-end solution, or expert technology guidance — our team is ready to discuss your requirements and craft the right approach.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Fast Response", "Expert Team", "End-to-End Support", "NDA Available"].map(tag => (
                  <span key={tag} className="rounded-full border border-orange-100 bg-white px-4 py-1.5 text-xs font-semibold text-orange-700 shadow-sm">{tag}</span>
                ))}
              </div>
              
              <div className="mt-12 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                         <Image src={`https://i.pravatar.cc/150?u=${i+10}`} alt="User" width={40} height={40} />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-slate-600">Join <span className="text-orange-700 font-bold">500+</span> companies building with us</p>
                </div>
              </div>
            </motion.div>

            {/* Premium Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[42px] bg-gradient-to-br from-orange-500/10 to-blue-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/40 bg-white/90 p-8 shadow-2xl backdrop-blur-xl lg:p-10">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 h-40 w-40 rounded-full bg-orange-400/10 blur-3xl" />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-orange-600">Send a Message</p>
                    <h2 className="mt-1 text-2xl font-bold text-slate-900">Project Inquiry</h2>
                  </div>
                  <div className="rounded-full bg-orange-50 px-3 py-1 text-[10px] font-bold text-orange-700 shadow-inner">
                    ⚡ FAST RESPONSE
                  </div>
                </div>
                
                <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Full Name *</label>
                      <input 
                        type="text" 
                        placeholder="Your name" 
                        className="w-full rounded-2xl border border-slate-200 bg-white/50 px-5 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 hover:border-orange-200" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email Address *</label>
                      <input 
                        type="email" 
                        placeholder="you@company.com" 
                        className="w-full rounded-2xl border border-slate-200 bg-white/50 px-5 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 hover:border-orange-200" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 XXXXX XXXXX" 
                        className="w-full rounded-2xl border border-slate-200 bg-white/50 px-5 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 hover:border-orange-200" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Inquiry Type</label>
                      <div className="relative">
                        <select 
                          value={selectedReason || ""}
                          onChange={(e) => setSelectedReason(e.target.value)}
                          className="w-full appearance-none rounded-2xl border border-slate-200 bg-white/50 px-5 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 hover:border-orange-200"
                        >
                          <option value="">Select an area...</option>
                          {contactReasons.map(r => (
                            <option key={r.label} value={r.label}>{r.label}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Project Details *</label>
                    <textarea 
                      rows={4} 
                      placeholder="Tell us about your requirements, timeline, and goals..." 
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-white/50 px-5 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 hover:border-orange-200" 
                    />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.01, boxShadow: "0 20px 40px -15px rgba(249,115,22,0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-orange-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-700 shadow-lg shadow-orange-500/20"
                  >
                    <span className="relative z-10">Send My Message</span>
                    <motion.span 
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="relative z-10"
                    >
                      →
                    </motion.span>
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500 via-blue-600 to-orange-500 bg-[length:200%_100%] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-gradient-x" />
                  </motion.button>
                  
                  <div className="flex items-center justify-center gap-6 pt-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Agents Online</p>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Response &lt; 24h</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">SSL Encrypted</p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* MAP / LOCATION */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 overflow-hidden rounded-[32px] border border-slate-100 bg-gradient-to-br from-orange-50/30 to-blue-50/30 p-10 shadow-lg lg:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600">Our Office</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">Sigmatronics Innovation Private Limited</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4 text-orange-600">
                  <MapPin size={24} strokeWidth={2} />
                  <div>
                    <p className="font-semibold text-slate-900">Registered Office</p>
                    <p className="text-sm text-slate-500">Pune, Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-orange-600">
                  <Clock size={24} strokeWidth={2} />
                  <div>
                    <p className="font-semibold text-slate-900">Business Hours</p>
                    <p className="text-sm text-slate-500">Monday – Saturday, 10:00 AM – 7:00 PM IST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-orange-600">
                  <Mail size={24} strokeWidth={2} />
                  <div>
                    <p className="font-semibold text-slate-900">General Inquiries</p>
                    <p className="text-sm text-slate-500">hello@sigmatronics.ai</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-orange-600">
                  <BookOpen size={24} strokeWidth={2} />
                  <div>
                    <p className="font-semibold text-slate-900">Internship / Learnings</p>
                    <p className="text-sm text-slate-500">learnings@sigmatronics.ai</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68078384278!2d73.72286709453123!3d18.524600699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full"
              />
            </div>
          </div>
        </motion.section>

        {/* BOTTOM CTA */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 overflow-hidden rounded-[40px] bg-gradient-to-r from-orange-600 to-blue-700 p-12 text-center text-white shadow-2xl shadow-orange-500/20 lg:p-16">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-200">Prefer a Quick Chat?</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-snug">We're Just an Email Away — Let's Get Started.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-orange-100">No forms needed — just drop us an email at hello@sigmatronics.ai and our team will respond within 24 hours.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:hello@sigmatronics.ai" className="rounded-full bg-white px-10 py-4 text-sm font-bold text-orange-700 shadow-xl transition hover:bg-orange-50">
              Email Us Directly →
            </a>
            <a href="tel:+91XXXXXXXXXX" className="rounded-full border-2 border-white/30 px-10 py-4 text-sm font-bold text-white transition hover:bg-white/10">
              Call Us Now
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
