"use client";

import React from "react";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-subheading font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap";

  const variants: Record<string, string> = {
    primary:
      "bg-peach text-white border-4 border-foreground shadow-soft hover:shadow-[12px_12px_0px_#0A0A0A] hover:translate-x-[-2px] hover:translate-y-[-2px]",
    secondary:
      "bg-sage text-foreground border-4 border-foreground shadow-soft hover:shadow-[12px_12px_0px_#0A0A0A] hover:translate-x-[-2px] hover:translate-y-[-2px]",
    outline:
      "bg-transparent text-foreground border-4 border-foreground hover:bg-foreground hover:text-background",
  };

  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-xs rounded-xl",
    md: "px-6 py-3 text-sm rounded-2xl",
    lg: "px-8 py-4 text-base rounded-2xl",
    xl: "px-10 py-5 text-lg rounded-[24px]",
  };

  return (
    <a
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
