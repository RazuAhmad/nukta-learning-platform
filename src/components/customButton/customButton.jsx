import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({
  children,
  variant,
  href,
  className = "no-underline",
}) => {
  return (
    <Button variant={variant} className={className} href={href}>
      {children}
    </Button>
  );
};

export default CustomButton;
