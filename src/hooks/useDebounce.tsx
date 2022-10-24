import { useEffect, useRef } from 'react';

export const useDebounce = <T,>(fn: () => void, deps: T[]) => {
   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

   const debouncedFunction = () => {
      clearTimeout(timeoutRef.current || undefined);
      timeoutRef.current = setTimeout(fn, 500);
   };

   useEffect(debouncedFunction, [...deps, fn]);
};
