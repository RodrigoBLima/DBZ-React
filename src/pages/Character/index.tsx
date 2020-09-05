import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Card, Avatar, Info, CardBody, CardContainer } from "./styles";
import charactersJson from "../../services/character.json";
import Layout from "../../components/Layout";
import getFormatedDate from '../../utils/index'

type TParams = {
  id: string;
};

function Character({ match }: RouteComponentProps<TParams>) {
  const { id } = match.params;

  const currentCharacter = charactersJson.filter(
    (character) => character._id === id
  );
  return (
    <Layout>
      {currentCharacter.map((item) => (
        <CardContainer key={item._id}>
          <Card>
            <CardBody>
              <Avatar src={item.image} />
              <Info>
                <p>Nome: {item.name}</p>
                <p>Planeta: {item.originPlanet}</p>
                <p>Gênero: {item.gender}</p>
                <p>Status: {item.status}</p>
                <p>Série: {item.series}</p>
                <p>Data de criação: {getFormatedDate(item.created)}</p>
              </Info>
            </CardBody>
          </Card>
        </CardContainer>
      ))}
    </Layout>
  );
}

export default Character;
