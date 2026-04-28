"use client";

import React, { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div
          key={index}
          className={`border-4 border-foreground overflow-hidden transition-all duration-300 ${
            openIndex === index
              ? "bg-sage text-foreground shadow-[15px_15px_0px_#FF3B1D]"
              : "bg-background text-foreground shadow-soft hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[24px_24px_0px_#0A0A0A]"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left p-8 flex items-center justify-between gap-6 cursor-pointer"
          >
            <span className="font-headline text-2xl md:text-3xl font-black uppercase tracking-tight">
              {item.question}
            </span>
            <span
              className={`text-4xl font-black transition-transform duration-300 flex-shrink-0 ${
                openIndex === index ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              openIndex === index ? "max-h-96 pb-8 px-8" : "max-h-0"
            }`}
          >
            <p className="font-body text-lg md:text-xl leading-relaxed opacity-80">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
