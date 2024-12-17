"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PromptSection } from "../types";

interface PromptStore {
  sections: PromptSection[];
  savedPrompts: { id: string; name: string; sections: PromptSection[] }[];
  addSection: (index: number) => void;
  updateSection: (id: string, content: string) => void;
  removeSection: (id: string) => void;
  savePrompt: (name: string) => void;
  loadPrompt: (id: string) => void;
  setSections: (sections: PromptSection[]) => void;
}

export const usePromptStore = create<PromptStore>()(
  persist(
    (set) => ({
      sections: [
        { id: "header", type: "header", content: "", order: 0 },
        { id: "body", type: "body", content: "", order: 1 },
        { id: "footer", type: "footer", content: "", order: 2 },
      ],
      savedPrompts: [],
      addSection: (index) =>
        set((state) => {
          const newSections = [...state.sections];
          const newSection = {
            id: `custom-${Date.now()}`,
            type: "custom",
            content: "",
            order: index + 0.5,
          };
          newSections.push(newSection);
          
          // Reorder sections
          return {
            sections: newSections
              .sort((a, b) => a.order - b.order)
              .map((section, idx) => ({
                ...section,
                order: idx,
              })),
          };
        }),
      updateSection: (id, content) =>
        set((state) => ({
          sections: state.sections.map((section) =>
            section.id === id ? { ...section, content } : section
          ),
        })),
      removeSection: (id) =>
        set((state) => ({
          sections: state.sections
            .filter((section) => section.id !== id)
            .map((section, index) => ({ ...section, order: index })),
        })),
      savePrompt: (name) =>
        set((state) => ({
          savedPrompts: [
            ...state.savedPrompts,
            {
              id: Date.now().toString(),
              name,
              sections: state.sections,
            },
          ],
        })),
      loadPrompt: (id) =>
        set((state) => ({
          sections:
            state.savedPrompts.find((prompt) => prompt.id === id)?.sections ||
            state.sections,
        })),
      setSections: (sections) => set({ sections }),
    }),
    {
      name: "prompt-store",
    }
  )
);