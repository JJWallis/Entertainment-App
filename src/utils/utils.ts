export const sampleOne = <T>(arr: T[]) => {
   return arr[Math.floor(Math.random() * arr.length)]
}

export const debounce = (fn: any, timeout = 500) => {
   let timer: NodeJS.Timeout
   return (...args: any) => {
      clearTimeout(timer)
      timer = setTimeout(() => fn(...args), timeout)
      return timer
   }
}
