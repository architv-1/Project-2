import React from "react";

const Navbar1 = () => {
  return (
    <nav className="text-black flex items-center gap-2 py-2 dark:text-white">
      <svg
        width="62"
        height="62"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
      >
        <ellipse
          cx="30.882"
          cy="30.803"
          rx="30.3097"
          ry="30.2769"
          fill="url(#paint0_radial_36_64)"
        ></ellipse>
        <defs>
          <radialGradient
            id="paint0_radial_36_64"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(0.572266 0.526062) rotate(44.969) scale(85.6825 85.6824)"
          >
            <stop offset="0.352001" stopColor="#090909"></stop>
            <stop offset="0.591494" stopColor="#2770EA"></stop>
            <stop offset="0.793825" stopColor="#FF7E97"></stop>
            <stop offset="0.972489" stopColor="#FF9203"></stop>
          </radialGradient>
        </defs>
      </svg>
      <p className="font-bold text-xl dark:text-white">skiper/ui</p>
      <span className="border rounded-full text-xs px-2 py-0.5 border-orange-500 mr-2 text-orange-500 dark:border-orange-400 dark:text-orange-400">
        Beta
      </span>
      <div className="flex gap-5">
        <a href="#components" className="ml-1.5 text-black hover:text-black/55 dark:text-white dark:hover:text-white/55">
          Components
        </a>
        <a href="#pricing" className="text-black hover:text-black/55 dark:text-white dark:hover:text-white/55">
          Pricing
        </a>
        <a href="#newsletter" className="text-black hover:text-black/55 dark:text-white dark:hover:text-white/55">
          Newsletter
        </a>
      </div>
    </nav>
  );
};

export default Navbar1;