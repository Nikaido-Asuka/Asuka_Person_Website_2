import Experience from "@/components/experience";
import Greet from "./Greet";
import Skills from "@/components/skills";
import Mode from '@/components/mode'
import { useState, useEffect } from 'react';
import 'animate.css'

import { AnimatedTestimonialsDemo } from "@/components/about/components/AnimatedTestimonialsDemo";
export default function Home() {
  const [mode, setMode] = useState();
  useEffect(() => {
    const storedMode = localStorage.getItem('theme');
    if (storedMode) {
      setMode(storedMode);
    } else {
      setMode('light');
    }
  }, []);
  if (mode === null) return null;
 
  return (
    <>
      <div
        className={`transition-all duration-500 ease-in-out ${mode === 'light' ? 'bg-white text-black' : 'bg-gray-[#0c0c0c] text-white dark'}`}
      >
        <Greet mode={mode}/>
        <Mode mode={mode} setMode={setMode} />
        <Skills/>
        <Experience />
        
        {/* <FloatingDockDemo/> */}
      </div>
    </>
  );
}
