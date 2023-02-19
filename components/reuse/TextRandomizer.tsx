"use client"
import { useEffect, useRef, useState } from "react";

const origin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letters = origin.toLowerCase();

interface Props {
  text: string;
}

const TextRandomizer: React.FC<Props> = ({ text }) => {
  const [innerText, setInnerText] = useState<string>(text);
  const intervalRef = useRef<number | null>(null);

  const handleMouseOver = () => {
    let iteration = 0;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      setInnerText((innerText) =>
        innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <span onMouseOver={handleMouseOver} data-value={text}>
      {innerText}
    </span>
  );
};

export default TextRandomizer;
