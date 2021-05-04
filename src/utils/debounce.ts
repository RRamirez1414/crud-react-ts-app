const debounce = (func: (...args: any[]) => any, ms = 1000) => {
  let timeoutId: ReturnType<typeof setTimeout> //returnType is function
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, args), ms)
  }
}

export default debounce
