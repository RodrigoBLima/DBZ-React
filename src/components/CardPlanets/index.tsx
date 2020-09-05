import React from "react";

import {
  Container,
  Card,
  Avatar,
  Column,
  Row,
  Name,
} from "./styles";
import { Link } from "react-router-dom";


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
       <Row className="row">
          <Column className="column">
            <Card className="card">
              <Avatar src={planet.image} />

              <Name>Nome: {planet.name}</Name>

              <Link to={`/planets/${planet._id}`}>Ver mais</Link>

            </Card>
          </Column>
        </Row>
    </Container>
  );
};

export default CardPlanets;
