import React from "react";

type Props = {
  text: string;
  highlightText: string;
};

const HighlightHeader = ({ text, highlightText }: Props) => {
  return (
    <div className="font-bold text-center text-xl sm:text-4xl       ">
      {text} <span className="text-highlight uppercase">{highlightText}</span>
    </div>
  );
};

export default HighlightHeader;
