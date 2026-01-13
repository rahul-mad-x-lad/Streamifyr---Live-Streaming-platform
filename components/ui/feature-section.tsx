"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Layout, Palette, Shield } from "lucide-react";

const features = [
  {
    title: "Beautiful Design",
    description: "Professionally crafted components that look great out of the box.",
    icon: <Palette className="w-12 h-12 text-primary" />,
  },
  {
    title: "Fully Responsive",
    description: "Layouts that work seamlessly across all modern devices.",
    icon: <Layout className="w-12 h-12 text-primary" />,
  },
  {
    title: "Developer Experience",
    description: "Written in TypeScript with full type safety and documentation.",
    icon: <Code className="w-12 h-12 text-primary" />,
  },
  {
    title: "Production Ready",
    description: "Built for reliability and performance in real-world applications.",
    icon: <Shield className="w-12 h-12 text-primary" />,
  },
];

export function FeatureSection() {
  return (
    <div className="container py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border-2 transition-all hover:border-primary">
            <CardHeader>
              <div className="mb-4">{feature.icon}</div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}