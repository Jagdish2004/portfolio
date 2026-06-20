"use client";
import React from "react";

const OrbitingIcons = ({ items = [], radius = 140, duration = 18, iconSize = 72 }) => {
  const angleStep = (2 * Math.PI) / Math.max(items.length, 1);
  const half = iconSize / 2;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: radius * 2, height: radius * 2 }}
    >
      <div
        className="absolute inset-0 animate-[spin_linear_infinite]"
        style={{
          animationDuration: `${duration}s`,
          transformOrigin: "center center",
        }}
      >
        {items.map((item, index) => {
          const angle = index * angleStep;
          const x = radius + radius * Math.cos(angle) - half;
          const y = radius + radius * Math.sin(angle) - half;

          return (
            <a
              key={item.label}
              href={item.link}
              target={item.newTab ? "_blank" : "_self"}
              rel={item.newTab ? "noreferrer" : undefined}
              className="
                absolute flex items-center justify-center rounded-full
                bg-gradient-to-br from-green-500/20 via-emerald-600/10 to-gray-900/50
                backdrop-blur-xl
                border border-green-400/30
                shadow-[0_0_10px_rgba(34,197,94,0.6),0_0_30px_rgba(16,185,129,0.3)]
                hover:scale-125 hover:shadow-[0_0_25px_rgba(34,197,94,0.8),0_0_50px_rgba(16,185,129,0.5)]
                transition-all duration-500 ease-out
              "
              style={{ left: x, top: y, width: iconSize, height: iconSize, padding: iconSize * 0.18 }}
              aria-label={item.label}
              title={item.label}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-full h-full object-contain filter brightness-125 contrast-110 saturate-150"
              />
            </a>
          );
        })}
      </div>

      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-[spin_linear_infinite] {
          animation: spin linear infinite;
        }
      `}</style>
    </div>
  );
};

export default OrbitingIcons;
