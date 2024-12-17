"use client";

import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FileText, FileCode, FileJson } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PromptSection } from "../types";
import { prettifyText, convertToXML, convertToMDX } from "../utils/format-converters";

interface FormatControlsProps {
  sections: PromptSection[];
  previewContent: string;
}

export function FormatControls({ sections, previewContent }: FormatControlsProps) {
  const { toast } = useToast();

  const copyToClipboard = async (content: string, format: string) => {
    try {
      await navigator.clipboard.writeText(content);
      toast({
        title: "Copied to clipboard",
        description: `Content copied in ${format} format`,
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Failed to copy content to clipboard",
        variant: "destructive",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <FileText className="h-4 w-4 mr-2" />
          Export As
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => copyToClipboard(prettifyText(previewContent), "Plain Text")}>
          <FileText className="h-4 w-4 mr-2" />
          Plain Text
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => copyToClipboard(convertToXML(sections), "XML")}>
          <FileCode className="h-4 w-4 mr-2" />
          XML
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => copyToClipboard(convertToMDX(sections), "MDX")}>
          <FileJson className="h-4 w-4 mr-2" />
          MDX
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}