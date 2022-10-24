export const sampleOne = <T>(arr: T[]) => {
   return arr[Math.floor(Math.random() * arr.length)];
};

export const debounce = <T extends (...args: any[]) => any>(
   fn: T,
   timeout = 500
) => {
   let timer: NodeJS.Timeout;
   return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), timeout);
      return timer;
   };
};
