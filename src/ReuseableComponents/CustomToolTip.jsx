import React from "react";
import { Tooltip } from "antd";
const CustomTooltip = ({
  children,
  iconTooltipTitle,
  iconTooltipPlacement,
}) => (
  <Tooltip title={iconTooltipTitle} placement={iconTooltipPlacement}>
    {children}
  </Tooltip>
);
export default CustomTooltip;
