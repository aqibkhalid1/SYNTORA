"use client";

import { useState, FormEvent } from "react";
import Script from "next/script";
import Reveal from "./Reveal";

const CALENDLY_URL = "https://calendly.com/aqibkhalido53/30min";

const budgets = ["Under $1,000", "$1,000–$2,500", "$2,500–$5,000", "$5,000+"];

const inputClasses =
  "w-full bg-transparent border-b border-line focus:border-brass outline-none py-3 text-ink placeholder:text-faint transition-colors duration-300";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // PLACEHOLDER: wire this up to your form handler / CRM (e.g. POST to an
  // API route, or a service like Formspree / HubSpot). See README.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="px-6 md:px-10 py-28 md:py-36 bg-surface border-t border-line">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow mb-5">Start a Project</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink text-balance leading-[1.05] mb-6">
              Tell us about your project.
            </h2>
            <p className="text-muted leading-relaxed">
              Fill out the form or book a call directly. We'll follow up
              within one business day.
            </p>

            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="lazyOnload"
            />
            <div
              className="calendly-inline-widget mt-10 border border-line"
              data-url={`${CALENDLY_URL}?background_color=0a0a09&text_color=f5f3ef&primary_color=c9a15c`}
              style={{ minWidth: "320px", height: "650px" }}
            />
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={100}>
            {submitted ? (
              <div className="border border-brass/50 p-10 text-center">
                <h3 className="font-display text-2xl text-ink mb-2">Thanks — got it.</h3>
                <p className="text-muted">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                  <input required name="name" placeholder="Name" className={inputClasses} />
                  <input required name="company" placeholder="Company" className={inputClasses} />
                  <input required type="email" name="email" placeholder="Email" className={inputClasses} />
                  <input name="website" placeholder="Website" className={inputClasses} />
                  <input required name="industry" placeholder="Industry" className={inputClasses} />
                  <select required name="budget" defaultValue="" className={`${inputClasses} text-faint`}>
                    <option value="" disabled>
                      Approximate monthly creative budget
                    </option>
                    {budgets.map((b) => (
                      <option key={b} value={b} className="bg-surface text-ink">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <input required name="need" placeholder="What do you need?" className={inputClasses} />

                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project"
                  className={`${inputClasses} resize-none`}
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-brass text-bg text-sm px-8 py-4 tracking-wide hover:bg-brassSoft transition-colors duration-300 ease-premium"
                >
                  Start Your Project
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
