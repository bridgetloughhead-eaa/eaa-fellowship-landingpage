/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Shown when content.ts `courseOpen` is false: the course isn't running, so the
// page tells people when the next round is, sends them to the newsletter, and
// points at EAGxAustralasia. No apply links anywhere.

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Quote } from 'lucide-react';
import { siteContent, betweenRounds } from './content';
import { Header, Footer } from './Layout';
import photo0234 from './assets/0234.webp';
import photo0129 from './assets/0129.webp';
import logoFullColour from './assets/logo-full-colour.svg';

export default function BetweenRoundsPage() {
  const c = betweenRounds;

  return (
    <div className="min-h-screen bg-eaa-warm-100 font-sans text-eaa-neutral-950 selection:bg-eaa-teal-900 selection:text-white">
      <Header
        cta={{
          id: 'newsletter-nav',
          action: 'newsletter-cta',
          label: c.navigation.newsletterButton,
          href: c.links.newsletter,
        }}
      />

      {/* Hero - same treatment as ApplyPage. Only the status line, the note and
          the CTA differ. */}
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
            transition={{ duration: 0.8, ease: 'easeOut' }}
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
              <p className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-[29px]">{c.hero.statusLine}</p>
              <p className="text-white/80 text-base sm:text-lg md:text-xl">{c.hero.note}</p>
              <a
                id="newsletter-hero"
                data-action="newsletter-cta"
                href={c.links.newsletter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-eaa-teal-900 px-8 py-4 text-lg sm:text-xl md:text-2xl lg:text-[29px] font-bold shadow-lg hover:bg-eaa-warm-100 transition-colors duration-200"
              >
                {c.hero.primaryButton}
                <ArrowRight className="w-5 h-5" />
              </a>
              <p>
                <a
                  href={siteContent.links.mainWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 text-base sm:text-lg underline underline-offset-4 hover:text-white transition-colors"
                >
                  {c.hero.secondaryLinkText} →
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Status strip */}
      <section className="bg-white border-b border-eaa-warm-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-eaa-teal-900 font-bold text-base md:text-lg">
          {c.statusStrip.map((fact, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="text-eaa-bronze-500" aria-hidden="true">·</span>}
              <span>{fact}</span>
            </React.Fragment>
          ))}
        </div>
      </section>

      <main>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 md:py-20 space-y-12 md:space-y-20 text-lg md:text-xl leading-relaxed text-eaa-neutral-950">

          {/* EAGx banner */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-eaa-teal-900 text-white p-8 md:p-12 lg:p-16 rounded-sm shadow-xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-5">
                <p className="text-eaa-warm-100 uppercase tracking-widest text-sm font-medium">{c.eagx.eyebrow}</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">{c.eagx.title}</h2>
                <p className="text-eaa-warm-100 font-bold text-lg md:text-xl">{c.eagx.details}</p>
                <p className="text-eaa-warm-100/90 text-base md:text-lg leading-relaxed">{c.eagx.body}</p>
                <a
                  id="eagx-banner"
                  data-action="eagx-cta"
                  href={c.links.eagx}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-eaa-warm-100 text-eaa-teal-700 px-8 py-4 text-lg font-bold hover:bg-white transition-colors duration-200 shadow-lg"
                >
                  {c.eagx.button}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-eaa-teal-700/30">
                <img
                  src={photo0129}
                  alt="Participants at an Effective Altruism Australia community event"
                  width={1600}
                  height={1067}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.section>

          {/* In the meantime */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-10"
          >
            <hr className="border-eaa-warm-200" />
            <h2 className="font-serif text-3xl md:text-4xl text-eaa-teal-900">{c.inTheMeantime.title}</h2>
            <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
              {c.inTheMeantime.items.map((item, i) => (
                <li key={i} className="space-y-4">
                  <div className="w-10 h-0.5 bg-eaa-bronze-500" aria-hidden="true" />
                  <p>
                    <a
                      href={c.links[item.linkKey]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-eaa-teal-900 font-bold underline underline-offset-4 hover:text-eaa-teal-700 transition-colors"
                    >
                      {item.title}
                    </a>{' '}
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* What the course covers (kept so people landing here still learn what it is) */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-10"
          >
            <hr className="border-eaa-warm-200" />
            <h2 className="font-serif text-3xl md:text-4xl text-eaa-teal-900">{siteContent.theSyllabus.title}</h2>
            <p>{siteContent.theSyllabus.description1}</p>

            <div className="bg-white py-8 px-6 sm:py-10 sm:px-12 border border-eaa-warm-200">
              <h3 className="font-serif text-2xl text-eaa-teal-900 mb-6">{siteContent.theSyllabus.topicsTitle}</h3>
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 list-disc marker:text-eaa-bronze-500 pl-6">
                {siteContent.theSyllabus.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p>{c.syllabusCredit}</p>
              <p>{siteContent.theSyllabus.description2}</p>
            </div>
          </motion.section>

        </div>

        {/* Testimonials banner - full width */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
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

          {/* Who's behind this */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-10"
          >
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

          {/* Final newsletter CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-eaa-teal-900 text-white p-8 md:p-16 rounded-sm shadow-xl text-center space-y-8">
              <div className="space-y-4">
                <p className="text-eaa-warm-100 uppercase tracking-widest text-sm font-medium">{c.finalCta.eyebrow}</p>
                <h2 className="font-serif text-3xl md:text-5xl">{c.finalCta.title}</h2>
                <p className="text-eaa-warm-100/90 max-w-2xl mx-auto text-base md:text-lg">{c.finalCta.body}</p>
              </div>
              <a
                id="newsletter-final-cta"
                data-action="newsletter-cta"
                href={c.links.newsletter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-eaa-warm-100 text-eaa-teal-700 px-10 py-5 text-xl font-bold hover:bg-white transition-colors duration-200 shadow-lg"
              >
                {c.finalCta.button}
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </motion.section>

          <p className="text-center text-eaa-teal-900 font-medium py-6 border-t border-b border-eaa-warm-200">
            {siteContent.contact.text}{' '}
            <a href={`mailto:${siteContent.contact.email}`} className="underline underline-offset-4 hover:text-eaa-teal-700 transition-colors">
              {siteContent.contact.email}
            </a>
          </p>

        </div>
      </main>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-eaa-warm-200 px-4 py-3 safe-bottom">
        <a
          id="newsletter-sticky-mobile"
          data-action="newsletter-cta"
          href={c.links.newsletter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-eaa-teal-700 text-white py-3 text-base font-medium hover:bg-eaa-teal-900 transition-colors"
        >
          {c.finalCta.button}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <Footer />
    </div>
  );
}
