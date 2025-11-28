import React from "react";
import { useViewportSize } from "./hooks/useViewportSize";

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <>
      <p>
        Width: {width}, height: {height}
      </p>
    </>
  );
}

export default Demo;
