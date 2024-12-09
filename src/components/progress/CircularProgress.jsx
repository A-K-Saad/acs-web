import React from "react";
import BackToTopBtn from "./BackToTopBtn";

const CircularProgress = ({ progress }) => {
  const strokeWidth = 1;
  const radius = 30;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed right-6 bottom-6 z-40 cursor-pointer">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="relative -rotate-90"
      >
        <circle
          stroke="hsla(204,2%,59%,.3)"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#212121"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <BackToTopBtn />
    </div>
  );
};

export default CircularProgress;
