"use client";

import { useDrag } from "react-dnd";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelperComponent as HelperComponentType } from "../types";
import { GripVertical } from "lucide-react";

interface HelperComponentProps {
  helper: HelperComponentType;
}

export function HelperComponent({ helper }: HelperComponentProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "helper",
    item: { id: helper.id, type: "helper", content: helper.content },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Card
      ref={drag}
      className={`p-3 mb-2 cursor-move ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="flex items-center gap-2">
        <GripVertical className="h-4 w-4 text-muted-foreground" />
        <div className="flex-1">
          <h4 className="text-sm font-medium">{helper.title}</h4>
          {helper.description && (
            <p className="text-xs text-muted-foreground">{helper.description}</p>
          )}
        </div>
      </div>
    </Card>
  );
}