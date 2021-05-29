import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import React from "react";

const RouteButton = ({ src, alt, linkTo }) => {
  return (
    <Link to={linkTo}>
      <Button>
        <img src={src} alt={alt} style={{ width: "90%", objectFit: "cover" }} />
      </Button>
    </Link>
  );
};

export default RouteButton;
