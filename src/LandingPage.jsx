import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArchoLogo from "./ArchoLogo.png";

export default function LandingPage() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleAccordion = (i) =>
    setOpenAccordion(openAccordion === i ? null : i);
  const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

  const menuItems = [
    { label: "Home", target: "hero" },
    { label: "Why Choose", target: "why" },
    { label: "Our Tools", target: "tools" },
    { label: "Pricing", target: "pricing" },
    { label: "FAQ", target: "faq" },
    { label: "How It Works", target: "how" },
  ];

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900 shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img src={ArchoLogo} alt="ArchoLink" className="h-20" />
            <span className="text-xl font-bold">Real Estate Softwares</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.target)}
                className="hover:text-blue-500 transition"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        id="hero"
        className="flex flex-col justify-center items-center text-center px-4 min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Master Your Real Estate Business <br /> with RealEstate Pro
        </h1>
        <p className="text-gray-300 mb-8">
          One-Time Purchase. Connect Tools Later. Total Control.
        </p>
        <div className="flex space-x-4">
          <a
            href="mailto:archolink@gmail.com?subject=I%20want%20to%20Get%20Started%20with%20ArchoLink&body=Hello%20ArchoLink%20Team,%0D%0A%0D%0AI%20am%20interested%20in%20getting%20started.%20Please%20send%20me%20more%20details."
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium"
          >
            🚀 Get Started
          </a>
          <a
            href="mailto:archolink@gmail.com?subject=Book%20a%20Demo%20Request&body=Hello%20ArchoLink%20Team,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20demo.%20Please%20let%20me%20know%20available%20times."
            className="border border-gray-400 hover:border-white px-6 py-3 rounded font-medium"
          >
            📅 Book a Demo
          </a>
        </div>
      </motion.section>

      {/* Why Choose */}
      <motion.section
        id="why"
        className="py-20 px-6 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us?</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Transform your real estate business with our modern tools and full
          ownership approach.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "💲",
              title: "One-Time Purchase",
              desc: "No monthly fees — pay once and own it forever.",
            },
            {
              icon: "🧩",
              title: "Seamless Integration",
              desc: "I we build custom software that works seamlessly together your CRM, MLS, and marketing tools.",
            },
            {
              icon: "🛡️",
              title: "Full Control",
              desc: "Your data, your rules. Enterprise-grade security.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-lg shadow-md text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Tools */}
      <motion.section
        id="tools"
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Our Tools</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          A suite of powerful tools for real estate professionals.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Property Listings Website",
              desc: "Post and update properties, share on your site and portals.",
            },
            {
              name: "Lead Generation Software",
              desc: "Get property owners leads from zillow, realtor, and also get potential investor leads and send them to your CRM.",
            },
            {
              name: "Real Estate CRM",
              desc: "Store contacts, track deals, set reminders for follow-ups.",
            },
            {
              name: "Auto Call Dialer",
              desc: "Call prospects automatically and log conversations.",
            },
          ].map((tool, i) => (
            <motion.div
              key={i}
              className="bg-[#111827] p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
              <p className="text-gray-400 text-sm">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        id="how"
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              title: "1. Purchase & Download",
              content: "Instant access after purchase.",
            },
            {
              title: "2. Setup & Configure",
              content: "Easy setup or free onboarding help.",
            },
            {
              title: "3. Launch & Grow",
              content: "Start using your tools right away.",
            },
            {
              title: "4. Work individually",
              content: "buy only what you need.",
            },
            {
              title: "5. Connect",
              content: "share data between tools if you want integration.",
            },
            {
              title: "6. Are branded",
              content: "your name, your logo, your domain.",
            },
            {
              title: "7. Are yours for life",
              content: "no monthly or yearly fees.",
            },
          ].map((step, i) => (
            <div key={i} className="bg-[#111827] rounded-lg">
              <button
                onClick={() => toggleAccordion(i)}
                className="w-full p-6 flex justify-between items-center"
              >
                <span>{step.title}</span>
                <span>{openAccordion === i ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {openAccordion === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-gray-400"
                  >
                    {step.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Pricing */}
      <motion.section
        id="pricing"
        className="py-20 px-6 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Pricing</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              plan: "Starter",
              price: "$199",
              features: ["Property Listings Website", "Basic Support"],
            },
            {
              plan: "Pro",
              price: "$399",
              features: [
                "All Starter",
                "Leads Generation Software",
                "Priority Support",
              ],
            },
            {
              plan: "Enterprise",
              price: "$999",
              features: [
                "All Pro",
                "CRM",
                "Seamless Integration",
                "Dedicated Manager",
              ],
            },
          ].map((pkg, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-lg shadow-md text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{pkg.plan}</h3>
              <p className="text-3xl font-bold mb-4">{pkg.price}</p>
              <ul className="text-gray-400 text-sm mb-6">
                {pkg.features.map((f, j) => (
                  <li key={j}>✅ {f}</li>
                ))}
              </ul>
              <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        id="faq"
        className="py-20 px-6 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center mb-4">FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "Is this a subscription?", a: "No, it's a one-time payment." },
            {
              q: "Can I use it for multiple clients?",
              a: "Yes, our license is flexible.",
            },
            {
              q: "Do you offer refunds?",
              a: "Yes, within 14 days of purchase.",
            },
          ].map((faq, i) => (
            <div key={i} className="bg-gray-800 rounded-lg">
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full p-6 flex justify-between items-center"
              >
                <span>{faq.q}</span>
                <span>{openFAQ === i ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {openFAQ === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-gray-400"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-950 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} ArchoLink. All rights reserved.
      </footer>
    </div>
  );
}
