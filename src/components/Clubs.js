"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function Clubs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <main
      ref={sectionRef}
      className={`container mx-auto px-4 pt-32 text-center transition-all duration-700 ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
    >
      <h2 className="text-5xl font-bold text-gray-300 mb-16">Listed Clubs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Media Club */}
        <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-700 bg-black/50 shadow-lg group">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-950 to-blue-400 flex items-center justify-center transition-transform group-hover:scale-110">
            <Image
              src="/mc.png"
              alt="Media Club"
              width={48}
              height={48}
              className="invert"
            />
          </div>
          <h3 className="text-xl text-gray-300">Media Club</h3>
        </div>

        {/* IEEE */}
        <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-700 bg-black/50 shadow-lg group">
          <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center transition-transform group-hover:scale-110">
            <Image
              src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/ieee.svg"
              alt="IEEE"
              width={48}
              height={48}
              className="invert"
            />
          </div>
          <h3 className="text-xl text-gray-300">IEEE</h3>
        </div>

        {/* ACM */}
        <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-700 bg-black/50 shadow-lg group">
          <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center transition-transform group-hover:scale-110">
            <Image
              src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/acm.svg"
              alt="ACM"
              width={48}
              height={48}
              className="invert"
            />
          </div>
          <h3 className="text-xl text-gray-300">ACM</h3>
        </div>

        {/* Cloud Club */}
        <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-700 bg-black/50 shadow-lg group">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-300 to-green-300 flex items-center justify-center transition-transform group-hover:scale-110">
            <Image
              src="/cc.png"
              alt="Cloud Club"
              width={64}
              height={64}
              className="invert"
            />
          </div>
          <h3 className="text-xl text-gray-300">Cloud Club</h3>
        </div>
      </div>
    </main>
  );
}

export default Clubs;
