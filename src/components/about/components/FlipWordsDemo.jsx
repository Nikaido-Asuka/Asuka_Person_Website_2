import React from "react";
import { FlipWords } from "@/components/ui/filp-words";

export default function FlipWordsDemo() {
  const words = [ "Asuka", "Frontend Developer", "Photographer", "Hiker", "Self-media"];

  return (
    <div className="flex justify-center items-center text-[40px]">
        <FlipWords words={words} />
    </div>
   
  );
}
