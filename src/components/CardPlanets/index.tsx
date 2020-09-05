import React from "react";

import { Container } from "./styles";

interface Planets {
  residents?: any;
  _id: string;
  created: string;
  name: string;
  url: string;
  image: string;
  __v: number;
}

interface PlanetsProps {
  planet: Planets;
}

const CardPlanets: React.FC<PlanetsProps> = ({ planet }) => {
  return (
    <Container>
      <h1>CardPlanets</h1>
    </Container>
  );
};

export default CardPlanets;
