/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Quote, Plus, Minus } from 'lucide-react';
import { siteContent } from './content';
import { Header, Footer } from './Layout';
import photo0234 from './assets/0234.webp';
import photo0221 from './assets/0221.webp';
import photoKevin from './assets/kevin.webp';
import photo0086 from './assets/0086.webp';
import photo0129 from './assets/0129.webp';
import logoFullColour from './assets/logo-full-colour.svg';

// Apply-click conversion tracking removed 2026-06-15.
// - The LinkedIn click conversion (26465604) is retired in favour of the server-side
//   form-submit conversion (26741596), which counts completed applications.
// - The fbq('track','Lead') here fired on click and double-counted the server-side
//   submit Lead (matters once Meta ads run).
// Kept as a no-op so the existing onClick={trackApplyClick} bindings stay valid; the Apply
// buttons still open the application form via their href (target="_blank").
const trackApplyClick = () => {};

export default function ApplyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-eaa-warm-100 font-sans text-eaa-neutral-950 selection:bg-eaa-teal-900 selection:text-white">
      <Header
        cta={{
          id: 'apply-nav',
          action: 'apply-cta',
          label: siteContent.navigation.applyButton,
          href: siteContent.links.applyForm,
          onClick: trackApplyClick,
        }}
      />

      {/* Hero Section */}
      <section className="relative w-full min-h-[55vh] md:min-h-[65vh] flex items-center overflow-hidden">
        {/* Teal background base */}
        <div className="absolute inset-0 z-0 bg-eaa-teal-900"></div>

        {/* Photo anchored to the right, covering right 75% on desktop */}
        <div className="absolute inset-0 z-[1] overflow-hidden">
          <img
            src={photo0234}
            alt="Participant at an Effective Altruism Australia event"
            width={1920}
            height={1280}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute right-0 top-0 h-full w-full md:w-[80%] lg:w-[70%] object-cover object-[30%_center] md:object-center"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
            }}
          />
          {/* Teal wash over photo */}
          <div className="absolute inset-0 bg-eaa-teal-900/55 md:bg-eaa-teal-900/35"></div>
        </div>

        {/* Text content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full pt-10 pb-12 md:pt-12 md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
          >
            <h1 className="font-serif font-bold italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-white tracking-tight mb-5">
              <span className="sr-only">Intro to Effective Altruism Course. </span>
              What if
            </h1>

            <p className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-snug text-white font-bold mb-8">
              you spent six weeks<br />
              thinking about the<br />
              <span className="relative inline-block px-1.5 py-0.5">
                <span className="absolute inset-x-0 top-[25%] bottom-[18%] bg-eaa-teal-700 -skew-x-3 rotate-[-1deg] rounded-[2px]" aria-hidden="true"></span>
                <span className="relative">world's biggest</span>
              </span>
              <br />
              <span className="relative inline-block px-1.5 py-0.5">
                <span className="absolute inset-x-0 top-[25%] bottom-[18%] bg-eaa-teal-700 skew-x-2 rotate-[0.6deg] rounded-[2px]" aria-hidden="true"></span>
                <span className="relative">problems</span>
              </span>{' '}
              and<br />
              what you could do<br />
              about them?
            </p>

            <div className="space-y-4">
              <p className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-[29px]">{siteContent.hero.closingDate}</p>
              <p className="text-white/80 text-base sm:text-lg md:text-xl">{siteContent.hero.applyNote}</p>
              <a
                id="apply-hero"
                data-action="apply-cta"
                href={siteContent.links.applyForm}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackApplyClick}
                className="inline-flex items-center justify-center gap-2 bg-white text-eaa-teal-900 px-8 py-4 text-lg sm:text-xl md:text-2xl lg:text-[29px] font-bold shadow-lg hover:bg-eaa-warm-100 transition-colors duration-200"
              >
                {siteContent.hero.applyButton}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick facts strip */}
      <section className="bg-white border-b border-eaa-warm-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-eaa-teal-900 font-bold text-base md:text-lg">
          {siteContent.quickFacts.map((fact, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="text-eaa-bronze-500" aria-hidden="true">·</span>}
              <span>{fact}</span>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 md:py-20 space-y-12 md:space-y-20 text-lg md:text-xl leading-relaxed text-eaa-neutral-950">
        
        {/* Why EA / intro Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8 md:space-y-10"
        >
          <blockquote className="relative pl-8 md:pl-12 border-l-2 border-eaa-bronze-500">
            <Quote className="absolute left-0 -top-1 w-6 h-6 text-eaa-bronze-500 opacity-20 scale-x-[-1]" />
            <p className="font-serif text-eaa-teal-900 text-2xl md:text-3xl leading-snug italic">
              The world is awful. The world is much better. The world can be much better.
            </p>
            <cite className="block mt-3 text-base not-italic text-eaa-neutral-950/60">
              — {siteContent.theGap.citationAuthor},{" "}
              <a
                href={siteContent.theGap.citationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-4 hover:text-eaa-teal-700 transition-colors"
              >{siteContent.theGap.citationSource}</a>
            </cite>
          </blockquote>

          <div className="space-y-6 [&_a]:underline [&_a]:underline-offset-4 [&_a]:text-eaa-teal-900 [&_a]:hover:text-eaa-teal-700 [&_a]:transition-colors">
            {siteContent.whyEa.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </motion.section>

        {/* The Syllabus Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8 md:space-y-10"
        >
          <hr className="border-eaa-warm-200" />
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl text-eaa-teal-900">{siteContent.theSyllabus.title}</h2>
              <p>{siteContent.theSyllabus.description1}</p>
              <a
                id="apply-syllabus"
                data-action="apply-cta"
                href={siteContent.links.applyForm}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackApplyClick}
                className="inline-flex items-center justify-center gap-2 bg-eaa-teal-700 text-white px-8 py-4 text-lg font-bold hover:bg-eaa-teal-900 transition-colors duration-200"
              >
                {siteContent.navigation.applyButton}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-eaa-warm-200">
              <img 
                src={photo0221} 
                alt="Small group discussion at an Intro to Effective Altruism Course session"
                width={1600}
                height={1067}
                loading="lazy"
                decoding="async" 
                className="w-full h-full object-cover grayscale-[0.3]"
              />
            </div>
          </div>

          <div className="bg-white py-8 px-6 sm:py-10 sm:px-12 border border-eaa-warm-200">
            <h3 className="font-serif text-2xl text-eaa-teal-900 mb-6">{siteContent.theSyllabus.topicsTitle}</h3>
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 list-disc marker:text-eaa-bronze-500 pl-6">
              {siteContent.theSyllabus.topics.map((topic, i) => (
                <li key={i}>
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="[&_a]:underline [&_a]:underline-offset-4 [&_a]:text-eaa-teal-900 [&_a]:hover:text-eaa-teal-700 [&_a]:transition-colors" dangerouslySetInnerHTML={{ __html: siteContent.theSyllabus.curriculumCreditHtml }} />
            <p>{siteContent.theSyllabus.description2}</p>
          </div>
        </motion.section>

      </div>

      {/* More Testimonials Banner - full width */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-eaa-teal-900 text-white px-6 lg:px-16 py-12 md:py-16 grid md:grid-cols-3 gap-8 md:gap-12 max-w-none">
          {siteContent.moreTestimonials.map((t, i) => (
            <div key={i} className="relative pl-8 border-l border-white/20 space-y-4">
              <Quote className="absolute left-0 top-0 w-6 h-6 text-white opacity-20 scale-x-[-1]" />
              <p className="font-serif italic text-lg leading-snug">{t.quote}</p>
              <cite className="block text-sm font-sans not-italic uppercase tracking-widest text-white/60">{t.citation}</cite>
            </div>
          ))}
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 md:py-20 space-y-12 md:space-y-20 text-lg md:text-xl leading-relaxed text-eaa-neutral-950">

        {/* How It Works Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8 md:space-y-10"
        >
          <hr className="border-eaa-warm-200" />
          <h2 className="font-serif text-3xl md:text-4xl text-eaa-teal-900">{siteContent.howItWorks.title}</h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {siteContent.howItWorks.steps.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-eaa-teal-900 text-white flex items-center justify-center text-lg font-bold font-serif">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl font-bold text-eaa-teal-900">
                  {item.title}
                </h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          {siteContent.howItWorks.note && (
            <p className="text-center italic">
              {siteContent.howItWorks.note}
            </p>
          )}
        </motion.section>

        {/* Who's Behind This Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8 md:space-y-10"
        >
          <hr className="border-eaa-warm-200" />
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl text-eaa-teal-900">{siteContent.whosBehindThis.title}</h2>
              <div className="space-y-6 [&_a]:underline [&_a]:underline-offset-4 [&_a]:text-eaa-teal-900 [&_a]:hover:text-eaa-teal-700 [&_a]:transition-colors">
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
          className="space-y-8 md:space-y-10"
        >
          <hr className="border-eaa-warm-200" />
          <div className="bg-white p-4 sm:p-8 md:p-12 border border-eaa-warm-200 overflow-hidden grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="aspect-square overflow-hidden bg-eaa-warm-200">
              <img 
                src={photoKevin} 
                alt="Kevin Rassool, past Intro to Effective Altruism Course participant"
                width={500}
                height={500}
                loading="lazy"
                decoding="async" 
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
          className="space-y-8 md:space-y-10"
        >
          <hr className="border-eaa-warm-200" />
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif text-eaa-teal-900 leading-tight">
                {siteContent.whatComesNext.title}
              </h2>
              <ul className="space-y-6">
                {siteContent.whatComesNext.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-eaa-bronze-500 shrink-0" />
                    <p>
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
                alt="Participants at an Effective Altruism Australia community event"
                width={1600}
                height={1067}
                loading="lazy"
                decoding="async" 
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
        >
          <div className="bg-eaa-teal-900 text-white p-8 md:p-16 rounded-sm shadow-xl text-center space-y-8">
            <div className="space-y-4">
              <p className="text-eaa-warm-100 uppercase tracking-widest text-sm font-medium">{siteContent.finalCta.dateRange}</p>
              <h2 className="font-serif text-3xl md:text-5xl">{siteContent.finalCta.title}</h2>
            </div>
            <div className="flex flex-col items-center gap-6">
              <a
                id="apply-final-cta"
                data-action="apply-cta"
                href={siteContent.links.applyForm}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackApplyClick}
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
          className="space-y-8 md:space-y-10"
        >
          <hr className="border-eaa-warm-200" />
          <h2 className="font-serif text-3xl md:text-4xl text-eaa-teal-900">{siteContent.faq.title}</h2>
          <div className="grid gap-4">
            {siteContent.faq.items.map((faq, i) => (
              <div key={i} className="border border-eaa-warm-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-eaa-warm-50 transition-colors"
                >
                  <span className="font-serif text-xl text-eaa-teal-900">{faq.q}</span>
                  {openFaq === i ? <Minus className="w-5 h-5 text-eaa-bronze-500 shrink-0" aria-hidden="true" /> : <Plus className="w-5 h-5 text-eaa-bronze-500 shrink-0" aria-hidden="true" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.section>

        <p className="text-center text-eaa-teal-900 font-medium py-6 border-t border-b border-eaa-warm-200">
          {siteContent.contact.text}{" "}
          <a href={`mailto:${siteContent.contact.email}`} className="underline underline-offset-4 hover:text-eaa-teal-700 transition-colors">
            {siteContent.contact.email}
          </a>
        </p>

      </div>
      </main>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-eaa-warm-200 px-4 py-3 safe-bottom">
        <a
          id="apply-sticky-mobile"
          data-action="apply-cta"
          href={siteContent.links.applyForm}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackApplyClick}
          className="flex items-center justify-center gap-2 w-full bg-eaa-teal-700 text-white py-3 text-base font-medium hover:bg-eaa-teal-900 transition-colors"
        >
          {siteContent.hero.applyButton}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <Footer />
    </div>
  );
}
