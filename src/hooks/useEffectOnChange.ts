import { useEffect } from 'react'

/*
  A thin wrapper around “useEffect” which
  will only fire when the value changes,
  and not on mount.
*/

import React from 'react'

function useEffectOnChange<T, L>(callback: T, deps: L[]) {
   const hasMounted = React.useRef(false)

   useEffect(() => {
      if (!hasMounted.current) {
         hasMounted.current = true
         return
      }
      callback instanceof Function && callback()
   }, deps)
}

export default useEffectOnChange
