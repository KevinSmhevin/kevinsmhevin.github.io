import { useState, useEffect } from "react";
import { backgroundImages } from "../data/backgrounds";

export function useRotatingBackground(intervalMs = 5000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgroundImages.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs]);

  return backgroundImages[index];
}
