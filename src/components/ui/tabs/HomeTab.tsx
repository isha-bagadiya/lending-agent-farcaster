"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useMiniApp } from "@neynar/react";
import { Tab } from "../../App";

/**
 * HomeTab component displays the main landing content for the mini app.
 *
 * This is the default tab that users see when they first open the mini app.
 * It provides a simple welcome message and placeholder content that can be
 * customized for specific use cases.
 *
 * @example
 * ```tsx
 * <HomeTab />
 * ```
 */
export function HomeTab() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frames = ["/1.svg", "/2.svg", "/3.svg"];
  const { setActiveTab } = useMiniApp();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 1000); // Change frame every second

    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-200px)] px-6 relative z-10">
      {/* 3D Curved Lines Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div
          className="absolute top-[20%] left-1/2 w-[200px] h-[300px] transform-gpu curved-lines-container"
          style={{
            transform: "translate(-50%, -50%)",
            perspective: "3000px",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Horizontal Curves (Latitude-like lines) */}
          {[
            {
              width: 150,
              height: 75,
              top: "30%",
              rotateX: 70,
              rotateY: 0,
              opacity: 0.5,
            },
            {
              width: 200,
              height: 100,
              top: "35%",
              rotateX: 60,
              rotateY: 5,
              opacity: 0.4,
            },
            {
              width: 250,
              height: 125,
              top: "40%",
              rotateX: 50,
              rotateY: -5,
              opacity: 0.4,
            },
            {
              width: 300,
              height: 150,
              top: "45%",
              rotateX: 40,
              rotateY: 10,
              opacity: 0.35,
            },
            {
              width: 350,
              height: 175,
              top: "50%",
              rotateX: 30,
              rotateY: -10,
              opacity: 0.3,
            },
            {
              width: 400,
              height: 200,
              top: "55%",
              rotateX: 20,
              rotateY: 15,
              opacity: 0.25,
            },
            {
              width: 450,
              height: 225,
              top: "60%",
              rotateX: 10,
              rotateY: -15,
              opacity: 0.2,
            },
          ].map((line, index) => (
            <div
              key={`horizontal-${index}`}
              className="absolute left-1/2 border border-purple-400 rounded-full"
              style={{
                width: `${line.width}px`,
                height: `${line.height}px`,
                top: line.top,
                transform: `translateX(-50%) rotateX(${line.rotateX}deg) rotateY(${line.rotateY}deg)`,
                borderColor: `rgba(139, 69, 196, ${line.opacity})`,
                transformStyle: "preserve-3d",
              }}
            />
          ))}

          {/* Diagonal Curves */}
          {[
            {
              width: 300,
              height: 150,
              rotateY: 45,
              rotateX: 45,
              rotateZ: 30,
              opacity: 0.15,
            },
            {
              width: 280,
              height: 140,
              rotateY: -45,
              rotateX: 45,
              rotateZ: -30,
              opacity: 0.15,
            },
          ].map((line, index) => (
            <div
              key={`diagonal-${index}`}
              className="absolute top-1/2 left-1/2 border border-purple-400 rounded-full"
              style={{
                width: `${line.width}px`,
                height: `${line.height}px`,
                transform: `translate(-50%, -50%) rotateY(${line.rotateY}deg) rotateX(${line.rotateX}deg) rotateZ(${line.rotateZ}deg)`,
                borderColor:
                  index === 0
                    ? `rgba(168, 85, 247, ${line.opacity})`
                    : `rgba(139, 69, 196, ${line.opacity})`,
                transformStyle: "preserve-3d",
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center w-full max-w-md mx-auto space-y-4 z-20">
        <div className="mb-4 flex justify-center items-center w-full h-max mx-auto">
          <Image
            width={200}
            height={200}
            src={frames[currentFrame]}
            alt="Animated frame"
            className="w-full h-auto transition-opacity duration-300"
          />
        </div>
        <h2 className="text-lg font-bold text-white mb-2">
          Welcome to DeFi Assistant!
        </h2>
        <p className="text-gray-400 mb-4 text-sm">
          Your AI-powered DeFi companion on Arbitrum. Interact with DeFi
          protocols using natural language!
        </p>
        <button
          onClick={() => setActiveTab(Tab.Chat)}
          className="bg-white rounded-2xl p-4 text-sm text-purple-600 text-nowrap"
        >
          start your DeFi journey!
        </button>
        <p className="text-xs text-gray-400 mt-1">Powered by Neynar 🪐</p>
      </div>
    </div>
  );
}
