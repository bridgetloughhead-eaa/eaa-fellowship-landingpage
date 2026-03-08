/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Quote, Plus, Minus, Mail, Phone } from 'lucide-react';
import { siteContent } from './content';
import photo0234 from './assets/0234.jpg';
import awfulBetter from './assets/awful-better.png';
import photo0221 from './assets/0221.jpg';
import photoKevin from './assets/kevin.png';
import photo0086 from './assets/0086.jpg';
import photo0129 from './assets/0129.jpg';
import logoFullColour from './assets/logo-full-colour.svg';
import logoWhite from './assets/logo-white.svg';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-eaa-warm-100 font-sans text-eaa-neutral-950 selection:bg-eaa-teal-900 selection:text-white">
      {/* Navigation */}
      <header className="w-full bg-eaa-warm-50 relative z-50">
        <nav className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <a href={siteContent.links.mainWebsite} target="_blank" rel="noopener noreferrer">
              <img 
                src={logoFullColour} 
                alt="Effective Altruism Australia" 
                className="h-12 md:h-14"
              />
            </a>
          </div>
          <div>
            <a 
              href={siteContent.links.applyForm} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center gap-2 bg-eaa-teal-700 text-white px-6 py-2.5 text-base font-medium hover:bg-eaa-teal-900 transition-colors duration-200 shadow-sm"
            >
              {siteContent.navigation.applyButton}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-eaa-warm-100">
          <img 
            src={photo0234} 
            alt="Contemplative person" 
            className="absolute right-0 top-0 h-full w-full md:w-[85%] lg:w-[75%] xl:w-[65%] object-cover object-center opacity-30 md:opacity-60 lg:opacity-80 grayscale-[0.6]"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%)',
              maskImage: 'linear-gradient(to right, transparent, black 20%)'
            }}
          />
          {/* Gradient to ensure text readability on the left and blend with background */}
          <div className="absolute inset-0 bg-gradient-to-r from-eaa-warm-100 from-40% md:from-30% lg:from-20% via-eaa-warm-100/60 to-transparent w-full"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Staggered text blocks mimicking the social post */}
            <div className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-none text-white tracking-tight flex flex-col items-start">
              <span className="bg-eaa-teal-900 px-4 pt-3 pb-2">{siteContent.hero.staggeredText[0]}</span>
              <span className="bg-eaa-teal-900 px-4 pt-3 pb-2">{siteContent.hero.staggeredText[1]}</span>
              <span className="bg-eaa-teal-900 px-4 pt-3 pb-2">{siteContent.hero.staggeredText[2]}</span>
              <span className="bg-eaa-teal-900 px-4 pt-3 pb-2 mb-6">{siteContent.hero.staggeredText[3]}</span>
              <span className="bg-eaa-teal-900 px-4 pt-3 pb-2 font-bold">{siteContent.hero.staggeredText[4]}</span>
              <span className="bg-eaa-teal-900 px-4 pt-3 pb-2 font-bold">{siteContent.hero.staggeredText[5]}</span>
            </div>

            <div className="mt-8 font-sans text-eaa-teal-900 font-medium text-lg md:text-xl max-w-xl">
              <p className="mb-8 text-eaa-neutral-950 font-normal leading-relaxed">
                {siteContent.hero.description}
              </p>
              <div className="flex flex-col gap-4">
                <a 
                  href={siteContent.links.applyForm} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-fit max-w-full inline-flex items-center justify-center gap-2 bg-eaa-teal-700 text-white px-6 sm:px-8 py-4 text-base sm:text-lg font-medium hover:bg-eaa-teal-900 transition-colors duration-200 shadow-sm"
                >
                  {siteContent.hero.applyButton}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-sm uppercase tracking-wider opacity-80">{siteContent.hero.closingDate}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-8 py-24 space-y-32">
        
        {/* The Gap Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8 py-12"
        >
          <div className="space-y-12 text-lg md:text-2xl leading-relaxed max-w-3xl">
            <div className="space-y-8">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <Quote className="w-12 h-12 text-eaa-bronze-500 opacity-20 scale-x-[-1] mb-4" />
                <h2 className="font-serif text-eaa-teal-900 text-3xl md:text-4xl leading-tight">
                  {siteContent.theGap.quote}
                </h2>
              </div>
              
              <div className="py-4">
                <img 
                  src={awfulBetter} 
                  alt="Venn diagram: The world is awful, The world is much better, The world can be much better" 
                  className="w-full max-w-2xl mx-auto"
                />
              </div>

              <div className="text-base md:text-lg text-eaa-neutral-950/70">
                — {siteContent.theGap.citationAuthor},{" "}
                <span className="italic">
                  {siteContent.theGap.citationTitle}
                </span>{" "}
                <a
                  href={siteContent.theGap.citationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-1 underline-offset-4 hover:text-eaa-teal-700 transition-colors"
                >{siteContent.theGap.citationSource}</a>
              </div>
            </div>

            <div
              className="text-eaa-neutral-950 space-y-6 [&_p]:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: `<p>${siteContent.theGap.paragraphHtml}</p>` }}
            />
          </div>
        </motion.section>

        {/* The Syllabus Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <hr className="border-eaa-warm-200" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl text-eaa-teal-900">{siteContent.theSyllabus.title}</h2>
              <p className="text-lg md:text-xl leading-relaxed">
                {siteContent.theSyllabus.description1}
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-eaa-warm-200">
              <img 
                src={photo0221} 
                alt="Group discussion" 
                className="w-full h-full object-cover grayscale-[0.3]"
              />
            </div>
          </div>

          <div className="bg-white p-8 border border-eaa-warm-200">
            <h3 className="font-serif text-2xl text-eaa-teal-900 mb-6">{siteContent.theSyllabus.topicsTitle}</h3>
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-lg">
              {siteContent.theSyllabus.topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-eaa-bronze-500 mt-1.5">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-lg leading-relaxed">{siteContent.theSyllabus.curriculumCredit}</p>
            <p className="text-eaa-neutral-950">{siteContent.theSyllabus.description2}</p>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <hr className="border-eaa-warm-200" />
          <h2 className="font-serif text-3xl md:text-4xl text-eaa-teal-900">{siteContent.howItWorks.title}</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {siteContent.howItWorks.steps.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-eaa-teal-900 text-white flex items-center justify-center text-lg font-bold font-serif">
                  {item.step}
                </div>
                <h4 className="font-serif text-xl font-bold text-eaa-teal-900">{item.title}</h4>
                <p className="text-eaa-neutral-950">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-eaa-neutral-950 italic">
            {siteContent.howItWorks.note}
          </p>
        </motion.section>

        {/* Who's Behind This Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <hr className="border-eaa-warm-200" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl text-eaa-teal-900">{siteContent.whosBehindThis.title}</h2>
              <div className="space-y-6 text-lg text-eaa-neutral-950 leading-relaxed [&_a]:underline [&_a]:underline-offset-4 [&_a]:text-eaa-teal-900 [&_a]:hover:text-eaa-teal-700 [&_a]:transition-colors">
                {siteContent.whosBehindThis.paragraphsHtml.map((html, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <a href={siteContent.links.mainWebsite} target="_blank" rel="noopener noreferrer">
                <img
                  src={logoFullColour}
                  alt="Effective Altruism Australia"
                  className="w-full max-w-xs opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </motion.section>
        {/* Testimonial Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <hr className="border-eaa-warm-200" />
          <div className="bg-eaa-warm-50 p-4 sm:p-8 md:p-12 border border-eaa-warm-200 overflow-hidden grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square overflow-hidden bg-eaa-warm-200">
              <img 
                src={photoKevin} 
                alt="Kevin Rassool" 
                className="w-full h-full object-cover grayscale-[0.3]"
                onError={(e) => {
                  // Fallback if kevin.jpg doesn't exist
                  (e.target as HTMLImageElement).src = photo0086;
                }}
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-eaa-teal-900 leading-tight">
                {siteContent.testimonial.title}
              </h2>
              <div className="relative pl-12 py-4 border-l-2 border-eaa-bronze-500 italic text-xl text-eaa-teal-900 font-serif">
                <Quote className="absolute left-0 top-0 w-8 h-8 text-eaa-bronze-500 opacity-20 scale-x-[-1]" />
                <p>
                  {siteContent.testimonial.quote}
                </p>
                <cite className="block mt-4 text-sm font-sans font-medium not-italic uppercase tracking-widest text-eaa-neutral-950/70">
                  {siteContent.testimonial.citation}
                </cite>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What Comes Next Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <hr className="border-eaa-warm-200" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif text-eaa-teal-900 leading-tight">
                {siteContent.whatComesNext.title}
              </h2>
              <ul className="space-y-6">
                {siteContent.whatComesNext.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-eaa-bronze-500 shrink-0" />
                    <p className="text-lg leading-relaxed">
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-eaa-teal-900 font-bold underline underline-offset-4 hover:text-eaa-teal-700 transition-colors">
                          {item.title}
                        </a>
                      ) : (
                        <strong className="text-eaa-teal-900">{item.title}</strong>
                      )} {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-eaa-warm-200 order-1 md:order-2">
              <img 
                src={photo0129} 
                alt="Community event" 
                className="w-full h-full object-cover grayscale-[0.3]"
              />
            </div>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="pt-16"
        >
          <div className="bg-eaa-teal-900 text-white p-8 md:p-16 rounded-sm shadow-xl text-center space-y-8">
            <div className="space-y-4">
              <p className="text-eaa-warm-100 uppercase tracking-widest text-sm font-medium">{siteContent.finalCta.dateRange}</p>
              <h2 className="font-serif text-3xl md:text-5xl">{siteContent.finalCta.title}</h2>
            </div>
            <div className="flex flex-col items-center gap-6">
              <a 
                href={siteContent.links.applyForm} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-eaa-warm-100 text-eaa-teal-700 px-10 py-5 text-xl font-bold hover:bg-white transition-colors duration-200 shadow-lg"
              >
                {siteContent.finalCta.applyButton}
                <ArrowRight className="w-6 h-6" />
              </a>
              <p className="text-eaa-warm-100/80">
                {siteContent.finalCta.secondaryText} <a href={siteContent.finalCta.secondaryLinkUrl} className="underline underline-offset-4 hover:text-white transition-colors">{siteContent.finalCta.secondaryLinkText}</a>
              </p>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12 pb-12"
        >
          <hr className="border-eaa-warm-200" />
          <h2 className="font-serif text-3xl md:text-4xl text-eaa-teal-900">{siteContent.faq.title}</h2>
          <div className="grid gap-4">
            {siteContent.faq.items.map((faq, i) => (
              <div key={i} className="border border-eaa-warm-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-eaa-warm-50 transition-colors"
                >
                  <span className="font-serif text-xl text-eaa-teal-900">{faq.q}</span>
                  {openFaq === i ? <Minus className="w-5 h-5 text-eaa-bronze-500" /> : <Plus className="w-5 h-5 text-eaa-bronze-500" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-eaa-neutral-950 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.section>

        <p className="text-center text-eaa-neutral-950/70 pb-24">
          {siteContent.contact.text}{" "}
          <a href={`mailto:${siteContent.contact.email}`} className="underline underline-offset-4 hover:text-eaa-teal-700 transition-colors">
            {siteContent.contact.email}
          </a>
        </p>

      </main>
      
      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-eaa-warm-200 px-4 py-3">
        <a
          href={siteContent.links.applyForm}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-eaa-teal-700 text-white py-3 text-base font-medium hover:bg-eaa-teal-900 transition-colors"
        >
          {siteContent.hero.applyButton}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-eaa-neutral-700 text-eaa-neutral-200">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Left column: Logo + legal */}
            <div className="space-y-8">
              <a href={siteContent.links.mainWebsite} target="_blank" rel="noopener noreferrer">
                <img
                  src={logoWhite}
                  alt="Effective Altruism Australia"
                  className="h-12"
                />
              </a>
              <p
                className="text-xs text-eaa-neutral-200/70 leading-relaxed [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-white [&_a]:transition-colors"
                dangerouslySetInnerHTML={{ __html: siteContent.footer.legalTextHtml }}
              />
            </div>

            {/* Middle column: Contact + social */}
            <div className="space-y-6">
              <h3 className="font-serif text-lg text-white border-b border-eaa-teal-700 pb-2 w-fit">Contact Information</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-eaa-teal-700 mt-0.5 shrink-0" />
                  <span className="text-eaa-neutral-200">{siteContent.footer.contact.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-eaa-teal-700 shrink-0" />
                  <a href={`tel:${siteContent.footer.contact.phone.replace(/\s/g, '')}`} className="text-eaa-neutral-200 hover:text-white transition-colors">{siteContent.footer.contact.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-eaa-teal-700 shrink-0" />
                  <a href={`mailto:${siteContent.footer.contact.email}`} className="text-eaa-neutral-200 hover:text-white transition-colors">{siteContent.footer.contact.email}</a>
                </li>
              </ul>
              <div className="flex gap-3 pt-2">
                {siteContent.footer.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="w-10 h-10 rounded-full bg-eaa-teal-700 flex items-center justify-center hover:bg-eaa-teal-900 transition-colors"
                  >
                    {item.name === "LinkedIn" && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    )}
                    {item.name === "Facebook" && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    )}
                    {item.name === "YouTube" && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    )}
                    {item.name === "X" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Right column: Key Pages */}
            <div className="space-y-6">
              <h3 className="font-serif text-lg text-white border-b border-eaa-teal-700 pb-2 w-fit">Key Pages</h3>
              <ul className="space-y-3 text-sm">
                {siteContent.footer.keyPages.map((page) => (
                  <li key={page.label}>
                    <a href={page.url} target="_blank" rel="noopener noreferrer" className="text-eaa-neutral-200 hover:text-white transition-colors underline underline-offset-4 decoration-eaa-neutral-200/20">
                      {page.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-eaa-neutral-200/60">
            <span>{siteContent.footer.copyright}</span>
            <div className="flex gap-4">
              <a href={siteContent.footer.privacyPolicy} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href={siteContent.footer.terms} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
