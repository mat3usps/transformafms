import { Box, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import React from "react";

const StyledBox = styled(Box)({
  background: "linear-gradient(45deg, #494843 30%, #FF2929 90%)",
  color: "#ffffff",
  height: 20,
});

const BottomLine = () => {
  return (
    <StyledBox display="flex" justifyContent="center">
      <Typography variant="p">2021 Copyright. </Typography>
    </StyledBox>
  );
};

export default BottomLine;
