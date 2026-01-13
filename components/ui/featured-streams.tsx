"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

const featuredStreams = [
  {
    title: "Pro Gaming Championship Finals",
    streamer: "ProGamer123",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
    category: "Esports",
    viewers: "15.2K",
  },
  {
    title: "Creative Coding Workshop",
    streamer: "TechArtist",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=400&fit=crop",
    category: "Programming",
    viewers: "8.7K",
  },
  {
    title: "Music Production Live",
    streamer: "BeatMaker",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=400&fit=crop",
    category: "Music",
    viewers: "12.4K",
  },
];

export function FeaturedStreams() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Streams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStreams.map((stream, index) => (
            <Card key={index} className="overflow-hidden hover:border-primary transition-colors">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={stream.thumbnail}
                    alt={stream.title}
                    className="w-full aspect-video object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-red-600">LIVE</Badge>
                  <div className="absolute bottom-2 left-2 flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{stream.viewers}</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={stream.avatar} />
                      <AvatarFallback>{stream.streamer[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{stream.title}</h3>
                      <p className="text-sm text-muted-foreground">{stream.streamer}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mt-2">
                    {stream.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}