import React, { useState, useEffect } from "react";

export default function TypewriterTitle({
  text = "",
  className = "",
  speed = 40,
  as: Component = "h2",
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setDone(false);

    let idx = 0;
    const interval = setInterval(() => {
      idx += 1;
      setDisplayedText(text.slice(0, idx));
      if (idx >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <Component className={className}>
      <span>{displayedText}</span>
      {!done && (
        <span className="inline-block w-2.5 h-4 bg-poke-yellow animate-pulse ml-1 align-baseline" />
      )}
    </Component>
  );
}