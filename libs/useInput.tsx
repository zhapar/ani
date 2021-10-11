import { useState, useEffect } from 'react'

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value)
      },
      reset: () => setValue(''),
    },
  }
}
