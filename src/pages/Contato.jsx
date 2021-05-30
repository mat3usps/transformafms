import { Typography, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";

const Contato = () => {
  return (
    <Box>
      <Typography variant="h3" gutterbottom>
        Contato
      </Typography>

      <Typography variant="h5">Fábio Camisasca</Typography>
      <Typography variant="p">
        Email:
        <a href="mailto:fabiocamisasca@transformamicrocredito.com">
          {" "}
          fabiocamisasca@transformamicrocredito.com
        </a>
      </Typography>

      <Box fullWidth display="flex" justifyContent="center" marginTop="15px">
        <Box marginRight="10px">
          <Button variant="outlined" component={Link} to="/" marg>
            Voltar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contato;
