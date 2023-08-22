// Export reusable utilities to use it anywhere else
// Don't remove anything from here (if not sure)

import { useState, useEffect } from "react";

// Lazy Load Image
export const useLazyLoadImage = (src) => {
  const [sourceLoaded, setSourceLoaded] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded;
};
