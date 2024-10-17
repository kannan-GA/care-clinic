// // src/components/ScrollToTop.js
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Save the current scroll position
    const handleScroll = () => {
      localStorage.setItem("scrollPosition", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Scroll to the top when the pathname changes
    window.scrollTo(0, 0);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
