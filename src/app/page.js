"use client";

import { Meteors } from "@/components/ui/meteors";
import { FloatingDockDemo } from "./components/Floatingnav";

import React from "react";
import { BoxesCore } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

function MotherBg() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <BoxesCore />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative mt-[12vh]  lg:mt-[14vh] ">
      <MotherBg />

      <div className="w-full z-[99] absolute top-10 max-w-xs">
        <div className="min-h-[90vh] relative w-[100vw]  h-full overflow-hidden flex flex-col items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h1 className="font-bold text-3xl text-white mt-[10vh] mb-8 relative z-50">
              Transforming your vision <br />
              into Digital Evolution
            </h1>

            <button
              className="bg-[#06B5D2] text-sm p-[2vw_4vw] rounded-lg"
              onClick={() => alert("dvd")}
            >
              Connect Now
            </button>

            <div className="max-w-[78vw] mt-[5vh] break-words whitespace-normal ">
              <span className="text-cyan-500 text-md">
                "Trex"&nbsp;
                <span className="text-white text-sm">
                  provides StartUps, MSME's, and Large Enterprises with software
                  solutions like ERP, CRM, Website, Mobile Application, and many
                  more...
                </span>
              </span>
            </div>
          </div>
          {/* Meteor effect */}
          <Meteors number={20} />

          <FloatingDockDemo />
        </div>
      </div>
    </div>
  );
}
