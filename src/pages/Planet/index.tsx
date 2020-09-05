import React from "react";

import { RouteComponentProps } from "react-router-dom";
import { Card, Avatar, Info, CardBody, CardContainer } from "./styles";
import planetsJson from "../../services/planets.json";
import Layout from "../../components/Layout";

type TParams = {
  id: string;
};

function Planet({ match }: RouteComponentProps<TParams>) {
  const { id } = match.params;

  const currentPlanet = planetsJson.filter((planet) => planet._id === id);

  return (
    <Layout>
      {currentPlanet.map((item) => (
        <CardContainer>
          <Card>
            <CardBody>
              <Avatar src={item.image} />
              <Info>
                <p>Nome: {item.name}</p>
                <p>Url: {item.url}</p>

                {item.residents.map((name) => (
                  <><p>Residentes: {name}</p></>
                ))}
          
                <p>Data de criação: {item.created}</p>
              </Info>
            </CardBody>
          </Card>
        </CardContainer>
      ))}
    </Layout>
  );
}

export default Planet;
