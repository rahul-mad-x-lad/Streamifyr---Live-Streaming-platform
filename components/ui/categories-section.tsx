"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    name: "Gaming",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop",
    viewers: "450K",
  },
  {
    name: "Music",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
    viewers: "120K",
  },
  {
    name: "Just Chatting",
    image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=400&h=300&fit=crop",
    viewers: "380K",
  },
  {
    name: "Creative",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
    viewers: "95K",
  },
];

export function CategoriesSection() {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="group cursor-pointer hover:border-primary transition-colors">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                    <Badge variant="secondary" className="w-fit mt-2">
                      {category.viewers} viewers
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}