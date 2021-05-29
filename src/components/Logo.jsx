import { withStyles } from "@material-ui/core/styles";

import React from "react";

import LogoImage from "../assets/images/logo.jpg";

const styles = {
  logo: {
    margin: 5,
    height: 50,
    borderRadius: "7px",
    objectFit: "cover",
  },
};

const Logo = ({ classes }) => {
  return <img src={LogoImage} className={classes.logo} alt="logo" />;
};

export default withStyles(styles)(Logo);
