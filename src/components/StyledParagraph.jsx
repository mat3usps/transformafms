import React from "react";

const StyledParagraph = ({ children }) => {
  return (
    <p
      style={{
        marginBottom: "5px",
        fontFamily: "Poppins",
        textAlign: "justify",
      }}
    >
      {children}
    </p>
  );
};

export default StyledParagraph;
