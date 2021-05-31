import { Button, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const AppBarMenus = () => {
  const [showMenus, setShowMenus] = useState(false);

  const theme = useTheme();
  const smallDisplay = useMediaQuery(theme.breakpoints.up("sm"));

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setShowMenus(false);
  }, [pathname]);

  const didShowMenu = (event) => {
    event.preventDefault();
    if (showMenus) {
      setShowMenus(false);
    } else {
      setShowMenus(true);
    }
  };

  return (
    <div
      style={{
        heigth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {!smallDisplay ? (
        <div>
          <Button onClick={didShowMenu}>
            <MenuIcon style={{ color: "#FFFFFF", fontSize: 40 }} />
          </Button>
          {showMenus && (
            <div
              style={{
                backgroundColor: "white",
                position: "absolute",
                top: "58px",
                marginLeft: "-90px",
                border: "2px solid #FF2929",
                borderRadius: "5px",
                width: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Button>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography>Início</Typography>
                </Link>
              </Button>
              <Button>
                <Link to="/contato" style={{ textDecoration: "none" }}>
                  <Typography>Contato</Typography>
                </Link>
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Button
            style={{
              height: "70px",
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#FFFFFF",
                fontSize: "40px",
              }}
            >
              <Typography>Início</Typography>
            </Link>
          </Button>
          <Button
            style={{
              height: "70px",
            }}
          >
            <Link
              to="/contato"
              style={{
                textDecoration: "none",
                color: "#FFFFFF",
                fontSize: "40px",
              }}
            >
              <Typography>Contato</Typography>
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default AppBarMenus;
