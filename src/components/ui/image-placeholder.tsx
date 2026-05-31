import React from "react";

export function ImagePlaceholder({
  alt = "Image placeholder",
  className = "",
}: {
  alt?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`w-full h-64 sm:h-72 lg:h-80 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-10 h-10 opacity-80"
      >
        <rect x="3" y="4" width="18" height="14" rx="2" ry="2" />
        <path d="M3 14l4-4 4 4 4-4 6 6" />
      </svg>
      <span className="ml-3 text-sm font-semibold">{alt}</span>
    </div>
  );
}

export default ImagePlaceholder;
