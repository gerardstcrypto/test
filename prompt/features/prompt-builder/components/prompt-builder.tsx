"use client";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useToast } from "@/hooks/use-toast";
import { Header } from "./header";
import { PromptSection as PromptSectionComponent } from "./prompt-section";
import { HelperPanel } from "./helper-panel";
import { TemplateSelector } from "./template-selector";
import { PromptPreview } from "./prompt-preview";
import { FormatControls } from "./format-controls";
import { SectionManager } from "./section-manager";
import { usePromptStore } from "../hooks/use-prompt-store";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";

export function PromptBuilder() {
  const { sections, addSection, updateSection, removeSection, savePrompt, setSections } =
    usePromptStore();
  const { toast } = useToast();
  const [promptName, setPromptName] = useState("");
  const [showSaveDialog, setShowSaveDialog] = useState(false);

  const previewContent = useMemo(() => {
    return sections
      .sort((a, b) => a.order - b.order)
      .map((section) => section.content)
      .join("\n\n")
      .trim();
  }, [sections]);

  const handleSave = () => {
    if (promptName.trim()) {
      savePrompt(promptName);
      setPromptName("");
      setShowSaveDialog(false);
      toast({
        title: "Prompt saved",
        description: "Your prompt has been saved successfully.",
      });
    }
  };

  const handleTemplateSelect = (template: any) => {
    setSections(template.sections);
    toast({
      title: "Template loaded",
      description: `Loaded template: ${template.name}`,
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-background">
        <Header
          onSave={() => setShowSaveDialog(true)}
          onAddSection={() => addSection(sections.length)}
        />
        <div className="container mx-auto py-6">
          <div className="flex justify-between items-center mb-4">
            <TemplateSelector onSelect={handleTemplateSelect} />
            <FormatControls sections={sections} previewContent={previewContent} />
          </div>
          <div className="flex gap-6">
            <div className="flex-1 space-y-4">
              <SectionManager sections={sections} onAddSection={addSection} />
              {sections
                .sort((a, b) => a.order - b.order)
                .map((section) => (
                  <PromptSectionComponent
                    key={section.id}
                    section={section}
                    onUpdate={updateSection}
                    onRemove={removeSection}
                    isRemovable={section.type === "custom"}
                  />
                ))}
              <PromptPreview content={previewContent} />
            </div>
            <div className="w-80">
              <HelperPanel />
            </div>
          </div>
        </div>

        <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Save Prompt</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Input
                placeholder="Enter prompt name..."
                value={promptName}
                onChange={(e) => setPromptName(e.target.value)}
              />
              <Button onClick={handleSave}>Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DndProvider>
  );
}