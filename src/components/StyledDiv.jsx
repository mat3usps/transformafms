import { Box } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

import React from "react";

const Styles = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  opacity: "0.8",
  transition: "0.5s",
  margin: "10px",
  width: "fit-content",
  "&:hover": {
    opacity: "1",
    transform: "scale(1.1)",
  },
});

const StyledBox = ({ children }) => {
  return <Styles>{children}</Styles>;
};

export default StyledBox;
