"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PromptPreviewProps {
  content: string;
}

export function PromptPreview({ content }: PromptPreviewProps) {
  return (
    <Card className="p-4 mt-4">
      <h3 className="text-sm font-medium mb-2">Preview</h3>
      <ScrollArea className="h-[200px] w-full rounded-md border p-4">
        <pre className="text-sm whitespace-pre-wrap">{content}</pre>
      </ScrollArea>
    </Card>
  );
}