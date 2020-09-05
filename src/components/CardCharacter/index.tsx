import React from 'react';

import { Container } from './styles';

export interface Character {
  species: string,
  status: string,
  originPlanet: string,
  gender: string,
  _id: string,
  name: string,
  series:string,
  created: string,
  url:string,
  image: string,
  __v:number
}

interface CharacterCardProps {
  character: Character;
}

const CardCharacter: React.FC<CharacterCardProps> = ({character}) => {
  return (
    <Container>
      <h1>CardCharacter</h1>
    </Container>
  );
};

export default CardCharacter;
