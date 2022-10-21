import { useRef } from 'react';

export const useDebounce = (fn: () => void) => {
   const timeoutRef = useRef<NodeJS.Timeout>(null);

   const debouncedFunction = () => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(fn, 500);
   };
};
