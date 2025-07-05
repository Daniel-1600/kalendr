// app/components/hero-section.tsx or src/components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-background text-foreground">
      <div className="text-center max-w-3xl space-y-6">
        <Badge className="text-sm bg-indigo-100 text-indigo-600 border-none">
          Powered by AI · Open Source
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Organize Your Day <br /> with{" "}
          <span className="text-indigo-600">Kalendr</span>
        </h1>

        <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto">
          Kalendr helps you plan smarter, not harder. Daily plans designed by
          AI, perfected by you.
        </p>

        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <Button size="lg">Get Started</Button>
          <Button variant="ghost" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
