"use client";

import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { Copy, Plus, Save, Download } from "lucide-react";

interface HeaderProps {
  onExport: () => void;
  onSave: () => void;
  onAddSection: () => void;
}

export function Header({ onExport, onSave, onAddSection }: HeaderProps) {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 gap-4">
        <h1 className="text-xl font-bold">Prompt Builder</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onAddSection}>
            <Plus className="h-4 w-4 mr-2" />
            Add Section
          </Button>
          <Button variant="outline" size="sm" onClick={onSave}>
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" size="sm" onClick={onExport}>
            <Copy className="h-4 w-4 mr-2" />
            Export
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}