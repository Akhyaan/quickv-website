"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/Card";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

interface ComparisonData {
  product: string;
  results: { provider: string; price: number; time: number }[];
  cheapest: { provider: string; price: number; time: number };
  costliest: { provider: string; price: number; time: number };
  savings: number;
}

export function Comparison() {
  const [data, setData] = useState<ComparisonData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchComparison = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/comparison?product=Amul+Butter+500g");
      const json = await res.json();
      setData(json);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComparison();
    const interval = setInterval(fetchComparison, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="comparison" className="py-20 px-6 relative bg-peach overflow-hidden text-foreground snap-start min-h-screen flex items-center scroll-mt-24">
      {/* Background massive typography */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 pointer-events-none opacity-[0.02] overflow-hidden text-white">
        <h2 className="font-headline text-[30vw] font-black uppercase text-center leading-none tracking-tighter">
          SCAN SCAN
        </h2>
      </div>

      {/* Gradient Blobs */}
      <div className="absolute top-1/4 -left-20 w-[40vw] h-[40vw] bg-white/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[30vw] h-[30vw] bg-foreground/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-10 w-[1px] h-full bg-foreground/10" />
        <div className="absolute top-0 right-20 w-[1px] h-full bg-foreground/10" />
        <div className="absolute top-0 right-[30%] w-[1px] h-full bg-foreground/10" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-foreground/10" />
        <div className="absolute top-[60%] left-0 w-full h-[1px] bg-foreground/10" />
      </div>
      
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-12">
          <div className="inline-flex items-center gap-4 px-6 py-2 bg-foreground text-peach font-subheading font-black text-xl tracking-[0.2em] uppercase border-4 border-foreground shadow-soft transform -rotate-2">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-peach opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-peach"></span>
            </span>
            SYSTEM SCAN
          </div>

          <h2 className="font-headline text-6xl md:text-8xl font-black leading-[0.85] uppercase text-white drop-shadow-[4px_4px_0_#0A0A0A]">
            See the <br />
            <span className="text-foreground">Difference.</span>
          </h2>
          
          <p className="font-body text-3xl text-foreground font-bold max-w-xl border-l-8 border-foreground pl-6">
            Real prices. Real savings. Every product compared across every platform, refreshed constantly.
          </p>

          {data && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12 p-8 bg-sage text-foreground border-8 border-foreground shadow-soft transform rotate-2 max-w-sm"
            >
              <h3 className="font-headline text-3xl font-black uppercase mb-2 border-b-4 border-foreground pb-2">Yield</h3>
              <div className="font-headline text-8xl font-black">₹{data.savings}</div>
              <p className="font-body text-xl font-bold mt-2 uppercase">
                Difference Detected.
              </p>
            </motion.div>
          )}
        </div>

        {/* Right Content - Live Widget */}
        <div className="relative">
          {/* Over-engineered UI Scanner */}
          <div className="absolute -inset-4 border-4 border-dashed border-foreground animate-[spin_60s_linear_infinite] pointer-events-none rounded-full opacity-20" />
          
          <Card className="p-0 border-8 border-foreground overflow-hidden relative bg-background transform -skew-y-3 shadow-neumorphic z-10 group">
            {/* Tech scanning line */}
            <div className="absolute top-0 left-0 w-full h-[4px] bg-peach shadow-[0_0_20px_#FF3B1D] z-50 animate-[sweep_2s_ease-in-out_infinite] group-hover:bg-sage group-hover:shadow-[0_0_20px_#00E676] transition-colors" />

            <div className="bg-foreground text-white p-6 flex justify-between items-center border-b-8 border-foreground">
              <h3 className="font-headline text-4xl font-black uppercase tracking-widest">Target: Amul Butter</h3>
              <div className="font-subheading text-sm font-bold text-sage tracking-widest uppercase">
                [ LIVE FEED ]
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <AnimatePresence mode="wait">
                {loading && !data ? (
                  <motion.div
                    key="loader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-center items-center h-64"
                  >
                    <Loader2 className="w-16 h-16 animate-spin text-foreground" />
                  </motion.div>
                ) : data ? (
                  <motion.div
                    key="data"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {data.results.map((result, idx) => {
                      const isCheapest = result.provider === data.cheapest.provider;
                      const isCostliest = result.provider === data.costliest.provider;

                      return (
                        <div 
                          key={result.provider}
                          className={`flex items-center justify-between p-6 border-4 transition-all hover:scale-[1.02] ${
                            isCheapest 
                              ? "bg-sage border-foreground text-foreground shadow-soft" 
                              : "bg-background border-foreground text-foreground"
                          }`}
                        >
                          <div className="flex flex-col">
                            <span className="font-headline font-black text-3xl uppercase flex items-center gap-4">
                              {result.provider}
                              {isCheapest && (
                                <span className="text-sm bg-foreground text-white px-4 py-1 rounded-none uppercase tracking-widest border-2 border-foreground">
                                  WINNER
                                </span>
                              )}
                            </span>
                            <span className="font-subheading text-xl font-bold opacity-70 uppercase tracking-widest">
                              ETA: {result.time} MINS
                            </span>
                          </div>
                          
                          <div className={`font-headline text-6xl font-black ${isCheapest ? "text-foreground" : isCostliest ? "text-coral" : "text-foreground"}`}>
                            ₹{result.price}
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <div className="pt-4 border-t-4 border-foreground/10">
                <p className="font-subheading text-xs font-bold uppercase tracking-widest text-foreground/50 text-center">
                  This is just a demo for actual prices check out the QuickV App
                </p>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
}
