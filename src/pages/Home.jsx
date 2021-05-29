import { Typography, Box, Button } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";

import React from "react";

import Logo from "../assets/images/logo.jpg";
import LogoClubedaPreta from "../assets/images/logo-clube-da-preta.png";
import LogoFirgun from "../assets/images/logo-firgun.png";
import RouteButton from "../components/RouteButton";
import LogoEmpreendeAi from "../assets/images/logo-empreende-ai.png";
import StyledParagraph from "../components/StyledParagraph";
import StyledBox from "../components/StyledDiv";
import Graphic from "../assets/images/grafico.png";

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignContent="center"
    >
      <Box m={1} display="flex" justifyContent="center" fullWidth>
        <img
          src={Logo}
          alt="Transforma"
          style={{ width: "50%", objectFit: "cover" }}
        />
      </Box>

      <Typography variant="h6" align="center">
        Uma iniciativa:
      </Typography>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        fullWidth
      >
        <StyledBox>
          <RouteButton
            linkTo="/clube-da-preta"
            src={LogoClubedaPreta}
            alt="Clube da Preta"
          />
        </StyledBox>

        <StyledBox>
          <RouteButton
            linkTo="/empreende-ai"
            src={LogoEmpreendeAi}
            alt="Empreende Aí"
          />
        </StyledBox>

        <StyledBox>
          <RouteButton linkTo="/firgun" src={LogoFirgun} alt="Firgun" />
        </StyledBox>
      </Box>

      <StyledParagraph>
        Fazemos parte do grupo de pessoas que acredita que se pode fazer mais
        pelo equilíbrio social no Brasil de forma sustentável e responsável
      </StyledParagraph>
      <StyledParagraph>
        Trabalhando na periferia e com empreendedores, percebemos que muitos têm
        o domínio sobre tudo o que está relacionado ao seu produto, mas demandam
        maior conhecimento em gestão e controle financeiro. Esses empreendedores
        precisam ter acesso à capacitação e à crédito para acelerar o seu
        negócio, ou para ter fôlego em momentos de oscilação no mercado em que
        atuam.
      </StyledParagraph>
      <StyledParagraph>
        Com essa iniciativa vamos fomentar o empreendedorismo através de
        microcrédito, treinamento de qualidade e abertura de mercado e gerar
        alternativas de apoio aos projetos ESG das empresas.
      </StyledParagraph>

      <Box display="flex" justifyContent="center" fullWidth>
        <img src={Graphic} alt="Gráfico" style={{ width: "400px" }} />
      </Box>

      <Box display="flex" justifyContent="center">
        <StyledBox>
          <Button variant="outlined">
            <a href="mailto:fabiocamisasca@transformamicrocredito.com">
              <MailIcon style={{ color: "#494843" }} />
              <Typography style={{ textDecoration: "none" }}>
                Fábio Camisasca
              </Typography>
            </a>
          </Button>
        </StyledBox>
      </Box>
    </Box>
  );
};

export default Home;
