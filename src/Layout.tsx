/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Shared page furniture used by both ApplyPage and BetweenRoundsPage.
// Extracted verbatim from the original App.tsx so the two states of the
// site can't drift apart. Footer content lives in siteContent.footer.

import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { siteContent } from './content';
import logoFullColour from './assets/logo-full-colour.svg';
import logoWhite from './assets/logo-white.svg';

type HeaderCta = {
  /** DOM id, used by GTM click triggers. */
  id: string;
  label: string;
  href: string;
  /** data-action attribute, used by GTM click triggers. */
  action?: string;
  /** Open in a new tab. Defaults to true. */
  newTab?: boolean;
  onClick?: () => void;
};

export function Header({ cta }: { cta?: HeaderCta }) {
  return (
    <header className="w-full z-50 bg-white">
      <nav className="max-w-7xl mx-auto px-6 lg:px-16 py-5 flex justify-between items-center">
        <div className="flex items-center">
          <a href={siteContent.links.mainWebsite} target="_blank" rel="noopener noreferrer">
            <img
              src={logoFullColour}
              alt="Effective Altruism Australia"
              className="h-10 md:h-12"
            />
          </a>
        </div>
        <div>
          {cta && (
            <a
              id={cta.id}
              data-action={cta.action}
              href={cta.href}
              target={cta.newTab === false ? undefined : '_blank'}
              rel={cta.newTab === false ? undefined : 'noopener noreferrer'}
              onClick={cta.onClick}
              className="hidden md:inline-flex items-center justify-center gap-2 bg-eaa-teal-700 text-white px-7 py-3.5 text-base font-bold hover:bg-eaa-teal-900 transition-colors duration-200"
            >
              {cta.label}
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-eaa-neutral-700 text-eaa-neutral-200 text-base md:text-lg pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Left column: Logo + legal */}
          <div className="space-y-12">
            <a href={siteContent.links.mainWebsite} target="_blank" rel="noopener noreferrer">
              <img
                src={logoWhite}
                alt="Effective Altruism Australia"
                className="h-12"
              />
            </a>
            <p
              className="text-sm text-eaa-neutral-200/70 leading-relaxed [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-white [&_a]:transition-colors"
              dangerouslySetInnerHTML={{ __html: siteContent.footer.legalTextHtml }}
            />
          </div>

          {/* Middle column: Contact + social */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg text-white border-b border-eaa-teal-700 pb-2 w-fit">Contact Information</h3>
            <ul className="space-y-3">
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
            <ul className="space-y-3">
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
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-eaa-neutral-200/60">
          <span>{siteContent.footer.copyright}</span>
          <div className="flex gap-4">
            <a href={siteContent.footer.privacyPolicy} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href={siteContent.footer.terms} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
