"use client";

import React from "react";
import { Accordion } from "@/components/ui/Accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Is QuickV really free to use?",
      answer: "Yes, QuickV is 100% free to use. There are no subscriptions, hidden fees, or markups. We make comparing prices completely cost-free for you."
    },
    {
      question: "Which cities do you operate in?",
      answer: "QuickV works wherever your favorite Q-commerce providers operate! If Blinkit, Zepto, Swiggy Instamart, or others deliver to your area, they will automatically show up and be compared on QuickV."
    },
    {
      question: "How do you actually save me money?",
      answer: "We instantly run thousands of calculations across all available platforms considering base prices, delivery fees, and active coupons to guarantee you are always presented with the absolute cheapest possible cart."
    },
    {
      question: "Is my data safe with QuickV?",
      answer: "Absolutely. We employ bank-level encryption protocols and we never store your payment information. Your shopping habits and personal data remain strictly confidential."
    },
    {
      question: "Do I need accounts on other apps?",
      answer: "You don't need accounts on other apps to use our comparison engine. However, having them logged in makes the final one-tap checkout process much smoother and faster."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 relative bg-background overflow-hidden border-t-8 border-foreground snap-start min-h-screen flex items-center scroll-mt-24">
      
      {/* Background massive typography */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.02] overflow-hidden">
        <h2 className="font-headline text-[12vw] font-black leading-none transform rotate-90 translate-x-1/2 translate-y-1/4">
          FAQ FAQ
        </h2>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
        <div className="lg:col-span-5 mb-16 lg:mb-0 sticky top-40">
          <div className="bg-sage text-foreground font-headline text-2xl font-black uppercase px-6 py-2 mb-8 border-4 border-foreground inline-block transform -skew-x-12">
            Data Query Protocol
          </div>
          <h2 className="font-headline text-5xl md:text-6xl font-black uppercase leading-[0.9] text-foreground mb-8">
            Got <br />
            <span className="italic text-peach lowercase">Questions?</span>
          </h2>
          
          <div className="bg-peach text-white p-8 border-8 border-foreground shadow-[15px_15px_0_#0A0A0A] transform -rotate-2 mt-12">
            <p className="font-body text-2xl font-bold mb-6">
              Everything you need to know about QuickV. Cannot find your answer?
            </p>
            <a href="#contact" className="inline-block bg-foreground text-background font-headline text-2xl font-black uppercase px-8 py-4 border-4 border-background hover:bg-white hover:text-foreground transition-colors duration-300">
              Initiate Contact
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
