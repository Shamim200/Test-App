import React, { useEffect, useState } from "react";

import { HiArrowUp } from "react-icons/hi";

const ToTop = () => {
  const [top, setTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setTop(true);
      } else {
        setTop(false);
      }
    });
  });
  const Scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {top && (
        <div className="arrow" onClick={Scroll}>
          <HiArrowUp />
        </div>
      )}
    </div>
  );
};
export default ToTop;
