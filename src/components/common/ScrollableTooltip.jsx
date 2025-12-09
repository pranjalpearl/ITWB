"use client";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ScrollableTooltip = ({ content, children }) => {
  const tooltipWrapper = (
    <div
      className="
        w-80 max-h-48           
        overflow-y-auto    
        text-left text-xs p-3 
        bg-white text-gray-800
        rounded-lg shadow-lg
        scrollbar-thin 
        scrollbar-thumb-gray-500 
        scrollbar-track-gray-100
      "
    >
      <p className="whitespace-pre-wrap leading-relaxed">{content}</p>
    </div>
  );

  return (
    <Tippy
      content={tooltipWrapper}
      placement="top"
      interactive={true}
      appendTo={() => document.body}
    >
      <span>{children}</span>
    </Tippy>
  );
};

export default ScrollableTooltip;
