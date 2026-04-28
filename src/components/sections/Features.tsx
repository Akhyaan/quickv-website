"use client";

import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      title: "Real-time prices",
      desc: "We scan thousands of products every second across all platforms, so you see the true best price instantly.",
      color: "bg-peach text-white"
    },
    {
      title: "Cart Optimizer",
      desc: "Simulates all possible carts with your products with all providers, and returns both the cheapest and fastest cart.",
      color: "bg-sage text-foreground"
    },
    {
      title: "Coupon-aware",
      desc: "We factor in available coupons, offers, and cashback so your comparison reflects the real final price.",
      color: "bg-plum text-white"
    },
    {
      title: "Privacy first",
      desc: "We never store payment info. Bank-level encryption on all data. Your shopping habits stay yours.",
      color: "bg-foreground text-background"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 relative bg-background overflow-hidden border-t-8 border-foreground snap-start min-h-screen flex items-center scroll-mt-24">
      
      {/* Background massive typography */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 pointer-events-none opacity-[0.02] overflow-hidden">
        <h2 className="font-headline text-[20vw] font-black uppercase text-center leading-none tracking-tighter">
          FEATURES FEATURES
        </h2>
      </div>

      {/* Gradient Blobs */}
      <div className="absolute top-1/4 -right-20 w-[40vw] h-[40vw] bg-plum/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[30vw] h-[30vw] bg-sage/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Background shapes softened for readability */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-peach/10 blur-[100px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-sage/10 blur-[100px] rounded-full z-0 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto space-y-32 relative z-10">
        
        {/* Top Section */}
        <div className="relative">
          
          <h2 className="font-headline text-5xl md:text-7xl font-black max-w-5xl leading-[1.1] mb-20 uppercase tracking-tight text-foreground">
            Bringing the <span className="text-outline text-peach">smartest</span><br />
            <span className="bg-foreground text-background px-4 py-2 inline-block rounded-xl shadow-neumorphic mt-2">shopping</span><br />
            <span className="text-sage">100% free.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 rounded-[32px] border border-foreground/10 ${feature.color} transition-all duration-300 hover:-translate-y-2 hover:shadow-neumorphic shadow-soft group`}
              >
                <div className="text-6xl font-black opacity-20 mb-6 group-hover:opacity-40 transition-opacity">{`0${idx + 1}`}</div>
                <h3 className="font-headline text-4xl font-black mb-4 uppercase leading-none">{feature.title}</h3>
                <p className="font-body text-xl font-medium leading-relaxed opacity-90">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative pt-10">
          <div className="text-center max-w-4xl mx-auto mb-20 relative z-20">
            <h2 className="font-headline text-5xl md:text-7xl font-black mb-8 uppercase leading-[1.1] text-foreground">
              Everything you need,<br />
              <span className="text-peach italic">nothing you don't.</span>
            </h2>
            <div className="bg-background text-foreground p-6 rounded-[24px] shadow-inner-soft-sm border border-foreground/10 inline-block">
              <p className="font-body text-xl md:text-2xl font-medium max-w-2xl">
                QuickV puts the power of comparison in your pocket. Built for people who hate overpaying.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="text-center p-8 h-full bg-background border-8 border-foreground rounded-[48px]">
                <div className="relative w-[200px] mx-auto aspect-[1/2.1] rounded-[32px] border-[6px] border-foreground overflow-hidden bg-background mb-8">
                  <Image src="/images/pricecompare.jpeg" alt="Price Comparison" fill className="object-cover" />
                </div>
                <h3 className="font-headline font-black text-2xl mb-4 uppercase text-foreground">Smart Price Comparison</h3>
                <p className="font-body font-medium text-lg text-foreground/70">See prices from all providers side-by-side.</p>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Card className="text-center p-8 h-full bg-background border-8 border-foreground rounded-[48px] md:mt-12">
                <div className="relative w-[200px] mx-auto aspect-[1/2.1] rounded-[32px] border-[6px] border-foreground overflow-hidden bg-background mb-8">
                  <Image src="/images/cart.jpeg" alt="Cart Optimizer" fill className="object-cover" />
                </div>
                <h3 className="font-headline font-black text-2xl mb-4 uppercase text-foreground">Cart Optimizer</h3>
                <p className="font-body font-medium text-lg text-foreground/70">Automatically split or merge carts for best value.</p>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <Card className="text-center p-8 h-full bg-background border-8 border-foreground rounded-[48px]">
                <div className="relative w-[200px] mx-auto aspect-[1/2.1] rounded-[32px] border-[6px] border-foreground overflow-hidden bg-background mb-8">
                  <Image src="/images/oneapp.jpeg" alt="One App" fill className="object-cover" />
                </div>
                <h3 className="font-headline font-black text-2xl mb-4 uppercase text-foreground">Only One App Needed</h3>
                <p className="font-body font-medium text-lg text-foreground/70">Clear the clutter. Keep QuickV, delete the rest.</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
