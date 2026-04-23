import { RefObject, useEffect } from "react";

function useOnClickOutside <T extends HTMLElement = HTMLElement> (
  ref: RefObject<T>,
  handler: (e : MouseEvent) => void
): void {
  useEffect(() => {

    const listener = (e : MouseEvent) => {
      const el = ref?.current;
      if (!el || el.contains(e.target as Node)) {
        return;
      };
      handler(e);
    };
    document.addEventListener('click', listener);
    return () => document.removeEventListener('click', listener);

  }, [ref, handler]);
};

export default useOnClickOutside;