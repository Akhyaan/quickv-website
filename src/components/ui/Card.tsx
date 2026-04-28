"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-background border-4 border-foreground shadow-soft rounded-[32px] overflow-hidden transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
