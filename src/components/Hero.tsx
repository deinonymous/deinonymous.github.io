import { Typography } from "@mui/material";
import styled from "styled-components";

const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
  padding: 64px 0;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 123, 0.6), rgba(255, 0, 0, 0.4));
  background-position: center;
  background-size: cover;
  color: white;
  height: 100vh;
  min-height: 768px;
  text-align: center;

  p {
    width: 50%;
    min-width: 300px;
  }
`;

const Hero = () => {
  return (
    <HeroDiv>
      <Typography variant="h1" id="hero">
        Discover Taniti
      </Typography>
      <Typography variant="body1">
        Taniti is a small, tropical island in the Pacific. While the island has
        an area of less than 500 square miles, the terrain is varied and
        includes both sandy and rocky beaches, a small but safe harbor, lush
        tropical rainforests, and a mountainous interior that includes a small,
        active volcano. Taniti has an indigenous population of about 20,000.
        Until a recent increase in tourism, most the Tanitian economy was
        dominated by fishing or agriculture.
      </Typography>
    </HeroDiv>
  );
};
export default Hero;
