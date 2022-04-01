import { useState, useRef, useEffect } from "react";
import { Tooltip, Button } from "@mui/material";

function useClickOutside(ref1, ref2, callback) {
  const handleClick = (e) => {
    console.log({
      ref1: ref1?.current.contains(e.target),
      ref2: ref2?.current.contains(e.target),
    });
    if (
      !ref1?.current.contains(e.target) &&
      !ref2?.current.contains(e.target)
    ) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref1, ref2, callback]);
}

export default function ImageLink({imageLink, children}) {
  const [openTooltip, setOpenTooltip] = useState(false);

  const ref1 = useRef();
  const ref2 = useRef();
  useClickOutside(ref1, ref2, () => {
    if (openTooltip) {
      setOpenTooltip(false);
    }
  });

  const handleOpenTooltip = () => {
    setOpenTooltip(true);
  };

  return (
    <Tooltip
      title={
        <div ref={ref1}>
          <img src={imageLink} alt="" />
        </div>
      }
      disableHoverListener
      open={openTooltip}
    >
      <Button ref={ref2} onClick={handleOpenTooltip}>
        {children}
      </Button>
    </Tooltip>
  );
}
