import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue;})

  const setValue = storedValue => {
    setStoredValue(storedValue);
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }

  return [storedValue, setValue];
};
