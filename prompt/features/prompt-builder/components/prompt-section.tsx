"use client";

import { useDrop } from "react-dnd";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { DragItem, PromptSection as PromptSectionType } from "../types";

interface PromptSectionProps {
  section: PromptSectionType;
  onUpdate: (id: string, content: string) => void;
  onRemove: (id: string) => void;
  isRemovable?: boolean;
}

export function PromptSection({
  section,
  onUpdate,
  onRemove,
  isRemovable = true,
}: PromptSectionProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "helper",
    drop: (item: DragItem) => {
      onUpdate(section.id, section.content + "\n" + item.content);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <Card
      ref={drop}
      className={`p-4 mb-4 transition-colors ${
        isOver ? "bg-accent" : "bg-background"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <Badge variant="outline" className="capitalize">
          {section.type}
        </Badge>
        {isRemovable && (
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => onRemove(section.id)}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Textarea
        value={section.content}
        onChange={(e) => onUpdate(section.id, e.target.value)}
        className="min-h-[100px] w-full resize-y bg-background"
        placeholder={`Enter ${section.type} content...`}
      />
    </Card>
  );
}