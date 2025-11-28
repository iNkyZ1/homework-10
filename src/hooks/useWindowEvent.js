import { useEffect } from "react";

export function useWindowEvent(type, listener, options) {
  useEffect(() => {}, [type, listener, options]);
}
