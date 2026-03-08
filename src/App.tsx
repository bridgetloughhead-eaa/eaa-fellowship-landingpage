/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar, Clock, Users, MapPin, BookOpen, Lightbulb, GraduationCap, Handshake, Quote, Check, ChevronDown, Plus, Minus } from 'lucide-react';
import { siteContent } from './content';

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
                src={siteContent.links.logoFullColor} 
                alt="Effective Altruism Australia" 
                className="h-10 md:h-11"
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
      <section className="relative w-full min-h-[85vh] flex items-center py-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-eaa-warm-100">
          <img 
            src="/photos/0234.jpg" 
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
            <div className="font-serif text-3xl md:text-4xl lg:text-[42px] leading-none text-white tracking-tight flex flex-col items-start">
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
                  className="w-fit inline-flex items-center justify-center gap-2 bg-eaa-teal-700 text-white px-8 py-4 text-lg font-medium hover:bg-eaa-teal-900 transition-colors duration-200 shadow-sm"
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
                  src="/photos/awful-better.png" 
                  alt="Venn diagram: The world is awful, The world is much better, The world can be much better" 
                  className="w-full max-w-2xl mx-auto"
                />
              </div>

              <div className="text-base md:text-lg text-eaa-neutral-950/70">
                — {siteContent.theGap.citationAuthor},{" "}
                <a 
                  href={siteContent.theGap.citationLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-eaa-teal-700 transition-colors italic underline underline-offset-4"
                >
                  {siteContent.theGap.citationTitle}
                </a>{" "}
                <span className="underline decoration-1 underline-offset-4">{siteContent.theGap.citationSource}</span>
              </div>
            </div>

            <p 
              className="text-eaa-neutral-950"
              dangerouslySetInnerHTML={{ __html: siteContent.theGap.paragraphHtml }}
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl text-eaa-teal-900">{siteContent.theSyllabus.title}</h2>
              <p className="text-lg md:text-xl leading-relaxed">
                {siteContent.theSyllabus.description1}
              </p>
              <p className="text-eaa-neutral-950">
                {siteContent.theSyllabus.description2}
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-eaa-warm-200">
              <img 
                src="/photos/0221.jpg" 
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
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-eaa-teal-900">{siteContent.howItWorks.title}</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {siteContent.howItWorks.steps.map((item) => (
              <div key={item.step} className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-eaa-teal-900 text-white flex items-center justify-center font-bold font-serif">
                  {item.step}
                </div>
                <h4 className="font-serif text-xl text-eaa-teal-900">{item.step}. {item.title}</h4>
                <p className="text-eaa-neutral-950">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-eaa-warm-200">
            <div className="space-y-6">
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-lg">
                <li className="flex items-center gap-4">
                  <BookOpen className="w-5 h-5 text-eaa-teal-900 shrink-0" />
                  <span>{siteContent.howItWorks.logistics[0]}</span>
                </li>
                <li className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-eaa-teal-900 shrink-0" />
                  <span>{siteContent.howItWorks.logistics[1]}</span>
                </li>
                <li className="flex items-center gap-4">
                  <Check className="w-5 h-5 text-eaa-teal-900 shrink-0" />
                  <span className="font-medium">{siteContent.howItWorks.logistics[2]}</span>
                </li>
              </ul>
              <p className="text-eaa-neutral-950 italic">
                {siteContent.howItWorks.note}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Who's Behind This Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8 py-12"
        >
          <div className="max-w-3xl space-y-8">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <h2 className="font-serif text-2xl md:text-3xl text-eaa-teal-900">{siteContent.whosBehindThis.title}</h2>
              <img 
                src={siteContent.links.logoFullColor} 
                alt="Effective Altruism Australia" 
                className="h-10 md:h-12 opacity-90"
              />
            </div>
            <div className="space-y-6 text-lg text-eaa-neutral-950 leading-relaxed">
              {siteContent.whosBehindThis.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonial Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12 bg-eaa-warm-50 p-8 md:p-12 border border-eaa-warm-200"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square overflow-hidden bg-eaa-warm-200">
              <img 
                src="/photos/kevin.png" 
                alt="Kevin Rassool" 
                className="w-full h-full object-cover grayscale-[0.3]"
                onError={(e) => {
                  // Fallback if kevin.jpg doesn't exist
                  (e.target as HTMLImageElement).src = "/photos/0086.jpg";
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
                src="/photos/0129.jpg" 
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
          className="space-y-12 pb-24"
        >
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

      </main>
      
      {/* Footer */}
      <footer className="bg-eaa-neutral-950 text-eaa-warm-100 py-12 px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center opacity-80">
            <img 
              src={siteContent.links.logoWhite} 
              alt="Effective Altruism Australia" 
              className="h-10"
            />
          </div>
          <div className="text-sm opacity-60">
            {siteContent.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
