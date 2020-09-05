import React from "react";

import Layout from "../../components/Layout";
import charactersJson from "../../services/character.json";
import CardCharacter from "../../components/CardCharacter";

const Characters: React.FC = () => {
  const allCharacters = charactersJson;

  return (
    <Layout>
      {allCharacters.length > 0 ? (
        allCharacters.map((item) => (
          <CardCharacter key={item._id} character={item} />
        ))
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default Characters;
