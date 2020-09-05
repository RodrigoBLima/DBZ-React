import React from "react";

import {
  Container,
  Card,
  Avatar,
  Column,
  Row,
  Name,
  Planet,
} from "./styles";

import { Link } from "react-router-dom";


export interface Character {
  species: string;
  status: string;
  originPlanet: string;
  gender: string;
  _id: string;
  name: string;
  series: string;
  created: string;
  url: string;
  image: string;
  __v: number;
}

interface CharacterCardProps {
  character: Character;
}

const CardCharacter: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Container>
      <>
        <Row className="row">
          <Column className="column">
            <Card className="card">
              <Avatar src={character.image} />

              <Name>Nome: {character.name}</Name>
              <Planet>Planeta: {character.originPlanet}</Planet>

              <Link to={`/character/${character._id}`}>Ver mais</Link>

            </Card>
          </Column>
        </Row>
      </>
    </Container>
  );
};

export default CardCharacter;
