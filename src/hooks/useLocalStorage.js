import { useState } from 'react'

// Behaves like useState, but the value is persisted in localStorage under `key`
export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : defaultValue
  })

  const setAndPersist = (newValue) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, setAndPersist]
}