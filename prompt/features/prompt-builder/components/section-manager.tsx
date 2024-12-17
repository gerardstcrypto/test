"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { PromptSection } from "../types";

interface SectionManagerProps {
  sections: PromptSection[];
  onAddSection: (index: number) => void;
}

export function SectionManager({ sections, onAddSection }: SectionManagerProps) {
  return (
    <div className="space-y-2">
      {sections.map((section, index) => (
        <div key={section.id} className="relative">
          {(section.type === "header" || section.type === "body" || index > 0) && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <Button
                variant="outline"
                size="sm"
                className="h-6 px-2 bg-background"
                onClick={() => onAddSection(index)}
              >
                <Plus className="h-3 w-3 mr-1" />
                Add Section
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}