"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

function Lamp() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.8, y: 100 }}
        whileInView={{ opacity: 1, y: -30 }}
        transition={{
          delay: 0,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        T-REX Infotech 
      </motion.h1>
    </LampContainer>
  );
}

const Footer = () => {
  return (
    <div
      className="z-[9999] w-full flex justify-between items-center bg-[#162038] min-h-[25vh]
                    bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-lg border-t border-[rgba(255,255,255,0.2)] 
                    shadow-[0px_4px_10px_rgba(0,0,0,0.2)]"
    >
      <Lamp />
    </div>
  );
};

export default Footer;
