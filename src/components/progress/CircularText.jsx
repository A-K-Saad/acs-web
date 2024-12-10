import React from "react";

const CircularText = ({ color = "#621BC1", text, children }) => {
  return (
    <div className="relative inline-block rounded-full">
      <div className="relative z-10 h-28 w-28 origin-center animate-spin-slow select-none text-2xl will-change-transform">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          fill={color}
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          clipRule="evenodd"
          viewBox="0 0 200 200"
        >
          <path
            id="c1"
            fill="none"
            d="M179.998,100.517L180,100C180,77.923 171.038,57.923 156.557,43.443C142.19,29.075 122.388,20.14 100.517,20.002L100,20C55.847,20 20,55.847 20,100C20,144.153 55.847,180 100,180C143.981,180 179.72,144.432 179.998,100.517Z"
            transform="rotate(50 100 100)"
          />
          <text dx="0" className="lowercase">
            <textPath textLength="490" xlinkHref="#c1">
              {text}&nbsp;
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  );
};

export default CircularText;
