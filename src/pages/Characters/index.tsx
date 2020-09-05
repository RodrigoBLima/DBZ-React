import React, {useState, useEffect} from 'react';

import { Container } from './styles';
import Layout from '../../components/Layout';
import api from '../../services/api';

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
      const response = api.get("character")

      console.log("**** ",response," **** ")

  }, [])

  return (
    <Layout>
      <Container>

      </Container>
    </Layout>
  );
};

export default Characters;
