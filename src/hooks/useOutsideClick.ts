import { RefObject, useEffect } from "react";

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
): void => {
  useEffect(() => {
    const listener = (e: Event) => {
      const el = ref?.current;
      if (!el || el.contains((e.target as Node) || null)) {
        return;
      }
      handler(e);
    };
    document.addEventListener("touchstart", listener);
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("touchstart", listener);
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
