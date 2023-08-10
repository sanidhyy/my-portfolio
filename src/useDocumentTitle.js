// Changes title on each page

import { useEffect, useRef } from "react";

// use document title
const useDocumentTitle = (title, prevailOnMount = false) => {
  // default title
  const defaultTitle = useRef(document.title);

  // set new document title
  useEffect(() => {
    document.title = title;
  }, [title]);

  // maintain same title even if component using this hook is unmounted
  useEffect(
    () => () => {
      if (!prevailOnMount) {
        document.title = defaultTitle.current;
      }
    },
    [prevailOnMount]
  );
};

export default useDocumentTitle;
