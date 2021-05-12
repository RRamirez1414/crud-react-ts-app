import React, { useRef, useEffect } from 'react'

/**
 * custom debounce hook
 * @param func: callback function to execute after timeout
 * @param delay: amount of ms to delay
 * @param dep: dependencies to trigger useEffect in custom hook
 */
const useFormInputDebounce = (
  func: React.EffectCallback,
  delay: number | null,
  dep: string[] | boolean[] | number[]
) => {
  //create two useRef mutable objects for imperative reading
  const timeoutRef = useRef<number | null>(null)
  const callback = useRef(func)

  //update callback reference with the latest function argument
  useEffect(() => {
    callback.current = func
  }, [func])

  //set up the timeout when the component when the component mounts, execute callback
  //clear the the timer when the component unmounts
  //triggered only when dependency arguments change
  useEffect(() => {
    if (typeof delay === 'number') {
      timeoutRef.current = window.setTimeout(() => {
        callback.current()
      }, delay)
    }
    return () => window.clearTimeout(timeoutRef.current || 0)
  }, [...dep])

  //return a function that clears the timeout, when assigned to a variable and called
  return () => {
    window.clearTimeout(timeoutRef.current || 0)
  }
}

export { useFormInputDebounce }
