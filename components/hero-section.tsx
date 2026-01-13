"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center px-6 py-16 md:py-24">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-in fade-in slide-in-from-bottom-3 duration-500">
          Build beautiful experiences with
          <span className="text-primary ml-2 inline-flex items-center">
            Modern UI
            <Sparkles className="w-8 h-8 ml-2 text-yellow-500" />
          </span>
        </h1>
        <p className="text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
          Create stunning interfaces with our professionally designed components. Fast, accessible, and beautiful by default.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <Button size="lg" className="h-12 px-8">
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8">
            View Components
          </Button>
        </div>
      </div>
    </div>
  );
}