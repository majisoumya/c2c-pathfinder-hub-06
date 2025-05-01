
import React from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface CustomProgressProps {
  value: number;
  className?: string;
  indicatorColor?: string;
}

export function CustomProgress({ value, className, indicatorColor }: CustomProgressProps) {
  return (
    <Progress 
      value={value} 
      className={cn(
        "h-2", 
        className
      )}
      style={{
        "--progress-indicator-color": indicatorColor
      } as React.CSSProperties}
    />
  );
}
