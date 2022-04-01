import { useState } from "react";
import { Tooltip, Button, ClickAwayListener } from "@mui/material";

export default function ImageLink({ imageLink, children }) {
  const [tooltipOpened, setTooltipOpened] = useState(false);

  const handleOpenTooltip = () => {
    setTooltipOpened(true);
  };

  const handleCloseTooltip = () => {
    setTooltipOpened(false);
  };

  return (
    <ClickAwayListener onClickAway={handleCloseTooltip}>
      <div>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleCloseTooltip}
          open={tooltipOpened}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={<img src={imageLink} alt="" />}
        >
          <Button onClick={handleOpenTooltip}>{children}</Button>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
}
