"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 relative bg-background snap-start min-h-screen flex items-center scroll-mt-24 overflow-hidden">
      
      {/* Background massive typography */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 pointer-events-none opacity-[0.02] overflow-hidden">
        <h2 className="font-headline text-[25vw] font-black uppercase text-center leading-none tracking-tighter">
          CONTACT CONTACT
        </h2>
      </div>

      {/* Gradient Blobs */}
      <div className="absolute top-1/4 -right-20 w-[40vw] h-[40vw] bg-sage/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[30vw] h-[30vw] bg-plum/10 rounded-full blur-[100px] pointer-events-none" />

      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <div className="space-y-8">
          <h2 className="font-headline text-5xl md:text-6xl font-black">
            Let's <span className="italic text-sage">connect.</span>
          </h2>
          <p className="font-body text-xl text-foreground/70 max-w-md">
            Have questions, feedback, or need support? Drop us a line and we'll get back to you as soon as possible.
          </p>
          
          <div className="space-y-6 pt-8 font-subheading text-lg font-medium">
            <a href="mailto:Quickv@ciot.com" className="flex items-center gap-4 hover:text-sage transition-colors">
              <div className="w-12 h-12 rounded-full border-4 border-foreground shadow-[8px_8px_0px_#0A0A0A] flex items-center justify-center text-sage">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              Quickv@ciot.com
            </a>
            
            <a href="mailto:nitins@ciot.com" className="flex items-center gap-4 hover:text-sage transition-colors">
              <div className="w-12 h-12 rounded-full border-4 border-foreground shadow-[8px_8px_0px_#0A0A0A] flex items-center justify-center text-sage">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              nitins@ciot.com
            </a>

            <a href="tel:9000333910" className="flex items-center gap-4 hover:text-sage transition-colors">
              <div className="w-12 h-12 rounded-full border-4 border-foreground shadow-[8px_8px_0px_#0A0A0A] flex items-center justify-center text-sage">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              9000333910
            </a>
          </div>
        </div>

        <div>
          <Card className="p-8 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-subheading text-sm font-bold tracking-widest uppercase text-foreground/50">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-background shadow-inner-soft rounded-2xl px-6 py-4 font-body outline-none focus:ring-2 focus:ring-sage/50 transition-all border border-foreground/5"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label className="font-subheading text-sm font-bold tracking-widest uppercase text-foreground/50">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-background shadow-inner-soft rounded-2xl px-6 py-4 font-body outline-none focus:ring-2 focus:ring-sage/50 transition-all border border-foreground/5"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="font-subheading text-sm font-bold tracking-widest uppercase text-foreground/50">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-background shadow-inner-soft rounded-2xl px-6 py-4 font-body outline-none focus:ring-2 focus:ring-sage/50 transition-all border border-foreground/5"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="space-y-2">
                <label className="font-subheading text-sm font-bold tracking-widest uppercase text-foreground/50">Your Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-background shadow-inner-soft rounded-2xl px-6 py-4 font-body outline-none focus:ring-2 focus:ring-sage/50 transition-all resize-none border border-foreground/5"
                  placeholder="How can we help?"
                ></textarea>
              </div>

              <Button variant="accent-sage" className="w-full h-14 text-lg">
                Send Message
              </Button>
            </form>
          </Card>
        </div>

      </div>
    </section>
  );
}
