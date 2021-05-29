import { Typography, Box, Button } from "@material-ui/core";
import StyledParagraph from "../components/StyledParagraph";

import Logo from "../assets/images/logo-empreende-ai.png";

import React from "react";

const EmpreendeAi = () => {
  return (
    <Box>
      <Box>
        <img src={Logo} alt="Empresa parceira" />
      </Box>

      <Box>
        <StyledParagraph>
          A Escola de Negócios da Periferia para Periferia: Empreende Aí é um
          Negócio de Impacto Social, fundado em 2015, com o objetivo de formar e
          capacitar novos empreendedores de territórios populares, comunidades e
          favelas, por meio da Metodologia Despertando Empreendedor presencial e
          online e de metodologias co-criadas com parceiros.
        </StyledParagraph>
        <StyledParagraph>
          Já passaram pela Empreende Aí mais de 1000 alunos, além de mais de 500
          negócios criados em diversos setores da economia, principalmente nas
          áreas da alimentação, moda, beleza, educação e tecnologia,. O
          resultado são o auxílio na geração de renda e a melhoria da economia
          local em 34 turmas do curso presencial. Em 2017, a Empreende Aí criou
          o primeiro curso online do país para empreendedores das periferias.
        </StyledParagraph>
        <StyledParagraph>
          Os patrocinadores para a execução das turmas foram: Prefeitura de São
          Paulo, Instituto Lojas Renner, ONU mulheres, Fundação Via Varejo,
          Fundação Arymax, Consulado da Mulher, British Council e Rede Jardim
          São Luís. Os empreendedores conseguiram, por meio da Empreende Aí,
          captar mais de R$ 372 mil em recursos financeiros diretamente.
        </StyledParagraph>
      </Box>

      <Box fullWidth display="flex" justifyContent="center" marginTop="15px">
        <Button variant="outlined">
          <a
            href="https://empreendeai.com.br/"
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

export default EmpreendeAi;
