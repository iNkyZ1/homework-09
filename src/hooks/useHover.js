import { useState, useRef, useEffect } from "react";

export function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {}, []);

  return { hovered, ref };
}
