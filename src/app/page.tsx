import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/Card";
import { techStack } from "@/common/TechStack";

export const metadata: Metadata = {
  title: "Tech Stack",
  description: "A breakdown of the technologies used in this project.",
};

export default function StackPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-background text-foreground">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary tracking-tight">
          Tech Stack
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          This project is crafted with a powerful modern frontend stack focused
          on performance, scalability, and developer experience.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {techStack.map((tech, i) => (
            <Card
              key={i}
              className="w-full max-w-sm bg-card border border-border shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <CardContent className="p-5 space-y-1">
                <h2 className="text-lg font-semibold">{tech.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
