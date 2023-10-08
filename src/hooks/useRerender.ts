import { useReducer } from "react";

export function useRerender() {
  const [_, rerender] = useReducer(c => c + 1, 0);

  return rerender;
}

