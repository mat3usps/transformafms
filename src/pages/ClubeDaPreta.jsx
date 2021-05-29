import { Typography, Box, Button } from "@material-ui/core";
import StyledParagraph from "../components/StyledParagraph";

import Logo from "../assets/images/logo-clube-da-preta.png";

import React from "react";

const ClubeDaPreta = () => {
  return (
    <Box>
      <Box>
        <img src={Logo} alt="Empresa parceira" />
      </Box>

      <Box>
        <StyledParagraph>
          A plataforma de vendas no modelo de clube de assinaturas e
          marketplace, Clube da Preta é um negocio de impacto social que visa
          conceder acesso ao mercado para pequenos empreendedores negros que em
          sua maioria estão em territórios populares, comunidades e ou favelas,
          conectando-os com clientes e grandes marketplaces.{" "}
        </StyledParagraph>
        <StyledParagraph>
          Através de uma plataforma de venda intuitiva e simples, o empreendedor
          pode mostrar e vender seus produtos para um público que, além de
          consumidor, é entusiasta de movimentos que beneficiam pequenos
          empreendedores. O modelo de negócios implantado pelo Clube da Preta
          contempla os empreendedores com pequenos aportes de um valor médio de
          R$1.300,00 na troca de produtos.
        </StyledParagraph>
        <StyledParagraph>
          Durante 4 anos de existência o Clube da Preta distribuiu mais de
          10.000 produtos de 575 pequenos empreendedores negros diferentes.
          Parceiros nessa evolução são: Facebook, Google For Startups,
          Artemisia, Prefeitura da cidade de São Paulo e WaM.
        </StyledParagraph>
      </Box>

      <Box fullWidth display="flex" justifyContent="center" marginTop="15px">
        <Button variant="outlined">
          <a
            href="https://www.clubedapreta.com.br/"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography>Visite Nosso Site</Typography>
          </a>
        </Button>
      </Box>
    </Box>
  );
};

export default ClubeDaPreta;
