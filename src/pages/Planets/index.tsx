import React from 'react';

import Layout from "../../components/Layout";
import PlanetsJson from "../../services/planets.json";
import CardPlanets from "../../components/CardPlanets";

const Planets: React.FC = () => {
  const allPlanets = PlanetsJson;

  return (
    <Layout>
      {  
        allPlanets.map((item) => (
          <CardPlanets key={item._id} planet={item} />
        ))
      }
    </Layout>
  );
};

export default Planets;
