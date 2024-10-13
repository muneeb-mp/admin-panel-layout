import React from "react";
import { debounce } from "../utils/common";

export const useIsBelowWidth = (width: number = 768, delay: number = 100) => {
  const [isBelowWidth, setIsBelowWidth] = React.useState(
    window.innerWidth < width
  );

  React.useEffect(() => {
    const resizeListener = debounce(() => {
      setIsBelowWidth(window.innerWidth < width);
    }, delay);

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [width, delay]);

  return { isBelowWidth };
};
