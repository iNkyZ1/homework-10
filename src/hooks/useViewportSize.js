import { useState, useCallback } from "react";
import { useWindowEvent } from "./useWindowEvent";

function getViewportSize() {
  if (typeof window === "undefined") {
    return { width: 0, height: 0 };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function useViewportSize() {
  const [{ width, height }, setSize] = useState(() => getViewportSize());

  const handleResize = useCallback(() => {
    setSize(getViewportSize());
  }, []);

  useWindowEvent("resize", handleResize);

  return { width, height };
}
