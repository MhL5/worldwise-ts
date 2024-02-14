import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

type UseLocalStorageType = (params: {
  initialState: unknown;
  key: string;
}) => [unknown, Dispatch<SetStateAction<unknown>>];

const useLocalStorage: UseLocalStorageType = function ({ initialState, key }) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

export { useLocalStorage };
