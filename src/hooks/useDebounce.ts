import { useEffect, useState } from "react"

const useDebounce = <T>(value: T) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, 500)
    return () => clearTimeout(timer)
  }, [value])
  return debouncedValue || undefined;
}

export default useDebounce;