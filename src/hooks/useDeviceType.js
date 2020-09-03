import { useState, useEffect, useRef } from "react";

export const useDeviceType = () => {
  const mobile_breakpoint = parseInt(process.env.REACT_APP_MOBILE_BREAKPOINT);
  const [isMobile, setIsMobile] = useState(true);
  let isCurrent = useRef(true);

  useEffect(() => {
    const updateDeviceType = () => {
      if (isCurrent.current) {
        setIsMobile(window.innerWidth < mobile_breakpoint ? true : false);
      }
    };
    //update device width
    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);

    return () => {
      //undo event listener
      window.removeEventListener("resize", updateDeviceType);
    };
  }, [isMobile, mobile_breakpoint]);

  return isMobile;
};
