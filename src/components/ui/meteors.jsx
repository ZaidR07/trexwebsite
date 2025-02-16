import { cn } from "@/lib/utils";
import React from "react";

export const Meteors = ({ number, className }) => {
  const meteors = new Array(number || 20).fill(true);
  const colors = ["#B9DD6B", "#64748b", "#94a3b8", "#facc15", "#f87171"]; // Different meteor colors

  return (
    <>
      {meteors.map((_, idx) => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute left-1/2 h-0.5 w-0.5 rounded-[9999px] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-transparent before:to-transparent",
              className
            )}
            style={{
              top: Math.floor(Math.random() * (700 - 100) - 150) + "px", // More meteors appearing lower
              left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
              backgroundColor: color, // Dynamic meteor color
              animationDelay: Math.random() * (1.2 - 0.2) + 0.2 + "s",
              animationDuration: Math.floor(Math.random() * (12 - 3) + 3) + "s",
            }}
          />
        );
      })}
    </>
  );
};
