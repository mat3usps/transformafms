import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { styled } from "@material-ui/core/styles";

import React from "react";

import Logo from "./Logo";
import StyledDiv from "../components/StyledDiv";
import AppBarMenus from "../components/AppBarMenus";

const PixAppBar = styled(AppBar)({
  background: "linear-gradient(45deg, #494843 30%, #FF2929 90%)",
  color: "#000000",
  height: 60,
});

const StyledAppBar = () => {
  return (
    <div>
      <PixAppBar position="relative">
        <Toolbar>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100vw",
            }}
          >
            <StyledDiv>
              <Link to="/">
                <Logo />
              </Link>
            </StyledDiv>
            <AppBarMenus />
          </div>
        </Toolbar>
      </PixAppBar>
    </div>
  );
};

export default StyledAppBar;
