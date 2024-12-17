"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelperComponent } from "./helper-component";
import { helperComponents } from "../data/helper-components";

export function HelperPanel() {
  return (
    <Tabs defaultValue="task" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="task">Tasks</TabsTrigger>
        <TabsTrigger value="criteria">Criteria</TabsTrigger>
        <TabsTrigger value="folder">Folders</TabsTrigger>
        <TabsTrigger value="custom">Custom</TabsTrigger>
      </TabsList>
      <ScrollArea className="h-[calc(100vh-12rem)] mt-4">
        {Object.entries(helperComponents).map(([category, components]) => (
          <TabsContent key={category} value={category} className="mt-0">
            {components.map((helper) => (
              <HelperComponent key={helper.id} helper={helper} />
            ))}
          </TabsContent>
        ))}
      </ScrollArea>
    </Tabs>
  );
}