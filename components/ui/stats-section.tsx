"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Code2, Star } from "lucide-react";

const stats = [
  {
    label: "Active Users",
    value: "100K+",
    icon: <Users className="w-8 h-8" />,
  },
  {
    label: "Components",
    value: "50+",
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    label: "GitHub Stars",
    value: "10K+",
    icon: <Star className="w-8 h-8" />,
  },
];

export function StatsSection() {
  return (
    <div className="bg-muted py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none bg-transparent">
              <CardContent className="flex items-center space-x-4 p-6">
                <div className="p-3 bg-background rounded-full">{stat.icon}</div>
                <div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}